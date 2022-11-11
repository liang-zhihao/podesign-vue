<template>

    <div id="imgs" v-masonry class="w-10/12 cursor-pointer " item-selector=".item" :style="'width:1540px'"
        columnWidth="300px" gutter="10">
        <!-- item -->
        <img v-for="i in images" :key="i['src']" v-masonry-tile class="object-cover item" :src="i['src']"
            :style="i['style']" alt="" srcset="">
        <!-- END item -->
    </div>

</template>
  
<script setup>
import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css';
import { onMounted } from 'vue';
defineProps({
    // NOTE object and array default attr should be a function.
    images: {
        type: Array,
        default: () => ([])
    },
    // {
    //     width: String,
    //     height: String,
    //     src: String,
    //     style: {
    //         height: String,
    //         width: String,
    //     },
    // }
})
onMounted(() => {
    // NOTE document.getElementById
    const ViewerDom = document.getElementById('imgs');
    const viewer = new Viewer(ViewerDom, {
        title: false,
        tooltip: false,
        movable: true,
        rotatable: false,
        fullscreen: false
    });
    viewer
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
.item {
    box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    margin-bottom: 10px;
}
</style>