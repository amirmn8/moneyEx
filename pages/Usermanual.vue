<template >
    <div>
        <div class=" dark:bg-black md:bg-slate-100">

            <CommonNavbar :switch-to-persian="switchToPersian" :switch-to-english="switchToEnglish" :state="state" />
            <div class="dark:bg-black  md:bg-white">
                <UsermanualSearchBox :state="state" />
                <div class="xl:mx-36  mb-16">
                    <div v-show="state.openBox">
                        <UsermanualWhyUs :state="state" />
                    </div>

                    <div v-show="state.openBox">
                        <UsermanualSubjects :state="state" />
                    </div>
                    <div v-show="!state.openBox">
                        <UsermanualAccordingBox :state="state" />
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
    title: 'MoneyEx | User Manual',

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
                    });
                    state.theme = 'dark';
                } else {
                    useHead({

                        htmlAttrs: {
                            class: ''
                        },
                    });
                    state.theme = 'light';
                }
            }
        }
    });
});


const state = reactive({
    openBox: true,
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
    searchText1: 'راهنمای استفاده از مانی اکسـ',
    searchText2: 'پاسخ به سوالات شما در کوتاه ترین زمان',
    searchText3: 'به دنبال چه می گردید؟',
    searchIcon: false,
    whyUs1: 'چرا مانی اکسـ؟',
    whyUs2: 'مانی اکسـ پلتفرمی امن، سریع و جدید برای رمزارز شماست، جایی که می‌توانید فوراً خرید کنید سود کسب کنید، رمزارز مبادله کنید و دارایی‌های خود را مدیریت کنید.',
    whyUs3: 'مانی اکسـ چیست؟',
    whyUs4: 'مانی اکس چیست؟ چه خدماتی دارد؟ راه‌های ارتباطی با مانی اکس و توضیحات کلی برای شروع فعالیت در ملنی اکس را می‌توانید در این بخش مطالعه کنید',
    subject1: "ثبت نام و احراز هویت",
    subject2: "امنیت و اطلاعات حساب",
    subject3: "سوابق حساب",
    subject4: "معرفی دوستان و هدایا",
    subject5: "واریز و خرید",
    subject6: "برداشت و فروش",
    subject7: "کیف پول دیجیتال",
    subject8: "راهنمای کارمزد ها",
    accordingText1: 'مرتبط با :',
    accordingText2: 'ثبت نام و احراز هویت',
    accordingText3: 'بازگشت',
    accordingText4: 'برای بازیابی رمز عبور چه باید کرد ؟',
    accordingText5: 'لورم ایپسوم یا طرح‌نمابه متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد',

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
    state.searchText1 = 'راهنمای استفاده از مانی اکسـ';
    state.searchText2 = 'پاسخ به سوالات شما در کوتاه ترین زمان';
    state.searchText3 = 'به دنبال چه می گردید؟';
    state.searchIcon = false;
    state.whyUs1 = "چرا مانی اکسـ؟";
    state.whyUs2 = "مانی اکسـ پلتفرمی امن، سریع و جدید برای رمزارز شماست، جایی که می‌توانید فوراً خرید کنید سود کسب کنید، رمزارز مبادله کنید و دارایی‌های خود را مدیریت کنید.";
    state.whyUs3 = "مانی اکسـ چیست؟";
    state.whyUs4 = "مانی اکس چیست؟ چه خدماتی دارد؟ راه‌های ارتباطی با مانی اکس و توضیحات کلی برای شروع فعالیت در ملنی اکس را می‌توانید در این بخش مطالعه کنید";
    state.subject1 = "ثبت نام و احراز هویت";
    state.subject2 = "امنیت و اطلاعات حساب";
    state.subject3 = "سوابق حساب";
    state.subject4 = "معرفی دوستان و هدایا";
    state.subject5 = "واریز و خرید";
    state.subject6 = "برداشت و فروش";
    state.subject7 = "کیف پول دیجیتال";
    state.subject8 = "راهنمای کارمزد ها";
    state.accordingText1 = "مرتبط با:";
    state.accordingText2 = "ثبت نام و احراز هویت";
    state.accordingText3 = "بازگشت";
    state.accordingText4 = "برای بازیابی رمز عبور چه باید کرد ؟";
    state.accordingText5 = "لورم ایپسوم یا طرح‌نمابه متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد";

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
    state.searchText1 = "Guide to using MoneyEx";
    state.searchText2 = "Answering your questions in the shortest possible time";
    state.searchText3 = 'What are you looking for?';
    state.searchIcon = true;
    state.whyUs1 = "Why MoneyEx?";
    state.whyUs2 = "MoneyEx is a safe, fast and new platform for your cryptocurrency, where you can instantly buy, earn, trade and manage your assets.";
    state.whyUs3 = "What is MoneyEx?";
    state.whyUs4 = "What is MoneyX? What services does it have? In this section, you can read the ways of communication with MoneyX and general explanations for starting activities in MeleniX";
    state.subject1 = "Registration and authentication";
    state.subject2 = "Security and account information";
    state.subject3 = "Account Records";
    state.subject4 = "Invite friends and gifts";
    state.subject5 = "Deposit and purchase";
    state.subject6 = "Whitdraw and sell";
    state.subject7 = "Digital Wallet";
    state.subject8 = "Guide to Fees";
    state.accordingText1 = "related to:";
    state.accordingText2 = "Registration and authentication";
    state.accordingText3 = "Back";
    state.accordingText4 = "What should be done to recover the password?";
    state.accordingText5 = "Lorem Epsom is called an experimental and nonsensical text pattern in the printing, page layout and graphic design industries. The graphic designer uses this text as an element of the composition to fill the page and provide the initial appearance and overall design of the order, to graphically indicate the type and size of the font and the appearance of the text. Usually, graphic designers for page layout, First, they use test and meaningless texts to simply show their client or employer that the page is designed or paged after the text is placed in it.";
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
