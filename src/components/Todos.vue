<template>
    <div class="panel">
        <template v-for="(todo, index) in todoList">
            <TodoItem :todo="todo" :key="todo.id" :index="index"></TodoItem>
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