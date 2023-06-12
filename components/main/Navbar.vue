<template>
    <!-- منوی نسخه وب -->
    <nav id="first" class="bg-none hidden lg:block">
        <div class=" max-w-7xl  px-8 mx-auto">
            <div class="relative flex h-20 items-center justify-between">
                <div class="flex flex-1  h-5per  justify-between items-stretch">
                    <div class="flex flex-shrink-0 items-center">
                        <NuxtLink class="hidden dark:block" to="/">
                            <img src="../../assets/images/_company_logo_.png" alt="">

                        </NuxtLink>
                        <NuxtLink class="dark:hidden" to="/">
                            <img src="../../assets//images/_company_logo_1.png" alt="">

                        </NuxtLink>
                    </div>
                    <div class="ml-6 flex">
                        <div class="flex space-x-4 items-center text-gray-300  dark:text-white">

                            <NuxtLink to="/markets" class="  hover:bg-gray-700  rounded-md px-3 py-2 text-sm font-medium">
                                {{ state.markets }}
                            </NuxtLink>
                            <NuxtLink to="/exchange" class="hover:bg-gray-700  rounded-md px-3 py-2 text-sm font-medium">
                                {{ state.trade }}
                            </NuxtLink>
                            <NuxtLink to="/Usermanual" class=" hover:bg-gray-700  rounded-md px-3 py-2 text-sm font-medium">
                                {{ state.userManual }}
                            </NuxtLink>
                            <NuxtLink to="/easybuy" class=" hover:bg-gray-700 rounded-md px-3 py-2 text-sm font-medium">
                                {{ state.easyShopping }}
                            </NuxtLink>
                            <NuxtLink to="/blog" class=" hover:bg-gray-700 rounded-md px-3 py-2 text-sm font-medium">
                                {{ state.blog }}
                            </NuxtLink>
                            <button class="group relative hover:bg-gray-700  rounded-md px-3 py-2 text-sm font-medium">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff"
                                    class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                    <path
                                        d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                </svg>
                                <div
                                    class="hidden group-hover:flex w-48 bg-slate-700 absolute top-8 -right-2 py-2 flex-col rounded-xl">
                                    <NuxtLink class="py-2 hover:bg-slate-800" to="/about"> {{ state.about }} </NuxtLink>
                                    <NuxtLink class="py-2 hover:bg-slate-800" to="/contact"> {{ state.contact }} </NuxtLink>
                                    <NuxtLink class="py-2 hover:bg-slate-800" to="/terms"> {{ state.rules }} </NuxtLink>



                                </div>
                            </button>
                        </div>

                    </div>
                    <div class="text-white flex justify-center items-center gap-3">
                        <button
                            class="border-ExYellow hover:bg-ExYellow hover:text-white text-ExYellow dark:text-white hover:fill-white fill-ExYellow dark:fill-white dark:hover:bg-white dark:hover:text-ExYellow dark:hover:fill-ExYellow border-solid border flex px-3 py-2 rounded-lg gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21.159" height="20.531"
                                viewBox="0 0 21.159 20.531">
                                <path class="fill-inherit" id="person"
                                    d="M170.58,284.918a4.756,4.756,0,1,1,3.571-1.389A4.833,4.833,0,0,1,170.58,284.918Zm-8.6,10.613A1.975,1.975,0,0,1,160,293.547v-1.124a3.638,3.638,0,0,1,.628-2.149,4.033,4.033,0,0,1,1.62-1.355,24.85,24.85,0,0,1,4.248-1.488,17.173,17.173,0,0,1,4.083-.5,16.451,16.451,0,0,1,4.067.512,28.161,28.161,0,0,1,4.232,1.471,3.986,3.986,0,0,1,1.653,1.355,3.638,3.638,0,0,1,.628,2.149v1.124a1.975,1.975,0,0,1-1.984,1.984Z"
                                    transform="translate(-160 -275)" />
                            </svg>
                            <p v-text="state.userPanel"></p>
                        </button>
                        <a v-if="state.lang" id="English" class="reload" href="#en"> <button @click="switchToEnglish"
                                class="flex gap-2 justify-center items-center border border-gray-700 dark:border-gray-300 rounded-lg hover:bg-gray-700 dark:hover:bg-white dark:hover:text-ExYellow px-3 py-2"><img
                                    src="../../assets/icons/English.png" alt="">
                                <p>English</p>
                            </button></a>
                        <a v-else id="persian" class="reload" href="#fa"> <button @click="switchToPersian"
                                class="flex gap-2 justify-center items-center border border-gray-700 dark:border-gray-300 rounded-lg hover:bg-gray-700 dark:hover:bg-white dark:hover:text-ExYellow px-3 py-2"><img
                                    src="../../assets/icons/Fa.png" alt="">
                                <p>فارسی</p>
                            </button></a>

                        <button
                            class="border border-gray-700 birder-solid p-2 dark:border-gray-300 rounded-lg fill-white hover:bg-gray-700 dark:hover:bg-white dark:hover:fill-ExYellow">
                            <svg @click="switchToDarkMode" class="dark:hidden switchToDark"
                                xmlns="http://www.w3.org/2000/svg" width="23.883" height="23.88" viewBox="0 0 23.883 23.88">
                                <path id="Moon4"
                                    d="M132.072,247.747A12.022,12.022,0,0,1,120,235.675,11.49,11.49,0,0,1,122.666,228a12.111,12.111,0,0,1,6.992-4.057q1.375-.268,1.878.469a2.061,2.061,0,0,1-.034,2.012,9.8,9.8,0,0,0-.469,1.576,8.034,8.034,0,0,0-.168,1.643,7.213,7.213,0,0,0,7.243,7.243,8.63,8.63,0,0,0,1.626-.151,9.911,9.911,0,0,0,1.526-.419,2.115,2.115,0,0,1,2.146.05,1.869,1.869,0,0,1,.369,2,12,12,0,0,1-4.057,6.723A11.443,11.443,0,0,1,132.072,247.747Zm0-2.012a9.646,9.646,0,0,0,6.371-2.263,9.5,9.5,0,0,0,3.387-5.315,8.367,8.367,0,0,1-1.8.553,10.183,10.183,0,0,1-1.923.184,9.234,9.234,0,0,1-9.255-9.255,9.685,9.685,0,0,1,.168-1.727,12.6,12.6,0,0,1,.6-2.1,10.214,10.214,0,0,0-5.449,3.672,10.023,10.023,0,0,0,7.9,16.247ZM131.938,235.775Z"
                                    transform="translate(-120 -223.867)" />
                            </svg>
                            <svg @click="switchToLightMode" class="hidden switchToLight dark:block"
                                xmlns="http://www.w3.org/2000/svg" width="23.883" height="23.88"
                                viewBox="0 0 32.754 32.754">
                                <path id="light_mode_FILL0_wght400_GRAD0_opsz48"
                                    d="M56.368,157.588a5.2,5.2,0,1,0-3.685-1.526A5.046,5.046,0,0,0,56.368,157.588Zm.009,2.233a7.434,7.434,0,1,1,5.267-2.177A7.174,7.174,0,0,1,56.377,159.821Zm-15.26-6.327a1.077,1.077,0,0,1-.8-.323,1.09,1.09,0,0,1-.321-.8,1.068,1.068,0,0,1,.321-.794,1.089,1.089,0,0,1,.8-.316h3.722a1.077,1.077,0,0,1,.8.323,1.09,1.09,0,0,1,.321.8,1.068,1.068,0,0,1-.321.794,1.089,1.089,0,0,1-.8.316Zm26.8,0a1.077,1.077,0,0,1-.8-.323,1.09,1.09,0,0,1-.321-.8,1.068,1.068,0,0,1,.321-.794,1.089,1.089,0,0,1,.8-.316h3.722a1.077,1.077,0,0,1,.8.323,1.09,1.09,0,0,1,.321.8,1.068,1.068,0,0,1-.321.794,1.089,1.089,0,0,1-.8.316ZM56.37,141.955a1.068,1.068,0,0,1-.794-.321,1.089,1.089,0,0,1-.316-.8v-3.722a1.077,1.077,0,0,1,.323-.8,1.09,1.09,0,0,1,.8-.321,1.068,1.068,0,0,1,.794.321,1.089,1.089,0,0,1,.316.8v3.722a1.077,1.077,0,0,1-.323.8A1.09,1.09,0,0,1,56.37,141.955Zm0,26.8a1.069,1.069,0,0,1-.794-.321,1.089,1.089,0,0,1-.316-.8v-3.722a1.077,1.077,0,0,1,.323-.8,1.09,1.09,0,0,1,.8-.321,1.068,1.068,0,0,1,.794.321,1.089,1.089,0,0,1,.316.8v3.722a1.078,1.078,0,0,1-.323.8A1.09,1.09,0,0,1,56.37,168.754Zm-8.926-23.746-2.122-2.084a1.05,1.05,0,0,1-.321-.8,1.2,1.2,0,0,1,.317-.8,1.132,1.132,0,0,1,1.6,0l2.084,2.122a1.14,1.14,0,0,1,.3.782,1.073,1.073,0,0,1-.3.763,1,1,0,0,1-.763.316A1.164,1.164,0,0,1,47.444,145.007Zm18.387,18.424-2.084-2.122a1.158,1.158,0,0,1-.3-.8,1.026,1.026,0,0,1,.316-.768,1.012,1.012,0,0,1,.763-.335,1.071,1.071,0,0,1,.782.335l2.122,2.084a1.05,1.05,0,0,1,.321.8,1.2,1.2,0,0,1-.317.8,1.132,1.132,0,0,1-1.6,0Zm-2.084-18.424a1.079,1.079,0,0,1,0-1.563l2.084-2.122a1.05,1.05,0,0,1,.8-.321,1.2,1.2,0,0,1,.8.317,1.133,1.133,0,0,1,0,1.6l-2.122,2.084a1.027,1.027,0,0,1-.758.3A1.2,1.2,0,0,1,63.747,145.007ZM45.319,163.435a1.133,1.133,0,0,1,0-1.6l2.122-2.084a1.051,1.051,0,0,1,.778-.335,1.029,1.029,0,0,1,.771.335,1.05,1.05,0,0,1,.35.782,1.071,1.071,0,0,1-.335.782l-2.084,2.122a1.05,1.05,0,0,1-.8.321A1.2,1.2,0,0,1,45.319,163.435ZM56.377,152.377Z"
                                    transform="translate(-40 -136)" />
                            </svg>

                        </button>

                    </div>
                </div>
            </div>
        </div>
    </nav>
    <!-- منوی نسخه موبایل -->
    <nav class=" px-2 lg:hidden ">
        <div class="flex h-16 justify-between items-center">
            <button @click="toggleMenu"
                class="mobile-menu-button border-gray-700 hover:bg-ExYellow hover:text-white text-ExYellow hover:fill-white fill-ExYellow border-solid border flex px-3 py-3 rounded-lg gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="26.945" height="17.964" viewBox="0 0 26.945 17.964">
                    <path id="menu_FILL0_wght400_GRAD0_opsz48"
                        d="M121.123,353.964a1.083,1.083,0,0,1-.8-.325,1.1,1.1,0,0,1-.323-.8,1.074,1.074,0,0,1,.323-.8,1.1,1.1,0,0,1,.8-.318h24.7a1.083,1.083,0,0,1,.8.325,1.1,1.1,0,0,1,.323.8,1.074,1.074,0,0,1-.323.8,1.1,1.1,0,0,1-.8.318Zm5.915-7.859a1.083,1.083,0,0,1-.8-.325,1.1,1.1,0,0,1-.323-.8,1.074,1.074,0,0,1,.323-.8,1.1,1.1,0,0,1,.8-.318h18.785a1.083,1.083,0,0,1,.8.325,1.1,1.1,0,0,1,.323.8,1.074,1.074,0,0,1-.323.8,1.1,1.1,0,0,1-.8.318Zm-5.915-7.859a1.083,1.083,0,0,1-.8-.325,1.1,1.1,0,0,1-.323-.8,1.074,1.074,0,0,1,.323-.8,1.1,1.1,0,0,1,.8-.318h24.7a1.083,1.083,0,0,1,.8.325,1.1,1.1,0,0,1,.323.8,1.074,1.074,0,0,1-.323.8,1.1,1.1,0,0,1-.8.318Z"
                        transform="translate(-120 -336)" fill="#fff" />
                </svg>
            </button>

            <NuxtLink to="/" class="flex flex-shrink-0 items-center">
                <img class="dark:hidden" src="../../assets/images/_company_logo_1.png" alt="">
                <img class="hidden dark:block" src="../../assets//images/_company_logo_.png" alt="">
            </NuxtLink>
            <button
                class="border-gray-700 hover:bg-ExYellow hover:text-white text-ExYellow hover:fill-white fill-white border-solid border flex px-3 py-3 rounded-lg gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="21.159" height="20.531" viewBox="0 0 21.159 20.531">
                    <path class="fill-inherit" id="person"
                        d="M170.58,284.918a4.756,4.756,0,1,1,3.571-1.389A4.833,4.833,0,0,1,170.58,284.918Zm-8.6,10.613A1.975,1.975,0,0,1,160,293.547v-1.124a3.638,3.638,0,0,1,.628-2.149,4.033,4.033,0,0,1,1.62-1.355,24.85,24.85,0,0,1,4.248-1.488,17.173,17.173,0,0,1,4.083-.5,16.451,16.451,0,0,1,4.067.512,28.161,28.161,0,0,1,4.232,1.471,3.986,3.986,0,0,1,1.653,1.355,3.638,3.638,0,0,1,.628,2.149v1.124a1.975,1.975,0,0,1-1.984,1.984Z"
                        transform="translate(-160 -275)" />
                </svg>

            </button>
        </div>
        <Transition name="slide-fade">
            <div v-show="isMenuHidden" class="flex w-full z-50">
                <div style="backdrop-filter: blur(30px);"
                    class="flex px-4 pr-8 flex-col py-5 gap-5 mobile-menu  fixed top-0 right-0 h-screen md:items-stretch md:px-24 bg-black/30 w-5/6 md:w-full z-50">
                    <div class=" flex items-center justify-between md:mb-10">
                        <button @click="toggleMenu"
                            class=" hidden md:flex mobile-menu-button-close2 gap-2 px-2 py-2 border border-gray-600 justify-center items-center rounded-lg dark:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26.064" height="25.566"
                                viewBox="0 0 26.064 25.566">
                                <path id="arrow_back_FILL0_wght400_GRAD0_opsz48_1_"
                                    data-name="arrow_back_FILL0_wght400_GRAD0_opsz48 (1)"
                                    d="M174.152,293.192l11.538-11.538a1.265,1.265,0,0,0,.291-.415,1.3,1.3,0,0,0,0-.913,1.265,1.265,0,0,0-.291-.415l-11.579-11.579a1.126,1.126,0,0,0-.83-.332,1.233,1.233,0,0,0-.872,2.117l9.421,9.421H161.245a1.245,1.245,0,1,0,0,2.49H181.83l-9.463,9.463a1.126,1.126,0,0,0-.332.83,1.233,1.233,0,0,0,2.117.872Z"
                                    transform="translate(-160 -268)" fill="#fff" />
                            </svg>
                            <p v-text="state.back" class="text-white text-sm px-3"></p>
                        </button>
                        <div class="flex gap-2">

                            <button
                                class="dark:bg-none dark:text-ExYellow dark:fill-ExYellow border-ExYellow hover:bg-ExYellow hover:text-white text-ExYellow hover:fill-white fill-ExYellow border-solid border hidden md:flex px-3 py-2 rounded-lg gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21.159" height="20.531"
                                    viewBox="0 0 21.159 20.531">
                                    <path class="fill-inherit" id="person"
                                        d="M170.58,284.918a4.756,4.756,0,1,1,3.571-1.389A4.833,4.833,0,0,1,170.58,284.918Zm-8.6,10.613A1.975,1.975,0,0,1,160,293.547v-1.124a3.638,3.638,0,0,1,.628-2.149,4.033,4.033,0,0,1,1.62-1.355,24.85,24.85,0,0,1,4.248-1.488,17.173,17.173,0,0,1,4.083-.5,16.451,16.451,0,0,1,4.067.512,28.161,28.161,0,0,1,4.232,1.471,3.986,3.986,0,0,1,1.653,1.355,3.638,3.638,0,0,1,.628,2.149v1.124a1.975,1.975,0,0,1-1.984,1.984Z"
                                        transform="translate(-160 -275)" />
                                </svg>
                                <p v-text="state.userPanel"></p>
                            </button>

                            <a v-if="state.lang" href="#en" class="reload"> <button id="EnglishMob"
                                    @click="switchToEnglish"
                                    class="flex gap-2 justify-center items-center border border-gray-500 rounded-lg text-white px-3 py-2 dark:bg-none dark:text-white dark:border-gray-200"><img
                                        src="../../assets/icons/English.png" alt="">
                                    <p>English</p>
                                </button></a>
                            <a v-else href="#fa" class="reload"> <button id="persianMob" @click="switchToPersian"
                                    class="flex gap-2 justify-center items-center border border-gray-500 rounded-lg text-white px-3 py-2 dark:bg-none dark:text-white dark:border-gray-200"><img
                                        src="../../assets/icons/Fa.png" alt="">
                                    <p>فارسی</p>
                                </button></a>
                            <button
                                class="border border-gray-500 border-solid p-2 rounded-lg hover:bg-gray-700 dark:border-white">
                                <svg @click="switchToDarkMode" class="dark:hidden switchToDark"
                                    xmlns="http://www.w3.org/2000/svg" width="23.883" height="23.88"
                                    viewBox="0 0 23.883 23.88">
                                    <path id="Moon3"
                                        d="M132.072,247.747A12.022,12.022,0,0,1,120,235.675,11.49,11.49,0,0,1,122.666,228a12.111,12.111,0,0,1,6.992-4.057q1.375-.268,1.878.469a2.061,2.061,0,0,1-.034,2.012,9.8,9.8,0,0,0-.469,1.576,8.034,8.034,0,0,0-.168,1.643,7.213,7.213,0,0,0,7.243,7.243,8.63,8.63,0,0,0,1.626-.151,9.911,9.911,0,0,0,1.526-.419,2.115,2.115,0,0,1,2.146.05,1.869,1.869,0,0,1,.369,2,12,12,0,0,1-4.057,6.723A11.443,11.443,0,0,1,132.072,247.747Zm0-2.012a9.646,9.646,0,0,0,6.371-2.263,9.5,9.5,0,0,0,3.387-5.315,8.367,8.367,0,0,1-1.8.553,10.183,10.183,0,0,1-1.923.184,9.234,9.234,0,0,1-9.255-9.255,9.685,9.685,0,0,1,.168-1.727,12.6,12.6,0,0,1,.6-2.1,10.214,10.214,0,0,0-5.449,3.672,10.023,10.023,0,0,0,7.9,16.247ZM131.938,235.775Z"
                                        transform="translate(-120 -223.867)" fill="#fff" />
                                </svg>
                                <svg @click="switchToLightMode" class="hidden switchToLight dark:block"
                                    xmlns="http://www.w3.org/2000/svg" width="23.883" height="23.88"
                                    viewBox="0 0 32.754 32.754">
                                    <path id="light_mode_FILL0_wght400_GRAD0_opsz48"
                                        d="M56.368,157.588a5.2,5.2,0,1,0-3.685-1.526A5.046,5.046,0,0,0,56.368,157.588Zm.009,2.233a7.434,7.434,0,1,1,5.267-2.177A7.174,7.174,0,0,1,56.377,159.821Zm-15.26-6.327a1.077,1.077,0,0,1-.8-.323,1.09,1.09,0,0,1-.321-.8,1.068,1.068,0,0,1,.321-.794,1.089,1.089,0,0,1,.8-.316h3.722a1.077,1.077,0,0,1,.8.323,1.09,1.09,0,0,1,.321.8,1.068,1.068,0,0,1-.321.794,1.089,1.089,0,0,1-.8.316Zm26.8,0a1.077,1.077,0,0,1-.8-.323,1.09,1.09,0,0,1-.321-.8,1.068,1.068,0,0,1,.321-.794,1.089,1.089,0,0,1,.8-.316h3.722a1.077,1.077,0,0,1,.8.323,1.09,1.09,0,0,1,.321.8,1.068,1.068,0,0,1-.321.794,1.089,1.089,0,0,1-.8.316ZM56.37,141.955a1.068,1.068,0,0,1-.794-.321,1.089,1.089,0,0,1-.316-.8v-3.722a1.077,1.077,0,0,1,.323-.8,1.09,1.09,0,0,1,.8-.321,1.068,1.068,0,0,1,.794.321,1.089,1.089,0,0,1,.316.8v3.722a1.077,1.077,0,0,1-.323.8A1.09,1.09,0,0,1,56.37,141.955Zm0,26.8a1.069,1.069,0,0,1-.794-.321,1.089,1.089,0,0,1-.316-.8v-3.722a1.077,1.077,0,0,1,.323-.8,1.09,1.09,0,0,1,.8-.321,1.068,1.068,0,0,1,.794.321,1.089,1.089,0,0,1,.316.8v3.722a1.078,1.078,0,0,1-.323.8A1.09,1.09,0,0,1,56.37,168.754Zm-8.926-23.746-2.122-2.084a1.05,1.05,0,0,1-.321-.8,1.2,1.2,0,0,1,.317-.8,1.132,1.132,0,0,1,1.6,0l2.084,2.122a1.14,1.14,0,0,1,.3.782,1.073,1.073,0,0,1-.3.763,1,1,0,0,1-.763.316A1.164,1.164,0,0,1,47.444,145.007Zm18.387,18.424-2.084-2.122a1.158,1.158,0,0,1-.3-.8,1.026,1.026,0,0,1,.316-.768,1.012,1.012,0,0,1,.763-.335,1.071,1.071,0,0,1,.782.335l2.122,2.084a1.05,1.05,0,0,1,.321.8,1.2,1.2,0,0,1-.317.8,1.132,1.132,0,0,1-1.6,0Zm-2.084-18.424a1.079,1.079,0,0,1,0-1.563l2.084-2.122a1.05,1.05,0,0,1,.8-.321,1.2,1.2,0,0,1,.8.317,1.133,1.133,0,0,1,0,1.6l-2.122,2.084a1.027,1.027,0,0,1-.758.3A1.2,1.2,0,0,1,63.747,145.007ZM45.319,163.435a1.133,1.133,0,0,1,0-1.6l2.122-2.084a1.051,1.051,0,0,1,.778-.335,1.029,1.029,0,0,1,.771.335,1.05,1.05,0,0,1,.35.782,1.071,1.071,0,0,1-.335.782l-2.084,2.122a1.05,1.05,0,0,1-.8.321A1.2,1.2,0,0,1,45.319,163.435ZM56.377,152.377Z"
                                        transform="translate(-40 -136)" fill="#fff" />
                                </svg>
                            </button>



                        </div>

                        <button class="mobile-menu-button-close md:hidden" @click="toggleMenu"><svg
                                xmlns="http://www.w3.org/2000/svg" width="26.064" height="25.566"
                                viewBox="0 0 26.064 25.566">
                                <path id="arrow_back_FILL0_wght400_GRAD0_opsz48_1_"
                                    data-name="arrow_back_FILL0_wght400_GRAD0_opsz48 (1)"
                                    d="M174.152,293.192l11.538-11.538a1.265,1.265,0,0,0,.291-.415,1.3,1.3,0,0,0,0-.913,1.265,1.265,0,0,0-.291-.415l-11.579-11.579a1.126,1.126,0,0,0-.83-.332,1.233,1.233,0,0,0-.872,2.117l9.421,9.421H161.245a1.245,1.245,0,1,0,0,2.49H181.83l-9.463,9.463a1.126,1.126,0,0,0-.332.83,1.233,1.233,0,0,0,2.117.872Z"
                                    transform="translate(-160 -268)" fill="#fff" />
                            </svg>
                        </button>

                    </div>
                    <NuxtLink to="/"
                        class="flex justify-between items-center text-gray-300 dark:text-white hover:bg-gray-700 hover:text-white   text-sm font-medium">
                        <p v-text="state.main"></p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8.934" height="15.628" viewBox="0 0 8.934 15.628">
                            <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back"
                                d="M13.944,14.005,19.857,8.1A1.117,1.117,0,1,0,18.275,6.52l-6.7,6.695a1.115,1.115,0,0,0-.033,1.54L18.271,21.5a1.117,1.117,0,1,0,1.582-1.577Z"
                                transform="translate(-11.251 -6.194)" fill="#fff" />
                        </svg>
                    </NuxtLink>
                    <hr />
                    <NuxtLink to="/markets"
                        class="flex justify-between items-center text-gray-300 hover:bg-gray-700 hover:text-white   text-sm font-medium dark:text-white">
                        <p v-text="state.markets"></p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8.934" height="15.628" viewBox="0 0 8.934 15.628">
                            <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back"
                                d="M13.944,14.005,19.857,8.1A1.117,1.117,0,1,0,18.275,6.52l-6.7,6.695a1.115,1.115,0,0,0-.033,1.54L18.271,21.5a1.117,1.117,0,1,0,1.582-1.577Z"
                                transform="translate(-11.251 -6.194)" fill="#fff" />
                        </svg>
                    </NuxtLink>
                    <hr />
                    <NuxtLink to="/exchange"
                        class="flex justify-between items-center text-gray-300 hover:bg-gray-700 hover:text-white   text-sm font-medium dark:text-white">
                        <p v-text="state.trade"></p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8.934" height="15.628" viewBox="0 0 8.934 15.628">
                            <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back"
                                d="M13.944,14.005,19.857,8.1A1.117,1.117,0,1,0,18.275,6.52l-6.7,6.695a1.115,1.115,0,0,0-.033,1.54L18.271,21.5a1.117,1.117,0,1,0,1.582-1.577Z"
                                transform="translate(-11.251 -6.194)" fill="#fff" />
                        </svg>
                    </NuxtLink>
                    <hr />
                    <NuxtLink to="/easybuy"
                        class="flex justify-between items-center text-gray-300 hover:bg-gray-700 hover:text-white  text-sm font-medium dark:text-white">
                        <p v-text="state.easyShopping"></p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8.934" height="15.628" viewBox="0 0 8.934 15.628">
                            <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back"
                                d="M13.944,14.005,19.857,8.1A1.117,1.117,0,1,0,18.275,6.52l-6.7,6.695a1.115,1.115,0,0,0-.033,1.54L18.271,21.5a1.117,1.117,0,1,0,1.582-1.577Z"
                                transform="translate(-11.251 -6.194)" fill="#fff" />
                        </svg>
                    </NuxtLink>
                    <hr />
                    <NuxtLink to="/Usermanual"
                        class="flex justify-between items-center text-gray-300 hover:bg-gray-700 hover:text-white   text-sm font-medium dark:text-white">
                        <p v-text="state.userManual"></p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8.934" height="15.628" viewBox="0 0 8.934 15.628">
                            <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back"
                                d="M13.944,14.005,19.857,8.1A1.117,1.117,0,1,0,18.275,6.52l-6.7,6.695a1.115,1.115,0,0,0-.033,1.54L18.271,21.5a1.117,1.117,0,1,0,1.582-1.577Z"
                                transform="translate(-11.251 -6.194)" fill="#fff" />
                        </svg>
                    </NuxtLink>
                    <hr />
                    <NuxtLink to="/blog"
                        class="flex justify-between dark:text-white items-center text-gray-300 hover:bg-gray-700 hover:text-white  text-sm font-medium">
                        <p v-text="state.blog"></p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8.934" height="15.628" viewBox="0 0 8.934 15.628">
                            <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back"
                                d="M13.944,14.005,19.857,8.1A1.117,1.117,0,1,0,18.275,6.52l-6.7,6.695a1.115,1.115,0,0,0-.033,1.54L18.271,21.5a1.117,1.117,0,1,0,1.582-1.577Z"
                                transform="translate(-11.251 -6.194)" fill="#fff" />
                        </svg>
                    </NuxtLink>
                    <hr />
                    <NuxtLink to="/about"
                        class="flex justify-between items-center dark:text-white text-gray-300 hover:bg-gray-700 hover:text-white  text-sm font-medium">
                        <p v-text="state.about"></p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8.934" height="15.628" viewBox="0 0 8.934 15.628">
                            <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back"
                                d="M13.944,14.005,19.857,8.1A1.117,1.117,0,1,0,18.275,6.52l-6.7,6.695a1.115,1.115,0,0,0-.033,1.54L18.271,21.5a1.117,1.117,0,1,0,1.582-1.577Z"
                                transform="translate(-11.251 -6.194)" fill="#fff" />
                        </svg>
                    </NuxtLink>
                    <hr />
                    <NuxtLink to="/contact"
                        class="flex justify-between items-center text-gray-300 hover:bg-gray-700 hover:text-white   text-sm font-medium dark:text-white">
                        <p v-text="state.contact"></p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8.934" height="15.628" viewBox="0 0 8.934 15.628">
                            <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back"
                                d="M13.944,14.005,19.857,8.1A1.117,1.117,0,1,0,18.275,6.52l-6.7,6.695a1.115,1.115,0,0,0-.033,1.54L18.271,21.5a1.117,1.117,0,1,0,1.582-1.577Z"
                                transform="translate(-11.251 -6.194)" fill="#fff" />
                        </svg>
                    </NuxtLink>
                    <hr />
                    <NuxtLink to="/terms"
                        class="flex justify-between items-center text-gray-300 hover:bg-gray-700 hover:text-white   text-sm font-medium dark:text-white">
                        <p v-text="state.rules"></p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8.934" height="15.628" viewBox="0 0 8.934 15.628">
                            <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back"
                                d="M13.944,14.005,19.857,8.1A1.117,1.117,0,1,0,18.275,6.52l-6.7,6.695a1.115,1.115,0,0,0-.033,1.54L18.271,21.5a1.117,1.117,0,1,0,1.582-1.577Z"
                                transform="translate(-11.251 -6.194)" fill="#fff" />
                        </svg>
                    </NuxtLink>
                    <div class="flex flex-col mt-auto gap-2">
                        <div class="flex items-center gap-3 text-bold text-white">
                            <img src="../../assets/icons/phone_in_talk.png" alt="">
                            <p>091212121212</p>
                        </div>
                        <div class="flex items-center gap-3 text-bold text-white">
                            <img src="../../assets/icons/Email.png" alt="">
                            <p>support@moneyex.org</p>
                        </div>
                    </div>
                </div>

            </div>
        </Transition>
    </nav>
</template>
<script setup>
const props = defineProps(['state', 'switchToEnglish', 'switchToPersian'])
// منوی موبایل
const isMenuHidden = ref(false);
const toggleMenu = () => {
    isMenuHidden.value = !isMenuHidden.value;
};
// پایان بخش موبایل
// تغییر تم دارک و لایت
const switchToDarkMode = () => {
    localStorage.theme = 'dark';
    watchEffect(() => {
        if (process.client) {
            if (localStorage.theme) {
                if (
                    localStorage.theme === 'dark' ||
                    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
                ) {
                    useHead({
                        htmlAttrs: {
                            class: 'dark'
                        },
                    })
                } else {
                    useHead({

                        htmlAttrs: {
                            class: ''
                        },
                    })
                }
            }
        }
    });
};
onMounted(() => {
    const switchToDark = document.querySelectorAll('.switchToDark');
    for (let i = 0; i < switchToDark.length; i++) {
        switchToDark[i].addEventListener('click', switchToDarkMode);
    }
});
const switchToLightMode = () => {
    localStorage.theme = 'light';
    watchEffect(() => {
        if (process.client) {
            if (localStorage.theme) {
                if (
                    localStorage.theme === 'dark' ||
                    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
                ) {
                    useHead({
                        htmlAttrs: {
                            class: 'dark'
                        },
                    })
                } else {
                    useHead({

                        htmlAttrs: {
                            class: ''
                        },
                    })
                }
            }
        }
    });
};
onMounted(() => {
    const switchToLight = document.querySelectorAll('.switchToLight');
    for (let i = 0; i < switchToLight.length; i++) {
        switchToLight[i].addEventListener('click', switchToLightMode);
    }
});
// پایان بخش تغییر تم دارک و لایت

</script>
<style scoped>
.slide-fade-enter-active {
    transition: all 0.1s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>