<!--tang-->
<template>
  <div class="main">
    <img
      src="https://static.igem.wiki/teams/4627/wiki/other-background.png"
      class="other-background"
    />
    <div class="page-title">Safety</div>
    <content-decorate style="margin-top: -20vh" :navigation="navigation">
      <TextWithImage
        mainTitle="OVERVIEW"
        aid="overview"
        :textContent="textContent1"
      >
      </TextWithImage>
      <TextWithImage
        mainTitle="Personnel Training"
        aid="training"
        :textContent="textContent2"
      >
      </TextWithImage>
      <img
        src="https://static.igem.wiki/teams/4627/wiki/safety1.jpg"
        class="picture1"
      />
      <TextWithImage :textContent="textContent3"> </TextWithImage>
      <TextWithImage mainTitle="Project safety" aid="project"> </TextWithImage>
      <TextWithImage subTitle="1.Protein safety: " :textContent="textContent4">
      </TextWithImage>
      <TextWithImage subTitle="2.Strain safety:" :textContent="textContent5">
      </TextWithImage>
      <TextWithImage
        subTitle="3.Gene transfer prevention: "
        :textContent="textContent6"
      >
      </TextWithImage>
      <TextWithImage
        mainTitle=" Laboratory Safety"
        aid="laboratory"
        :textContent="textContent7"
      >
      </TextWithImage>

      <TextWithImage
        subTitle="1.Personal Protective Equipment:"
        :textContent="textContent8"
      >
      </TextWithImage>
      <TextWithImage
        subTitle="2.Chemical management: "
        :textContent="textContent9"
      >
      </TextWithImage>
      <TextWithImage
        subTitle="3.Laboratory facilities and equipment:  "
        :textContent="textContent10"
      >
      </TextWithImage>
      <TextWithImage
        subTitle="4. Waste Disposal: "
        :textContent="textContent11"
      >
      </TextWithImage>

      <div class="flex_img_wrap">
        <img src="https://static.igem.wiki/teams/4627/wiki/safety2.jpg" alt="">
        <img src="https://static.igem.wiki/teams/4627/wiki/safety3.jpg" alt="">
        <img src="https://static.igem.wiki/teams/4627/wiki/safety4.jpg" alt="">
        <img src="https://static.igem.wiki/teams/4627/wiki/safety5.jpg" alt="">
        <img src="https://static.igem.wiki/teams/4627/wiki/safety6.jpg" alt="">
        <img src="https://static.igem.wiki/teams/4627/wiki/safety7.jpg" alt="">
      </div>

      <TextWithImage
        mainTitle="human-practices"
        aid="IHP"
        :textContent="textContent12"
      >
      </TextWithImage>
      <img
        src="https://static.igem.wiki/teams/4627/wiki/safety8.jpg"
        class="picture1"
      />

      <TextWithImage
        mainTitle="Reference"
        aid="reference"
        :textContent="textContent13"
      >
      </TextWithImage>
      <TextWithImage :textContent="textContent14"> </TextWithImage>
      <TextWithImage :textContent="textContent15"> </TextWithImage>
      <TextWithImage :textContent="textContent16"> </TextWithImage>
      <TextWithImage :textContent="textContent17"> </TextWithImage>
      <TextWithImage :textContent="textContent18"> </TextWithImage>
    </content-decorate>
  </div>
</template>

<script setup>
import TextWithImage from "@/components/text-with-image.vue";
import ContentDecorate from "@/components/content-decorate.vue";
const textContent1 = [
  "Laboratory safety is a very important part of the iGEM competition, ensuring the safety of team members as well as protecting the environment from any potential hazards. We promise that none of the organisms we use will pose a risk to the safety and health of team members, nor will they cause infections or adverse health effects or symptoms. The following are the measures our team has taken for laboratory safety:",
];
const textContent2 = [
  "All laboratory team members have passed biosafety training and the test required by laboratory assistants and engineers, including knowledge of laboratory procedures, emergency management, and chemical handling. The standard for passing this test is 90% correct. All experiments can only be carried out after passing the test.",
];
const textContent3 = [
  "Before entering the laboratory, all of them participated in the 'Biosafety and Bioethics course' carried out by the College of Life Sciences of Tianjin University to fully grasp the importance of biosafety for the project during the experiment. We encourage team members to attend safety training and seminars frequently to update their safety awareness and knowledge.Our laboratory follows the laboratory safety rules of Tianjin University and the Institute of Biosafety Management of Institute of Medical Biology, Chinese Academy of Medical Sciences, including requirements for wearing personal protective equipment, proper use of chemicals and equipment, laboratory cleaning, and waste disposal. Team members must follow these rules and regulations to ensure the safety and hygiene of the laboratory.",
];
const textContent4 = [
  "The wild type of PEase our team modified is derived from the saliva of the wax worn saliva, which has a certain ability to oxidize PE without any biological toxicity, and will not cause harm to the organism and the environment.",
];
const textContent5 = [
  "Our project would be no risk to student safety, because the microorganisms used in our project are commonly used laboratory -- strains E. coli DH5a and BL21 (DE3), which are designated as BSL-1 organisms. E. coli DH5α was used for molecular cloning to obtain recombinant plasmids, and BL21 (DE3) was used for protein expression and purification to obtain proteins. Containers that contact strains will be autoclaves or handed over to school professionals.",
];
const textContent6 = [
  "We precisely introduce DNA into individual bacteria through transformation. The transferred plasmid carries the genes encoding antibiotic resistance, so we want to prevent it from spreading inside and outside the laboratory. To prevent the release of antibiotic resistance genes into the environment, all procedures related to carrying live bacteria are carried out on a clean bench. All bacterial liquids were specifically collected in a bin with a high concentration of NaOH to kill the phage and alter the structure of the DNA.",
];
const textContent7 = [
  "We set up a safety leader in the project, who is responsible for supervising and ensuring the laboratory safety of members. Our program uses laboratories classified as BSL-1. The construction of the laboratory includes the location of emergency exits, emergency ventilation systems, first aid kits, etc. Emergency shower & eyewash is located outside the laboratory, as well as auxiliary supplements and fire extinguishers.",
];
const textContent8 = [
  "When working in the laboratory, we require team members to wear laboratory clothing, gloves, goggles, masks and other personal protective equipment. These devices effectively protect members from chemicals and experimental manipulations. ",
];
const textContent9 = [
  "Our team manages the chemicals in the laboratory strictly, using clearly marked containers and properly storing them in special cabinets to avoid mixing or arbitrary disposal. We also ensure that team members have a thorough understanding of each chemical. ",
];
const textContent10 = [
  "We regularly maintain and check the safety performance of laboratory facilities and equipment to ensure their normal operation. In case of equipment failure, we will repair or replace the equipment in time, and carry out a comprehensive inspection before operation. ",
];
const textContent11 = [
  "Our team follows proper waste disposal procedures, including the sorting and proper disposal of chemical, biological and laboratory waste. Our team members are trained in waste management and learn proper waste disposal as well as its environmental and health hazards.",
];
const textContent12 = [
  "In terms of laboratory safety, we interviewed professor Chen Cheng, who explained to us the relevant measures of biosafety in our college, as well as the correct use and precautions of most instruments in the laboratory. This can really help our team members to safely use the instrument and understand the importance of biosafety.",
];
const textContent13 = [
  "[1]Regulations on Biosafety Management of Pathogenic Microorganism Laboratories. http://www.gov.cn/zwgk/2005-05/23/content_256.htm htm",
];
const textContent14 = ["[2] iGEM team TJUSLS_China2022. Safety. "];
const textContent15 = [
  "[3]Regulations on Safe Management of Dangerous Chemicals_Administrative Regulations Library_Chinese Government Website. http://www.gov.cn/zhengce/2020-12/26/content_5574251.htm",
];
const textContent16 = [
  "[4]Hashimoto, M., & Kato, J.-I. (2003). Indispensability of the Escherichia coli Carbonic Anhydrases YadF and CynT in Cell Proliferation at a Low CO2Partial Pressure. Bioscience, Biotechnology and Biochemistry, 67 (4), 919–922.",
];
const textContent17 = [
  "[5] Bennett, P.M., 2008. Plasmid encoded antibiotic resistance: acquisition and transfer of antibiotic resistance genes in bacteria. Br. J. Pharmacol. 153 (S1), 347–357.",
];
const textContent18 = [
  "[6]Measures for the Biosafety Environmental Management of Pathogenic Microorganism Laboratories.2006.3.08.http://www.mee.gov.cn/gkml/zj/jl/200910/t20091022_171837.htm",
];
const navigation = [
  "overview",
  "training",
  "project",
  "laboratory",
  "IHP",
  "reference",
];
</script>

<style scoped>
.flex_img_wrap{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px auto;
}
.flex_img_wrap img{
  width: 49%;
  margin-bottom: 20px;
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
.person-name {
  color: blue;
  cursor: pointer;
}
.picture1 {
  width: 60vw;
}
.picture2 {
  width: 30vw;
  padding: 1vw;
}
</style>