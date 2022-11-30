<template>
    <div class="">
        <img v-lazy="getAssetsFile('images/client/客户页主banner.png')" class="w-screen" alt="" srcset="">
        <div class="flex flex-col items-center">
            <div class="   my-8 sm:font-bold sm:text-5xl sm:mt-16  ">{{ t('partner.title') }}</div>
            <div class="  mb-16 sm:mb-32  my-body-text ">{{ t('partner.content') }}</div>
            <!-- sm:text-5xl  -->
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