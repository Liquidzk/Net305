<template>
  <div class="home">
    <el-main class="main-content">
      <h1>欢迎来到 Net305 工作室招新官网</h1>
      <p>招新信息与学习资源敬请期待</p>
    </el-main>
  </div>
</template>

<script>

export default {
  name: 'HomePage',
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  top: 0;
  height: 120vh;
  background-image: url('@/assets/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* 内容区域下边的 margin-top 用于避免被固定的顶部栏遮挡 */
.main-content {
  display: flex;
  flex-direction: column;
  justify-content: center; /* 垂直居中 */
  align-items: center; /* 水平居中 */
  height: 100%; /* 使内容区域占满剩余空间 */
  text-align: center; /* 确保文字居中 */
  background-color: rgba(255, 255, 255, 0.7); /* 半透明背景，能看到背景图片 */
}

h1 {
  font-size: 3em; /* 增大字体 */
  margin-bottom: 20px;
  color: #E74C3C;
}
p {
  font-size: 1.8em; /* 增大字体 */
  color: #333;
}

</style>
