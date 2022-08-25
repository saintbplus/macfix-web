const RequestOrder = () => import("./views/RequestView.vue"); // lazy load view.

export default {
  path: "/request",
  name: "request",
  component: RequestOrder,
  meta: {
    requiresAuth: true,
  },
};
