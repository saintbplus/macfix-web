import { createRouter, createWebHistory } from "vue-router";
import feed from "@/modules/Feeds";
import list from "@/modules/ViewWorkList";
import request from "@/modules/RequestOrder";
import status from "@/modules/ServiceStatus";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home/HomeView.vue"),
    },
  ],
});

const routerRegister = [feed.route, list.route, request.route, status.route];

routerRegister.forEach((route) => {
  router.addRoute(route);
});

export default router;
