import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: [
      {
        id: "123",
        text: "Do something",
        isEditing: false,
        isDone: false,
      }
    ]
  },
  mutations: {
    ADD_TODO (state, todo) {
      state.todoList.push(todo);
    },
    REMOVE_TODO (state, index) {
      state.todoList.splice(index, 1);
    }
  },
  actions: {

  }
})
