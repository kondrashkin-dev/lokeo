import { defineStore } from "pinia";

export const useLoginStore = defineStore("Login", {
  state: () => ({
    userData: null,
  }),
});
