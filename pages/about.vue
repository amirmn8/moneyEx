<template >
    <div>
        <div class="bg-white dark:bg-black md:bg-slate-100">

            <CommonNavbar :switch-to-persian="switchToPersian" :switch-to-english="switchToEnglish" :state="state" />
            <div class="dark:bg-black bg-slate-100">
                <div class="2xl:mx-36  mb-16">
                    <div class="flex flex-col">
                        <div v-if="state.hash === '#fa'" class="flex justify-center">
                            <img class="w-screen sm:hidden" src="../assets/images/herosm.png" alt="">
                            <img class="hidden sm:block lg:hidden w-screen" src="../assets/images/Heromd.png" alt="">
                            <img class="hidden mt-8 lg:block w-5/6" src="../assets/images/Herolg.png" alt="">
                        </div>
                        <div v-else class="flex justify-center">
                            <img class="w-screen sm:hidden" src="../assets/images/HerosmEn.png" alt="">
                            <img class="hidden sm:block lg:hidden w-screen" src="../assets/images/HeromdEn.png" alt="">
                            <img class="hidden mt-8 lg:block w-5/6" src="../assets/images/HerolgEn.png" alt="">
                        </div>
                    </div>
                    <div>
                        <MainOurPoints :state="state" />
                    </div>
                    <div class="flex flex-col gap-6 px-8 mt-12 dark:text-white">
                        <p v-text="state.aboutText1" class="text-lg font-bold"></p>
                        <p v-text="state.aboutText2">
                        </p>
                        <p v-text="state.aboutText3" class="text-lg font-bold"></p>
                        <p v-text="state.aboutText4">

                        </p>
                    </div>
                    <div class="flex flex-col gap-12 mt-16 md:flex-row justify-center md:gap-32 lg:gap-72 dark:text-white">
                        <div class="flex flex-col items-center">
                            <p class="font-bold text-3xl">+200 B</p>
                            <p v-text="state.aboutText5" class="text-md font-bold"></p>
                        </div>
                        <div class="flex flex-col items-center">
                            <p class="font-bold text-3xl">+5.5 M</p>
                            <p v-text="state.aboutText6" class="text-md font-bold">  </p>
                        </div>
                        <div class="flex flex-col items-center">
                            <p class="font-bold text-3xl">+600 K</p>
                            <p v-text="state.aboutText7" class="text-md font-bold">  </p>
                        </div>


                    </div>
                    <div class="flex justify-center mt-24">
                        <img src="../assets/images/Moneyex-team.png" alt="" class="">
                    </div>

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
    title: 'MoneyEx | About',
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
    ourPointsText1: 'واریز و برداشت آنی',
    ourPointsText2: 'واریز و برداشت تومان و ارزهای دیجیتال از کیف پول در لحظه انجام می‌شود.',
    ourPointsText3: 'پشتیبانی ۲۴ ساعته',
    ourPointsText4: 'پشتیبانی فوری و ۲۴ ساعته حتی در روز های تعطیل',
    ourPointsText5: 'مدیریت پروفایل',
    ourPointsText6: 'بررسی خرید و فروش رمز ارز ها و مدیریت آن ها در یک صفحه',
    ourPointsText7: 'سفارش گذاری',
    ourPointsText8: 'تنظیم سفارش گذاری برای معامله روی قیمت خاص و جلوگیری از ضرر',
    aboutText1: 'درباره شرکت',
    aboutText2: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
    aboutText3: 'چرا مانی اکس؟',
    aboutText4: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
    aboutText5: 'حجم معاملات',
    aboutText6: 'معاملات انجام شده',
    aboutText7: 'کاربر فعال',

})

const switchToPersian = () => {
    localStorage.hash= '#fa'
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
        state.ourPointsText1 = 'واریز و برداشت آنی'
    state.ourPointsText2 = 'واریز و برداشت تومان و ارزهای دیجیتال از کیف پول در لحظه انجام می‌شود.'
    state.ourPointsText3 = 'پشتیبانی ۲۴ ساعته'
    state.ourPointsText4 = 'پشتیبانی فوری و ۲۴ ساعته حتی در روز های تعطیل'
    state.ourPointsText5 = 'مدیریت پروفایل'
    state.ourPointsText6 = 'بررسی خرید و فروش رمز ارز ها و مدیریت آن ها در یک صفحه'
    state.ourPointsText7 = 'سفارش گذاری'
    state.ourPointsText8 = 'تنظیم سفارش گذاری برای معامله روی قیمت خاص و جلوگیری از ضرر'
    state.aboutText1 = 'درباره شرکت';
    state.aboutText2 = 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.';
    state.aboutText3 = 'چرا مانی اکس؟';
    state.aboutText4 = 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.';
    state.aboutText5 = 'حجم معاملات';
    state.aboutText6 = 'معاملات انجام شده';
    state.aboutText7 = 'کاربر فعال';


    useHead({
        bodyAttrs: {
            dir: 'rtl'
        },
    })
}
const switchToEnglish = () => {
    localStorage.hash= '#en'
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
    state.ourPointsText1 = 'Instant deposit and withdrawal'
    state.ourPointsText2 = 'Tomans and digital currencies can be deposited and withdrawn from the wallet instantly.'
    state.ourPointsText3 = '24 hour support'
    state.ourPointsText4 = 'Immediate and 24-hour support even on holidays'
    state.ourPointsText5 = 'Profile management'
    state.ourPointsText6 = 'Investigating buying and selling of cryptocurrencies and managing them on one page'
    state.ourPointsText7 = 'Ordering'
    state.ourPointsText8 = 'Set orders to trade at a specific price and avoid losses'
    state.aboutText1 = 'About Company';
    state.aboutText2 = 'Lorem Epsom is a fake text with the production of incomprehensible simplicity from the printing industry, and with the use of graphic designers, printers and texts, but also newspapers and magazines in columns and rows as necessary, and for the current conditions of the technology required, and diverse applications with the aim of improving the tools It is practical, many books in sixty-three percent of the past, present and future require a lot of knowledge from the society and experts, in order to create more knowledge for computer designers, especially creative designers, and the leading culture in the Persian language. In this case, we can hope that all the difficulty in providing solutions, and the difficult conditions of typing will end, and the time required, including the typesetting of the main achievements, and answering the continuous questions of the existing world of design will be basically used.';
    state.aboutText3 = 'Why MoneyEx?';
    state.aboutText4 = 'Lorem Epsom is a fake text with the production of incomprehensible simplicity from the printing industry, and with the use of graphic designers, printers and texts, but also newspapers and magazines in columns and rows as necessary, and for the current conditions of the technology required, and diverse applications with the aim of improving the tools It is practical, many books in sixty-three percent of the past, present and future require a lot of knowledge from the society and experts, in order to create more knowledge for computer designers, especially creative designers, and the leading culture in the Persian language. In this case, we can hope that all the difficulty in providing solutions, and the difficult conditions of typing will end, and the time required, including the typesetting of the main achievements, and answering the continuous questions of the existing world of design will be basically used.';
    state.aboutText5 = 'Turnover';
    state.aboutText6 = 'Transactions done';
    state.aboutText7 = 'Active user';
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
