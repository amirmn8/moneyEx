<template>
    <div class="bg-exBlog 2xl:px-36 px-4 pb-48 text-white">
        <div class="flex justify-between mx-6 py-8">
            <p class="font-bold">انتخاب دسته بندی</p>
            <p>136 مورد برای نمایش</p>
        </div>
        <div class="flex flex-col overflow-x-scroll no-scrollbar">

            <div class="flex flex-row w-fit md:w-full gap-6  justify-between px-6">
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
    <div class="2xl:px-24 px-4 pb-16 -mt-32">
        <div class="flex justify-center gap-4 lg:gap-0 lg:justify-between flex-wrap ">
            <div class="hidden md:block xl:hidden" v-for=" i in 8">
                <BlogPost :state="state" />
            </div>
            <div class="md:hidden" v-for=" i in 4">
                <BlogPost :state="state" />
            </div>
            <div class="hidden xl:block" v-for=" i in 12">
                <BlogPost :state="state" />
            </div>

        </div>

    </div>
    <div class="flex mx-auto justify-center gap-4 mt-4 md:hidden">
        <button
            class="bg-ExYellow items-center text-white fill-white hover:fill-ExYellow hover:bg-white hover:text-ExYellow  border border-solid border-ExYellow dark:text-ExBlack  dark:hover:bg-ExYellow dark:hover:shadow-md dark:hover:shadow-gray-600 flex px-3 py-2 rounded-lg gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="10.289" height="17.997" viewBox="0 0 10.289 17.997">
                <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back"
                    d="M18.438,15.19l-6.81-6.8A1.286,1.286,0,1,1,13.45,6.569l7.715,7.71a1.284,1.284,0,0,1,.038,1.773l-7.747,7.763A1.286,1.286,0,0,1,11.634,22Z"
                    transform="translate(-11.251 -6.194)" />
            </svg>
            <p>صفحه بعد</p>


        </button>
        <button
            class="bg-white fill-ExYellow hover:fill-white items-center dark:bg-ExBlack dark:text-ExYellow text-ExYellow hover:bg-ExYellow hover:text-white    flex px-3 py-2 rounded-lg gap-2 border border-solid border-ExYellow dark:hover:shadow-md dark:hover:shadow-ExYellow">

            <p>صفحه قبل</p>
            <svg class="rotate-180" xmlns="http://www.w3.org/2000/svg" width="10.289" height="17.997"
                viewBox="0 0 10.289 17.997">
                <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back"
                    d="M18.438,15.19l-6.81-6.8A1.286,1.286,0,1,1,13.45,6.569l7.715,7.71a1.284,1.284,0,0,1,.038,1.773l-7.747,7.763A1.286,1.286,0,0,1,11.634,22Z"
                    transform="translate(-11.251 -6.194)" />
            </svg>

        </button>
    </div>
    <div class="mx-auto justify-center items-center gap-4 mt-4 hidden md:flex flex-row-reverse">
        <svg class="rotate-180 fill-gray-300" xmlns="http://www.w3.org/2000/svg" width="10.289" height="17.997"
                viewBox="0 0 10.289 17.997">
                <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back"
                    d="M18.438,15.19l-6.81-6.8A1.286,1.286,0,1,1,13.45,6.569l7.715,7.71a1.284,1.284,0,0,1,.038,1.773l-7.747,7.763A1.286,1.286,0,0,1,11.634,22Z"
                    transform="translate(-11.251 -6.194)" />
            </svg>
        <button
            class="bg-ExYellow items-center text-white fill-white hover:fill-ExYellow hover:bg-white hover:text-ExYellow  border border-solid border-ExYellow dark:text-ExBlack  dark:hover:bg-ExYellow dark:hover:shadow-md dark:hover:shadow-gray-600 flex px-3 py-2 rounded-lg gap-2">
            <p>1</p>
        </button>
        <button
            class=" items-center text-black fill-white hover:fill-ExYellow hover:bg-white hover:text-ExYellow   dark:text-ExBlack  dark:hover:bg-ExYellow dark:hover:shadow-md dark:hover:shadow-gray-600 flex px-3 py-2 rounded-lg gap-2">
            <p>2</p>
        </button>
        <button
            class=" items-center text-black fill-white hover:fill-ExYellow hover:bg-white hover:text-ExYellow   dark:text-ExBlack  dark:hover:bg-ExYellow dark:hover:shadow-md dark:hover:shadow-gray-600 flex px-3 py-2 rounded-lg gap-2">
            <p>3</p>
        </button>
        <button
            class=" items-center text-black fill-white hover:fill-ExYellow hover:bg-white hover:text-ExYellow   dark:text-ExBlack  dark:hover:bg-ExYellow dark:hover:shadow-md dark:hover:shadow-gray-600 flex px-3 py-2 rounded-lg gap-2">
            <p>4</p>
        </button>
        <button
            class=" items-center text-black fill-white hover:fill-ExYellow hover:bg-white hover:text-ExYellow   dark:text-ExBlack  dark:hover:bg-ExYellow dark:hover:shadow-md dark:hover:shadow-gray-600 flex px-3 py-2 rounded-lg gap-2">
            <p>5</p>
        </button>
        <svg class="fill-gray-300" xmlns="http://www.w3.org/2000/svg" width="10.289" height="17.997" viewBox="0 0 10.289 17.997">
                <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back"
                    d="M18.438,15.19l-6.81-6.8A1.286,1.286,0,1,1,13.45,6.569l7.715,7.71a1.284,1.284,0,0,1,.038,1.773l-7.747,7.763A1.286,1.286,0,0,1,11.634,22Z"
                    transform="translate(-11.251 -6.194)" />
            </svg>

    </div>
</template>
<script setup>
const props = defineProps(['state'])
</script>