<template>
    <div class="md:hidden">
        <form class="w-full grid grid-cols-2 px-6 pt-6 gap-8">
            <div class="mb-4 w-full ">
                <div id="select w-full">
                    <!-- list items -->
                    <select
                        class="form-select w-full px-10 mt-7 border rounded-xl border-solid border-gray-300 h-10 bg-gray-100 appearance-none">
                        <option v-text="state.coinText1" value=""></option>
                        <option v-text="state.coinText2" value=""> </option>
                        <option v-text="state.coinText3" value=""> </option>
                        <option v-text="state.coinText4" value=""></option>

                    </select>
                </div>
            </div>
            <div class="mb-4 w-full ">
                <div id="select w-full">
                    <!-- trigger button -->
                    <select
                        class="form-select w-full px-10 mt-7 border rounded-xl border-solid border-gray-300 h-10 bg-gray-100 appearance-none">
                        <option value="">ریال (IRR)</option>
                        <option value="">USD</option>
                        <option value="">USDT</option>
                        <option value="">BTC</option>
                    </select>
                </div>
            </div>
        </form>
        <div class=" px-6 pt-6">
            <div class="flex flex-col gap-6 mb-4">
                <div class="flex items-center gap-3">
                    <div><img class="w-10 h-10" src="../../assets/icons/BTC.png" alt=""></div>
                    <div class="flex flex-col text-base">
                        <p class="dark:text-white">BTC</p>
                        <P v-if="state.hash === '#fa'" class="text-ExPlaceHolder dark:text-white">بیت کوین</P>
                    </div>
                </div>
                <div class="flex gap-24">
                    <div class="flex flex-col text-base">
                        <p v-text="state.coinText5" class="text-ExPlaceHolder dark:text-gray-500">
                        </p>
                        <P class="dark:text-white">{{coinDetail.last}}</P>
                    </div>
                    <div class="flex flex-col text-base">
                        <p v-text="state.coinText6" class="text-ExPlaceHolder dark:text-gray-500">
                        </p>
                        <P class="dark:text-white">2x</P>
                    </div>
                </div>
                <div class="flex gap-24">
                    <div class="flex flex-col text-base">
                        <p v-text="state.coinText7" class="text-ExPlaceHolder dark:text-gray-500">
                        </p>
                        <P class="dark:text-white">{{coinDetail.high24hr}}</P>
                    </div>
                    <div class="flex flex-col text-base">
                        <p v-text="state.coinText8" class="text-ExPlaceHolder dark:text-gray-500">
                        </p>
                        <div class="flex justify-center items-center">
                            <img class="w-4 h-4" src="../../assets/icons/trending_up.png" alt="">
                            <p class="text-ExGreen text-lg">{{coinDetail.change}}%</p>
                        </div>
                    </div>
                </div>
                <hr />
            </div>

        </div>
    </div>
    <!-- End of Coins Mobile -->
    <!-- coins Web-->
    <div class="hidden md:block bg-slate-50 dark:bg-ExBlack w-full mx-auto mt-24 py-8 px-8 rounded-xl shadow-md">
        <div class="flex justify-between border-b border-dashed border-gray-400 pb-8">
            <div class="flex gap-6 justify-center items-center">
                <p v-text="state.coinText1" class="px-4 py-2 text-ExYellow bg-ExYellow/20 rounded-lg "></p>
                <p v-text="state.coinText2" class="dark:text-white"></p>
                <p v-text="state.coinText3" class="dark:text-white"></p>
                <p v-text="state.coinText4" class="dark:text-white"></p>
            </div>
            <div class="flex flex-row-reverse bg-ExGray dark:bg-black gap-2 items-center rounded-lg px-2">
                <p class="px-4 py-2 text-ExYellow border-b-4 border-solid border-ExYellow">IRR</p>
                <P class="px-4 dark:text-white">USD</P>
                <P class="px-4 dark:text-white">USDT</P>
                <P class="px-4 dark:text-white">BTC</P>
            </div>
        </div>

        <table class="flex flex-col">
            <thead class="flex text-base text-ExPlaceHolder py-8">
                <tr class="w-full items-center grid grid-cols-5 lg:grid-cols-6 justify-start">
                    <th v-text="state.coinText15" class="text-start font-normal"></th>
                    <th v-html="state.coinText11" class="text-start font-normal mr-8 items-center flex gap-2">

                    </th>
                    <th v-html="state.coinText12" class="text-start font-normal mr-8 items-center flex gap-2">
                    </th>
                    <th v-html="state.coinText13" class="text-start font-normal mr-8 items-center flex gap-2">

                    </th>
                    <th v-html="state.coinText14" class="text-start font-normal mr-8 items-center gap-2 hidden lg:flex">
                    </th>
                    <th v-text="state.coinText16" class="text-start font-normal mr-8"></th>
                </tr>
            </thead>
            <tbody class="flex flex-col ">
                <tr
                    class="w-full items-center bg-white dark:bg-black grid grid-cols-5 lg:grid-cols-6 justify-start text-base shadow-sm lg:px-4 rounded-xl py-3">
                    <td class="flex gap-1">
                        <div><img class="w-12 h-12" src="../../assets/icons/BTC.png" alt=""></div>
                        <div id="coinPersianContain" class="flex flex-col items-center justify-center">
                            <p class="flex text-sm dark:text-gray-100"> BITCOINS <span class="hidden lg:flex"> | BTC
                                </span></p>
                            <p v-if="state.hash === '#fa'" class="text-ExPlaceHolder dark:text-gray-100">بیت کوین</p>
                        </div>
                    </td>
                    <td class="mr-8 flex dark:text-gray-100">{{coinDetail.last}}<span
                            class="text-ExPlaceHolder hidden lg:flex dark:text-gray-100">(IRR)</span>
                    </td>
                    <td class="mr-8 text-center lg:text-start dark:text-gray-100">2x</td>
                    <td class="mr-8 flex dark:text-gray-100">{{coinDetail.high24hr}}<span
                            class="text-ExPlaceHolder hidden lg:flex dark:text-gray-100">(IRR)</span>
                    </td>
                    <td class="mr-8 hidden lg:flex">
                        <div class="flex gap-2 items-center text-ExGreen"><img class="w-4 h-4"
                                src="../../assets/icons/trending_up.png" alt="">
                            <p style="direction: ltr;">{{coinDetail.change}} %</p>
                        </div>
                    </td>
                    <td id="btnContainer" class="mr-8">
                        <div v-if="state.hash === '#fa'" class="flex justify-center items-center gap-1">
                            <button v-text="state.coinText17" id="sellCoin"
                                class="border hover:bg-red-500 text-red-500 font-bold hover:text-white border-red-500 px-4 py-2 rounded-r-xl"></button>
                            <button v-text="state.coinText18"
                                class="border hover:bg-ExGreen text-ExGreen font-bold hover:text-white border-ExGreen px-4 py-2 rounded-l-xl"></button>
                        </div>
                        <div v-else class="flex flex-row-reverse justify-center items-center gap-1">
                            <button v-text="state.coinText17" id="sellCoin"
                                class="border hover:bg-red-500 text-red-500 font-bold hover:text-white border-red-500 px-4 py-2 rounded-r-xl"></button>
                            <button v-text="state.coinText18"
                                class="border hover:bg-ExGreen text-ExGreen font-bold hover:text-white border-ExGreen px-4 py-2 rounded-l-xl"></button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
const props = defineProps(['state'])
const { data: coinDetail } = await useFetch('https://moneyex.org/api/public?command=returnTicker&tradePair=BTC_USDT')
</script>