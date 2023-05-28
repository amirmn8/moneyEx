<template>
    <div class=" flex flex-col-reverse md:mx-12 lg:mx-10 py-10 xl:flex-row gap-8 bg-ExGray md:bg-gray-100 h-full">


        <div class="mx-4 md:mx-0 xl:basis-3/4 ">
            <div class="flex flex-col  bg-white p-6 rounded-xl  gap-6 h-full">
                <div class="flex justify-center text-center w-full">
                    <p class="  text-center border-b border-solid border-ExYellow font-bold text-ExYellow pb-4 w-full">

                        سفارشات باز</p>
                    <p class="  text-center border-b border-solid border-gray-400 pb-4 w-full"> سوابق معاملات
                    </p>
                </div>
                <div class="flex justify-between text-center w-full">
                    <p>نمایش همه جفت ارز ها</p>
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" checked>
                        <div
                            class="w-11 h-6 bg-gray-200 rounded-full peer  dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-ExYellow">
                        </div>

                    </label>
                </div>
                <div class="flex flex-col w-full justify-center items-center py-16 px-4 gap-6">
                    <img class="w-72" src="./Assets/Img/Group 3389.png" alt="">
                    <p dir="ltr" class="font-lg font-bold text-center">.در این لحظه شما سفارش باز ندارید</p>

                </div>
            </div>
        </div>
        <div class="mx-4 md:mx-0 xl:basis-1/4 ">
            <div class="flex flex-col  bg-white p-6 rounded-xl justify-start gap-6 h-full">
                <div class="flex justify-center text-center w-full">
                    <button id="marketCap" onclick="changeAtiveTab(event,'tab-marketCap')"
                        class="text-center border-b border-solid border-ExYellow font-bold text-ExYellow pb-4 w-full">
                        حجم
                        معاملات</button>
                    <button onclick="changeAtiveTab(event,'tab-recent')" id="recentTrades"
                        class="  text-center border-b border-solid border-gray-400 pb-4 w-full">معاملات اخیر
                    </button>
                </div>
                <div id="marketCapSection" class="flex flex-col md:flex-row-reverse xl:flex-col md:gap-8 w-full hidden">
                    <div class="flex flex-col w-full">
                        <div>
                            <div class="flex justify-between">
                                <p class="text-sm text-ExGreen font-bold"> خرید 57%</p>
                                <p class="text-sm text-red-600 font-bold"> فروش 43%</p>
                            </div>
                            <div dir="ltr" class="h-1 w-full my-2 bg-ExGreen rounded-full">
                                <div id="progress-bar" class="h-1 bg-red-600 rounded-full" style="width: 35%"></div>
                            </div>
                        </div>

                        <table class="flex flex-col">
                            <thead class="flex text-base text-ExPlaceHolder py-2 px-4">
                                <tr class="w-full  flex  justify-between">
                                    <th id="market" class="text-center font-normal">قیمت (TMN)</th>
                                    <th id="market" class="text-center font-normal">مقدار (BTC)</th>
                                    <th id="market" class="text-center font-normal">قیمت کل</th>

                                </tr>
                            </thead>
                            <tbody class="flex flex-col h-48 gap-1 overflow-y-scroll ">

                                <tr class="w-full bg-red-100 rounded-3xl px-4  flex text-gray-700 justify-between">
                                    <td>
                                        <p class="text-red-600">705,456,394</p>
                                    </td>
                                    <td>
                                        <p>0.01</p>
                                    </td>
                                    <td>
                                        <p>7,054,564</p>
                                    </td>

                                </tr>
                                <tr class="w-full bg-red-100 rounded-3xl px-4  flex text-gray-700 justify-between">
                                    <td>
                                        <p class="text-red-600">705,456,394</p>
                                    </td>
                                    <td>
                                        <p>0.01</p>
                                    </td>
                                    <td>
                                        <p>7,054,564</p>
                                    </td>

                                </tr>
                                <tr class="w-full bg-red-100 rounded-3xl px-4  flex text-gray-700 justify-between">
                                    <td>
                                        <p class="text-red-600">705,456,394</p>
                                    </td>
                                    <td>
                                        <p>0.01</p>
                                    </td>
                                    <td>
                                        <p>7,054,564</p>
                                    </td>

                                </tr>
                                <tr class="w-full bg-red-100 rounded-3xl px-4  flex text-gray-700 justify-between">
                                    <td>
                                        <p class="text-red-600">705,456,394</p>
                                    </td>
                                    <td>
                                        <p>0.01</p>
                                    </td>
                                    <td>
                                        <p>7,054,564</p>
                                    </td>

                                </tr>
                                <tr class="w-full bg-red-100 rounded-3xl px-4  flex text-gray-700 justify-between">
                                    <td>
                                        <p class="text-red-600">705,456,394</p>
                                    </td>
                                    <td>
                                        <p>0.01</p>
                                    </td>
                                    <td>
                                        <p>7,054,564</p>
                                    </td>

                                </tr>
                                <tr class="w-full bg-red-100 rounded-3xl px-4  flex text-gray-700 justify-between">
                                    <td>
                                        <p class="text-red-600">705,456,394</p>
                                    </td>
                                    <td>
                                        <p>0.01</p>
                                    </td>
                                    <td>
                                        <p>7,054,564</p>
                                    </td>

                                </tr>
                                <tr class="w-full bg-red-100 rounded-3xl px-4  flex text-gray-700 justify-between">
                                    <td>
                                        <p class="text-red-600">705,456,394</p>
                                    </td>
                                    <td>
                                        <p>0.01</p>
                                    </td>
                                    <td>
                                        <p>7,054,564</p>
                                    </td>

                                </tr>
                                <tr class="w-full bg-red-100 rounded-3xl px-4  flex text-gray-700 justify-between">
                                    <td>
                                        <p class="text-red-600">705,456,394</p>
                                    </td>
                                    <td>
                                        <p>0.01</p>
                                    </td>
                                    <td>
                                        <p>7,054,564</p>
                                    </td>

                                </tr>
                                <tr class="w-full bg-red-100 rounded-3xl px-4  flex text-gray-700 justify-between">
                                    <td>
                                        <p class="text-red-600">705,456,394</p>
                                    </td>
                                    <td>
                                        <p>0.01</p>
                                    </td>
                                    <td>
                                        <p>7,054,564</p>
                                    </td>

                                </tr>
                                <tr class="w-full bg-red-100 rounded-3xl px-4  flex text-gray-700 justify-between">
                                    <td>
                                        <p class="text-red-600">705,456,394</p>
                                    </td>
                                    <td>
                                        <p>0.01</p>
                                    </td>
                                    <td>
                                        <p>7,054,564</p>
                                    </td>

                                </tr>
                                <tr class="w-full bg-red-100 rounded-3xl px-4  flex text-gray-700 justify-between">
                                    <td>
                                        <p class="text-red-600">705,456,394</p>
                                    </td>
                                    <td>
                                        <p>0.01</p>
                                    </td>
                                    <td>
                                        <p>7,054,564</p>
                                    </td>

                                </tr>


                            </tbody>
                        </table>
                    </div>
                    <div class="flex flex-col w-full">
                        <div class="flex justify-between my-3 md:my-1.5">
                            <p class="font-bold text-ExGreen text-lg"> 6,695,572,632</p>
                            <p dir="ltr">22,151.29 USDT =</p>

                        </div>
                        <table>
                            <thead class=" hidden md:flex text-base text-ExPlaceHolder py-2 px-4">
                                <tr class="w-full  flex  justify-between">
                                    <th id="market" class="text-center font-normal">قیمت (TMN)</th>
                                    <th id="market" class="text-center font-normal">مقدار (BTC)</th>
                                    <th id="market" class="text-center font-normal">قیمت کل</th>

                                </tr>
                            </thead>
                            <tbody class="flex flex-col h-48 gap-1 overflow-y-scroll ">
                                <tr class="w-full bg-green-100 rounded-3xl px-4  flex text-gray-700 justify-between">
                                    <td>
                                        <p class="text-gray-600">705,456,394</p>
                                    </td>
                                    <td>
                                        <p>0.01</p>
                                    </td>
                                    <td>
                                        <p>7,054,564</p>
                                    </td>

                                </tr>
                                <tr class="w-full bg-green-100 rounded-3xl px-4  flex text-gray-700 justify-between">
                                    <td>
                                        <p class="text-gray-600">705,456,394</p>
                                    </td>
                                    <td>
                                        <p>0.01</p>
                                    </td>
                                    <td>
                                        <p>7,054,564</p>
                                    </td>

                                </tr>
                                <tr class="w-full bg-green-100 rounded-3xl px-4  flex text-gray-700 justify-between">
                                    <td>
                                        <p class="text-gray-600">705,456,394</p>
                                    </td>
                                    <td>
                                        <p>0.01</p>
                                    </td>
                                    <td>
                                        <p>7,054,564</p>
                                    </td>

                                </tr>
                                <tr class="w-full bg-green-100 rounded-3xl px-4  flex text-gray-700 justify-between">
                                    <td>
                                        <p class="text-gray-600">705,456,394</p>
                                    </td>
                                    <td>
                                        <p>0.01</p>
                                    </td>
                                    <td>
                                        <p>7,054,564</p>
                                    </td>

                                </tr>
                                <tr class="w-full bg-green-100 rounded-3xl px-4  flex text-gray-700 justify-between">
                                    <td>
                                        <p class="text-gray-600">705,456,394</p>
                                    </td>
                                    <td>
                                        <p>0.01</p>
                                    </td>
                                    <td>
                                        <p>7,054,564</p>
                                    </td>

                                </tr>
                                <tr class="w-full bg-green-100 rounded-3xl px-4  flex text-gray-700 justify-between">
                                    <td>
                                        <p class="text-gray-600">705,456,394</p>
                                    </td>
                                    <td>
                                        <p>0.01</p>
                                    </td>
                                    <td>
                                        <p>7,054,564</p>
                                    </td>

                                </tr>
                                <tr class="w-full bg-green-100 rounded-3xl px-4  flex text-gray-700 justify-between">
                                    <td>
                                        <p class="text-gray-600">705,456,394</p>
                                    </td>
                                    <td>
                                        <p>0.01</p>
                                    </td>
                                    <td>
                                        <p>7,054,564</p>
                                    </td>

                                </tr>
                                <tr class="w-full bg-green-100 rounded-3xl px-4  flex text-gray-700 justify-between">
                                    <td>
                                        <p class="text-gray-600">705,456,394</p>
                                    </td>
                                    <td>
                                        <p>0.01</p>
                                    </td>
                                    <td>
                                        <p>7,054,564</p>
                                    </td>

                                </tr>
                                <tr class="w-full bg-green-100 rounded-3xl px-4  flex text-gray-700 justify-between">
                                    <td>
                                        <p class="text-gray-600">705,456,394</p>
                                    </td>
                                    <td>
                                        <p>0.01</p>
                                    </td>
                                    <td>
                                        <p>7,054,564</p>
                                    </td>

                                </tr>
                                <tr class="w-full bg-green-100 rounded-3xl px-4  flex text-gray-700 justify-between">
                                    <td>
                                        <p class="text-gray-600">705,456,394</p>
                                    </td>
                                    <td>
                                        <p>0.01</p>
                                    </td>
                                    <td>
                                        <p>7,054,564</p>
                                    </td>

                                </tr>
                                <tr class="w-full bg-green-100 rounded-3xl px-4  flex text-gray-700 justify-between">
                                    <td>
                                        <p class="text-gray-600">705,456,394</p>
                                    </td>
                                    <td>
                                        <p>0.01</p>
                                    </td>
                                    <td>
                                        <p>7,054,564</p>
                                    </td>

                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>
                <div id="recentTradesSection" class="flex flex-col md:gap-8 w-full h-72">
                    <table class="flex flex-col">
                        <thead class="flex text-base text-ExPlaceHolder py-2 px-4">
                            <tr class="w-full  flex  justify-between">
                                <th id="market" class="text-center font-normal">قیمت (TMN)</th>
                                <th id="market" class="text-center font-normal">مقدار (BTC)</th>
                                <th id="market" class="text-center font-normal">قیمت کل</th>

                            </tr>
                        </thead>
                        <tbody class="flex flex-col h-60 gap-1 overflow-y-scroll ">

                            <tr class="w-full bg-red-100 rounded-3xl px-4  flex text-gray-700 justify-between">
                                <td>
                                    <p class="text-red-600">705,456,394</p>
                                </td>
                                <td>
                                    <p>0.01</p>
                                </td>
                                <td>
                                    <p>7,054,564</p>
                                </td>

                            </tr>

                            <tr class="w-full bg-red-100 rounded-3xl px-4  flex text-gray-700 justify-between">
                                <td>
                                    <p class="text-red-600">705,456,394</p>
                                </td>
                                <td>
                                    <p>0.01</p>
                                </td>
                                <td>
                                    <p>7,054,564</p>
                                </td>

                            </tr>

                            <tr class="w-full bg-red-100 rounded-3xl px-4  flex text-gray-700 justify-between">
                                <td>
                                    <p class="text-red-600">705,456,394</p>
                                </td>
                                <td>
                                    <p>0.01</p>
                                </td>
                                <td>
                                    <p>7,054,564</p>
                                </td>

                            </tr>

                            <tr class="w-full bg-red-100 rounded-3xl px-4  flex text-gray-700 justify-between">
                                <td>
                                    <p class="text-red-600">705,456,394</p>
                                </td>
                                <td>
                                    <p>0.01</p>
                                </td>
                                <td>
                                    <p>7,054,564</p>
                                </td>

                            </tr>

                            <tr class="w-full bg-red-100 rounded-3xl px-4  flex text-gray-700 justify-between">
                                <td>
                                    <p class="text-red-600">705,456,394</p>
                                </td>
                                <td>
                                    <p>0.01</p>
                                </td>
                                <td>
                                    <p>7,054,564</p>
                                </td>

                            </tr>

                            <tr class="w-full bg-red-100 rounded-3xl px-4  flex text-gray-700 justify-between">
                                <td>
                                    <p class="text-red-600">705,456,394</p>
                                </td>
                                <td>
                                    <p>0.01</p>
                                </td>
                                <td>
                                    <p>7,054,564</p>
                                </td>

                            </tr>

                            <tr class="w-full bg-red-100 rounded-3xl px-4  flex text-gray-700 justify-between">
                                <td>
                                    <p class="text-red-600">705,456,394</p>
                                </td>
                                <td>
                                    <p>0.01</p>
                                </td>
                                <td>
                                    <p>7,054,564</p>
                                </td>

                            </tr>
                            <tr class="w-full bg-red-100 rounded-3xl px-4  flex text-gray-700 justify-between">
                                <td>
                                    <p class="text-red-600">705,456,394</p>
                                </td>
                                <td>
                                    <p>0.01</p>
                                </td>
                                <td>
                                    <p>7,054,564</p>
                                </td>

                            </tr>
                            <tr class="w-full bg-red-100 rounded-3xl px-4  flex text-gray-700 justify-between">
                                <td>
                                    <p class="text-red-600">705,456,394</p>
                                </td>
                                <td>
                                    <p>0.01</p>
                                </td>
                                <td>
                                    <p>7,054,564</p>
                                </td>

                            </tr>
                            <tr class="w-full bg-red-100 rounded-3xl px-4  flex text-gray-700 justify-between">
                                <td>
                                    <p class="text-red-600">705,456,394</p>
                                </td>
                                <td>
                                    <p>0.01</p>
                                </td>
                                <td>
                                    <p>7,054,564</p>
                                </td>

                            </tr>
                            <tr class="w-full bg-red-100 rounded-3xl px-4  flex text-gray-700 justify-between">
                                <td>
                                    <p class="text-red-600">705,456,394</p>
                                </td>
                                <td>
                                    <p>0.01</p>
                                </td>
                                <td>
                                    <p>7,054,564</p>
                                </td>

                            </tr>
                            <tr class="w-full bg-red-100 rounded-3xl px-4  flex text-gray-700 justify-between">
                                <td>
                                    <p class="text-red-600">705,456,394</p>
                                </td>
                                <td>
                                    <p>0.01</p>
                                </td>
                                <td>
                                    <p>7,054,564</p>
                                </td>

                            </tr>
                            <tr class="w-full bg-red-100 rounded-3xl px-4  flex text-gray-700 justify-between">
                                <td>
                                    <p class="text-red-600">705,456,394</p>
                                </td>
                                <td>
                                    <p>0.01</p>
                                </td>
                                <td>
                                    <p>7,054,564</p>
                                </td>

                            </tr>
                            <tr class="w-full bg-red-100 rounded-3xl px-4  flex text-gray-700 justify-between">
                                <td>
                                    <p class="text-red-600">705,456,394</p>
                                </td>
                                <td>
                                    <p>0.01</p>
                                </td>
                                <td>
                                    <p>7,054,564</p>
                                </td>

                            </tr>
                            <tr class="w-full bg-red-100 rounded-3xl px-4  flex text-gray-700 justify-between">
                                <td>
                                    <p class="text-red-600">705,456,394</p>
                                </td>
                                <td>
                                    <p>0.01</p>
                                </td>
                                <td>
                                    <p>7,054,564</p>
                                </td>

                            </tr>
                            <tr class="w-full bg-red-100 rounded-3xl px-4  flex text-gray-700 justify-between">
                                <td>
                                    <p class="text-red-600">705,456,394</p>
                                </td>
                                <td>
                                    <p>0.01</p>
                                </td>
                                <td>
                                    <p>7,054,564</p>
                                </td>

                            </tr>
                            <tr class="w-full bg-red-100 rounded-3xl px-4  flex text-gray-700 justify-between">
                                <td>
                                    <p class="text-red-600">705,456,394</p>
                                </td>
                                <td>
                                    <p>0.01</p>
                                </td>
                                <td>
                                    <p>7,054,564</p>
                                </td>

                            </tr>


                        </tbody>
                    </table>
                </div>



            </div>
        </div>
        <!-- End of Positions -->
    </div>
</template>