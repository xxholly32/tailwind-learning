import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style/main.css";
import "highlight.js/styles/rainbow.css";

createApp(App)
  .use(router)
  .mount("#app");
