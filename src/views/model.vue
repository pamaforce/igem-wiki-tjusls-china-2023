<template>
  <div class="main">
    <img
      src="https://static.igem.wiki/teams/4627/wiki/other-background.png"
      class="other-background"
    />
    <div class="page-title">Model</div>
    <content-decorate style="margin-top: -20vh" :navigation="navigation">
      <TextWithImage
        mainTitle="Overview"
        aid="overview"
        :textContent="textContent1"
      ></TextWithImage>
      <TextWithImage
        mainTitle="AlphaFold2 Structure Prediction"
        aid="Alphafold2"
        subTitle="Introduction"
        :textContent="textContent2"
      ></TextWithImage>
      <TextWithImage
        subTitle="Usage"
        :textContent="textContent3"
      ></TextWithImage>
      <TextWithImage
        subTitle="Results"
        :textContent="textContent4"
      ></TextWithImage>
      <img src="https://static.igem.wiki/teams/4627/wiki/model/model-1.gif" />
      <span class="img-name">Fig 1. Ceres</span>
      <span class="img-hint"
        >Ceres is the protein that we mainly modified, this is the structure of
        the protein that predicted directly by AlphaFold2</span
      >
      <img src="https://static.igem.wiki/teams/4627/wiki/model/model-2.gif" />
      <span class="img-name">Fig 2. Demetra</span>
      <span class="img-hint"
        >Demetra is also the protein we performed experimental modification on,
        and we obtained preliminary structural information of the protein using
        AlphaFold.</span
      >
      <TextWithImage
        mainTitle="FoldX with Rosetta to calculate protein structural stability and mutation effects"
        aid="FoldX"
        subTitle="Introduction"
        :textContent="textContent5"
      ></TextWithImage>
      <p>
        ΔG=Wvdw⋅ΔGvdw+WsolvH⋅ΔGsolvH+WsolvP⋅ΔGsolvP+ΔGwb+ΔGhbond+ΔGel+ΔGKon+Wmc⋅T⋅ΔSmc+Wsc⋅T⋅ΔSsc
      </p>
      <TextWithImage :textContent="textContent6"></TextWithImage>
      <TextWithImage
        subTitle="Usage"
        :textContent="textContent7"
      ></TextWithImage>
      <pre>
      <code>{{code1}}</code>
      </pre>
      <TextWithImage :textContent="textContent8"></TextWithImage>
      <pre>
      <code>{{code2}}</code>
      </pre>
      <TextWithImage :textContent="textContent9"></TextWithImage>
      <pre>
      <code>{{code3}}</code>
      </pre>
      <TextWithImage :textContent="textContent10"></TextWithImage>
      <TextWithImage
        subTitle="Result"
        :textContent="textContent11"
      ></TextWithImage>
      <img src="https://static.igem.wiki/teams/4627/wiki/model/model-3.png" />
      <span class="img-name"
        >Fig 3. Protein stability prediction of flexible sites</span
      >
      <span class="img-hint"
        >Where the horizontal axis indicates the type of amino acid and the
        vertical axis indicates the position of the amino acid. The iterative
        mutation is mainly based on the results after the mutation of the
        corresponding sites.</span
      >
      <TextWithImage
        mainTitle="MOE (Molecular Operating Environment) Molecular Docking"
        aid="MOE"
        subTitle="Introduction"
        :textContent="textContent12"
      ></TextWithImage>
      <TextWithImage
        subTitle="Usage"
        :textContent="textContent13"
      ></TextWithImage>
      <TextWithImage
        subTitle="Results"
        :textContent="textContent14"
      ></TextWithImage>
      <img src="https://static.igem.wiki/teams/4627/wiki/model/model-4.png" />
      <span class="img-name"
        >Fig 4. Ceres predicted possible binding sites</span
      >
      <span class="img-hint"
        >The gray-white color is the Sureface structure of the protein, and the
        green ball indicates the possible binding pocket, Dummies.</span
      >
      <img src="https://static.igem.wiki/teams/4627/wiki/model/model-5.png" />
      <span class="img-name">Fig 5. Results of Ceres docking</span>
      <span class="img-hint"
        >Molecular docking simulation using 16C alkanes instead of polyethylene.
        The gray-blue backbone structure indicates the 16C alkanes and the
        gray-white is the Surface structure of the protein. The figure shows the
        stacking of multiple ligand binding, each stacked ligand may be a
        binding site.</span
      >
      <img src="https://static.igem.wiki/teams/4627/wiki/model/model-6.png" />
      <span class="img-name">Fig 6. Localized docked structure</span>
      <span class="img-hint"
        >A few close amino acids suggesting possible involvement in the protein
        activity.</span
      >
      <TextWithImage :textContent="textContent15"></TextWithImage>
      <TextWithImage
        mainTitle="Molecular Dynamics"
        aid="MD"
        subTitle="Introduction"
        :textContent="textContent16"
      ></TextWithImage>
      <TextWithImage
        mainTitle="Basic principles of molecular dynamics simulation"
        subTitle="Time evolution algorithm"
        :textContent="textContent17"
      ></TextWithImage>
      <img
        src="https://static.igem.wiki/teams/4627/wiki/model-7.svg"
        style="width: 20%"
      />
      <TextWithImage :textContent="textContent18"></TextWithImage>
      <img
        src="https://static.igem.wiki/teams/4627/wiki/model-8.svg"
        style="width: 40%"
      />
      <img
        src="https://static.igem.wiki/teams/4627/wiki/model-9.svg"
        style="width: 60%"
      />
      <TextWithImage :textContent="textContent19"></TextWithImage>
      <img
        src="https://static.igem.wiki/teams/4627/wiki/model-10.svg"
        style="width: 50%"
      />
      <img
        src="https://static.igem.wiki/teams/4627/wiki/model-11.svg"
        style="width: 50%"
      />
      <TextWithImage :textContent="textContent20"></TextWithImage>
      <TextWithImage :textContent="textContent21"></TextWithImage>
      <TextWithImage :textContent="textContent22"></TextWithImage>
      <img
        src="https://static.igem.wiki/teams/4627/wiki/model-12.svg"
        style="width: 40%"
      />
      <img
        src="https://static.igem.wiki/teams/4627/wiki/model-13.svg"
        style="width: 40%"
      />
      <TextWithImage
        subTitle="Materials and Methods"
        :textContent="textContent23"
      ></TextWithImage>
      <TextWithImage :textContent="textContent24"></TextWithImage>
      <TextWithImage :textContent="textContent25"></TextWithImage>
      <TextWithImage
        subTitle="Analytical techniques"
        :textContent="textContent26"
      ></TextWithImage>
      <TextWithImage :textContent="textContent27"></TextWithImage>
      <img
        src="https://static.igem.wiki/teams/4627/wiki/model-14.svg"
        style="width: 50%"
      />
      <TextWithImage :textContent="textContent28"></TextWithImage>
      <TextWithImage :textContent="textContent29"></TextWithImage>
      <img
        src="https://static.igem.wiki/teams/4627/wiki/model-15.svg"
        style="width: 40%"
      />
      <TextWithImage :textContent="textContent30"></TextWithImage>
      <img
        src="https://static.igem.wiki/teams/4627/wiki/model-16.svg"
        style="width: 40%"
      />
      <TextWithImage
        subTitle="Results and Discussion"
        :textContent="textContent31"
      ></TextWithImage>
      <img src="https://static.igem.wiki/teams/4627/wiki/model/model-17.png" />
      <span class="img-name"
        >Fig 7. Main strand RMSD of 300K wild type and mutant type as a function
        of time (shown in red and black colors, respectively)</span
      >
      <TextWithImage :textContent="textContent32"></TextWithImage>
      <img src="https://static.igem.wiki/teams/4627/wiki/model/model-18.png" />
      <span class="img-name"
        >Fig 8. Main strand RMSD of 300K wild type and mutant type as a function
        of time (shown in red and black colors, respectively)</span
      >
      <TextWithImage :textContent="textContent33"></TextWithImage>
      <img src="https://static.igem.wiki/teams/4627/wiki/model/model-19.png" />
      <span class="img-name"
        >Fig 9. Cartoon structure around theα-helix of the wild
        type(191-202)</span
      >
      <img src="https://static.igem.wiki/teams/4627/wiki/model/model-20.png" />
      <span class="img-name"
        >Fig 10. Cartoon structure around theα-helix of the mutant
        (191-202)</span
      >
      <TextWithImage
        main-title="References"
        aid="References"
        :textContent="textContent34"
      ></TextWithImage>
    </content-decorate>
  </div>
</template>
  
  <script setup>
import ContentDecorate from "@/components/content-decorate.vue";
import TextWithImage from "@/components/text-with-image.vue";
const textContent1 = [
  "In the process of model construction and analysis, we need to use some simulation and analysis software to carry out computer simulations and calculations. At the same time, we determine the sites we need to modify and the methods of modification based on the results of these calculations. In our sequence-based design and simulation process, some software has many advantages for our experimental design.",
  "AlphaFold2 makes predictions of protein structures. GROMACS performs analytical kinetic simulations. FoldX calculates ΔΔG with Rosetta and designs protein mutation MOE (Molecular Operating Environment) molecular docking simulations to identify possible active sites.",
  "These simulations were performed theoretically and their veracity and reliability need to be experimentally validated and tested. Our work may provide a template for modeling operations for similar experiments to standardize the steps and to some extent enable the software to operate with high efficiency.",
];
const textContent2 = [
  "AlphaFold2 is an artificial intelligence software developed by DeepMind to predict the 3D structure of proteins. AlphaFold2 predicts with high enough accuracy to approximate experimental measurements. This power depends on a large enough database and a well-developed deep learning model. Specifically, it analyzes amino acid interactions and predicts how proteins are likely to fold through a technique called graph neural networks. By extracting and pairing feature information from protein-level structures, a deep learning model called “Transformer” is used to understand and interpret patterns in amino acid sequences and translate these structures into the 3D structure of the protein. Finally, optimization is performed to match the predicted pairs and distances[1].",
  "In our experiments, AlphaFold2 belongs to the very important tools. The protein structures that our experiments follow are predicted based on this tool[2]. And the subsequent determination of the structure after mutation was also predicted by this software. In this process, we performed a series of protein mutations. We were able to determine whether the structure we wanted appeared or not by this methord.",
];
const textContent3 = [
  `We chose to use the online notebook on Google Colab for protein structure prediction, which uses Google's online platform, eliminating the need to download the appropriate database and code locally and saving us unnecessary hassle. We just need to enter the sequence information in the corresponding position, click the "Run All" button, and the notebook will run automatically. Waiting for a few moments, we can obtain the structural information and the pIDDT properties that predict the stability of the structure.`,
];
const textContent4 = [
  "We used AlphaFold2 to predict the structures of two different proteins and made a series of mutations based on these structures, we predicted the results of a large number of mutations and analyzed them by other software to finally determine the structure of the relevant amino acids with better results. The following are the prediction results of our two proteins:",
];
const textContent5 = [
  "FoldX is a commonly used software for calculating protein structural stability and mutation effects. It is less difficult to use and has more concise commands[3]. Moreover, it has a visual program interface, which makes structural observation and mutation design easier. FoldX uses a model called force field, which is based on the interactions between atoms in proteins. The force field parameters are mainly derived from experimental data and can be used to predict protein stability, mutational effects, and protein interactions with ligands, DNA, or other proteins. It can be used as a tool to predict the effect of amino acid mutations on protein stability and to optimize protein design.",
  "FoldX calculates the energy of each amino acid site by simulation and uses the following energy function to evaluate the energy and calculate the ΔΔG of the mutated amino acid:",
];
const textContent6 = [
  "Rosetta is also a commonly used software that is widely used for protein stability calculations[4]. This software is very powerful whose calculated results are closer to the real values, while it is more convenient for protein mutation design. It provides a large number of scoring functions, which attempt to simulate a variety of physical and chemical forces, such as van der Waals forces, hydrogen bonding, electrostatic interactions, solvation energies, and preferences for steric conformations. So we can predict the possible three-dimensional structure of the protein that have a given sequence of amino acids in natural conditions[5]. Rosetta also integrates with a number of programs related to protein design, and in the program's pages, it is possible to make protein prediction and rational design. However, it is difficult to use and will take up a lot of storage space. What’s more, it requires a more demanding computer configuration.",
];
const textContent7 = [
  "FoldX has written the command names and usage methods on its official website for easy access, and each command has a simple example for demonstration (https://foldxsuite.crg.eu/documentation#manual). Meanwhile, FoldX supports the use of YASARA as the visualization interface. You can install the plug-in in YASARA according to the method mentioned in the official document of FoldX. The software can be normally used after installation. Take the code of all amino acids in all sites of a mutated protein as an example, FoldX can also use similar batch scripts:",
];
const code1 = `
@echo off
setlocal EnableDelayedExpansion
rem **** change to your amino acid sequence
set res=****

set num=1

for /l %%i in (1,1,***) do (
rem ***Modify to your protein residue number
	set aa=!res:~0,1!
	set res=!res:~1!
	set pos=!aa!A%%ia
	rem If there is a B or C chain, you need to change the A to the corresponding chain number for the calculation
	if %%i gtr ** (
	rem ** change to the number of the first amino acid residue you want to calculate -1, e.g. virtual saturation mutation from the first, **=0
	FoldX --command=PositionScan --pdb=300k.pdb --position=!pos! --output-file="%%i")
	rem 300k.pdb needs to be changed to your own protein file name
	if %%i gtr * goto:end
	rem * Modify to the last amino acid residue number you want to calculate -1, e.g. to calculate to amino acid number 300, *=299
)
:end
pause
`;

const textContent8 = [
  "Rosetta has several versions of source code on the official website, you can refer to Rosetta's official instructions for compilation and installation. There are a number of user guides and documentation available for easy access. In addition, PyRosetta is an important complement to Rosetta, supporting Rosetta in python, and can be combined with PyMOL and other software to facilitate the observation of protein structure.",
  "Below is an example script that runs a single site mutation to mutate the amino acid at site 100 of a protein to ALA for a pdb file at the specified path:",
];
const code2 = `
#! /bin/bash

# Rosetta's path
ROSETTA_PATH=/path/to/rosetta
PDB_PATH=/home/milu/my_protein.pdb
MUTATION_FILE=/home/milu/mutations.list

# Run the mutation
$ROSETTA_PATH/main/source/bin/rosetta_scripts.default.linuxgccrelease -s $PDB_PATH -parser:protocol mutate.xml -extra_res_fa $MUTATION_ FILE

# Perform ddG calculations
$ROSETTA_PATH/main/source/bin/ddg_monomer.default.linuxgccrelease -s mutate_output.pdb -mut_file $MUTATION_FILE -ddg::weight_file soft_ rep_design\n -ddg::iterations 50 -ddg::dump_pdbs true -ignore_unrecognized_res true
`;
const textContent9 = [
  "Where mutate.xml is an XML file that specifies the parameters for the MutateResidue module, as follows:",
];
const code3 = `
<ROSETTASCRIPTS>
  <TASKOPERATIONS>
    <ResfileCommandOperation name="resfile" command="NATAA"/>
  </TASKOPERATIONS>
  <MOVERS>
    <MutateResidue name="mutate" target="100A" new_res="ALA"/>
  </MOVERS>
  <PROTOCOLS>
    <Add mover="mutate"/>
  </PROTOCOLS
</ROSETTASCRIPTS>
`;
const textContent10 = [
  "In this XML file you need to set the target attribute to the location of the amino acid you want to mutate and the new_res attribute to the \ntype of new amino acid you want. Also, the results of the ddG calculation will be printed on the console.",
];
const textContent11 = [
  "We obtained a large number of specific values about the thermodynamic properties of proteins. Based on these values, design of the corresponding amino acid sites was carried out. In order to utilize the software more efficiently, we combined the mutation scenarios of individual sites separately to create multiple rounds of mutations. These mutations can be iterated for 10 rounds. Based on the results of the iterations, we selected some results where ΔΔG was significantly reduced. The figure below depicts the heatmap we obtained after mutation and screening of the flexible loci. Where the redder color indicates a smaller ΔΔG and a more stable structure of the predicted protein.",
];
const textContent12 = [
  "Molecular docking is a computational tool for predicting binding modes and binding free energies of proteins and ligands based on their recognition and binding mechanisms in biology. It is widely used in drug discovery and other fields. In our experimental project, molecular docking is utilized as a tool to search and simulate the corresponding active sites, which helps us to better modify proteins. Although we obtained information about the activity and thermal stability of the enzyme in our experiments, molecular mechanism of the reaction is still unknown[6]. Therefore, in order to better understand the mechanism of enzyme action, we need to use molecular docking software to predict the binding sites of enzymes.",
  "MOE is a commonly used molecular docking prediction software which is powerful and suitable for drug discovery and molecular simulation. Molecular docking is also one of the important tools. Molecular docking can be easily and quickly performed with MOE, which greatly reduces the workload of debugging by yourself.",
  "Nowadays, there are many molecular docking structure prediction software, among which Autodock series is commonly used for molecular docking simulation., Corresponding software has been designed to improve the performance and speed of Autodock itself, such as Vina, which is still relatively difficult to use and requires a certain level of programming to use effectively.",
  "MOE provides a full set of molecular modeling tools, including molecular editing, conformational analysis, ligand docking and virtual screening. It helps various drug molecular design and analysis, and also includes tools related to design protein.",
];
const textContent13 = [
  "· Protein Processing",
  "After importing pdb files of proteins, Quickprep can be used for rapid structure preparation. In this process, receptors, ions and water molecules will be removed and some missing atoms in the protein will be filled.",
  "·	Ligand preparation",
  "Molecules can be drawn in Chemdraw using MOE's own Chemdraw-related plug-ins and drawn small molecules can be easily imported. Due to the complex structure of polyethylene, we usually do not need such large polymers for our simulations. Therefore, we use alkanes containing 16 or 18 C to simulate polyethylene. These alkanes have bonds similar to those of polyethylene and are flexible enough to simulate the molecular dynamics of polyethylene. No additional settings such as bond angles for small molecules are required in this process.",
  "·	Molecular Docking",
  "The processed proteins can be docked using the program's docking tools. MOE offers varies of docking tools. In this case we used the generic mode. During docking, we use semi-flexible docking, which immobilizes the proteins while allowing the small molecules to stretch and twist to some extent. So we can find more suitable docking sites.",
  "Since we are not sure of the location of the binding site beforehand, we first perform a site search, and after selecting the appropriate binding site, we select the appropriate dummy and model these positions as binding sites in the docking.",
  "In the method interface, the scoring methods and poses for placement and refinement remain the same since we are using the regular run method.",
  "After running the docking command, we can check the docking at each position.",
];
const textContent14 = [
  "In total, we obtained multiple possible structural positions and ligand mimic sites after performing molecular docking. These sites are mainly focused on certain specific binding sites, so we believe that the binding sites where the most ligands are present are most likely to be the binding sites of the protein. The figure below shows our predicted protein binding sites and the corresponding docking positions of the small molecule alkanes.",
];
const textContent15 = [
  "After performing AlphaFold2 simulation predictions, we found no changes in the structure of corresponding sites. We believe that these sites are the reaction sites of the enzyme. Several neighboring amino acids may play a role in covalent bonding and catalysis.",
];
const textContent16 = [
  "Since our main objective is to improve the thermal stability of the enzyme, here we want to validate our results through simulations. We have two options. One is to use the static information of the enzyme to make predictions, and the other is to use molecular dynamics simulations to make predictions. As a rule of thumb, the latter tends to give better predictions. Moreover, it can provide more information at the molecular level for later analysis. Therefore, here we choose molecular dynamics simulation to predict the stability of the enzyme at high temperature[7].",
];
const textContent17 = [
  "Time evolution algorithm",
  "The most basic principle of molecular dynamics is Newton's second law of motion. Newton's second law of motion states that the acceleration a of a mass depends on the mass m acting on the object and the combined force F acting on the object.",
];
const textContent18 = [
  "As the acceleration a(t) is the second derivative of the position r(t) with respect to time, given the initial position and velocity of the particle (r(t0), v(t0)), their temporal evolution can be computed by integrating a(t) =F(t)/m as follows:",
];
const textContent19 = [
  "In the case of complex biomolecular systems with many particles and multiple interactions acting between them, it is impossible to integrate analytically Eq. 2, while a different and feasible approach consists in discretising Eq. 1. The idea is to consider very short time steps of length Δt so The idea is to consider very short time steps of length Δt so that in such intervals the forces are (almost) constant, and the integration of Eq. 2 becomes trivial. A careful choice of the values to integrate allows reducing the approximations derived from such an approach. This framework is at the basis of the leap-frog algorithm, which is used in the vast majority of This framework is at the basis of the leap-frog algorithm, which is used in the vast majority of MD simulations engines:",
];
const textContent20 = [
  `Thus, the algorithm can "solve" every possible Newtonian equation, but at the expense of accuracy.`,
];
const textContent21 = [
  "Interaction functions and force fields",
  "The potential energy function can be divided into three parts.",
  "The non-bonded terms: Lennard-Jones or Buckingham, and Coulomb or modified Coulomb. The calculation of non-bonding interactions is based on the list of neighbourhoods (list of non-bonding atoms within a certain radius) from which the exclusion terms have been removed.",
  "Bonding terms: covalent bond stretching, bond angle bending, anomalous dihedral angles, and normal dihedral angles. The calculation of these terms is based on a fixed list.",
  "Constraints: position constraints, angle constraints, distance constraints, orientation constraints, and dihedral angle constraints are calculated based on a fixed list.",
];
const textContent22 = [`Non-bonded interactions in GROMACS are pair-additive:`];
const textContent23 = [
  "Preparation of the starting model",
  "The wet experiment gives the crystal structure of the target protein ceres to be modified. The starting model was prepared for molecular dynamics simulations with all heteroatoms, such as NO 3 - and water of crystallisation, removed.",
  "In order to obtain the structure of the mutant with more confidence, we used AlphaFold2 to fold the structure of the mutant and check the structure for irrational bonds and anomalous structures.",
];
const textContent24 = [
  "Molecular dynamics simulation setup",
  "MD simulations were performed using GROMACS 5.1.2 and the OPLS-AA force field. The structural model was solvated individually using single point charge (SPC) water molecules in a square box with a minimum solute wall distance of 1.0 nm.To neutralise the system, Na + and Cl - were introduced into the system to achieve a concentration of 150 mM and the most rapid descent energy minimisation was successfully performed. Subsequently, we performed several consecutive 100 ps position-constrained MD simulations in the isovolumetric isothermal (NVT) and isothermal isobaric (NPT) systems, respectively, to pre-equilibrate the system at 300 K and standard atmospheric pressure. To ensure continuity, the simulations inherit the final topology and atomic velocities from previous results. The system was visually inspected to see if integrity was maintained.",
];
const textContent25 = [
  "Production MD simulation setup",
  "The production MD simulation was executed for 100ns in 2fs time steps, with coordinates saved every 8ps. The solute, solvent, and counterion were independently coupled to a reference temperature bath at 300 K with a coupling constant τ_t of 0.1 ps. Pressure was maintained by weakly coupling the system to an external pressure bath at 1 atmosphere (coupling constant τ_p of 2 ps). The long-range electrostatic interactions were treated using the particle mesh Ewald (PME) method with a real-space cut-off of 1.0 nm, a grid spacing of 0.16 nm, and an interpolation order of 4. Van der Waals (vdW) interactions were treated using the Verlet scheme with a cut-off distance of 1.0 nm. the LINCS algorithm was used to limit the bond lengths to their equilibrium position.",
];
const textContent26 = [
  `Routine geometrical analyses such as hydrogen bond number (NHB), natural contact number (NNC), residue number in secondary structure elements (SSE), radius of gyration (Rg), solvent accessible surface area (SASA) and root mean square deviation (RMSD) were performed using the programmes g_hbond, g_mindist, do_dssp, g_gyrate, g_ sas and g-rms were performed. Potential energy (ENE) was calculated using the OPLS-AA all-atom force field via the program g_energy[8][9]. `,
];
const textContent27 = [
  `Structural root-mean-square deviation`,
  `The root-mean-square deviation (RMSD) of certain atoms in a molecule with respect to a reference structure can be calculated using the programme gmx rms by performing a least-squares fit of the structure to the reference structure (t2 = 0) and subsequently calculating the RMSD.`,
];
const textContent28 = [
  `where ri(t1) and ri(t2) are the positions of the atoms at this time. The fit does not have to use the same atoms as the RMSD calculation; for example, proteins are usually mounted on backbone atoms (N, C, C), but the RMSD can be calculated for the backbone or the whole protein.`,
];
const textContent29 = [
  `Root Mean Square Fluctuation`,
  `The RMSF function calculates the root-mean-square fluctuations of the positions of atoms in a trajectory after (optionally) fitting a reference system.`,
];
const textContent30 = [
  `With the option -oq, the RMSF values are converted to B-factor values that can be written to a pdb file.`,
];
const textContent31 = [
  `The results show that the overall structure of MT has higher thermal stability than that of WT, and the overall flexibility of the skeleton is similar to that of WT.`,
];
const textContent32 = [
  `The B factor can indicate the flexibility of the main chain near each protein residue. The higher the B factor, the higher the flexibility of the main chain near the residue, and the worse the thermal stability of this region. In general, rings have a higher B factor, while alpha spirals and beta folds usually have a lower B factor. There is a conversion relationship between B factor and RMSF.`,
];
const textContent33 = [
  `The results showed that our mutant had higher thermal stability between 191-202. As shown in Figure 10, we found in the molecular dynamics simulation results of wild type and mutant that the mutant had a more stable α-helical structure at 191-203.`,
];
const textContent34 = [
  `[1] Jumper, J. et al. (2021). Highly accurate protein structure prediction with AlphaFold. *Nature*, 596(7873), 583–589. [DOI: 10.1038/s41586-021-03819-2](https://doi.org/10.1038/s41586-021-03819-2)`,
  `[2] Senior, A. W. et al. (2020). Improved protein structure prediction using potentials from deep learning. *Nature*, 577(7792), 706–710. [DOI: 10.1038/s41586-019-1923-7](https://doi.org/10.1038/s41586-019-1923-7)`,
  `[3] A graphical interface for the FoldX forcefield.,Van Durme, Joost, Delgado Javier, Stricher Francois, Serrano Luis, Schymkowitz Joost, and Rousseau Frederic, Bioinformatics, 2011 Jun 15, Volume 27, Issue 12, p.1711-2, (2011)`,
  `[4] Rohl, C. A., Strauss, C. E., Misura, K. M., & Baker, D. (2004). Protein structure prediction using Rosetta. *Methods in Enzymology*, 383, 66–93. [DOI: 10.1016/S0076-6879(04)83004-0](https://doi.org/10.1016/S0076-6879(04)83004-0)`,
  `[5] Moult, J., Fidelis, K., Kryshtafovych, A., Schwede, T., & Tramontano, A. (2018). Critical assessment of methods of protein structure prediction (CASP)—Round XII. *Proteins: Structure, Function, and Bioinformatics*, 86(S1), 7–15. [DOI: 10.1002/prot.25415](https://doi.org/10.1002/prot.25415)`,
  `[6] Labute, P. (2007). The Molecular Operating Environment. *Drug Discovery Today Technologies*, 4(4), 185–190. [DOI: 10.1016/j.ddtec.2007.12.002](https://doi.org/10.1016/j.ddtec.2007.12.002)`,
  `[7] Yu H, Yan Y, Zhang C, Dalby PA. Two strategies to engineer flexible loops for improved enzyme thermostability. Sci Rep. 2017 Feb 1;7:41212. doi: 10.1038/srep41212. PMID: 28145457; PMCID: PMC5286519.`,
  `[8] Yu H, Dalby PA. Coupled molecular dynamics mediate long- and short-range epistasis between mutations that affect stability and aggregation kinetics. Proc Natl Acad Sci U S A. 2018 Nov 20;115(47):E11043-E11052. doi: 10.1073/pnas.1810324115. Epub 2018 Nov 7. PMID: 30404916; PMCID: PMC6255212.`,
  `[9] Yu H, Dalby PA. Exploiting correlated molecular-dynamics networks to counteract enzyme activity-stability trade-off. Proc Natl Acad Sci U S A. 2018 Dec 26;115(52):E12192-E12200. doi: 10.1073/pnas.1812204115. Epub 2018 Dec 10. PMID: 30530661; PMCID: PMC6310800.`,
];
const navigation = [
  "overview",
  "Alphafold2",
  "FoldX",
  "MOE",
  "MD",
  "References",
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
pre {
  max-width: 100%;
  overflow: auto;
}
</style>