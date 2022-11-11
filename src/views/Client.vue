<template>
    <div class="">
        <img v-lazy="'/src/assets/images/client/客户页主banner.png'" class="w-screen" alt="" srcset="">
        <div class="flex flex-col items-center">
            <div class=" text-3xl my-8 sm:font-bold sm:text-6xl sm:my-16">{{ t('partner.title') }}</div>
            <div class=" mb-16 sm:mb-32 sm:text-5xl font-thin">{{ t('partner.content') }}</div>
        </div>

        <img v-lazy="'/src/assets/images/client/clients.png'" class="sm:mb-32" alt="" srcset="">

    </div>
</template>

<script setup>
// import { useStore } from 'vuex';
// import { useRoute, useRouter } from 'vue-router';
//i18n
import { useI18n } from 'vue-i18n'
const { t, } = useI18n()

 
</script>
<style scoped >

</style>