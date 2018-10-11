<template>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="loader"></div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import "bulma/sass/utilities/initial-variables.sass";
@import "bulma/sass/utilities/derived-variables.sass";

$loader-width: 4px;

.loader{
    display:inline-block;
    border: $loader-width solid transparent;
    border-top: $loader-width solid $primary;
    border-left: $loader-width solid $primary;
    border-right: $loader-width solid $primary;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}


</style>
