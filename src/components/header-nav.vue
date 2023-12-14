<template>
  <div class="head-nav">
    <div class="head-nav_conter">
      
      <div class="navbar" ref="navbar" @mouseleave="hideMenu">
        <div
          class="router-box"
          v-for="(item, i) in router_box"
          :key="i"
          @mouseenter="(e) => moveMenu(e, i)"
          @click="toRoute(i)"
        >
          <p class="router-name">{{ item.name }}</p>
        </div>
      </div>

      <div class="menu_btn">
          <el-icon color="#ffffff" size="40" class="no-inherit" @click="isShowNav = true">
            <Menu />
          </el-icon>
      </div>

      <img
        src="https://static.igem.wiki/teams/4627/wiki/logo.png"
        class="team-logo"
        @click="toRoute(0)"
      />
      
      <!-- 竖版导航 -->
      <div class="navbar_vertical" :class="isShowNav ? 'navbar_vertical_show':''">
        <div class="btn_div">
          <el-icon color="#ffffff" size="30" class="no-inherit" @click="isShowNav = false">
            <CloseBold />
          </el-icon>
        </div>

        <el-menu
          active-text-color="#fed815"
          background-color="rgba(46, 78, 126)"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
          :unique-opened="true"
        >
          <template v-for="(item, index) in router_box" :key="index">

            <el-menu-item :index="item.name" v-if="item.sub_router.length == 0" @click="toPaths(item.path)">
              <el-icon><DocumentCopy /></el-icon>
              <span>{{ item.name }}</span>
            </el-menu-item>

            <el-sub-menu :index="item.name" v-if="item.sub_router.length != 0">
              <template #title>
                <el-icon><DocumentCopy /></el-icon>
                <span>{{ item.name }}</span>
              </template>
              <el-menu-item-group title="">
                <el-menu-item :index="child.name" :key="child.name" v-for="child in item.sub_router" @click="toPaths(child.path)">{{ child.name }}</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>

          </template>
        </el-menu>
      </div>

      <div
        :class="'nav-menu' + (aniMenu ? ' ani' : '')"
        ref="menu"
        :style="{
          left: `${menuPosition}px`,
          opacity: `${menuOpacity}`,
          maxHeight: `${menuHeight}px`,
        }"
        @mouseenter="moveEnterMenu"
        @mouseleave="hideMenu"
      >
        <div
          class="menu-item"
          v-for="(item, i) in menuItem"
          :key="i"
          @click="toPath(item.path)"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
    <el-backtop :right="100" :bottom="100" />
  </div>
  <div class="header"></div>
</template>

<script>
import { CloseBold, Menu , DocumentCopy} from '@element-plus/icons-vue';
export default {
  data() {
    return {
      showMenu: false,
      menuPosition: 0,
      aniMenu: false,
      menuOpacity: 0,
      menuHeight: 0,
      menuWidth: 0,
      menuItem: [],
      timer: null,
      router_box: [
        {
          name: "Home",
          path: "/",
          sub_router:[]
        },
        {
          name: "Project",
          sub_router: [
            { name: "Description", path: "/description" },
            { name: "Design", path: "/design" },
            { name: "Engineering", path: "/engineering" },
            { name: "Experiments", path: "/experiments" },
            { name: "Results", path: "/results" },
            { name: "Implementation", path: "/implementation" },
            { name: "Contribution", path: "/contribution" },
            { name: "Safety", path: "/safety" },
            { name: "Notebook", path: "/notebook" },
          ],
          is_show: false,
        },
        {
          name: "Parts",
          path: "/parts",
          sub_router: [],
          is_show: false,
        },
        {
          name: "Model",
          sub_router: [
            { name: "Model", path: "/model" },
            { name: "Software", path: "/software" },
            { name: "Hardware", path: "/hardware" },
          ],
          is_show: false,
        },
        {
          name: "HP",
          sub_router: [
            { name: "Overview", path: "/human-overview" },
            { name: "Integrated Human Practices", path: "/human-practices" },
            { name: "Science Communication", path: "/communication" },
            { name: "Game", path: "/game" },
          ],
          is_show: false,
        },
        {
          name: "Team",
          sub_router: [
            { name: "Team Members", path: "/team" },
            { name: "Attributions", path: "/attributions" },
            { name: "Collaborations", path: "/collaborations" },
          ],
          is_show: false,
        },
        {
          name: "Judgement",
          sub_router: [
            { name: "Gold", path: "/gold" },
            { name: "Silver", path: "/silver" },
            { name: "Bronze", path: "/bronze" },
            { name: "Awards", path: "/awards" },
          ],
          is_show: false,
        },
      ],
      activeIndex: 1,
      isShowNav: false
    };
  },
  created(){},
  components:{
    CloseBold, Menu, DocumentCopy
  },
  methods: {
    moveMenu(event, i) {
      let flag = false;
      if (this.showMenu === false) {
        flag = true;
      }
      this.showMenu = true;
      this.menuItem = this.router_box[i].sub_router || [];
      this.$forceUpdate();
      this.$nextTick(() => {
        const rect = event.target.getBoundingClientRect();
        const menuRect = this.$refs.menu.getBoundingClientRect();
        if (flag) {
          this.aniMenu = false;
          this.showMenu = false;
          this.$nextTick(() => {
            this.menuPosition = rect.left + rect.width / 2 - menuRect.width / 2;
            setTimeout(() => {
              this.aniMenu = true;
              this.showMenu = true;
              this.$nextTick(() => {
                this.menuOpacity = 1;
                this.menuHeight = 400;
              });
            }, 0);
          });
        } else {
          this.menuPosition = rect.left + rect.width / 2 - menuRect.width / 2;
          this.menuOpacity = 1;
          this.menuHeight = 400;
        }
      });
    },
    toRoute(i) {
      let path = this.router_box[i].path || this.router_box[i].sub_router[0].path || "/";
      this.$router.push(path);
      this.isShowNav = false;
    },
    toPaths(path){
      this.$router.push(path);
      this.isShowNav = false;
    },
    toPath(path) {
      this.$router.push(path);
      this.aniMenu = true;
      this.menuOpacity = 0;
      this.menuHeight = 0;
      this.timer = setTimeout(() => {
        this.showMenu = false;
        this.aniMenu = false;
      }, 500);
    },
    moveEnterMenu() {
      setTimeout(() => {
        this.menuOpacity = 1;
        this.menuHeight = 400;
        clearTimeout(this.timer);
        this.showMenu = true;
      }, 0);
    },
    hideMenu() {
      this.aniMenu = true;
      this.menuOpacity = 0;
      this.menuHeight = 0;
      this.timer = setTimeout(() => {
        this.showMenu = false;
        this.aniMenu = false;
      }, 500);
    },
  },
};
</script>

<style scoped>
.btn_div{
  padding: 20px 20px;
  text-align: right;
  cursor: pointer;
}
.navbar_vertical{
  position: fixed;
  box-sizing: border-box;
  width: 300px;
  height: 100vh;
  z-index: 9999;
  top: 0;
  left: 0;
  background-color: rgba(46, 78, 126);
  transition: 0.5s all;
  transform: translate3d(-300px, 0, 0);
}
.navbar_vertical_show{
  transform: translate3d(0, 0, 0) !important;
}
.menu_btn{
  display: none;
  margin-left: 50px;
  cursor: pointer;
}
@media (max-width: 1000px) {
  .menu_btn {
    display: block;
  }
  .navbar{
    display: none !important;
  }
}
.head-nav {
  height: 80px;
  width: 100%;
  background: rgba(46, 78, 126);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  z-index: 998;
}
.head-nav_conter{
  width: 1600px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.header {
  width: 100%;
  height: 70px;
}
.team-logo {
  width: 240px;
  margin-left: 50px;
  margin-right: 60px;
  cursor: pointer;
}
.navbar {
  display: flex;
  align-items: center;
  height: 100%;
}
.router-box {
  color: #ffffff;
  position: relative;
  display: flex;
  height: 100%;
  padding: 0 20px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.router-name {
  font-size: 18px;
}
.nav-menu {
  position: fixed;
  top: 70px;
  left: 0;
  background-color: #304e7c;
  opacity: 0;
  border-radius: 0 0 5px 5px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-height: 0;
}
.menu-item {
  padding: 10px 15px;
  color: white;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
}
.menu-item:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
.ani {
  transition: all 0.5s;
}
.router-box:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>