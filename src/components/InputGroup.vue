<template>
    <div class="field has-addons">
        <div class="control is-expanded">
            <input class="input is-large" 
                v-model="inputValue" 
                :placeholder="placeholder" 
                @keypress.enter="buttonClicked"
                type="text"/>
        </div>
        <div class="control">
            <button class="button is-primary is-large" @click="buttonClicked">
                <slot></slot>
            </button>
        </div>
    </div>
</template>

<script>
    export default{
        props:{
            placeholder: {type: String},
        },
        data(){
            return {
                inputValue: ""
            }
        },
        methods:{
            buttonClicked(){
                this.$emit('btnClick', this.inputValue);
                this.inputValue = "";
            }
        }
    }
</script>