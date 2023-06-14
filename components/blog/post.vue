<template>
    <div dir="ltr" class="w-fit col-span-12 md:col-span-6 lg:col-span-4 my-4 flex flex-col mx-auto">
        <img class="rounded-t-lg w-full" src="../../assets/images/postimg.png" alt="">
        <div class="flex flex-col px-4 bg-white dark:bg-ExBlack dark:text-white rounded-b-lg py-4 gap-4">
            <p v-text="state.postTitle" class="font-bold"> </p>
            <p v-text="state.summery"> </p>
            <div class="flex justify-between">
                <p v-text="state.postTime" class="text-sm text-gray-700 hidden xl:block dark:text-gray-400"> </p>

                <div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="27.176" height="27.176"
                        viewBox="0 0 27.176 27.176">
                        <path id="arrow_circle_left_FILL0_wght400_GRAD0_opsz48"
                            d="M92.5,190.607h5.163a1.019,1.019,0,1,0,0-2.038H92.5l1.8-1.8a1.009,1.009,0,1,0-1.427-1.427l-3.533,3.533a.985.985,0,0,0,0,1.427l3.533,3.533a1.009,1.009,0,1,0,1.427-1.427Zm1.087,12.569a13.148,13.148,0,0,1-5.265-1.07,13.69,13.69,0,0,1-7.253-7.253,13.573,13.573,0,0,1,0-10.565,13.579,13.579,0,0,1,2.921-4.314,13.929,13.929,0,0,1,4.331-2.9,13.573,13.573,0,0,1,10.565,0,13.567,13.567,0,0,1,7.219,7.219,13.573,13.573,0,0,1,0,10.565,13.929,13.929,0,0,1-2.9,4.331,13.579,13.579,0,0,1-4.314,2.921A13.231,13.231,0,0,1,93.588,203.176Zm0-2.038a11.54,11.54,0,1,0-8.17-3.38A11.114,11.114,0,0,0,93.588,201.138ZM93.588,189.588Z"
                            transform="translate(-80 -176)" fill="#f6b33f" />
                    </svg>
                    <NuxtLink to="/singlepost">
                        <p v-text="state.sliderText3" href="/singlepost" class="text-ExYellow"> </p>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(['state'])
</script>