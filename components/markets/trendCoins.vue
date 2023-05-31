<template>
    <p v-text="state.livePrice" class="text-center text-2xl font-bold pt-20 dark:text-white"></p>
    <div class="flex text-base justify-center gap-2 items-center mt-2 text-ExYellow">
        <svg xmlns="http:/www.w3.org/2000/svg" width="20.527" height="22.807" viewBox="0 0 20.527 22.807">
            <path id="Calendar"
                d="M11.342,13.263H9.061v2.281h2.281Zm4.561,0H13.623v2.281H15.9Zm4.561,0H18.184v2.281h2.281Zm2.281-7.983h-1.14V3H19.325V5.281H10.2V3H7.921V5.281H6.781A2.27,2.27,0,0,0,4.511,7.561L4.5,23.527a2.28,2.28,0,0,0,2.281,2.281H22.746a2.287,2.287,0,0,0,2.281-2.281V7.561A2.287,2.287,0,0,0,22.746,5.281Zm0,18.246H6.781V10.983H22.746Z"
                transform="translate(-4.5 -3)" fill="#f6b33f" />
        </svg>
        <p v-text="state.todayDate"></p>
    </div>
    <!--Trend-->

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mx-auto pt-16">
        <MainTrendCoin v-for="(item , index) in coinDetails" coin-name="USDT" :coin-price=item.last :coin-persian-name="state.coinName" :coin-changes=item.change
            coin-class="text-ExGreen" coin-div-class=" trendcoinBack bg-USDT dark:bg-USDTdark">
            <template #growIcon>
                <IconsGrowup />
            </template>
            <template #image>
                <IconsUsdt />
            </template>
        </MainTrendCoin>

    </div>
    <!--End of Trend-->
</template>
<script setup>
const props = defineProps(['state'])
const { data: coinDetails } = await useFetch('https://moneyex.org/api/public?command=returnTicker')

</script>