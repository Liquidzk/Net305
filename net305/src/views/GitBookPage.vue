<template>
    <div class="gitbook-container">
      <h1>学习资料</h1>
      <iframe
        src="https://net305-recruit.gitbook.io/net305-recruit/"
        frameborder="0"
        width="100%"
        height="800px"
      ></iframe>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GitBookPage'
  };
  </script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  height: 130vh;
  background-image: url('@/assets/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}


h1 {
  font-size: 3em; /* 增大字体 */
  margin-bottom: 20px;
  color: #E74C3C;
}

</style>
  