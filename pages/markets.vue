<template >
    <div>
        <div class="bg-white dark:bg-black md:bg-slate-100">
            <div class="h-530 ">
                <CommonNavbar :switch-to-persian="switchToPersian" :switch-to-english="switchToEnglish" :state="state" />
                <div class="bg-hero-pattern -mt-6 bg-repeat-x ">
                    <!-- هدر -->
                </div>
                <div class="dark:bg-black">
                    <div class="2xl:mx-36 mx-4 mb-16">

                    </div>
                    <!-- فوتر -->
                </div>

            </div>
        </div>
    </div>
</template>
<script setup>
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


const state = reactive({
    lang: false,

})

const switchToPersian = () => {
    window.location.hash = "#fa";
    state.lang = true;

    useHead({
        bodyAttrs: {
            dir: 'rtl'
        },
    })
}
const switchToEnglish = () => {
    window.location.hash = "#en";
    state.lang = false;
    useHead({
        bodyAttrs: {
            dir: 'ltr'
        },
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
