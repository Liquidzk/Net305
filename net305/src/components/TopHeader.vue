<template>
    <el-header class="top-header">
      <div class="header-left">
        <!-- 添加 logo 图片 -->
        <img src="@/assets/logo.png" alt="Logo" class="logo" />
        <!-- 创建 el-menu -->
        <el-menu mode="horizontal" class="top-menu" :default-active="activeMenu" @select="handleSelect">
          <el-menu-item index="1" @click="goToHome">主页</el-menu-item>
          <el-sub-menu index="2">
            <template #title>招新题</template>
            <el-menu-item index="2-1">计算机网络</el-menu-item>
            <el-menu-item index="2-2">机器学习</el-menu-item>
            <el-sub-menu index="2-3">
              <template #title>Web开发</template>
              <el-menu-item index="2-3-1">前端</el-menu-item>
              <el-menu-item index="2-3-2">后端</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="3" @click="goToLearningMaterials">学习资料</el-menu-item>
          <el-menu-item index="4">关于我们</el-menu-item>
        </el-menu>
      </div>
  
      <div class="header-right">
        <el-menu
        :default-active="activeMenu"
        class="top-menu"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect">
            <el-sub-menu index="2">
                <template #title>友情链接</template>
                <el-menu-item index="2-1">微光工作室</el-menu-item>
            </el-sub-menu>
        </el-menu>
      </div>
    </el-header>
  </template>
  
  <script>
  export default {
    name: 'TopHeader',
    data() {
      return {
        activeMenu: '1' // 默认选中的菜单项
      };
    },
    methods: {
      goToHome() {
        this.$router.push('/'); // 跳转到主页
      },
      goToLearningMaterials() {
        this.$router.push('/learning-materials'); // 跳转到学习资料页面
      },
      goToLogin() {
        this.$router.push('/login');
      },
      goToRegister() {
        this.$router.push('/register');
      },
      handleSelect(item) {
        console.log(`${item} 被点击`);
      }
    }
  }
  </script>
  
  <style scoped>
  .top-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.7);
    padding: 0 20px;
    border-bottom: 1px solid #ddd;
    z-index: 1000;
  }
  
  .header-left {
    display: flex;
    align-items: center;
  }
  
  .logo {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 50px;
    margin-right: 10px;
  }
  
  .header-right {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
  
  .auth-button {
    font-size: 16px;
    color: #333;
    margin-left: 15px;
  }
  
  .top-menu {
    background-color: transparent;
    border: none;
  }
  </style>
  