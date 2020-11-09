import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import DocMain from "../components/DocMain.vue";
import demos from "./demo-routes";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/doc/Intro",
  },
  {
    path: "/doc",
    component: DocMain,
    children: demos,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
