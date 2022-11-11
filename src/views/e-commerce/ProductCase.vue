<template>
    <div class="  ">
        <!-- main banner -->
        <img src="/src/assets/images/e-commerce/product-case/主banner.png" class="w-screen cover-img" alt="" srcset="">
        <!-- secondary nav -->
        <SecondaryBar />
        <!-- Hero -->
        <BannerText :title="i18nMessage.title" :content="i18nMessage.content" />

        <div class=" flex justify-center w-full  ">
            <ImgMasonry :images="images" style="max-width: 75.5rem;" />
        </div>

        <div class="text-center text-4xl my-28" :style="'color: rgba(166, 166, 166, 1);'">···{{ t('common.moreContent')
        }}···</div>

    </div>
</template>



<script setup>
import { reactive, computed } from 'vue';
// import { useStore } from 'vuex';
// import { useRoute, useRouter } from 'vue-router';
import SecondaryBar from '@/components/SecondaryBar.vue';
import BannerText from '@/components/BannerText.vue';
import ImgMasonry from '@/components/ImgMasonry.vue';
import pubUse from '@/util/pub-use.js';
// const data = reactive({})
// onBeforeMount(() => {
//     //console.log('2.组件挂载页面之前执行----onBeforeMount')
// })
// onMounted(() => {
//     //console.log('3.-组件挂载到页面之后执行-------onMounted')
// })
// watchEffect(() => {
// })
// 使用toRefs解构
// let { } = { ...toRefs(data) }
// defineExpose({
//     ...toRefs(data)
// })

//i18n
import { useI18n } from 'vue-i18n'
const { t, } = useI18n()
const i18nMessage = computed(() => ({
    title: t('productCase.title'),
    content: t('productCase.content')

}))


// src width height
// NOTE 排列顺序是先根据y轴，然后从左到右
const buildImgStr = pubUse.buildImgStr
const prefix = 'images/e-commerce/product-case/'

const images = reactive([
    buildImgStr(prefix + "头盔左.jpg", "293px", "293px"),
    buildImgStr(prefix + "音响x.jpg", "293px", "245px"),
    buildImgStr(prefix + "按钮.jpg", "293px", "293px"),
    buildImgStr(prefix + "黄色螺旋.png", "293px", "293px"),
    buildImgStr(prefix + "LED.png", "293px", "293px"),
    // 
    buildImgStr(prefix + "筋膜枪白2.png", "293px", "390px"),
    buildImgStr(prefix + "透明电池.jpg", "293px", "293px"),
    buildImgStr(prefix + "筋膜枪黑.jpg", "293px", "322px"),
    buildImgStr(prefix + "透明音响.jpg", "293px", "206px"),
    buildImgStr(prefix + "两个红色.png", "293px", "293px"),
    buildImgStr(prefix + "筋膜枪白.png", "293px", "391px"),
    buildImgStr(prefix + "粉色手表.png", "293px", "165px"),
    buildImgStr(prefix + "相机.png", "293px", "188px"),
    buildImgStr(prefix + "筋膜枪套装.jpg", "293px", "293px"),
    buildImgStr(prefix + "内衣.jpg", "293px", "164px"),
    buildImgStr(prefix + "按摩脚.jpg", "293px", "322px"),
    buildImgStr(prefix + "筋膜枪发电.jpg", "293px", "293px"),
    buildImgStr(prefix + "红色内部.png", "293px", "293px"),
    buildImgStr(prefix + "头盔正面.jpg", "293px", "322px"),
    buildImgStr(prefix + "内部旋转.png", "293px", "293px"),
    buildImgStr(prefix + "头盔右.jpg", "293px", "293px"),


    buildImgStr(prefix + "筋膜枪屁股.jpg", "293px", "293px"),
    buildImgStr(prefix + "筋膜枪尺寸.jpg", "293px", "293px"),




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
