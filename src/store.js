import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: [
    ]
  },
  mutations: {
    ADD_TODO (state, text) {
      state.todoList.push({
        id: Date.now().toString(),
        text: text,
        isPending: false,
        isEditMode: false,
        isDone: false
      });
    },
    REMOVE_TODO (state, index) {
      state.todoList.splice(index, 1);
    },
    UPDATE_TODO (state, payload){
      state.todoList[payload.index] = payload.todo;
      state.todoList = [...state.todoList];

    }
  },
  actions: {

  }
})
