<template>
  <div class="main">
    <img src="https://static.igem.wiki/teams/4627/wiki/other-background.png" class="other-background" />
    <div class="page-title">Implementation</div>

    <content-decorate style="margin-top: -20vh" :navigation="navigation">
      <TextWithImage
        mainTitle="General Introduction"
        aid="general-introduction"
        :textContent="textContent1"
      ></TextWithImage>
      <TextWithImage
        mainTitle="Demand and market"
        aid="demand"
        :textContent="textContent2"
      ></TextWithImage>

      <p class="simple-text">Around the world, efficient degradation of plastics is critical. At present, physical methods are usually used for degrading plastics in industry. However, high temperature heating will greatly consume energy and waste resources <router-link to="/description">(see description for more information)</router-link>. The emergence of demand leads us to think, and the biological method provides us with a good idea.</p>
      <p class="simple-text">We are excited that PETase, the enzyme which biogrades PET plastics, has been successfully industrialized in recent years. The French company Carbios successfully optimized LCC PETase, which produced a large amount of economic benefits. In addition, its technology also meets the government and national requirements for environmental protection and recycling.</p>
      <p class="simple-text">Learning from the implementation experience of Carbios, our PEase also has the need to implement it in the market. With the development of the times, more and more people begin to agree with the concept of environmental friendliness. It is crucial for our PEase marketization. If we are more able to achieve more efficient pre-PEase (exists in plastic products such as plastic bags in advance, and with the increase of time, plastic products begin to automatically degrade) in the future, then we will have a larger target customer base and a broader market.</p>
      <p class="simple-text">In conclusion, the market demand for PEase comes from</p>
      <p class="simple-text">	<strong>Policy support from the government</strong></p>
      <p class="simple-text">	<strong>Industrial optimization needs</strong></p>
      <p class="simple-text">	<strong>People's yearning for environmental protection</strong></p>
      <p class="simple-text">However, our results do not meet market standards. This vision would be more achievable if we could obtain better mutants and lower their market price.</p>

      <TextWithImage
        mainTitle="Usage of our project"
        aid="usage"
        :textContent="textContent3"
      ></TextWithImage>

      <p class="simple-text">Further, PE plastics are heavily polluted due to their refractory degradation and low recycling rate. If it can be achieved to encapsulate enzymes in PE, releasing and degrading PE after a certain time, it will not only attract more individual customers, but also protect the environment to a greater extent.</p>
      <p class="simple-text">After the degradation of PE with PEase, carbon chains with a length of 10-22 C are generated. Carbon chains of different lengths can produce different oils after fractionation, which is similar to oil fractionation.</p>
      <p class="simple-text">For researchers working on related topics or future iGEMers, we are pleased to be able to provide our own experimental parts and experiments (see <router-link to="/parts">parts</router-link> and <router-link to="/experiments">experiments</router-link> pages for details). We look forward to satisfactory research results and to promote the development of the industry with science.</p>
      <p class="simple-text">More uses of the PEase remain to be explored. </p>
      <TextWithImage
        mainTitle="Realization in real world"
        aid="realization"
        :textContent="textContent4"
      ></TextWithImage>
      
      <TextWithImage
        mainTitle="Future"
        aid="future"
        :textContent="textContent5"
      ></TextWithImage>
      <TextWithImage
        mainTitle="Safety"
        aid="safety"
        :textContent="textContent6"
      ></TextWithImage>

      <TextWithImage
        :imageUrls="['https://static.igem.wiki/teams/4627/wiki/im-1.png']"
      ></TextWithImage>

      <TextWithImage
        :textContent="textContent6_1"
      ></TextWithImage>

      <TextWithImage
        mainTitle="Referece"
        aid="reference"
        :textContent="textContent7"
      ></TextWithImage>
    </content-decorate>
  </div>
</template>
  
  <script setup>
import ContentDecorate from "@/components/content-decorate.vue";
import TextWithImage from "@/components/text-with-image.vue";

const textContent1 = [
  "PEase is a newly discovered enzyme that can efficiently decompose polyethylene, with the ability to oxidize the C-C chains of PE at room temperature and break them into small molecules. However, the wild-type PEase has low thermal stability, and the activity of enzyme is difficult to reach the ideal state. Moreover, PE itself has the property of looser structure and easier to oxidative degradation at high temperatures. Therefore, we designed to improve the PEase thermal stability at higher temperatures and thus improve the degradation efficiency of the enzyme. In the future, we hope to obtain PEase mutants with both high thermal stability and high enzyme activity, so that PE biodegradation can be taken out of the laboratory, more widely used in life and production, and create conditions for the co-degradation of a variety of plastics.",
];
const textContent3 = [
  "PEase is a phenoloxidase capable of degrading PE plastics. Therefore, PEase is first able to be applied to plastic waste recycling and treatment plants to degrade PE products by biological methods.",
  "In addition, because most plastic products are made from a variety of plastic, such as the bottle cap of the plastic bottle is often PP or PE material, and the bottle is PET material. The simultaneous degradation of multiple plastics is one direction of future development. We hope that this will reduce the workload of garbage sorting.",
]
const textContent4=[
   "	<strong>Experimental optimization: Large-scale production, immobilized enzyme</strong>",
   "	<strong>Public guidance</strong>",
   "	<strong>Cooperate with the government and enterprises to improve the industrial chain</strong>",
   "	<strong>iGEM terrace</strong>",
   "First of all, large-scale production is an important part of the realization of industrialization. We need to design large-scale bioreactors and explore suitable parameters to ensure optimal conditions for bacterial growth and protein production. Repeated and continuous reactions can be achieved by means of the immobilized enzyme.",
   "In order to guide residents to actively recycle plastic, we publicize the harm of plastic pollution through wechat public account, TikTok and other platforms, and organize team members to carry out online or offline educational activities.",
   "In addition, we plan to cooperate with waste recycling stations to separate polyethylene plastics from other waste, cooperate with plastic treatment plants to change the original physical and chemical methods for efficient enzymatic degradation, and cooperate with the government to normalize and benefit all commercial activities.",
   "Finally, we have uploaded and introduced our projects and products in Wiki. In the future, we may offer our superior PEase to users who want to experience it and sell their patents."
]
const textContent5 = [
  "In the near future, we will continue to use and expand the methods pioneered in this year's project to get mutants with significantly higher thermal stability and enzyme activity and then  achieve industrial mass production. Under the premise of ensuring biological safety, using the PEase designed by our team can greatly reduce its application cost and greatly improve its use efficiency, which will be more widely used worldwide.",
];
const textContent6 = [
  "In order to ensure the safety of the project, we interviewed Jianchao Zhang, professor of geological environment of Tianjin University.",
];
const textContent6_1 = [
  "In the course of our project, we strictly followed the biosafety regulations and used safe E. coli for protein expression. In the future, if our proposal is implemented, we will conduct detailed biological safety experiments to ensure its safety.",
  "In addition, Tianjin University is one of the first batch of demonstration sites for domestic waste classification in public institutions in China. Our team has always taken the lead in reducing the use of plastic products, and the reasonable recycling and placing of the appliances used without causing substantial harm to the environment, people and all other organisms. At the same time, China also promulgated a new biosafety law [1] in 2021, which established a biosafety risk prevention and control system, including risk monitoring and early warning, risk investigation and assessment and information sharing. It also provides for prevention and response to specific biosafety risks, including major emerging infectious diseases, epidemics and outbreaks, as well as research, development and application of biotechnology. In order to keep our activities legal, an application for permits and approval is necessary if we execute our proposed implementation."
]
const textContent7 = [
  "[1] The Science and Technology Commission of the People's Republic of China. Biosafety Law of the People's Republic of China [Z]. 2020-10-17",
];
const navigation = [
  "general-introduction",
  "demand",
  "usage",
  "realization",
  "future",
  "safety",
  "reference",
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
  /* position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  font-size: 60px;
  font-weight: 700;
  letter-spacing: 3px;
  display: flex;
  height: calc(80vh - 70px);
  align-items: center;
  justify-content: center; */
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