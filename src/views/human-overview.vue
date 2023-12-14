<!--tang--><template>
        <div class="main">
          <img
            src="https://static.igem.wiki/teams/4627/wiki/other-background.png"
            class="other-background"
          />
          <div class="page-title">Overview</div>
          
          <content-decorate style="margin-top: -20vh" :navigation="navigation">
            <text-with-image
              :image-urls="['https://static.igem.wiki/teams/4627/wiki/hp.png']"
              main-title="Overview"
              aid="overview"
            ></text-with-image>
            <text-with-image
              :text-content="[
                'According to the statistics, over 200 million tons of plastic waste are produced globally every year, with PE plastic pollution accounting for 69% of white pollution. PE is widely used in every aspects of life. However, the mismatch between high production and low recovery rates has led to the accumulation of pollutants. Therefore, it is urgent to find a method to treat PE plastics.',
              ]"
            ></text-with-image>
            <text-with-image
              :text-content="[
                'PEase is the only enzyme newly discovered in recent years that can oxidize polyethylene. So it has great potential value. However, thermostability of wild-type PEase is low, making it difficult to achieve efficient degradation. So this year, we draw on the experience of previous years and read extensive previous work and papers. We focus on improving thermostability of PEase through directed evolution. We believe that PEase will brought incalculable benefits in environmental, economic, and management fields in the future.',
              ]"
            ></text-with-image>
            <text-with-image
              :text-content="[
                'During the overall implementation of our project, we gained a comprehensive understanding of the entire life cycle of PE from various aspects such as companies, governments, and residents. We visited relevant enterprises and individuals in plastic production, recycling and treatment, and investigated the use of PE plastics in the market. In addition, we contacted and interviewed experts and scholars related to biology or environment to discuss principles of plastic decomposition, mutant and experimental design, environmental protection, etc. We integrated their opinions and suggestions into our project, hoping to guide the implementation of our project. We had the honor to communicate with government personnel of the Ecological Environment Bureau and learn more about current national policies on plastic pollution control. This has important guiding significance for us in the future.',
              ]"
            ></text-with-image>
            <text-with-image
              :text-content="[
                'At the same time, we maintained cooperation and exchange with regional organizations and multiple universities, such as roundtable discussions, visits, online exchanges, and many other means. In order to promote synthetic biology to a larger audience, we conducted large-scale offline promotional activities, produced games, children’s picture book and introduction videos, and distributed questionnaires for surveys. We hoped to shared what we have learned in an easy to understand way, so that layman can also participate. In addition, we used Tiktok short video, WeChat public platform, friends circle and other popular ways to publicize and record the progress of our project, hoping that people can understand the cutting-edge progress of synthetic biology more intuitively. Interestingly, debate team in our school took note of our project. We were very glad to start a debate on synthenic biology with them. ',
              ]"
            ></text-with-image>
            <text-with-image
              :text-content="[
                'Finally, we summarized the information obtained from various activities, which proved the significance and value of HP guiding the whole project. In the process of our activities, we have received participation and guidance from people at all levels of government, school, college and society. We are able to ensure the safety of participants’ personal health, private information, etc.',
              ]"
            ></text-with-image>
          </content-decorate>
        </div>
      </template>
      
      <script setup>
      import TextWithImage from "@/components/text-with-image.vue";
      import ContentDecorate from "@/components/content-decorate.vue";
      const navigation = []
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
      </style>
