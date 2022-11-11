<template>
    <div class="">
        <!-- main banner -->
        <img src="/src/assets/images/e-commerce/product-theme/主banner.jpg" class="w-screen cover-img" alt="" srcset="">
        <!-- secondary nav -->
        <SecondaryBar />

        <!-- hero -->
        <BannerText :title="i18nMessage.title" :content="i18nMessage.content" />
        <div class="flex justify-center">
            <div class="grid gap-16 grid-cols-3 ">
                <template v-for="theme in themes" :key="theme['title']">
                    <ThemeModal :theme="theme"></ThemeModal>
                </template>
            </div>

        </div>
        <div class="text-center text-4xl my-28" :style="'color: rgba(166, 166, 166, 1);'">
            ···{{ t('common.moreContent') }}···</div>

    </div>
</template>

<script setup>
import { computed, reactive } from 'vue';
// import { useStore } from 'vuex';
// import { useRoute, useRouter } from 'vue-router';


import SecondaryBar from '@/components/SecondaryBar.vue';
import BannerText from '@/components/BannerText.vue';
import ThemeModal from '@/components/ThemeModal.vue';
import pubUse from '@/util/pub-use.js'

//i18n
import { useI18n } from 'vue-i18n'
const { t, } = useI18n()
const i18nMessage = computed(() => ({
    title: t('productTheme.title'),
    content: t('productTheme.content'),

}))


const getAssetsFile = pubUse.getAssetsFile

const prefix = "images/e-commerce/product-theme/"
const days = ['圣诞活动/', '父亲节/', '母亲节/', '春节/', '返校日/', '会员日/']
const christmasPrefix = prefix + days[0];
const fatherDayPrefix = prefix + days[1];
const motherDayPrefix = prefix + days[2];
const springFestivalPrefix = prefix + days[3];
const backSchoolPrefix = prefix + days[4];
const vipDayPrefix = prefix + days[5];
const buildModalImgPaths = (prefix, fileNames) => {
    return fileNames.map((val) => getAssetsFile(prefix + val))
}
const themes = reactive([
    {
        title: 'productTheme.christmas.title',
        cover: getAssetsFile(christmasPrefix + "圣诞活动.jpg"),
        content: t('productTheme.christmas.content'),
        images: buildModalImgPaths(christmasPrefix, ['1 (1).jpg', '1 (2).jpg', '1 (3).jpg'])
    },
    {
        title: 'productTheme.fatherDay.title',
        cover: getAssetsFile(fatherDayPrefix + "父亲节.jpg"),
        content: t('productTheme.fatherDay.content'),
        images: buildModalImgPaths(fatherDayPrefix, ['第一个.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg'])
    }, {
        title: 'productTheme.motherDay.title',
        cover: getAssetsFile(motherDayPrefix + "母亲节.jpg"),
        content: t('productTheme.motherDay.content'),
        images: buildModalImgPaths(motherDayPrefix, ['第一个.jpg', '1 (1).jpg', '1 (3).jpg', '1 (4).jpg'])
    }, {
        title: 'productTheme.springFestival.title',
        cover: getAssetsFile(springFestivalPrefix + "春节.jpg"),
        content: t('productTheme.springFestival.content'),
        images: []
    }, {
        title: 'productTheme.backSchoolDay.title',
        cover: getAssetsFile(backSchoolPrefix + "返校日.jpg"),
        content: "",
        images: buildModalImgPaths(backSchoolPrefix, ['1 (1).jpg', '1 (2).jpg', '1 (3).jpg', '1（4）.jpg'])
    }, {
        title: 'productTheme.vipDay.title',
        cover: getAssetsFile(vipDayPrefix + "会员日.jpg"),
        content: t('productTheme.vipDay.content'),
        images: buildModalImgPaths(vipDayPrefix, ['1 (1).jpg', '1 (2).jpg', '1 (3).jpg', '1 (4).jpg', '1 (5).jpg', '1 (6).jpg', '1 (7).jpg'])
    },

])

</script>
<style scoped >
.theme-img {
    @apply object-cover;
    border-radius: 27px;
    width: 449px;
    height: 183px;
}
</style>