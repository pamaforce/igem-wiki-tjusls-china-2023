<template>

<el-row class="contain_main">
  <el-col :xs="2" :sm="2" :md="2" :lg="5" :xl="5" class="contain_main_left" v-show="props.navigation.length != 0">
    <el-dropdown class="nav_small">
      <el-icon color="#2e6dbc" size="45" class="no-inherit" @click="isShowNav = true">
          <Menu />
      </el-icon>
      <template #dropdown>
        <el-dropdown-menu v-for="(item, i) in props.navigation"  :key="i">
          <el-dropdown-item @click="toNav(item)">{{ item }}</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <div class="side-bar" ref="elementToMeasure">
      <div class="side-bar_item" v-for="(item, i) in props.navigation"  :key="i" >
        <el-button class="side-bar_btn" type="warning" @click="toNav(item)">
            {{item}}
        </el-button>
        <div class="side-bar_item_mask" :style="{display: activeItem === item ? 'none' : 'block'}"></div>
      </div>
    </div>
  </el-col>
  <el-col :xs="props.navigation.length != 0 ? 22 : 24" :sm="props.navigation.length != 0 ? 22 : 24" :md="props.navigation.length != 0 ? 22 : 24" :lg="props.navigation.length != 0 ? 19 : 24" :xl="props.navigation.length != 0 ? 19 : 24">
    <div class="main-content" ref="myDiv">
      <canvas
        id="myCanvas"
        ref="myCanvas"
        style="position: absolute; top: 0; left: 0; z-index: 1"
      ></canvas>
      <div class="slot">
        <slot></slot>
      </div>
    </div>
  </el-col>
</el-row>

</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Menu } from '@element-plus/icons-vue';
import bus from "@/libs/bus.js";
const myDiv = ref(null);
const myCanvas = ref(null);
const props = defineProps(["navigation"]);
const activeItem = ref(props.navigation[0]);
const elementToMeasure = ref(null);
onMounted(() => {
  bus.on("imageLoaded", handleImageLoad);
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", () => {
    handleImageLoad();
  });
  setTimeout(() => {
    bus.emit("imageLoaded");
  }, 2000);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
const handleScroll = () => {
  
  const nav = document.querySelector('.side-bar');
  const navSmall = document.querySelector('.nav_small');
  // 获取页面的总高度
  const pageHeight = document.documentElement.scrollHeight;
  // 计算元素距离底部的距离
  const distanceToBottom = pageHeight - (window.scrollY + 320);


  if (window.scrollY > 700 && distanceToBottom >= 650) {
    nav.classList.add('fixed-nav');
    nav.classList.remove('fixed-nav2');
    navSmall.classList.add('fixed-box');
  } else if(window.scrollY > 700 && distanceToBottom < 650) {
    nav.classList.remove('fixed-nav');
    nav.classList.add('fixed-nav2');
    navSmall.classList.add('fixed-box');
  }else{
    nav.classList.remove('fixed-nav');
    nav.classList.remove('fixed-nav2');
    navSmall.classList.remove('fixed-box');
  }
  for (const item of props.navigation) {
    const anchor = document.getElementById(item);
    if (anchor) {
      const rect = anchor.getBoundingClientRect();
      if (rect.top >= -1) {
        activeItem.value = item;
        break;
      }
    }
  }
};
const toNav = (item) => {
  activeItem.value = item;
  let anchor = document.getElementById(item);
  if (anchor == null) return;
  setTimeout(() => {
    anchor.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 300);
  
};
const handleImageLoad = () => {
  if (myCanvas.value == null) return;
  const canvas = myCanvas.value;
  const context = canvas.getContext("2d");

  // Set the canvas size to match the div size
  let ox = 30,
    oy = 30;
  canvas.width = myDiv.value.offsetWidth;
  canvas.height = myDiv.value.offsetHeight;

  // Fill entire canvas with the outer color
  context.fillStyle = "#cbe8fe";
  context.fillRect(ox, oy, canvas.width, canvas.height);

  // Draw the border
  context.lineWidth = 10;
  context.strokeStyle = "#2e4e7e";

  const randomness = 24; // Adjust this for more or less randomness
  const segments = 12; // Number of segments per side

  // Function to draw a wavy line from (x1, y1) to (x2, y2)
  const drawWavyLine = (x1, y1, x2, y2) => {
    for (let i = 0; i <= segments; i++) {
      const x = x1 + (x2 - x1) * (i / segments);
      const y = y1 + (y2 - y1) * (i / segments);
      const dx = x2 - x1;
      const dy = y2 - y1;
      const offset = (Math.random() - 0.5) * randomness;
      if (Math.abs(dx) > Math.abs(dy)) {
        context.lineTo(x, y + offset);
      } else {
        context.lineTo(x + offset, y);
      }
    }
  };

  // Draw the four sides of the rectangle
  context.beginPath();
  drawWavyLine(ox, oy, canvas.width - 2 * ox, oy);
  drawWavyLine(
    canvas.width - 2 * ox,
    oy,
    canvas.width - 2 * ox,
    canvas.height - 2 * oy
  );
  drawWavyLine(
    canvas.width - 2 * ox,
    canvas.height - 2 * oy,
    ox,
    canvas.height - 2 * oy
  );
  drawWavyLine(ox, canvas.height - 2 * oy, ox, oy);
  // Close the path
  //context.closePath();

  // Fill the inside of the rectangle with the inner color
  context.fillStyle = "#e6edf3";
  context.fill();
  context.stroke();
};
</script>

<style scoped>

.contain_main{
  width: 85%;
  margin: 0 auto;
}
.side-bar_item{
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 35px;
  position: relative;
}
.contain_main_left{
  position: relative;
}
.side-bar_item_mask{
  position: absolute;
  width: 230px;
  height: 100%;
  top: 0;
  left: 50%;
  margin-left: -115px;
  background-color: rgba(255, 255, 255, 0.4);
  pointer-events: none;
}
.side-bar_btn{
  width: 230px;
  height: 60px;
  font-size: calc(100vw * 19 / 1920);
  font-weight: 600;
  background-color: #fed815;
  color: #2e6dbc;
  border: 5px #2e6dbc solid;
  
}

.main-content {
  position: relative;
  padding: 20px 40px;
  overflow: visible;
}
.content {
  width: 100% !important;
  display: flex;
  margin-bottom: 40px;
}
/* .side-bar {
  width: 20%;
  position: sticky;
  top: 140px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: calc(100vh - 100px);
  padding-top: 20px;
} */
.side-bar {
  width: 230px;
  position: absolute;
  top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.side-bar img {
  width: 200px;
  cursor: pointer;
}
.fixed-nav{
  position: fixed;
  top: 100px !important;
  width: 230px;
}
.fixed-nav2{
  position: fixed;
  top: auto;
  bottom: 356px;
  width: 230px;
}
.fixed-box{
  position: fixed !important;
  top: 100px !important;
}
.slot {
  position: relative;
  z-index: 20;
  padding: 20px 40px;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
}
.slot :deep(img) {
  max-width: 100%;
  align-self: center;
  margin-bottom: 3px;
  width: 80%;
  margin-top: 10px;
}
.slot :deep(.img-name) {
  align-self: center;
  font-size: 13px;
  margin: 3px 0;
  max-width: 80%;
  white-space: pre-line;
}
.slot :deep(.img-hint) {
  align-self: center;
  font-size: 14px;
  max-width: 60%;
  white-space: pre-line;
  margin-bottom: 4px;
}
.nav_small{
  display: none;
  position: absolute;
  top: 5vh;
  border: 5px rgb(101, 119, 254) solid;
  border-radius: 5px;
  cursor: pointer;
}
@media (max-width: 1200px) {
  .nav_small {
    display: block;
  }
  .side-bar{
    display: none !important;
  }
}
</style>
