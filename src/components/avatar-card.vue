<template>
  <div class="cardContainer">
    <img
      :src="props.avatar"
      class="profileDiv content-avatar"
      :style="props.special ? 'width:250px;border-radius:50%' : ''"
    />
    <div class="infoDiv">
      <div class="nameDiv">
        <p class="name">{{ props.name }}</p>
        <p class="role">{{ props.title }}</p>
      </div>
      <div class="socialDiv">
        {{ props.description }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps([
  "avatar",
  "name",
  "title",
  "description",
  "special",
]);
</script>

<style scoped>
.cardContainer {
  width: 225px;
  height: 197.36px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition-duration: 0.5s;
  cursor: pointer;
  margin: 0 120px;
  margin-bottom: 150px;
}
.content-avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.profileDiv {
  z-index: 2;
  width: 100%;
  height: 100%;
  transition-duration: 0.5s;
}

.cardContainer:hover .profileDiv {
  transform: translateX(-60%) translateY(-20%);
  transition-duration: 0.5s;
}

.infoDiv {
  position: absolute;
  width: 170%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.5s;
}

.cardContainer:hover .infoDiv {
  opacity: 1;
}

.nameDiv {
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 2px;
}

.name {
  margin: 0;
  padding: 0;
  font-size: 18px;
  font-weight: 500;
  color: black;
  font-weight: 700;
}

.role {
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-weight: 400;
  color: rgb(48, 48, 48);
  margin-bottom: 5px;
}

.socialDiv {
  width: 80%;
  height: 100%;
  display: flex;
  text-align: justify;
  flex-direction: column;
  color: rgb(14, 14, 14);
  gap: 25px;
  font-size: 15px;
  text-indent: 2em;
}
</style>