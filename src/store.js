import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const api = "https://private-7eb9b-chainstacktodoapp.apiary-mock.com/todos";

const storeTodo = (todoList) => {
  window.localStorage.setItem("todoList", JSON.stringify(todoList));
}

export default new Vuex.Store({
  state: {
    todoList: [],
    isLoading: false
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
        isPending: true,
        isEditMode: false,
        isDone: false
      }
      state.todoList.push(todo);
      
      // simulate fetch
      fetch(api, {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(json => {
          commit("UPDATE_TODO", {...todo, isPending: false});
        })

    },
    updateTodo({commit}, todo){
      todo.isPending = true;
      commit("UPDATE_TODO", todo);

      fetch(`${api}/${todo.id}`, {method: "PUT"})
        .then(res => res.json())
        .then(json => {

          // simulate actual data
          todo.isPending = false;
          commit("UPDATE_TODO", {...todo, isPending: false});
        })


    },
    removeTodo({commit, state}, id){
      //fire and forget
      fetch(`${api}/${id}`, {method: "DELETE"});

      let index = state.todoList.findIndex(todo => todo.id === id);
      commit("REMOVE_TODO", index);
    },
    getAllTodos({commit,state}){
      state.isLoading = true;

      fetch(api)
        .then(res => res.json())
        .then(json => {

          json.map(todo => {
            todo.isEditMode = false;
            todo.isPending = false;
            return todo;
          })

          // simulate actual data
          commit("SET_TODOLIST", JSON.parse(window.localStorage.getItem("todoList")) || []);
        })
        .finally(()=>{
          state.isLoading = false;
        });
    }
    
  }
})
