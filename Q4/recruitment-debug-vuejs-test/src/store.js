import Vuex from "vuex";
import Vue from "vue";
import  SET_DATA  from "./mutation-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: []
  },

  getters: {
    getData: (state) => {
      return state.list;
    },
    getCountData: (state) => {
        return state.list.length
    }
  },

  mutations: {
    [SET_DATA](state, data) {
      state.list = data
      console.log(state.list, '<<<state list')
    },
  },

  actions: {
    setData(context, data) {
      context.commit('SET_DATA', data);
      console.log(data, "<<<data actions")
    },
  },
});
