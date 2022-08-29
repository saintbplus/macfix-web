import auth from "@/modules/Authentication";
import feed from "@/modules/Feeds";
import request from "@/modules/RequestOrder";
import status from "@/modules/ServiceStatus";
import list from "@/modules/ViewWorkList";
import { createRouter, createWebHistory } from "vue-router";

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

const routerRegister = [
  feed.route,
  list.route,
  request.route,
  status.route,
  auth.route,
];

routerRegister.forEach((route) => {
  if (Array.isArray(route)) {
    route.forEach((subRoute) => {
      router.addRoute(subRoute);
    });
  } else {
    router.addRoute(route);
  }
});

export default router;
