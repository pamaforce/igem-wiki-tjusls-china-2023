<!--tang-->
<template>
  <div class="main">
    <img
      src="https://static.igem.wiki/teams/4627/wiki/other-background.png"
      class="other-background"
    />
    <div class="page-title">experiment</div>
    
    <content-decorate style="margin-top: -20vh" :navigation="navigation">
      <text-with-image
        main-title="Overview"
        aid="overview"
        :textContent="[
        
        'For Ceres, a total of 64 mutants were selected. Among them, 30 proteins were successfully constructed, expressed and purified. Using DSF method, we obtain their Tm values. In addition, the enzyme activity of the protein was qualitatively identified by weighing method. For Demetra, we only conducted the test (pre-expression).',
          'The specific steps of the experiment are as follows.',
  ]"
      ></text-with-image>
      <iframe
        src="https://static.igem.wiki/teams/4627/wiki/experiment.pdf"
      ></iframe>
    </content-decorate>
  </div>
</template>

<script setup>
import TextWithImage from "@/components/text-with-image.vue";
import ContentDecorate from "@/components/content-decorate.vue";
const navigation = [
  "overview",
];
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
.picture {
  width: 40px;
}

iframe {
  height: 100vh;
  width: 100%;
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