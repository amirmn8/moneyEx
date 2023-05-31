<template >
    <div>
        <div class=" dark:bg-black md:bg-slate-100">

            <CommonNavbar :switch-to-persian="switchToPersian" :switch-to-english="switchToEnglish" :state="state" />
            <div class="dark:bg-black  md:bg-slate-100">
                <div class="2xl:mx-36  mb-16">
                    <ExchangeHeader :state="state" />
                    <ExchangeTradingchartSection :state="state" />
                    <ExchangePositions :state="state" />
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
    title: 'MoneyEx | Exchange',

})
useHead({
    bodyAttrs: {
        class: "dark:bg-black md:bg-slate-100"
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
    hash: '#fa',
    theme: "light",
    switchTrades: true,
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
    headerText1: "تغییرات 24 ساعته",
    headerText2: "تغییرات 30 روزه",
    headerText3: "در گردش",
    headerText4: "نرخ دلار در گردش",
    headerText5: "حجم معاملات",
    positionText1: "سفارشات باز",
    positionText2: "سوابق معاملات",
    positionText3: "نمایش همه جفت ارز ها",
    positionText4: "در این لحظه شما سفارش باز ندارید.",
    positionText5: "نماد",
    positionText6: "قیمت",
    positionText7: "مقدار",
    positionText8: "انجام شده",
    positionText9: "مقدار باز",
    positionText10: "کل",
    positionText11: "نوع سفارش ",
    positionText12: "خرید",
    positionText13: "زمان سفارش",
    positionText14: "انصراف",
    positionText15: "حجم معاملات",
    positionText16: "معاملات اخیر",
    positionText17: "خرید 57%",
    positionText18: " فروش 43%",
    positionText19: "قیمت",
    positionText20: "مقدار",
    positionText21: "قیمت کل",
    positionText22: "زمان",
    tradingText1: "تریدینگ ویو",
    tradingText2: "استاندارد",
    tradingText3: "عمق معامله",
    tradingText4: "معاملات اسپات",
    tradingText5: "خرید",
    tradingText6: "فروش",
    tradingText7: `<span class="text-ExYellow">ثابت</span> مارکت حد ضرر (Stop Limit)`,
    tradingText8: "موجودی",
    tradingText9: "نرخ سفارش",
    tradingText10: "تعداد",
    tradingText11: "خرید آنی",


})

const switchToPersian = () => {
    window.location.hash = "#fa";
    state.hash = "#fa";
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
    state.headerText1 = "تغییرات 24 ساعته";
    state.headerText2 = "تغییرات 30 روزه";
    state.headerText3 = "در گردش";
    state.headerText4 = "نرخ دلار در گردش";
    state.headerText5 = "حجم معاملات";
    state.positionText1 = "سفارشات باز";
    state.positionText2 = "سوابق معاملات";
    state.positionText3 = "نمایش همه جفت ارز ها";
    state.positionText4 = "در این لحظه شما سفارش باز ندارید.";
    state.positionText5 = "نماد";
    state.positionText6 = "قیمت";
    state.positionText7 = "مقدار";
    state.positionText8 = "انجام شده";
    state.positionText9 = "مقدار باز";
    state.positionText10 = "کل";
    state.positionText11 = "نوع سفارش ";
    state.positionText12 = "خرید";
    state.positionText13 = "زمان سفارش";
    state.positionText14 = "انصراف";
    state.positionText15 = "حجم معاملات";
    state.positionText16 = "معاملات اخیر";
    state.positionText17 = "خرید 57%";
    state.positionText18 = " فروش 43%";
    state.positionText19 = "قیمت";
    state.positionText20 = "مقدار";
    state.positionText21 = "قیمت کل";
    state.positionText22 = "زمان";
    state.tradingText1 = "تریدینگ ویو";
    state.tradingText2 = "استاندارد";
    state.tradingText3 = "عمق معامله";
    state.tradingText4 = "معاملات اسپات";
    state.tradingText5 = "خرید";
    state.tradingText6 = "فروش";
    state.tradingText7 = `<span class="text-ExYellow">ثابت</span> مارکت حد ضرر (Stop Limit)`;
    state.tradingText8 = "موجودی";
    state.tradingText9 = "نرخ سفارش";
    state.tradingText10 = "تعداد";
    state.tradingText11 = "خرید آنی";

    useHead({
        bodyAttrs: {
            dir: 'rtl'
        },
    })
}
const switchToEnglish = () => {
    window.location.hash = "#en";
    state.hash = "#en";

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
    state.headerText1 = "24 hour changes";
    state.headerText2 = "30 day changes";
    state.headerText3 = "In circulation";
    state.headerText4 = "Circulating Dollar Rate";
    state.headerText5 = "Turnover";
    state.positionText1 = "Open Orders";
    state.positionText2 = "Transaction records";
    state.positionText3 = "Show all currency pairs";
    state.positionText4 = "At this moment you have no open orders.";
    state.positionText5 = "symbol";
    state.positionText6 = "price";
    state.positionText7 = "value";
    state.positionText8 = "done";
    state.positionText9 = "open value";
    state.positionText10 = "Total";
    state.positionText11 = "order type";
    state.positionText12 = "Buy";
    state.positionText13 = "order time";
    state.positionText14 = "Cancel";
    state.positionText15 = "Trade volume";
    state.positionText16 = "Recent Transactions";
    state.positionText17 = "Buy 57%";
    state.positionText18 = "Sale 43%";
    state.positionText19 = "Price";
    state.positionText20 = "value";
    state.positionText21 = "Total Price";
    state.positionText22 = "time";
    state.tradingText1 = "Trading View";
    state.tradingText2 = "standard";
    state.tradingText3 = "Trading Depth";
    state.tradingText4 = "Spot Trading";
    state.tradingText5 = "Buy";
    state.tradingText6 = "Sell";
    state.tradingText7 = `<span class="text-ExYellow">Fixed</span> Stop Limit Market`;
    state.tradingText8 = "Inventory";
    state.tradingText9 = "Order Rate";
    state.tradingText10 = "Number";
    state.tradingText11 = "Buy";
    useHead({
        bodyAttrs: {
            dir: 'ltr'
        },
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
