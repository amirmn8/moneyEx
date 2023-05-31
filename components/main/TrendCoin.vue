<template>
    <div :class=coinDivClass>
        <p class="absolute left-8 top-4 text-ExPlaceHolder dark:text-white">24h</p>
        <slot name="image"></slot>
        <div class=" flex justify-between dark:text-white items-center mt-12">
            <p>{{ coinName }}</p>
            <p>{{ coinPrice }}</p>
        </div>
        <div class=" flex justify-between items-center">
            <p id="coin1">{{ coinPersianName }}</p>
            <p class="flex gap-2 items-center">
                <slot name="growIcon"></slot><span :class=coinClass>{{ coinChanges
                }} %</span>
            </p>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(['coinName', 'coinPrice', 'coinPersianName', 'coinChanges', 'coinClass', 'coinDivClass'])

</script>