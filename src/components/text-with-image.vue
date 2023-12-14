<template>
  <div class="text-with-image" ref="THIS">
    <div class="anchor-point" :id="props.aid || props.mainTitle"></div>
    <p class="main-title">{{ props.mainTitle }}</p>
    <p class="sub-title">{{ props.subTitle }}</p>
    <p
      v-for="item in props.textContent"
      :key="item"
      class="simple-text"
      v-html="item"
    ></p>
    <img
      v-for="item in props.imageUrls"
      :key="item"
      :src="item"
      class="image"
      @load="handleImageLoad"
    />
  </div>
</template>

<script setup>
import bus from "@/libs/bus.js";
const props = defineProps([
  "aid",
  "mainTitle",
  "subTitle",
  "textContent",
  "imageUrls",
]);
const handleImageLoad = () => {
  bus.emit("imageLoaded");
};
</script>

<style scoped>
.text-with-image {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
}
.anchor-point {
  position: absolute;
  top: -100px;
}
.main-title {
  color: rgb(101, 119, 254);
  font-size: 25px;
  font-weight: bold;
  margin: 3vh;
  margin-left: 0;
}
.sub-title {
  color: rgb(101, 119, 254);
}
.simple-text {
  font-size: 15px;
  margin: 2vh;
  margin-left: 0;
  text-align: justify;
  line-height: 26px;
  text-indent: 2em;
}
.image {
  align-self: center;
  max-width: 100%;
}
table {
  max-width: 100%;
}
</style>