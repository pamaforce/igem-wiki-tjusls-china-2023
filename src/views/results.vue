<template>
  <div class="main">
    <img
      src="https://static.igem.wiki/teams/4627/wiki/other-background.png"
      class="other-background"
    />
    <div class="page-title">Results</div>
    <content-decorate style="margin-top: -20vh" :navigation="navigation">
      <text-with-image
        main-title="Overview"
        aid="overview"
        :text-content="textContent"
      ></text-with-image>
      <text-with-image
        main-title="2.Construction of pET-22b(+) expression vector"
        aid="Vector"
        :text-content="[
          'Abstract: ',
          '1st constraction: Through literature review, it is found that the thermostability of enzymes can be effectively improved by designing disulfide bonds in proteins（A, B series）. We constructed 35 pET-22b-PEaseMUT-His plasmids (BBa_K4627001~BBa_K4627035 ), all of which were expressed in Escherichia coli.',
          '2nd constraction: We found that in addition to increasing disulfide bonds, it is also possible to increase the thermalstability of proteins by changing their flexible sites (R series), hydrophobic core (Z series), and salt bridges. So We constructed 19 pET-22b-PEaseMUT-His plasmids(BBa_K4627036~BBa_K4627054), all expressing in E.coli.',
          '3rd constraction: We combined the results of the first and second times to iteratively optimize 10 mutants（BBa_K4627055~BBa_K4627064）, all expressing in E.coli.',
          'First, we construct the pET-22b-PEase-His plasmid. The structure diagram of pET-22b-PEase-His plasmid is shown in',
        ]"
        :image-urls="['https://static.igem.wiki/teams/4627/wiki/results-1.png']"
      ></text-with-image>
      <text-with-image
        :text-content="[
          'Secondly, we want to construct the plasmids of these 64 mutants. These mutants contain 1~10 mutation sites. When we began experimenting, we found that some mutations cannot be successfully amplified. So, we search the literature and tried to construct them through the Overlap PCR method again. Here are parts of our results. After successful PCR of long and short fragments, we connected the two to build mutants by seamless clone.',
        ]"
        :image-urls="['https://static.igem.wiki/teams/4627/wiki/results-2.png']"
      ></text-with-image>
      <text-with-image
        :text-content="[
          'Finally, the assembled expression vector was transformed into E. Coli DH5α, and ampicillin resistant positive strains were screened by E. coli DH5α.For the specific construction of each mutant pET-22b expression vector, you can search for it in the parts section.',
        ]"
        :image-urls="['https://static.igem.wiki/teams/4627/wiki/results-3.png']"
      ></text-with-image>
      <text-with-image
        main-title="3.Protein expression"
        aid="Protein"
        :text-content="[
          'After obtaining the sequencing results from GeneWiz, the correctly sequenced plasmid was transformed into BL21 competent cell to screen for ampicillin resistant positive strains. After test expression and Massive expression, we used the Ni Agarose to purify the target protein. The purification of these proteins is then detected by SDS-PAGE. Here are parts of our results in. 35 parts(you can go to the parts section to view for details) were purified successfully and could go to the testing step. However, the other parts formed inclusion bodies.',
        ]"
        :image-urls="['https://static.igem.wiki/teams/4627/wiki/results-4.png']"
      ></text-with-image>
      <text-with-image
        :text-content="[
          'Desalting：The collected protein samples are further purified by Gel filtration chromatography. We determine the state of protein aggregation based on the peak position and collect protein samples based on the results of running the gel. ',
        ]"
        :image-urls="['https://static.igem.wiki/teams/4627/wiki/results-5.png']"
      ></text-with-image>
      <text-with-image
        :text-content="[
          'After this, we tested the thermostability of all mutants from A1~B18 and found that the increase in Tm values of these mutants was limited. Therefore, through literature review, we found that the thermostability of wild-type PEase could be improved by modifying the flexible site (R-series mutant) and hydrophobic core (Z-series mutant). On this basis, we combined the mutation sites of the flexible site, hydrophobic core, disulfide bond (A,B series) and salt bridge to obtain the T-series mutant. The construction and expression process of these mutants is similar to that of disulfide bond mutants, their AKTA peak curves are shown below, and their thermostability test values are listed in the next section.',
        ]"
      ></text-with-image>
      <text-with-image
        main-title="4.Determination of mutants’ thermostability"
        aid="Thermostability"
        :text-content="[
          'We use Quantitative Real-time PCR to detect the Tm value of the mutants.',
        ]"
        :image-urls="['https://static.igem.wiki/teams/4627/wiki/results-6.png']"
      ></text-with-image>
      <text-with-image
        main-title="5.Enzyme activity test of Ceres"
        aid="Ceres"
        :text-content="[
          'We try to test the reactivity of Ceres enzyme using PE4000 powder and LDPE circle sheet as reactants, try smear method and the way of using reaction solution and try to measure the activity of the enzyme by weighing, EM, infrared and Raman spectroscopy, and finally decide to use LDPE circle sheet as the reactant, and the weighing method to determine the reactivity. In order to assess the activity of these proteins, 5μL of each purified enzyme at a concentration of 1–5μg/μL, were applied separately 8 sequential times (90min each) on PE films. Finally, we remove PE films, process and dry it, and weighed the LDPE circles before and after the reaction using an analytical balance (0.0001 g). Here are parts of our results(Table 1). ',
        ]"
        :image-urls="['https://static.igem.wiki/teams/4627/wiki/results-7.png']"
      ></text-with-image>
      <text-with-image
        :text-content="[
          'Table 1. Results of enzyme activity. (m1~m3: weight before turning on the reaction. M: average weight before opening the reaction. m’1~m’3: weight after turning on the reaction. M’: average weight after turning on the reaction. ∆M: the average weight difference before and after opening the reaction. unit: mg)',
        ]"
      ></text-with-image>
      <text-with-image
        main-title="6. Protein D Test"
        aid="Protein-D"
        :text-content="[
          'As pET22b was not a suitable vector for Demetra, we selected different vectors and strains for experimental expression. We selected 7 vectors and 3 different strains for the test, and set 5 different IPTG concentrations. After inducing protein expression in the tube, SDS-page was used to verify the successful expression.',
        ]"
        :image-urls="['https://static.igem.wiki/teams/4627/wiki/results-8.png']"
      ></text-with-image>
      <text-with-image
        :text-content="[
          'The results are shown in Table 2. pET15b and 28bs can’t be constructed, so we judged that they are not suitable as Demetra vectors. The vectors, strains and concentrations with good expression effect were pGEX-6P-1, BL21(DE3) and 0.7mM, respectively.',
        ]"
      ></text-with-image>
      <table></table>
      <text-with-image
        main-title="7. Conclusion"
        aid="conclusion"
        :text-content="[
          'In our project, we successfully express 35 mutants of PEase(Ceres). Among them, 5 PEase mutants showed excellent thermostability, where the maximum Tm value of the mutants could reach 51.7 ℃, which will become foundation for further research of our project in the future.',
        ]"
      ></text-with-image>
      <text-with-image
        main-title="8. Future"
        aid="future"
        :text-content="[
          'In the future, we will conduct further studies on 5 mutant Peases with good thermostability:',
          'We need to use more powerful algorithms to further improve the thermostability of PEase. And on the basis of improving the activity and pH tolerance range of PEase, we will gradually improve the overall performance of PEase, and finally focus on how to achieve high expression of high-performance PEase. PEase reaction hardware will also be designed to realize the commercial production and application of PEase.',
        ]"
      ></text-with-image>
      <text-with-image
        main-title="9. Reference"
        aid="reference"
        :text-content="[
          '[1] Sanluis-Verdes A, Colomer-Vidal P, Rodriguez-Ventura F, Bello-Villarino M, Spinola-Amilibia M, Ruiz-Lopez E, Illanes-Vicioso R, Castroviejo P, Aiese Cigliano R, Montoya M, Falabella P, Pesquera C, Gonzalez-Legarreta L, Arias-Palomo E, Solà M, Torroba T, Arias CF, Bertocchini F. Wax worm saliva and the enzymes therein are the key to polyethylene degradation by Galleria mellonella. Nat Commun. 2022 Oct 4;13(1):5568. doi: 10.1038/s41467-022-33127-w. PMID: 36195604; PMCID: PMC9532405.',
          '[2] Bombelli P, Howe CJ, Bertocchini F. Polyethylene bio-degradation by caterpillars of the wax moth Galleria mellonella. Curr Biol. 2017 Apr 24;27(8):R292-R293. doi: 10.1016/j.cub.2017.02.060. PMID: 28441558.',
        ]"
      ></text-with-image>
    </content-decorate>
  </div>
</template>

<script setup>
import TextWithImage from "@/components/text-with-image.vue";
import ContentDecorate from "@/components/content-decorate.vue";
const textContent = [
  'In our project, we focused on improving the thermostability of PEase (Ceres) by designing disulfide bonds, flexible sites, salt Bridges, and hydrophobic cores. A total of 64 PEase (Ceres) expression vectors were constructed, among which 35 mutants successfully expressed proteins, and after detecting their Tm values by real-time fluorescent quantitative PCR, we finally confirmed 5 of them that showed satisfactory results. They are <a href="http://parts.igem.org/Part:BBa_K4627008" target="_blank">W45C-F112C(BBa_K4627008)</a>、<a href="http://parts.igem.org/Part:BBa_K4627026" target="_blank">H189C-R485C(BBa_K4627026)</a>、<a href="http://parts.igem.org/Part:BBa_K4627044" target="_blank">Q169L-H174Y-T192W-W194Y-T200L-E201P-V380Y-D625F-H627K-G629P(BBa_K4627044)</a>、<a href="http://parts.igem.org/Part:BBa_K4627048" target="_blank">V123I(BBa_K4627048)</a>、<a href="http://parts.igem.org/Part:BBa_K4627053" target="_blank">A567F(BBa_K4627053)</a>.',
];
const navigation = [
  "overview",
  "Vector",
  "Protein",
  "Thermostability",
  "Ceres",
  "Protein-D",
  "conclusion",
  "future",
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