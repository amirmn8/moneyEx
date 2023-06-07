<template>
    <div
        class="bg-exgreenBg dark:bg-darkExgreenBg lg:py-32 py-10 md:py-16 flex flex-col justify-center items-center gap-8 px-8">
        <div class="flex lg:w-1/2 justify-between gap-4  ">
            <div><img src="../../assets/icons/qleft.png" alt=""></div>
            <div class="text-center">
                <p v-text="state.searchText1" class="text-xl font-bold dark:text-white"></p>
                <p v-text="state.searchText2" class="dark:text-white"> </p>
            </div>
            <div>
                <img src="../../assets/icons/qright.png" alt="">
            </div>
        </div>
        <div class="lg:w-1/2 max-w-96 w-full flex justify-center text-center lg:mx-auto relative">
            <input :placeholder="state.searchText3"
                class=" w-full h-16 shadow-lg rounded-xl border-none focus:border-none dark:bg-ExBlack focus:ring-none focus:outline-none placeholder:text-xs"
                type="search">
            <button v-show="!state.searchIcon" class="bg-ExGreen p-2 top-3 left-2 rounded-xl absolute"><svg xmlns="http://www.w3.org/2000/svg"
                    width="26.109" height="26.109" viewBox="0 0 26.109 26.109">
                    <path id="search_FILL0_wght400_GRAD0_opsz48"
                        d="M144.289,241.109l-7.2-7.2a9.124,9.124,0,0,1-2.9,1.676,10.692,10.692,0,1,1,6.413-6.559,10.5,10.5,0,0,1-1.738,3.1l7.239,7.156Zm-13.653-7.4a7.74,7.74,0,0,0,5.716-2.38,8.155,8.155,0,0,0,0-11.463,7.74,7.74,0,0,0-5.716-2.38,8.111,8.111,0,1,0,0,16.222Z"
                        transform="translate(-120 -215)" fill="#fff" />
                </svg>
            </button>
            <button v-show="state.searchIcon" class="bg-ExGreen p-2 top-3 right-2 rounded-xl absolute"><svg xmlns="http://www.w3.org/2000/svg"
                    width="26.109" height="26.109" viewBox="0 0 26.109 26.109">
                    <path id="search_FILL0_wght400_GRAD0_opsz48"
                        d="M144.289,241.109l-7.2-7.2a9.124,9.124,0,0,1-2.9,1.676,10.692,10.692,0,1,1,6.413-6.559,10.5,10.5,0,0,1-1.738,3.1l7.239,7.156Zm-13.653-7.4a7.74,7.74,0,0,0,5.716-2.38,8.155,8.155,0,0,0,0-11.463,7.74,7.74,0,0,0-5.716-2.38,8.111,8.111,0,1,0,0,16.222Z"
                        transform="translate(-120 -215)" fill="#fff" />
                </svg>
            </button>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(['state'])
</script>