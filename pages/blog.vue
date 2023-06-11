<template >
    <div>
        <div class="bg-white dark:bg-black md:bg-slate-100">

            <CommonNavbar :switch-to-persian="switchToPersian" :switch-to-english="switchToEnglish" :state="state" />
            <div class="dark:bg-black bg-slate-100">
                <div class="2xl:mx-36 mx-4 mb-16">
                    <BlogSlider :state="state" />
                    <BlogSuggests :state="state" />

                </div>
                <BlogPostsSection :state="state" />
                <CommonFooter :state="state" />
            </div>


        </div>
    </div>
</template>
<script setup>
useHead({
    htmlAttrs: {
        ref: "darkSwitchRef"
    },
    title: 'MoneyEx | Blog',
})
useHead({
    bodyAttrs: {
        class: "dark:bg-black"
    }
})
onMounted(() => {
    watchEffect(() => {
        if (process.client) {
            if (localStorage.theme) {
                if (
                    localStorage.theme === 'dark' ||
                    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
                ) {
                    useHead({
                        htmlAttrs: {
                            class: 'dark'
                        },
                    })
                } else {
                    useHead({

                        htmlAttrs: {
                            class: ''
                        },
                    })
                }
            }
        }
    });
});


const state = reactive({
    lang: false,
    markets: "بازارها",
    trade: 'تبدیل ارز',
    userManual: 'راهنمای استفاده',
    easyShopping: 'خرید آسان',
    blog: 'بلاگ',
    main: 'صفحه اصلی',
    about: 'درباره ی ما',
    contact: 'تماس با ما',
    rules: 'قوانین و مقررات',
    back: 'بازگشت',
    userPanel: 'حساب کاربری',
    footerText1: 'درباره ی مانی اکس',
    footerText2: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده',
    footerText3: "دسترسی های سریع",
    footerText4: "درباره ما",
    footerText5: "تماس با ما",
    footerText6: "حساب کاربری",
    footerText7: "قوانین و مقررات",
    footerText8: "خدمات ما",
    footerText9: "تبدیل ارز",
    footerText10: "بلاگ",
    footerText11: "ارتباط با ما",
    footerText12: "استان تهران، شهر تهران، خیابان مرکزی ساختمان مرکزی، پلاک 7",
    footerText13: "کلیه حقوق این سایت محفوظ و متعلق به مانی اکس می باشد",
    hash: '#fa',
    postSlideText1: 'مجله اینترنتی مانی اکسـ',
    postSlideText2: 'جدیدترین اخبار و مطالب حوزه مالی، رمز ارز و ترید',
    seeAll: 'نمایش همه',
    postTitle: 'آموزش جامع بازار رمز ارز',
    postTime: '12 ساعت قبل',
    summery: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
    sliderText1: ' اخبار ارز های دیجیتال',
    sliderText2: "بازار رمز ارزها از گذشته تا امروز، گزینه‌ای جذاب برای سرمایه‌گذاران بوده است تا با استفاده از روش‌های تحلیل بیت‌ کوین و سایر رمز ارزها و سرمایه‌گذاری و خرید بیت کوین ،به کسب سودهای زیاد و چند برابر کردن دارایی خود بپردازند اما نباید فراموش کرد که این بازار نیز مانند همه بازارهای مالی، ریسک‌ها و چالش‌های خود را دارد و به همان اندازه که سودهای بالایی را نصیب سرمایه‌گذاران خود می‌کند، ممکن است ضررهای جبران‌ناپذیری را هم به افراد وارد کند بازار رمز ارزها از گذشته تا امروز، گزینه‌ای جذاب برای سرمایه‌گذاران بوده است تا با استفاده",
    sliderText3: "ادامه مطلب",
    postSecText1: "انتخاب دسته بندی",
    postSecText2: "136 مورد برای نمایش",
    postSecText3: "اخبار رمز ارز",
    postSecText4: "NFT",
    postSecText5: "آموزش",
    postSecText6: "رویدادها",
    postSecText7: "مقالات",
    postSecText8: "قیمت",
    nextpage: 'صفحه بعد',
    prevpage: 'صفحه قبل'


})

const switchToPersian = () => {
    localStorage.hash= '#fa';
    window.location.hash = "#fa";
    state.lang = true;
    state.markets = "بازار ها";
    state.trade = "تبدیل ارز";
    state.userManual = "راهنمای استفاده";
    state.easyShopping = "خریدآسان";
    state.blog = "بلاگ";
    state.main = "صفحه ی اصلی";
    state.about = "درباره ما";
    state.contact = "تماس با ما";
    state.rules = "قوانین و مقررات";
    state.back = "بازگشت";
    state.userPanel = "حساب کاربری";
    state.footerText1 = 'درباره ی مانی اکس';
    state.footerText2 = 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده';
    state.footerText3 = "دسترسی های سریع";
    state.footerText4 = "درباره ما";
    state.footerText5 = "تماس با ما";
    state.footerText6 = "حساب کاربری";
    state.footerText7 = "قوانین و مقررات";
    state.footerText8 = "خدمات ما";
    state.footerText9 = "تبدیل ارز";
    state.footerText10 = "بلاگ";
    state.footerText11 = "ارتباط با ما";
    state.footerText12 = "استان تهران، شهر تهران، خیابان مرکزی ساختمان مرکزی، پلاک 7";
    state.footerText13 = "کلیه حقوق این سایت محفوظ و متعلق به مانی اکس می باشد";
    state.hash = '#fa';
    state.postSlideText1 = 'مجله اینترنتی مانی اکسـ';
    state.postSlideText2 = 'جدیدترین اخبار و مطالب حوزه مالی، رمز ارز و ترید';
    state.seeAll = 'نمایش همه';
    state.postTitle = 'آموزش جامع بازار رمز ارز';
    state.postTime = '12 ساعت قبل';
    state.summery = 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ';
    state.sliderText1 = "اخبار ارز های دیجیتال";
    state.sliderText2 = "بازار رمز ارزها از گذشته تا امروز، گزینه‌ای جذاب برای سرمایه‌گذاران بوده است تا با استفاده از روش‌های تحلیل بیت‌ کوین و سایر رمز ارزها و سرمایه‌گذاری و خرید بیت کوین ،به کسب سودهای زیاد و چند برابر کردن دارایی خود بپردازند اما نباید فراموش کرد که این بازار نیز مانند همه بازارهای مالی، ریسک‌ها و چالش‌های خود را دارد و به همان اندازه که سودهای بالایی را نصیب سرمایه‌گذاران خود می‌کند، ممکن است ضررهای جبران‌ناپذیری را هم به افراد وارد کند بازار رمز ارزها از گذشته تا امروز، گزینه‌ای جذاب برای سرمایه‌گذاران بوده است تا با استفاده";
    state.sliderText3 = "ادامه مطلب";
    state.postSecText1= "انتخاب دسته بندی";
    state.postSecText2= "136 مورد برای نمایش";
    state.postSecText3= "اخبار رمز ارز";
    state.postSecText4= "NFT";
    state.postSecText5= "آموزش";
    state.postSecText6= "رویدادها";
    state.postSecText7= "مقالات";
    state.postSecText8= "قیمت";
    state.nextpage= 'صفحه بعد';
    state.prevpage='صفحه قبل';
    useHead({
        bodyAttrs: {
            dir: 'rtl'
        },
    })
}
const switchToEnglish = () => {
    localStorage.hash= '#en';
    window.location.hash = "#en";
    state.lang = false;
    state.markets = "Markets";
    state.trade = "Trade";
    state.userManual = "User Manual";
    state.easyShopping = "Easy Buy";
    state.blog = "Blog";
    state.main = "Home";
    state.about = "About Us";
    state.contact = "Contact Us";
    state.rules = "Terms and Conditions";
    state.back = "Back";
    state.userPanel = "User Panel";
    state.footerText1 = "About MoneyEx";
    state.footerText2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque In egestas erat imperdiet sed euismod nisi porta lorem mollis Morbi tristique senectus et netus Mattis pellentesque id nibh tortor id aliquet lectus proin";
    state.footerText3 = "Quick Accesses";
    state.footerText4 = "AboUT Us";
    state.footerText5 = "Contact Us";
    state.footerText6 = "User Panel";
    state.footerText7 = "Terms and Conditions";
    state.footerText8 = "Our Services";
    state.footerText9 = "Exchange";
    state.footerText10 = "Blog";
    state.footerText11 = "Contact Us";
    state.footerText12 = "Tehran province, Tehran city, st Central building Central, no.7";
    state.footerText13 = "All rights of this site are reserved and belong to MoneyEx";
    state.hash = '#en';
    state.postSlideText1 = 'MoneyEx online magazine';
    state.postSlideText2 = 'The latest news and content in the field of finance, cryptocurrency and trade';
    state.seeAll = 'See All';
    state.postTitle = 'Comprehensive education of the cryptocurrency market';
    state.postTime = '12 hours ago';
    state.summery = 'Lorem Ipsum is a mock text with an unintelligible';
    state.sliderText1 = "Digital currency news";
    state.sliderText2 = "From the past to today, the cryptocurrency market has been an attractive option for investors to earn large profits and multiply their assets by using the methods of analyzing Bitcoin and other cryptocurrencies and investing and buying Bitcoin, but we should not forget that this The market, like all financial markets, has its own risks and challenges, and as much as it brings high profits to its investors, it may also cause irreparable losses to people. The cryptocurrency market has been an attractive option for investors since the past until today up with use";
    state.sliderText3 = "Read more";
    state.postSecText1= "Select Category";
    state.postSecText2= "136 items to display";
    state.postSecText3= "Cryptocurrency News";
    state.postSecText4= "NFT";
    state.postSecText5= "Education";
    state.postSecText6= "events";
    state.postSecText7= "articles";
    state.postSecText8= "Price";
    state.nextpage= 'Next page';
    state.prevpage='Previous page';
    useHead({
        bodyAttrs: {
            dir: 'ltr'
        }

    })
}
onMounted(() => {
    var hash = localStorage.hash;
    if (hash) {
        if (hash === "#en") {
            switchToEnglish();
        }
        else {
            switchToPersian();
        }
    }
    else {
        switchToPersian();
    }
});

        // پایان بخش تغییر زبان
</script>
