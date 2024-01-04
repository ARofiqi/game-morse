import { createRouter, createWebHistory } from "vue-router";

import Homepage from "@/views/homepage/index.vue";
import Convert from "@/views/convert/index.vue";

const routes = [
  {
    path: "/",
    name: "homepage",
    component: Homepage,
  },
  {
    path: "/convert",
    name: "convert",
    component: Convert,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
