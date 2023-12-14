<template>
  <div class="main">
    <img
      src="https://static.igem.wiki/teams/4627/wiki/other-background.png"
      class="other-background"
    />
    <div class="page-title">Human Practice</div>
    <content-decorate style="margin-top: -20vh" :navigation="navigation">
      <!-- nav -->
      <div class="blobmenu">
        <div
          class="blobmenu-item"
          :class="pageType == 'integrated' ? 'active' : ''"
          @click="handleBlobmenu('integrated')"
        >
          <p class="blobicon">Human Practices</p>
        </div>
        <div
          class="blobmenu-item"
          :class="pageType == 'best' ? 'active' : ''"
          @click="handleBlobmenu('best')"
        >
          <p class="blobicon">Best Integrated Human Practices</p>
        </div>
        <div
          class="blobmenu-border"
          :style="
            pageType == 'integrated'
              ? 'transform: translate(-50%, 0px)'
              : 'transform: translate(50%, 0px)'
          "
        ></div>
      </div>
      <div class="svg-container">
        <svg viewBox="0 0 202.9 45.5">
          <clipPath
            id="blobpath"
            clipPathUnits="objectBoundingBox"
            transform="scale(0.0049285362247413 0.021978021978022)"
          >
            <path
              d="M.81.84c44.62,0,42.58,42.92,100.64,42.92S160.05.84,201.89.84Z"
            ></path>
          </clipPath>
        </svg>
      </div>
      <!-- container -->
      <div class="integrated_page" v-if="pageType == 'integrated'">
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
        <text-with-image
          main-title="Government"
          aid="Government"
          :image-urls="['https://static.igem.wiki/teams/4627/wiki/hp/hp-1.png']"
        ></text-with-image>
        <text-with-image
          :text-content="[
            'When we were thinking about the future feasibility of the project, we interviewed civil servants Nanjing Bureau of Ecological Environment. He told us that the current control of plastic pollution is an area of great importance to the state. The relevant policies have been gradually improved to solve problems from three aspects: source, technology and society, and will finally enhance the happiness of the people.',
          ]"
        ></text-with-image>
        <text-with-image
          main-title="Interview"
          aid="Interview"
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
          :image-urls="[
            'https://static.igem.wiki/teams/4627/wiki/ZhengfeiYan.png',
          ]"
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
          :image-urls="[
            'https://static.igem.wiki/teams/4627/wiki/hp/hp-11.png',
          ]"
        ></text-with-image>
        <text-with-image
          main-title="Enterprise"
          aid="Enterprise"
          sub-title="1.	Tianjin Ringpu Bio-Technology Co., Ltd."
          :text-content="[
            'We visited the Bio-Airport branch of Tianjin Ringpu Bio-Technology Co., Ltd., understood the distribution and main business of its subsidiaries, learned the general situation and main projects of Ruipu Bio-Airport branch (front-end industries such as inactivated vaccines and genetic engineering).',
            'We interviewed the manager of Ripu Biology, learned about the application of PE in the vaccine industry, had a deep understanding of the application scenarios of our project, and made some clear future application plans for the goal of our project - improving the thermostability of PEase.',
          ]"
          :image-urls="[
            'https://static.igem.wiki/teams/4627/wiki/hp/hp-12.jpg',
          ]"
        ></text-with-image>
        <text-with-image
          sub-title="2.	Tianjin Huaktai Biotechnology Co., LTD"
          :text-content="[
            'We visit the testing room, raw material product storage room, product development office laboratory and production workshop of Tianjin Huaktai Biotechnology Co., LTD. (we only observed the purification workshop outside due to cleanliness requirements). For consumables related to targeted immune testing, we understand that the application of PE is very wide, and most of them are one-time use, and the amount of waste is very large. Therefore, in the downstream of the industry, the processing of PE will become a big challenge, which is one of the future application goals of our project.',
          ]"
          :image-urls="[
            'https://static.igem.wiki/teams/4627/wiki/hp/hp-13.jpg',
          ]"
        ></text-with-image>
        <text-with-image
          sub-title="3.	Tianjin Gold field medicine"
          :text-content="[
            'We wore protective clothing to visit the clinical immunization center, clinical laboratory center, clinical genome center and clinical pathology center of Tianjin Gold field medicine. We participated in the industry-university-research exchange meeting between the school and the enterprise, and interviewed the manager of Tianjin Gold field medicine. We learned that PE plastic was commonly used in nucleic acid testing and pathological testing packages in hospitals during the previous epidemic, and these disposable packages would produce a large amount of plastic waste.',
          ]"
          :image-urls="[
            'https://static.igem.wiki/teams/4627/wiki/hp/hp-14.png',
          ]"
        ></text-with-image>
        <text-with-image
          sub-title="4.	Tasly Group"
          :text-content="[
            'We visited the industrial automation assembly line and research institute of two plants of Tasly Group. We learned that the use of plastics in manufacturing processes in the pharmaceutical industry is very common. After visiting we interviewed the person in charge of the production workshop and learned that workers are generally required to wear hair caps, shoe covers and gloves due to safety and aseptic production requirements, and these single-use plastic items are centrally processed but not recycled, which is a large source of plastic waste.',
          ]"
          :image-urls="[
            'https://static.igem.wiki/teams/4627/wiki/hp/hp-15.jpg',
          ]"
        ></text-with-image>
        <text-with-image
          sub-title="5.	China urban and rural garbage classification planning exhibition center "
          :text-content="[
            'We visited China urban and rural garbage classification planning exhibition center and Tianjin Quantai Household waste treatment Co., LTD. We learned about the current daily garbage disposal volume in China and the current status of garbage sorting and recycling. We found that the proportion of discarded plastic bags in the landfill was high, so it was imperative to develop efficient and adaptable PE-degrading enzymes.',
          ]"
          :image-urls="[
            'https://static.igem.wiki/teams/4627/wiki/hp/hp-16.jpg',
          ]"
        ></text-with-image>
        <text-with-image
          sub-title="6.	TEDA International Cardiovascular Hospital (TICH)"
          :text-content="[
            'During background investigation, we invite public officials (doctors from public hospitals) to adjust the overall direction of project development, ensuring that project research and development do not deviate, and that in the future, industrialized products can meet the main needs of the country and the world.',
          ]"
          :image-urls="[
            'https://static.igem.wiki/teams/4627/wiki/hp/hp-17.jpg',
          ]"
        ></text-with-image>
        <text-with-image
          sub-title="7.	Tianjin Yinuo Plastic products Co., LTD"
          :text-content="[
            'During background investigation, we interview Tianjin Yinuo Plastic products Co., LTD. They told us that the use of PE material is mainly in the fields of food and chemical industry, in which the amount of PP material ranks first and the amount of PE material ranks second. Its market share is very large.',
          ]"
        ></text-with-image>
      </div>
      <div class="best_page" v-if="pageType == 'best'">
        <h2>Building Enzyme Strategies to Tackle PE Pollution</h2>
        <text-with-image
          main-title="Overview"
          aid="Overview"
          :text-content="[
            `Polyethylene (PE), a ubiquitous material in our lives, faces disposal challenges like landfilling or incineration. The public's limited understanding of biodegradation methods hinders scientists. Our Human Practice (HP) bridges this gap, sharing project info with students and society. Educational events from elementary to university levels and online presence, like the Begonia Festival and TikTok, engage diverse audiences in synthetic biology.`,
            `Our Human Practice extends to interviews with alumni and professionals, shaping our project practically. Visits to hospitals and bio-pharmaceutical companies inform us of daily waste production and potential collaborations. This hands-on approach aligns our project with medical and industrial realities.`,
            `Initiatives also include debates, fostering discussions on plastic's environmental impact. We've created educational storybooks simplifying synthetic biology for younger audiences, blending creativity with science. Through these initiatives, we aim to advance scientific knowledge and ensure our innovations benefit society.`,
          ]"
        ></text-with-image>
        <text-with-image
          :image-urls="['https://static.igem.wiki/teams/4627/wiki/best-1.png']"
        ></text-with-image>
        <text-with-image
          main-title="Innovative Design in Comprehensive HP"
          aid="HP"
          :text-content="[
            `Our HP design embodies strong innovation through the application of diverse methods, deepening the research process and broadening the societal reach of the project. In the preparation process of this year's project, the Human Practice work of the tjusls-China team has become increasingly systematic. The team has gradually formed a 'BEST' system based on past years' experience, which means that the entire human practice work, related to every parts of the projrct, forms a closed loop after Brainstorming (B), Engineering (E), Synthesis (S) and Testing (T). As a result, the team's work has been elevated.`,
          ]"
        ></text-with-image>
        <text-with-image
          :image-urls="['https://static.igem.wiki/teams/4627/wiki/best-2.png']"
        ></text-with-image>
        <text-with-image
          sub-title="Utilization of Diverse Research Methods"
          :text-content="[
            'Our HP design extends beyond conventional surveys and face-to-face interviews by incorporating various methods. Through interviews, surveys, social media promotion, teaching, and the creation of picture books, we have expanded channels for information collection and dissemination, resulting in more comprehensive and socially engaged research.',
          ]"
        ></text-with-image>
        <text-with-image
          sub-title="Harnessing the Power of Social Media"
          :text-content="[
            `By utilizing platforms like WeChat and TikTok, we've effectively disseminated project information to a broader audience. This digital promotional strategy increases information accessibility and extends the project's reach within social networks, setting it apart from traditional research team practices.`,
          ]"
        ></text-with-image>
        <text-with-image
          sub-title="Science Communication for Children"
          :text-content="[
            `Our creation of children's picture books, teaching initiatives, and participation in school activities have introduced scientific knowledge from the project to preschool children. This not only provides an engaging path for scientific enlightenment for the next generation but also represents an innovative approach to making research results more accessible to society.`,
          ]"
        ></text-with-image>
        <text-with-image
          sub-title="Teaching and Community Interaction"
          :text-content="[
            `Teaching is more than knowledge transfer; it is also an innovative form of community interaction. By directly engaging in school education, we better understand community needs and integrate the community into our project. This interaction provides more feedback from practical application scenarios.`,
          ]"
        ></text-with-image>
        <text-with-image
          sub-title="Conclusion"
          :text-content="[
            `Our HP design vividly showcases our team's commitment to innovation. Through diverse research methods, the application of social media, science communication for children, and teaching and community interaction, we ensure that our research results do not remain confined to academia but become widely discussed topics in society. This innovative design not only increases the project's influence but also offers valuable experiences for other research teams.`,
          ]"
        ></text-with-image>
        <text-with-image
          main-title="Comprehensive Human Practice (HP) with a Broad Audience Scope"
          aid="Practice"
          :text-content="[
            `Our Comprehensive Human Practice (HP) initiatives reflect a profound concern for a diverse audience, underscoring our team's comprehensive grasp of societal contexts.`,
          ]"
        ></text-with-image>
        <text-with-image
          sub-title="Engagement in Academic and Professional Fields"
          :text-content="[
            `Our team has engaged in insightful conversations with senior students and received guidance from esteemed professors, enriching our understanding of project technology and practice. This engagement expanded our academic horizons and enhanced the scientific and practical dimensions of our project.`,
          ]"
        ></text-with-image>
        <text-with-image
          sub-title="Exploration of Industry and Enterprises"
          :text-content="[
            `In-depth research with biopharmaceutical companies and hospitals has provided us with a profound comprehension of plastic waste generation in daily production and operational processes. This not only supplied vital information for the project's application but also heightened the practicality of our project solutions.`,
          ]"
        ></text-with-image>
        <text-with-image
          sub-title="Community Outreach and Engagement"
          :text-content="[
            `We designed surveys, conducted interviews at local supermarkets, and created children's picture books to extend our outreach to the community and the general public. This public engagement not only enhances the project's social impact but also yields direct societal feedback.`,
          ]"
        ></text-with-image>
        <text-with-image
          sub-title="Collaboration with Government and Environmental Agencies"
          :text-content="[
            `Collaborating with local government environmental departments has demonstrated our focus on policies and environmental protection. This not only bolsters the project's feasibility at the policy level but also ensures recognition and sustainability in society.`,
          ]"
        ></text-with-image>
        <text-with-image
          sub-title="Involvement in Schools and the Education Sector"
          :text-content="[
            `Through teaching at middle and primary schools, educational initiatives, and participation in school events such as the Begonia Festival, seminars, and debates, we've successfully conveyed information about the project to students and educators. This positively influences the cultivation of interest and understanding in synthetic biology and promotes scientific literacy.`,
          ]"
        ></text-with-image>
        <text-with-image
          sub-title="Effective Use of Social Media Platforms"
          :text-content="[
            `We've leveraged platforms such as WeChat and TikTok to disseminate information to a wider audience. This digital approach has increased the accessibility of information and expanded the project's reach within social networks.`,
          ]"
        ></text-with-image>
        <text-with-image
          sub-title="Conclusion:"
          :text-content="[
            `Our comprehensive Human Practice spans multiple fields and levels, connecting our project with diverse audiences. It showcases our team's profound understanding of societal issues, enhancing the project's social impact and providing diverse perspectives`,
          ]"
        ></text-with-image>
        <text-with-image
          main-title="The Guiding Role of Comprehensive HP in Projects and Experiments"
          aid="Experiments"
          :text-content="[
            `Our HP serves as a means of information acquisition and substantial guidance and inspiration for projects and experiments. Through interactions with individuals from different fields, we have gained valuable advice and guidance for our project.`,
          ]"
        ></text-with-image>
        <text-with-image
          sub-title="Effective Communication with Senior Students and Professors"
          :text-content="[
            `Interactions with senior students and professors provide direct guidance for project technology and practice. This experience sharing and professional guidance enhance the project's scientific and practical aspects, offering substantial support for the project's technical direction.`,
          ]"
        ></text-with-image>
        <text-with-image
          sub-title="Collaboration with Businesses and Hospitals"
          :text-content="[
            `Through in-depth discussions with biopharmaceutical companies and hospitals, we not only understand the generation of waste but also gain practical suggestions regarding plastic waste management and degradation. This valuable experience contributes to the practicality of the project's application and solutions.`,
          ]"
        ></text-with-image>
        <text-with-image
          sub-title="Engagement with Government Environmental Departments"
          :text-content="[
            `Communication with government environmental departments focuses not only on the project's scientific aspects but also on its societal and environmental impact. Obtaining advice and support from government departments enhances the project's feasibility and sustainability at the policy level.`,
          ]"
        ></text-with-image>
        <text-with-image
          sub-title="Interactions with Other Teams"
          :text-content="[
            `Interactions with other teams aim to gain experiences and knowledge and to promote the expansion and optimization of project ideas. This interdisciplinary collaboration allows the project to receive feedback from different perspectives, aiding in its comprehensive and in-depth development.`,
          ]"
        ></text-with-image>
        <text-with-image
          sub-title="Conclusion"
          :text-content="[
            `Our HP serves not only to understand the current state of society but also to guide the direction of the project. Through interactions with individuals from different levels, we gain substantial advice and support, aligning the project more closely with societal needs and enhancing its feasibility and practical application value. This kind of HP positively propels the project's scientific, societal, and feasibility aspects.`,
          ]"
        ></text-with-image>
        <text-with-image
          main-title="The Impact of Comprehensive HP on Society, the Environment, and People"
          aid="Effect"
          :text-content="[
            `Our HP design aims not only to implement scientific projects but also to have a positive impact on society, the environment, and individuals. Through various forms of communication and engagement, we ensure that the project's societal impact is far-reaching.`,
          ]"
        ></text-with-image>
        <text-with-image
          sub-title="Positive Social Impact"
          :text-content="[
            `By participating in events like the Begonia Festival, seminars, debates, and other social activities, we have successfully promoted the project across different societal levels. This active involvement in social activities not only increases the project's visibility but also hig`,
          ]"
        ></text-with-image>
        <text-with-image
          sub-title="Environmental Impact"
          :text-content="[
            `Collaboration with government environmental departments has led to a deeper consideration of environmental issues in the project. Understanding waste management policies and receiving environmental advice ensures that the project aligns more closely with environmental protection and sustainable development principles, resulting in a positive impact on the environment.`,
          ]"
        ></text-with-image>
        <text-with-image
          sub-title="Influence on People"
          :text-content="[
            `Teaching, creating children's picture books, participating in school activities, and using social media for promotion have allowed us to disseminate scientific knowledge beyond academia and into the minds of students and children. This not only nurtures interest in science but also lays the foundation for future scientists. Additionally, through social media promotion, we inspire and guide more individuals, making a positive impact on individuals.`,
          ]"
        ></text-with-image>
        <text-with-image
          sub-title="Conclusion"
          :text-content="[
            `Our HP, through active involvement in society, attention to environmental issues, and education and inspiration of people in science, demonstrates our concern and influence on society, the environment, and individuals. This impact goes beyond the project level, sparking reflection and concern for science and environmental issues in society.`,
          ]"
        ></text-with-image>
        <text-with-image
          main-title="The Potential Profound Impact on Other Teams of Comprehensive HP in Design and Execution"
          aid="Impact"
        ></text-with-image>
        <text-with-image
          sub-title="Digital Social Media Promotion"
          :text-content="[
            `Other teams may be inspired to utilize more digital methods and leverage social media to increase project exposure and attract more attention.`,
          ]"
        ></text-with-image>
        <text-with-image
          sub-title="Science Communication for Children"
          :text-content="[
            `Other teams may recognize the importance of science communication for children in science dissemination and may attempt similar educational activities.`,
          ]"
        ></text-with-image>
        <text-with-image
          sub-title="Diverse Forms of Social Engagement"
          :text-content="[
            `Other teams may be encouraged to think about how to integrate more broadly into society, making their projects.Attachments: what we do in the whole Human Practice`,
          ]"
        ></text-with-image>
      </div>
    </content-decorate>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TextWithImage from "@/components/text-with-image.vue";
import ContentDecorate from "@/components/content-decorate.vue";
const navigation = [];
const pageType = ref("integrated");
const handleBlobmenu = (res) => {
  console.log(res);
  pageType.value = res;
};
</script>

<style scoped>
.integrated_page img,
.best_page img {
  width: 60% !important;
}
.blobmenu-border {
  background-color: #1c2540;
  bottom: -58.3%;
  -webkit-clip-path: url(#blobpath);
  clip-path: url(#blobpath);
  height: 60%;
  position: absolute;
  transition: all 0.25s ease-in-out;
  width: 50%;
}
.svg-container {
  height: 0;
  margin: 2.5%;
  width: 0;
}
.blobmenu {
  background-color: #1c2540;
  display: flex;
  flex-wrap: wrap;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  justify-content: space-evenly;
  margin: 2% auto;
  position: relative;
  width: 100%;
}
.blobmenu-item {
  background-color: #1c2540;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  margin: 1%;
  transition: all 0.25s ease-in-out;
  width: 48%;
}
.blobicon {
  border-radius: 0.5rem;
  color: #fff;
  font-family: Source Sans Pro;
  font-weight: 900;
  margin: auto;
  padding: 3%;
  text-align: center;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
}
.blobmenu-item.active {
  background-color: #88aed0;
  transition: all 0.25s ease-in-out;
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