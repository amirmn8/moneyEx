<template >
  <div>
    <div class="dark:bg-black">
      <div class="h-530 bg-lightBg dark:bg-darkBg">
        <CommonNavbar />
        <div class="bg-hero-pattern -mt-6 bg-repeat-x ">
          <MainHeader />
        </div>
        <div class="dark:bg-black">
          <div class="2xl:mx-36 mx-4">
            <MainTrendCoindSection />
            <MainWhyUs />
            <MainOurPoints />
            <MainTradeEveryWhere />
          </div>
          <CommonFooter />
        </div>

      </div>



    </div>

  </div>
</template>
<script setup>
const darkSwitchRef = ref(null);
useHead({
  htmlAttrs: {
    ref: "darkSwitchRef"
  }
})
useHead({
  bodyAttrs: {
    class: "dark:bg-black"
  }
})
onMounted(() => {
  watchEffect(() => {
    if (process.client) {
      const darkSwitchElement = darkSwitchRef.value;
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

</script>
