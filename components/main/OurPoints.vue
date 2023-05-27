<template>
    <section class="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-16 mt-16 mx-4 md:mx-16">
        <div class="flex flex-col justify-center items-center gap-2">
            <div>
                <img class="dark:hidden" src="../../assets/icons/Manage.png" alt="">
                <img class="dark:block hidden" src="../../assets/icons/Manage-profiledark.png" alt="">
            </div>
            <p v-text="state.ourPointsText5" class="text-sm font-bold dark:text-white"> </p>
            <p v-text="state.ourPointsText6"
                class="text-xs text-gray-600 text-center font-bold w-32 lg:w-48 dark:text-gray-400">

            </p>

        </div>
        <div class="flex flex-col justify-center items-center gap-2">
            <div>
                <img class="dark:hidden" src="../../assets/icons/Order.png" alt="">
                <img class="dark:block hidden" src="../../assets/icons/Orderdark.png" alt="">
            </div>
            <p v-text="state.ourPointsText7" class="text-sm font-bold dark:text-white"> </p>
            <p v-text="state.ourPointsText8"
                class="text-xs text-gray-600 text-center font-bold w-32 lg:w-48 dark:text-gray-400"> </p>

        </div>
        <div class="flex flex-col justify-center items-center gap-2 dark:text-white">
            <div>
                <img class="dark:hidden" src="../../assets/icons/Fast.png" alt="">
                <img class="dark:block hidden" src="../../assets/icons/Walletdark.png" alt="">
            </div>
            <p v-text="state.ourPointsText1" class="text-sm font-bold dark:text-white"> </p>
            <p v-text="state.ourPointsText2"
                class="text-xs text-gray-600 text-center font-bold w-32 lg:w-48 dark:text-gray-400"></p>

        </div>
        <div class="flex flex-col justify-center items-center gap-2">
            <div>
                <img class="dark:hidden" src="../../assets/icons/Support.png" alt="">
                <img class="dark:block hidden" src="../../assets/icons/Supportdark.png" alt="">
            </div>
            <p v-text="state.ourPointsText3" class="text-sm font-bold dark:text-white"> </p>
            <p v-text="state.ourPointsText4"
                class="text-xs text-gray-600 text-center font-bold w-32 lg:w-48 dark:text-gray-400">
            </p>

        </div>


    </section>
</template>
<script setup>
const props = defineProps(['state'])
</script>