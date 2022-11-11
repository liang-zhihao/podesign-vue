<template>
    <div class="">
        <!-- main banner -->
        <img v-lazy="'/src/assets/images/e-commerce/product-scene/咖啡机.png'" class="w-screen cover-img" alt="" srcset="">
        <!-- secondary nav -->
        <SecondaryBar />
        <!-- hero -->
        <BannerText :title="i18nMessage.title" :content="i18nMessage.content" />


        <!-- <div class="flex justify-center ">
            <div class="flex flex-wrap justify-center items-start">
                <img v-for="i in images" :key="i['src']" :src="i['src']" :style="i['style']" alt="" srcset="">
            </div>
        </div> -->

        <div class=" flex justify-center w-full  ">
            <ImgMasonry :images="images" style="max-width: 75.5rem;" />
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
    title: t('productScene.title'),
    content: t('productScene.content'),

}))
const buildImgStr = pubUse.buildImgStr
// src width height
// NOTE 排列顺序是先根据y轴，然后从左到右

const prefix = 'images/e-commerce/product-scene/'
const images = reactive([
    buildImgStr(prefix + "餐桌.jpg", "292px", "195px"),
    // 头戴耳机
    buildImgStr(prefix + "耳机.jpg", "292px", "462px"),
    buildImgStr(prefix + "耳机电脑.jpg", "293px", "293px"),
    buildImgStr(prefix + "打蛋器.png", "293px", "366px"),
    buildImgStr(prefix + "头盔桌子.jpg", "293px", "293px"),
    // 
    buildImgStr(prefix + "耳机留声机.jpg", "293px", "293px"),

    buildImgStr(prefix + "苹果.jpg", "293px", "206px"),
    buildImgStr(prefix + "眼罩沙发.jpg", "295px", "295px"),
    buildImgStr(prefix + "化妆品.jpg", "293px", "163px"),
    buildImgStr(prefix + "咖啡机.png", "293px", "165px"),
    buildImgStr(prefix + "头盔沙发.jpg", "293px", "292px"),

    buildImgStr(prefix + "红色化妆品.jpg", "293px", "295px"),
    buildImgStr(prefix + "眼罩桌子.jpg", "293px", "293px"),
    buildImgStr(prefix + "耳机手机.jpg", "293px", "441px"),

    buildImgStr(prefix + "耳机 (2).jpg", "293px", "296px"),






])

</script>
<style scoped >
.item {
    box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    margin-bottom: 10px;
}
</style>