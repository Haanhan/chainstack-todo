<template>
    <div class="panel">
        <template v-for="(todo) in todoList">
            <component :is="componentType(todo.isEditMode)" 
                :todo="todo" 
                :key="todo.id"></component>
        </template>
    </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import EditTodoItem from "./EditTodoItem.vue";
import { mapState } from "vuex";

    export default{
        components: {
            TodoItem,
            EditTodoItem
        },
        computed: {
            ...mapState(["todoList"]),
        },
        methods: {
            componentType(isEditMode){
            return isEditMode ? EditTodoItem : TodoItem;
            }
        }
        
    }
</script>