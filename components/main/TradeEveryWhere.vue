<template>
    <section
        class="grid grid-cols-1 lg:grid-rows-4 lg:grid-flow-col md:grid-cols-2 mx-10 gap-6 mt-16 md:mx-16 items-center lg:mx-32">

        <div
            class="flex lg:col-span-2 md:col-span-12 order-2 flex-col md:order-1 gap-2 justify-center md:items-center lg:items-start">
            <p v-text="state.tradeEverywhereText1" class="text-sm text-ExYellow"></p>
            <p v-text="state.tradeEverywhereText2" class="text-lg font-bold dark:text-white"></p>
            <p v-text="state.tradeEverywhereText3" class="text-sm text-gray-600 dark:text-gray-400"></p>
        </div>
        <div class="flex lg:row-span-2 lg:col-span-2 order-3 md:order-2 md:col-span-6 flex-col gap-6">
            <div class="flex flex-col gap-2">
                <div class="flex items-center gap-2">
                    <svg class="fill-blue-900 dark:fill-teal-500" xmlns="http://www.w3.org/2000/svg" width="29.06"
                        height="25.615" viewBox="0 0 29.06 25.615">
                        <path
                            d="M6.612,29.427V7.649A1.536,1.536,0,0,1,8.15,6.111H27.458L24.389,9.18H9.681V27.89h18.71V19.944l3.069-3.069V29.428a1.54,1.54,0,0,1-1.538,1.538H8.15a1.537,1.537,0,0,1-1.538-1.539M19.978,17.643,16.7,14.366a2.36,2.36,0,0,0-4.027,1.67,2.32,2.32,0,0,0,.693,1.663l4.94,4.942a2.361,2.361,0,0,0,3.334,0L34.979,9.375A2.358,2.358,0,0,0,31.645,6.04Z"
                            transform="translate(-6.612 -5.351)" />
                    </svg>

                    <p v-text="state.tradeEverywhereText4" class="text-md font-bold  dark:text-white">
                    </p>
                </div>
                <p v-text="state.tradeEverywhereText5" class="text-sm text-gray-600 dark:text-gray-400"></p>

            </div>
            <div class="flex flex-col gap-2">
                <div class="flex items-center gap-2"><svg class="fill-blue-900 dark:fill-teal-500"
                        xmlns="http://www.w3.org/2000/svg" width="29.06" height="25.615" viewBox="0 0 29.06 25.615">
                        <path
                            d="M6.612,29.427V7.649A1.536,1.536,0,0,1,8.15,6.111H27.458L24.389,9.18H9.681V27.89h18.71V19.944l3.069-3.069V29.428a1.54,1.54,0,0,1-1.538,1.538H8.15a1.537,1.537,0,0,1-1.538-1.539M19.978,17.643,16.7,14.366a2.36,2.36,0,0,0-4.027,1.67,2.32,2.32,0,0,0,.693,1.663l4.94,4.942a2.361,2.361,0,0,0,3.334,0L34.979,9.375A2.358,2.358,0,0,0,31.645,6.04Z"
                            transform="translate(-6.612 -5.351)" />
                    </svg>

                    <p v-text="state.tradeEverywhereText6" class="text-md font-bold  dark:text-white"></p>
                </div>
                <p v-text="state.tradeEverywhereText7" class="text-sm text-gray-600 dark:text-gray-400">
                </p>
            </div>
            <div class="flex flex-col gap-2">
                <div class="flex items-center gap-2"><svg class="fill-blue-900 dark:fill-teal-500"
                        xmlns="http://www.w3.org/2000/svg" width="29.06" height="25.615" viewBox="0 0 29.06 25.615">
                        <path
                            d="M6.612,29.427V7.649A1.536,1.536,0,0,1,8.15,6.111H27.458L24.389,9.18H9.681V27.89h18.71V19.944l3.069-3.069V29.428a1.54,1.54,0,0,1-1.538,1.538H8.15a1.537,1.537,0,0,1-1.538-1.539M19.978,17.643,16.7,14.366a2.36,2.36,0,0,0-4.027,1.67,2.32,2.32,0,0,0,.693,1.663l4.94,4.942a2.361,2.361,0,0,0,3.334,0L34.979,9.375A2.358,2.358,0,0,0,31.645,6.04Z"
                            transform="translate(-6.612 -5.351)" />
                    </svg>

                    <p v-text="state.tradeEverywhereText8" class="text-md font-bold  dark:text-white"></p>
                </div>
                <p v-text="state.tradeEverywhereText9" class="text-sm text-gray-600 dark:text-gray-400"></p>

            </div>

        </div>
        <div class="flex lg:row-span-3 order-1 md:order-3 md:col-span-6  justify-center">
            <img :src=state.image>
        </div>
    </section>
</template>
<script setup>
const props = defineProps(['state'])
</script>