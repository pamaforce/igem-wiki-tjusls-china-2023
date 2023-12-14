<template>
  <div class="loading">
    <video
      src="https://static.igem.wiki/teams/4627/wiki/loading.jpg"
      autoplay
      muted
      loop
      playsinline
      class="loading-webm"
    ></video>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.loading {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fcfdfe;
}
.loading-webm {
  width: 400px;
}
</style>