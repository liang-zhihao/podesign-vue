<template>
  <div>

    <div class="">
      <!-- <div class="banner-player">
        <VideoPlayer fluid controls muted :options="playerOptions1" :playsinline="true" ref="videoPlayer" />
      </div>
      <div class="banner-player">
        <VideoPlayer fluid controls muted :options="playerOptions2" :playsinline="true" ref="videoPlayer" />
      </div> -->
      <video class="banner-player " :src="getCOSFile('videos/animation/banner视频.mp4')" autoplay loop muted></video>
      <!-- <div class="panel"
          style="background-image:url('https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80')">
          <h3>冬天的都市</h3>
        </div> -->


      <BannerText class="mt-10 mb-0" :title="i18nMessage.productAnimationTitle"
        :content="i18nMessage.productAnimationContent" />
      <!-- videos -->
      <div class="flex justify-center  w-full p-14">
        <div v-for="( playerOption, index) in productSrc" :key="playerOption" class="panel">
          <video class="player" :src="playerOption" autoplay loop muted></video>
        </div>
      </div>
      <BannerText class="mt-10 mb-0" :title="i18nMessage.ThreeDTitle" :content="i18nMessage.ThreeDContent" />
      <!-- videos -->

      <!-- videos -->
      <div class="flex justify-center  w-full p-14">
        <div v-for="( playerOption, index) in threeDPSrc" class="panel" :key="playerOption">
          <video class="player" :src="playerOption" autoplay loop muted></video>
        </div>
      </div>


    </div>
  </div>

</template>
  
<script setup>
import { onMounted, ref, computed } from "vue";
import { getCurrentInstance, } from "vue";
import BannerText from "../components/BannerText.vue";
import pubUse from '@/util/pub-use.js'


//i18n
import { useI18n } from 'vue-i18n'
const { t, } = useI18n()
const i18nMessage = computed(() => ({
  productAnimationTitle: t("animation.productAnimationTitle"),
  productAnimationContent: t("animation.productAnimationContent"),
  ThreeDTitle: t("animation.ThreeDTitle"),
  ThreeDContent: t("animation.ThreeDContent"),
}))
// scroll action


const { proxy } = getCurrentInstance();




// banner videos
// const playerOptions1 = reactive(buildPlayerOption("/videos/animation/主banner-1.mp4"));
// const playerOptions2 = reactive(buildPlayerOption("/videos/animation/主banner-2.mp4"));
const getCOSFile = pubUse.getCOSFile

// 产品动画视频
const productVideoPathPrefix = "videos/animation/产品动画/";
const productVideoNames = ["布料.mp4", "椅子.mp4", "笔.mp4", "长视频.mp4", "鞋子.mp4"]
const productSrc = productVideoNames.map((source) => getCOSFile(productVideoPathPrefix + source));

// 3D特效动画视频

const threeDVideoPathPrefix = "videos/animation/特效动画/";

const threeDVideoNames = ["小草生长.mp4", "小猪冲水.mp4", "小球掉落.mp4", "小马冲水.mp4", "小马降落.mp4"]
const threeDPSrc = threeDVideoNames.map((source) => getCOSFile(threeDVideoPathPrefix + source));

//todo when f5, video will not autoplay
const videoPlayer = ref();

onMounted(() => {
  // 百叶窗
  const panels = document.querySelectorAll('.panel');
  // https://gitee.com/wulaoda/html_css_js_demo/blob/master/01tuozhankapian/index.html
  panels.forEach(panel => {
    panel.addEventListener('click', () => {
      if (panel.classList.contains("active")) {
        removeActiveClasses()
      } else {
        removeActiveClasses()
        panel.classList.add('active')
      }
    })
  })

  const removeActiveClasses = () => {
    panels.forEach(panel => {
      panel.classList.remove('active')
    })
  }
});



</script>
  
<style scoped>
.cover-image {
  width: 339px;
  height: 576px;
  @apply object-cover;
}

.banner-player {
  width: 100vw;
  height: 587px;
  @apply object-cover;

}

.btn {
  background-color: #F6830C;
  border-radius: 35px;
  min-height: 25%;
}








/* 百叶窗css */
.player {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 25px;
}

.panel {
  /* 跟封面一样大小 */

  height: 50vh;
  /* 边框圆角 */
  border-radius: 25px;
  /* 鼠标放上变小手 */
  cursor: pointer;
  flex: 0.5;
  margin: 10px;
  /* 相对定位 */
  position: relative;
  -webkit-transition: all 700ms ease-in;
}



.panel.active {
  flex: 5;
}


@media (max-width:480px) {
  .container {
    width: 100vw;
  }

  .panel:nth-of-type(4),
  .panel:nth-of-type(5) {
    display: none;
  }
}
</style>
  