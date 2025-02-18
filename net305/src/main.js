import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount('#app');

if (process.env.NODE_ENV === 'development') {
    window.addEventListener('error', (e) => {
      // 检查是否是 ResizeObserver 错误
      if (e.message === 'ResizeObserver loop completed with undelivered notifications.') {
        e.stopImmediatePropagation(); // 阻止错误事件的传播
        console.warn('ResizeObserver loop completed with undelivered notifications: This is typically harmless in development.');
      }
    });
  }
  