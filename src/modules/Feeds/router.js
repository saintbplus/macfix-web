import FeedView from "./views/FeedView.vue";

export default {
  path: "/feed",
  name: "feed",
  component: FeedView,
  meta: {
    requiresAuth: true,
  },
};
