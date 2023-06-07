<template >
    <div>
        <div class=" dark:bg-black md:bg-slate-100">

            <CommonNavbar :switch-to-persian="switchToPersian" :switch-to-english="switchToEnglish" :state="state" />
            <div class="dark:bg-black  md:bg-white py-16 bg-exPink">

                <div class="mb-8 md:w-540 flex justify-center mx-auto  ">

                    <form
                        class="w-full flex flex-col px-6 pt-6  mx-3 rounded-xl py-8 border border-solid border-gray-200 shadow-lg bg-white dark:bg-ExBlack dark:border-gray-900">
                        <p v-text="state.text1" class="text-center font-bold my-4 dark:text-white"></p>
                        <div class="mb-4 w-full grid grid-cols-2">
                            <div>
                                <label v-text="state.amountPaid" class="block text-ExPlaceHolder text-sm font-bold mb-2"
                                    for="username"></label>
                                <input type="text" placeholder="0"
                                    class="flex w-full items-center justify-between rounded h-10 bg-white p-2 border border-solid border-gray-300 dark:bg-ExBlack dark:border-gray-600">
                            </div>

                            <div id="select w-full flex ">
                                <select
                                    class="form-select w-full px-10 mt-7 border rounded border-solid border-gray-300 h-10 bg-gray-100 appearance-none dark:bg-ExBlack dark:border-gray-600 dark:text-gray-400">
                                    <option value="">بیت کوین</option>
                                </select>
                            </div>
                        </div>
                        <button class="flex mx-auto fill-white bg-ExYellow py-2 px-3 rounded-xl dark:fill-white"><span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24.414" height="32.578"
                                    viewBox="0 0 24.414 32.578">
                                    <path id="autochange"
                                        d="M160.687,170.409a9.493,9.493,0,0,1-.534-2.022,14.038,14.038,0,0,1-.153-2.06,12.309,12.309,0,0,1,12.207-12.207h1.64l-2.327-2.327a.95.95,0,0,1-.286-.744,1.083,1.083,0,0,1,.324-.744,1.059,1.059,0,0,1,1.488,0l4.12,4.158a1.162,1.162,0,0,1,.267.381,1.192,1.192,0,0,1,0,.839,1.162,1.162,0,0,1-.267.381l-4.12,4.12a1.079,1.079,0,0,1-1.526-1.526l2.251-2.251h-1.564a9.964,9.964,0,0,0-9.918,9.918,9.8,9.8,0,0,0,.153,1.755,14.765,14.765,0,0,0,.381,1.6,1.091,1.091,0,0,1,0,.572,1.041,1.041,0,0,1-.267.5,1.19,1.19,0,0,1-1.068.4A1.012,1.012,0,0,1,160.687,170.409Zm10.643,11.864-4.158-4.12a1.163,1.163,0,0,1-.267-.381,1.192,1.192,0,0,1,0-.839,1.163,1.163,0,0,1,.267-.381l4.158-4.158a1.052,1.052,0,0,1,1.488,1.488l-2.327,2.327h1.717a9.964,9.964,0,0,0,9.918-9.918,11.528,11.528,0,0,0-.134-1.774,9.161,9.161,0,0,0-.4-1.621,1.159,1.159,0,0,1-.019-.553.909.909,0,0,1,.248-.477,1.19,1.19,0,0,1,1.068-.4,1.012,1.012,0,0,1,.8.744,10.366,10.366,0,0,1,.553,2.022,12.51,12.51,0,0,1,.172,2.06A12.309,12.309,0,0,1,172.207,178.5H170.49l2.327,2.327a1.013,1.013,0,0,1,0,1.45,1.059,1.059,0,0,1-1.488,0Z"
                                        transform="translate(-160 -150)" fill="inherit" />
                                </svg>
                            </span>
                        </button>
                        <div class="mb-4 -mt-4 w-full grid grid-cols-2">
                            <div>
                                <label v-text="state.amountPaid2" class="block text-ExPlaceHolder text-sm font-bold mb-2">
                                </label>
                                <input disabled type="text" placeholder="0"
                                    class="flex w-full items-center rounded justify-between  h-10 bg-white p-2 border border-solid border-gray-300 dark:bg-ExBlack dark:border-gray-600">
                            </div>

                            <div id="select w-full">
                                <select
                                    class="form-select w-full px-10 mt-7 border rounded border-solid border-gray-300 h-10 bg-gray-100 appearance-none dark:bg-ExBlack dark:border-gray-600 dark:text-gray-400">
                                    <option value="">بیت کوین</option>
                                </select>
                            </div>
                        </div>



                        <button
                            class="border-ExGreen shadow-sm dark:hover:shadow-md dark:hover:shadow-ExGreen shadow-ExGreen bg-ExGreen h-10 text-white border-solid hover:border hover:bg-white hover:text-ExGreen mt-7 flex justify-center px-3 py-2 rounded-md gap-2 dark:hover:bg-ExGreen dark:hover:text-white">

                            <p v-text="state.buyForce"></p>
                        </button>
                    </form>
                </div>
                <p v-text="state.text2" class="text-center dark:text-white"></p>
                <div class="flex mx-auto justify-center gap-4 mt-4">
                    <button
                        class="bg-ExYellow text-white hover:bg-white hover:text-ExYellow  border border-solid border-ExYellow dark:text-ExBlack fill-white dark:hover:bg-ExYellow dark:hover:shadow-md dark:hover:shadow-gray-600 flex px-3 py-2 rounded-lg gap-2">
         
                        <p v-text="state.text3"></p>
                    </button>
                    <button
                        class="bg-white dark:bg-ExBlack dark:text-ExYellow text-ExYellow hover:bg-ExYellow hover:text-white  fill-ExYellow   flex px-3 py-2 rounded-lg gap-2 border border-solid border-ExYellow dark:hover:shadow-md dark:hover:shadow-ExYellow">
            
                        <p v-text="state.text4"></p>
                    </button>
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
    amountPaid: 'مقدار پرداختی',
    amountPaid2: 'مقدار دریافتی',
    buyForce: 'خرید ',
    text1: 'خرید آسان و سریع',
    text2: 'برای انجام معامله وارد حساب کاربری خود شوید',
    text3: 'ورود به حساب',
    text4: 'ثبت نام',

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
    state.amountPaid = 'مقدار پرداختی';
    state.amountPaid2 = 'مقدار دریافتی';
    state.btcAddress = 'آدرس بیت کوین';
    state.email = 'ایمیل یا شماره موبایل';
    state.buyForce = 'خرید ';
    state.privacy = 'با خرید و انجام معامله قوانین و مقررات مانی اکس خوانده را می پذیرم';
    state.text1="خرید آسان و سریع";
    state.text2="برای انجام معامله وارد حساب کاربری خود شوید";
    state.text3="ورود به حساب";
    state.text4="ثبت نام";

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
    state.amountPaid = 'Amount Paid'
    state.amountPaid2 = 'Amount Received'
    state.buyForce = 'Buy'
    state.text1="Easy and fast Buy";
    state.text2="Log in to your account to make a transaction";
    state.text3="Login";
    state.text4="Register";
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
