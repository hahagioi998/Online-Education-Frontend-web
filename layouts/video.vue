<template>
  <div class="online-player">
    <h1 id="logo">
      <nuxt-link to="/" title="在线教育">
        <img src="@/assets/img/logo.png" width="100%" alt="在线教育">
      </nuxt-link>
    </h1>
    <div class="body">
      <div class="content">
        <nuxt/>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>

<style>
html, body {
  height: 100%;
}
</style>

<style scoped>
.head {
  height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.head .logo {
  height: 50px;
  margin-left: 10px;
}

.body {
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
</style>
