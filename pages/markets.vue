<template >
    <div>
        <div class="bg-white dark:bg-black md:bg-slate-100">

            <CommonNavbar :switch-to-persian="switchToPersian" :switch-to-english="switchToEnglish" :state="state" />
            <div class="dark:bg-black bg-white">
                <div class="2xl:mx-36 mx-4 mb-16">
                    <MainTrendCoindSection :state="state" />
                    <marketsCoins :state="state" />
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
    title: 'MoneyEx | Markets',
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
    livePrice: 'قیمت روز ارز های دیجیتال',
    todayDate: ' امروز چهارشنبه 23 فروردین 1402 ',
    coinName: 'تتر',
    coinText1: 'همه',
    coinText2: 'بیشترین سود',
    coinText3: 'بیشترین ضرر',
    coinText4: 'جدیدترین',
    coinText5: 'قیمت',
    coinText6: 'ضریب',
    coinText7: 'بالاترین نرخ',
    coinText8: 'تغییرات',
    coinText11: `قیمت (IRR) <img class="w-3 h-4" src="/_nuxt/assets/icons/sort.png" alt="">`,
    coinText12: `ضریب (24h) <img class="w-3 h-4" src="/_nuxt/assets/icons/sort.png" alt="">`,
    coinText13: `بالاترین نرخ <img class="w-3 h-4" src="/_nuxt/assets/icons/sort.png" alt="">`,
    coinText14: `تغییرات (24H)<img class="w-3 h-4" src="/_nuxt/assets/icons/sort.png" alt="">`,
    coinText15: 'مارکت',
    coinText16: 'معامله',
    coinText17: 'فروش',
    coinText18: 'خرید',
    hash: '#fa'
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
    state.livePrice = "قیمت روز ارز های دیجیتال";
    state.todayDate = " امروز چهارشنبه 23 فروردین 1402 ";
    state.coinName = 'تتر';
    state.coinText1 = 'همه';
    state.coinText2 = 'بیشترین سود';
    state.coinText3 = 'بیشترین ضرر';
    state.coinText4 = 'جدیدترین';
    state.coinText5 = 'قیمت';
    state.coinText6 = 'ضریب';
    state.coinText7 = 'بالاترین نرخ';
    state.coinText8 = 'تغییرات';
    state.coinText11 = 'قیمت (IRR) <img class="w-3 h-4" src="../../assets/icons/sort.png" alt="">';
    state.coinText12 = 'ضریب (24h) <img class="w-3 h-4" src="../../assets/icons/sort.png" alt="">';
    state.coinText13 = 'بالاترین نرخ <img class="w-3 h-4" src="../../assets/icons/sort.png" alt="">';
    state.coinText14 = 'تغییرات (24H)<img class="w-3 h-4" src="../../assets/icons/sort.png" alt="">';
    state.coinText15 = 'مارکت';
    state.coinText16 = 'معامله';
    state.coinText17 = 'فروش';
    state.coinText18 = 'خرید';
    state.hash = '#fa'


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
    state.livePrice = "Daily price of coins";
    state.todayDate = "Today, Wednesday, April 23, 1402";
    state.coinName = 'Tether';
    state.coinText1 = 'All';
    state.coinText2 = 'The most profit';
    state.coinText3 = 'The most loss';
    state.coinText4 = 'New Coins';
    state.coinText5 = 'Price';
    state.coinText6 = 'Odds';
    state.coinText7 = 'Max Price';
    state.coinText8 = 'Changes';
    state.coinText11 = ' Price(IRR) <img class="w-3 h-4" src="../../assets/icons/sort.png" alt="">';
    state.coinText12 = 'Odds (24h) <img class="w-3 h-4" src="../../assets/icons/sort.png" alt="">';
    state.coinText13 = ' Max Price <img class="w-3 h-4" src="../../assets/icons/sort.png" alt="">';
    state.coinText14 = 'Changes (24H)<img class="w-3 h-4" src="../../assets/icons/sort.png" alt="">';
    state.coinText15 = 'Market';
    state.coinText16 = 'Trade';
    state.coinText17 = 'Sell';
    state.coinText18 = 'Buy';
    state.hash = '#en'

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
