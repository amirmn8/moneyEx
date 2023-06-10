<template >
    <div>
        <div class="bg-white dark:bg-black md:bg-slate-100">

            <CommonNavbar :switch-to-persian="switchToPersian" :switch-to-english="switchToEnglish" :state="state" />
            <div class="dark:bg-black bg-white">
                <div class="2xl:mx-36 mx-4 mb-16">
                    <div
                        class="bg-contact h-96 bg-no-repeat bg-center sm:flex flex-col justify-center items-center gap-4 hidden">
                        <p class="text-3xl font-bold">تماس با مانی اکسـ </p>
                        <p class="">لطفاً پیش از ارسال ایمیل یا تماس تلفنی، ابتدا سوالات متداول را مشاهده کنید.</p>
                    </div>
                    <div class=" flex-wrap gap-4 justify-center hidden sm:flex">
                        <div class="flex flex-col bg-gray-100 lg:basis-1/4 basis-1/3 w-full px-4 py-6 rounded-xl">
                            <div class="flex items-center gap-2 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="37.597" height="36.597"
                                    viewBox="0 0 37.597 36.597">
                                    <g id="_01_Call" data-name="01_Call" transform="translate(-0.75 -0.75)">
                                        <path id="Path_4150" data-name="Path 4150"
                                            d="M26.4,3H13.529A10.529,10.529,0,0,0,3,13.529h9.359v-1.17a3.51,3.51,0,0,1,3.51-3.51h8.189a3.51,3.51,0,0,1,3.51,3.51v1.17h9.359A10.529,10.529,0,0,0,26.4,3Z"
                                            transform="translate(-0.415 -0.415)" fill="#fff" />
                                        <path id="Path_4151" data-name="Path 4151"
                                            d="M33.117,29.337A1.17,1.17,0,0,0,32,28.51H29.986a4.679,4.679,0,0,1-3.6-1.684l-.819-.984a2.34,2.34,0,0,0-1.8-.842H16.606a2.34,2.34,0,0,0-1.8.842l-.819.984a4.679,4.679,0,0,1-3.6,1.684H8.38a1.17,1.17,0,0,0-1.117.827l-3.6,13.644a2.34,2.34,0,0,0,2.223,3.077h28.6a2.34,2.34,0,0,0,2.223-3.077ZM20.19,43.718a8.189,8.189,0,1,1,5.791-2.4,8.19,8.19,0,0,1-5.791,2.4Z"
                                            transform="translate(-0.642 -9.546)" fill="#fff" />
                                        <path id="Path_4152" data-name="Path 4152"
                                            d="M31.17,34.34A1.17,1.17,0,1,0,30,33.17,1.17,1.17,0,0,0,31.17,34.34Z"
                                            transform="translate(-11.622 -12.452)" fill="#f6f9fc" />
                                        <path id="Path_4153" data-name="Path 4153"
                                            d="M24.806,36.976a1.17,1.17,0,1,0-1.17-1.17A1.17,1.17,0,0,0,24.806,36.976Z"
                                            transform="translate(-8.98 -13.546)" fill="#f6f9fc" />
                                        <path id="Path_4154" data-name="Path 4154"
                                            d="M22.17,43.34A1.17,1.17,0,1,0,21,42.17,1.17,1.17,0,0,0,22.17,43.34Z"
                                            transform="translate(-7.886 -16.187)" fill="#f6f9fc" />
                                        <path id="Path_4155" data-name="Path 4155"
                                            d="M24.806,49.7a1.17,1.17,0,1,0-1.17-1.17A1.17,1.17,0,0,0,24.806,49.7Z"
                                            transform="translate(-8.98 -18.829)" fill="#f6f9fc" />
                                        <path id="Path_4156" data-name="Path 4156"
                                            d="M31.17,52.34A1.17,1.17,0,1,0,30,51.17,1.17,1.17,0,0,0,31.17,52.34Z"
                                            transform="translate(-11.622 -19.923)" fill="#f6f9fc" />
                                        <path id="Path_4157" data-name="Path 4157"
                                            d="M37.534,49.7a1.17,1.17,0,1,0-1.17-1.17A1.17,1.17,0,0,0,37.534,49.7Z"
                                            transform="translate(-14.263 -18.829)" fill="#f6f9fc" />
                                        <path id="Path_4158" data-name="Path 4158"
                                            d="M40.17,43.34A1.17,1.17,0,1,0,39,42.17,1.17,1.17,0,0,0,40.17,43.34Z"
                                            transform="translate(-15.357 -16.187)" fill="#f6f9fc" />
                                        <path id="Path_4159" data-name="Path 4159"
                                            d="M37.534,36.976a1.17,1.17,0,1,0-1.17-1.17A1.17,1.17,0,0,0,37.534,36.976Z"
                                            transform="translate(-14.263 -13.546)" fill="#f6f9fc" />
                                        <path id="Path_4160" data-name="Path 4160"
                                            d="M26.983,2H12.114A11.124,11.124,0,0,0,1,13.114v2.34a1.76,1.76,0,0,0,1.755,1.755H9.774a1.76,1.76,0,0,0,1.755-1.755v-3.51a2.925,2.925,0,0,1,2.925-2.925H24.643a2.925,2.925,0,0,1,2.925,2.925v3.51a1.76,1.76,0,0,0,1.755,1.755h7.019A1.76,1.76,0,0,0,38.1,15.454v-2.34A11.124,11.124,0,0,0,26.983,2ZM10.359,15.454a.585.585,0,0,1-.585.585H2.755a.585.585,0,0,1-.585-.585V13.7h8.189Zm14.284-7.6H14.454a4.1,4.1,0,0,0-4.095,4.095v.585H2.187A9.956,9.956,0,0,1,12.114,3.17H26.983a9.956,9.956,0,0,1,9.927,9.359H28.738v-.585a4.1,4.1,0,0,0-4.095-4.095Zm12.284,7.6a.585.585,0,0,1-.585.585H29.323a.585.585,0,0,1-.585-.585V13.7h8.189Z"
                                            transform="translate(0 -1)" fill="#595959" stroke="#595959"
                                            stroke-width="0.5" />
                                        <path id="Path_4161" data-name="Path 4161"
                                            d="M25.774,28a8.784,8.784,0,1,0,6.2,2.573A8.774,8.774,0,0,0,25.774,28Zm0,16.378a7.613,7.613,0,1,1,5.374-2.23,7.6,7.6,0,0,1-5.374,2.23Z"
                                            transform="translate(-6.226 -10.791)" fill="#f6b33f" />
                                        <path id="Path_4162" data-name="Path 4162"
                                            d="M30.755,31A1.755,1.755,0,1,0,32,31.514,1.755,1.755,0,0,0,30.755,31Zm0,2.34a.585.585,0,1,1,.414-.171A.585.585,0,0,1,30.755,33.34Z"
                                            transform="translate(-11.206 -12.037)" fill="#f6b33f" />
                                        <path id="Path_4163" data-name="Path 4163"
                                            d="M24.391,37.158a1.755,1.755,0,0,0,1.241-3,1.8,1.8,0,0,0-2.481,0,1.755,1.755,0,0,0,1.241,3Zm-.414-2.168a.585.585,0,1,1,.827.828.6.6,0,0,1-.827,0,.585.585,0,0,1,0-.828Z"
                                            transform="translate(-8.565 -13.143)" fill="#f6b33f" />
                                        <path id="Path_4164" data-name="Path 4164"
                                            d="M23.51,41.755A1.755,1.755,0,1,0,23,43,1.755,1.755,0,0,0,23.51,41.755Zm-2.34,0a.585.585,0,1,1,.171.414A.585.585,0,0,1,21.17,41.755Z"
                                            transform="translate(-7.471 -15.772)" fill="#f6b33f" />
                                        <path id="Path_4165" data-name="Path 4165"
                                            d="M23.15,46.89a1.755,1.755,0,1,0,2.482,0,1.8,1.8,0,0,0-2.482,0ZM24.8,48.544a.6.6,0,0,1-.827,0,.585.585,0,1,1,.827,0Z"
                                            transform="translate(-8.565 -18.425)" fill="#f6b33f" />
                                        <path id="Path_4166" data-name="Path 4166"
                                            d="M30.755,49A1.755,1.755,0,1,0,32,49.514,1.755,1.755,0,0,0,30.755,49Zm0,2.34a.585.585,0,1,1,.414-.171A.585.585,0,0,1,30.755,51.34Z"
                                            transform="translate(-11.206 -19.508)" fill="#f6b33f" />
                                        <path id="Path_4167" data-name="Path 4167"
                                            d="M35.878,46.89a1.755,1.755,0,1,0,2.481,0,1.8,1.8,0,0,0-2.481,0Zm1.654,1.654a.6.6,0,0,1-.827,0,.585.585,0,1,1,.827,0Z"
                                            transform="translate(-13.848 -18.425)" fill="#f6b33f" />
                                        <path id="Path_4168" data-name="Path 4168"
                                            d="M38,41.755a1.755,1.755,0,1,0,.514-1.241A1.755,1.755,0,0,0,38,41.755Zm2.34,0a.585.585,0,1,1-.171-.414A.585.585,0,0,1,40.34,41.755Z"
                                            transform="translate(-14.942 -15.772)" fill="#f6b33f" />
                                        <path id="Path_4169" data-name="Path 4169"
                                            d="M35.878,34.162a1.755,1.755,0,1,0,2.481,0,1.8,1.8,0,0,0-2.481,0Zm1.654,1.654a.6.6,0,0,1-.827,0,.585.585,0,1,1,.827,0Z"
                                            transform="translate(-13.848 -13.143)" fill="#f6b33f" />
                                        <path id="Path_4170" data-name="Path 4170"
                                            d="M36.867,40.345l-3.6-13.67a1.744,1.744,0,0,0-1.679-1.24H29.573a4.079,4.079,0,0,1-3.147-1.474l-.819-.983a2.942,2.942,0,0,0-1.737-1.006V20.755a1.755,1.755,0,0,0-3.51,0v1.17H19.19v-1.17a1.755,1.755,0,0,0-3.51,0v1.217a2.941,2.941,0,0,0-1.737,1.006l-.819.983a4.08,4.08,0,0,1-3.147,1.474H7.965A1.75,1.75,0,0,0,6.28,26.7L2.695,40.3a2.928,2.928,0,0,0,2.778,3.849h28.6a2.925,2.925,0,0,0,2.79-3.808ZM35.5,42.252a1.729,1.729,0,0,1-1.427.731H5.473a1.755,1.755,0,0,1-1.655-2.34L7.4,27.02a.585.585,0,0,1,.562-.415H9.977a5.258,5.258,0,0,0,4.048-1.9l.819-.983a1.738,1.738,0,0,1,1.345-.632h7.171a1.739,1.739,0,0,1,1.345.632l.819.983a5.258,5.258,0,0,0,4.048,1.9h2.012a.579.579,0,0,1,.556.392l3.6,13.682a1.72,1.72,0,0,1-.24,1.574Z"
                                            transform="translate(-0.227 -7.056)" fill="#595959" stroke="#595959"
                                            stroke-width="0.5" />
                                    </g>
                                </svg>
                                <p class="font-bold">شماره های تماس</p>

                            </div>
                            <p dir="ltr"> 0098 (123) 4567 8910</p>
                            <p dir="ltr">0098 (123) 4567 8910</p>
                        </div>
                        <div class="flex flex-col bg-gray-100 lg:basis-1/4 basis-1/3 w-full px-4 py-6 rounded-xl">
                            <div class="flex items-center gap-2 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="38.311" height="42.211"
                                    viewBox="0 0 38.311 42.211">
                                    <g id="_02_email" data-name="02_email" transform="translate(-0.186 0.209)">
                                        <path id="Path_4134" data-name="Path 4134"
                                            d="M37.139,17.905a2.4,2.4,0,0,1,.357,1.31V38.5A2.515,2.515,0,0,1,35,41H3.686a2.515,2.515,0,0,1-2.5-2.5V19.215a5.974,5.974,0,0,1,.6-1.547"
                                            fill="none" stroke="#595959" stroke-miterlimit="10" stroke-width="2" />
                                        <path id="Path_4135" data-name="Path 4135"
                                            d="M1.424,18.5v-.238a2.592,2.592,0,0,1,.6-.952l15.6-15.6a2.443,2.443,0,0,1,3.453,0l15.6,15.6a2.091,2.091,0,0,1,.476.6v.238"
                                            fill="none" stroke="#595959" stroke-miterlimit="10" stroke-width="2" />
                                        <path id="Path_4136" data-name="Path 4136"
                                            d="M17.854,30.226H16.186L4.28,19.115l0-9.78A2.388,2.388,0,0,1,6.663,6.953H32.616A2.388,2.388,0,0,1,35,9.334v9.225L23.41,29.67C23.41,30.98,19.521,29.115,17.854,30.226Z"
                                            transform="translate(0 0.655)" fill="#fff" />
                                        <path id="Path_4137" data-name="Path 4137"
                                            d="M4.753,18.858v-9.5A2.46,2.46,0,0,1,7.3,6.953H31.968a2.46,2.46,0,0,1,2.548,2.4V18.4"
                                            fill="none" stroke="#f6b33f" stroke-miterlimit="10" stroke-width="2" />
                                        <path id="Path_4138" data-name="Path 4138"
                                            d="M1.3,39.689l16.31-9.524a4.089,4.089,0,0,1,4.048,0l15.834,8.929"
                                            fill="#fff" />
                                        <path id="Path_4139" data-name="Path 4139"
                                            d="M1.3,39.689l16.31-9.524a4.089,4.089,0,0,1,4.048,0l15.834,8.929" fill="none"
                                            stroke="#595959" stroke-miterlimit="10" stroke-width="2" />
                                        <path id="Path_4140" data-name="Path 4140" d="M22.735,30.881,36.9,16.477"
                                            fill="none" stroke="#595959" stroke-miterlimit="10" stroke-width="2" />
                                        <path id="Path_4141" data-name="Path 4141" d="M2.136,16.715,16.541,30.882"
                                            fill="none" stroke="#595959" stroke-miterlimit="10" stroke-width="2" />
                                        <path id="Path_4142" data-name="Path 4142" d="M29.04,11.555H25.06" fill="none"
                                            stroke="#f6b33f" stroke-linecap="round" stroke-miterlimit="10"
                                            stroke-width="2" />
                                        <path id="Path_4143" data-name="Path 4143" d="M29.04,15.535h-18.9" fill="none"
                                            stroke="#f6b33f" stroke-linecap="round" stroke-miterlimit="10"
                                            stroke-width="2" />
                                    </g>
                                </svg>

                                <p class="font-bold"> پست الکترونیکی </p>

                            </div>
                            <p dir="ltr">Info@moneyex.org</p>
                            <p dir="ltr">Support@moneyex.org</p>
                        </div>
                        <div class="flex flex-col bg-gray-100 lg:basis-1/4 basis-2/3 w-full px-4 py-6 rounded-xl">
                            <div class="flex items-center gap-2 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="39.727" height="38.514"
                                    viewBox="0 0 39.727 38.514">
                                    <g id="_03_Location" data-name="03_Location" transform="translate(-0.861 -2.788)">
                                        <circle id="Ellipse_25" data-name="Ellipse 25" cx="7.5" cy="7.5" r="7.5"
                                            transform="translate(24 3.879)" fill="#fff" />
                                        <path id="Path_4148" data-name="Path 4148"
                                            d="M32.884,60.873v2.312L19.247,61.2,14.536,50.779h7.993c-.141-.325-.276-.661-.4-1A16.278,16.278,0,0,1,21.64,48.2H2.152a1.286,1.286,0,0,0-1.29,1.29V71.14a1.286,1.286,0,0,0,1.29,1.29H34.168a1.286,1.286,0,0,0,1.29-1.29V58.531A27.6,27.6,0,0,1,32.884,60.873ZM3.442,50.779h9.21L17.119,60.7,3.442,58.55Zm0,19.071V60.163l15.092,2.374,3.659,7.313Zm29.442,0H24.077l-3.41-6.82L32.883,64.8Z"
                                            transform="translate(0 -31.128)" fill="#595959" />
                                        <path id="Path_4149" data-name="Path 4149"
                                            d="M86.319,6.465a8.679,8.679,0,0,0-14.185,0c-2.384,3.136-2.216,8.028-.9,11.623a25.746,25.746,0,0,0,7.989,10.558,25.746,25.746,0,0,0,7.989-10.558C88.535,14.493,88.7,9.6,86.319,6.465ZM79.227,17.232a5.654,5.654,0,1,1,5.654-5.654,5.654,5.654,0,0,1-5.654,5.654Z"
                                            transform="translate(-47.582)" fill="#f6b33f" />
                                    </g>
                                </svg>

                                <p class="font-bold"> آدرس دفتر مرکزی</p>

                            </div>
                            <p> استان تهران، شهر تهران، خیابان مرکزی
                                ساختمان مرکزی، پلاک 7</p>

                        </div>
                        <div class="flex flex-col bg-gray-100 lg:basis-3/4 basis-2/3 w-full px-4 py-6 rounded-xl gap-8 ">
                            <div class="flex items-center gap-2 mb-6">
                                <svg id="Text" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                    viewBox="0 0 32 32">
                                    <path id="Path_4171" data-name="Path 4171"
                                        d="M8.6,31H5.091C2.851,31,1,29.575,1,27.85V4.15C1,2.425,2.851,1,5.091,1H26.909C29.149,1,31,2.425,31,4.15V31Z"
                                        fill="#fff" />
                                    <path id="Path_4172" data-name="Path 4172" d="M13,8H25" fill="none" stroke="#595959"
                                        stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" />
                                    <path id="Path_4173" data-name="Path 4173" d="M7,13H25" fill="none" stroke="#595959"
                                        stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" />
                                    <path id="Path_4174" data-name="Path 4174" d="M7,18h5" fill="none" stroke="#595959"
                                        stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" />
                                    <path id="Path_4175" data-name="Path 4175" d="M7,8h.1" fill="none" stroke="#595959"
                                        stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" />
                                    <path id="Path_4176" data-name="Path 4176"
                                        d="M29.482,25.947l-6.4-6.4a2.5,2.5,0,0,0-1.011-.615l-3.3-1.049a.5.5,0,0,0-.638.591l.822,3.486a2.5,2.5,0,0,0,.665,1.194l6.333,6.333a2.5,2.5,0,0,0,3.535-3.535Z"
                                        fill="#fff" stroke="#f6b33f" stroke-width="2" />
                                    <path id="Path_4177" data-name="Path 4177" d="M28.25,25l-3.5,3.5" fill="none"
                                        stroke="#f6b33f" stroke-width="2" />
                                    <path id="Path_4178" data-name="Path 4178"
                                        d="M19,31H6a5,5,0,0,1-5-5V6A5,5,0,0,1,6,1H26a5,5,0,0,1,5,5V19" fill="none"
                                        stroke="#595959" stroke-linecap="round" stroke-width="2" />
                                </svg>


                                <p class="font-bold"> ارسال پیام </p>

                            </div>
                            <div class="grid grid-cols-3 gap-6">
                                <div> <label class="block text-ExPlaceHolder text-sm font-bold mb-2">نام و نام
                                        خانوداگی</label>
                                    <input type="text"
                                        class="flex w-full items-center justify-between rounded-xl h-10 bg-white p-2 border border-solid border-gray-300 ">
                                </div>
                                <div> <label class="block text-ExPlaceHolder text-sm font-bold mb-2">ایمیل</label>
                                    <input type="text"
                                        class="flex w-full items-center justify-between rounded-xl h-10 bg-white p-2 border border-solid border-gray-300 ">
                                </div>
                                <div> <label class="block text-ExPlaceHolder text-sm font-bold mb-2">عنوان</label>
                                    <input type="text"
                                        class="flex w-full items-center justify-between rounded-xl h-10 bg-white p-2 border border-solid border-gray-300 ">
                                </div>

                            </div>
                            <div>
                                <label class="block text-ExPlaceHolder text-sm font-bold mb-2">متن</label>
                                <input type="textarea"
                                    class="flex w-full items-center justify-between rounded-xl h-40 bg-white p-2 border border-solid border-gray-300 ">
                            </div>
                            <div class="flex justify-between">
                                <div class="flex items-center gap-4 my-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28.095" height="20.72"
                                        viewBox="0 0 28.095 20.72">
                                        <path id="attach_file_add_FILL0_wght400_GRAD0_opsz48"
                                            d="M19.726,32.1A7.564,7.564,0,0,1,14.265,29.9,7.214,7.214,0,0,1,12,24.509V9.408A5.185,5.185,0,0,1,13.6,5.58,5.272,5.272,0,0,1,17.443,4a5.4,5.4,0,0,1,5.443,5.443v11.73h-1.4V9.408a3.838,3.838,0,0,0-1.176-2.845,4.114,4.114,0,0,0-5.724,0A3.838,3.838,0,0,0,13.4,9.408V24.58a5.761,5.761,0,0,0,1.861,4.337,6.478,6.478,0,0,0,6.971,1.264,6.559,6.559,0,0,0,2.054-1.387V30.62a8.109,8.109,0,0,1-2.125,1.089A7.564,7.564,0,0,1,19.726,32.1ZM26.4,30.339V26.125H22.184V24.018H26.4V19.8h2.107v4.214H32.72v2.107H28.506v4.214Zm-6.673-5.268v1.4a2.923,2.923,0,0,1-2.248-1,3.4,3.4,0,0,1-.913-2.371V9.338h1.4V23.21a1.858,1.858,0,0,0,.509,1.317A1.642,1.642,0,0,0,19.726,25.071Zm6.321-8.323V9.338h1.4v7.41Z"
                                            transform="translate(32.095 -12) rotate(90)" />
                                    </svg>
                                    <p class="font-bold">افزودن فایل پیوست</p>
                                </div>
                                <button
                                    class="bg-ExYellow text-white hover:bg-white hover:text-ExYellow w-1/3 text-center justify-center border border-solid border-ExYellow dark:text-ExBlack fill-white dark:hover:bg-ExYellow dark:hover:shadow-md dark:hover:shadow-gray-600 flex my-auto items-center rounded-lg h-10">

                                    ارسال پیام
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col items-start gap-4 mx-8 sm:hidden mt-12">
                        <div class="flex flex-col">
                            <div class="flex gap-2 items-center font-bold">
                                <svg xmlns="http://www.w3.org/2000/svg" width="37.597" height="36.597"
                                    viewBox="0 0 37.597 36.597">
                                    <g id="_12673353521638194438" data-name="12673353521638194438"
                                        transform="translate(0.25 0.25)">
                                        <path id="Path_4150" data-name="Path 4150"
                                            d="M26.4,3H13.529A10.529,10.529,0,0,0,3,13.529h9.359v-1.17a3.51,3.51,0,0,1,3.51-3.51h8.189a3.51,3.51,0,0,1,3.51,3.51v1.17h9.359A10.529,10.529,0,0,0,26.4,3Z"
                                            transform="translate(-1.415 -1.415)" fill="#fff" />
                                        <path id="Path_4151" data-name="Path 4151"
                                            d="M33.117,29.337A1.17,1.17,0,0,0,32,28.51H29.986a4.679,4.679,0,0,1-3.6-1.684l-.819-.984a2.34,2.34,0,0,0-1.8-.842H16.606a2.34,2.34,0,0,0-1.8.842l-.819.984a4.679,4.679,0,0,1-3.6,1.684H8.38a1.17,1.17,0,0,0-1.117.827l-3.6,13.644a2.34,2.34,0,0,0,2.223,3.077h28.6a2.34,2.34,0,0,0,2.223-3.077ZM20.19,43.718a8.189,8.189,0,1,1,5.791-2.4,8.19,8.19,0,0,1-5.791,2.4Z"
                                            transform="translate(-1.642 -10.546)" fill="#fff" />
                                        <path id="Path_4152" data-name="Path 4152"
                                            d="M31.17,34.34A1.17,1.17,0,1,0,30,33.17,1.17,1.17,0,0,0,31.17,34.34Z"
                                            transform="translate(-12.622 -13.452)" fill="#f6f9fc" />
                                        <path id="Path_4153" data-name="Path 4153"
                                            d="M24.806,36.976a1.17,1.17,0,1,0-1.17-1.17A1.17,1.17,0,0,0,24.806,36.976Z"
                                            transform="translate(-9.98 -14.546)" fill="#f6f9fc" />
                                        <path id="Path_4154" data-name="Path 4154"
                                            d="M22.17,43.34A1.17,1.17,0,1,0,21,42.17,1.17,1.17,0,0,0,22.17,43.34Z"
                                            transform="translate(-8.886 -17.187)" fill="#f6f9fc" />
                                        <path id="Path_4155" data-name="Path 4155"
                                            d="M24.806,49.7a1.17,1.17,0,1,0-1.17-1.17A1.17,1.17,0,0,0,24.806,49.7Z"
                                            transform="translate(-9.98 -19.829)" fill="#f6f9fc" />
                                        <path id="Path_4156" data-name="Path 4156"
                                            d="M31.17,52.34A1.17,1.17,0,1,0,30,51.17,1.17,1.17,0,0,0,31.17,52.34Z"
                                            transform="translate(-12.622 -20.923)" fill="#f6f9fc" />
                                        <path id="Path_4157" data-name="Path 4157"
                                            d="M37.534,49.7a1.17,1.17,0,1,0-1.17-1.17A1.17,1.17,0,0,0,37.534,49.7Z"
                                            transform="translate(-15.263 -19.829)" fill="#f6f9fc" />
                                        <path id="Path_4158" data-name="Path 4158"
                                            d="M40.17,43.34A1.17,1.17,0,1,0,39,42.17,1.17,1.17,0,0,0,40.17,43.34Z"
                                            transform="translate(-16.357 -17.187)" fill="#f6f9fc" />
                                        <path id="Path_4159" data-name="Path 4159"
                                            d="M37.534,36.976a1.17,1.17,0,1,0-1.17-1.17A1.17,1.17,0,0,0,37.534,36.976Z"
                                            transform="translate(-15.263 -14.546)" fill="#f6f9fc" />
                                        <path id="Path_4160" data-name="Path 4160"
                                            d="M26.983,2H12.114A11.124,11.124,0,0,0,1,13.114v2.34a1.76,1.76,0,0,0,1.755,1.755H9.774a1.76,1.76,0,0,0,1.755-1.755v-3.51a2.925,2.925,0,0,1,2.925-2.925H24.643a2.925,2.925,0,0,1,2.925,2.925v3.51a1.76,1.76,0,0,0,1.755,1.755h7.019A1.76,1.76,0,0,0,38.1,15.454v-2.34A11.124,11.124,0,0,0,26.983,2ZM10.359,15.454a.585.585,0,0,1-.585.585H2.755a.585.585,0,0,1-.585-.585V13.7h8.189Zm14.284-7.6H14.454a4.1,4.1,0,0,0-4.095,4.095v.585H2.187A9.956,9.956,0,0,1,12.114,3.17H26.983a9.956,9.956,0,0,1,9.927,9.359H28.738v-.585a4.1,4.1,0,0,0-4.095-4.095Zm12.284,7.6a.585.585,0,0,1-.585.585H29.323a.585.585,0,0,1-.585-.585V13.7h8.189Z"
                                            transform="translate(-1 -2)" fill="#595959" stroke="#595959"
                                            stroke-width="0.5" />
                                        <path id="Path_4161" data-name="Path 4161"
                                            d="M25.774,28a8.784,8.784,0,1,0,6.2,2.573A8.774,8.774,0,0,0,25.774,28Zm0,16.378a7.613,7.613,0,1,1,5.374-2.23,7.6,7.6,0,0,1-5.374,2.23Z"
                                            transform="translate(-7.226 -11.791)" fill="#f6b33f" />
                                        <path id="Path_4162" data-name="Path 4162"
                                            d="M30.755,31A1.755,1.755,0,1,0,32,31.514,1.755,1.755,0,0,0,30.755,31Zm0,2.34a.585.585,0,1,1,.414-.171A.585.585,0,0,1,30.755,33.34Z"
                                            transform="translate(-12.206 -13.037)" fill="#f6b33f" />
                                        <path id="Path_4163" data-name="Path 4163"
                                            d="M24.391,37.158a1.755,1.755,0,0,0,1.241-3,1.8,1.8,0,0,0-2.481,0,1.755,1.755,0,0,0,1.241,3Zm-.414-2.168a.585.585,0,1,1,.827.828.6.6,0,0,1-.827,0,.585.585,0,0,1,0-.828Z"
                                            transform="translate(-9.565 -14.143)" fill="#f6b33f" />
                                        <path id="Path_4164" data-name="Path 4164"
                                            d="M23.51,41.755A1.755,1.755,0,1,0,23,43,1.755,1.755,0,0,0,23.51,41.755Zm-2.34,0a.585.585,0,1,1,.171.414A.585.585,0,0,1,21.17,41.755Z"
                                            transform="translate(-8.471 -16.772)" fill="#f6b33f" />
                                        <path id="Path_4165" data-name="Path 4165"
                                            d="M23.15,46.89a1.755,1.755,0,1,0,2.482,0,1.8,1.8,0,0,0-2.482,0ZM24.8,48.544a.6.6,0,0,1-.827,0,.585.585,0,1,1,.827,0Z"
                                            transform="translate(-9.565 -19.425)" fill="#f6b33f" />
                                        <path id="Path_4166" data-name="Path 4166"
                                            d="M30.755,49A1.755,1.755,0,1,0,32,49.514,1.755,1.755,0,0,0,30.755,49Zm0,2.34a.585.585,0,1,1,.414-.171A.585.585,0,0,1,30.755,51.34Z"
                                            transform="translate(-12.206 -20.508)" fill="#f6b33f" />
                                        <path id="Path_4167" data-name="Path 4167"
                                            d="M35.878,46.89a1.755,1.755,0,1,0,2.481,0,1.8,1.8,0,0,0-2.481,0Zm1.654,1.654a.6.6,0,0,1-.827,0,.585.585,0,1,1,.827,0Z"
                                            transform="translate(-14.848 -19.425)" fill="#f6b33f" />
                                        <path id="Path_4168" data-name="Path 4168"
                                            d="M38,41.755a1.755,1.755,0,1,0,.514-1.241A1.755,1.755,0,0,0,38,41.755Zm2.34,0a.585.585,0,1,1-.171-.414A.585.585,0,0,1,40.34,41.755Z"
                                            transform="translate(-15.942 -16.772)" fill="#f6b33f" />
                                        <path id="Path_4169" data-name="Path 4169"
                                            d="M35.878,34.162a1.755,1.755,0,1,0,2.481,0,1.8,1.8,0,0,0-2.481,0Zm1.654,1.654a.6.6,0,0,1-.827,0,.585.585,0,1,1,.827,0Z"
                                            transform="translate(-14.848 -14.143)" fill="#f6b33f" />
                                        <path id="Path_4170" data-name="Path 4170"
                                            d="M36.867,40.345l-3.6-13.67a1.744,1.744,0,0,0-1.679-1.24H29.573a4.079,4.079,0,0,1-3.147-1.474l-.819-.983a2.942,2.942,0,0,0-1.737-1.006V20.755a1.755,1.755,0,0,0-3.51,0v1.17H19.19v-1.17a1.755,1.755,0,0,0-3.51,0v1.217a2.941,2.941,0,0,0-1.737,1.006l-.819.983a4.08,4.08,0,0,1-3.147,1.474H7.965A1.75,1.75,0,0,0,6.28,26.7L2.695,40.3a2.928,2.928,0,0,0,2.778,3.849h28.6a2.925,2.925,0,0,0,2.79-3.808ZM35.5,42.252a1.729,1.729,0,0,1-1.427.731H5.473a1.755,1.755,0,0,1-1.655-2.34L7.4,27.02a.585.585,0,0,1,.562-.415H9.977a5.258,5.258,0,0,0,4.048-1.9l.819-.983a1.738,1.738,0,0,1,1.345-.632h7.171a1.739,1.739,0,0,1,1.345.632l.819.983a5.258,5.258,0,0,0,4.048,1.9h2.012a.579.579,0,0,1,.556.392l3.6,13.682a1.72,1.72,0,0,1-.24,1.574Z"
                                            transform="translate(-1.227 -8.056)" fill="#595959" stroke="#595959"
                                            stroke-width="0.5" />
                                    </g>
                                </svg>
                                <p>شماره های تماس</p>
                            </div>
                        </div>
                        <div class="flex flex-col border-b border-solid border-gray-200 px-10 pb-4">
                            <p dir="ltr">0098 (123) 4567 8910</p>
                            <p dir="ltr">0098 (123) 4567 8910</p>
                        </div>
                        <div class="flex flex-col">
                            <div class="flex gap-2 items-center font-bold">
                                <svg xmlns="http://www.w3.org/2000/svg" width="38.311" height="42.211"
                                    viewBox="0 0 38.311 42.211">
                                    <g id="send-email" transform="translate(1 1.209)">
                                        <path id="Path_4134" data-name="Path 4134"
                                            d="M37.139,17.905a2.4,2.4,0,0,1,.357,1.31V38.5A2.515,2.515,0,0,1,35,41H3.686a2.515,2.515,0,0,1-2.5-2.5V19.215a5.974,5.974,0,0,1,.6-1.547"
                                            transform="translate(-1.186 -1)" fill="none" stroke="#595959"
                                            stroke-miterlimit="10" stroke-width="2" />
                                        <path id="Path_4135" data-name="Path 4135"
                                            d="M1.424,18.5v-.238a2.592,2.592,0,0,1,.6-.952l15.6-15.6a2.443,2.443,0,0,1,3.453,0l15.6,15.6a2.091,2.091,0,0,1,.476.6v.238"
                                            transform="translate(-1.186 -1)" fill="none" stroke="#595959"
                                            stroke-miterlimit="10" stroke-width="2" />
                                        <path id="Path_4136" data-name="Path 4136"
                                            d="M17.854,30.226H16.186L4.28,19.115l0-9.78A2.388,2.388,0,0,1,6.663,6.953H32.616A2.388,2.388,0,0,1,35,9.334v9.225L23.41,29.67C23.41,30.98,19.521,29.115,17.854,30.226Z"
                                            transform="translate(-1.186 -0.345)" fill="#fff" />
                                        <path id="Path_4137" data-name="Path 4137"
                                            d="M4.753,18.858v-9.5A2.46,2.46,0,0,1,7.3,6.953H31.968a2.46,2.46,0,0,1,2.548,2.4V18.4"
                                            transform="translate(-1.186 -1)" fill="none" stroke="#f6b33f"
                                            stroke-miterlimit="10" stroke-width="2" />
                                        <path id="Path_4138" data-name="Path 4138"
                                            d="M1.3,39.689l16.31-9.524a4.089,4.089,0,0,1,4.048,0l15.834,8.929"
                                            transform="translate(-1.186 -1)" fill="#fff" />
                                        <path id="Path_4139" data-name="Path 4139"
                                            d="M1.3,39.689l16.31-9.524a4.089,4.089,0,0,1,4.048,0l15.834,8.929"
                                            transform="translate(-1.186 -1)" fill="none" stroke="#595959"
                                            stroke-miterlimit="10" stroke-width="2" />
                                        <path id="Path_4140" data-name="Path 4140" d="M22.735,30.881,36.9,16.477"
                                            transform="translate(-1.186 -1)" fill="none" stroke="#595959"
                                            stroke-miterlimit="10" stroke-width="2" />
                                        <path id="Path_4141" data-name="Path 4141" d="M2.136,16.715,16.541,30.882"
                                            transform="translate(-1.186 -1)" fill="none" stroke="#595959"
                                            stroke-miterlimit="10" stroke-width="2" />
                                        <path id="Path_4142" data-name="Path 4142" d="M29.04,11.555H25.06"
                                            transform="translate(-1.186 -1)" fill="none" stroke="#f6b33f"
                                            stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" />
                                        <path id="Path_4143" data-name="Path 4143" d="M29.04,15.535h-18.9"
                                            transform="translate(-1.186 -1)" fill="none" stroke="#f6b33f"
                                            stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" />
                                    </g>
                                </svg>

                                <p> پست الکترونیکی </p>
                            </div>
                        </div>
                        <div class="flex flex-col border-b border-solid border-gray-200 px-10 pb-4">
                            <p dir="ltr">Info@moneyex.org</p>
                            <p dir="ltr">Support@moneyex.org</p>
                        </div>
                        <div class="flex flex-col">
                            <div class="flex gap-2 items-center font-bold">
                                <svg id="_20661336401582823583" data-name="20661336401582823583"
                                    xmlns="http://www.w3.org/2000/svg" width="39.727" height="38.514"
                                    viewBox="0 0 39.727 38.514">
                                    <circle id="Ellipse_25" data-name="Ellipse 25" cx="7.5" cy="7.5" r="7.5"
                                        transform="translate(23.139 1.091)" fill="#fff" />
                                    <path id="Path_4148" data-name="Path 4148"
                                        d="M32.884,60.873v2.312L19.247,61.2,14.536,50.779h7.993c-.141-.325-.276-.661-.4-1A16.278,16.278,0,0,1,21.64,48.2H2.152a1.286,1.286,0,0,0-1.29,1.29V71.14a1.286,1.286,0,0,0,1.29,1.29H34.168a1.286,1.286,0,0,0,1.29-1.29V58.531A27.6,27.6,0,0,1,32.884,60.873ZM3.442,50.779h9.21L17.119,60.7,3.442,58.55Zm0,19.071V60.163l15.092,2.374,3.659,7.313Zm29.442,0H24.077l-3.41-6.82L32.883,64.8Z"
                                        transform="translate(-0.861 -33.916)" fill="#595959" />
                                    <path id="Path_4149" data-name="Path 4149"
                                        d="M86.319,6.465a8.679,8.679,0,0,0-14.185,0c-2.384,3.136-2.216,8.028-.9,11.623a25.746,25.746,0,0,0,7.989,10.558,25.746,25.746,0,0,0,7.989-10.558C88.535,14.493,88.7,9.6,86.319,6.465ZM79.227,17.232a5.654,5.654,0,1,1,5.654-5.654,5.654,5.654,0,0,1-5.654,5.654Z"
                                        transform="translate(-48.443 -2.788)" fill="#f6b33f" />
                                </svg>

                                <p>آدرس دفتر مرکزی </p>
                            </div>
                        </div>
                        <div class="flex flex-col border-b border-solid border-gray-200 px-10 pb-4">
                            <p> استان تهران، شهر تهران، خیابان مرکزی
                                ساختمان مرکزی، پلاک 7</p>

                        </div>
                        <div class="flex flex-col  w-full px-4 py-6 rounded-xl gap-8 ">
                            <div class="flex items-center gap-2 mb-6">
                                <svg id="Text" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                    viewBox="0 0 32 32">
                                    <path id="Path_4171" data-name="Path 4171"
                                        d="M8.6,31H5.091C2.851,31,1,29.575,1,27.85V4.15C1,2.425,2.851,1,5.091,1H26.909C29.149,1,31,2.425,31,4.15V31Z"
                                        fill="#fff" />
                                    <path id="Path_4172" data-name="Path 4172" d="M13,8H25" fill="none" stroke="#595959"
                                        stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" />
                                    <path id="Path_4173" data-name="Path 4173" d="M7,13H25" fill="none" stroke="#595959"
                                        stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" />
                                    <path id="Path_4174" data-name="Path 4174" d="M7,18h5" fill="none" stroke="#595959"
                                        stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" />
                                    <path id="Path_4175" data-name="Path 4175" d="M7,8h.1" fill="none" stroke="#595959"
                                        stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" />
                                    <path id="Path_4176" data-name="Path 4176"
                                        d="M29.482,25.947l-6.4-6.4a2.5,2.5,0,0,0-1.011-.615l-3.3-1.049a.5.5,0,0,0-.638.591l.822,3.486a2.5,2.5,0,0,0,.665,1.194l6.333,6.333a2.5,2.5,0,0,0,3.535-3.535Z"
                                        fill="#fff" stroke="#f6b33f" stroke-width="2" />
                                    <path id="Path_4177" data-name="Path 4177" d="M28.25,25l-3.5,3.5" fill="none"
                                        stroke="#f6b33f" stroke-width="2" />
                                    <path id="Path_4178" data-name="Path 4178"
                                        d="M19,31H6a5,5,0,0,1-5-5V6A5,5,0,0,1,6,1H26a5,5,0,0,1,5,5V19" fill="none"
                                        stroke="#595959" stroke-linecap="round" stroke-width="2" />
                                </svg>


                                <p class="font-bold"> ارسال پیام </p>

                            </div>
                            <div class="flex flex-col gap-6">
                                <div> <label class="block text-ExPlaceHolder text-sm font-bold mb-2">نام و نام
                                        خانوداگی</label>
                                    <input type="text"
                                        class="flex w-full items-center justify-between rounded-xl h-10 bg-white p-2 border border-solid border-gray-300 ">
                                </div>
                                <div> <label class="block text-ExPlaceHolder text-sm font-bold mb-2">ایمیل</label>
                                    <input type="text"
                                        class="flex w-full items-center justify-between rounded-xl h-10 bg-white p-2 border border-solid border-gray-300 ">
                                </div>
                                <div> <label class="block text-ExPlaceHolder text-sm font-bold mb-2">عنوان</label>
                                    <input type="text"
                                        class="flex w-full items-center justify-between rounded-xl h-10 bg-white p-2 border border-solid border-gray-300 ">
                                </div>

                            </div>
                            <div>
                                <label class="block text-ExPlaceHolder text-sm font-bold mb-2">متن</label>
                                <input type="textarea"
                                    class="flex w-full items-center justify-between rounded-xl h-40 bg-white p-2 border border-solid border-gray-300 ">
                            </div>
                            <div class="flex flex-col items-center justify-between">
                                <div class="flex items-center gap-4 my-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28.095" height="20.72"
                                        viewBox="0 0 28.095 20.72">
                                        <path id="attach_file_add_FILL0_wght400_GRAD0_opsz48"
                                            d="M19.726,32.1A7.564,7.564,0,0,1,14.265,29.9,7.214,7.214,0,0,1,12,24.509V9.408A5.185,5.185,0,0,1,13.6,5.58,5.272,5.272,0,0,1,17.443,4a5.4,5.4,0,0,1,5.443,5.443v11.73h-1.4V9.408a3.838,3.838,0,0,0-1.176-2.845,4.114,4.114,0,0,0-5.724,0A3.838,3.838,0,0,0,13.4,9.408V24.58a5.761,5.761,0,0,0,1.861,4.337,6.478,6.478,0,0,0,6.971,1.264,6.559,6.559,0,0,0,2.054-1.387V30.62a8.109,8.109,0,0,1-2.125,1.089A7.564,7.564,0,0,1,19.726,32.1ZM26.4,30.339V26.125H22.184V24.018H26.4V19.8h2.107v4.214H32.72v2.107H28.506v4.214Zm-6.673-5.268v1.4a2.923,2.923,0,0,1-2.248-1,3.4,3.4,0,0,1-.913-2.371V9.338h1.4V23.21a1.858,1.858,0,0,0,.509,1.317A1.642,1.642,0,0,0,19.726,25.071Zm6.321-8.323V9.338h1.4v7.41Z"
                                            transform="translate(32.095 -12) rotate(90)" />
                                    </svg>
                                    <p class="font-bold">افزودن فایل پیوست</p>
                                </div>
                                <button
                                    class="bg-ExYellow text-white hover:bg-white hover:text-ExYellow w-full text-center justify-center border border-solid border-ExYellow dark:text-ExBlack fill-white dark:hover:bg-ExYellow dark:hover:shadow-md dark:hover:shadow-gray-600 flex my-auto items-center rounded-lg h-10">

                                    ارسال پیام
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                <CommonFooter :state="state" />
            </div>


        </div>
    </div>
</template>
<script setup>
useHead({
    htmlAttrs: {
        ref: "darkSwitchRef"
    },
    title: 'MoneyEx | Blog',
})
useHead({
    bodyAttrs: {
        class: "dark:bg-black"
    }
})
onMounted(() => {
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
});
let defaultTransform = 0;
function goNext() {
    defaultTransform = defaultTransform - 398;
    var slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7) defaultTransform = 0;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}
function goPrev() {
    var slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
    else defaultTransform = defaultTransform + 398;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}

const state = reactive({
    lang: false,
    markets: "بازارها",
    trade: 'تبدیل ارز',
    userManual: 'راهنمای استفاده',
    easyShopping: 'خرید آسان',
    blog: 'بلاگ',
    main: 'صفحه اصلی',
    about: 'درباره ی ما',
    contact: 'تماس با ما',
    rules: 'قوانین و مقررات',
    back: 'بازگشت',
    userPanel: 'حساب کاربری',
    footerText1: 'درباره ی مانی اکس',
    footerText2: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده',
    footerText3: "دسترسی های سریع",
    footerText4: "درباره ما",
    footerText5: "تماس با ما",
    footerText6: "حساب کاربری",
    footerText7: "قوانین و مقررات",
    footerText8: "خدمات ما",
    footerText9: "تبدیل ارز",
    footerText10: "بلاگ",
    footerText11: "ارتباط با ما",
    footerText12: "استان تهران، شهر تهران، خیابان مرکزی ساختمان مرکزی، پلاک 7",
    footerText13: "کلیه حقوق این سایت محفوظ و متعلق به مانی اکس می باشد",
    hash: '#fa',
    postSlideText1: 'مجله اینترنتی مانی اکسـ',
    postSlideText2: 'جدیدترین اخبار و مطالب حوزه مالی، رمز ارز و ترید',
    seeAll: 'نمایش همه',
    postTitle: 'آموزش جامع بازار رمز ارز',
    postTime: '12 ساعت قبل',
    summery: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ'
})

const switchToPersian = () => {
    window.location.hash = "#fa";
    state.lang = true;
    state.markets = "بازار ها";
    state.trade = "تبدیل ارز";
    state.userManual = "راهنمای استفاده";
    state.easyShopping = "خریدآسان";
    state.blog = "بلاگ";
    state.main = "صفحه ی اصلی";
    state.about = "درباره ما";
    state.contact = "تماس با ما";
    state.rules = "قوانین و مقررات";
    state.back = "بازگشت";
    state.userPanel = "حساب کاربری";
    state.footerText1 = 'درباره ی مانی اکس';
    state.footerText2 = 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده';
    state.footerText3 = "دسترسی های سریع";
    state.footerText4 = "درباره ما";
    state.footerText5 = "تماس با ما";
    state.footerText6 = "حساب کاربری";
    state.footerText7 = "قوانین و مقررات";
    state.footerText8 = "خدمات ما";
    state.footerText9 = "تبدیل ارز";
    state.footerText10 = "بلاگ";
    state.footerText11 = "ارتباط با ما";
    state.footerText12 = "استان تهران، شهر تهران، خیابان مرکزی ساختمان مرکزی، پلاک 7";
    state.footerText13 = "کلیه حقوق این سایت محفوظ و متعلق به مانی اکس می باشد";
    state.hash = '#fa',
        state.postSlideText1 = 'مجله اینترنتی مانی اکسـ',
        state.postSlideText2 = 'جدیدترین اخبار و مطالب حوزه مالی، رمز ارز و ترید',
        state.seeAll = 'نمایش همه',
        state.postTitle = 'آموزش جامع بازار رمز ارز',
        state.postTime = '12 ساعت قبل',
        state.summery = 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',

        useHead({
            bodyAttrs: {
                dir: 'rtl'
            },
        })
}
const switchToEnglish = () => {
    window.location.hash = "#en";
    state.lang = false;
    state.markets = "Markets";
    state.trade = "Trade";
    state.userManual = "User Manual";
    state.easyShopping = "Easy Buy";
    state.blog = "Blog";
    state.main = "Home";
    state.about = "About Us";
    state.contact = "Contact Us";
    state.rules = "Terms and Conditions";
    state.back = "Back";
    state.userPanel = "User Panel";
    state.footerText1 = "About MoneyEx";
    state.footerText2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque In egestas erat imperdiet sed euismod nisi porta lorem mollis Morbi tristique senectus et netus Mattis pellentesque id nibh tortor id aliquet lectus proin";
    state.footerText3 = "Quick Accesses";
    state.footerText4 = "AboUT Us";
    state.footerText5 = "Contact Us";
    state.footerText6 = "User Panel";
    state.footerText7 = "Terms and Conditions";
    state.footerText8 = "Our Services";
    state.footerText9 = "Exchange";
    state.footerText10 = "Blog";
    state.footerText11 = "Contact Us";
    state.footerText12 = "Tehran province, Tehran city, st Central building Central, no.7";
    state.footerText13 = "All rights of this site are reserved and belong to MoneyEx";
    state.hash = '#en'
    state.postSlideText1 = 'MoneyEx online magazine',
        state.postSlideText2 = 'The latest news and content in the field of finance, cryptocurrency and trade',
        state.seeAll = 'See All'
    state.postTitle = 'Comprehensive education of the cryptocurrency market',
        state.postTime = '12 hours ago',
        state.summery = 'Lorem Ipsum is a mock text with an unintelligible',

        useHead({
            bodyAttrs: {
                dir: 'ltr'
            }

        })
}
onMounted(() => {
    var hash = window.location.hash;
    if (hash) {
        if (hash === "#en") {
            switchToEnglish();
        }
        else {
            switchToPersian();
        }
    }
    else {
        switchToPersian();
    }
});

        // پایان بخش تغییر زبان
</script>
