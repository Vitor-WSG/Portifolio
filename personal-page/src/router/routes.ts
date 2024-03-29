import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../../src/view/pages/IndexPage.vue'),
    children: [{ path: '', component: () => import('../view/pages/IndexPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('../../src/view/pages/ErrorNotFound.vue'),
  },
];

export default routes;
