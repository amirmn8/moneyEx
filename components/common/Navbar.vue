<template>
    <nav id="first" class="bg-navLight dark:bg-ExBlack hidden lg:block">
        <div class=" max-w-7xl  px-8 mx-auto">
            <div class="relative flex h-20 items-center justify-between">
                <div class="flex flex-1  h-5per  justify-between items-stretch">
                    <div class="flex flex-shrink-0 items-center">
                        <NuxtLink to="/"><a class="hidden dark:block">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    width="167" height="37" viewBox="0 0 167 37">
                                    <defs>
                                        <pattern id="pattern" preserveAspectRatio="xMidYMid slice" width="100%"
                                            height="100%" viewBox="0 0 362 80">
                                            <image width="362" height="80"
                                                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWoAAABQCAYAAAAwTj+cAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFymlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDAgMTM3LmRhNGE3ZTUsIDIwMjIvMTEvMjctMDk6MzU6MDMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4xIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjMtMDQtMDZUMTY6MzU6MTUrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIzLTA0LTA2VDE2OjU0OjAxKzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTA0LTA2VDE2OjU0OjAxKzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMzRlZTFlOS1iY2U4LTA3NGMtOWQ1My1kZDczZDJiZTNiMzciIHhtcE1NOkRvY3VtZW50SUQ9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" />
                                        </pattern>
                                    </defs>
                                    <rect id="_company_logo_" width="167" height="37" fill="url(#pattern)" />
                                </svg>
                            </a></NuxtLink>
                        <NuxtLink to="/"><a class="dark:hidden"><svg xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" width="167" height="37" viewBox="0 0 167 37">
                                    <defs>
                                        <pattern id="pattern2" preserveAspectRatio="xMidYMid slice" width="100%"
                                            height="100%" viewBox="0 0 362 80">
                                            <image width="362" height="80"
                                                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWoAAABQCAYAAAAwTj+cAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFymlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDAgMTM3LmRhNGE3ZTUsIDIwMjIvMTEvMjctMDk6MzU6MDMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4xIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjMtMDQtMDZUMTY6MzU6MTUrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIzLTA0LTA2VDE2OjU0OjAxKzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTA0LTA2VDE2OjU0OjAxKzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMzRlZTFlOS1iY2U4LTA3NGMtOWQ1My1kZDczZDJiZTNiMzciIHhtcE1NOkRvY3VtZW50SUQ9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" />
                                        </pattern>
                                    </defs>
                                    <rect id="_company_logo_" width="167" height="37" fill="url(#pattern2)" />
                                </svg>
                            </a></NuxtLink>
                    </div>
                    <div class="ml-6 flex">
                        <div class="flex space-x-4 items-center text-gray-800  dark:text-white">

                            <NuxtLink to="/markets"><a v-text="state.markets"
                                    class="  hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                </a></NuxtLink>
                            <NuxtLink to="./exchange"><a v-text="state.trade"
                                    class=" hover:bg-gray-700  hover:text-white  rounded-md px-3 py-2 text-sm font-medium">
                                </a></NuxtLink>
                            <NuxtLink to="/Usermanual"><a v-text="state.userManual"
                                    class=" hover:bg-gray-700  hover:text-white  rounded-md px-3 py-2 text-sm font-medium">
                                </a></NuxtLink>
                            <NuxtLink to="/easybuy"><a v-text="state.easyShopping"
                                    class=" hover:bg-gray-700  hover:text-white  rounded-md px-3 py-2 text-sm font-medium">

                                </a></NuxtLink>
                            <NuxtLink to="/blog"><a v-text="state.blog"
                                    class=" hover:bg-gray-700  hover:text-white  rounded-md px-3 py-2 text-sm font-medium">
                                </a></NuxtLink>
                            <button
                                class="relative group hover:fill-white  hover:bg-gray-700 dark:fill-white  rounded-md px-3 py-2 text-sm font-medium">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2.773" height="18.487"
                                    viewBox="0 0 2.773 18.487">
                                    <path id="more_vert_FILL0_wght400_GRAD0_opsz48"
                                        d="M433.382,274.487a1.326,1.326,0,0,1-.978-.409,1.346,1.346,0,0,1-.4-.982,1.326,1.326,0,0,1,.409-.978,1.346,1.346,0,0,1,.982-.4,1.326,1.326,0,0,1,.978.409,1.346,1.346,0,0,1,.4.982,1.326,1.326,0,0,1-.409.978A1.346,1.346,0,0,1,433.382,274.487Zm0-7.857a1.326,1.326,0,0,1-.978-.409,1.346,1.346,0,0,1-.4-.982,1.326,1.326,0,0,1,.409-.978,1.346,1.346,0,0,1,.982-.4,1.326,1.326,0,0,1,.978.409,1.346,1.346,0,0,1,.4.982,1.326,1.326,0,0,1-.409.978A1.346,1.346,0,0,1,433.382,266.63Zm0-7.857a1.326,1.326,0,0,1-.978-.409,1.346,1.346,0,0,1-.4-.982,1.326,1.326,0,0,1,.409-.978,1.346,1.346,0,0,1,.982-.4,1.326,1.326,0,0,1,.978.409,1.346,1.346,0,0,1,.4.982,1.326,1.326,0,0,1-.409.978A1.346,1.346,0,0,1,433.382,258.773Z"
                                        transform="translate(-432 -256)" />
                                </svg>
                                <div
                                    class="hidden group-hover:flex w-48 bg-slate-200 dark:bg-black z-50 absolute top-9 -right-2 py-2 flex-col rounded-xl">
                                    <NuxtLink v-text="state.about" class="py-2 hover:bg-slate-300 dark:hover:bg-ExBlack"
                                        to="/about">
                                    </NuxtLink>
                                    <NuxtLink class="py-2 hover:bg-slate-300 dark:hover:bg-ExBlack" to="/contact"
                                        v-text="state.contact">
                                    </NuxtLink>
                                    <NuxtLink to="/terms" class="py-2 hover:bg-slate-300 dark:hover:bg-ExBlack"
                                        v-text="state.rules">
                                    </NuxtLink>



                                </div>
                            </button>

                        </div>
                    </div>
                    <div class=" flex justify-center items-center gap-3">
                        <button
                            class="bg-ExYellow text-white hover:bg-white hover:text-ExYellow hover:fill-ExYellow dark:text-ExBlack fill-white dark:fill-ExBlack dark:hover:bg-white dark:hover:text-ExYellow dark:hover:fill-ExYellow flex px-3 py-2 rounded-lg gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21.159" height="20.531"
                                viewBox="0 0 21.159 20.531">
                                <path class="fill-inherit" id="person"
                                    d="M170.58,284.918a4.756,4.756,0,1,1,3.571-1.389A4.833,4.833,0,0,1,170.58,284.918Zm-8.6,10.613A1.975,1.975,0,0,1,160,293.547v-1.124a3.638,3.638,0,0,1,.628-2.149,4.033,4.033,0,0,1,1.62-1.355,24.85,24.85,0,0,1,4.248-1.488,17.173,17.173,0,0,1,4.083-.5,16.451,16.451,0,0,1,4.067.512,28.161,28.161,0,0,1,4.232,1.471,3.986,3.986,0,0,1,1.653,1.355,3.638,3.638,0,0,1,.628,2.149v1.124a1.975,1.975,0,0,1-1.984,1.984Z"
                                    transform="translate(-160 -275)" />
                            </svg>
                            <p v-text="state.userPanel"></p>
                        </button>
                        <a v-if="state.lang" id="English" class="reload" href="#en"> <button @click="switchToEnglish"
                                class="flex gap-2 justify-center items-center  dark:text-white dark:hover:text-ExBlack border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-700 dark:hover:bg-white px-3 py-2 hover:text-white"><img
                                    src="../../assets/icons/English.png" alt="">
                                <p>English</p>
                            </button></a>
                        <a v-else id="persian" class="reload" href="#fa"> <button @click="switchToPersian"
                                class="flex gap-2 justify-center items-center  dark:text-white dark:hover:text-ExBlack border border-gray-200 dark:border-gray-300 rounded-lg hover:bg-gray-700 dark:hover:bg-white px-3 py-2 hover:text-white"><img
                                    src="../../assets/icons/Fa.png" alt="">
                                <p>فارسی</p>
                            </button></a>
                        <button
                            class="border border-gray-200 fs border-solid p-2 dark:border-gray-700  dark:fill-white rounded-lg fill-gray-700 hover:fill-gray-100 hover:bg-gray-700 dark:hover:bg-white dark:hover:fill-ExBlack">
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
    <nav class="bg-navLight dark:bg-ExBlack px-2 lg:hidden ">
        <div style="direction: rtl;" class="flex h-16 justify-between items-center">
            <button @click="toggleMenu"
                class="mobile-menu-button dark:border-gray-700 dark:fill-white hover:bg-ExYellow border-ExYellow hover:text-white text-ExYellow hover:fill-white fill-ExYellow border-solid border flex px-3 py-3 rounded-lg gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="26.945" height="17.964" viewBox="0 0 26.945 17.964">
                    <path id="menu_FILL0_wght400_GRAD0_opsz48"
                        d="M121.123,353.964a1.083,1.083,0,0,1-.8-.325,1.1,1.1,0,0,1-.323-.8,1.074,1.074,0,0,1,.323-.8,1.1,1.1,0,0,1,.8-.318h24.7a1.083,1.083,0,0,1,.8.325,1.1,1.1,0,0,1,.323.8,1.074,1.074,0,0,1-.323.8,1.1,1.1,0,0,1-.8.318Zm5.915-7.859a1.083,1.083,0,0,1-.8-.325,1.1,1.1,0,0,1-.323-.8,1.074,1.074,0,0,1,.323-.8,1.1,1.1,0,0,1,.8-.318h18.785a1.083,1.083,0,0,1,.8.325,1.1,1.1,0,0,1,.323.8,1.074,1.074,0,0,1-.323.8,1.1,1.1,0,0,1-.8.318Zm-5.915-7.859a1.083,1.083,0,0,1-.8-.325,1.1,1.1,0,0,1-.323-.8,1.074,1.074,0,0,1,.323-.8,1.1,1.1,0,0,1,.8-.318h24.7a1.083,1.083,0,0,1,.8.325,1.1,1.1,0,0,1,.323.8,1.074,1.074,0,0,1-.323.8,1.1,1.1,0,0,1-.8.318Z"
                        transform="translate(-120 -336)" />
                </svg>
            </button>

            <NuxtLink to="/"><a class="flex flex-shrink-0 items-center">
                    <svg class="dark:hidden" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="167" height="37" viewBox="0 0 167 37">
                        <defs>
                            <pattern id="pattern3" preserveAspectRatio="xMidYMid slice" width="100%" height="100%"
                                viewBox="0 0 362 80">
                                <image width="362" height="80"
                                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWoAAABQCAYAAAAwTj+cAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFymlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDAgMTM3LmRhNGE3ZTUsIDIwMjIvMTEvMjctMDk6MzU6MDMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4xIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjMtMDQtMDZUMTY6MzU6MTUrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIzLTA0LTA2VDE2OjU0OjAxKzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTA0LTA2VDE2OjU0OjAxKzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMzRlZTFlOS1iY2U4LTA3NGMtOWQ1My1kZDczZDJiZTNiMzciIHhtcE1NOkRvY3VtZW50SUQ9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" />
                            </pattern>
                        </defs>
                        <rect id="_company_logo_" width="167" height="37" fill="url(#pattern3)" />
                    </svg>
                    <svg class="hidden dark:block" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" width="167" height="37" viewBox="0 0 167 37">
                        <defs>
                            <pattern id="pattern4" preserveAspectRatio="xMidYMid slice" width="100%" height="100%"
                                viewBox="0 0 362 80">
                                <image width="362" height="80"
                                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWoAAABQCAYAAAAwTj+cAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAGl2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDAgMTM3LmRhNGE3ZTUsIDIwMjIvMTEvMjctMDk6MzU6MDMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4xIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjMtMDQtMDZUMTY6MzU6MTUrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIzLTA0LTExVDIwOjU1OjMzKzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTA0LTExVDIwOjU1OjMzKzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNDM3MzZmZC1kOWRjLTQzNDEtYjI3Yi05NjhiMDhjMjFmNWMiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpmY2UwZWM3NS05MWU1LTQ0NDgtOTgyNy1kYzEwNmJlOTljNWUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2M2RiM2U5Yi1mMWFiLWU1NGItYjJmMS05MGNkNGVhMmYwZDQiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYzZGIzZTliLWYxYWItZTU0Yi1iMmYxLTkwY2Q0ZWEyZjBkNCIgc3RFdnQ6d2hlbj0iMjAyMy0wNC0wNlQxNjozNToxNSswMzozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI0LjEgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoyMzRlZTFlOS1iY2U4LTA3NGMtOWQ1My1kZDczZDJiZTNiMzciIHN0RXZ0OndoZW49IjIwMjMtMDQtMDZUMTY6NTQ6MDErMDM6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNC4xIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MzQzNzM2ZmQtZDlkYy00MzQxLWIyN2ItOTY4YjA4YzIxZjVjIiBzdEV2dDp3aGVuPSIyMDIzLTA0LTExVDIwOjU1OjMzKzAzOjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjQuMSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+juGDLAAACYdJREFUeJzt3T+MFFUcB/Dv3hHAnEZiAHOdRwmFidBYQIOJBRQGAokJRIXS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" />
                            </pattern>
                        </defs>
                        <rect id="_company_logo_" width="167" height="37" fill="url(#pattern4)" />
                    </svg>
                </a></NuxtLink>
            <button
                class="border-ExYellow dark:fill-white dark:border-gray-700 fill-ExYellow hover:bg-ExYellow hover:text-white text-ExYellow hover:fill-white  border-solid border flex px-3 py-3 rounded-lg gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="21.159" height="20.531" viewBox="0 0 21.159 20.531">
                    <path class="fill-inherit" id="person"
                        d="M170.58,284.918a4.756,4.756,0,1,1,3.571-1.389A4.833,4.833,0,0,1,170.58,284.918Zm-8.6,10.613A1.975,1.975,0,0,1,160,293.547v-1.124a3.638,3.638,0,0,1,.628-2.149,4.033,4.033,0,0,1,1.62-1.355,24.85,24.85,0,0,1,4.248-1.488,17.173,17.173,0,0,1,4.083-.5,16.451,16.451,0,0,1,4.067.512,28.161,28.161,0,0,1,4.232,1.471,3.986,3.986,0,0,1,1.653,1.355,3.638,3.638,0,0,1,.628,2.149v1.124a1.975,1.975,0,0,1-1.984,1.984Z"
                        transform="translate(-160 -275)" />
                </svg>

            </button>
        </div>
        <Transition name="slide-fade">
            <div v-show="isMenuHidden" class="flex w-full">
                <div style="backdrop-filter: blur(50px);"
                    class="px-4 flex pr-8 flex-col py-5 gap-5 mobile-menu mobile-menu2   fixed top-0 right-0 h-screen md:items-stretch md:px-24  bg-black/30 w-5/6 md:w-full  z-50">
                    <div class="flex items-center justify-between md:mb-10">
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
                            <a v-if="state.lang" href="#en" class="reload"> <button @click="switchToEnglish"
                                    class="flex gap-2 justify-center items-center border border-gray-500 rounded-lg text-white px-3 py-2 dark:bg-none dark:text-white dark:border-gray-200"><img
                                        src="../../assets/icons/English.png" alt="">
                                    <p>English</p>
                                </button></a>
                            <a v-else href="#fa" class="reload"> <button @click="switchToPersian"
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

                        <button @click="toggleMenu" class="mobile-menu-button-close md:hidden"><svg
                                xmlns="http://www.w3.org/2000/svg" width="26.064" height="25.566"
                                viewBox="0 0 26.064 25.566">
                                <path id="arrow_back_FILL0_wght400_GRAD0_opsz48_1_"
                                    data-name="arrow_back_FILL0_wght400_GRAD0_opsz48 (1)"
                                    d="M174.152,293.192l11.538-11.538a1.265,1.265,0,0,0,.291-.415,1.3,1.3,0,0,0,0-.913,1.265,1.265,0,0,0-.291-.415l-11.579-11.579a1.126,1.126,0,0,0-.83-.332,1.233,1.233,0,0,0-.872,2.117l9.421,9.421H161.245a1.245,1.245,0,1,0,0,2.49H181.83l-9.463,9.463a1.126,1.126,0,0,0-.332.83,1.233,1.233,0,0,0,2.117.872Z"
                                    transform="translate(-160 -268)" fill="#fff" />
                            </svg>
                        </button>

                    </div>
                    <NuxtLink to="/"><a
                            class="flex justify-between items-center text-gray-300 dark:text-white hover:bg-gray-700 hover:text-white   text-sm font-medium">
                            <p v-text="state.main"></p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="8.934" height="15.628"
                                viewBox="0 0 8.934 15.628">
                                <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back"
                                    d="M13.944,14.005,19.857,8.1A1.117,1.117,0,1,0,18.275,6.52l-6.7,6.695a1.115,1.115,0,0,0-.033,1.54L18.271,21.5a1.117,1.117,0,1,0,1.582-1.577Z"
                                    transform="translate(-11.251 -6.194)" fill="#fff" />
                            </svg>
                        </a></NuxtLink>
                    <hr />
                    <NuxtLink to="/markets"><a
                            class="flex justify-between items-center text-gray-300 hover:bg-gray-700 hover:text-white   text-sm font-medium dark:text-white">
                            <p v-text="state.markets"></p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="8.934" height="15.628"
                                viewBox="0 0 8.934 15.628">
                                <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back"
                                    d="M13.944,14.005,19.857,8.1A1.117,1.117,0,1,0,18.275,6.52l-6.7,6.695a1.115,1.115,0,0,0-.033,1.54L18.271,21.5a1.117,1.117,0,1,0,1.582-1.577Z"
                                    transform="translate(-11.251 -6.194)" fill="#fff" />
                            </svg>
                        </a></NuxtLink>
                    <hr />
                    <NuxtLink to="/exchange"><a
                            class="flex justify-between items-center text-gray-300 hover:bg-gray-700 hover:text-white   text-sm font-medium dark:text-white">
                            <p v-text="state.trade"></p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="8.934" height="15.628"
                                viewBox="0 0 8.934 15.628">
                                <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back"
                                    d="M13.944,14.005,19.857,8.1A1.117,1.117,0,1,0,18.275,6.52l-6.7,6.695a1.115,1.115,0,0,0-.033,1.54L18.271,21.5a1.117,1.117,0,1,0,1.582-1.577Z"
                                    transform="translate(-11.251 -6.194)" fill="#fff" />
                            </svg>
                        </a></NuxtLink>
                    <hr />
                    <NuxtLink to="/easybuy"><a
                            class="flex justify-between items-center text-gray-300 hover:bg-gray-700 hover:text-white   text-sm font-medium dark:text-white">
                            <p v-text="state.easyShopping"> </p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="8.934" height="15.628"
                                viewBox="0 0 8.934 15.628">
                                <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back"
                                    d="M13.944,14.005,19.857,8.1A1.117,1.117,0,1,0,18.275,6.52l-6.7,6.695a1.115,1.115,0,0,0-.033,1.54L18.271,21.5a1.117,1.117,0,1,0,1.582-1.577Z"
                                    transform="translate(-11.251 -6.194)" fill="#fff" />
                            </svg>
                        </a></NuxtLink>
                    <hr />
                    <NuxtLink to="/Usermanual"><a
                            class="flex justify-between items-center text-gray-300 hover:bg-gray-700 hover:text-white  text-sm font-medium dark:text-white">
                            <p v-text="state.userManual"> </p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="8.934" height="15.628"
                                viewBox="0 0 8.934 15.628">
                                <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back"
                                    d="M13.944,14.005,19.857,8.1A1.117,1.117,0,1,0,18.275,6.52l-6.7,6.695a1.115,1.115,0,0,0-.033,1.54L18.271,21.5a1.117,1.117,0,1,0,1.582-1.577Z"
                                    transform="translate(-11.251 -6.194)" fill="#fff" />
                            </svg>
                        </a></NuxtLink>
                    <hr />

                    <NuxtLink to="/blog"><a
                            class="flex justify-between dark:text-white items-center text-gray-300 hover:bg-gray-700 hover:text-white  text-sm font-medium">
                            <p v-text="state.blog"></p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="8.934" height="15.628"
                                viewBox="0 0 8.934 15.628">
                                <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back"
                                    d="M13.944,14.005,19.857,8.1A1.117,1.117,0,1,0,18.275,6.52l-6.7,6.695a1.115,1.115,0,0,0-.033,1.54L18.271,21.5a1.117,1.117,0,1,0,1.582-1.577Z"
                                    transform="translate(-11.251 -6.194)" fill="#fff" />
                            </svg>
                        </a></NuxtLink>
                    <hr />
                    <NuxtLink to="/about"><a
                            class="flex justify-between items-center dark:text-white text-gray-300 hover:bg-gray-700 hover:text-white  text-sm font-medium">
                            <p v-text="state.about"></p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="8.934" height="15.628"
                                viewBox="0 0 8.934 15.628">
                                <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back"
                                    d="M13.944,14.005,19.857,8.1A1.117,1.117,0,1,0,18.275,6.52l-6.7,6.695a1.115,1.115,0,0,0-.033,1.54L18.271,21.5a1.117,1.117,0,1,0,1.582-1.577Z"
                                    transform="translate(-11.251 -6.194)" fill="#fff" />
                            </svg>
                        </a></NuxtLink>
                    <hr />
                    <NuxtLink to="/contact"><a
                            class="flex justify-between items-center text-gray-300 hover:bg-gray-700 hover:text-white   text-sm font-medium dark:text-white">
                            <p v-text="state.contact"> </p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="8.934" height="15.628"
                                viewBox="0 0 8.934 15.628">
                                <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back"
                                    d="M13.944,14.005,19.857,8.1A1.117,1.117,0,1,0,18.275,6.52l-6.7,6.695a1.115,1.115,0,0,0-.033,1.54L18.271,21.5a1.117,1.117,0,1,0,1.582-1.577Z"
                                    transform="translate(-11.251 -6.194)" fill="#fff" />
                            </svg>
                        </a></NuxtLink>
                    <hr />
                    <NuxtLink to="/terms"><a
                            class="flex justify-between items-center text-gray-300 hover:bg-gray-700 hover:text-white   text-sm font-medium dark:text-white">
                            <p v-text="state.rules"> </p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="8.934" height="15.628"
                                viewBox="0 0 8.934 15.628">
                                <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back"
                                    d="M13.944,14.005,19.857,8.1A1.117,1.117,0,1,0,18.275,6.52l-6.7,6.695a1.115,1.115,0,0,0-.033,1.54L18.271,21.5a1.117,1.117,0,1,0,1.582-1.577Z"
                                    transform="translate(-11.251 -6.194)" fill="#fff" />
                            </svg>
                        </a></NuxtLink>
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
    transition: all 0.1s cubic-bezier(1, 1, 1, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}</style>