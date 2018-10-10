<template>
     <span class="is-size-4 has-text-primary inline-s cursor-pointer" @click="handleClick">
            <span :class="icon"></span>
    </span>
</template>

<script>
export default {
    data(){
        return{
            value: false
        }
    },
    props: {
        isPending: { type:Boolean, default: false }
    },
    computed:{
        icon(){
            return this.isPending ?
                "fa fa-spinner fa-spin" :
            this.value ? 
                "fa fa-check-circle" : 
                "far fa-circle"
        }
    },
    methods:{
        handleClick(){
            this.value = !this.value;
            this.$emit("changed", this.value);
        }
    }
}
</script>
