const AuthView = () => import("./views/AuthView.vue");

export default {
  path: "/login",
  name: "login",
  component: AuthView,
  meta: {
    requiresAuth: false,
  },
};
