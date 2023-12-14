<template>
  <transition name="fade">
    <loading-view v-if="loading" />
  </transition>
  <header-nav />
  <router-view />
  <page-footer />
</template>

<script>
import pageFooter from "@/components/page-footer.vue";
import headerNav from "@/components/header-nav.vue";
import loadingView from "@/components/loading-view.vue";

export default {
  components: {
    headerNav,
    loadingView,
    pageFooter,
  },
  data() {
    return {
      loading: false,
    };
  },
  watch: {
    loading(v) {
      document.body.style.overflow = v ? "hidden" : "";
    },
  },
  mounted() {
    const debounce = function(callback, delay) {
      let tid;
      return function (...args) {
        const ctx = this;
        tid && clearTimeout(tid);
        tid = setTimeout(() => {
          callback.apply(ctx, args);
        }, delay);
      };
    };

    const _ = window.ResizeObserver;
    window.ResizeObserver = class ResizeObserver extends _ {
      constructor(callback) {
        callback = debounce(callback, 20);
        super(callback);
      }
    };

    if (this.$route.path === "/") {
      this.loading = true;
    }
    window.onload = () => {
      this.hideLoading();
    };
  },
  beforeUnmount() {
    window.onload = null;
  },
  methods: {
    hideLoading() {
      this.loading = false;
    },
  },
};
</script>


<style>
.copyrights {
  padding: 1vh;
  background: #00000080;
  color: #ffffff;
}
.school-logo-box {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
#app {
  display: flex;
  flex-direction: column;
}
.contact-us {
  padding-bottom: 2vh;
  font-size: 20px;
  font-weight: bold;
}
.left-side,
.right-side {
  display: flex;
  flex-direction: column;
  width: 45vw;
}

.small-icon {
  height: 5vh;
}
.school-logo {
  height: 10vh;
}
.line-box {
  display: flex;
  align-items: center;
}
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
}
#app {
  position: relative;
  width: 100%;
}
img {
  -webkit-user-drag: none;
  user-select: none;
}
p {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica;
}
::-webkit-scrollbar-track {
  background: #fcfcfc;
  border-radius: 5px;
}

::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-thumb {
  cursor: pointer;
  border-radius: 5px;
  background: #8b8b8b;
  transition: color 0.2s ease;
}
::-webkit-scrollbar-thumb:hover {
  background: #636363;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.75s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.simple-text {
  font-size: 15px;
  margin: 2vh;
  margin-left: 0;
  text-align: justify;
  line-height: 26px;
  text-indent: 2em;
}

</style>