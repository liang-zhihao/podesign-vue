<template>
    <div>
        <img src="/src/assets/images/contact/联系页主banner.png" class="w-screen" alt="" srcset="">
        <div class=" flex flex-col items-center  relative -top-80 -left-10 z-50 w-screen">
            <div class="flex flex-col w-3/4 text-contact ">
                <div>{{ t('contact.contactUs') }}</div>
            </div>
            <div class="contact-box bg-black w-3/4 ">
                <form id="form" action="https://api.web3forms.com/submit"  method="POST">
                    <input type="hidden" name="access_key" value="7707f7f0-b366-4222-b896-357c908246f8">
                    <!-- overflow-hidden shadow sm:rounded-md -->
                    <!-- px-28  py-5 sm:p-6 -->

                    <div class="grid  grid-cols-12 gap-4 px-28  py-2 sm:p-6 ">
                        <!-- input name -->
                        <div class="  col-span-6 mt-8 ">
                            <label for="" class="block text-2xl  text-gray-700  ">
                                {{ t('contact.fullName') + ":" }}</label>
                            <input id="name" type="text"  name="name"  autocomplete="given-name"
                                class=" mt-1 w-full text-input  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                        </div>
                        <!-- input phone -->
                        <div class="col-span-6 mt-8">
                            <label for="telephone" class="block text-2xl  text-gray-700">{{ t('contact.phone') + ":"
                            }}</label>
                            <input id="telephone" type="text"  name="telephone"  autocomplete="family-name"
                                class="text-input mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                        </div>
                        <!-- input requirements -->
                        <div class="col-span-12 text-white mt-3">
                            <label class="text-2xl">{{ t('contact.requirements.label') + ":" }}</label>
                            <div class=" flex items-center radio-group p-4 mt-3">

                                <input type="radio" name="radio-10" class="d-radio  mr-2 bg-white checked:bg-blue-500"
                                    checked />
                                <label for="telephone" class="block text-2xl  text-gray-700 mr-4">{{
                                        t('contact.requirements.ecommerce')
                                }}</label>


                                <input type="radio" name="radio-10" class="d-radio mr-2 bg-white checked:bg-blue-500"
                                    checked />
                                <label for="telephone" class="block text-2xl  text-gray-70 mr-4">{{
                                        t('contact.requirements.keyVision')
                                }}</label>


                                <input type="radio" name="radio-10" class="d-radio mr-2 bg-white checked:bg-blue-500"
                                    checked />
                                <label for="telephone" class="block text-2xl  text-gray-700 mr-4">{{
                                        t('contact.requirements.productPhotography')
                                }}</label>


                                <input type="radio" name="radio-10"
                                    class=" text-2x d-radio mr-2 bg-white checked:bg-blue-500" checked />
                                <label for="telephone" class="block text-2xl  text-gray-700 mr-4">{{
                                        t('contact.requirements.styleDesign')
                                }}</label>

                                <input type="radio" name="radio-10" class="d-radio mr-2 bg-white checked:bg-blue-500"
                                    checked />
                                <label for="telephone" class="block text-2xl  text-gray-700">{{
                                        t('contact.requirements.artDirector')
                                }}</label>
                            </div>

                            <!-- input requirements detail -->
                            <div class="col-span-12 mt-8 ">
                                <label for="telephone" class="block text-2xl  text-gray-700">{{
                                        t('contact.textAreaLabel') + ":"
                                }}</label>
                                <textarea ref="textarea" class="d-textarea mt-1 w-full text-white " placeholder=""
                                    @input="resize"></textarea>
                            </div>
                        </div>
                        <div class=" col-end-13 col-span-2 mt-8 ">
                            <button class="btn btn-primary btn-send text-xl h-8  w-3/4 rounded-2xl text-white   ">{{
                                    t('contact.send')
                            }}</button>
                        </div>
                    </div>

                </form>
            </div>

        </div>

    </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, } from 'vue';

//i18n
import { useI18n } from 'vue-i18n'
import axios from 'axios'
const { t, } = useI18n()

// textarea resize
let textarea;
const resize = () => {
    let element = textarea;
    element.style.height = "18px";
    element.style.height = element.scrollHeight + "px";
}
onMounted(() => {
    const currentInstance = getCurrentInstance()
    textarea = currentInstance.ctx.$refs.textarea;
    console.log(textarea.style);
})
</script>
<style scoped >
.contact-box {
    background: rgba(0, 0, 0, 0.85);
    border: 1px solid rgba(0, 0, 0, 1);
    opacity: 1;
    border-radius: 21px;
    box-shadow: 4px 4px 6px 0px rgba(0, 0, 0, 0.25);
    @apply font-light;
}

.text-contact {
    font-size: 60px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.67);
}

.text-input {
    border-radius: 15px;
    background: rgba(74, 74, 74, 1);
    border: 1px solid rgba(0, 0, 0, 1);
    height: 66px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
    color: white
}

.radio-group {
    background: rgba(74, 74, 74, 1);
    border-radius: 15px;
}

label {
    color: white
}

span {
    color: white
}

textarea {
    background: rgba(74, 74, 74, 1);
    font-size: 1.3rem;
    border-radius: 15px;
    overflow: hidden;
    resize: none;

}

textarea {
    /* width: 300px;
    min-height: 72px;
    padding: 2px; */
    /* resize: none;
    overflow: hidden;
    background-color: transparent;
    border: 2px solid #000;
    border-radius: 4px;
    font-family: "Inconsolata", monospace;
    font-size: 1rem;
    color: #000; */
}

textarea:focus {
    outline: none;
}

.btn-send {
    background: rgba(246, 131, 12, 1);
}

input {
    font-size: 1.3rem;
}
</style>