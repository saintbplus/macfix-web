import FeedView from "./Views/FeedView.vue";

export default {
  path: "/feed",
  name: "feed",
  component: FeedView,
  meta: {
    requiresAuth: true,
  },
};
