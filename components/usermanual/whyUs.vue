<template>
    <div class="flex flex-col md:flex-row gap-16 md:gap-10 mt-16 justify-center mx-12">
        <div class="border-gray-200 rounded-xl border border-solid flex justify-center relative  md:mx-0 px-2">
            <div class="absolute -top-12 right-auto left-auto flex mx-auto"><img src="../../assets/icons/moneyEx.png"
                    alt=""></div>
            <div class="text-center flex flex-col gap-2 leading-6 pb-4">
                <p v-text="state.whyUs1" class=" mt-16 text-md font-bold dark:text-white"></p>
                <p v-text="state.whyUs2" class="dark:text-white"></p>
            </div>

        </div>
        <div class="border-gray-200 rounded-xl border border-solid flex justify-center relative dark:text-white md:mx-0 px-2">
            <div class="absolute -top-12 right-auto left-auto flex mx-auto"><img src="../../assets/icons/moneyEx.png"
                    alt=""></div>
            <div class="text-center flex flex-col gap-2 leading-6 pb-4">
                <p  v-text="state.whyUs3" class=" mt-16 text-md font-bold"> </p>
                <p  v-text="state.whyUs4"></p>
            </div>

        </div>


</div>
</template>
<script setup>
const props = defineProps(['state'])
</script>