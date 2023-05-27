<template>
    <section class="flex flex-col lg:flex-row-reverse lg:items-center mx-6 md:mx-16 mt-16 gap-4 md:flex-col-reverse">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 md:gap-16 md:mx-6">
            <div class="flex flex-col gap-4">
                <p v-text="state.whyUsText1" class="text-lg font-bold dark:text-white"></p>
                <p v-text="state.whyUsText2" class="text-lg font-bold text-ExYellow"></p>
                <p v-text="state.whyUsText3" class="text-md text-gray-600 dark:text-white"></p>
            </div>

            <div class="flex flex-col gap-4">
                <div class="flex items-center gap-2">
                    <img class="dark:hidden" src="../../assets/icons/Safe.png" alt="">
                    <img class="hidden dark:block" src="../../assets/icons/SafeDrk.png" alt="">
                    <p v-text="state.whyUsText4" class="text-base font-bold dark:text-white"></p>
                </div>
                <div class="flex items-center gap-2">
                    <img class="dark:hidden" src="../../assets/icons/Privacy.png" alt="">
                    <img class="hidden dark:block" src="../../assets/icons/PrivacyDark.png" alt="">
                    <p v-text="state.whyUsText5" class="text-base font-bold dark:text-white"></p>
                </div>
                <div class="flex items-center gap-2">
                    <img class="dark:hidden" src="../../assets/icons/Cryptos.png" alt="">
                    <img class="hidden dark:block" src="../../assets/icons/CryptosDark.png" alt="">
                    <p v-text="state.whyUsText6" class="text-base font-bold dark:text-white"></p>
                </div>
            </div>
        </div>

        <div class="flex justify-center w-full">
            <img class="w-full dark:hidden" src="../../assets/images/site-screen.png" alt="">
            <img class="w-full hidden dark:block" src="../../assets/images/site-screen-dark.png" alt="">
        </div>
    </section>
</template>
<script setup>
const props = defineProps(['state'])
</script>