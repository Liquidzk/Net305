import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue'; // 主页
import GitBookPage from '@/views/GitBookPage.vue'; // 学习资料页面（GitBook）

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/learning-materials',
    name: 'LearningMaterials',
    component: GitBookPage // GitBook 页面
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
