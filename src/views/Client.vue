<template>
    <div class="">
        <img v-lazy="getAssetsFile('images/client/客户页主banner.png')" class="w-screen" alt="" srcset="">
        <div class="flex flex-col items-center">
            <div class=" text-3xl my-8 sm:font-bold sm:text-6xl sm:my-16">{{ t('partner.title') }}</div>
            <div class=" mb-16 sm:mb-32 sm:text-5xl font-thin">{{ t('partner.content') }}</div>
        </div>

        <img v-lazy="getAssetsFile('images/client/clients.png')" class="sm:mb-32" alt="" srcset="">

    </div>
</template>

<script setup>
// import { useStore } from 'vuex';
// import { useRoute, useRouter } from 'vue-router';
//i18n
import { useI18n } from 'vue-i18n'
import pubUse from '@/util/pub-use'
const { t, } = useI18n()
const getAssetsFile = pubUse.getAssetsFile


</script>
<style scoped >

</style>