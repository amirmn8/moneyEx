<template>
    <div class="grid grid-cols-2 lg:grid-cols-4 mx-12 mt-12 gap-4 dark:text-white">
        <button @click="state.openBox = false" class="border border-gray-200 border-solid rounded-lg flex flex-col justify-center items-center py-4 gap-6">
            <IconsSignin />
            <p>ثبت نام و احراز هویت</p>
        </button>
        <button @click="state.openBox = false" class="border border-gray-200 border-solid rounded-lg flex flex-col justify-center items-center py-4 gap-6">
            <IconsProtect />
            <p>امنیت حساب و اطلاعت</p>
        </button>
        <button @click="state.openBox = false" class="border border-gray-200 border-solid rounded-lg flex flex-col justify-center items-center py-4 gap-6">
            <IconsHistory />
            <p>  سوابق حساب</p>
        </button>
        <button @click="state.openBox = false" class="border border-gray-200 border-solid rounded-lg flex flex-col justify-center items-center py-4 gap-6">
            <IconsInvite />
            <p> معرفی دوستان و هدایا</p>
        </button>
        <button @click="state.openBox = false" class="border border-gray-200 border-solid rounded-lg flex flex-col justify-center items-center py-4 gap-6">
            <IconsSellandbuy />
            <p>واریز و خرید</p>
        </button>
        <button @click="state.openBox = false" class="border border-gray-200 border-solid rounded-lg flex flex-col justify-center items-center py-4 gap-6">
            <IconsDeposit />
            <p> برداشت و فروش</p>
        </button>
        <button @click="state.openBox = false" class="border border-gray-200 border-solid rounded-lg flex flex-col justify-center items-center py-4 gap-6">
            <IconsWallet />
            <p> کیف پول دیجیتال</p>
        </button>
        <button @click="state.openBox = false" class="border border-gray-200 border-solid rounded-lg flex flex-col justify-center items-center py-4 gap-6">
            <IconsGuids />
            <p>راهنمای کارمزدها  </p>
        </button>
    </div>
    
</template>
<script setup>
const props = defineProps(['state'])

</script>