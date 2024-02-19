// router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { defineComponent } from 'vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/contact',
    component: defineComponent(() => import('../components/Contact.vue')),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
