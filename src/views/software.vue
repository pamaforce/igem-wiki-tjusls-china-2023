<template>
  <div class="main">
    <img
      src="https://static.igem.wiki/teams/4627/wiki/other-background.png"
      class="other-background"
    />
    <div class="page-title">software</div>
    <content-decorate style="margin-top: -20vh" :navigation="navigation">
      <text-with-image
        :text-content="[
          'When doing sequence design, manual substitutions can be slow and may result in errors. We would like to design a simple little program to help us design sequences better for our structure prediction using AlphaFold2. The user enters the number of protein sequences, clicks the Generate Input Fields button, and the application generates the appropriate number of input fields for the user to enter each protein sequence, mutation position, and target amino acid. After the user fills in all the information, click the Execute Mutation button and the application will perform a mutation operation on each sequence, and the result of the mutation will be displayed in the text box below. Specifically, the mutation operation includes checking whether the input sequence is valid, whether it is a DNA sequence, and performing the mutation at the specified position. Please click here to view the software:',
        ]"
      ></text-with-image>
      <a href="https://github.com/Milucoloryn/igem-pattern" target="_blank"
        >https://github.com/Milucoloryn/igem-pattern</a
      >
    </content-decorate>
  </div>
</template>

<script setup>
import TextWithImage from "@/components/text-with-image.vue";
import ContentDecorate from "@/components/content-decorate.vue";
const navigation = [];
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
