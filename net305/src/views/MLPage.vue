<template>
    <div class="gitbook-container">
      <iframe
        src="http://192.168.196.166:8080/_book/ML-Base.html"
        frameborder="0"
      ></iframe>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GitBookPage'
  };
  </script>
  
  <style scoped>
  .gitbook-container {
    position: absolute; /* 让容器相对于视口定位 */
    margin-top: 60px; /* 根据您的顶栏高度调整 */
    top: 0;
    left: 0;
    width: 100%; /* 宽度占满整个页面 */
    height: 94vh; /* 高度占满整个页面 */
    overflow: hidden; /* 禁止外部容器滚动 */
  }
  
  iframe {
    width: 100%; /* iframe 宽度占满容器 */
    height: 100%; /* iframe 高度占满容器 */
    border: none; /* 去除 iframe 边框 */
    display: block; /* 确保 iframe 居中 */
  }
  </style>
  