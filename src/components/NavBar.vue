<template>
  <transition name="custom-classes-transition" enter-active-class="animate__animated animate__slideInDown"
    leave-active-class="animate__animated animate__slideOutUp">
    <nav v-if="displayNav" id="nav" class="flex justify-center min-w-full p-6 bg-black opacity-80 fixed top-0 z-50">
      <!--  logo    -->
      <div class="text-white   ">
        <router-link to="/">
          <img src="/src/assets/images/nav-logo.png" class="w-24" alt="">
        </router-link>

      </div>
      <!-- nav -->
      <div class="flex text-2xl  text-white font-bold  justify-center items-center w-1/2 ">
        <router-link to="/" class="block  lg:inline-block lg:mt-0  hover:text-white mx-6">
          {{ i18nMessage.homepage }}
        </router-link>
        <div class="d-dropdown  d-dropdown-hover mx-6">
          <label tabindex="0" class=""> {{ i18nMessage.service }}</label>
          <div tabindex="0"
            class="d-dropdown-content d-menu text-xl font-light  p-4 w-40 opacity-80 bg-black relative  -left-5">
            <router-link to="/animation" class="block w-full lg:inline-block   text-white hover:text-white">
              {{ t('nav.service.animation') }}
            </router-link>
            <router-link to="/product-case" class="block w-full my-2 lg:inline-block   text-white hover:text-white  ">
              {{ t('nav.service.ecommerce') }}
            </router-link>
            <router-link to="" class="block  lg:inline-block w-full   text-white hover:text-white">
              {{ t('nav.service.productPhotography') }}
            </router-link>
          </div>

        </div>

        <router-link to="/client" class="block  lg:inline-block lg:mt-0 text-white hover:text-white mx-6">
          {{ i18nMessage.client }}

        </router-link>
        <router-link to="/about" class="block lg:inline-block lg:mt-0 text-white hover:text-white mx-6">
          {{ i18nMessage.us }}

        </router-link>
        <router-link to="/contact" class="block  lg:inline-block lg:mt-0 text-white hover:text-white mx-6">
          {{ i18nMessage.contact }}

        </router-link>
      </div>
      <div class="d-dropdown ">
        <svg tabindex="0" t="1667483307272" class="icon w-8 " viewBox="0 0 1024 1024" version="1.1"
          xmlns="http://www.w3.org/2000/svg" p-id="1558">
          <path
            d="M547.797333 638.208l-104.405333-103.168 1.237333-1.28a720.170667 720.170667 0 0 0 152.490667-268.373333h120.448V183.082667h-287.744V100.906667H347.605333v82.218666H59.818667V265.386667h459.178666a648.234667 648.234667 0 0 1-130.304 219.946666 643.242667 643.242667 0 0 1-94.976-137.728H211.541333a722.048 722.048 0 0 0 122.453334 187.434667l-209.194667 206.378667 58.368 58.368 205.525333-205.525334 127.872 127.829334 31.232-83.84m231.424-208.426667h-82.218666l-184.96 493.312h82.218666l46.037334-123.306667h195.242666l46.464 123.306667h82.218667l-185.002667-493.312m-107.690666 287.744l66.56-178.005333 66.602666 178.005333z"
            fill="#ffffff" p-id="1559"></path>
        </svg>
        <ul tabindex="0" class="d-dropdown-content d-menu text-xl  p-1  opacity-80 bg-black relative -left-8 ">
          <li>
            <button class=" lg:inline-block lg:mt-0 text-teal-200 hover:text-white "
              @click="changeLangToEn">English</button>
          </li>
          <li>
            <button class=" lg:inline-block lg:mt-0 text-teal-200 hover:text-white " @click="changeLangToZh">中文</button>
          </li>
        </ul>
      </div>
      <!-- <div class="d-navbar bg-base-100">
        <div class="d-navbar-start">
          <div class="d-dropdown">
            <label tabindex="0" class="d-btn d-btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabindex="0"
              class="d-menu d-menu-compact d-dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li tabindex="0">
                <a class="justify-between">
                  Parent
                  <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24">
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul class="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a class="d-btn d-btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div class="d-navbar-center hidden lg:flex">
          <ul class="d-menu d-menu-horizontal p-0">
            <li><a>Item 1</a></li>
            <li tabindex="0">
              <a>
                Parent
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul class="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <div class="d-navbar-end">
          <a class="d-btn">Get started</a>
        </div>
      </div>  -->
    </nav>
  </transition>
</template>

<script setup>
import { computed } from "vue";
import { onMounted, ref } from "vue";
// i18n
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const changeLangToZh = () => {
  locale.value = 'zh'
}
const changeLangToEn = () => {
  locale.value = 'en'
}

const i18nMessage = computed(() => ({
  homepage: t('nav.homepage'),
  service: t('nav.service.title'),
  client: t('nav.client'),
  us: t('nav.us'),
  contact: t('nav.contact'),
  product: t('secondaryNav.product'),
  scene: t('secondaryNav.scene'),
  plan: t('secondaryNav.plan'),
  theme: t('secondaryNav.theme')
}))

// nav action
const displayNav = ref(true);
onMounted(() => {
  window.onmousewheel = document.onmousewheel = (e) => {
    if (e.wheelDelta) {
      /*wheelDelta 判断鼠标滚动滚动条的反向（正数向上，负数向下）*/
      /*还有一个detail 也是判断鼠标滚动滚动条的反向的，不过正数表向下 负数表向上*/
      if (e.wheelDelta > 0) {/*判断浏览器IE，谷歌滑轮事件*/
        if (document.documentElement.scrollTop > 0/*当滚动条大于0*/) {
          displayNav.value = true;
        }
      } else {
        displayNav.value = false;
      }
    }
  };
});
</script>

<style scoped>

</style>