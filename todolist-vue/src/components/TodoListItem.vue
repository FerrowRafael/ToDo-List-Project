<template>
    <div class="todoListItem">
        <h3>Todo List</h3>
        <div v-for="task in Tasks" :key="task.id">
            <p>{{task.name}}</p>
            <button>Update</button>
            <button>Delete</button>
        </div>
        <p>{{info}}</p>

  </div>
</template>

<script>
export default {
  name: 'TodoListItem',
  data () {
    return {
    }
  },
  props: {
  },

    created() {
    // ALL TASKS
    this.$store.dispatch("GET_TASKS");
    },

    computed: {
    Tasks() {
      return this.$store.state.tasks
    },
  },
}
</script>

<style scoped>

</style>