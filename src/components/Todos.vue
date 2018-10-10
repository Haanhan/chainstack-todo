<template>
    <div class="panel">
        <template v-for="todo in todoList">
            <TodoItem :text="todo.text" :key="todo.id"></TodoItem>
        </template>
    </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import { mapState } from "vuex";

    export default{
        components: {
            TodoItem
        },
        computed: {
            ...mapState(["todoList"])
        }
    }
</script>