<template>
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
</template>
<script setup>
const props = defineProps(['state'])
const { data: coinDetails } = await useFetch('https://moneyex.org/api/public?command=returnTicker')
</script>

