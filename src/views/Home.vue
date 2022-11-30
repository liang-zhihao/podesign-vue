<template>
  <div class="">
    <video class="w-screen " :src="getCOSFile('videos/main_banner.mp4')" autoplay loop muted></video>
    <div class="flex flex-col justify-center items-center mt-6  sm:flex-row ">
      <router-link to="/animation">
        <div class="box">
          <img v-lazy="getAssetsFile('images/home/动画.png')" class="banner-image " alt="">
          <div class="box-content">
            <h3 class="title">{{ t('home.animate') }}</h3>
            <span class="post">Web developer</span>
          </div>
        </div>
      </router-link>
      <router-link to="/product-case">
        <div class="box my-6 sm:mx-6 sm:my-0">
          <img v-lazy="getAssetsFile('images/home/电商.jpg')" class="banner-image " alt="">
          <div class="box-content">
            <h3 class="title">{{ t('home.ecommerce') }}</h3>
            <span class="post">Web developer</span>
          </div>
        </div>
      </router-link>
      <router-link to="/">
        <div class="box">
          <img v-lazy="getAssetsFile('images/home/摄影.png')" class="banner-image " alt="">
          <div class="box-content">
            <h3 class="title">{{ t('home.photograph') }}</h3>
            <span class="post">Web developer</span>
          </div>
        </div>
      </router-link>

    </div>
    <div class="flex justify-center  my-16">
      <div class=" flex flex-col  items-center rounded-2xl border-2 p-10 w-4/5    sm:flex-row ">
        <img :src="getAssetsFile('images/contact-logo.png')" class=" object-contain w-24" alt="">
        <div class="my-8 sm:mx-8 sm:my-0 banner-text ">{{ i18nMessage.bannerText }}
        </div>
        <router-link to="/contact">
          <button class="btn w-36 h-8 text-xl   text-white focus:outline-none ">
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
  height: 300px;
  border-radius: 15px;
}

.banner-image:hover {
  filter: brightness(30%);
}

.btn {
  background-color: #F6830C;
  border-radius: 35px;
  min-height: 25%;
}
.banner-text{
  color: #757575;
}

/* box */
.box {
  font-family: 'Merriweather Sans', sans-serif;
  overflow: hidden;
  position: relative;
  z-index: 1;
  transition: all .5s;
  border-radius: 15px;

}

.box:hover {
  box-shadow: 3px 3px 5px #999;
}

.box:before,
.box:after {
  content: "";
  background: radial-gradient(circle at 23% 70%, rgba(255, 255, 255, 0.8), #fff 30%);
  width: 150%;
  height: 150%;
  opacity: 0;
  transform: rotate(45deg);
  position: absolute;
  top: -10.5%;
  right: -150%;
  z-index: 1;
  transition: all 0.35s ease;

}


.box:hover:before {
  opacity: 1;
  right: -85%;

}

.box:hover:after {
  opacity: 1;
  top: -42%;
}

.box img {
  object-fit: cover;
  width: 30vw;
  height: 300px;
  border-radius: 15px;
  transition: all 0.5s ease;

}

.box:hover img {
  transform: scale(1.2);

}

.box .box-content {
  text-align: right;
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  right: -100%;
  z-index: 2;
  transition: all .5s;
}

.box:hover .box-content {
  right: 5%;
}

.box .title {
  color: #000000;
  @apply text-3xl;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0 0 3px 0;
}

.box .post {
  font-size: 16px;
  text-transform: capitalize;
  margin: 0 0 10px;
  display: block;
}

@media only screen and (max-width:990px) {
  .box {
    margin: 0 0 30px;
  }
}

@media only screen and (max-width:479px) {
  .box .title {
    font-size: 20px;
  }
}
</style>
