<template>
  <div class="game-panel">
    <div class="side-controller">
      <p>Your score: {{ score }}</p>
      <img
        src="https://static.igem.wiki/teams/4627/wiki/start.svg"
        class="icon"
        @click="startGame()"
      />
      <img
        src="https://static.igem.wiki/teams/4627/wiki/stop.svg"
        class="icon"
        @click="stopGame()"
      />
      <img
        src="https://static.igem.wiki/teams/4627/wiki/refresh.svg"
        class="icon"
        @click="restartGame()"
      />
    </div>
    <div class="game-main" ref="gameMain">
      <img
        v-for="item in plasticStyle"
        src="https://static.igem.wiki/teams/4627/wiki/use-4.png"
        class="plastic"
        ref="plastic"
        :style="item.content"
        :key="item"
      />
      <img
        v-for="item in boomStyle"
        src="https://static.igem.wiki/teams/4627/wiki/boom.svg"
        class="boom"
        :key="item"
        :style="item.content"
      />
      <img
        src="https://static.igem.wiki/teams/4627/wiki/enzyme.svg"
        class="enzyme"
        ref="enzyme"
        :style="enzymeStyle"
      />
    </div>
  </div>
</template>
<script setup>
/* eslint-disable */
import { nextTick, ref } from "vue";

const score = ref(0);
const gameMain = ref();
let plasticCreate = null;
let plasticMove = null;
let boomCreate = null;
let boomMove = null;
let keydownListener = null;

const plasticStyle = ref([]);
const boomStyle = ref([]);

const enzyme = ref();
const position = { left: 0 };
const enzymeStyle = ref({
  transform: "translateX(0px)",
});

function startGame() {
  boomCreate = setInterval(() => {
    let left =
      Math.random() * (gameMain.value.getBoundingClientRect().width - 50);
    boomStyle.value.push({
      content: {
        transform: "translateY(0px)",
        left: left + "px",
      },
      position: {
        top: 0,
        left: left,
      },
    });
  }, 5000);
  plasticCreate = setInterval(() => {
    let left =
      Math.random() * (gameMain.value.getBoundingClientRect().width - 50);
    plasticStyle.value.push({
      content: {
        transform: "translateY(0px)",
        left: left + "px",
      },
      position: {
        top: 0,
        left: left,
      },
    });
  }, 2000);
  boomMove = setInterval(() => {
    let gameMainHeight = gameMain.value.getBoundingClientRect().height;
    let enzymeHeight = enzyme.value.getBoundingClientRect().height;
    let enzymeX = enzyme.value.getBoundingClientRect().x;
    let gameMainX = gameMain.value.getBoundingClientRect().x;
    let enzymeWidth = enzyme.value.getBoundingClientRect().width;
    boomStyle.value.forEach((item) => {
      if (item.position.top > gameMainHeight - enzymeHeight) {
        boomStyle.value.shift(item);
      }
      if (
        item.position.top > gameMainHeight - 2 * enzymeHeight &&
        item.position.left > enzymeX - gameMainX - enzymeWidth &&
        item.position.left < enzymeX - gameMainX + enzymeWidth
      ) {
        boomStyle.value.shift(item);
        alert("You lose!");
        stopGame();
      }
      item.position.top += 0.75;
      item.content.transform = `translateY(${item.position.top}px)`;
    });
  }, 20);
  plasticMove = setInterval(() => {
    let gameMainHeight = gameMain.value.getBoundingClientRect().height;
    let enzymeHeight = enzyme.value.getBoundingClientRect().height;
    let enzymeX = enzyme.value.getBoundingClientRect().x;
    let gameMainX = gameMain.value.getBoundingClientRect().x;
    let enzymeWidth = enzyme.value.getBoundingClientRect().width;
    plasticStyle.value.forEach((item) => {
      if (item.position.top > gameMainHeight - enzymeHeight) {
        plasticStyle.value.shift(item);
      }
      if (
        item.position.top > gameMainHeight - 2 * enzymeHeight &&
        item.position.left > enzymeX - gameMainX - enzymeWidth &&
        item.position.left < enzymeX - gameMainX + enzymeWidth
      ) {
        plasticStyle.value.shift(item);
        score.value++;
      }
      item.position.top += 1.5;
      item.content.transform = `translateY(${item.position.top}px)`;
    });
  }, 20);
  keydownListener = document.body.addEventListener("keydown", keyMove);
}

function stopGame() {
  clearInterval(boomCreate);
  clearInterval(boomMove);
  clearInterval(plasticCreate);
  clearInterval(plasticMove);
  document.body.removeEventListener("keydown", keyMove, false);
}
function restartGame() {
  boomStyle.value = [];
  plasticStyle.value = [];
  score.value = 0;
}
function keyMove(event) {
  switch (event.key) {
    case "ArrowRight": {
      if (
        enzyme.value.getBoundingClientRect().right >
        gameMain.value.getBoundingClientRect().right - 10
      )
        break;
      position.left += 15;
      enzymeStyle.value.transform = `translateX(${position.left}px)`;
      break;
    }
    case "ArrowLeft": {
      if (
        enzyme.value.getBoundingClientRect().left <
        gameMain.value.getBoundingClientRect().left + 10
      )
        break;
      position.left -= 15;
      enzymeStyle.value.transform = `translateX(${position.left}px)`;
      break;
    }
    default:
  }
}
</script>

<style scoped>
html,
body,
#app {
  height: 100vh;
  width: 100%;
  margin: 0;
}
p {
  margin: 0;
}
.game-panel {
  background: rgba(135, 207, 235, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 50px 0;
}
.side-controller {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: rgba(255, 0, 0, 0.1);
}
.game-main {
  height: 70vh;
  width: 70vw;
  background: rgba(172, 255, 47, 0.1);
  position: relative;
}
.icon {
  height: 30px;
  cursor: pointer;
}
.enzyme {
  height: 50px;
  position: absolute;
  bottom: 0;
}
.plastic {
  height: 50px;
  position: absolute;
  top: 0;
}
.boom {
  height: 50px;
  position: absolute;
  top: 0;
}
</style>