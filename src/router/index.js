import { createRouter, createWebHistory } from "vue-router";
//NOTE it is necessary to add .vue when try to import a component
import Home from "../views/Home.vue";
import Client from "../views/Client.vue"
import Contact from "../views/Contact.vue"
import ProductCase from '@/views/e-commerce/ProductCase.vue'
import ProductScene from '@/views/e-commerce/ProductScene.vue'
import ProductPlan from '@/views/e-commerce/ProductPlan.vue'
import ProductTheme from '@/views/e-commerce/ProductTheme.vue'
import Animation from '@/views/Animation.vue'
import NotFound from '@/views/NotFound.vue'
import About from '@/views/About.vue'
const prefix = 'Podesign - '
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      meta: {
        title: prefix + "主页"
      },
      component: Home
    },
    {
      path: "/client",
      name: "client",
      meta: {
        title: prefix + "客户"
      },
      component: Client
    },
    {
      path: "/contact",
      name: "contact",
      meta: {
        title: prefix + "联系我们"
      },
      component: Contact
    },
    // 电商物料
    {
      path: "/product-case",
      name: "product-case",
      meta: {
        title: prefix + "产品案例"
      },
      component: ProductCase
    },
    {
      path: "/product-scene",
      name: "product-scene",
      meta: {
        title: prefix + "产品场景"
      },
      component: ProductScene
    },
    {
      path: "/product-plan",
      name: "product-plan",
      meta: {
        title: prefix + "产品平面"
      },
      component: ProductPlan
    },
    {
      path: "/product-theme",
      name: "product-theme",
      meta: {
        title: prefix + "产品主题"
      },
      component: ProductTheme
    },
    // 动画
    {
      path: "/animation",
      name: "animation",
      meta: {
        title: prefix + "产品动画"
      },
      component: Animation
    },
    {
      path: "/about",
      name: "about",
      meta: {
        title: prefix + "关于我们"
      },
      component: About
    },
    {
      path: '/404',
      name: '404',
      component: NotFound
    },
    {
      path: '/:pathMatch(.*)',
      redirect: '/404'
    }
  ]
});
router.beforeEach((to, from, next) => {
  to.meta.title ? document.title = to.meta.title : document.title = 'Podesign'
  next()
})
export default router;
