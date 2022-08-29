const List = () => import("./views/ListView.vue");
const Individual = () => import("./views/IndividualView.vue");
export default [
  {
    path: "/list",
    name: "list",
    component: List,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/order/:id",
    name: "order.individual",
    component: Individual,
  },
];
