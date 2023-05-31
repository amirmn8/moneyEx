<template>
    <div></div>
    <section
        class="flex md:flex-row flex-col pt-10 md:pt-24 justify-evenly items-center md:items-start gap-5 md:gap-0 mx-12 lg:mx-0 ">
        <div class="flex flex-col gap-4">
            <p v-text="state.headerText1" class="text-white text-xl font-bold"></p>
            <p v-html="state.headerText2" class="text-white text-3xl font-bold">
            </p>
        </div>
        <div class="gap-2 grid md:justify-items-end justify-items-center">
            <p v-text="state.headerText3" class="text-xl inline bg-ExGreen text-white py-2 px-2 text-left">
            </p>
            <p v-text="state.headerText4" class="text-xl rotate-2 bg-white py-1 px-2 text-left dark:text-ExYellow">
            </p>
        </div>
    </section>
    <!-- End of Hero Section -->
    <!-- Hero Exchange Section -->
    <section class="prose ">
        <div
            class="flex w-11/12 justify-start items-center z-20 flex-col-reverse lg:flex-row shadow-md shadow-gray-300 dark:shadow-zinc-900   lg:w-8/12 bg-white dark:bg-black  md:pb-10 mx-auto mt-16 rounded-3xl ">
            <div class="flex  justify-center  mx-auto lg:mx-0 md:my-auto">
                <img class="rotate-90 lg:rotate-0" src="../../assets/images/HeroImg.png" alt="">
            </div>


            <form class="w-full lg:w-3/4 2xl:w-7/12 3xl:w-8/12 flex flex-col px-6 pt-6">
                <div class="mb-4 w-full grid grid-cols-2">
                    <div>
                        <label v-text="state.amountPaid" class="block text-ExPlaceHolder text-sm font-bold mb-2"
                            for="username"></label>
                        <input type="text" placeholder="0"
                            class="flex w-full items-center justify-between rounded h-10 bg-white p-2 border border-solid border-gray-300 ">
                    </div>

                    <div id="select w-full flex ">
                        <select
                            class="form-select w-full px-10 mt-7 border rounded border-solid border-gray-300 h-10 bg-gray-100 appearance-none">
                            <option value="">بیت کوین</option>
                        </select>
                    </div>
                </div>
                <div class="flex mx-auto fill-gray-500 dark:fill-white"><span><svg xmlns="http://www.w3.org/2000/svg"
                            width="24.414" height="32.578" viewBox="0 0 24.414 32.578">
                            <path id="autochange"
                                d="M160.687,170.409a9.493,9.493,0,0,1-.534-2.022,14.038,14.038,0,0,1-.153-2.06,12.309,12.309,0,0,1,12.207-12.207h1.64l-2.327-2.327a.95.95,0,0,1-.286-.744,1.083,1.083,0,0,1,.324-.744,1.059,1.059,0,0,1,1.488,0l4.12,4.158a1.162,1.162,0,0,1,.267.381,1.192,1.192,0,0,1,0,.839,1.162,1.162,0,0,1-.267.381l-4.12,4.12a1.079,1.079,0,0,1-1.526-1.526l2.251-2.251h-1.564a9.964,9.964,0,0,0-9.918,9.918,9.8,9.8,0,0,0,.153,1.755,14.765,14.765,0,0,0,.381,1.6,1.091,1.091,0,0,1,0,.572,1.041,1.041,0,0,1-.267.5,1.19,1.19,0,0,1-1.068.4A1.012,1.012,0,0,1,160.687,170.409Zm10.643,11.864-4.158-4.12a1.163,1.163,0,0,1-.267-.381,1.192,1.192,0,0,1,0-.839,1.163,1.163,0,0,1,.267-.381l4.158-4.158a1.052,1.052,0,0,1,1.488,1.488l-2.327,2.327h1.717a9.964,9.964,0,0,0,9.918-9.918,11.528,11.528,0,0,0-.134-1.774,9.161,9.161,0,0,0-.4-1.621,1.159,1.159,0,0,1-.019-.553.909.909,0,0,1,.248-.477,1.19,1.19,0,0,1,1.068-.4,1.012,1.012,0,0,1,.8.744,10.366,10.366,0,0,1,.553,2.022,12.51,12.51,0,0,1,.172,2.06A12.309,12.309,0,0,1,172.207,178.5H170.49l2.327,2.327a1.013,1.013,0,0,1,0,1.45,1.059,1.059,0,0,1-1.488,0Z"
                                transform="translate(-160 -150)" fill="inherit" />
                        </svg>
                    </span></div>
                <div class="mb-4 -mt-4 w-full grid grid-cols-2">
                    <div>
                        <label v-text="state.amountPaid2" class="block text-ExPlaceHolder text-sm font-bold mb-2">
                        </label>
                        <input disabled type="text" placeholder="0"
                            class="flex w-full items-center rounded justify-between  h-10 bg-white p-2 border border-solid border-gray-300 ">
                    </div>

                    <div id="select w-full">
                        <select
                            class="form-select w-full px-10 mt-7 border rounded border-solid border-gray-300 h-10 bg-gray-100 appearance-none">
                            <option value="">بیت کوین</option>
                        </select>
                    </div>
                </div>
                <div class="mb-4 w-full">
                    <div>
                        <label v-text="state.btcAddress" class="block text-ExPlaceHolder text-sm font-bold mb-2">
                        </label>
                        <input type="text"
                            class="flex w-full items-center justify-between rounded h-10 bg-white p-2 border border-solid border-gray-300 ">
                    </div>
                </div>
                <div class="mb-4 w-full grid lg:grid-cols-2 gap-4">
                    <div>
                        <label v-text="state.email" class="block text-ExPlaceHolder text-sm font-bold mb-2">
                        </label>
                        <input type="text"
                            class="flex w-full items-center justify-between rounded h-10 bg-white p-2 border border-solid border-gray-300 ">
                    </div>

                    <button
                        class="border-ExYellow shadow-sm dark:hover:shadow-lg dark:hover:shadow-ExYellow shadow-ExYellow bg-ExYellow h-10 text-white border-solid hover:border hover:bg-white hover:text-ExYellow mt-7 flex justify-center px-3 py-2 rounded-md gap-2 dark:hover:bg-ExYellow dark:hover:text-white">

                        <p v-text="state.buyForce"></p>
                    </button>

                </div>
                <div class="flex justify-center mt-6 text-sm">
                    <p v-text="state.privacy"></p>
                </div>
            </form>
        </div>
    </section>
</template>
<script setup>
const props = defineProps(['state'])
</script>