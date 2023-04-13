import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state() {
    return {
      scrollPos: 42,
    };
  },

  actions: {
    updateScrollPos(sp) {
      // console.log(sp.target.scrollTop)
      this.scrollPos = sp.target.scrollTop;
    },
  },
});
