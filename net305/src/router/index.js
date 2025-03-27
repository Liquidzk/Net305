import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue'; // 主页
import GitBookPage from '@/views/GitBookPage.vue'; // 学习资料页面（GitBook）
import NetworkPage from '@/views/NetworkPage.vue';
import MLPage from '@/views/MLPage.vue';
import FrontendPage from '@/views/FrontendPage.vue';
import BackendPage from '@/views/BackendPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/questions',
    name: 'Questions',
    component: GitBookPage // GitBook 页面
  },
  {
    path: '/questions/network',
    name: 'Network',
    component: NetworkPage // GitBook 页面
  },
  {
    path: '/questions/ML',
    name: 'ML',
    component: MLPage // GitBook 页面
  },
  {
    path: '/questions/Frontend',
    name: 'Frontend',
    component: FrontendPage // GitBook 页面
  },
  {
    path: '/questions/Backend',
    name: 'Backend',
    component: BackendPage // GitBook 页面
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
