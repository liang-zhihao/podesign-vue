<template>

    <div class="flex-col justify-center text-center my-12">
        <div class="text-weight-700 text-6xl my-6">
            {{ title }}
        </div>
        <div class="flex justify-center">
            <div class="w-1/2"> {{ content }}</div>
        </div>
    </div>

</template>
  
<script setup>

defineProps({
    title: {
        type: String,
        default: ""
    },
    content: {
        type: String,
        default: ""
    },
})

// import { computed } from "vue";
// // i18n
// import { useI18n } from 'vue-i18n'

// const { t, locale } = useI18n()
// console.log(t('nav.service'))
// const changeLangToZh = () => {
//     locale.value = 'zh'
// }
// const changeLangToEn = () => {
//     locale.value = 'en'
// }

// const i18nMessage = computed(() => ({
//     homepage: t('nav.homepage'),
//     service: t('nav.service'),
//     client: t('nav.client'),
//     us: t('nav.us'),
//     contact: t('nav.contact'),
// }))

</script>
  
<style scoped>

</style>