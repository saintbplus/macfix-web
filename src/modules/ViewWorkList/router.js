const List = () => import("./views/ListView.vue");

export default {
  path: "/list",
  name: "list",
  component: List,
  meta: {
    requiresAuth: true,
  },
};
