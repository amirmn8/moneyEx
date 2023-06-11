<template >
    <div class="bg-white dark:bg-black h-screen flex items-center flex-col justify-center gap-48">
        <div class="flex flex-col lg:flex-row justify-center items-center  gap-32 xl:mr-32 mt-48">
            <img class="dark:hidden" src="../assets/images/Repair-image.png" alt="">
            <img class="hidden dark:block" src="../assets/images/Repair-image2.png" alt="">
            <div class="flex flex-col gap-4 items-center text-center lg:text-start dark:text-white">
                <p class="text-ExYellow font-bold">504 Gateway Timeout</p>
                <p class="font-bold text-2xl">مشکلی پیش آمده به زودی باز میگردیم</p>
                <p class="w-2/3">کاربر گرامی، کارشناسان فنی مانی اکس درحال آماده سازی وبسایت می باشند
                    و به زودی وبسایت در دسترس خواهد بود</p>
                <p class="w-2/3">بعد از چند ساعت مجدد امتحان کنید در صورت مشاهده مجدد خطا با تیم
                    پشتیبانی تماس بگیرید</p>
            </div>
        </div>
        <div class="flex mt-auto pb-12 ">
            <div class="flex mt-auto gap-2">
                <div class="flex items-center gap-3 font-bold text-black dark:text-white">
                    <img src="../assets/icons/phone_in_talk.png" alt="">
                    <p>091212121212</p>
                </div>
                <div class="flex items-center gap-3 font-bold text-black dark:text-white">
                    <img src="../assets/icons/Email.png" alt="">
                    <p>support@moneyex.org</p>
                </div>
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


})

const switchToPersian = () => {
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
    state.hash = '#fa',

        useHead({
            bodyAttrs: {
                dir: 'rtl'
            },
        })
}
const switchToEnglish = () => {
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
    state.hash = '#en'


    useHead({
        bodyAttrs: {
            dir: 'ltr'
        }

    })
}
onMounted(() => {
    var hash = window.location.hash;
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
