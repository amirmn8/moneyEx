<template>
    <div
        class="flex flex-col bg-gray-100 md:bg-white md:mx-12 lg:mx-10 justify-center items-center py-8 px-8 rounded-xl mt-8 dark:bg-ExBlack">

        <div class="flex gap-2 w-full justify-center md:justify-between items-center">
            <div id="select w-full">
                <select
                    class="form-select dark:bg-ExBlack dark:text-white w-full px-10 border-none focus:border-none focus:outline-none focus:ring-0 hover:border-none h-10">
                    <option value=""> BTC/USDT</option>
                    <option value="">USD</option>
                    <option value="">USDT</option>
                    <option value="">BTC</option>
                </select>
            </div>
            <div class="md:flex flex-col hidden xl:hidden">
                <p class="font-bold text-ExGreen">30,968.596</p>
                <p style="direction: ltr;" class="dark:text-white">=30,968.596 USD</p>
            </div>
            <div class="justify-between items-center gap-8 hidden xl:flex  mt-6 xl:mt-0 text-sm">
                <div class="flex flex-col  ">
                    <p class="font-bold text-ExGreen">30,968.596</p>
                    <p class="dark:text-white" style="direction: ltr;">=30,968.596 USD</p>
                </div>
                <div class="flex flex-col gap-2">
                    <p v-text="state.headerText1" class="text-ExPlaceHolder dark:text-gray-300"> </p>
                    <div class="flex gap-2 items-center text-ExGreen"><img class="w-4 h-4"
                            src="../../assets/icons/trending_up.png" alt="">
                        <p class="font-bold" style="direction: ltr;">+ 1.09 %</p>
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <p v-text="state.headerText2" class="text-ExPlaceHolder dark:text-gray-300"></p>
                    <div class="flex gap-2 items-center text-ExGreen"><img class="w-4 h-4"
                            src="../../assets/icons/trending_up.png" alt="">
                        <p class="font-bold" style="direction: ltr;">+ 0.2455 %</p>
                    </div>
                </div>
                <div class="hidden md:flex flex-col gap-2">
                    <p v-text="state.headerText3" class="text-ExPlaceHolder dark:text-gray-300"></p>
                    <p class="dark:text-white" style="direction: ltr;">=30,968.596 USD</p>
                </div>
                <div class="md:flex hidden flex-col gap-2">
                    <p v-text="state.headerText4" class="text-ExPlaceHolder dark:text-gray-300"> </p>
                    <div class="flex gap-2 items-center ">
                        <p class="dark:text-white" style="direction: ltr;">1</p>
                    </div>
                </div>
                <div class="md:flex flex-col gap-2 hidden">
                    <p v-text="state.headerText5" class="text-ExPlaceHolder dark:text-gray-300"> </p>
                    <div class="flex gap-2 items-center">
                        <p class="dark:text-white" style="direction: ltr;">14,767,993.121</p>
                    </div>
                </div>
            </div>
            <div class="flex gap-4"> <button
                    class="mobile-menu-button bg-white items-center border-gray-300 hover:bg-ExYellow hover:text-white text-ExYellow hover:fill-white fill-ExYellow border-solid border flex px-3 py-3 rounded-lg gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 25.902 24.725">
                        <path id="query_stats_FILL0_wght400_GRAD0_opsz48"
                            d="M41.442,194.573,40,193.513l5.534-8.83,3.519,4.121,4.693-7.594,3.208,4.768a5.577,5.577,0,0,0-.912.191q-.442.132-.883.309l-1.325-2.031-4.49,7.329-3.575-4.15Zm23.194,6.152-3.944-3.944a4.916,4.916,0,0,1-1.339.677,4.759,4.759,0,0,1-1.486.235,5.014,5.014,0,1,1,5-5,4.5,4.5,0,0,1-.25,1.486,6.844,6.844,0,0,1-.662,1.382l3.944,3.9Zm-6.774-4.8a3.209,3.209,0,1,0-2.3-.942A3.136,3.136,0,0,0,57.862,195.927Zm2.182-9.654a3.674,3.674,0,0,0-.912-.235q-.471-.059-.971-.118L64.46,176l1.442,1.06Z"
                            transform="translate(-40 -176)" fill="#333" />
                    </svg>

                </button>
                <button
                    class="mobile-menu-button bg-white items-center border-gray-300 hover:bg-ExYellow hover:text-white text-ExYellow hover:fill-white fill-ExYellow border-solid border flex px-3 py-3 rounded-lg gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 22.4 22.4">
                        <path id="support_FILL0_wght400_GRAD0_opsz48_1_" data-name="support_FILL0_wght400_GRAD0_opsz48 (1)"
                            d="M91.2,198.4a10.906,10.906,0,0,1-4.368-.882,11.182,11.182,0,0,1-5.95-5.95,11.257,11.257,0,0,1,0-8.736,11.182,11.182,0,0,1,5.95-5.95,11.257,11.257,0,0,1,8.736,0,11.182,11.182,0,0,1,5.95,5.95,11.257,11.257,0,0,1,0,8.736,11.182,11.182,0,0,1-5.95,5.95A10.906,10.906,0,0,1,91.2,198.4Zm-3.388-2.24,1.764-4.2a5.04,5.04,0,0,1-1.89-1.162,5.1,5.1,0,0,1-1.246-1.946l-4.2,1.68a11.348,11.348,0,0,0,2.3,3.444A9.345,9.345,0,0,0,87.812,196.16Zm-1.4-10.584a5.623,5.623,0,0,1,1.26-1.96,4.838,4.838,0,0,1,1.876-1.176l-1.68-4.2a10.67,10.67,0,0,0-3.556,2.338A8.495,8.495,0,0,0,82.24,183.9ZM91.2,190.56a3.346,3.346,0,1,0-2.38-.98A3.24,3.24,0,0,0,91.2,190.56Zm3.388,5.6a9.925,9.925,0,0,0,3.36-2.226,10.256,10.256,0,0,0,2.212-3.346l-4.2-1.736a5.064,5.064,0,0,1-1.246,1.974,4.749,4.749,0,0,1-1.89,1.134Zm1.372-10.612,4.2-1.736a10.2,10.2,0,0,0-5.572-5.572l-1.708,4.2a4.678,4.678,0,0,1,1.848,1.162A5.685,5.685,0,0,1,95.96,185.548Z"
                            transform="translate(-80 -176)" fill="#333" />
                    </svg>


                </button>
            </div>

        </div>
        <div class="flex justify-between items-center gap-6 xl:hidden  mt-6 text-sm">
            <div class="flex flex-col gap-2 md:hidden">
                <p class="font-bold text-ExGreen">30,968.596</p>
                <p class="dark:text-white" style="direction: ltr;">=30,968.596 USD</p>
            </div>
            <div class="flex flex-col gap-2">
                <p v-text="state.headerText1" class="text-ExPlaceHolder dark:text-gray-300"> </p>
                <div class="flex gap-2 items-center text-ExGreen"><img class="w-4 h-4"
                        src="../../assets/icons/trending_up.png" alt="">
                    <p class="font-bold" style="direction: ltr;">+ 1.09 %</p>
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <p v-text="state.headerText2" class="text-ExPlaceHolder dark:text-gray-300"> </p>
                <div class="flex gap-2 items-center text-ExGreen"><img class="w-4 h-4"
                        src="../../assets/icons/trending_up.png" alt="">
                    <p class="font-bold" style="direction: ltr;">+ 0.2455 %</p>
                </div>
            </div>
            <div class="hidden md:flex flex-col gap-2">
                <p v-text="state.headerText3" class="text-ExPlaceHolder dark:text-gray-300"> </p>
                <p class="dark:text-white" style="direction: ltr;">=30,968.596 USD</p>
            </div>
            <div class="md:flex hidden flex-col gap-2">
                <p v-text="state.headerText4" class="text-ExPlaceHolder dark:text-gray-300"> </p>
                <div class="flex gap-2 items-center ">
                    <p class="dark:text-white" style="direction: ltr;">1</p>
                </div>
            </div>
            <div class="md:flex flex-col gap-2 hidden">
                <p v-text="state.headerText5" class="text-ExPlaceHolder dark:text-gray-300"> </p>
                <div class="flex gap-2 items-center">
                    <p class="dark:text-white" style="direction: ltr;">14,767,993.121</p>
                </div>
            </div>
        </div>
        <div class="flex justify-between items-center gap-6 md:hidden mt-6 text-sm">
            <div class="flex flex-col gap-2">
                <p v-text="state.headerText3" class="text-ExPlaceHolder dark:text-gray-300"> </p>
                <p class="dark:text-white" style="direction: ltr;">=30,968.596 USD</p>
            </div>
            <div class="flex flex-col gap-2">
                <p v-text="state.headerText4" class="text-ExPlaceHolder dark:text-gray-300"> </p>
                <div class="flex gap-2 items-center ">
                    <p class="dark:text-white" style="direction: ltr;">1</p>
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <p v-text="state.headerText5" class="text-ExPlaceHolder dark:text-gray-300"> </p>
                <div class="flex gap-2 items-center">
                    <p class="dark:text-white" style="direction: ltr;">14,767,993.121</p>
                </div>
            </div>
        </div>



    </div>
</template>
<script setup>
const props = defineProps(['state'])
</script>