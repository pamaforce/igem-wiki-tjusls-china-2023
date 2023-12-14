<template>
    <div class="side-bar" ref="sideBar">
      <p class="heading">{{ props.heading }}</p>
      <el-slider 
        v-model="value" 
        :marks="marks" 
        vertical
        :height="'60vh'"
        :step="1"
        :min="0"
        :max="Object.keys(props.child_heading).length-1"
        :show-tooltip="false"
        @input="clickHref()"
        />
      
    </div>
  </template>
  
  <script setup>
  import { reactive, ref } from "vue"
  const props = defineProps(["heading", "child_heading"])
  const value = ref(Object.keys(props.child_heading).length-1)
  const marks = reactive(props.child_heading)
  function clickHref(){
    const id = props.child_heading[Object.keys(props.child_heading)[value.value]];
    // console.log("#" +  id.replace(/\s/g,""));
    // const node = document.createElement("a");
    // node.href = "#/#" + id.replace(/\s/g,"");
    // node.click();
    document.getElementById(id).scrollIntoView();
  }
  const sideBar = ref();

  // document.addEventListener("scroll", () => {
    
  //   if(yTop < imageHeight + navHeadHeight)
  //   console.log(sideBar.value.getBoundingClientRect());
  // })
  </script>
  
  <style scoped>
  .heading{
    margin-top:5vh;
  }
  .el-slider{
    --el-color-primary:rgba(0, 128, 0, 0.5);
    --el-slider-runway-bg-color:rgba(0, 128, 0);
    height:90vh;
    position: absolute;
    left:10%;
  }
  .side-bar{
    display: flex;
    flex-direction: column;
    align-items: center;
    width:14.8vw;
  }
  .absolute-site{
    position: absolute;
  }
  .fix-site{
    position:fixed;
  }
  .side-bar-content{
    display: flex;
    flex-direction: column;
  }
  input[type="range"]{
    appearance: slider-vertical;
    background:blue;
  }
  </style>