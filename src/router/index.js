import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("@/pages/LoginPage"),
  },
  {
    path: "/pass-list",
    name: "PassList",
    component: () => import("@/pages/PassListPage"),
  },
  {
    path: "/add-pass",
    name: "AddPass",
    component: () => import("@/pages/AddPassPage"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
