<template>
    <div class="flex flex-col md:flex-row px-4 gap-8 mt-12 justify-center md:mx-6">
        <a href="/singlepost" v-for="i in 2" class="flex flex-shrink-0 relative md:w-1/2 w-full">
            <img class="rounded-lg w-full" src="../../assets/images/post.png" alt="">
            <div class="bg-ExGreen opacity-90 text-white px-4 py-2 gap-1 absolute bottom-0 rounded-b-2xl w-full">
                <div class="flex justify-between items-center">
                    <p v-text="state.postTitle" class="text-base font-bold"> </p>
                    <p v-text="state.postTime" class="text-sm text-gray-300"> </p>
                </div>
                <p v-text="state.summery" class="text-base hidden lg:flex">
                </p>
            </div>
        </a>
    </div>
</template>
<script setup>
const props = defineProps(['state'])
</script>