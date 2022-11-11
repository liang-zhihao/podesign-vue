<template>
  <div class="">
    <video class="w-screen " :src="getCOSFile('videos/main_banner.mp4')" autoplay loop muted></video>
    <div class="flex flex-col justify-center items-center mt-6  sm:flex-row ">
      <router-link to="/animation">
        <img v-lazy="getAssetsFile(i18nMessage.animateSrc)" class="banner-image" alt="">
      </router-link>
      <router-link to="/product-case">
        <img v-lazy="getAssetsFile(i18nMessage.ecommerceSrc)" class="banner-image my-6 sm:mx-6 sm:my-0  " alt="">
      </router-link>
      <router-link to="/">
        <img v-lazy="getAssetsFile(i18nMessage.photographSrc)" class="banner-image" alt="">
      </router-link>

    </div>
    <div class="flex justify-center  my-16">
      <div class=" flex flex-col   items-center rounded-2xl border-2 p-10 w-4/5    sm:flex-row ">
        <img :src="getAssetsFile('images/contact-logo.png')" class=" object-contain w-24" alt="">
        <div class="my-8 sm:mx-8 sm:my-0">{{ i18nMessage.bannerText }}
        </div>
        <router-link to="/contact">
          <button class="btn w-36 h-8  text-white focus:outline-none ">
            {{ i18nMessage.contactNow }}
          </button>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script setup>
// import { VideoPlayer } from "vue-video-player";
import { onMounted, ref, computed } from "vue";
import { getCurrentInstance, nextTick } from "vue";
import pubUse from '@/util/pub-use.js'

//i18n
import { useI18n } from 'vue-i18n'
const { t, } = useI18n()
const i18nMessage = computed(() => ({
  bannerText: t('home.bannerText'),
  contactNow: t('home.contactNow'),

  animateSrc: t('home.animateSrc'),
  ecommerceSrc: t('home.ecommerceSrc'),
  photographSrc: t('home.photographSrc'),

}))

// note 打包时动态资源链接 https://my.oschina.net/iqidan91/blog/5494823
const getAssetsFile = pubUse.getAssetsFile
const getCOSFile = pubUse.getCOSFile
onMounted(() => {


})
// scroll action
const { proxy } = getCurrentInstance();
const rename = ref(null);//声明一个和ref一样的名字,直接获取它

nextTick(() => {

  //或者直接这样获取
  //要获取子组件的dom节点,通过绑定ref在子组件标签上,子组件获取自己的dom节点,通过defineExpose暴露给父组件
});

// const playerOptions = reactive({
//   sources: [
//     {
//       type: "video/mp4", // 播放的类型，在这里项目中需要的是rtmp，也可以修改为：‘video/mp4’
//       src: getAssetsFile('videos/main_banner.mp4') // 这里就是你播放内容的路径了，项目中的是湖南卫视的路径。{（https://v-cdn.zjol.com.cn/280443.mp4）这里是mp4格式的路径} *src为必填内容*
//     }
//   ],
//   loop: true,
//   autoplay: true,
//   controls: false
// });
// //todo when f5, video will not autoplay
// const videoPlayer = ref();
onMounted(() => {
});


</script>

<style scoped>
.banner-image {
  object-fit: cover;
  width: 30vw;

}

.btn {
  background-color: #F6830C;
  border-radius: 35px;
  min-height: 25%;
}
</style>
