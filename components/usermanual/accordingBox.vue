<template>
    <div class="my-12 gap-2 flex flex-col xl:w-2/3 mx-auto">
        <div class="flex text-sm justify-between mx-12 mb-4 dark:text-white">
            <p><span class="text-gray-400"> {{ state.accordingText1 }}</span> {{ state.accordingText2 }}</p>
            <button @click="state.openBox = true">{{ state.accordingText3 }}</button>
        </div>

        <UsermanualAccording>
            <template #title>{{ state.accordingText4 }}</template>
            <template #text> {{ state.accordingText5 }}</template>
        </UsermanualAccording>
        <UsermanualAccording>
            <template #title>{{ state.accordingText4 }}</template>
            <template #text> {{ state.accordingText5 }}</template>
        </UsermanualAccording>
        <UsermanualAccording>
            <template #title>{{ state.accordingText4 }}</template>
            <template #text> {{ state.accordingText5 }}</template>
        </UsermanualAccording>
        <UsermanualAccording>
            <template #title>{{ state.accordingText4 }}</template>
            <template #text> {{ state.accordingText5 }}</template>
        </UsermanualAccording>
        <UsermanualAccording>
            <template #title>{{ state.accordingText4 }}</template>
            <template #text> {{ state.accordingText5 }}</template>
        </UsermanualAccording>
    </div>
</template>
<script setup>
const props = defineProps(['state'])
</script>