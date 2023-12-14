<template>
  <div class="main">
    <img
      src="https://static.igem.wiki/teams/4627/wiki/other-background.png"
      class="other-background"
    />
    <div class="page-title">Bronze</div>
    <content-decorate style="margin-top: -20vh" :navigation="navigation">
      <text-with-image
        main-title="Bronze"
        aid="Bronze"
        sub-title="Wiki"
      ></text-with-image>
      <p class="simple-text">
        We have or will meet all deliverables on the Competition Deliverables
        page. Please visit our <router-link to="/">Home page</router-link> and
        Judging Form page for more details.
      </p>
      <text-with-image
        sub-title="Promotion video"
        :text-content="[
          'We finished our project and we hope you can learn about it by our promotion video.',
        ]"
      ></text-with-image>

      <video
        src="https://video.igem.org/videos/embed/bb26bc7f-9f77-4262-9168-e3ac3c4dfc34?subtitle=en"
        autoplay
        muted
        loop
        playsinline
        class="home-top-image"
        style="display: block; width: 80%; margin: 0 auto"
      />

      <text-with-image sub-title="Attribution"></text-with-image>

      <p class="simple-text">
        Our team was established at Jan 10th, consisting of 18 Tianjin
        University students from different majors, leaded by two PIs and two
        instructors. Besides, we have some sponsors and supporters. Here is our
        <router-link to="/attributions">attribution form</router-link>.
      </p>

      <text-with-image
        sub-title="Description"
        :text-content="[
          'Our project is about the optimization of PEase. PEase is the only enzyme found to degrade PE, which has the ability to oxidize PE at room temperature and effectively solves the problem of oxidation. we managed to improve protein thermostability by designing disulfide bonds, flexible sites, salt bridges, and hydrophobic cores. And our project may lay the foundation for achieving joint action of various plastic degrading enzymes. Here is our project description. ',
        ]"
      ></text-with-image>
      <text-with-image sub-title="contribution"></text-with-image>
      <p class="simple-text">
        Since PEase is a newly discovered enzyme, there will be many new
        experiences in the research process. And that will be the contribution
        we leave to future researchers and new teams. Here is our
        <router-link to="/description">project contribution</router-link>.
      </p>
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
