<template >
    <div>
        <div class="bg-white dark:bg-black md:bg-slate-100">

            <CommonNavbar :switch-to-persian="switchToPersian" :switch-to-english="switchToEnglish" :state="state" />
            <div class="dark:bg-black bg-white dark:text-white dark:fill-white">
                <div class="2xl:mx-36 mx-4 mb-16">
                    <div class="flex flex-col gap-12 pb-32">
                        <div class="flex justify-center">
                            <img class="rounded-xl mt-10" src="../assets/images/Image4.png" alt="">
                        </div>
                        <div class="flex justify-between md:flex-row flex-col gap-4">
                            <div class="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="23.149" height="25.5"
                                    viewBox="0 0 23.149 25.5">
                                    <path id="home"
                                        d="M162.17,256.5a2.177,2.177,0,0,1-2.17-2.17V240.223a2.155,2.155,0,0,1,.231-.977,2.081,2.081,0,0,1,.638-.76l9.4-7.053a2.307,2.307,0,0,1,.627-.326,2.154,2.154,0,0,1,.682-.109,2.109,2.109,0,0,1,.677.109,2.26,2.26,0,0,1,.618.326l9.4,7.053a2.081,2.081,0,0,1,.638.76,2.155,2.155,0,0,1,.231.977V254.33a2.177,2.177,0,0,1-2.17,2.17h-6.511V246.372h-5.787V256.5Z"
                                        transform="translate(-160 -231)" />
                                </svg>
                                <p v-text="state.Text1"></p>
                            </div>
                            <div v-text="state.Text2" class="mr-8 md:mr-0">
                            </div>
                        </div>
                        <div>
                            <p v-text="state.Text3" class="text-2xl font-bold"></p>
                        </div>
                        <div>
                            <p v-text="state.Text4">
                            </p>
                        </div>
                        <div>
                            <p v-text="state.Text5" class="text-lg font-bold">
                            </p>
                        </div>
                        <div>
                            <p v-text="state.Text6"></p>
                        </div>
                        <div class="flex justify-center">
                            <img src="../assets/images/Image6.png" alt="">
                        </div>
                        <div>
                            <p v-text="state.Text7">
                            </p>
                        </div>
                        <div>
                            <p v-text="state.Text6" class="text-lg font-bold">
                            </p>
                        </div>
                        <div>
                            <p v-text="state.Text7"></p>
                        </div>
                    </div>
                    <div class="relative mb-16">
                        <p v-text="state.Text8"
                            class="text-md md:text-3xl  font-bold absolute right-6 lg:top-8 md:-top-4 mt-16 lg:mt-0 dark:text-white">
                        </p>

                        <p class="flex items-center gap-2 text-teal-400 absolute left-6 lg:top-8 top-16 font-light text-sm">
                            <span v-text="state.seeAll"></span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="5.863" height="10.256"
                                viewBox="0 0 5.863 10.256">
                                <path id="Arrow-left"
                                    d="M1.768,5.129,5.648,9.007A.733.733,0,0,1,4.61,10.042L.213,5.648A.731.731,0,0,1,.192,4.638L4.607.214A.733.733,0,0,1,5.645,1.249Z"
                                    transform="translate(0)" fill="#00c0af" />
                            </svg>
                        </p>
                    </div>



                    <section class="flex items-center justify-center w-full pt-12 sm:py-8 px-4">
                        <div style="direction: ltr;" class="w-full relative flex items-center justify-center">

                            <div class="w-full mx-auto overflow-auto no-scrollbar">
                                <div id="slider"
                                    class=" flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                    <div v-for="i in 10" class="flex flex-shrink-0 relative md:w-540 w-328">
                                        <img class="rounded-lg" src="../assets/images/post.png" alt="">
                                        <div
                                            class="bg-ExGreen opacity-90 text-white px-4 py-2 gap-1 absolute bottom-0 rounded-b-2xl w-full">
                                            <div class="flex justify-between items-center">
                                                <p v-text="state.postTitle" class="text-base font-bold"> </p>
                                                <p v-text="state.postTime" class="text-sm text-gray-300"> </p>
                                            </div>
                                            <p v-text="state.summery" class="text-base hidden md:flex">
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>



                        </div>

                    </section>

                    <section style="direction: rtl;" class="flex justify-between  px-24 mt-4">
                        <button @click="goNext" id="next"><img class="rotate-180" src="../assets/icons/next.png"
                                alt=""></button>
                        <button @click="goPrev" id="perv"> <img src="../assets/icons/next.png" alt=""></button>
                    </section>


                </div>

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
    title: 'MoneyEx | Post Title',
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
let defaultTransform = 0;
function goNext() {
    defaultTransform = defaultTransform - 398;
    var slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7) defaultTransform = 0;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}
function goPrev() {
    var slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
    else defaultTransform = defaultTransform + 398;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}

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
    Text1: 'خانه | وبلاگ | تحلیل بازار | تحلیل بیت کوین (30 فروردین 1402)',
    Text2: 'منبع : بایننس | 1402/02/29 20:26',
    Text3: 'تحلیل بیت کوین (۳۰ فروردین ۱۴۰۲)',
    Text4: 'بازار رمز ارزها از گذشته تا امروز، گزینه‌ای جذاب برای سرمایه‌گذاران بوده است تا با استفاده از روش‌های تحلیل بیت‌ کوین و سایر رمز ارزها و سرمایه‌گذاری و خرید بیت کوین ،به کسب سودهای زیاد و چند برابر کردن دارایی خود بپردازند اما نباید فراموش کرد که این بازار نیز مانند همه بازارهای مالی، ریسک‌ها و چالش‌های خود را دارد و به همان اندازه که سودهای بالایی را نصیب سرمایه‌گذاران خود می‌کند، ممکن است ضررهای جبران‌ناپذیری را هم به افراد وارد کند به همین دلیل افراد تازه‌کار برای ورود به بازار خرید ارز دیجیتال، نیاز به آموزش دارند و باید با اصطلاحات مهم و کاربردی این حوزه به‌‌خوبی آشنا باشند تا بتوانند تجربه خوبی از معاملات خود به‌دست آورند. یکی از کاربردی‌ترین روش‌های کسب سود و موفقیت در بازار رمز ارزها، یادگیری مهارت انجام تحلیل ارزهای دیجیتال و اطلاع از قیمت ازر دیجیتال است.',
    Text5: 'تحلیل بیت کوین امروز سه شنبه ۲۹ فروردین',
    Text6: 'قیمت بیت کوین دقیقا طبق آن‌چه در تحلیل قبل ارائه شد، با عبور از گره قیمتی ۳۰۰۰۰ دلار تا محدوده باکس سبز رنگ اصلاح داشت. حالا ممکن است مجدد به خط میانی کانال پولبک زده و پس از آن در صورت وجود فشار عرضه به روند نزولی خود ادامه دهد.',
    Text7: 'بازار رمز ارزها از گذشته تا امروز، گزینه‌ای جذاب برای سرمایه‌گذاران بوده است تا با استفاده از روش‌های تحلیل بیت‌ کوین و سایر رمز ارزها و سرمایه‌گذاری و خرید بیت کوین ،به کسب سودهای زیاد و چند برابر کردن دارایی خود بپردازند اما نباید فراموش کرد که این بازار نیز مانند همه بازارهای مالی، ریسک‌ها و چالش‌های خود را دارد و به همان اندازه که سودهای بالایی را نصیب سرمایه‌گذاران خود می‌کند، ممکن است ضررهای جبران‌ناپذیری را هم به افراد وارد کند به همین دلیل افراد تازه‌کار برای ورود به بازار خرید ارز دیجیتال، نیاز به آموزش دارند و باید با اصطلاحات مهم و کاربردی این حوزه به‌‌خوبی آشنا باشند تا بتوانند تجربه خوبی از معاملات خود به‌دست آورند. یکی از کاربردی‌ترین روش‌های کسب سود و موفقیت در بازار رمز ارزها، یادگیری مهارت انجام تحلیل ارزهای دیجیتال و اطلاع از قیمت ازر دیجیتال است. بازار رمز ارزها از گذشته تا امروز، گزینه‌ای جذاب برای سرمایه‌گذاران بوده است تا با استفاده از روش‌های تحلیل بیت‌ کوین و سایر رمز ارزها و سرمایه‌گذاری و خرید بیت کوین ،به کسب سودهای زیاد و چند برابر کردن دارایی خود بپردازند اما نباید فراموش کرد که این بازار نیز مانند همه بازارهای مالی، ریسک‌ها و چالش‌های خود را دارد و به همان اندازه که سودهای بالایی را نصیب سرمایه‌گذاران خود می‌کند، ممکن است ضررهای جبران‌ناپذیری را هم به افراد وارد کند به همین دلیل افراد تازه‌کار برای ورود به بازار خرید ارز دیجیتال، نیاز به آموزش دارند و باید با اصطلاحات مهم و کاربردی این حوزه به‌‌خوبی آشنا باشند تا بتوانند تجربه خوبی از معاملات خود به‌دست آورند. یکی از کاربردی‌ترین روش‌های کسب سود و موفقیت در بازار رمز ارزها، یادگیری مهارت انجام تحلیل ارزهای دیجیتال و اطلاع از قیمت ازر دیجیتال است.',
    Text8: 'مطالب مرتبط',


})

const switchToPersian = () => {
    localStorage.hash = '#fa';
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
    state.Text1 = 'خانه | وبلاگ | تحلیل بازار | تحلیل بیت کوین (30 فروردین 1402)',
        state.Text2 = 'منبع : بایننس | 1402/02/29 20:26',
        state.Text3 = 'تحلیل بیت کوین (۳۰ فروردین ۱۴۰۲)',
        state.Text4 = 'بازار رمز ارزها از گذشته تا امروز، گزینه‌ای جذاب برای سرمایه‌گذاران بوده است تا با استفاده از روش‌های تحلیل بیت‌ کوین و سایر رمز ارزها و سرمایه‌گذاری و خرید بیت کوین ،به کسب سودهای زیاد و چند برابر کردن دارایی خود بپردازند اما نباید فراموش کرد که این بازار نیز مانند همه بازارهای مالی، ریسک‌ها و چالش‌های خود را دارد و به همان اندازه که سودهای بالایی را نصیب سرمایه‌گذاران خود می‌کند، ممکن است ضررهای جبران‌ناپذیری را هم به افراد وارد کند به همین دلیل افراد تازه‌کار برای ورود به بازار خرید ارز دیجیتال، نیاز به آموزش دارند و باید با اصطلاحات مهم و کاربردی این حوزه به‌‌خوبی آشنا باشند تا بتوانند تجربه خوبی از معاملات خود به‌دست آورند. یکی از کاربردی‌ترین روش‌های کسب سود و موفقیت در بازار رمز ارزها، یادگیری مهارت انجام تحلیل ارزهای دیجیتال و اطلاع از قیمت ازر دیجیتال است.',
        state.Text5 = 'تحلیل بیت کوین امروز سه شنبه ۲۹ فروردین',
        state.Text6 = 'قیمت بیت کوین دقیقا طبق آن‌چه در تحلیل قبل ارائه شد، با عبور از گره قیمتی ۳۰۰۰۰ دلار تا محدوده باکس سبز رنگ اصلاح داشت. حالا ممکن است مجدد به خط میانی کانال پولبک زده و پس از آن در صورت وجود فشار عرضه به روند نزولی خود ادامه دهد.',
        state.Text7 = 'بازار رمز ارزها از گذشته تا امروز، گزینه‌ای جذاب برای سرمایه‌گذاران بوده است تا با استفاده از روش‌های تحلیل بیت‌ کوین و سایر رمز ارزها و سرمایه‌گذاری و خرید بیت کوین ،به کسب سودهای زیاد و چند برابر کردن دارایی خود بپردازند اما نباید فراموش کرد که این بازار نیز مانند همه بازارهای مالی، ریسک‌ها و چالش‌های خود را دارد و به همان اندازه که سودهای بالایی را نصیب سرمایه‌گذاران خود می‌کند، ممکن است ضررهای جبران‌ناپذیری را هم به افراد وارد کند به همین دلیل افراد تازه‌کار برای ورود به بازار خرید ارز دیجیتال، نیاز به آموزش دارند و باید با اصطلاحات مهم و کاربردی این حوزه به‌‌خوبی آشنا باشند تا بتوانند تجربه خوبی از معاملات خود به‌دست آورند. یکی از کاربردی‌ترین روش‌های کسب سود و موفقیت در بازار رمز ارزها، یادگیری مهارت انجام تحلیل ارزهای دیجیتال و اطلاع از قیمت ازر دیجیتال است. بازار رمز ارزها از گذشته تا امروز، گزینه‌ای جذاب برای سرمایه‌گذاران بوده است تا با استفاده از روش‌های تحلیل بیت‌ کوین و سایر رمز ارزها و سرمایه‌گذاری و خرید بیت کوین ،به کسب سودهای زیاد و چند برابر کردن دارایی خود بپردازند اما نباید فراموش کرد که این بازار نیز مانند همه بازارهای مالی، ریسک‌ها و چالش‌های خود را دارد و به همان اندازه که سودهای بالایی را نصیب سرمایه‌گذاران خود می‌کند، ممکن است ضررهای جبران‌ناپذیری را هم به افراد وارد کند به همین دلیل افراد تازه‌کار برای ورود به بازار خرید ارز دیجیتال، نیاز به آموزش دارند و باید با اصطلاحات مهم و کاربردی این حوزه به‌‌خوبی آشنا باشند تا بتوانند تجربه خوبی از معاملات خود به‌دست آورند. یکی از کاربردی‌ترین روش‌های کسب سود و موفقیت در بازار رمز ارزها، یادگیری مهارت انجام تحلیل ارزهای دیجیتال و اطلاع از قیمت ازر دیجیتال است.',
        state.Text8 = 'مطالب مرتبط',

        useHead({
            bodyAttrs: {
                dir: 'rtl'
            },
        })
}
const switchToEnglish = () => {
    localStorage.hash = '#en';
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
    state.postSlideText1 = 'MoneyEx online magazine',
        state.postSlideText2 = 'The latest news and content in the field of finance, cryptocurrency and trade',
        state.seeAll = 'See All'
    state.postTitle = 'Comprehensive education of the cryptocurrency market',
        state.postTime = '12 hours ago',
        state.summery = 'Lorem Ipsum is a mock text with an unintelligible',
        state.Text1 = 'Home | blog | Market analysis Bitcoin analysis (April 30, 1402)',
        state.Text2 = 'Source: Binance | 02/29/1402 20:26',
        state.Text3 = 'Bitcoin analysis (April 30, 1402)',
        state.Text4 = 'Cryptocurrency market has been an attractive option for investors from the past to today, to earn large profits and multiply their assets by using the methods of analyzing Bitcoin and other cryptocurrencies and investing and buying Bitcoin. It should not be forgotten that this market, like all financial markets, has its own risks and challenges, and as much as it brings high profits to its investors, it may cause irreparable losses to people, thats why newbies are reluctant to enter the market. Buying digital currency requires training and must be familiar with the important and practical terms of this field so that they can get a good experience from their transactions. One of the most practical methods of earning profit and success in the cryptocurrency market is to learn the skill of analyzing digital currencies and knowing the price of digital currencies.'
    state.Text5 = 'Bitcoin analysis today, Tuesday 29 April',
        state.Text6 = 'Bitcoin price corrected exactly as presented in the previous analysis, crossing the $30,000 price node to the green box range. Now it may hit the middle line of the pullback channel again and then continue its downward trend if there is supply pressure.'
    state.Text7 = 'Cryptocurrency market has been an attractive option for investors from the past to today, to earn large profits and multiply their assets by using the methods of analyzing Bitcoin and other cryptocurrencies and investing and buying Bitcoin. It should not be forgotten that this market, like all financial markets, has its own risks and challenges, and as much as it brings high profits to its investors, it may cause irreparable losses to people, thats why newbies are reluctant to enter the market. Buying digital currency requires training and must be familiar with the important and practical terms of this field so that they can get a good experience from their transactions. One of the most practical methods of earning profit and success in the cryptocurrency market is learning the skill of analyzing digital currencies and knowing the price of digital currencies. From the past to today, the cryptocurrency market has been an attractive option for investors to earn large profits and multiply their assets by using the methods of analyzing Bitcoin and other cryptocurrencies and investing and buying Bitcoin, but we should not forget that this The market, like all financial markets, has its own risks and challenges, and as much as it brings high profits to its investors, it may also cause irreparable losses to people, thats why newbies need to enter the market to buy digital currency. They have training and should be well familiar with the important and practical terms of this field so that they can get a good experience from their transactions. One of the most practical methods of earning profit and success in the cryptocurrency market is to learn the skill of analyzing digital currencies and knowing the price of digital currencies.'
    state.Text8 = 'Related Content',
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
