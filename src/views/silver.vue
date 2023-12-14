<template>
  <div class="main">
    <img
      src="https://static.igem.wiki/teams/4627/wiki/other-background.png"
      class="other-background"
    />
    <div class="page-title">Silver</div>
    <content-decorate style="margin-top: -20vh" :navigation="navigation">
      <text-with-image
        main-title="Silver"
        aid="Silver"
        sub-title="Enigeering"
      ></text-with-image>
      <p class="simple-text">While searching for better mutants, we tried different approaches, and did multiple iterations based on the mutual verification of dry lab and wet lab. This was our engineering process, <router-link to="/engineering">click here</router-link> if you want to know more.</p>
      <text-with-image
        sub-title="human-practices"
        :text-content="[
          'iGEM is a comprehensive competition, and our project does not just carry out research in the lab, but also includes many practices. In the process of research, we surveyed and interviewed different people, and also communicated with experts. Besides, we carried out publicity and popularization of science when the project achieved certain results.',
        ]"
      ></text-with-image>
      <p class="simple-text">If you want to know more, <router-link to="/human-overview">please click here to visit our human-practices page</router-link></p>
    </content-decorate>
  </div>
</template>

<script setup>
import TextWithImage from "@/components/text-with-image.vue";
import ContentDecorate from "@/components/content-decorate.vue";
const navigation = [];
</script>
  
<style scoped>
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
</style>