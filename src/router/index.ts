import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import शुरु from "../दृश्य/शुरु.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "शुरु",
    component: शुरु,
  },
  {
    path: encodeURI("/मारोडाता"),
    name: "मारोडाता",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../दृश्य/मारोडाता.vue"),
  },
  {
    path: encodeURI("/समुदाय"),
    name: "समुदाय",
    component: () => import("../दृश्य/समुदाय.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
