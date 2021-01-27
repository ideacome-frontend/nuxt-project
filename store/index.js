import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      toDoList: [],
    },
    mutations: {
      setToDoList(state, value) {
        state.toDoList = value
      },
    },
  })

export default store
