import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    id: "",
    username: "",
  }),
  getters: {},
  actions: {},
});
