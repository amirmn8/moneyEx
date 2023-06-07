<template>
    <div class="grid grid-cols-2 lg:grid-cols-4 mx-12 mt-12 gap-4 dark:text-white">
        <button @click="state.openBox = false"
            class="border border-gray-200 border-solid rounded-lg flex flex-col justify-center items-center py-4 gap-6">
            <IconsSignin />
            <p v-text="state.subject1"></p>
        </button>
        <button @click="state.openBox = false"
            class="border border-gray-200 border-solid rounded-lg flex flex-col justify-center items-center py-4 gap-6">
            <IconsProtect />
            <p v-text="state.subject2"> </p>
        </button>
        <button @click="state.openBox = false"
            class="border border-gray-200 border-solid rounded-lg flex flex-col justify-center items-center py-4 gap-6">
            <IconsHistory />
            <p v-text="state.subject3"> </p>
        </button>
        <button @click="state.openBox = false"
            class="border border-gray-200 border-solid rounded-lg flex flex-col justify-center items-center py-4 gap-6">
            <IconsInvite />
            <p v-text="state.subject4"> </p>
        </button>
        <button @click="state.openBox = false"
            class="border border-gray-200 border-solid rounded-lg flex flex-col justify-center items-center py-4 gap-6">
            <IconsSellandbuy />
            <p v-text="state.subject5"></p>
        </button>
        <button @click="state.openBox = false"
            class="border border-gray-200 border-solid rounded-lg flex flex-col justify-center items-center py-4 gap-6">
            <IconsDeposit />
            <p v-text="state.subject6"> </p>
        </button>
        <button @click="state.openBox = false"
            class="border border-gray-200 border-solid rounded-lg flex flex-col justify-center items-center py-4 gap-6">
            <IconsWallet />
            <p v-text="state.subject7"> </p>
        </button>
        <button @click="state.openBox = false"
            class="border border-gray-200 border-solid rounded-lg flex flex-col justify-center items-center py-4 gap-6">
            <IconsGuids />
            <p v-text="state.subject8"> </p>
    </button>
</div></template>
<script setup>
const props = defineProps(['state'])
</script>