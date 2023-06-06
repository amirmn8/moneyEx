<template >
  <div>
    <div class="dark:bg-black">
      <div class="h-530 bg-lightBg dark:bg-darkBg">
        <MainNavbar :state="state" :switch-to-persian="switchToPersian" :switch-to-english="switchToEnglish" />
        <div class="bg-hero-pattern -mt-6 bg-repeat-x ">
          <MainHeader :state="state" />
        </div>
        <div class="dark:bg-black">
          <div class="2xl:mx-36 mx-4 mb-16">
            <MainTrendCoindSection :state="state" />
            <MainWhyUs :state="state" />
            <MainOurPoints :state="state" />
            <MainTradeEveryWhere :state="state" />
            <MainBlogSlider :state="state" />
          </div>
          <MainFooter :state="state" />
        </div>

      </div>



    </div>

  </div>
</template>
<script setup>



useHead({
  htmlAttrs: {
    ref: "darkSwitchRef",
    
  },
  title: 'MoneyEx',
})
useHead({
  bodyAttrs: {
    class: "dark:bg-black"
  }
})

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
  headerText1: "معامله امن، سریع و آسان",
  headerText2: `صرافی رمزارز <span class="text-ExYellow dark:text-white" > مانی‌اکسـ</span > `,
  headerText3: "در دنیای رمز ارز ها پیشتاز باشید",
  headerText4: "از منبع درآمد های بیشمار بهره مند شوید",
  amountPaid: 'مقدار پرداختی',
  amountPaid2: 'مقدار دریافتی',
  btcAddress: 'آدرس بیت کوین',
  email: 'ایمیل یا شماره موبایل',
  buyForce: 'خرید آنی',
  privacy: 'با خرید و انجام معامله قوانین و مقررات مانی اکس خوانده را می پذیرم',
  coinName: 'تتر',
  whyUsText1: 'اگر در ذهنتون خرید انواع رمز ارز هست',
  whyUsText2: 'مانی‌اکسـ پیش شماست',
  whyUsText3: ' در معتبرترین پلتفرم خرید و فروش رمز ارز، ترید، استیک، هولد و کسب درآمد معرفی شروع به سرمایه گذاری کنید.',
  whyUsText4: 'ذخیره امن داده ها',
  whyUsText5: 'حفاظت از حریم خصوصی',
  whyUsText6: 'نامحدود ارز',
  ourPointsText1: 'واریز و برداشت آنی',
  ourPointsText2: 'واریز و برداشت تومان و ارزهای دیجیتال از کیف پول در لحظه انجام می‌شود.',
  ourPointsText3: 'پشتیبانی ۲۴ ساعته',
  ourPointsText4: 'پشتیبانی فوری و ۲۴ ساعته حتی در روز های تعطیل',
  ourPointsText5: 'مدیریت پروفایل',
  ourPointsText6: 'بررسی خرید و فروش رمز ارز ها و مدیریت آن ها در یک صفحه',
  ourPointsText7: 'سفارش گذاری',
  ourPointsText8: 'تنظیم سفارش گذاری برای معامله روی قیمت خاص و جلوگیری از ضرر',
  tradeEverywhereText1: 'همیشه در دسترس',
  tradeEverywhereText2: 'ترید در همه جا',
  tradeEverywhereText3: 'همه خدمات ما به راحتی قابل دسترسی و مدیریت هستند و حتی از وب سرویس های خصوصی و عمومی پشتیبانی می کند.',
  tradeEverywhereText4: 'اپلیکیشن موبایل',
  tradeEverywhereText5: 'اپلیکیشن تریدمن قابلیت ریلیز همزمان برای اندروید و آی او اس را دارد ضمن اینکه بسیار پایدار و هماهنگ هستند.',
  tradeEverywhereText6: 'دسکتاپ',
  tradeEverywhereText7: 'پلتفرم قدرتمند ترید با قابلیت اتصال به فول نود ها و سازگار با محیط ویندوز و مک در ابعاد مختلف به صورت کاملا ریسپانسیو و بهینه.',
  tradeEverywhereText8: 'وب سرویس',
  tradeEverywhereText9: 'وب سرویس تریدمن قابلیت اتصال دیگر صرافی ها و وب سرویس گیرنده ها را فراهم می کند و صرافی شما را به عنوان مرجع قرار می دهد',
  postSlideText1: 'مجله اینترنتی مانی اکسـ',
  postSlideText2: 'جدیدترین اخبار و مطالب حوزه مالی، رمز ارز و ترید',
  seeAll: 'نمایش همه',
  postTitle: 'آموزش جامع بازار رمز ارز',
  postTime: '12 ساعت قبل',
  summery: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ'

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
  state.headerText1 = "معامله امن، سریع و آسان"
  state.headerText2 = `صرافی رمزارز<span
  class= "text-ExYellow dark:text-white" > مانی‌اکسـ</span > `
  state.headerText3 = "در دنیای رمز ارز ها پیشتاز باشید"
  state.headerText4 = "از منبع درآمد های بیشمار بهره مند شوید"
  state.amountPaid = 'مقدار پرداختی'
  state.amountPaid2 = 'مقدار دریافتی'
  state.btcAddress = 'آدرس بیت کوین'
  state.email = 'ایمیل یا شماره موبایل'
  state.buyForce = 'خرید آنی'
  state.privacy = 'با خرید و انجام معامله قوانین و مقررات مانی اکس خوانده را می پذیرم'
  state.coinName = 'تتر'
  state.whyUsText1 = 'اگر در ذهنتون خرید انواع رمز ارز هست'
  state.whyUsText2 = 'مانی‌اکسـ پیش شماست'
  state.whyUsText3 = ' در معتبرترین پلتفرم خرید و فروش رمز ارز، ترید، استیک، هولد و کسب درآمد معرفی شروع به سرمایه گذاری کنید.'
  state.whyUsText4 = 'ذخیره امن داده ها'
  state.whyUsText5 = 'حفاظت از حریم خصوصی'
  state.whyUsText6 = 'نامحدود ارز'
  state.ourPointsText1 = 'واریز و برداشت آنی'
  state.ourPointsText2 = 'واریز و برداشت تومان و ارزهای دیجیتال از کیف پول در لحظه انجام می‌شود.'
  state.ourPointsText3 = 'پشتیبانی ۲۴ ساعته'
  state.ourPointsText4 = 'پشتیبانی فوری و ۲۴ ساعته حتی در روز های تعطیل'
  state.ourPointsText5 = 'مدیریت پروفایل'
  state.ourPointsText6 = 'بررسی خرید و فروش رمز ارز ها و مدیریت آن ها در یک صفحه'
  state.ourPointsText7 = 'سفارش گذاری'
  state.ourPointsText8 = 'تنظیم سفارش گذاری برای معامله روی قیمت خاص و جلوگیری از ضرر'
  state.tradeEverywhereText1 = 'همیشه در دسترس'
  state.tradeEverywhereText2 = 'ترید در همه جا'
  state.tradeEverywhereText3 = 'همه خدمات ما به راحتی قابل دسترسی و مدیریت هستند و حتی از وب سرویس های خصوصی و عمومی پشتیبانی می کند.'
  state.tradeEverywhereText4 = 'اپلیکیشن موبایل'
  state.tradeEverywhereText5 = 'اپلیکیشن تریدمن قابلیت ریلیز همزمان برای اندروید و آی او اس را دارد ضمن اینکه بسیار پایدار و هماهنگ هستند.'
  state.tradeEverywhereText6 = 'دسکتاپ'
  state.tradeEverywhereText7 = 'پلتفرم قدرتمند ترید با قابلیت اتصال به فول نود ها و سازگار با محیط ویندوز و مک در ابعاد مختلف به صورت کاملا ریسپانسیو و بهینه.'
  state.tradeEverywhereText8 = 'وب سرویس'
  state.tradeEverywhereText9 = 'وب سرویس تریدمن قابلیت اتصال دیگر صرافی ها و وب سرویس گیرنده ها را فراهم می کند و صرافی شما را به عنوان مرجع قرار می دهد'
    state.postSlideText1 = 'مجله اینترنتی مانی اکسـ',
    state.postSlideText2 = 'جدیدترین اخبار و مطالب حوزه مالی، رمز ارز و ترید',
    state.seeAll = 'نمایش همه',
    state.postTitle = 'آموزش جامع بازار رمز ارز',
    state.postTime = '12 ساعت قبل',
    state.summery = 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
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
  state.headerText1 = "Safe, fast and easy transaction"
  state.headerText2 = `Cryptocurrency exchange <span class= "text-ExYellow dark:text-white" > MoneyEx</span>`
  state.headerText3 = "Be a leader in the world of cryptocurrencies"
  state.headerText4 = "Benefit from countless sources of income"
  state.amountPaid = 'Amount Paid'
  state.amountPaid2 = 'Amount Received'
  state.btcAddress = 'Bitcoin address'
  state.email = 'Email or Phone number'
  state.buyForce = 'Buy'
  state.privacy = 'By purchasing and making a transaction, I accept the above MoneyX rules and regulations'
  state.coinName = 'Tether'
  state.whyUsText1 = 'If you are thinking of buying all kinds of cryptocurrencies'
  state.whyUsText2 = 'MoneyEx is in front of you'
  state.whyUsText3 = 'Start investing in the most reliable cryptocurrency buying and selling platform, trade, stick, hold and earn money.'
  state.whyUsText4 = 'Secure data storage'
  state.whyUsText5 = 'Privacy protection'
  state.whyUsText6 = 'Unlimited currency'
  state.ourPointsText1 = 'Instant deposit and withdrawal'
  state.ourPointsText2 = 'Tomans and digital currencies can be deposited and withdrawn from the wallet instantly.'
  state.ourPointsText3 = '24 hour support'
  state.ourPointsText4 = 'Immediate and 24-hour support even on holidays'
  state.ourPointsText5 = 'Profile management'
  state.ourPointsText6 = 'Investigating buying and selling of cryptocurrencies and managing them on one page'
  state.ourPointsText7 = 'Ordering'
  state.ourPointsText8 = 'Set orders to trade at a specific price and avoid losses'
  state.tradeEverywhereText1 = 'Always available'
  state.tradeEverywhereText2 = 'Trade everywhere'
  state.tradeEverywhereText3 = 'All our services are easy to access and manage and even support private and public web services.'
  state.tradeEverywhereText4 = 'Mobile application'
  state.tradeEverywhereText5 = 'Trademan application has the ability to release simultaneously for Android and iOS, while they are very stable and compatible.'
  state.tradeEverywhereText6 = 'Desktop'
  state.tradeEverywhereText7 = 'A powerful trade platform with the ability to connect to full nodes and compatible with Windows and Mac environment in different dimensions in a fully responsive and optimal way.'
  state.tradeEverywhereText8 = 'Web service'
  state.tradeEverywhereText9 = 'Trademan web service provides the ability to connect other exchanges and web clients and places your exchange as a reference.'
    state.postSlideText1 = 'MoneyEx online magazine',
    state.postSlideText2 = 'The latest news and content in the field of finance, cryptocurrency and trade',
    state.seeAll = 'See All'
  state.postTitle = 'Comprehensive education of the cryptocurrency market',
    state.postTime = '12 hours ago',
    state.summery = 'Lorem Ipsum is a mock text with an unintelligible',

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
