<template>
  <div class="home-view">
    <video
      src="https://static.igem.wiki/teams/4627/wiki/gif.jpg"
      autoplay
      muted
      loop
      playsinline
      class="home-top-image"
    />

    <!-- box-1 -->
    <div class="page_box box-1">
      <el-row class="padding100">
        <el-col :xs="24" :sm="24" :md="24" :lg="11" :xl="11" class="flex_box">
          <el-image
            src="https://static.igem.wiki/teams/4627/wiki/mei.png"
            class="img_mei"
          />
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="13" :xl="13">
          <img
            src="https://static.igem.wiki/teams/4627/wiki/what-is-pe.png"
            class="what-is-PE"
          />

          <p class="simple-text wide-text">
            Polyethylene plastic (PE) can be seen everywhere in our lives, and
            is widely used in food plastic bags, agricultural greenhouses,
            pipes, wires, etc. Polyethylene polymer molecules are connected by
            very long C–C chains organized in a crystalline, dense structure.
            Therefore, polyethylene is too stable to degrade under normal
            circumstances.
          </p>
          <p class="simple-text wide-text">
            The crucial first step of PE biodegradation is the oxidation of PE
            polymer. This causes the formation of carbonyl groups. Then, long
            hydrocarbon chains are scissored with the production of smaller
            molecules, which can then be metabolized by microorganisms.
          </p>
          <p class="simple-text wide-text">
            Polyethylene plastic (PE) can be seen everywhere in our lives, and
            is widely used in food plastic bags, agricultural greenhouses,
            pipes, wires, etc. Polyethylene polymer molecules are connected by
            very long C–C chains organized in a crystalline, dense structure.
            Therefore, polyethylene is too stable to degrade under normal
            circumstances.
          </p>
          <p class="simple-text wide-text">
            The crucial first step of PE biodegradation is the oxidation of PE
            polymer. This causes the formation of carbonyl groups. Then, long
            hydrocarbon chains are scissored with the production of smaller
            molecules, which can then be metabolized by microorganisms.
          </p>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="16" :offset="4" class="text-box-2 text_strong">
          <strong
            >Worldwide Plastic Waste
            <strong class="red">200,000,000t</strong> per year.</strong
          >
          <br />
          <strong>Rate of recycle<strong class="red"> &lt; 10%</strong></strong>
        </el-col>
      </el-row>

      <el-row>
        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="flex_box">
          <el-image
            src="https://static.igem.wiki/teams/4627/wiki/pollution.png"
            class="much-animals"
          />
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
          <div class="echarts-box">
            <v-chart class="chart" :option="option" />
          </div>
          <p class="simple-text short-text text-1">
            High production, low recycling rates and recalcitrance have made PE
            plastic pollution a global environmental problem.
          </p>
        </el-col>
      </el-row>
    </div>
    <!-- box-2 -->
    <div class="page_box box-2">
      <el-row>
        <el-col
          :xs="24"
          :sm="24"
          :md="24"
          :lg="12"
          :xl="12"
          class="flex_center"
          style="flex-direction: column"
        >
          <el-image
            src="https://static.igem.wiki/teams/4627/wiki/pe-pollution.png"
            class="pe-pollution"
          />
          <p class="simple-text text-7 short-text">
            Biodegradation of PE produce no harmful substances and has low
            energy consumption. And its secondary products are clean, safe, and
            more environmentally friendly.
          </p>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
          <div class="liucheng-box">
            <el-image
              src="https://static.igem.wiki/teams/4627/wiki/blueliucheng.png"
              class="liucheng"
            />
            <p class="desc-text text-3">Plastic recycling</p>
            <p class="desc-text text-4">Plastic classification</p>
            <p class="desc-text text-5">Physical degradation of PE</p>
            <p class="desc-text text-6">Chemical degradation of PE</p>
          </div>
        </el-col>
      </el-row>
      <el-row class="padding100">
        <el-image
          src="https://static.igem.wiki/teams/4627/wiki/thus.png"
          class="thus"
        />
      </el-row>
    </div>
    <!-- box-3 -->
    <div class="page_box box-3">
      <el-row>
        <el-col :span="8" class="flex_center">
          <el-image
            src="https://static.igem.wiki/teams/4627/wiki/img-4887.png"
            class="four-icons"
          />
        </el-col>
        <el-col :span="16" class="flex_column">
          <p class="simple-text wide-text">
            Although many microorganisms have been found, PEase is the only
            enzyme that can degrade PE. PEase has the ability to oxidize PE at
            room temperature, successfully solving the recognized bottleneck
            step in PE degradation(i.e., oxidation).
          </p>
          <p class="simple-text wide-text">
            When temperature rises, macromolecular chains inside PE are fully
            stretched, making it easier for O2 and PEase to entry and oxidize
            PE. However, at present, thermostability and catalytic efficiency of
            wild type PEase is low.
          </p>
          <el-image
            src="https://static.igem.wiki/teams/4627/wiki/structure.png"
            class="carbon-struct"
          />
        </el-col>
      </el-row>
    </div>
    <!-- box-4 -->
    <div class="page_box box-4">
      <p class="simple-text text-11">
        However, at present, thermostability and catalytic efficiency of wild
        type PEase is low.
      </p>
      <p class="simple-text text-12" style="width: 65%">
        Therefore, we hope to improve the thermostability of PEase by directed
        evolution to increase its possibility to work at higher temperstures.
        This project may lay the foundation for achieving joint action of
        various plastic degrading enzymes in the future.
      </p>
      <div class="video-box">
        <p class="simple-text">See our promtion video</p>
        <iframe
          title="end"
          width="560"
          height="315"
          src="https://video.igem.org/videos/embed/bb26bc7f-9f77-4262-9168-e3ac3c4dfc34?subtitle=en"
        ></iframe>
      </div>
      <div class="six-image-box">
        <div
          class="six-image"
          v-for="item in six_image"
          :key="item.url"
          @click="navigateToPage(item.path)"
        >
          <img :src="item.url" />
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import { useRouter } from "vue-router";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart from "vue-echarts";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);
const six_image = [
  {
    url: "https://static.igem.wiki/teams/4627/wiki/home-1.jpg",
    path: "/design",
    text: "design",
  },
  {
    url: "https://static.igem.wiki/teams/4627/wiki/home-2.jpg",
    path: "/description",
    text: "project",
  },
  {
    url: "https://static.igem.wiki/teams/4627/wiki/home-3.jpg",
    path: "/model",
    text: "model",
  },
  {
    url: "https://static.igem.wiki/teams/4627/wiki/home-4.jpg",
    path: "/parts",
    text: "part",
  },
  {
    url: "https://static.igem.wiki/teams/4627/wiki/home-5.jpg",
    path: "/gold",
    text: "judge",
  },
  {
    url: "https://static.igem.wiki/teams/4627/wiki/home-6.jpg",
    path: "/human-overview",
    text: "hp",
  },
];
const option = {
  title: {
    text: "discarded single-used plastic waste",
    left: "center",
    textStyle: {
      color: "#FFFFFF",
      fontSize: 30,
    },
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: "50%",
      data: [
        { value: 0.36, name: "Others" },
        { value: 0.64, name: "PE" },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
      label: {
        show: true,
        formatter: "{b}: {c} ({d}%)",
      },
    },
  ],
};

const router = useRouter(); // 获取路由实例

const navigateToPage = (path) => {
  router.push(path); // 使用push方法跳转到指定路径
};
</script>

<style  scoped>
.flex_box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.thus {
  width: 60%;
  display: block;
  margin: 0 auto;
}
.text_strong {
  font-weight: 800;
  font-size: calc(100vw * 45 / 1920) !important;
}
.text_strong .red {
  font-size: calc(100vw * 58 / 1920) !important;
  color: #fc0e0e;
}
.flex_center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex_column {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.img_mei {
  width: 70%;
  display: block;
  margin: 0 auto;
}

.video-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.six-image-box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 80vw;
  margin: 10vh;
}
.six-image {
  width: 20%;
  margin: 5%;
  transition: all 0.5s;
  cursor: pointer;
  position: relative;
}
.six-image img {
  width: 100%;
  height: auto;
  display: block;
}
.six-image:hover {
  transform: scale(1.1, 1.1);
  box-shadow: 0 0 1vh #00000050;
}
.six-image-box p {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(100vw * 68 / 1920);
  text-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.8);
  color: #ffffff;
}

.text-11,
.text-12 {
  margin: 5vh;
}
.pe-pollution {
  width: 70%;
  display: block;
  margin: 0 auto;
}
.what-is-PE {
  width: 80%;
  display: block;
  margin: 0 auto 50px;
}
.four-icons {
  display: block;
  margin: 0 auto;
  width: 55%;
}
.home-view {
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: #cccccc;
}
.home-top-image {
  width: 100%;
}
.page_box {
  box-sizing: border-box;
  width: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 100px 0;
}
.main-box {
  width: 100%;
  height: 200vh;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.box-1 {
  background-image: url("https://static.igem.wiki/teams/4627/wiki/background1.png");
}
.box-2 {
  background-image: url("https://static.igem.wiki/teams/4627/wiki/background2.png");
}
.box-3 {
  background-image: url("https://static.igem.wiki/teams/4627/wiki/middle.png");
}
.box-4 {
  background-image: url("https://static.igem.wiki/teams/4627/wiki/bottom.png");
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.wide-text {
  max-width: 45vw;
}
.short-text {
  max-width: 22.5vw;
}
.title-text {
  font-size: 40px;
}
.padding100 {
  box-sizing: border-box;
  padding: 100px 0;
  color: #ffffff;
}
.padding100 .simple-text {
  margin: 0 auto 15px;
}
.padding100 {
  box-sizing: border-box;
  padding: 100px 0;
  color: #ffffff;
}

.text-box-2 {
  font-size: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  word-spacing: 20px;
  width: 80%;
  margin: 100px auto;
  text-align: center;
  color: #ffffff;
}
.much-animals {
  width: 90%;
  display: block;
  margin: 0 auto;
}
.text-2 {
  position: absolute;
  top: 85vh;
  right: 12vw;
}
.icon-1 {
  position: absolute;
  left: 10vw;
  top: 0vh;
  height: 130vh;
}
.big-text {
  font-size: 50px;
  font-weight: bold;
  color: #ffffff;
  word-spacing: 30px;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  left: 5vw;
  top: 10vh;
}
.big-text-2 {
  font-size: 50px;
  font-weight: bold;
  color: #ffffff;
  word-spacing: 30px;
  margin: 3vh;
  text-shadow: 0 0 8px rgba($color: #000000, $alpha: 0.8);
}
.echarts-box {
  width: 100%;
  height: 500px;
  margin: 0 auto;
  position: relative;
}
.simple-text {
  color: #ffffff;
  font-size: 22px;
  line-height: 35px;
  margin-bottom: 20px;
  text-shadow: 0 0 8px rgba($color: #000000, $alpha: 0.8);
}
.desc-text {
  font-size: 16px;
  color: #000000;
}
.text-1 {
  margin: 0 auto;
}
.text-2 {
  position: absolute;
  top: 85vh;
  right: 12vw;
}
.icon-1 {
  position: absolute;
  left: 10vw;
  top: 0vh;
  height: 130vh;
}
.big-text-1 {
  font-size: 50px;
  font-weight: bold;
  color: #ffffff;
  word-spacing: 30px;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  left: 5vw;
  top: 10vh;
}
.liucheng-box {
  height: 55vh;
  width: 40vw;
  background: rgba($color: #ffffff, $alpha: 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1vh;
  box-shadow: 0 0 1vh #00000050;
  position: relative;
  margin: 0 auto;
}
.liucheng {
  height: 60vh;
  margin-top: 20vh;
}
.text-3 {
  position: absolute;
  top: 16vh;
}
.text-4 {
  position: absolute;
  top: 35vh;
}
.text-5 {
  position: absolute;
  top: 48vh;
  left: 1vw;
}
.text-6 {
  position: absolute;
  top: 48vh;
  right: 1vw;
}
.text-7 {
  display: block;
  margin: 50px auto 0;
}
.text-8 {
  position: absolute;
  right: 10vw;
  top: 5vh;
}
.text-9 {
  position: absolute;
  right: 10vw;
  top: 30vh;
}
.carbon-struct {
  display: block;
  width: 80%;
}
.text-10 {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
