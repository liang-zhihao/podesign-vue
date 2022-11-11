<template>
    <div class="">
        <!-- main banner -->
        <img v-lazy="'/src/assets/images/e-commerce/product-plan/主banner.png'" class="w-screen cover-img" alt="" srcset="">
        <!-- secondary nav -->
        <SecondaryBar />

        <!-- hero -->
        <BannerText :title="i18nMessage.title" :content="i18nMessage.content" />


        <div class=" flex justify-center w-full  ">
            <ImgMasonry :images="images" style="max-width: 76rem;" />
        </div>
        <div class="text-center text-4xl my-28" :style="'color: rgba(166, 166, 166, 1);'">
            ···{{ t('common.moreContent') }}···</div>

    </div>
</template>

<script setup>
// import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
// import { useStore } from 'vuex';
// import { useRoute, useRouter } from 'vue-router';

import { reactive, computed } from 'vue';
import SecondaryBar from '@/components/SecondaryBar.vue';
import BannerText from '@/components/BannerText.vue';
import ImgMasonry from '@/components/ImgMasonry.vue';
import pubUse from '@/util/pub-use.js'


//i18n
import { useI18n } from 'vue-i18n'
const { t, } = useI18n()
const i18nMessage = computed(() => ({
    title: t('productPlan.title'),
    content: t('productPlan.content'),

}))

// src width height
// NOTE 排列顺序是先根据y轴，然后从左到右
const buildImgStr = pubUse.buildImgStr
const prefix = "images/e-commerce/product-plan/"
const images = reactive([
    buildImgStr(prefix + "黄色森林.png", "296px", "296px"),
    buildImgStr(prefix + "筋膜枪发电.jpg", "296px", "296px"),
    buildImgStr(prefix + "头盔手机.jpg", "293px", "293px"),
    buildImgStr(prefix + "按摩脚.jpg", "296px", "148px"),
    buildImgStr(prefix + "详情页.jpg", "296px", "2133px"),
    buildImgStr(prefix + "按摩脖子.jpg", "296px", "148px"),
    buildImgStr(prefix + "头盔细节.jpg", "296px", "296px"),
    buildImgStr(prefix + "吉他.png", "296px", "296px"),
    buildImgStr(prefix + "眼罩女.jpg", "296px", "182px"),
    buildImgStr(prefix + "按摩.jpg", "296px", "148px"),
    buildImgStr(prefix + "banner1.jpg", "296px", "60px"),
    buildImgStr(prefix + "头盔背后.jpg", "295px", "295px"),
    buildImgStr(prefix + "按摩手.jpg", "296px", "148px"),
    buildImgStr(prefix + "筋膜枪电池.jpg", "296px", "296px"),
    buildImgStr(prefix + "立夏.png", "296px", "313px"),
    buildImgStr(prefix + "按摩2.jpg", "296px", "148px"),
    buildImgStr(prefix + "筋膜枪粪土.jpg", "296px", "296px"),
    buildImgStr(prefix + "头盔惊喜.jpg", "296px", "185px"),
    buildImgStr(prefix + "妹子躺着.jpg", "296px", "183px"),
    buildImgStr(prefix + "筋膜枪背后.jpg", "296px", "296px"),

])

</script>
<style scoped >
.secondary-nav {
    background: rgba(33, 35, 38, 1);

}

.item {
    box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    margin-bottom: 10px;
}
</style>