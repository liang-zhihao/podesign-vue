import { createApp } from "vue";
import { createPinia } from "pinia";
import "../index.css";
import App from "./App.vue";
import router from "./router";
import VueVideoPlayer from '@videojs-player/vue'
import 'video.js/dist/video-js.css'
import "./assets/main.css";
import "animate.css"
import { VueMasonryPlugin } from 'vue-masonry';
import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js'

import i18n from './i18n'
const app = createApp(App);
app.use(VueMasonryPlugin)
app.use(createPinia());
app.use(router);
app.use(VueVideoPlayer)
app.use(i18n)
app.use(VueFullPage)
app.mount("#app");
