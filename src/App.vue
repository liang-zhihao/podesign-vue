<template>
  <div id="app" class="min-h-screen overflow-hidden">
    <NavBar />
    <router-view />
    <footer>

      <div class="flex flex-col justify-center text-center bg text-white text-xl pb-10 pt-10">
        <div class="flex flex-col justify-center items-center w-75">
          <img :src="pubUse.getAssetsFile('images/二维码.png')" class=" w-28" alt="" srcset="">
          <div class="mt-3  mb-2" >
            联系电话：13265541405
          </div>
          <div> 联系邮箱: pod-design@aliyun.com</div>
                <div class="ant-divider ant-divider-horizontal" role="separator"></div>
          <div> Copyright © 点密度（深圳）科技有限公司 All Rights Reserverd. |
            <a href="https://beian.miit.gov.cn" target="_blank">粤ICP备2022140186号</a>
            | 粤公网安备xxx
          </div>
        </div>

      </div>

    </footer>
  </div>
</template>


<script setup>
import NavBar from './components/NavBar.vue';
import pubUse from '@/util/pub-use'


</script>
<style scoped  >
.bg {
  background-color: #262626;
}

.ant-divider {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #CCCCCC;
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: "tnum";
  border-top: 1px solid #CCCCCC;
}

.ant-divider-horizontal {
  display: flex;

  clear: both;
  width: 75%;
  min-width: 75%;
  margin: 24px 0;
}
</style>