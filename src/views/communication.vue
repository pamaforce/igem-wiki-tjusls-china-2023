<!-- eslint-disable vue/no-duplicate-attributes -->
<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div class="main">
    <img
      src="https://static.igem.wiki/teams/4627/wiki/other-background.png"
      class="other-background"
    />
    <div class="page-title">Communication</div>
    <content-decorate style="margin-top: -20vh" :navigation="navigation">
      <TextWithImage
        mainTitle="Overview"
        aid="Overview"
        :textContent="textContent"
      ></TextWithImage>
      <TextWithImage
        mainTitle="COMMUNICATION"
        aid="COMMUNICATION"
        subTitle="1. Booth Promotion at Begonia Festival"
        :textContent="textContent2"
        :imageUrls="[
          'https://static.igem.wiki/teams/4627/wiki/communication-1.jpg',
          'https://static.igem.wiki/teams/4627/wiki/communication-2.jpg',
        ]"
      ></TextWithImage>
      <TextWithImage
        subTitle="2. Online Platforms"
        :textContent="textContent3"
      ></TextWithImage>
      <div class="flex_img">
        <img
          src="https://static.igem.wiki/teams/4627/wiki/communication-3.jpg"
          alt=""
        />
        <img
          src="https://static.igem.wiki/teams/4627/wiki/communication-4.jpg"
          alt=""
        />
        <img
          src="https://static.igem.wiki/teams/4627/wiki/communication-5.jpg"
          alt=""
        />
      </div>
      <TextWithImage
        subTitle="3. Mini-Game: Plastic-Eater!"
        :textContent="textContent4"
      ></TextWithImage>
      <router-link to="/game">Please click here.</router-link>
      <TextWithImage
        :imageUrls="[
          'https://static.igem.wiki/teams/4627/wiki/communication-6.jpg',
        ]"
      ></TextWithImage>
      <TextWithImage
        subTitle="4. Questionnaire Survey"
        :textContent="textContent5"
        :imageUrls="[
          'https://static.igem.wiki/teams/4627/wiki/communication-7.jpg',
        ]"
      ></TextWithImage>
      <TextWithImage
        :textContent="[
          'Regarding current plastic disposal methods, more people believed that they contribute to environmental pollution. Our project offers a solution to this problem through environmentally friendly biodegradation. This survey result solidified our determination to carry out our project.',
        ]"
        :imageUrls="[
          'https://static.igem.wiki/teams/4627/wiki/communication-8.jpg',
        ]"
      ></TextWithImage>
      <TextWithImage
        :textContent="[
          'Lastly, people had high expectations for us. The word cloud below illustrates the contributions that survey respondents hope university students can make in the future. The entire survey was conducted anonymously to protect personal privacy.',
        ]"
        :imageUrls="[
          'https://static.igem.wiki/teams/4627/wiki/communication-9.jpg',
        ]"
      ></TextWithImage>
      <TextWithImage
        mainTitle="EDUCATION"
        aid="EDUCATION"
        subTitle="1. Debate!"
        :textContent="textContent6"
        :imageUrls="[
          'https://static.igem.wiki/teams/4627/wiki/communication-10.jpg',
          'https://static.igem.wiki/teams/4627/wiki/communication-11.jpg',
        ]"
      ></TextWithImage>
      <TextWithImage
        subTitle="2. Elementary School Kids"
        :textContent="textContent7"
      ></TextWithImage>

      <div class="flex_img_wrap">
        <img
          src="https://static.igem.wiki/teams/4627/wiki/communication-12.jpg"
          alt=""
        />
        <img
          src="https://static.igem.wiki/teams/4627/wiki/communication-13.jpg"
          alt=""
        />
        <img
          src="https://static.igem.wiki/teams/4627/wiki/communication-14.jpg"
          alt=""
        />
        <img
          src="https://static.igem.wiki/teams/4627/wiki/communication-15.jpg"
          alt=""
        />
      </div>

      <iframe
        src="https://static.igem.wiki/teams/4627/wiki/color-magic.pdf"
      ></iframe>
      <TextWithImage
        subTitle="3. Xinzhuang Middle School & Fengyu No.1 High School"
        :textContent="textContent8"
        :imageUrls="[
          'https://static.igem.wiki/teams/4627/wiki/communication-16.jpg',
          'https://static.igem.wiki/teams/4627/wiki/communication-17.jpg',
        ]"
      ></TextWithImage>
      <TextWithImage :textContent="textContent9"></TextWithImage>
      <iframe
        src="https://static.igem.wiki/teams/4627/wiki/animalbehaviour.pdf"
      ></iframe>
      <iframe
        src="https://static.igem.wiki/teams/4627/wiki/introductiontosyntheticbiology.pdf"
      ></iframe>
      <TextWithImage
        :subTitle="'4. University Lecture'"
        :textContent="[
          'In September 2022, we held an iGEM lecture for the entire university. During the lecture, we introduced past projects and invited responsible teachers and former team members to share their experiences. To boost enthusiasm, we designed a quiz game related to synthetic biology and created related cultural and creative prizes. We hoped that more and more people would appreciate the charm of synthetic biology and join the iGEM team!',
        ]"
        :imageUrls="[
          'https://static.igem.wiki/teams/4627/wiki/communication-19.jpg',
          'https://static.igem.wiki/teams/4627/wiki/communication-20.jpg',
        ]"
      ></TextWithImage>
    </content-decorate>
  </div>
</template>

<script setup>
import TextWithImage from "@/components/text-with-image.vue";
import ContentDecorate from "@/components/content-decorate.vue";
const textContent = [
  "Polyethylene (PE) is widely used in our production and daily lives. But currently, its disposal methods mostly end with landfilling or incineration. Biodegradation methods are not widely understood by the public, which may hinder scientists from fully realizing the true potential of their innovations. One significant reason for this situation is the lack of promotion of synthetic biology technology.",
  'In this section, we will contemplate how to disseminate information related to the project and knowledge of synthetic biology to the public through various means. Our outreach efforts target both students and society as a whole. On one hand, we conduct activities for students at the elementary, middle, and university levels to popularize knowledge about synthetic biology and plastic degradation. On the other hand, we actively use a combination of offline and online approaches to engage people from all walks of life in understanding synthetic biology. We organize events such as the Begonia Festival, establish a WeChat public account, and create a presence on the Tiktok platform to attract more people to join the field of synthetic biology. Additionally, we have developed an engaging game called "Plastic Eater!" to help users easily raise awareness about plastic cleanup.',
];
const textContent2 = [
  "Begonia Festival is an annual event at Tianjin University, attended by people from various backgrounds and age groups. We carefully prepared our booth, featuring four modules: a display of plastic products in daily life, video explanations, model constructions, and experimental results. Through these activities, visitors could experience the harm of plastics and the amazing effects of enzyme degradation firsthand.",
  'For young children, we offered clean Eppendorf tubes to make “small pigs”, which they loved. Many children asked us questions like "What is plastic?" and "What are enzymes?" We believe this could plant the seed of love for biology in their hearts.',
  "Furthermore, some teachers and scholars in related fields showed interest in our project. After detailed discussions, they affirmed our project and provided valuable suggestions. We are grateful for their recognition and assistance.",
  "Our activities were conducted in collaboration with the BYMS Alliance; for more details, please refer to the collaboration page.",
];
const textContent3 = [
  "To spread knowledge more widely, we use a unified WeChat public account. By publishing text or video updates, we hope to reach a larger audience, increasing awareness of our project, as well as iGEM and synthetic biology. Additionally, we established a TikTok account, a platform with a broader audience in China, covering all age groups, including the elderly, middle-aged, youth, and children.",
  "On these online platforms, we promote our project, share laboratory experiences, hoping to connect with like-minded individuals. We use simple and understandable images and text to showcase our project and upload videos of laboratory life and synthetic biology experiments on TikTok platform to attract more people's interest in laboratory life and synthetic biology.",
];
const textContent4 = [
  `Mini-games are typically fun and educational, making it easier for the public to accept and understand our knowledge. Our game is somewhat like "Aircraft Battle," where the position of "launching cannons" represents our PEase (plastic-eating enzyme). Catch the falling PE plastic to score points, but be careful not to touch the bombs, as they lead to failure. Through this game, we aim to make more people aware of the existence of "launching cannons" (enzymes) that can precisely destroy "aircraft" (PE).',
  "Would you like to try our game?`,
];
const textContent5 = [
  "After several rounds of science outreach, we conducted a survey through the WeChat public platform. The survey questions focused on topics like waste sorting, the hazards and management of white pollution, plastic recycling, and more aspects. We aimed to assess people's knowledge and habits regarding plastics and to identify ways we could further serve society. The questionnaire was divided into three versions targeting students, the general public, and those working in plastic-related fields, to gather comprehensive insights.",
  "Results showed that students usually acquired knowledge about waste sorting and recycling from television, with little emphasis on these topics in classrooms. We regretfully discovered that there was a lack of education regarding waste sorting and recycling, which is why we actively participated in educational support activities. ",
];
const textContent6 = [
  "Can synthetic biology disrupt traditional biological manufacturing?",
  "To answer this question, we held an intense debate in collaboration with Tianjin University's debate team. Through the interaction of the two sides' ideas, we have a deeper understanding of the relationship between synthetic biology and traditional biofabrication. Synthetic biology is the most beautiful art derived from traditional biological manufacturing. A student in the debate said, \"I'm not a biology major, but synthetic biology is truly the gem of human science. In the future, it will undoubtedly lead various industries.\" We were deeply impressed by the passion ignited by this debate and excited about the strong interest it generated in synthetic biology. Of course, we also learned a lot from this debate, confirming that synthetic biology is indispensable!",
];
const textContent7 = [
  'In May 2023, we visited Hamidao Primary School in Tianjin to give a presentation. We aimed to make the children aware of biodiversity and bioethics and safety in a limited class time. Considering our target audience of children, we decided to use a more lively and interesting approach to introduce them to biology. In addition to the EP tube pig-making activity, similar to what we did at the Begonia Festival, we brought oil pastels and watercolors to have everyone depict their own biology in a painting. In the eyes of the children, biology is colorful. They told us, "They live happily together!" Great! They truly realized the harmony among living beings.',
];
const textContent8 = [
  "High school students have a basic understanding of synthetic biology. As we introduced synthetic biology to them, they showed a strong interest. Through our project presentation, we demonstrated how to apply their theoretical knowledge to practical situations. We also showed them how to perform PCR and plate coating experiments through videos and practical demonstrations. We aimed to show high school students what real experiments look like.",
];
const textContent9 = [
  "Below is our presentation in class. Middle school students have a certain knowledge of molecular biology, so we not only carried out vivid interpretation, but the analysis of synthetic biology related case principles. ",
];
const navigation = ["Overview", "COMMUNICATION", "EDUCATION"];
</script>

<style scoped>
.flex_img_wrap {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px auto;
}
.flex_img_wrap img {
  width: 49%;
  margin-bottom: 20px;
}
.flex_img {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 20px auto;
}
.flex_img img {
  width: 30%;
  flex: 1;
  margin: 0 10px;
}
iframe {
  height: 150vh;
  width: 100%;
  margin: 15px auto;
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
</style>