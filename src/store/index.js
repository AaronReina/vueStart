/* eslint-disable @typescript-eslint/ban-types */
import { createStore } from "vuex";
import { get, post } from "../services/calls";

export default createStore({
  state: {
    favorites: [],
    spinner: false,
    error: false,
    pokeList: [],
    filterPokeList: [],
  },
  mutations: {
    favoriteSelection: (state, data) => {
      const index = state.favorites.indexOf(data);
      if (index > -1) {
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(data);
      }
    },
    spinnerOption: (state, data) => {
      state.spinner = data;
    },
    getPokeList: async (state) => {
      console.log("!asdasd·");
      try {
        state.spinner = true;

        const response = await get("/pokemon", {
          limit: 2000,
          offset: 0,
        });
        state.pokeList = response.results;
        state.filterPokeList = response.results;

        state.spinner = false;
      } catch {
        state.spinner = false;
        state.error = true;
      }
    },
    getFilterPokeList: (state, data) => {
      const filered = state.pokeList.filter((e) =>
        e.name.toUpperCase().includes(data.toUpperCase())
      );
      state.filterPokeList = filered;
    },
    setError: async (state, data) => {
      state.error = data;
    },
  },
  actions: {
    favoriteSelection: ({ commit }, data) => {
      commit("favoriteSelection", data);
    },
    spinnerOption: ({ commit }, data) => {
      commit("spinnerOption", data);
    },
    getPokeList: ({ commit }) => {
      commit("getPokeList");
    },
    setError: ({ commit }, data) => {
      commit("setError");
    },
  },
  modules: {},
});
