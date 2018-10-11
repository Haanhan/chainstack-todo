<template>
    <a class="panel-block">

        <Checkbox @changed="setDone" :isPending="this.todo.isPending"></Checkbox>

        <p class="flex-1" :class="textClass" @click="edit">
            {{todo.text}}
        </p>
        
        <button class="button is-text is-danger is-inverted"
            @click="REMOVE_TODO(index)">
            <span class="icon">
                <span class="fa fa-trash"></span>
            </span>
        </button>
    </a>
</template>

<script>
    import Checkbox from "./Checkbox.vue";
    import { mapMutations, mapActions } from "vuex";
    export default{
        components: {
            Checkbox
        },
        props:{
            todo: { type: Object },
            index: {type: Number, required: true }
        },
        computed:{
            textClass(){
                let classes = "";
                if(this.todo.isPending) classes = "has-text-grey-light ";
                if(this.todo.isDone) classes += "strikeout";
                return classes;
            }
        },
        methods:{
            ...mapMutations([
                "REMOVE_TODO",
                "UPDATE_TODO"
                ]),
            ...mapActions([
                "updateTodo"
            ]),
            setDone(value){
                this.updateTodo({
                    ...this.todo, 
                    isDone: value
                });
            },
            edit(){
                this.UPDATE_TODO({
                    ...this.todo, 
                    isEditMode: true
                })
            }
        }
    }
</script>