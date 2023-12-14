<template>
  <div class="main">
    <img
      src="https://static.igem.wiki/teams/4627/wiki/other-background.png"
      class="other-background"
    />
    <div class="page-title">Team Members</div>
    <div class="content-members">
      <p class="content-title">PI</p>
      <div class="content-avatars">
        <avatar-card
          :special="true"
          name="Zefang Wang"
          avatar="https://static.igem.wiki/teams/4627/wiki/team/members/zefang-wang.jpg"
          title="Primary PI"
          description="Professor in School of Life Sciences, provides us with a lot of suggestions and help from the beginning of the topic selection. Accompany us through all the projects."
        />
        <avatar-card
          :special="true"
          name="Yunjie Xiao"
          avatar="https://static.igem.wiki/teams/4627/wiki/team/members/yunjie-xiao.png"
          title="Secondary PI"
          description="Associate Researcher of Tianjin University, solves many problems we encountered in wet experiments, gives us a lot of help in the design process of experimental schemes and participate in human practice as a mentor."
        />
      </div>
      <p class="content-title">Instructor</p>
      <div class="content-avatars">
        <!-- <avatar-card
          :special="true"
          name="Shen Wang"
          avatar="https://static.igem.wiki/teams/4627/wiki/team/members/kun-wang.png"
          title="Team Instructor"
          description="Graduate student in School of Life Sciences with rich experimental skills and high experimental accomplishment. He gave us great help in the process of our experiment, including pointing out a number of laboratory safety that we should pay attention to and demonstrating standard experimental operations patiently."
        /> -->
        <avatar-card
          name="Jiahui Jin"
          avatar="https://static.igem.wiki/teams/4627/wiki/team/members/jiahui-jin.png"
          title="Team Instructor"
          description="She is a graduate student in the lab and works with us on PEase. She helps us a lot both in experiment and in life. We are not colleagues, but close friends!"
        />
        <avatar-card
          name="Xinzhao Sun"
          avatar="https://static.igem.wiki/teams/4627/wiki/team/members/xinzhao-sun.png"
          title="Team Instructor"
          description="He's a senior graduate student in this lab. He has a wealth of experience and helped us with many questions about the experiment."
        />
      </div>
      <p class="content-title">Team Leader</p>
      <div class="content-avatars">
        <avatar-card
          name="Yingjie Shen"
          avatar="https://static.igem.wiki/teams/4627/wiki/team/members/yingjie-shen.png"
          title="Team Leader"
          description="IGEM provides me with the opportunity to truly apply the knowledge I have learned to practical projects. I marvel at the wonder of Synthetic biology. As the team leader and head of wet lab, I have found a balance in continuous communication with teachers and team members. It's really a pleasure to watch TV dramas with my plush doll in arms after arranging all of the tasks！！！"
        />
        <avatar-card
          name="Weiwei Ji"
          avatar="https://static.igem.wiki/teams/4627/wiki/team/members/weiwei-ji.png"
          title="Team Leader"
          description="As the deputy leader of the TJUSLS-China team this year, I am mainly responsible for coordinating some matters within the team and planning the overall progress of the project. I am a vigorous activist and sometimes enliven the atmosphere of the laboratory and occasionally standardize some laboratory behaviors. During this competition, I developed my potential and find that I can do more than my thought. I also gained a group of partners who worked hard together, and had a clearer understanding of my future path."
        />
      </div>
      <p class="content-title">Team Members</p>
      <div class="content-avatars">
        <avatar-card
          name="Zhiyu Zhang"
          avatar="https://static.igem.wiki/teams/4627/wiki/team/members/zhiyu-zhang.png"
          title="Team Member"
          description="I am Zhang Zhiyu, a 2022 student from the School of Life Sciences of Tianjin University. As a member of the experimental group in the IGEM team, I love scientific research and have a strong interest in Synthetic biology. In the team, I am mainly responsible for cooperating with the modeling group to carry out experiments and participate in this IGEM competition. I hope I can accumulate more scientific research experience, learn the importance of cooperation in team work and learn more professional knowledge, Finally, I hope our team can achieve good results in this competition!"
        />
        <avatar-card
          name="Yihan Fan"
          avatar="https://static.igem.wiki/teams/4627/wiki/team/members/yihan-fan.png"
          title="Team Member"
          description='Yihan Fan, a student who transferred from chemical engineering to geography science and followed a microbiology-oriented mentor. However, he eventually became a graphic designer. "Deadline is the first productivity."'
        />
        <avatar-card
          name="Yiding Zhao"
          avatar="https://static.igem.wiki/teams/4627/wiki/team/members/yiding-zhao.png"
          title="Team Member"
          description="A contemporary college student, often tortured by design classes, from the School of Architecture at Tianjin University, is grateful to be able to paint here."
        />
        <avatar-card
          name="Yanru Liu"
          avatar="https://static.igem.wiki/teams/4627/wiki/team/members/yanru-liu.png"
          title="Team Member"
          description="Hi! I am Yanru Liu! I am a sophomore who is currently exploring an area of biological research that interests me. I like drawing, swimming and climbing mountains. I am more than delighted to participate in iGEM and work for a common goal with everyone. Salute!"
        />
        <avatar-card
          name="Xujia Zhao"
          avatar="https://static.igem.wiki/teams/4627/wiki/team/members/xujia-zhao.png"
          title="Team Member"
          description="I am Zhao Xujia, a student majoring in biological science ,responsible for part of HP work in TJUSLS_2023. My QQ number is: 3471401513, I am looking forward to meeting new friends. Thank you and good luck."
        />
        <avatar-card
          name="Xuchen Liu"
          avatar="https://static.igem.wiki/teams/4627/wiki/team/members/xuchen-liu.png"
          title="Team Member"
          description="I am studying in Medical College, Tianjin University and major in Clinical Medicine.I'm so proud of being a member of TJUSLS-China, working with my colleagues in Human Practice. Let's make TJUSLS still great!"
        />
        <avatar-card
          name="Xiyue Tang"
          avatar="https://static.igem.wiki/teams/4627/wiki/team/members/xiyue-tang.png"
          title="Team Member"
          description="I am a student of Tianjin University. As a member of the wiki group, I am delighted to participate in this competition, I hope to learn more from it and make progress together with everyone."
        />
        <avatar-card
          name="Xinnan Chen"
          avatar="https://static.igem.wiki/teams/4627/wiki/team/members/xinnan-chen.png"
          title="Team Member"
          description="This guy's mysterious. There's nothing left."
        />
        <avatar-card
          name="Lingfeng Yao"
          avatar="https://static.igem.wiki/teams/4627/wiki/team/members/lingfeng-yao.png"
          title="Team Member"
          description="Hello everyone, my name is Lingfeng Yao. Studying in Tianjin University with a major in biomedical engineering. During my time in school, I constantly expanded my knowledge base,actively participated in extracurricular activities,and strengthened my English speaking and writing abilities, as well as my communication and coordination skills."
        />
        <avatar-card
          name="Jinglu Liu"
          avatar="https://static.igem.wiki/teams/4627/wiki/team/members/jinglu-liu.png"
          title="Team Member"
          description="The world is unpredictable, confusing, complicated, and so am I."
        />
        <avatar-card
          name="Jierui Lou"
          avatar="https://static.igem.wiki/teams/4627/wiki/team/members/jierui-lou.png"
          title="Team Member"
          description="My name is Lou Jierui, and my job is to write wikis and related software."
        />
        <avatar-card
          name="Jiahao Wang"
          avatar="https://static.igem.wiki/teams/4627/wiki/team/members/jiahao-wang.png"
          title="Team Member"
          description='Hello, iGEM 2023. I am Jiahao Wang from the School of Pharmaceutical Science and Technology of Tianjin University. Because I received several years of art training as a child, I have a deeper understanding of the beauty of structures, which may be the reason why I love structural biology so much. Oh yeah, my favorite singer is Juice WRLD, like I amm listening to "Hard Work Pays Off" right now.'
        />
        <avatar-card
          name="Jia He"
          avatar="https://static.igem.wiki/teams/4627/wiki/team/members/jia-he.png"
          title="Team Member"
          description="I am studying in Tianjin University and major in biomedical engineering.I'm glad to join TJUSLS_China as a member of model group and I hope our project will turn out well."
        />
        <avatar-card
          name="Hongwei Liu"
          avatar="https://static.igem.wiki/teams/4627/wiki/team/members/hongwei-liu.png"
          title="Team Member"
          description="My name is Liu Hongwei, and my major is Cybersecurity. I serve as a frontend developer in the TJUSLS-China team. I am passionate about frontend development, and I am extremely honored to work with such a talented group of team members."
        />
        <avatar-card
          name="Gang Cao"
          avatar="https://static.igem.wiki/teams/4627/wiki/team/members/gang-cao.png"
          title="Team Member"
          description="Hi there! I'm Cao Gang, an enthusiastic undergraduate from TJU. Passionate about life sciences, I pursued a major in bioscience in 2022 and a deep participation in iGEM team TJUSLS-CHINA in 2023. Throughout my journey here, I've gained a lot, waiting for further exploration in the realm of life sciences research!"
        />
        <avatar-card
          name="Chenyu Luan"
          avatar="https://static.igem.wiki/teams/4627/wiki/team/members/chenyu-luan.png"
          title="Team Member"
          description="Hello everyone, my name is Luan Chenyu. I am passionate about protein construction, expression, and purification, and I love life sciences. I hope to improve myself in my future research work."
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import AvatarCard from "@/components/avatar-card.vue";
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
.content-members {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
}
.content-title {
  font-size: 40px;
  font-weight: 40px;
  margin-bottom: 50px;
}
.content-avatars {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 60px;
}
</style>