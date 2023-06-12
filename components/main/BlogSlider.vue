<template>
    <div class="relative">
        <p v-text="state.postSlideText1" class="text-2xl font-bold text-center mt-16 lg:mt-0 dark:text-white">
        </p>
        <p v-text="state.postSlideText2" class="text-base text-center mt-2 dark:text-white hidden md:block"></p>
        <p class="flex items-center gap-2 text-teal-400 absolute left-6 top-8 md:top-12 font-light text-sm"> <span
                v-text="state.seeAll"></span>
            <svg xmlns="http://www.w3.org/2000/svg" width="5.863" height="10.256" viewBox="0 0 5.863 10.256">
                <path id="Arrow-left"
                    d="M1.768,5.129,5.648,9.007A.733.733,0,0,1,4.61,10.042L.213,5.648A.731.731,0,0,1,.192,4.638L4.607.214A.733.733,0,0,1,5.645,1.249Z"
                    transform="translate(0)" fill="#00c0af" />
            </svg>
        </p>
    </div>



    <section class="flex items-center justify-center w-full pt-12 sm:py-8 px-4">
        <div style="direction: ltr;" class="w-full relative flex items-center justify-center">

            <div class="w-full mx-auto overflow-auto no-scrollbar">
                <div id="slider"
                    class=" flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">

                    <div v-for="i in 10" class="flex flex-shrink-0 relative md:w-540 w-328">
                        <NuxtLink to="/singlepost">
                            <img class="rounded-lg" src="../../assets/images/post.png" alt="">
                            <div
                                class="bg-ExGreen opacity-90 text-white px-4 py-2 gap-1 absolute bottom-0 rounded-b-2xl w-full">
                                <div class="flex justify-between items-center">
                                    <p v-text="state.postTitle" class="text-base font-bold"> </p>
                                    <p v-text="state.postTime" class="text-sm text-gray-300"> </p>
                                </div>
                                <p v-text="state.summery" class="text-base hidden md:flex">
                                </p>
                            </div>
                        </NuxtLink>
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