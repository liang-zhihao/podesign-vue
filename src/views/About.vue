<template>
    <div class="">
        <img v-lazy="getAssetsFile('images/about/company-introduction.png')" class="w-screen" alt="" srcset="">
        <div class="flex flex-col justify-center items-center w-screen my-16">
            <p class="indent-8 w-3/4 font-light text-3xl leading-normal ">
                {{ t('aboutUs.company.p1') }}
            </p>
            <p class="indent-8 w-3/4 font-light text-3xl leading-normal">
                {{ t('aboutUs.company.p2') }}
            </p>
        </div>


        <img v-lazy="getAssetsFile('images/about/design-philosphy.png')" class="w-screen" alt="" srcset="">
        <div class="flex flex-col justify-center items-center w-screen my-16">
            <p class="indent-8 w-3/4 font-light text-3xl leading-normal">
                {{ t('aboutUs.philosophy') }}
            </p>
        </div>

    </div>
</template>

<script setup>
//i18n
import { useI18n } from 'vue-i18n'
import pubUse from '@/util/pub-use'
const { t, } = useI18n()
const getAssetsFile = pubUse.getAssetsFile


</script>
<style scoped >

</style>