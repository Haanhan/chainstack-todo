<template>
    <div class="container">
      <section class="section">
          <h3 class="title is-3 level-left">To-do List</h3>
          
          <add-input placeholder="Add a new item to do" @btnClick="ADD_TODO" >
            <span class="fa fa-plus"></span>
          </add-input>

          <div class="hero is-light" v-show="!hasTodo">
            <div class="hero-body has-text-centered">
            <div class="stack-m fa fa-clipboard-list fa-3x"></div>
              <h1 class="title is-4">You have nothing to do for now.</h1>
              <p>Add to get started.</p>
            </div>
          </div>

          <div class="notification is-info" v-show="hasTodo">
              <span class="inline-m"><span class="far fa-lightbulb"></span></span> 
              <span class="has-text-weight-bold inline-s">Tip:</span> Click on to-do item to edit.
          </div>

          <Todos></Todos>

      </section>
  </div>
</template>

<script>
import AddInput from "./components/InputGroup.vue";
import Todos from "./components/Todos.vue";
import { mapState, mapMutations } from "vuex";

export default {
  name: 'app',
  components: {
    AddInput,
    Todos,
  },
  computed:{
    ...mapState({
      hasTodo: state => state.todoList.length > 0
    })
  },
  methods:{
    ...mapMutations(["ADD_TODO"]),
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

.flex-1{
    flex:1;
}

.cursor-pointer{
    cursor:pointer;
}

.strikeout{
  text-decoration: line-through
}

</style>
