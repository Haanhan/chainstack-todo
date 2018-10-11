<template>
    <div class="panel-block">
        <div class="field has-addons flex-1">
            <div class="control is-expanded">
                <input class="input" 
                    ref="input"
                    v-model="inputValue"
                    @keypress.enter="update"
                type="text"/>
            </div>
            <div class="control">
                <button class="button" @click="cancel">
                    <span class="icon">
                        <span class="fa fa-times"></span>
                    </span>
                </button>
            </div>
            <div class="control">
                <button class="button is-primary" @click="update">
                    <span class="icon">
                        <span class="fa fa-check"></span>
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
    props: {
        todo: { type: Object }
    },
    data(){
        return {
            inputValue: { type: String }
        }
    },
    created(){
        this.inputValue = this.todo.text
    },
    mounted(){
        this.$refs.input.select();
    },
    methods:{
        ...mapMutations([
            "UPDATE_TODO"
        ]),
        ...mapActions([
            "updateTodo"
        ]),
        cancel(){
            this.UPDATE_TODO({
                ...this.todo, 
                isEditMode: false
            });
        },
        update(){
            this.updateTodo({
                ...this.todo, 
                text: this.inputValue, 
                isEditMode: false
            });
        }
    }
}
</script>
