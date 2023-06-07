<template>
    <div class="bg-exBlog 2xl:px-36 px-4 pb-48 text-white">
        <div class="flex justify-between mx-6 py-8">
            <p class="font-bold">انتخاب دسته بندی</p>
            <p>136 مورد برای نمایش</p>
        </div>
        <div class="flex flex-col overflow-x-scroll">

            <div class="flex flex-row w-fit md:w-full gap-6 overflow-x-scroll justify-between px-6">
                <button class="border border-white border-solid rounded-lg w-36 py-2 ">
                    اخبار رمز ارز
                </button>
                <button class="border border-white border-solid rounded-lg w-36 py-2">
                    NFT </button>
                <button class="border border-white border-solid rounded-lg w-36 py-2">
                    آموزش </button>
                <button class="border border-white border-solid rounded-lg w-36 py-2">
                    رویدادها </button>
                <button class="border border-white border-solid rounded-lg w-36 py-2">
                    مقالات </button>
                <button class="border border-white border-solid rounded-lg w-36 py-2">
                    قیمت </button>
            </div>
        </div>
    </div>
    <div class="2xl:px-36 px-4 pb-48 -mt-32 ">
        <div class="flex justify-between flex-wrap ">
            <div class="hidden md:block lg:hidden"  v-for=" i in 8">
                <BlogPost :state="state" />
            </div>
            <div class="md:hidden"  v-for=" i in 4">
                <BlogPost :state="state" />
            </div>
            <div class="hidden xl:block"  v-for=" i in 12">
                <BlogPost :state="state" />
            </div>

        </div>

    </div>
</template>
<script setup>
const props = defineProps(['state'])
</script>