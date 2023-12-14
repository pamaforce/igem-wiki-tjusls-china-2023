<template>
  <div class="main">
    <img
      src="https://static.igem.wiki/teams/4627/wiki/other-background.png"
      class="other-background"
    />
    <div class="page-title">Hardware</div>
    <content-decorate style="margin-top: -20vh" :navigation="navigation">
      <TextWithImage
        mainTitle="Hardware"
        aid="hardware"
        :textContent="textContent1"
      ></TextWithImage>
      <TextWithImage mainTitle="3D Model" aid="Model"></TextWithImage>
      <div class="model-container">
        <div class="loader_box" ref="myDiv">
          <vue3dLoader
            :height="600"
            :width="boxWidth"
            :showFps="true"
            :filePath="[
              'https://static.igem.wiki/teams/4627/wiki/model/outer.stl',
            ]"
            :mtlPath="[null]"
            backgroundColor="#e6edf3"
          ></vue3dLoader>
          <vue3dLoader
            :height="600"
            :width="boxWidth"
            :showFps="true"
            :filePath="[
              'https://static.igem.wiki/teams/4627/wiki/model/top.stl',
            ]"
            :mtlPath="[null]"
            backgroundColor="#e6edf3"
          ></vue3dLoader>
          <vue3dLoader
            :height="600"
            :width="boxWidth"
            :showFps="true"
            :filePath="[
              'https://static.igem.wiki/teams/4627/wiki/model/shelves.stl',
            ]"
            :mtlPath="[null]"
            backgroundColor="#e6edf3"
          ></vue3dLoader>
        </div>
      </div>
    </content-decorate>
  </div>
</template>
  
  <script setup>
import ContentDecorate from "@/components/content-decorate.vue";
import TextWithImage from "@/components/text-with-image.vue";
import { vue3dLoader } from "vue-3d-loader";
import { ref, onMounted } from "vue";
const myDiv = ref(null);
const boxWidth = ref(0);

onMounted(() => {
  // 获取div的宽度
  boxWidth.value = myDiv.value.offsetWidth;
});

const textContent1 = [
  "In the communication with the experimental group, we learned that when measuring enzyme activity, the experimental group need to carry out large amounts of experiments under multi-temperature conditions. In order to integrate multiple conditions such as temperature control, vibration, mass experiments and low cost, we try to use 3D printing technology to achieve this hardware.",
  "We designed a reaction device with a built-in space of 30*30*20 (cm) and four bases 4*1 (cm). Inside. There are 4 springs placed in the corner of a 17*17 (cm) rectangle with the height: 1cm. The upper layer is the shock plate of the ep tube, size 25*25*0.3 and set with circular grooves: 2*2*1 0.3cm.",
  "Our design concept is to achieve low-cost laboratory completion of large quantities of reaction. Thus we can simplify the process of required target proteins reaction at 45 ° C, 50 ° C, 55 ° C, 60 ° C 65 ° C gradient temperature. The specific diagram is as follows:",
];
const navigation = ["hardware", "Model"];
</script>
  
<style scoped>
.loader_box {
  width: 95%;
}
.main {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #cbe8fe;
}
.other-background {
  width: 100%;
  height: 100vh;
}
.main-content {
  position: relative;
  width: 80%;
  padding: 20px 40px;
  overflow: visible;
}
.content {
  width: 80%;
  display: flex;
  margin-bottom: 40px;
}
.side-bar {
  width: 20%;
}
.page-title {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  font-size: 60px;
  font-weight: 700;
  letter-spacing: 3px;
  display: flex;
  height: calc(80vh - 70px);
  align-items: center;
  justify-content: center;
}
.model-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.canvas-3d {
  width: 500px;
  height: 500px;
}
</style>