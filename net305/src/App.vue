<template>
  <div>
    <!-- 顶栏组件全局引入 -->
    <TopHeader />
    <router-view></router-view> <!-- 路由视图将展示不同页面内容 -->
  </div>
</template>

<script>
import TopHeader from '@/components/TopHeader.vue'; // 引入顶栏组件

export default {
  name: 'App',
  components: {
    TopHeader
  }
}
</script>
