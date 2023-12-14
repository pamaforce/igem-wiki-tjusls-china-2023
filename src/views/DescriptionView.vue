<template>
  <div class="main">
    <img
      src="https://static.igem.wiki/teams/4627/wiki/other-background.png"
      class="other-background"
    />
    <div class="page-title">Description</div>
    <content-decorate style="margin-top: -20vh" :navigation="navigation">
      <TextWithImage
        mainTitle="OverView"
        aid="overview"
        :textContent="textContent1"
      ></TextWithImage>
      <TextWithImage
        mainTitle="BACKGROUND"
        aid="background"
        :textContent="textContent2"
        :imageUrls="['https://static.igem.wiki/teams/4627/wiki/des-1.png']"
      ></TextWithImage>
      <TextWithImage
        :textContent="textContent3"
        :imageUrls="[
          'https://static.igem.wiki/teams/4627/wiki/phy-and-che.png',
        ]"
      ></TextWithImage>
      <TextWithImage
        :textContent="textContent4"
        :imageUrls="[
          'https://static.igem.wiki/teams/4627/wiki/pe-decrease.png',
        ]"
      ></TextWithImage>
      <TextWithImage
        :textContent="textContent5"
        :imageUrls="['https://static.igem.wiki/teams/4627/wiki/success.png']"
      ></TextWithImage>
      <TextWithImage
        mainTitle="INSPIRATION"
        aid="inspiration"
        :textContent="textContent6"
      ></TextWithImage>
      <text-with-image
        mainTitle="METHODS"
        aid="methods"
        :textContent="[
          'Based on literature materials, we learned four methods to improve the thermostability of enzymes, disulfide bond, salt bridge, hydrophobic cores, flexible sites.',
        ]"
        :imageUrls="[
          'https://static.igem.wiki/teams/4627/wiki/four-options.png',
        ]"
      ></text-with-image>
      <text-with-image
        :textContent="[
          'Firstly, protein structure visualization software such as PyMOL was used to analyze the unstable regions of PEase, and the corresponding sites were searched for point mutations.  In addition, according to hydrophobic cores, we calculated through RosettaDesign framework, identifying and improving hydrophobically packed protein cores by selecting a series of stabilizing point mutations. Then, protein structure prediction and analysis software such as AlphaFold2 and FoldX were used to evaluate the thermostability of the constructed mutants.',
          'After rational design with four schemes, thousands of mutants were constructed. We superimposed the mutation sites in each round and calculated their theoretical thermostability. We hope to achieve better results by changing multiple mutational site at the same time, and obtain mutants with significantly improved thermostability.',
          'Next, we selected 56 mutants for experimental validation. First, we found the most suitable plasmid vectors for Ceres and demetra respectively through pre experiment and used them in subsequent experiments. Then, we realized the construction of all mutant particles by seamless cloning. The correctly sequenced plasmid was transformed into E. coli BL21, and then expanded and induced to express PEase.',
          'In order to obtain pure protein, we used affinity chromatography and tried to use ion exchange and molecular sieve for protein purification. Finally, Tm of PEase was measured by DSF, and the data were compared with wild type PEase to determine the thermostability of the mutant.',
          'After obtaining good mutants, we also evaluated and verified the mutants by combining structural screening and molecular simulation technology, thus realizing the closed loop of design, build, test and learn.',
        ]"
        :imageUrls="[
          'https://static.igem.wiki/teams/4627/wiki/lab-operation.png',
        ]"
      ></text-with-image>
      <text-with-image
        mainTitle="FUTURE PERISPECTIVE"
        aid="future-perspective"
        :textContent="[
          'We hope to improve the environmental adaptability of PEase by improving its thermostability. And in future, increase of catalytic efficiency is expected to accelerate industrial application of PE biodegradation, which will greatly reduce the environmental pollution and energy consumption caused by physical and chemical methods. In addition, we know that PETase is able to be applied at 55 °C with high catalytic efficiency[9]. The improved thermostability of PEase may lay the foundation for achieving  joint action of various plastic degrading enzymes.',
        ]"
      ></text-with-image>
      <text-with-image
        mainTitle="REFERENCE"
        aid="reference"
        :textContent="[
          '[1] Harshvardhan K, Jha B. Biodegradation of low-density polyethylene by marine bacteria from pelagic waters, Arabian Sea, India. Mar Pollut Bull. 2013 Dec 15;77(1-2):100-6. doi: 10.1016/j.marpolbul.2013.10.025. Epub 2013 Nov 7. PMID: 24210946. ',
          '[2] Álvarez-Hernández C, Cairós C, López-Darias J, Mazzetti E, Hernández-Sánchez C, González-Sálamo J, Hernández-Borges J. Microplastic debris in beaches of Tenerife (Canary Islands, Spain). Mar Pollut Bull. 2019 Sep;146:26-32. doi: 10.1016/j.marpolbul.2019.05.064. Epub 2019 Jun 5. PMID: 31426155',
          '[3] Zhang Jinqing, Guo Ming, Zhang Yuanwen, Lin Han, Zhang Xingong. Research progress on cracking waste polyethylene plastics to produce fuel [J]. Petrochemical Technology, 2022,29 (10): 16-18.',
          '[4] Sanluis-Verdes A, Colomer-Vidal P, Rodriguez-Ventura F, Bello-Villarino M, Spinola-Amilibia M, Ruiz-Lopez E, Illanes-Vicioso R, Castroviejo P, Aiese Cigliano R, Montoya M, Falabella P, Pesquera C, Gonzalez-Legarreta L, Arias-Palomo E, Solà M, Torroba T, Arias CF, Bertocchini F. Wax worm saliva and the enzymes therein are the key to polyethylene degradation by Galleria mellonella. Nat Commun. 2022 Oct 4;13(1):5568. doi: 10.1038/s41467-022-33127-w. PMID: 36195604; PMCID: PMC9532405.',
          '[5] Zhang Y, Pedersen JN, Eser BE, Guo Z. Biodegradation of polyethylene and polystyrene: From microbial deterioration to enzyme discovery. Biotechnol Adv. 2022 Nov;60:107991. doi: 10.1016/j.biotechadv.2022.107991. Epub 2022 May 30. PMID: 35654281.',
          '[6] Montazer Z, Habibi Najafi MB, Levin DB. Challenges with Verifying Microbial Degradation of Polyethylene. Polymers. 2020; 12(1):123.',
          '[7] Rao Hori, Xu Weilin. Structure and mechanical properties of ultra-high molecular weight polyethylene fibers after heat treatment [J]. Progress in Textile Technology, 2008, (05): 9-11.',
          '[8] Borgo B, Havranek JJ. Automated selection of stabilizing mutations in designed and natural proteins. Proc Natl Acad Sci U S A. 2012 Jan 31;109(5):1494-9. doi: 10.1073/pnas.1115172109. Epub 2012 Jan 17. PMID: 22307603; PMCID: PMC3277135.',
          '[9] Deng B, Yue Y, Yang J, Yang M, Xing Q, Peng H, Wang F, Li M, Ma L, Zhai C. Improving the activity and thermostability of PETase from Ideonella sakaiensis through modulating its post-translational glycan modification. Commun Biol. 2023 Jan 13;6(1):39. doi: 10.1038/s42003-023-04413-0. PMID: 36639437; PMCID: PMC9839772.',
        ]"
      ></text-with-image>
    </content-decorate>
  </div>
</template>
  
  <script setup>
import ContentDecorate from "@/components/content-decorate.vue";
import TextWithImage from "@/components/text-with-image.vue";

const textContent1 = [
  "Polyethylene is one of the most widely produced and sturdy polyolefin-derived plastics. However, due to the difficulty in overcoming the bottleneck step in PE biodegradation, namely the initial oxidation step, there are almost no biological mechanisms in nature that can effectively degrade PE. Therefore, PE can exist in the environment for a long time, causing huge environmental pollution. PEase is the only enzyme found to degrade PE, which has the ability to oxidize PE at room temperature and effectively solves the problem of oxidation.",
  "Sadly, low thermostability of PEase limits its catalytic efficiency. What's more, there has been no research on improving it. Therefore, we managed to improve protein thermostability by designing disulfide bonds, flexible sites, salt bridges, and hydrophobic cores of PEase. We first added, deleted, and replaced the amino acid sequence of wild-type PEase through bioinformatics software PyMOL, rationally designed several mutants and predicted the molecular structure of the designed mutants through AlphaFold2. Then we rationally screened out several mutants with satisfactory prediction results. Finally, we utilized E. coli for molecular cloning and expression of mutants. We use differential scanning fluorescence(DSF) to measure their Tm. ",
  "We have successfully screened out 64 mutant proteins, of which 35 have been successfully tested. The highest Tm haved reached 51.7℃, which increased by 12.4% compared to the wild type, and the enzyme activity also increased accordingly.",
];
const textContent2 = [
  "Polyethylene (PE) consists simply of linear carbon chains held together by hydrogen bonds. In 2022, world's PE production exceeded 140 million tons, a year-on-year increase of 6.1%[1]. In addition, PE represents up to 69% of the synthetic plastics that are discarded within a short period after use and has an extremely low recovery rate[2]. Such large amount of PE waste has caused serious white pollution, which is urgent to find a good method to achieve the degradation of PE.",
];
const textContent3 = [
  "Although many enzymes in nature have been discovered to catalyze the cleavage of C-O bonds , cleavage of C-C bonds is still very difficult due to the lack of hydrolysable groups. The fracture of the C-C bond undergoes two processes, oxidation and deterioration, in which oxidation is the bottleneck step. Nowadays, oxidation is mostly achieved through methods such as heating or chemical catalysis in industry[3].",
];
const textContent4 = [
  "A literature posted in 2016 reported that wax worm saliva can overcome the initial oxidation step in PE biodegradation, which is the bottleneck throughout the process[4].Within the saliva, two enzymes(Ceres and Demetra) that can oxidize PE after a few hours’ application at room temperature (RT) arose scientists' attention. They named them PEases. PEase belongs to the phenol oxidase family and is the first animal enzymes that can achieve biodegradation of C-C bonds, opening the way opotential solutions for plastic waste management through bio-recycling/up-cycling.",
];
const textContent5 = [
  "The degradation of PE can be divided into four stages( abiotic treatment/biodeterioration, biofragmentation/depolymerization, assimilation and mineralization)[5]. Firstly, PE polymers form superoxide radicals through UV or high temperature. Then, it will be attacked by extracellular enzymes and a large number of oxygen-containing groups, such as carboxyl, carbonyl, and aldehyde, will be formed in alkane chain, where split into 10-22 carbon carbon chains[6]. The released metabolites are eventually absorbed and utilized by microorganisms. At present, many microorganisms have been found to be able to realize the biodegradation of PE. However, in case of enzymes, only PEase has been proved to be able to depolymerize PE into short chains instead of UV or high temperature.",
  "However, PEase can only achieve catalytic effect at RT, and its effiency is extremely insignificant. In addition, we have learned that with temperatures raise, internal arrangement of PE molecules will become more dispersed, making it easier for enzymes and O2 to enter[7]. Therefore, we hope to increase catalytic efficiency by improving its thermostability. In our project, we first design rational mutations in disulfide bonds, salt bridges, hydrophobic cores[8], and flexible sites, thus making it able to work at higher temperatures. The optimization can also lay the foundation for the co-degradation of various plastics in the future, avoiding the tedious work of plastic classification.",
];
const textContent6 = [
  "At the beginning of this year, we organized a volunteer activity to help clean up garbage thrown everywhere in the community. We found the most we collected were plastic bags, most of which were thrown away after use, or used as garbage bags and abandoned after a second use. We wondered about this and learned that most plastic bags were made by polythene. After some learning, we knew that PE is widely used in daily life, and the plastic wrap, shopping bags, water pipes, cables and so on that we usually come into contact with are all PE materials. However, the recycling, degradation and reuse of PE is still a big problem. ",
  "Our lab is currently doing PETase (PET degrading enzyme) optimization related projects, and we have also conducted related research and experiments. At present, the optimization of PETase has become mature and gradually transformed into industrialization, while little research has been done on the biodegradation of other plastics (PP, PE, etc.), especially the enzymatic degradation method. So can we use biodegradation to deal with PE pollution that can be seen everywhere? That's how we started our research.",
];
const navigation = [
  "overview",
  "background",
  "inspiration",
  "methods",
  "future-perspective",
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