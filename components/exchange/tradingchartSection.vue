<template>
    <!-- trading chart -->
    <div class=" flex flex-col md:mx-12 lg:mx-10 mt-10 xl:flex-row gap-8 bg-ExGray md:bg-gray-100 dark:bg-black h-full ">
        <div class="tradingview-widget-container bg-white overflow-hidden pb-6 rounded-lg  basis-9/12 dark:bg-ExBlack">
            <div class="flex gap-8 mt-8 justify-center md:justify-start my-8 md:mx-8">
                <p v-text="state.tradingText1" class="py-2 px-4 bg-ExYellow/10 rounded-xl font-bold text-ExYellow"></p>
                <p v-text="state.tradingText2" class="py-2 px-4 dark:text-white"> </p>
                <p v-text="state.tradingText3" class="py-2 px-4 dark:text-white"></p>
            </div>

            <div id="tradingview_17f8f"></div>
        </div>
        <div class=" basis-3/12 min-h-max mx-4 md:mx-0">
            <div class="flex flex-col bg-white p-6 rounded-xl dark:bg-ExBlack justify-between gap-6 h-full">
                <div class="flex items-center justify-between">
                    <p v-text="state.tradingText4"
                        class="border-r-2 font-bold text-base border-solid border-ExYellow pr-2 dark:text-white">
                    </p>
                    <div v-if="state.hash === '#fa'" class="flex">
                        <button v-text="state.tradingText5"
                            class="bg-ExGreen font-bold text-white px-4 py-2 rounded-r-xl"></button>
                        <button v-text="state.tradingText6"
                            class="bg-red-500/30 text-red-500   px-4 py-2 rounded-l-xl"></button>
                    </div>
                    <div v-else class="flex flex-row-reverse">
                        <button v-text="state.tradingText5"
                            class="bg-ExGreen font-bold text-white px-4 py-2 rounded-r-xl"></button>
                        <button v-text="state.tradingText6"
                            class="bg-red-500/30 text-red-500   px-4 py-2 rounded-l-xl"></button>
                    </div>
                </div>
                <p v-html="state.tradingText7" class="text-ExPlaceHolder dark:text-gray-300"></p>
                <div class="bg-gray-100 border border-gray-200 border-solid flex justify-between px-4 py-3 rounded-xl">
                    <p v-text="state.tradingText8"></p>
                    <p>0 BTC = 0 USDT</p>
                </div>
                <div>
                    <label v-text="state.tradingText9"
                        class="block text-ExPlaceHolder text-sm font-bold mb-2 dark:text-gray-300">
                    </label>
                    <input type="text"
                        class="flex w-full items-center justify-between rounded-xl h-10 bg-white p-2 border border-solid border-gray-300 ">
                </div>
                <div>
                    <label v-text="state.tradingText10"
                        class="block text-ExPlaceHolder text-sm font-bold mb-2 dark:text-gray-300">
                    </label>
                    <input type="number" placeholder="BTC"
                        class="flex w-full items-center placeholder:text-end justify-between rounded-xl h-10 bg-white p-2 border border-solid border-gray-300 ">
                </div>
                <div class="flex flex-col">
                    <div dir="ltr" class="h-1 w-full bg-neutral-200 dark:bg-neutral-600 my-6">
                        <div id="progress-bar" class="h-1 bg-ExYellow" style="width: 35%"></div>
                    </div>
                    <div class="flex justify-between flex-row-reverse text-sm dark:text-gray-300">
                        <p>0%</p>
                        <p>25%</p>
                        <p>50%</p>
                        <p>75%</p>
                        <p>100%</p>
                    </div>
                </div>
                <div class=" border border-gray-400 border-dashed flex justify-between px-4 py-3 rounded-xl">
                    <p v-text="state.tradingText8" class="dark:text-gray-300"></p>
                    <p class="dark:text-gray-300">0</p>
                </div>
                <button
                    class="border-ExGreen shadow-sm dark:hover:shadow-lg dark:hover:shadow-ExGreen shadow-ExGreen bg-ExGreen text-white h-10 border-solid hover:border hover:bg-white hover:text-ExGreen flex justify-center px-3 py-2 rounded-md gap-2 dark:hover:bg-ExGreen dark:hover:text-white">

                    <p v-text="state.tradingText11" id="buyForce"> </p>
                </button>

            </div>


        </div>
    </div>
    <!-- End of trading chart -->
</template>
<script setup>
const props = defineProps(['state'])
const statetheme = reactive({
    theme: "dark",
})
useHead({
    script: [
        {
            type: "text/javascript",
            src: 'https://s3.tradingview.com/tv.js',
        }
    ]
})
onMounted(() => {
    if (localStorage.theme === "dark") {
        statetheme.theme = "dark"
    }
    else {
        statetheme.theme = "light"
    }
    new TradingView.widget(
        {
            "width": 980,
            "height": 610,
            "symbol": "NASDAQ:AAPL",
            "interval": "D",
            "timezone": "Etc/UTC",
            "theme": statetheme.theme,
            "style": "1",
            "locale": "en",
            "toolbar_bg": "#f1f3f6",
            "enable_publishing": false,
            "allow_symbol_change": true,
            "container_id": "tradingview_17f8f"
        }
    );
});

</script>