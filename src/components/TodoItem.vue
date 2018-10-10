<template>
    <a class="panel-block">

        <span class="is-size-4 has-text-info inline-s cursor-pointer" >
            <span class=""></span>
        </span>

        <span class="is-size-4 has-text-info inline-s cursor-pointer">
            <span class=""></span>
        </span>
        <p class="flex-1">
            {{text}}
        </p>
        
        <button class="button is-text is-danger is-inverted">
            <span class="icon">
                <span class="fa fa-trash"></span>
            </span>
        </button>
        
    </a>
</template>

<script>
    export default{
        props:{
            text: { type: String },
        }
    }
</script>