import { createRouter, createWebHistory } from "vue-router";
import FeedView from "@/views/Feed/FeedView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home/HomeView.vue"),
    },
    {
      path: "/feed",
      name: "feed",
      component: FeedView,
    },
    {
      path: "/request",
      name: "request",
      component: () => import("@/views/Request/RequestView.vue"), // lazy loading page
    },
    {
      path: "/pending-request",
      name: "pending",
      component: () => import("@/views/PendingJob/PendingJobView.vue"), // lazy loading page
    },
    {
      path: "/status",
      name: "jobStatus",
      component: () => import("@/views/Status/StatusView.vue"), // lazy loading page
    },
    {
      path: "/history",
      name: "jobHistory",
      component: () => import("@/views/History/HistoryView.vue"), // lazy loading
    },
  ],
});

export default router;
