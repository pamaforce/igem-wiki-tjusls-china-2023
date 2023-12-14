<template>
  <div class="main">
    <img
      src="https://static.igem.wiki/teams/4627/wiki/other-background.png"
      class="other-background"
    />
    <div class="page-title">Human Practice</div>
    <content-decorate style="margin-top: -20vh" :navigation="navigation">
      <text-with-image
        main-title="OVERVIEW"
        sub-title="Stakeholder Engagement:"
        aid="overview"
        :text-content="[
          'Through interviews with stakeholders, we gained valuable insights into their perspectives and concerns. These interactions guided our project\'s direction. Notable interviews include those with Mr. Zheng Cheng, Mr. Zhang Jianchao, Mr. Chen Cheng, and Mr. Huang Jinhai, Zhengfei Yan.',
        ]"
      ></text-with-image>
      <text-with-image
        sub-title="Interactions with Senior Team Members:"
        :text-content="[
          'Our interactions with senior iGEM team members, provided valuable guidance and influenced our project\'s direction, enriching our knowledge and fostering community bonds.',
        ]"
      ></text-with-image>
      <text-with-image
        sub-title="Industry Collaborations:"
        :text-content="[
          'We collaborated with various enterprises, facilitating an exchange of insights and application development opportunities.',
        ]"
      ></text-with-image>
      <text-with-image
        sub-title="Healthcare Partnerships:"
        :text-content="[
          'Engagement with healthcare institutions allowed us to better understand the clinical and medical applications of our project.',
        ]"
      ></text-with-image>
      <text-with-image
        sub-title="Government Collaboration:"
        :text-content="[
          'Collaborating with government bodies reinforced the importance of regulatory considerations in our project.',
        ]"
      ></text-with-image>
      <!---->
      <text-with-image
        main-title="Government"
        :image-urls="['https://static.igem.wiki/teams/4627/wiki/hp/hp-1.png']"
      ></text-with-image>
      <text-with-image
        :text-content="[
          'When we were thinking about the future feasibility of the project, we interviewed civil servants Nanjing Bureau of Ecological Environment. He told us that the current control of plastic pollution is an area of great importance to the state. The relevant policies have been gradually improved to solve problems from three aspects: source, technology and society, and will finally enhance the happiness of the people.',
        ]"
      ></text-with-image>
      <text-with-image
        main-title="Interview"
        sub-title="1.	Cheng Zhu"
        :image-urls="['https://static.igem.wiki/teams/4627/wiki/hp/hp-2.png']"
      ></text-with-image>
      <text-with-image
        :text-content="[
          'When we designed the mutants, the first batch of disulfide bond mutations did not work well. While reviewing the literature for a better solution, we consulted Cheng Zhu. He found a piece of literature for us and explained in detail about the methods used in the literature to improve protein stability. He used ROSETTA to implement ideas from the literature to help us design hydrophobic core mutations (Z - series) to make proteins more stable. With his help, we designed 20 mutants and selected the best nine for the experiment.',
        ]"
        :image-urls="['https://static.igem.wiki/teams/4627/wiki/hp/hp-3.jpg']"
      ></text-with-image>
      <text-with-image
        sub-title="2.	Cheng Chen"
        :image-urls="['https://static.igem.wiki/teams/4627/wiki/hp/hp-5.jpg']"
      ></text-with-image>
      <text-with-image
        :text-content="[
          'In the course of doing the experiment, we found that the success rate of the experiment was low, so we consulted Cheng Chen. He taught us the correct use of most of the laboratory instruments and the precautions in the use of the process. Through his explanation, we have a more profound understanding of laboratory safety and project safety, and therefore we investigated the security risks in the experimental design and optimized it.',
        ]"
      ></text-with-image>
      <text-with-image
        sub-title="3.	Jianchao Zhang"
        :image-urls="['https://static.igem.wiki/teams/4627/wiki/hp/hp-6.png']"
      ></text-with-image>
      <text-with-image
        :text-content="[
          'As the project progressed, we interviewed ZJC, a professor at the School of Earth Surface System Science at Tianjin University. We asked him about plastics and the natural environment.',
        ]"
        :image-urls="['https://static.igem.wiki/teams/4627/wiki/hp/hp-7.jpg']"
      ></text-with-image>
      <text-with-image
        sub-title="4.	Jinhai Huang"
        :image-urls="['https://static.igem.wiki/teams/4627/wiki/hp/hp-8.png']"
      ></text-with-image>
      <text-with-image
        :text-content="[
          'Mutations we designe, such as disulfide bonds and flexible sites, have more than one mutation site. We refer to the situation of last year\'s team. They used overlap PCR but the effect was not so good. We think that multiple mutations are cumbersome and have a low success rate and affect the progress of the experiment. Thus we consulted Jinhai Huang. After the teacher\'s guidance, we optimized the protocol, and the success rate of the experiment has been greatly improved.',
        ]"
      ></text-with-image>
      <text-with-image
        sub-title="5.	Zhengfei Yan"
        :image-urls="['https://static.igem.wiki/teams/4627/wiki/hp/hp-10.jpg']"
      ></text-with-image>
      <text-with-image
        :text-content="[
          'He reviewed the literature and introduced us to the current situation of plastic pollution and suggested possible directions for treatment. ',
          'We interviewed Zhengfei Yan of Jiangnan University during the summer vacation, asking him about the current situation and prospects of bioenzyme methods in industry.',
        ]"
      ></text-with-image>
      <text-with-image
        sub-title="6.	senior schoolmates"
        :text-content="[
          'In the process of promoting the project, we often consulted senior brothers and sisters on some professional questions, and they helped us quickly understand relevant knowledge and optimize the project design. ',
        ]"
        :image-urls="['https://static.igem.wiki/teams/4627/wiki/hp/hp-11.png']"
      ></text-with-image>
      <text-with-image
        main-title="Enterprise"
        sub-title="1.	Tianjin Ringpu Bio-Technology Co., Ltd."
        :text-content="[
          'We visited the Bio-Airport branch of Tianjin Ringpu Bio-Technology Co., Ltd., understood the distribution and main business of its subsidiaries, learned the general situation and main projects of Ruipu Bio-Airport branch (front-end industries such as inactivated vaccines and genetic engineering).',
          'We interviewed the manager of Ripu Biology, learned about the application of PE in the vaccine industry, had a deep understanding of the application scenarios of our project, and made some clear future application plans for the goal of our project - improving the thermostability of PEase.',
        ]"
        :image-urls="['https://static.igem.wiki/teams/4627/wiki/hp/hp-12.jpg']"
      ></text-with-image>
      <text-with-image
        sub-title="2.	Tianjin Huaktai Biotechnology Co., LTD"
        :text-content="[
          'We visit the testing room, raw material product storage room, product development office laboratory and production workshop of Tianjin Huaktai Biotechnology Co., LTD. (we only observed the purification workshop outside due to cleanliness requirements). For consumables related to targeted immune testing, we understand that the application of PE is very wide, and most of them are one-time use, and the amount of waste is very large. Therefore, in the downstream of the industry, the processing of PE will become a big challenge, which is one of the future application goals of our project.',
        ]"
        :image-urls="['https://static.igem.wiki/teams/4627/wiki/hp/hp-13.jpg']"
      ></text-with-image>
      <text-with-image
        sub-title="3.	Tianjin Gold field medicine"
        :text-content="[
          'We wore protective clothing to visit the clinical immunization center, clinical laboratory center, clinical genome center and clinical pathology center of Tianjin Gold field medicine. We participated in the industry-university-research exchange meeting between the school and the enterprise, and interviewed the manager of Tianjin Gold field medicine. We learned that PE plastic was commonly used in nucleic acid testing and pathological testing packages in hospitals during the previous epidemic, and these disposable packages would produce a large amount of plastic waste.',
        ]"
        :image-urls="['https://static.igem.wiki/teams/4627/wiki/hp/hp-14.png']"
      ></text-with-image>
      <text-with-image
        sub-title="4.	Tasly Group"
        :text-content="[
          'We visited the industrial automation assembly line and research institute of two plants of Tasly Group. We learned that the use of plastics in manufacturing processes in the pharmaceutical industry is very common. After visiting we interviewed the person in charge of the production workshop and learned that workers are generally required to wear hair caps, shoe covers and gloves due to safety and aseptic production requirements, and these single-use plastic items are centrally processed but not recycled, which is a large source of plastic waste.',
        ]"
        :image-urls="['https://static.igem.wiki/teams/4627/wiki/hp/hp-15.jpg']"
      ></text-with-image>
      <text-with-image
        sub-title="5.	China urban and rural garbage classification planning exhibition center "
        :text-content="[
          'We visited China urban and rural garbage classification planning exhibition center and Tianjin Quantai Household waste treatment Co., LTD. We learned about the current daily garbage disposal volume in China and the current status of garbage sorting and recycling. We found that the proportion of discarded plastic bags in the landfill was high, so it was imperative to develop efficient and adaptable PE-degrading enzymes.',
        ]"
        :image-urls="['https://static.igem.wiki/teams/4627/wiki/hp/hp-16.jpg']"
      ></text-with-image>
      <text-with-image
        sub-title="6.	TEDA International Cardiovascular Hospital (TICH)"
        :text-content="[
          'During background investigation, we invite public officials (doctors from public hospitals) to adjust the overall direction of project development, ensuring that project research and development do not deviate, and that in the future, industrialized products can meet the main needs of the country and the world.',
        ]"
        :image-urls="['https://static.igem.wiki/teams/4627/wiki/hp/hp-17.jpg']"
      ></text-with-image>
      <text-with-image
        sub-title="7.	Tianjin Yinuo Plastic products Co., LTD"
        :text-content="[
          'During background investigation, we interview Tianjin Yinuo Plastic products Co., LTD. They told us that the use of PE material is mainly in the fields of food and chemical industry, in which the amount of PP material ranks first and the amount of PE material ranks second. Its market share is very large.',
        ]"
      ></text-with-image>
    </content-decorate>
  </div>
</template>

<script setup>
import TextWithImage from "@/components/text-with-image.vue";
import ContentDecorate from "@/components/content-decorate.vue";
const navigation = ["overview"];
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