<template>

    <div>

        <label :for="theme['title']" class="cursor-pointer text-center text-3xl font-medium">
            <img v-lazy="theme['cover']" class="theme-img my-4" alt="">
            <div>{{ t(theme['title']) }}</div>
        </label>
        <!-- Put this part before </body> tag -->
        <input :id="theme['title']" type="checkbox" class="d-modal-toggle" />
        <label :for="theme['title']" class="d-modal d-cursor-pointer">
            <label class="d-modal-box relative w-10/12 max-w-full text-center p-16" for="theme['title']">
                <h3 class="text-4xl font-bold">{{ t(theme['title']) }}</h3>
                <p class="py-4 text-xl">{{ t(theme['content']) }}</p>
                <div v-for="image in theme['images']" :key="image" class="my-10 ">
                    <img v-lazy="image" class="rounded-3xl content-img" alt="">
                </div>
            </label>
        </label>
    </div>
</template>
  
<script setup>
import { useI18n } from 'vue-i18n'

defineProps({
    theme: {
        type: Object,
        default: () => ({
            title: "",
            content: "",
            images: []
        })
    }
})

// // i18n

const { t, } = useI18n()
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
.theme-img {
    @apply object-cover;
    border-radius: 27px;
    width: 449px;
    height: 183px;
}

.content-img {
    width: 100%;
}
</style>