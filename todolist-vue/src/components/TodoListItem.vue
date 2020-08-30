<template>
    <div class="todoListItem">
        <h3>Todo List</h3>
        <div v-for="task in tasks" :key="task.id">
            <p>{{task.name}}</p>
            <button>Update</button>
            <button>Delete</button>
        </div>
        <p>{{info}}</p>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'TodoListItem',
  data () {
    return {
      tasks: null,
      api_url:'http://localhost:8000/api/tasks'
    }
  },
  props: {
  },

  mounted () {
    axios
      .get('http://localhost:8000/api/tasks')
      .then(response => (this.tasks = response.data))
  }
}
</script>

<style scoped>

</style>