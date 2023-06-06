<template>
    <div class=" rounded-xl flex flex-col justify-between mx-12 bg-ExGray dark:bg-ExBlack pt-5 px-4 overflow-hidden dark:text-white"
        :class="[state.collapse ? 'h-full' : 'h-16']">
        <button @click="state.collapse = !state.collapse" class="flex justify-between w-full">
            <p class="text-start">
                <slot name="title"></slot>
            </p>
            <div>
                <svg v-show="!state.collapse" xmlns="http://www.w3.org/2000/svg" width="22.415" height="22.415"
                    viewBox="0 0 22.415 22.415">
                    <path id="add_FILL0_wght400_GRAD0_opsz48_1_" data-name="add_FILL0_wght400_GRAD0_opsz48 (1)"
                        d="M211.2,318.415a1.149,1.149,0,0,1-.854-.345,1.171,1.171,0,0,1-.34-.856v-8.806H201.2a1.158,1.158,0,0,1-.856-.347A1.172,1.172,0,0,1,200,307.2a1.149,1.149,0,0,1,.345-.854,1.171,1.171,0,0,1,.856-.34h8.806V297.2a1.158,1.158,0,0,1,.347-.856,1.172,1.172,0,0,1,.861-.345,1.149,1.149,0,0,1,.854.345,1.171,1.171,0,0,1,.34.856v8.806h8.806a1.158,1.158,0,0,1,.856.347,1.172,1.172,0,0,1,.345.861,1.149,1.149,0,0,1-.345.854,1.171,1.171,0,0,1-.856.34h-8.806v8.806a1.158,1.158,0,0,1-.347.856A1.172,1.172,0,0,1,211.2,318.415Z"
                        transform="translate(-200 -296)" fill="#00c0af" />
                </svg>
                <svg v-show="state.collapse" xmlns="http://www.w3.org/2000/svg" width="22.415" height="2.402"
                    viewBox="0 0 22.415 2.402">
                    <path id="add_FILL0_wght400_GRAD0_opsz48_1_" data-name="add_FILL0_wght400_GRAD0_opsz48 (1)"
                        d="M201.2,308.408a1.158,1.158,0,0,1-.856-.347A1.172,1.172,0,0,1,200,307.2a1.149,1.149,0,0,1,.345-.854,1.171,1.171,0,0,1,.856-.34h20.013a1.158,1.158,0,0,1,.856.347,1.172,1.172,0,0,1,.345.861,1.149,1.149,0,0,1-.345.854,1.171,1.171,0,0,1-.856.34Z"
                        transform="translate(-200 -306.007)" fill="#f63f3f" />
                </svg>

            </div>
        </button>
        <p class="my-6">
            <slot name="text"></slot>
        </p>
    </div>
</template>
<script setup>
const state = reactive({
    collapse: false
})
</script>