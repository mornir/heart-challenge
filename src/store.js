import { defineStore } from "pinia"

export const store = defineStore("store", {
  state: () => {
    return { user: null }
  },
})
