<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mx-auto pt-16">
        <MainTrendCoin coin-name="USDT" coin-price="1.06$" :coin-persian-name="state.coinName" coin-changes="0.87%"
            coin-class="text-ExGreen" coin-div-class=" trendcoinBack bg-USDT dark:bg-USDTdark">
            <template #growIcon>
                <IconsGrowup />
            </template>
            <template #image>
                <IconsUsdt />
            </template>

        </MainTrendCoin>
        <MainTrendCoin coin-name="SHIBA" coin-price="00.29$" :coin-persian-name="state.coinName" coin-changes="0.87%"
            coin-class="text-red-500" coin-div-class=" trendcoinBack bg-Shiba dark:bg-Shibadark">
            <template #growIcon>
                <IconsDown />
            </template>
            <template #image>
                <IconsShiba />
            </template>

        </MainTrendCoin>
        <MainTrendCoin coin-name="ETH" coin-price="1876.09$" :coin-persian-name="state.coinName" coin-changes="0.87%"
            coin-class="text-ExGreen" coin-div-class=" trendcoinBack bg-ETH dark:bg-ETHdark">
            <template #growIcon>
                <IconsGrowup />
            </template>
            <template #image>
                <IconsEth />
            </template>

        </MainTrendCoin>
        <MainTrendCoin coin-name="BTC" coin-price="28128.29$" :coin-persian-name="state.coinName" coin-changes="0.87%"
            coin-class="text-red-500" coin-div-class=" trendcoinBack bg-BTC dark:bg-BTCdark">
            <template #growIcon>
                <IconsDown />
            </template>
            <template #image>
                <IconsBtc />
            </template>

        </MainTrendCoin>

    </div>
</template>
<script setup>
const props = defineProps(['state'])
</script>

