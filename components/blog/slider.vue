<template>
    <section class="flex flex-row items-center justify-center w-full pt-12 sm:py-8 px-4">
        <div class="w-full relative flex items-center justify-center">

            <div class="w-full mx-auto overflow-auto no-scrollbar">
                <div id="slider" class=" flex xl:gap-8 md:gap-6 gap-14 items-center  transition ease-out duration-700">
                    <div v-for="i in 4" class="flex flex-shrink-0 flex-col xl:flex-row  w-full xl:h-530">
                        <img class="rounded-t-xl xl:basis-2/3 xl:rounded-tl-none xl:rounded-r-xl max-h-96 xl:max-h-max"
                            src="../../assets/images/Image4.png" alt="">
                        <div
                            class="bg-white dark:bg-ExBlack opacity-90 flex flex-col px-4 py-2 gap-3 w-full rounded-b-xl xl:rounded-l-xl xl:rounded-br-none pb-6 xl:basis-1/3 xl:p-8">
                            <div class="flex justify-between  items-center">

                                <p v-text="state.postTime" class="text-sm text-gray-700 xl:hidden"> </p>
                                <p v-text="state.sliderText1" class="text-base font-bold text-ExYellow "></p>
                            </div>
                            <p v-text="state.postTitle" class="text-base dark:text-white font-bold"> </p>

                            <p v-text="state.sliderText2"
                                class="text-base xl:leading-10 md:flex w-full dark:text-gray-200  h-5/6 overflow-hidden">

                            </p>
                            <button class="flex justify-between">
                                <div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="27.176"
                                        height="27.176" viewBox="0 0 27.176 27.176">
                                        <path id="arrow_circle_left_FILL0_wght400_GRAD0_opsz48"
                                            d="M92.5,190.607h5.163a1.019,1.019,0,1,0,0-2.038H92.5l1.8-1.8a1.009,1.009,0,1,0-1.427-1.427l-3.533,3.533a.985.985,0,0,0,0,1.427l3.533,3.533a1.009,1.009,0,1,0,1.427-1.427Zm1.087,12.569a13.148,13.148,0,0,1-5.265-1.07,13.69,13.69,0,0,1-7.253-7.253,13.573,13.573,0,0,1,0-10.565,13.579,13.579,0,0,1,2.921-4.314,13.929,13.929,0,0,1,4.331-2.9,13.573,13.573,0,0,1,10.565,0,13.567,13.567,0,0,1,7.219,7.219,13.573,13.573,0,0,1,0,10.565,13.929,13.929,0,0,1-2.9,4.331,13.579,13.579,0,0,1-4.314,2.921A13.231,13.231,0,0,1,93.588,203.176Zm0-2.038a11.54,11.54,0,1,0-8.17-3.38A11.114,11.114,0,0,0,93.588,201.138ZM93.588,189.588Z"
                                            transform="translate(-80 -176)" fill="#f6b33f" />
                                    </svg>
                                    <NuxtLink to="/singlepost">
                                        <p v-text="state.sliderText3" href="/singlepost" class="text-ExYellow"></p>
                                    </NuxtLink>

                                </div>
                                <p v-text="state.postTime" class="text-sm text-gray-700 dark:text-gray-300 hidden xl:block">
                                </p>

                            </button>
                        </div>
                    </div>

                </div>
            </div>



        </div>

    </section>

    <section style="direction: rtl;" class="flex justify-between  px-24 mt-4">
        <button @click="goNext" id="next"><img class="rotate-180" src="../../assets/icons/next.png" alt=""></button>
        <button @click="goPrev" id="perv"> <img src="../../assets/icons/next.png" alt=""></button>
    </section>


    <!-- End of Post slide Section -->
</template>
<script setup>
const props = defineProps(['state'])
let defaultTransform = 0;
function goNext() {
    defaultTransform = defaultTransform - 398;
    var slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7) defaultTransform = 0;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}
function goPrev() {
    var slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
    else defaultTransform = defaultTransform + 398;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}
</script>