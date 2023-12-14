<template>
  <div class="main">
    <img
      src="https://static.igem.wiki/teams/4627/wiki/other-background.png"
      class="other-background"
    />
    <div class="page-title">Design</div>
    <content-decorate style="margin-top: -20vh" :navigation="navigation">
      <TextWithImage
        mainTitle="Overview"
        aid="overview"
        :textContent="[
          'Our project aims to improve the thermostability of PEase. For this purpose, we visited companies and interviewed relevant professionals. Their advice is of great help to us. What’s more, we learned some methods from literature materials. Our design mainly from the following aspects: disulfide bonds, flexible site, salt bridges and hydrophobic core.',
          'However, theoretical design alone is less convincing. We used software such as AlphaFold2 and PyMOL to predict and analyze the 3D structure of PEase after mutation, and then FoldX was used to predict its stability. Mutants with low ΔΔG were selected for multiple rounds of iteration. Finally, the theoretical results are verified by experiments.',
          'In addition, we took a long time to find the right plasmic for Demetra. So we only carried out rational design of Ceres.',
        ]"
        :imageUrls="['https://static.igem.wiki/teams/4627/wiki/overview.png']"
      ></TextWithImage>
      <TextWithImage
        mainTitle="Issues"
        aid="issues"
        :textContent="[
          'At the beginning of our project, we experimentally measured the Tm value of Ceres to be only about 46℃. If we can improve the thermostability of Ceres so that it can play a catalytic role at higher temperatures, this will be of great significance for improving its catalytic efficiency.',
        ]"
      ></TextWithImage>
      <TextWithImage
        mainTitle="Solution"
        aid="solution"
        subTitle="Disulfide Bonds:"
        :textContent="[
          'From literature materials, we have learned that in most proteins, disulfide bonds have a significant impact on protein stability. Therefore, we first considered using the method of increasing disulfide bonds in proteins to improve the thermostability of Ceres.',
          'According to the literature, one of the criteria for disulfide bond screening is: the distance between C_β- C_βatoms of two amino acids that is not more than 5Å apart (for glycine: from C_α). Therefore, PyMOL was used to search for suitable mutation sites.',
          'In addition, we also used software Discovery Studio to assist our design. It assesses the reliability of mutations from the following perspectives: energy, bad contacts, thermal mobility, sequence separation, residue depth, volume change, environment, and so on.',
          'To verify the reliability of the design, we used AlphaFold2 to predict structure after mutation to facilitate subsequent screening.',
          'Here we present an example. ',
        ]"
        :imageUrls="[
          'https://static.igem.wiki/teams/4627/wiki/disulfide-bond.png',
        ]"
      ></TextWithImage>
      <TextWithImage
        subTitle="Flexible Site:"
        :textContent="[
          'The stability of enzyme molecules mainly depends on the rigidity of the conformation, and the flexible site will be the first to start unfolding when large thermal changes occur. Therefore, a strategy for rigidifying the flexible site is proposed.',
          'The first step of the strategy is to identify the flexible site. We use molecular dynamics simulations to characterize the flexibility of each site with B-factors (RMSF).',
        ]"
        :image-urls="['https://static.igem.wiki/teams/4627/wiki/flexible.png']"
      ></TextWithImage>
      <TextWithImage
        :text-content="[
          'After this, we rigidified the flexible sites in two ways: β-turn and single point saturation mutation. In the flexible site, we designed the β-turn according to the statistical law(mainly added proline), and use the saturation mutation method as a supplement(Use PositionScan in foldX).',
        ]"
      ></TextWithImage>
      <TextWithImage
        sub-title="Salt Bridges:"
        :text-content="[
          'Salt bridge formation is inferred for a pair of oppositely charged residues (Asp or Glu with Arg, Lys or His) if they meet the following criteria:(1)The centroids of the side-chain charged groups in oppositely charged residues lie within 4.0 Å of each other; and(2) at least one pair of Asp or Glu side-chain carboxyl oxygen atoms and side-chain nitrogen atoms of Arg, Lys or His are within a 4.0 Å distance.( Sandeep Kumar, Ruth Nussinov, Salt bridge stability in monomeric proteins)',
          'Similar to our design of disulfide bonds, we searched for suitable mutation sites using PyMOL software according to this principle.',
          'Here we present an example. ',
        ]"
        :image-urls="[
          'https://static.igem.wiki/teams/4627/wiki/disulfide-bond.png',
        ]"
      ></TextWithImage>
      <TextWithImage
        sub-title="Hydrophobic core:"
        :text-content="[
          'Well-packed hydrophobic cores are a hallmark of protein structure. ',
          'To this end, we used RosettaDesign, part of the Rosetta software suite, which is freely available to academic users, to design our enzyme. It can identify and improve poorly packed protein cores by selecting a series of stabilizing point mutations.',
          'After the above different designs, mutants with low ΔΔG were selected for multiple rounds of iteration.',
        ]"
      ></TextWithImage>
      <TextWithImage
        mainTitle="Stability Prediction"
        aid="stability-pollution"
        :text-content="[
          'We designed many mutants, but we could not bring all of them into the wet lab, so we chose to use software to calculate the ΔG of the protein for preliminary screening.',
          'We use the FoldX plugin in YASARA to calculate the energy. After minimizing the energy of the structure with RepairPDB, use Stability to obtain ΔG(MT)；ΔΔG= ΔG(MT) - ΔG(WT). ΔΔG > 0 means the mutation is unstable, ΔΔG < 0 means the mutation is stable.',
        ]"
        :image-urls="['https://static.igem.wiki/teams/4627/wiki/model-2.png']"
      ></TextWithImage>
      <TextWithImage
        aid="results"
        :text-content="[
          'We finally selected 64 mutants for subsequent experimental validation. (Table 1)',
        ]"
      ></TextWithImage>
      <table-com
        chart-title="Table 1. Mutants gained from stability prediction"
        :chart-data="[
          ['Name', 'Design ideas', 'Mutation sites', 'ΔΔG(kcal/mol)'],
          [
            'T2',
            'disulfide bonds, salt bridges, saturation mutation',
            'S84D-S127M-G241C-R350C',
            '-31.12',
          ],
          [
            'T3',
            'disulfide bonds, salt bridges, saturation mutation',
            'S84D-N124Y-G241C-R350C',
            '-30.77',
          ],
          [
            'T4',
            'disulfide bonds, salt bridges, hydrophilic center',
            'R87C-W228C-K239R-A567F',
            '-19.50',
          ],
          [
            'T6',
            'disulfide bonds, salt bridges, saturation mutation',
            'K239R-D448C-F493C-A567Y',
            '-18.14',
          ],
          [
            'R9',
            'flexible site',
            'Q169L-H174Y-T192W-W194Y-T200L-E201P -V380Y- D625F-H627K-G629P',
            '-15.54',
          ],
          ['A8', 'disulfide bonds', 'W45C-F112C', '-14.20'],
          ['B9', 'disulfide bonds', 'H189C-R485C', '-13.47'],
          ['zc-1', 'hydrophilic center', 'P29A', '-5.68'],
          ['zc-8', 'hydrophilic center', 'A567F', '-3.19'],
          ['zc-3', 'hydrophilic center', 'V123I', '-2.73'],
        ]"
      ></table-com>
      <TextWithImage
        main-title="Experimental Verification"
        aid="experimental-verification"
        :text-content="[
          'Although we made a lot of calculations in dry lab, the accuracy of theoretical calculation is limited, so we carried out experimental verification. ',
          'First, we designed primers through the website provided by GENEWIZ, and constructed our mutant genes with seamless cloning. After verifying the correctness of the plasmid, the protein was expressed by E. coli BL21.',
        ]"
        :image-urls="[
          'https://static.igem.wiki/teams/4627/wiki/molecular-cloning.png',
        ]"
      ></TextWithImage>
      <TextWithImage
        :text-content="[
          'We obtained pure protein by affinity chromatography. The Tm of protein was detected by DSC. Fluorescent dye will bind to the hydrophobic core exposed by the structural change of protein after heating, resulting in a change in fluorescence intensity. By derivation and other calculations, we can obtain the temperature when the fluorescence changes. This is just the Tm value that identifies thermostability of the protein.',
          'Comparing the Tm of wild-type Ceres and the mutant, it can be found that we obtained a total of 5 proteins with Tm changes above 4℃ (higher than 12% compared with wild-type Ceres) in the whole experiment of more than half a year. (Table 2)',
        ]"
      ></TextWithImage>

      <table-com
        chart-title="Table 2. Mutants gained from stability prediction"
        :chart-data="chart"
      ></table-com>
      <text-with-image
        main-title="Reference"
        :textContent="text"
      ></text-with-image>
    </content-decorate>
  </div>
</template>

<script setup>
import ContentDecorate from "@/components/content-decorate.vue";
import TextWithImage from "@/components/text-with-image.vue";
import tableCom from "@/components/table-com.vue";
const navigation = [
  "overview",
  "issues",
  "solution",
  "stability-pollution",
  "results",
  "experimental-verification",
];
const chart = [
  ["No.", "Name", "Description", "Designer", "Length(bp)"],
  [
    "1",
    `<a href="http://parts.igem.org/Part:BBa_K4627008" target="_blank">BBa_K4627008</a>`,
    "A8- disulfide bonds",
    "tjusls-china 2023",
    2067,
  ],
  [
    2,
    '<a href="http://parts.igem.org/Part:BBa_K4627053" target="_blank">BBa_K4627053</a>',
    "zc-8- Hydrophobic center",
    "tjusls-china 2023",
    2067,
  ],
  [
    3,
    '<a href="http://parts.igem.org/Part:BBa_K4627044" target="_blank">BBa_K4627044</a>',
    "R9- Flexible site",
    "tjusls-china 2023",
    2067,
  ],
  [
    4,
    '<a href="http://parts.igem.org/Part:BBa_K4627026" target="_blank">BBa_K4627026</a>',
    "B9- disulfide bonds",
    "tjusls-china 2023",
    2067,
  ],
  [
    5,
    '<a href="http://parts.igem.org/Part:BBa_K4627048" target="_blank">BBa_K4627048</a>',
    "zc-3- Hydrophobic center",
    "tjusls-china 2023",
    2067,
  ],
];
const text = [
  '[1] " Automated selection of stabilizing mutations in designed and natural proteins " , Proc. Natl. Acad. Sci. USA, v.109(5) pp.1494-99.',
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
.picture2 {
  width: 50vw;
}
</style>