<template>
    <div class="w-full flex justify-center secondary-nav">

        <ul class="d-menu d-menu-vertical lg:d-menu-horizontal focus:bg-white   text-white  ">
            <li>
                <router-link class="focus:bg-zinc-800" :class="{ 'border-b-8': isActive('product-case') }"
                    to="/product-case"> {{ i18nMessage.product }}
                </router-link>
            </li>
            <li>
                <router-link class="focus:bg-zinc-800" :class="{ 'border-b-8': isActive('product-scene') }"
                    to="/product-scene"> {{ i18nMessage.scene }}
                </router-link>
            </li>
            <li>
                <router-link class="focus:bg-zinc-800" :class="{ 'border-b-8': isActive('product-plan') }"
                    to="/product-plan"> {{ i18nMessage.plan }}
                </router-link>
            </li>
            <li>
                <router-link class="focus:bg-zinc-800" :class="{ 'border-b-8': isActive('product-theme') }"
                    to="/product-theme"> {{ i18nMessage.theme }}
                </router-link>
            </li>
        </ul>
    </div>
</template>
  
<script setup>


import { onMounted, } from 'vue';

import { useRouter } from 'vue-router';
import { computed } from "vue";
//i18n
import { useI18n } from 'vue-i18n'
const { t, } = useI18n()
const i18nMessage = computed(() => ({
    product: t('secondaryNav.product'),
    scene: t('secondaryNav.scene'),
    plan: t('secondaryNav.plan'),
    theme: t('secondaryNav.theme')
}))
const router = useRouter()
//通过实例化useRouter的router对象中，含有多个属性，其中就包含了当前路由地址，
const path = router.currentRoute.value.fullPath;
onMounted(() => {
})
const isActive = (pathIn) => {
    return path.indexOf(pathIn) != -1;
}
</script>
  
<style scoped>
.secondary-nav {
    background: rgba(33, 35, 38, 1);

}
</style>