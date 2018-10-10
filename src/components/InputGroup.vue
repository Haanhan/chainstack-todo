<template>
    <div class="field has-addons">
        <div class="control is-expanded">
            <input class="input is-large" 
                v-model="inputValue" 
                :placeholder="placeholder" 
                type="text"/>
        </div>
        <div class="control">
            <button class="button is-primary is-large" @click="$emit('btnClick', inputValue)">
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
        }
    }
</script>