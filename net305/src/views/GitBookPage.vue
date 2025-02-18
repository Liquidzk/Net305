<template>
  <div class="gitbook-container">
    <iframe
      src="http://192.168.196.166:4000/"
      frameborder="0"
      width="100%"
      height="1000px"
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
  margin-top: 60px; /* 根据您的顶栏高度调整 */
}

iframe {
  width: 100%;
  height: 1000px;
}
</style>
