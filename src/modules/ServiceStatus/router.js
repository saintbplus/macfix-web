const StatusView = () => import("./views/StatusView.vue");

export default {
  path: "/status",
  name: "status",
  component: StatusView,
  meta: {
    requiresAuth: true,
  },
};
