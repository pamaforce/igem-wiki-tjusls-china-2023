import { createApp } from "vue";
import ElementPlus from 'element-plus'
import router from "./router";
import store from "./store";
import App from "./App.vue";
import * as ElIconModules from '@element-plus/icons-vue'

import "element-plus/dist/index.css";

const app = createApp(App);

app.use(ElementPlus).use(store).use(router).mount("#app");

for (const iconName in ElIconModules) {
    if (Reflect.has(ElIconModules, iconName)) {
      const item = ElIconModules[iconName]
      app.component(iconName, item)
    }
}
