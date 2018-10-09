<template>
    <div class="container">
      <section class="section">
          <h3 class="title is-3 level-left">To-do List</h3>
          <div class="field has-addons">
              <div class="control is-expanded">
                  <input class="input is-large" placeholder="Add a new item to do" type="text"/>
              </div>
              <div class="control">
                  <button class="button is-primary is-large"
                      onClick={addTodo} >
                      <span class="fa fa-plus"></span>
                  </button>
              </div>
          </div>

          <div class="hero is-light">
            <div class="hero-body has-text-centered">
            <div class="stack-m fa fa-clipboard-list fa-3x"></div>
              <h1 class="title is-4">You have nothing to do for now.</h1>
              <p>Add to get started.</p>
            </div>
          </div>
          <div class="notification is-info">
              <span class="inline-m"><span class="far fa-lightbulb"></span></span> 
              <span class="has-text-weight-bold inline-s">Tip:</span> Click on to-do item to edit.
          </div>

      
      </section>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style lang="scss">
@import "bulma/bulma.sass";

//spacing
$space-base: 20px;
$stack-m: $space-base;
$inline-m: $space-base;
$inline-s: floor($inline-m / 2);

.stack-m{
  margin-bottom: $stack-m;
}

.inline-m{
    margin-right: $inline-m;
}

.inline-s{
    margin-right: $inline-s;
}

// .flex-1{
//     flex:1;
// }

.cursor-pointer{
    cursor:pointer;
}

</style>
