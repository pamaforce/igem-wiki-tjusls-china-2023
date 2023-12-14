<template>
  <div class="main">
    <img
      src="https://static.igem.wiki/teams/4627/wiki/other-background.png"
      class="other-background"
    />
    <div class="page-title">Gold</div>
    <content-decorate style="margin-top: -20vh" :navigation="navigation">
      <TextWithImage
        mainTitle="Best Integrated Human Practices"
        aid="Practices"
        :textContent="textContent"
      ></TextWithImage>
      <TextWithImage
        mainTitle="Best New Basic Part"
        aid="Basic"
        :textContent="textContent2"
      ></TextWithImage>
      <TextWithImage
        mainTitle="Best New Improved Part"
        aid="Improved"
        :textContent="textContent3"
      ></TextWithImage>
    </content-decorate>
  </div>
</template>
  
  <script setup>
import ContentDecorate from "@/components/content-decorate.vue";
import TextWithImage from "@/components/text-with-image.vue";
const textContent = [
  `This year, through telephone interviews, email Q & A, on-site visits, street activities, volunteer teaching and other forms, we included people of all ages and different fields into our HP scope, and provided a lot of support for the project. See the <a href="https://2023.igem.wiki/tjusls-china/human-practices">Human Practice</a> page for more information.`,
];
const textContent2 = [
  `We found that none of the previous iGEM involved enzymes which is capable of degrading PE. As a result, its sequences have not yet been translated into BioBrick parts. We thought this was cool and included two PE degrading enzymes in the Part! See the <a href="https://2023.igem.wiki/tjusls-china/parts">Parts</a> page for details.`,
];
const textContent3 = [
  `In order to improve the thermostability of PEase, we carried out rational design, and finally obtained 64 mutants. Of all the new parts, 25 have improved functionality compared to the original parts. The best mutant showed a greater than 12% increase in thermostability than the wild type. See the <a href="https://2023.igem.wiki/tjusls-china/parts">Parts</a> page for more information. `,
];
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