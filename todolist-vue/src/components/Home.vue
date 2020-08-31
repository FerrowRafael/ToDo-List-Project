<template>
  <div class="home">
    <TodoForm/>
    <TodoListItem/>
    
  </div>
</template>

<script>
import TodoListItem from './TodoListItem'
import TodoForm from './TodoForm.vue'

export default {
  name: 'Home',
  props: {
  },
  components: {
    TodoListItem,
    TodoForm
  }
}
</script>

<style scoped>

</style>
