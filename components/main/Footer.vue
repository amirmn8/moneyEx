<template>
    <footer class="bg-ExGray dark:bg-ExBlack rounded-t-3xl relative w-full flex flex-col  px-12">
        <a href="#first" class="absolute hidden top-4 left-20 md:block"><img
                src="../../assets/icons/arrow-up-square-fill.png" alt=""></a>
        <div class="mx-auto">
            <img class="dark:hidden" src="../../assets/images/Logo-footer.png" alt="">
            <img class="dark:block hidden" src="../../assets/images/Logo-footerDark.png" alt="">
        </div>
        <div class="lg:flex gap-12">
            <div class="basis-1/3">
                <p v-text="state.footerText1" class="font-bold mt-4 dark:text-white"></p>
                <p v-text="state.footerText2" class="mt-2 text-sm dark:text-gray-300"></p>
            </div>
            <div class="basis-2/3 grid grid-cols-1 md:grid-cols-2">
                <div class="grid grid-cols-2 mt-8">
                    <div class="flex flex-col gap-1">
                        <p v-text="state.footerText3" class="font-bold dark:text-white"></p>
                        <ul class="gap-1 flex flex-col dark:text-gray-300">
                            <a href="/about" v-text="state.footerText4">
                            </a>
                            <a href="/contact" v-text="state.footerText5">
                            </a>
                            <li v-text="state.footerText6">

                            </li>
                            <a href="/terms" v-text="state.footerText7">
                            </a>
                        </ul>
                    </div>
                    <div class="flex flex-col gap-1">
                        <p v-text="state.footerText8" class="font-bold dark:text-white"></p>
                        <ul class="gap-1 flex flex-col dark:text-gray-300">
                            <a href="/exchange" v-text="state.footerText9">
                            </a>

                            <a href="/blog" v-text="state.footerText10">

                            </a>
                        </ul>
                    </div>
                </div>
                <div class="mt-8 flex flex-col gap-2">
                    <p v-text="state.footerText11" class="font-bold dark:text-white"> </p>
                    <div class="flex items-center gap-3">
                        <img src="../../assets/icons/phone_in_talk.png" alt="">
                        <p class="font-bold dark:text-white">091212121212</p>
                    </div>
                    <div class="flex items-center gap-3">
                        <img src="../../assets/icons/Email.png" alt="">
                        <p class="font-bold dark:text-white">support@moneyex.org</p>
                    </div>
                    <div class="flex items-start gap-3">
                        <img src="../../assets/icons/Location.png" alt="">
                        <p v-text="state.footerText12" class="font-normal dark:text-white"> </p>
                    </div>
                </div>
            </div>


        </div>

        <div
            class="flex  text-xs md:text-sm bg-white dark:bg-black px-4 py-4 md:py-2 md:px-2 rounded-3xl mt-4 justify-between">
            <div class="flex items-center gap-2"><svg class="fill-black dark:fill-white" id="copyright"
                    xmlns="http://www.w3.org/2000/svg" width="20.25" height="20.25" viewBox="0 0 20.25 20.25">
                    <path id="Path_436" data-name="Path 436"
                        d="M18.12,14.741l1.6-1.6a4.5,4.5,0,1,0,.2,6.523l-1.478-1.477H18.2a2.25,2.25,0,1,1-.082-3.451Z"
                        transform="translate(-6.429 -6.375)" />
                    <path id="Path_437" data-name="Path 437"
                        d="M14.625,4.5A10.125,10.125,0,1,1,4.5,14.625,10.125,10.125,0,0,1,14.625,4.5Zm0,2.25A7.875,7.875,0,1,1,6.75,14.625,7.875,7.875,0,0,1,14.625,6.75Z"
                        transform="translate(-4.5 -4.5)" fill-rule="evenodd" />
                </svg>
                <p class="dark:text-white" v-text="state.footerText13"></p>
            </div>
            <div class="flex gap-16">
                <div class=" justify-between items-center gap-16 hidden lg:flex"> <a class="mx-auto" href="#aparat"><svg
                            class="fill-black dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="22.094"
                            height="22.093" viewBox="0 0 22.094 22.093">
                            <g id="aparat" transform="translate(0 22.093) rotate(-90)">
                                <g id="Group_147" data-name="Group 147" transform="translate(0 0)">
                                    <path id="Path_1724" data-name="Path 1724"
                                        d="M7.622.661,5.117.095A3.8,3.8,0,0,0,.572,2.963L0,5.493A10.469,10.469,0,0,1,7.626.661Z"
                                        transform="translate(2.192)" />
                                    <path id="Path_1725" data-name="Path 1725"
                                        d="M.66,0,.094,2.512A3.8,3.8,0,0,0,2.963,7.054l2.53.572A10.47,10.47,0,0,1,.661,0Z"
                                        transform="translate(0 12.276)" />
                                    <path id="Path_1726" data-name="Path 1726"
                                        d="M2.53.572,0,0A10.469,10.469,0,0,1,4.832,7.626L5.4,5.117A3.8,3.8,0,0,0,2.529.575Z"
                                        transform="translate(16.601 2.193)" />
                                    <path id="Path_1727" data-name="Path 1727"
                                        d="M0,4.833,2.508,5.4A3.8,3.8,0,0,0,7.05,2.53L7.622,0A10.469,10.469,0,0,1,0,4.833Z"
                                        transform="translate(12.279 16.601)" />
                                </g>
                                <path id="Path_1728" data-name="Path 1728"
                                    d="M9.308,0a9.3,9.3,0,1,0,9.3,9.3A9.3,9.3,0,0,0,9.308,0ZM6.982,2.907A2.326,2.326,0,1,1,4.656,5.233,2.326,2.326,0,0,1,6.982,2.907ZM5.237,13.954a2.326,2.326,0,1,1,2.326-2.326,2.326,2.326,0,0,1-2.326,2.326ZM8.144,9.3a1.162,1.162,0,1,1,1.162,1.162A1.162,1.162,0,0,1,8.144,9.3Zm3.488,6.4a2.326,2.326,0,1,1,2.326-2.326A2.326,2.326,0,0,1,11.633,15.7Zm1.745-6.4A2.326,2.326,0,1,1,15.7,6.976,2.326,2.326,0,0,1,13.377,9.3Z"
                                    transform="translate(1.739 1.745)" />
                            </g>
                        </svg>
                    </a>
                    <a class="mx-auto" href="#insta"><svg class="fill-black dark:fill-white"
                            xmlns="http://www.w3.org/2000/svg" width="20.753" height="20.753" viewBox="0 0 20.753 20.753">
                            <path id="instagram"
                                d="M13.376,3c-2.818,0-3.171.012-4.278.062a7.636,7.636,0,0,0-2.519.483A5.3,5.3,0,0,0,3.544,6.58,7.651,7.651,0,0,0,3.062,9.1C3.012,10.205,3,10.558,3,13.376s.012,3.171.062,4.278a7.636,7.636,0,0,0,.483,2.519A5.3,5.3,0,0,0,6.58,23.208a7.651,7.651,0,0,0,2.519.483c1.107.05,1.46.062,4.278.062s3.171-.012,4.278-.062a7.636,7.636,0,0,0,2.519-.483,5.3,5.3,0,0,0,3.035-3.035,7.651,7.651,0,0,0,.483-2.519c.05-1.107.062-1.46.062-4.278s-.012-3.171-.062-4.278a7.636,7.636,0,0,0-.483-2.519,5.3,5.3,0,0,0-3.035-3.035,7.651,7.651,0,0,0-2.519-.483C16.547,3.012,16.194,3,13.376,3m0,1.87c2.77,0,3.1.01,4.192.06a5.765,5.765,0,0,1,1.928.357,3.435,3.435,0,0,1,1.969,1.969,5.758,5.758,0,0,1,.357,1.926c.05,1.1.06,1.422.06,4.193s-.01,3.1-.06,4.192a5.8,5.8,0,0,1-.357,1.928A3.435,3.435,0,0,1,19.5,21.465a5.758,5.758,0,0,1-1.926.357c-1.094.05-1.422.06-4.193.06s-3.1-.01-4.192-.06a5.8,5.8,0,0,1-1.928-.357A3.435,3.435,0,0,1,5.287,19.5a5.722,5.722,0,0,1-.357-1.926c-.05-1.1-.06-1.422-.06-4.193s.01-3.1.06-4.192a5.765,5.765,0,0,1,.357-1.928A3.435,3.435,0,0,1,7.256,5.287,5.722,5.722,0,0,1,9.183,4.93c1.1-.05,1.422-.06,4.193-.06m0,11.965a3.459,3.459,0,1,1,3.459-3.459,3.458,3.458,0,0,1-3.459,3.459m0-8.787A5.328,5.328,0,1,0,18.7,13.376a5.328,5.328,0,0,0-5.328-5.328m6.784-.21a1.245,1.245,0,1,1-1.245-1.245A1.245,1.245,0,0,1,20.16,7.838"
                                transform="translate(-3 -3)" />
                        </svg>

                    </a>
                    <a class="mx-auto" href="#twitter"><svg class="fill-black dark:fill-white"
                            xmlns="http://www.w3.org/2000/svg" width="24.926" height="20.771" viewBox="0 0 24.926 20.771">
                            <path id="twitter"
                                d="M24.926,5.43A6.7,6.7,0,0,1,24,6.764a6.87,6.87,0,0,1-1.681,1.417q.028.222.042.417a15.124,15.124,0,0,1-1.07,5.794,15.256,15.256,0,0,1-6.071,7.544,15.964,15.964,0,0,1-9.5,1.736A10.912,10.912,0,0,1,0,21.463a10.641,10.641,0,0,0,7.614-2.2,5.245,5.245,0,0,1-4.835-3.584,3.251,3.251,0,0,0,1.084.055,10.081,10.081,0,0,0,1.223-.167,5.732,5.732,0,0,1-3.474-2.7,5.81,5.81,0,0,1-.584-2.556,4.882,4.882,0,0,0,2.306.694A5.959,5.959,0,0,1,1.07,7.333a6.818,6.818,0,0,1,.625-3.321A17.464,17.464,0,0,0,7.628,8.458a12.29,12.29,0,0,0,4.654.973,6.22,6.22,0,0,1,.625-3.946,5.376,5.376,0,0,1,3.209-2.334,4.737,4.737,0,0,1,4.752,1.473A8.458,8.458,0,0,0,24.175,3.4,5.017,5.017,0,0,1,21.9,6.346a14.449,14.449,0,0,0,3.028-.917Z"
                                transform="translate(0 -2.999)" />
                        </svg>

                    </a>
                    <a class="mx-auto" href="#facebook"><svg class="fill-black dark:fill-white"
                            xmlns="http://www.w3.org/2000/svg" width="11.382" height="20.801" viewBox="0 0 11.382 20.801">
                            <g id="facebook" transform="translate(0 0)">
                                <path id="Path_2" data-name="Path 2"
                                    d="M12.826,24.551h4.379V15.782h3.946l.434-4.357H17.205v-2.2A1.1,1.1,0,0,1,18.3,8.129h3.284V3.75H18.3a5.474,5.474,0,0,0-5.474,5.474v2.2h-2.19L10.2,15.782h2.623Z"
                                    transform="translate(-10.203 -3.75)" />
                            </g>
                        </svg>

                    </a>
                </div>
                <div class="bg-ExYellow dark:bg-teal-400 hidden md:flex  justify-between  px-1 py-1 rounded-3xl ">
                    <button>
                        <svg class="fill-white switchToLight dark:block hidden rounded-full p-1 w-8 h-8 "
                            id="sun switchToLight" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.66 17.66">
                            <path id="Path_8247" data-name="Path 8247"
                                d="M13.426,16.376a2.95,2.95,0,1,0-2.95-2.95A2.95,2.95,0,0,0,13.426,16.376Zm0,1.475A4.426,4.426,0,1,0,9,13.426,4.426,4.426,0,0,0,13.426,17.851Z"
                                transform="translate(-4.596 -4.596)" fill-rule="evenodd" />
                            <path id="Path_8248" data-name="Path 8248"
                                d="M8.094,0H9.566V2.989a5.945,5.945,0,0,0-1.472,0ZM5.22,4.179,3.107,2.066l-1.04,1.04L4.179,5.22a5.922,5.922,0,0,1,1.04-1.04ZM2.989,8.094H0V9.566H2.989a5.945,5.945,0,0,1,0-1.472ZM4.179,12.44,2.066,14.553l1.04,1.04L5.22,13.48A5.922,5.922,0,0,1,4.179,12.44Zm3.915,2.231V17.66H9.566V14.671a5.937,5.937,0,0,1-1.472,0ZM12.44,13.48l2.113,2.113,1.04-1.04L13.48,12.44a5.922,5.922,0,0,1-1.04,1.04Zm2.231-3.915H17.66V8.094H14.671A5.937,5.937,0,0,1,14.671,9.566ZM13.48,5.22l2.113-2.113-1.04-1.04L12.44,4.179a5.934,5.934,0,0,1,1.04,1.04Z"
                                transform="translate(0)" fill-rule="evenodd" />
                        </svg>
                        <svg class="focus:bg-white rounded-full switchToDark p-1 w-8 h-8 dark:hidden"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.245 15.245">
                            <path id="moon2"
                                d="M9.137,16.37A8.013,8.013,0,0,1,5.515,1.209a.776.776,0,0,1,1.093.92,6.991,6.991,0,0,0,1.74,7.017A6.948,6.948,0,0,0,13.292,11.2a6.994,6.994,0,0,0,2.073-.313.776.776,0,0,1,.92,1.094A8.012,8.012,0,0,1,9.137,16.37ZM5.486,2.388a7,7,0,1,0,9.62,9.62,8.033,8.033,0,0,1-1.814.207A7.957,7.957,0,0,1,7.63,9.865,8.008,8.008,0,0,1,5.486,2.388Z"
                                transform="translate(-1.125 -1.125)" fill="#fff" />
                        </svg>
                    </button>


                </div>
            </div>

        </div>
        <div class=" justify-center items-center my-6">
            <div class="grid grid-cols-5 md:grid-cols-4 lg:hidden items-center">
                <a class="mx-auto" href="#aparat"><svg class="fill-black dark:fill-white" xmlns="http://www.w3.org/2000/svg"
                        width="22.094" height="22.093" viewBox="0 0 22.094 22.093">
                        <g id="aparat" transform="translate(0 22.093) rotate(-90)">
                            <g id="Group_147" data-name="Group 147" transform="translate(0 0)">
                                <path id="Path_1724" data-name="Path 1724"
                                    d="M7.622.661,5.117.095A3.8,3.8,0,0,0,.572,2.963L0,5.493A10.469,10.469,0,0,1,7.626.661Z"
                                    transform="translate(2.192)" />
                                <path id="Path_1725" data-name="Path 1725"
                                    d="M.66,0,.094,2.512A3.8,3.8,0,0,0,2.963,7.054l2.53.572A10.47,10.47,0,0,1,.661,0Z"
                                    transform="translate(0 12.276)" />
                                <path id="Path_1726" data-name="Path 1726"
                                    d="M2.53.572,0,0A10.469,10.469,0,0,1,4.832,7.626L5.4,5.117A3.8,3.8,0,0,0,2.529.575Z"
                                    transform="translate(16.601 2.193)" />
                                <path id="Path_1727" data-name="Path 1727"
                                    d="M0,4.833,2.508,5.4A3.8,3.8,0,0,0,7.05,2.53L7.622,0A10.469,10.469,0,0,1,0,4.833Z"
                                    transform="translate(12.279 16.601)" />
                            </g>
                            <path id="Path_1728" data-name="Path 1728"
                                d="M9.308,0a9.3,9.3,0,1,0,9.3,9.3A9.3,9.3,0,0,0,9.308,0ZM6.982,2.907A2.326,2.326,0,1,1,4.656,5.233,2.326,2.326,0,0,1,6.982,2.907ZM5.237,13.954a2.326,2.326,0,1,1,2.326-2.326,2.326,2.326,0,0,1-2.326,2.326ZM8.144,9.3a1.162,1.162,0,1,1,1.162,1.162A1.162,1.162,0,0,1,8.144,9.3Zm3.488,6.4a2.326,2.326,0,1,1,2.326-2.326A2.326,2.326,0,0,1,11.633,15.7Zm1.745-6.4A2.326,2.326,0,1,1,15.7,6.976,2.326,2.326,0,0,1,13.377,9.3Z"
                                transform="translate(1.739 1.745)" />
                        </g>
                    </svg>
                </a>
                <a class="mx-auto" href="#insta"><svg class="fill-black dark:fill-white" xmlns="http://www.w3.org/2000/svg"
                        width="20.753" height="20.753" viewBox="0 0 20.753 20.753">
                        <path id="instagram"
                            d="M13.376,3c-2.818,0-3.171.012-4.278.062a7.636,7.636,0,0,0-2.519.483A5.3,5.3,0,0,0,3.544,6.58,7.651,7.651,0,0,0,3.062,9.1C3.012,10.205,3,10.558,3,13.376s.012,3.171.062,4.278a7.636,7.636,0,0,0,.483,2.519A5.3,5.3,0,0,0,6.58,23.208a7.651,7.651,0,0,0,2.519.483c1.107.05,1.46.062,4.278.062s3.171-.012,4.278-.062a7.636,7.636,0,0,0,2.519-.483,5.3,5.3,0,0,0,3.035-3.035,7.651,7.651,0,0,0,.483-2.519c.05-1.107.062-1.46.062-4.278s-.012-3.171-.062-4.278a7.636,7.636,0,0,0-.483-2.519,5.3,5.3,0,0,0-3.035-3.035,7.651,7.651,0,0,0-2.519-.483C16.547,3.012,16.194,3,13.376,3m0,1.87c2.77,0,3.1.01,4.192.06a5.765,5.765,0,0,1,1.928.357,3.435,3.435,0,0,1,1.969,1.969,5.758,5.758,0,0,1,.357,1.926c.05,1.1.06,1.422.06,4.193s-.01,3.1-.06,4.192a5.8,5.8,0,0,1-.357,1.928A3.435,3.435,0,0,1,19.5,21.465a5.758,5.758,0,0,1-1.926.357c-1.094.05-1.422.06-4.193.06s-3.1-.01-4.192-.06a5.8,5.8,0,0,1-1.928-.357A3.435,3.435,0,0,1,5.287,19.5a5.722,5.722,0,0,1-.357-1.926c-.05-1.1-.06-1.422-.06-4.193s.01-3.1.06-4.192a5.765,5.765,0,0,1,.357-1.928A3.435,3.435,0,0,1,7.256,5.287,5.722,5.722,0,0,1,9.183,4.93c1.1-.05,1.422-.06,4.193-.06m0,11.965a3.459,3.459,0,1,1,3.459-3.459,3.458,3.458,0,0,1-3.459,3.459m0-8.787A5.328,5.328,0,1,0,18.7,13.376a5.328,5.328,0,0,0-5.328-5.328m6.784-.21a1.245,1.245,0,1,1-1.245-1.245A1.245,1.245,0,0,1,20.16,7.838"
                            transform="translate(-3 -3)" fill-rule="evenodd" />
                    </svg>

                </a>
                <a class="mx-auto" href="#twitter"><svg class="fill-black dark:fill-white"
                        xmlns="http://www.w3.org/2000/svg" width="24.926" height="20.771" viewBox="0 0 24.926 20.771">
                        <path id="twitter"
                            d="M24.926,5.43A6.7,6.7,0,0,1,24,6.764a6.87,6.87,0,0,1-1.681,1.417q.028.222.042.417a15.124,15.124,0,0,1-1.07,5.794,15.256,15.256,0,0,1-6.071,7.544,15.964,15.964,0,0,1-9.5,1.736A10.912,10.912,0,0,1,0,21.463a10.641,10.641,0,0,0,7.614-2.2,5.245,5.245,0,0,1-4.835-3.584,3.251,3.251,0,0,0,1.084.055,10.081,10.081,0,0,0,1.223-.167,5.732,5.732,0,0,1-3.474-2.7,5.81,5.81,0,0,1-.584-2.556,4.882,4.882,0,0,0,2.306.694A5.959,5.959,0,0,1,1.07,7.333a6.818,6.818,0,0,1,.625-3.321A17.464,17.464,0,0,0,7.628,8.458a12.29,12.29,0,0,0,4.654.973,6.22,6.22,0,0,1,.625-3.946,5.376,5.376,0,0,1,3.209-2.334,4.737,4.737,0,0,1,4.752,1.473A8.458,8.458,0,0,0,24.175,3.4,5.017,5.017,0,0,1,21.9,6.346a14.449,14.449,0,0,0,3.028-.917Z"
                            transform="translate(0 -2.999)" />
                    </svg>

                </a>
                <a class="mx-auto" href="#facebook"><svg class="fill-black dark:fill-white"
                        xmlns="http://www.w3.org/2000/svg" width="11.382" height="20.801" viewBox="0 0 11.382 20.801">
                        <g id="facebook" transform="translate(0 0)">
                            <path id="Path_2" data-name="Path 2"
                                d="M12.826,24.551h4.379V15.782h3.946l.434-4.357H17.205v-2.2A1.1,1.1,0,0,1,18.3,8.129h3.284V3.75H18.3a5.474,5.474,0,0,0-5.474,5.474v2.2h-2.19L10.2,15.782h2.623Z"
                                transform="translate(-10.203 -3.75)" />
                        </g>
                    </svg>

                </a>
                <div class="bg-ExYellow dark:bg-teal-400 md:hidden flex justify-between px-2 py-2 rounded-3xl  mx-auto">
                    <button>
                        <svg class="fill-white switchToLight dark:block hidden rounded-full p-1 w-8 h-8 "
                            id="sun switchToLight" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.66 17.66">
                            <path id="Path_8247" data-name="Path 8247"
                                d="M13.426,16.376a2.95,2.95,0,1,0-2.95-2.95A2.95,2.95,0,0,0,13.426,16.376Zm0,1.475A4.426,4.426,0,1,0,9,13.426,4.426,4.426,0,0,0,13.426,17.851Z"
                                transform="translate(-4.596 -4.596)" fill-rule="evenodd" />
                            <path id="Path_8248" data-name="Path 8248"
                                d="M8.094,0H9.566V2.989a5.945,5.945,0,0,0-1.472,0ZM5.22,4.179,3.107,2.066l-1.04,1.04L4.179,5.22a5.922,5.922,0,0,1,1.04-1.04ZM2.989,8.094H0V9.566H2.989a5.945,5.945,0,0,1,0-1.472ZM4.179,12.44,2.066,14.553l1.04,1.04L5.22,13.48A5.922,5.922,0,0,1,4.179,12.44Zm3.915,2.231V17.66H9.566V14.671a5.937,5.937,0,0,1-1.472,0ZM12.44,13.48l2.113,2.113,1.04-1.04L13.48,12.44a5.922,5.922,0,0,1-1.04,1.04Zm2.231-3.915H17.66V8.094H14.671A5.937,5.937,0,0,1,14.671,9.566ZM13.48,5.22l2.113-2.113-1.04-1.04L12.44,4.179a5.934,5.934,0,0,1,1.04,1.04Z"
                                transform="translate(0)" fill-rule="evenodd" />
                        </svg>
                        <svg class="focus:bg-white rounded-full switchToDark p-1 w-8 h-8 dark:hidden"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.245 15.245">
                            <path id="moon2"
                                d="M9.137,16.37A8.013,8.013,0,0,1,5.515,1.209a.776.776,0,0,1,1.093.92,6.991,6.991,0,0,0,1.74,7.017A6.948,6.948,0,0,0,13.292,11.2a6.994,6.994,0,0,0,2.073-.313.776.776,0,0,1,.92,1.094A8.012,8.012,0,0,1,9.137,16.37ZM5.486,2.388a7,7,0,1,0,9.62,9.62,8.033,8.033,0,0,1-1.814.207A7.957,7.957,0,0,1,7.63,9.865,8.008,8.008,0,0,1,5.486,2.388Z"
                                transform="translate(-1.125 -1.125)" fill="#fff" />
                        </svg></button>


                </div>
            </div>

        </div>
    </footer>
</template>
<script setup>
const props = defineProps(['state'])

</script>
