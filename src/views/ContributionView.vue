<template>
  <div class="main">
    <img
      src="https://static.igem.wiki/teams/4627/wiki/other-background.png"
      class="other-background"
    />
    <div class="page-title">Contribution</div>
    <content-decorate style="margin-top: -20vh" :navigation="navigation">
      <TextWithImage mainTitle="OVERVIEW" 
      aid="overview"
      :textContent="textContent1">
      </TextWithImage>
      <TextWithImage mainTitle="PARTS" 
      aid="parts"
      :textContent="textContent2">
      </TextWithImage>
      <TextWithImage mainTitle="DRY LAB" 
      aid="dry-lab"
      :textContent="textContent3">
      </TextWithImage>
      <TextWithImage
        subTitle="1. Hydrophobic interaction[1]:"
        :textContent="textContent4"
      >
      </TextWithImage>
      <TextWithImage subTitle="2. Hydrogen bond:" :textContent="textContent5">
      </TextWithImage>
      <TextWithImage
        subTitle="3. Lonic bond (salt bridge)[2] :"
        :textContent="textContent6"
      >
      </TextWithImage>
      <TextWithImage subTitle="4. π-π interaction:" :textContent="textContent7">
      </TextWithImage>
      <TextWithImage subTitle="5. Disulfide bond:" :textContent="textContent8">
      </TextWithImage>
      <TextWithImage
        subTitle="6.Homologous alignment[3]:"
        :textContent="[
          'This method requires to mutate mino acid sites related to thermostability, which can be found by comparing the sequences of proteins with high thermostability and proteins with poor thermostability.',
        ]"
      ></TextWithImage>
      <TextWithImage
        subTitle="7. Proline effect:"
        :textContent="[
          'Proline has a stable molecular structure for its rigid closed pyrrole ring. Therefore, proline replacement at suitable sites can greatly reduce the flexibility of protein molecules, thereby improving the thermostability.',
        ]"
      ></TextWithImage>
      <TextWithImage
        subTitle="8. Temperature factor design (flexible area)[4] :"
      ></TextWithImage>
      <p class="simple-text">The thermostability of some mutants can be significantly improved after mutating amino acids with high B-factor value in protein structure. (This method has also been used in this project. See the design section for <router-link to="/design">details</router-link> details.)</p>
      <TextWithImage
        subTitle="9. Machine Learning[5]:"
        :textContent="[
          'A computational model is built directly from the data using sequence or structural features of proteins to predict ΔΔG.',
        ]"
      ></TextWithImage>
      <TextWithImage
        mainTitle="WET LAB"
        aid="wet-lab"
      ></TextWithImage>
      <p class="simple-text">When do PEase D protein test, we tried to jointly use thermal cracking method and ultrasonic cracking method for bacteria-breaking operation, and found that the combined use of the two methods had better bacteria-breaking effect, which could more completely separate the superculture and precipitation, and determine the protein expression more clearly. If these bacteria only pyrolyzed without ultrasonic treatment, it is easy to form DNA protein complex, resulting in fuzzy and unclear strips of protein gel, it is difficult to distinguish whether there is the protein we need. We have determined the best treatment conditions through continuous experiments, which can achieve the best effect. (See the <router-link to="/experiments">experiment</router-link> page for details. )</p>
      <text-with-image
        :imageUrls="['https://static.igem.wiki/teams/4627/wiki/sds-page.png']"
      ></text-with-image>
      <text-with-image
        mainTitle="HP"
        :textContent="[
          'While HP\'s activities serve our own projects, we also consider leaving materials for future iGEM teams to reuse. When talking with childen, we were amazed at their enthusiasm. So we specially drew the picture book \'Colored Magic\'. ',
        ]"
        :imageUrls="[
          'https://static.igem.wiki/teams/4627/wiki/book.jpg',
          'https://static.igem.wiki/teams/4627/wiki/ppt.png',
        ]"
      ></text-with-image>
      <text-with-image
        :textContent="[
          'In addition, we will also upload the presentation for primary school students, hoping to provide our creativity for similar activities in the future.',
          'We hope these will remain in the iGEM archive, ready for iGEMer to download if they want to try it out. ',
        ]"
      ></text-with-image>
      <router-link to="/communication">(See the communication page for details. )</router-link>
      <text-with-image
        mainTitle="REFERENCE"
        aid="reference"
        :textContent="[
          '[1] Nezhad NG, Rahman RNZRA, Normi YM, Oslan SN, Shariff FM, Leow TC. Thermostability engineering of industrial enzymes through structure modification. Appl Microbiol Biotechnol. 2022 Aug;106(13-16):4845-4866. doi: 10.1007/s00253-022-12067-x. Epub 2022 Jul 9. Erratum in: Appl Microbiol Biotechnol. 2022 Sep;106(18):6363. PMID: 35804158.',
          '[2] Folch B, Rooman M, Dehouck Y. Thermostability of salt bridges versus hydrophobic interactions in proteins probed by statistical potentials. J Chem Inf Model. 2008 Jan;48(1):119-27. doi: 10.1021/ci700237g. Epub 2007 Dec 28. PMID: 18161956.',
          '[3] Trudeau DL, Smith MA, Arnold FH. Innovation by homologous recombination. Curr Opin Chem Biol. 2013 Dec;17(6):902-9. doi: 10.1016/j.cbpa.2013.10.007. Epub 2013 Oct 29. PMID: 24182747.',
          '[4] Reetz, M.T., Carballeira, J.D. and Vogel, A. (2006), Iterative Saturation Mutagenesis on the Basis of B Factors as a Strategy for Increasing Protein Thermostability. Angewandte Chemie International Edition, 45: 7745-7751.',
          '[5] Jia L, Yarlagadda R, Reed CC. Structure Based Thermostability Prediction Models for Protein Single Point Mutations with Machine Learning Tools. PLoS One. 2015 Sep 11;10(9):e0138022. doi: 10.1371/journal.pone.0138022. PMID: 26361227; PMCID: PMC4567301.',
        ]"
      ></text-with-image>
    </content-decorate>
  </div>
</template>
  
  <script setup>
import TextWithImage from "@/components/text-with-image.vue";
import ContentDecorate from "@/components/content-decorate.vue";
const textContent1 = [
  "As a continuous and inherited competition, each team will actively provide modeling skills, experimental specifications, parts, etc. that may be useful in the future. We hope to share the experience and achievements we have gained during the past year with all of the teams, so as to provide convenience for iGEMers in the future and make the iGEM community more colorful.Our contribution section will be divided into Parts, Dry lab, Wet lab and HP four parts as following.",
];
const textContent2 = [
  "PEase is the only enzyme found that can degrade PE. We noted that the PE enzyme has not been studied in previous projects. Our basic parts is PEase's first appearance on the iGEM stage. For the first time, we have rationally designed PEase to improve its thermostability. We used molecular cloning to construct mutant plasmid and obtained 64 composite parts. Among them, the thermostability of many mutants was improved. There are 5 proteins with Tm changes above 4℃(higher than 12% compared with wild-type Ceres).",
  "We hope that this work will trigger more thinking and design of iGEMRers for PE biodegradation in the future and facilitate their experiments.",
];
const textContent3 = [
  "In the process of project design, we read a lot of literature. Combined with the existing foundation of the laboratory, we summarized several methods to improve enzyme thermostability, which could be helpful if other team or researchers want to optimize enzyme thermostability. ",
];
const textContent4 = [
  "Hydrophobic interaction mainly affects the conformational entropy of protein. And it is the most important factor in the formation and stability of protein tertiary structure.",
];
const textContent5 = [
  "Hydrogen bond is a kind of non-covalent bond, which formed when the distance between the hydrogen donor and the hydrogen acceptor does not exceed 3Å and the Angle between the hydrogen donor and the hydrogen acceptor is less than 90°.",
];
const textContent6 = [
  "A salt bridge is inferred to form if a pair of opposite-charged residues (Asp or Glu versus Arg, Lys, or His) meet the following criteria: ",
  "(i) the centroids of the side chain charged groups in the opposite-charged residues are 4.0Å apart from each other;",
  "(ii) At least one pair of Asp or Glu side chain antelope oxygen atoms and Arg, Lys or His side chain nitrogen atoms within a 4.0Å distance.",
];
const textContent7 = [
  "The interaction between aromatic rings refers to the interaction between two aromatic amino acids (Trp, Tyr, and Phe) benzene ring 234 when the distance between the center of aromatic rings does not exceed 7Å. Usually these aromatic amino acids are embedded or partially embedded in the hydrophobic core of the protein, which has an important effect on the thermostability of the protein.",
];
const textContent8 = [
  "The protein structure can be stabilized by reducing the entropy of protein unfolding state. It canbe formed when the distance between C_β- C_β  atoms of two amino acids that is not more than 5Å apart (for glycine: from C_α).",
  "In addition to the design directly from the above principles, there are the following methods: ",
];
const navigation = [
  "overview",
  "parts",
  "dry-lab",
  "wet-lab",
  "reference"
]
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
.person-name {
  color: blue;
  cursor: pointer;
}
</style>