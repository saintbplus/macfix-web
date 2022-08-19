import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FeedView from "@/views/FeedView.vue";
import RequestView from "@/views/RequestView.vue";
import HistoryView from "@/views/HistoryView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/feed",
      name: "feed",
      component: FeedView,
    },
    {
      path: "/request",
      name: "request",
      component: RequestView,
    },
    {
      path: "/pending-request",
      name: "pending",
      component: () => import("@/views/PendingJobView.vue"), // lazy loading page
    },
    {
      path: "/status",
      name: "jobStatus",
      component: () => import("@/views/StatusView.vue"), // lazy loading page
    },
    {
      path: "/history",
      name: "jobHistory",
      component: HistoryView,
    },
  ],
});

export default router;
