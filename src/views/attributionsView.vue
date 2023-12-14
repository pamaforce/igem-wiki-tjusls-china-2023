<template>
    <div class="attributions">
        <h3 class="attributions_title">Introduction</h3>

        <p class="introduction_txt">Our team was established at Jan 10th, consisting of 18 Tianjin University students from different majors, leaded by two PIs and two instructors. With our joint efforts, although we encountered many difficulties during the project, all of the problems were able to solve in a timely manner and the team can get back on track.Besides, we have some sponsors and supporters. Thanks to all the schools, enterprises, and relevant professionals who have provided us with assistance.Here is our attribution form.</p>

        <h3 class="attributions_title">Team Member Contributions</h3>
        <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="name" label="Name" width="200" />
            <el-table-column prop="role" label="Role" width="200" />
            <el-table-column prop="general_tasks" label="General Tasks" />
            <el-table-column prop="specific_tasks" label="Specific Tasks" />
        </el-table>
        <h3 class="attributions_title">External Contributions</h3>
        <el-table :data="tableData2" stripe style="width: 100%">
            <el-table-column prop="name" label="Name" />
            <el-table-column prop="institution_type" label="Institution Type" />
            <el-table-column prop="relationship_to_team" label="Relationship to team" />
            <el-table-column prop="general_tasks" label="General Tasks" />
            <el-table-column prop="specific_tasks" label="Specific Tasks" />
        </el-table>
        <h3 class="attributions_title">Project Timeline</h3>
        <el-table :data="tableData3" stripe style="width: 100%">
            <el-table-column prop="project_activity" label="Project Activity" />
            <el-table-column prop="start_date" label="Start Date" />
            <el-table-column prop="end_date" label="End Date" />
            <el-table-column prop="total_time" label="Total Time (weeks)" />
        </el-table>
    </div>

</template>



<script setup>
const tableData = [
  {
    name: 'Zefang Wang',
    role: 'PI',
    general_tasks: 'Analysis, Conceptualization, Project Administration, Writing, Safety',
    specific_tasks: '(1) Analysis - helped us analyse data from different sources; (2) Conceptualization - helped us come up with the initial idea for the project; (3) Project Administration - managed activities, planning, and execution of the whole project; (4) Writing - reviewed our content for Wiki and other documents; (5) Safety - ensured our safety throughout the project.'
  },
  {
    name: 'Yunjie Xiao',
    role: 'PI',
    general_tasks: 'Analysis, Project Administration, Fundraising, Writing, Safety',
    specific_tasks: '(1) Analysis - helped us analyse data from different sources; (2) Project Administration - managed activities, planning, and execution of the whole project; (3) Fundraising - pull sponsorship to raise funds for the team( Monad Biotech) ; (4) Writing - reviewed our content for Wiki and other documents; (5) Safety - ensured our safety throughout the project.'
  },
  {
    name: 'Jin Jiahui',
    role: 'Instructors',
    general_tasks: 'Analysis, Conceptualization, Background Research, Investigation, Data Curation',
    specific_tasks: '(1) Analysis - helped us analyse data from different sources; (2) Conceptualization - helped us come up with the plan and details for the implementation of the project; (3) Background Reaserch - helped us collect and organize the literature related to the project and guided us to understand the related concepts; (4) Investigation - helped us sort out the experimental data related to the expression of C protein; (5) Data Curation - organized and saved the data of our project and continue to complete the relevant research.'
  },
  {
    name: 'Xinzhao Sun',
    role: 'Instructors',
    general_tasks: 'Analysis, Conceptualization, Investigation, Data Curation',
    specific_tasks: '(1) Analysis - helped us analyse data from different sources; (2) Conceptualization - helped us come up with the plan and details for the implementation of the project; (3) Investigation - helped us sort out the experimental data related to the expression of C protein; (4) Data Curation - organized and saved the data of our project and continue to complete the relevant research.'
  },
  {
    name: 'Shen Wang',
    role: 'Instructors',
    general_tasks: 'Analysis, Fundraising',
    specific_tasks: '(1) Analysis - helped us analyse data from different sources; (2) Fundraising - pulled sponsorship to raise funds for the team. '
  },
  {
    name: 'Yingjie Shen',
    role: 'Student Leaders',
    general_tasks: 'Analysis, Conceptualization, Background Research, Investigation, Data Curation, Notebook/record keeping, Project Administration, Fundraising, Public Engagement, Software, Visualization, Writing, Safety, Other',
    specific_tasks: '(1) Analysis - analysed data from different sources; (2) Conceptualization - came up with the plan and details for the implementation of the project; (3) Background Research - read relevant literature on PE and propose improvements to our project; (4) Investigation - participated in all experimental processes; (5) Data Curation - collected and processed data in the project; (6) Notebook/record keeping - arranged experimental tasks every day and collect notebooks from all of the members in experimental group; (7)  Project Administration - managed activities, planning, and execution of the whole project; (8)  Fundraising - pull sponsorship to raise funds for the team; (9) Public Engagement - participated in social activities organized by HP; (10) Software - used alphafold2 and other software to design mutants; (11) Visualization - designed posters, Wiki pages, team logos, team mascots, team uniforms, edited promotion videos, etc.; (12) Writing - participated in writing all parts of Wiki and checked the text that written by GPT-4; (13) Safety - ensured safety throughout the whole experiments; (14) Other - overall planning of the progress of each group in our team. '
  },
  {
    name: 'Weiwei Ji',
    role: 'Student Leaders',
    general_tasks: 'Analysis, Conceptualization, Background Research, Investigation, Data Curation, Notebook/record keeping, Project Administration, Fundraising, Public Engagement, Software, Visualization, Writing, Safety, Other',
    specific_tasks: '(1) Analysis - analysed data from different sources; (2) Conceptualization - came up with the plan and details for the implementation of the project; (3) Background Research - read relevant literature on PE and propose improvements to our project; (4) Investigation - participated in all experimental processes; (5) Data Curation - collected and processed data in the project; (6) Notebook/record keeping - arranged experimental tasks every day and collect notebooks from all of the members in experimental group; (7)  Project Administration - managed activities, planning, and execution of the whole project; (8)  Fundraising - pull sponsorship to raise funds for the team; (9) Public Engagement - participated in social activities organized by HP; (10) Software - used alphafold2 and other software to design mutants; (11) Visualization - designed posters, Wiki pages, team logos, team mascots, team uniforms, edited promotion videos, etc.; (12) Writing - participated in writing all parts of Wiki; (13) Safety - ensured safety throughout the whole experiments; (14) Other - assisted the captain to overall plan the progress of each group in our team. '
  },
  {
    name: 'Jiahao Wang',
    role: 'Student members',
    general_tasks: 'Analysis, Conceptualization, Background Research, Investigation, Data Curation, Notebook/record keeping, Public Engagement, Writing, Safety',
    specific_tasks: '(1) Analysis - analysed data from different sources in wet lab; (2) Conceptualization - came up with the plan and details for the implementation of the project; (3) Background Research - read relevant literature on PE and propose improvements to our project; (4) Investigation - conducted experiments related to protein purification; (5) Data Curation - collected and processed data related to protein purification, including desalination columns, protein gels, etc; (6) Notebook/record keeping - recorded daily experiments and summarize them into a notebook; (7) Public Engagement - participated in social activities organized by HP; (8) Writing - wrote experimental content in Wiki; (9) Safety - ensured safety throughout the whole experiments. '
  },
  {
    name: 'Yanru Liu',
    role: 'Student members',
    general_tasks: 'Analysis, Conceptualization, Background Research, Investigation, Data Curation, Notebook/record keeping, Public Engagement, Writing, Safety',
    specific_tasks: '(1) Analysis - analysed data from different sources in wet lab; (2) Conceptualization - came up with the plan and details for the implementation of the project; (3) Background Research - read relevant literature on PE and propose improvements to our project; (4) Investigation - conducted experiments related to cultivation of Escherichia coli and determination of Tm value of PEase; (5) Data Curation - collected and processed data related to Tm; (6) Notebook/record keeping - recorded daily experiments and summarize them into a notebook; (7) Public Engagement - participated in social activities organized by HP; (8) Writing - wrote experimental content in Wiki; (9) Safety - ensured safety throughout the whole experiments. '
  },
  {
    name: 'Cao Gang',
    role: 'Student members',
    general_tasks: 'Analysis, Conceptualization, Background Research, Investigation, Notebook/record keeping, Fundraising, Public Engagement, Writing, Safety',
    specific_tasks: '(1) Analysis - analysed data from different sources in wet lab; (2) Conceptualization - came up with the plan and details for the implementation of the project; (3) Background Research - read relevant literature on the nature of PE itself; (4) Investigation - conducted experiments related to construction of Mutants; (5) Notebook/record keeping - recorded daily experiments and organize all experimental steps; (6) Fundraising - pulled sponsorship to raise funds for the team; (7) Public Engagement - participated in social activities organized by HP; (8) Writing - wrote content about all experimental steps in Wiki; (9) Safety - ensured safety throughout the whole experiments. '
  },
  {
    name: 'Yao Lingfeng',
    role: 'Student members',
    general_tasks: 'Analysis, Conceptualization, Background Research, Investigation, Notebook/record keeping, Public Engagement, Writing, Safety',
    specific_tasks: '(1) Analysis - analysed data from different sources in wet lab; (2) Conceptualization - came up with the plan and details for the implementation of the project; (3) Background Research - read relevant literature on GC-MS and HPLC; (4) Investigation - conducted experiments related to cultivation of Escherichia coli; (5) Notebook/record keeping - recorded daily experiments and summarize them into a notebook; (6) Public Engagement - participated in social activities organized by HP; (7) Writing - wrote content about parts in Wiki; (8) Safety - ensured safety throughout the whole experiments. '
  },
  {
    name: 'Zhang Zhiyu',
    role: 'Student members',
    general_tasks: 'Analysis, Background Research, Investigation, Notebook/record keeping, Public Engagement, Writing, Safety',
    specific_tasks: '(1) Analysis - analysed data from different sources in wet lab; (2) Background Research - read relevant literature on preparation of NPE; (3) Investigation - conducted experiments related to cultivation of Escherichia coli; (4) Notebook/record keeping - recorded daily experiments and summarize them into a notebook; (5) Public Engagement - participated in social activities organized by HP; (6) Writing - wrote content about safety in Wiki; (7) Safety - ensured safety throughout the whole experiments. '
  },
  {
    name: 'Luan Chenyu',
    role: 'Student members',
    general_tasks: 'Analysis, Conceptualization, Background Research, Investigation, Data Curation, Notebook/record keeping, Fundraising, Public Engagement, Writing, Safety',
    specific_tasks: '(1) Analysis - analysed data from different sources in wet lab; (2) Conceptualization - came up with the plan and details for the implementation of the project; (3) Background Research - read relevant literature on determination of enzyme activity of PE; (4) Investigation - conducted experiments related to protein purification; (5) Data Curation - collected and processed data related to AKTA; (6) Notebook/record keeping - recorded daily experiments and summarize them into a notebook; (7) Fundraising - pulled sponsorship to raise funds for the team; (8) Public Engagement - participated in social activities organized by HP; (9) Writing - wrote content about wet lab in Wiki; (10) Safety - ensured safety throughout the whole experiments. '
  },
  {
    name: 'Jia He',
    role: 'Student members',
    general_tasks: 'Analysis, Conceptualization, Background Research, Data Curation, Software, Writing',
    specific_tasks: '(1) Analysis - analysed data from different sources in dry lab; (2) Conceptualization - came up with the plan and details for the implementation of the project; (3) Background Research - read relevant literature on PE and propose improvements to our project; (4) Data Curation - collected and used data to design new mutants; (5) Software - used foldx, alphafold2 and several different software to design mutants; (6) Writing - wrote design and modeling content in Wiki.'
  },
  {
    name: 'Xinnan Chen',
    role: 'Student members',
    general_tasks: 'Analysis, Background Research, Data Curation, Hardware, Software, Writing',
    specific_tasks: '(1) Analysis - analysed data from different sources in dry lab; (2) Background Research - read relevant literature on PE and propose improvements to our project; (3) Data Curation - collected and used data to design new mutants; (4) Hardware - designed and created some useful hardware to help completing expriments better; (5) Software - used foldx, alphafold2 and several different software to design mutants; (6) Writing - wrote modeling content in Wiki.'
  },
  {
    name: 'Liu Jinglu',
    role: 'Student members',
    general_tasks: 'Analysis, Background Research, Data Curation, Software, Wiki coding, Writing',
    specific_tasks: '(1) Analysis - analysed data from different sources in dry lab; (2)  Background Research - read relevant literature on PE and propose improvements to our project; (4) Data Curation - collected and used data to design new mutants; (5) Software - used foldx, alphafold2 and several different software to design mutants; (6) Wiki coding - Writing wiki code and upload to GitLab; (7) Writing - wrote design and modeling content in Wiki.'
  },
  {
    name: 'Jierui Lou',
    role: 'Student members',
    general_tasks: 'Background Research, Public Engagement, Wiki coding, Visualization, Writing',
    specific_tasks: '(1) Background Research -  fully understood the project and integrate it into the design; (2) Public Engagement - made a game to let more people know about our project; (3) Wiki coding - Writing wiki code and upload to GitLab; (4) Visualization - Converted Wiki from draft to code; (5) Writing - wrote game part in Wiki.'
  },
  {
    name: 'Xinyue Tang',
    role: 'Student members',
    general_tasks: 'Background Research, Wiki coding, Visualization',
    specific_tasks: '(1) Background Research -  fully understood the project and integrate it into the design; (2) Wiki coding - Writing wiki code and upload to GitLab; (3) Visualization - Converted Wiki from draft to code. '
  },
  {
    name: 'Hongwei Liu',
    role: 'Student members',
    general_tasks: 'Background Research, Wiki coding, Visualization, Writing',
    specific_tasks: '(1) Background Research -  fully understood the project and integrate it into the design; (2) Wiki coding - Writing wiki code and upload to GitLab; (3) Visualization - Converted web pages from draft to code; (4) Writing - wrote team members in Wiki.'
  },
  {
    name: 'Xujia Zhao',
    role: 'Student members',
    general_tasks: 'Background Research, Fundraising, Public Engagement, Visualization, Writing',
    specific_tasks: '(1) Background Research - read relevant literature on PE and propose improvements to our project; (2) Fundraising - pulled sponsorship to raise funds for the team; (3) Public Engagement - organized social activities to serve our project; (4) Visualization - participated in the design of team uniforms, display videos, etc; (5) Writing - wrote content about HP in Wiki.'
  },
  {
    name: 'Xuchen Liu',
    role: 'Student members',
    general_tasks: 'Conceptualization, Background Research, Fundraising, Public Engagement, Writing',
    specific_tasks: '(1) Conceptualization - came up with the plan and details for the implementation of the project; (2) Background Research - read relevant literature on PE and propose improvements to our project; (3) Fundraising - pulled sponsorship to raise funds for the team; (4) Public Engagement - organized social activities to serve our project; (5) Writing - wrote content about HP in Wiki.'
  },
  {
    name: 'Yihan Fan',
    role: 'Student members',
    general_tasks: 'Background Research, Public Engagement, Visualization',
    specific_tasks: '(1) Background Research - fully understood the project and integrate it into the design; (2) Public Engagement - participated in social activities organized by HP; (3) Visualization - designed posters, Wiki pages, team logos, team mascots, team uniforms, edited promotion videos, etc.'
  },
  {
    name: 'Zhao Yiding',
    role: 'Student members',
    general_tasks: 'Background Research, Visualization',
    specific_tasks: '(1) Background Research - fully understood the project and integrate it into the design; (2) Visualization - designed posters, Wiki pages, team logos, team mascots, team uniforms, edited promotion videos, etc.'
  },
  {
    name: 'Hangzhi Liu',
    role: 'Student members',
    general_tasks: 'Other',
    specific_tasks: 'He was a member of our team before, but withdrew due to physical reasons.'
  },
  {
    name: 'Yujia Xu',
    role: 'Student members',
    general_tasks: 'Other',
    specific_tasks: 'He was a member of our team before, but withdrew due to physical reasons.'
  },
  {
    name: 'Xiaoya Wang',
    role: 'Student members',
    general_tasks: 'Other',
    specific_tasks: 'He was a member of our team before, but withdrew due to physical reasons.'
  },
]
const tableData2 = [
  {
    name: 'Cheng Zhu',
    institution_type: 'Academic',
    relationship_to_team: 'External Advisor',
    general_tasks: 'Other',
    specific_tasks: 'Other - he explained to us the principles of the hydrophobic core and design 20 mutants with us. '
  },
  {
    name: 'Cheng Chen',
    institution_type: 'Academic',
    relationship_to_team: 'External Advisor',
    general_tasks: 'Visualization',
    specific_tasks: 'Visualization - he helped us with the interview part of the Team Project Promotion Video. '
  },
  {
    name: 'Jianchao Zhang',
    institution_type: 'Academic',
    relationship_to_team: 'External Advisor',
    general_tasks: 'Background Research, Entrepreneurship, Safety',
    specific_tasks: '(1) Background Research - he introduced the pollution of plastics to the environment and the process of natural degradation of plastics to us from a scientific point of view; (2) Entrepreneurship - he told us about the current application of biodegradation in the market and gave us suggestions for future implementation; (3) Safety - he told us the precautions of microbial culture. '
  },
  {
    name: 'Jinhai Huang',
    institution_type: 'Academic',
    relationship_to_team: 'External Advisor',
    general_tasks: 'Investigation',
    specific_tasks: 'Investigation - he gave us advice on molecular cloning.'
  },
  {
    name: 'Zhengfei Yan',
    institution_type: 'Academic',
    relationship_to_team: 'External Advisor',
    general_tasks: 'Background Research',
    specific_tasks: 'He reviewed the literature and introduced us to the current situation of plastic pollution and suggested possible directions for treatment.'
  },
  {
    name: 'Lingshan Ma',
    institution_type: 'Nonprofit',
    relationship_to_team: 'Collaborator',
    general_tasks: 'Collaborator',
    specific_tasks: 'He helped us draw our toddler books.'
  },
  {
    name: 'Sam Mens',
    institution_type: 'Other',
    relationship_to_team: 'External Advisor',
    general_tasks: 'Visualization',
    specific_tasks: 'Visualization - he is a student in TJU and helped us with the interview part of the Team Project Promotion Video. '
  },
  {
    name: 'Debate Team of Medical School of Tianjin University',
    institution_type: 'Other',
    relationship_to_team: 'Other',
    general_tasks: 'Public Engagement',
    specific_tasks: 'Other - they are a club of Medical School of Tianjin University; Public Engagement - they used our project as an example when debating with other team. '
  },
  {
    name: 'ChatGPT, version GPT-4 (from OpenAI)',
    institution_type: 'Industry',
    relationship_to_team: 'Contractor',
    general_tasks: 'Writing',
    specific_tasks: 'We used GPT-4 for the initial draft of writing our background and conclusion text. The references were verified and writing was fact-checked and edited by the team.'
  },
  {
    name: 'Monad Biotech Co., Ltd.',
    institution_type: 'Industry',
    relationship_to_team: 'Sponsor',
    general_tasks: 'Fundraising',
    specific_tasks: 'Awarded a grant to support our team.'
  },
  {
    name: 'BJEA-China',
    institution_type: 'Academic',
    relationship_to_team: 'Collaborator',
    general_tasks: 'Public Engagement',
    specific_tasks: 'We jointly planned and carried out activities related to the Begonia Festival in Tianjin University.'
  },
  {
    name: 'Tianjin Chest Hospital',
    institution_type: 'Government',
    relationship_to_team: 'External Advisor',
    general_tasks: 'Conceptualization',
    specific_tasks: 'They informed us about the current use and recycling of PE materials in the hospital, and gave suggestions for the practical application of our research.'
  },
  {
    name: 'TEDA International Cardiovascular Hospital (TICH)',
    institution_type: 'Government',
    relationship_to_team: 'External Advisor',
    general_tasks: 'Conceptualization',
    specific_tasks: 'They informed us about the current use and recycling of PE materials in the hospital, and gave suggestions for the practical application of our research.'
  },
  {
    name: 'Beiyang Medical Students Union of Tianjin University',
    institution_type: 'Other',
    relationship_to_team: 'Other',
    general_tasks: 'Public Engagement',
    specific_tasks: 'They helped us hold an offline event and share our ideas on their WeChat Official Account.'
  },
  {
    name: 'Beiyang supermarket',
    institution_type: 'Nonprofit',
    relationship_to_team: 'External Advisor',
    general_tasks: 'Investigation',
    specific_tasks: 'One of the staff told us about usage of plastic bags in supermarkets.'
  },
  {
    name: 'Tianjin Xinzhuang Middle School',
    institution_type: 'Nonprofit',
    relationship_to_team: 'External Advisor',
    general_tasks: 'Public Engagement',
    specific_tasks: 'They cooperated with us to complete the education in HP.'
  },
  {
    name: 'Tianjin Hami Road Primary School',
    institution_type: 'Nonprofit',
    relationship_to_team: 'Others',
    general_tasks: 'Public Engagement',
    specific_tasks: 'They cooperated with us to complete the education in HP.'
  },
  {
    name: 'Yunnan Fengyu No. 1 Middle School',
    institution_type: 'Nonprofit',
    relationship_to_team: 'Others',
    general_tasks: 'Public Engagement',
    specific_tasks: 'They cooperated with us to complete the education in HP.'
  },
  {
    name: 'Conference of China iGEMer Community(CCiC)',
    institution_type: 'Nonprofit',
    relationship_to_team: 'Collaborator',
    general_tasks: 'Public Engagement',
    specific_tasks: 'They helped us connect other iGEMers and organised round-table conference.'
  },
  {
    name: 'ZJUT-China',
    institution_type: 'Academic',
    relationship_to_team: 'Collaborator',
    general_tasks: 'Public Engagement',
    specific_tasks: 'They held a round-table conference and helped us deliver our iedas and outcome to more people.'
  },
  {
    name: 'Tasly Group',
    institution_type: 'Industry',
    relationship_to_team: 'External Advisor',
    general_tasks: 'Conceptualization',
    specific_tasks: 'They informed us about the current use and recycling of PE materials in pharmaceutical companies, and gave suggestions for the practical application of our research.'
  },
  {
    name: 'GenStar',
    institution_type: 'Industry',
    relationship_to_team: 'Contractor',
    general_tasks: 'Investigation',
    specific_tasks: 'Provided plasmid small extraction kit and agarose gel electrophoresis Recovery Kit.'
  },
  {
    name: 'Genewiz',
    institution_type: 'Industry',
    relationship_to_team: 'Contractor',
    general_tasks: 'Investigation',
    specific_tasks: 'Provided sequencing to the team.'
  },
  {
    name: 'China urban and rural garbage classification planning exhibition center',
    institution_type: 'Nonprofit',
    relationship_to_team: 'Others',
    general_tasks: 'Investigation',
    specific_tasks: 'Their staff explained the garbage sorting policy to us.'
  },
  {
    name: 'Tianjin Quantai Household waste treatment Co., LTD',
    institution_type: 'Industry',
    relationship_to_team: 'Others',
    general_tasks: 'Investigation',
    specific_tasks: 'They introduced to us the current ways of disposing of domestic waste.'
  },
  {
    name: 'Tianjin Ringpu Bio-Technology Co., Ltd.',
    institution_type: 'Industry',
    relationship_to_team: 'Others',
    general_tasks: 'Investigation',
    specific_tasks: 'Their staff took us on a tour of the lab and explained lab biosafety in detail.'
  },
  {
    name: 'Nanjing Bureau of Ecological Environment',
    institution_type: 'Government',
    relationship_to_team: 'Others',
    general_tasks: 'Investigation',
    specific_tasks: 'The government explained to us the policies related to the treatment of plastics.'
  },
  {
    name: 'Tianjin Yinuo Biotechnology Co., LTD',
    institution_type: 'Industry',
    relationship_to_team: 'Others',
    general_tasks: 'Investigation',
    specific_tasks: 'Manager Feng gave us a detailed introduction to the proportion of PE in plastic manufacturing and sales.'
  },
  {
    name: 'Tianjin Huaktai Biotechnology Co., LTD',
    institution_type: 'Industry',
    relationship_to_team: 'Others',
    general_tasks: 'Investigation',
    specific_tasks: 'Their staff gave us a tour. During the visit, we learned about the application market of PE in medical device manufacturing'
  },
  {
    name: 'Tianjin Gold field medicine',
    institution_type: 'Industry',
    relationship_to_team: 'Others',
    general_tasks: 'Investigation',
    specific_tasks: 'Their employees gave us a tour of the company and let us know about the use of PE in medical testing.'
  }
]
const tableData3 = [
  {
    project_activity: 'Recruit Team Members',
    start_date: '2022.11.1',
    end_date: '2023.1.10',
    total_time: '12'
  },
  {
    project_activity: 'Development of Project Plan',
    start_date: '2022.11.15',
    end_date: '2023.1.11',
    total_time: '8'
  },
  {
    project_activity: 'Wet Laboratory Activities',
    start_date: '2023.4.4',
    end_date: '2023.10.11',
    total_time: '32'
  },
  {
    project_activity: 'Dry Laboratory Activities',
    start_date: '2023.5.10',
    end_date: '2023.9.5',
    total_time: '21'
  },
  {
    project_activity: 'Building the Team Wiki',
    start_date: '2023.6.30',
    end_date: '2023.10.12',
    total_time: '18'
  }
]


</script>

<style scoped>
    /* div{
        float: left;
        padding: 1px;
    } */

    .introduction{
        float: left;
        margin: 0 10vw 0 10vw;
        font-size: 3vh;
        background-color: lightgrey;
        border-radius: 20px;
        padding: 5vh;
        text-indent: 4vw;
    }
    .introduction_txt{
      line-height: 30px;
      text-indent: 2em;
      font-size: 20px;
    }


    .title{
        margin-top: 10vh;
        height: 20vh;
        width: 100%;
        padding: 5vh;
        font-size: 15vh;
        text-align: center;
        font-weight:bold;
    }

    hr{
        width: 100%;
        float: left;
    }

    .SmallTitle{
        margin: 20vh 50vw 2vh 10vw;
        font-size: 10vh;
        border-radius: 20px;
        font-weight:bold;
    }
    
    table{
        width: 75vw;
    }

    .Name1{
        width: 10vw;
    }
    .Role{
        width: 10vw;
    }
    .GeneralTasks1{
        width: 15vw;
    }
    .SpecificTasks1{
        width: 39vw;
    }

    td{
        padding: 2vh;
    }

    .Name2{
        width: 15vw;
    }
    .InstitutionType{
        width: 11vw;
    }
    .RelationshipToTeam{
        width: 11vw;
    }
    .GeneralTasks2{
        width: 15vw;
    }
    .SpecificTasks2{
        width: 22vw;
    }
    .activity{
        width: 30vw;
    }
    .start{
        width: 15vw;
    }
    .end{
        width: 15vw;
    }
    .total{
        width: 15vw;
    }

</style>

<style scoped>
.attributions{
    width: 85%;
    margin: 0 auto;
}
.attributions_title{
    margin: 60px auto;
    font-size: 26px;
    color: rgba(46, 78, 126);
    text-align: center;
}
</style>