import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const storeTodo = (todoList) => {
  window.localStorage.setItem("todoList", JSON.stringify(todoList));
}

export default new Vuex.Store({
  state: {
    todoList: [
    ]
  },
  mutations: {
    SET_TODOLIST(state, todoList){
      state.todoList = todoList;
    },
    ADD_TODO (state, text) {
      state.todoList.push({
        id: Date.now().toString(),
        text: text,
        isPending: false,
        isEditMode: false,
        isDone: false
      });
      storeTodo(state.todoList);
    },
    REMOVE_TODO (state, index) {
      state.todoList.splice(index, 1);
      storeTodo(state.todoList);
    },
    UPDATE_TODO (state, payload){
      let index = state.todoList.findIndex(todo => todo.id === payload.id);
      state.todoList[index] = payload;
      state.todoList = [...state.todoList];
      storeTodo(state.todoList);
    }
  },
  actions: {
    addTodo({commit, state}, text){
      const todo = {
        id: Date.now().toString(),
        text: text,
        isPending: false,
        isEditMode: false,
        isDone: false
      }
      state.todoList.push(todo);
    }
  }
})
