import { defineStore } from "pinia";

// enum use as changeCurrent function argument.
export const pagesEnum = {
  // no nav bar.
  home: 0,

  request: 1,
  pendingList: 2,
  status: 3,
  history: 4,

  // show nav links, but no disabled
  others: 5,
};

// nav item on navigator bar.
// list of link and text.
export const navPages = [
  {
    // n use as id that match pagesEnum, for tracking current page user is visitting.
    n: 1,
    text: "แจ้งอาการ",
    link: "/request",
  },
  {
    n: 2,
    text: "รายการส่งซ่อม",
    link: "/list",
  },
  {
    n: 3,
    text: "สถานะการซ่อม",
    link: "/status",
  },
];

/**
 * @param {number} page Enum for pages name.
 */
function showNavItem(page) {
  // inside () will return true if one of the condiiton is true.
  // then flip logic to return false.
  // use || ("OR" logical operator) to add more conditions.
  // if inside () is false then return true.
  // don't show page if id is 0.
  return !(page === 0);
}

export const useNavStore = defineStore({
  id: "nav",
  state: () => ({
    show: false,
    // for track and adding disable class, etc...
    current: 0,
  }),
  getters: {},
  actions: {
    // invoke this function on each page view.
    changeCurrent(page) {
      if (!showNavItem(page)) {
        this.show = false;
      } else {
        this.show = true;
      }
      this.current = page;
    },
  },
});
