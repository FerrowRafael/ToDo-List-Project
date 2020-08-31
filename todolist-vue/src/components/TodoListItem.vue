<template>
    <ul class="todoListItem">
        <h3>Todo List</h3>
        <li v-for="task in Tasks" :key="task.id">
            <p>{{task.name}}</p>
            <button>Update</button>
            <button class="nes-btn is-error padding" v-on:click="removeTask(task.id)">X</button>
        </li>
  </ul>
</template>

<script>
export default {
    name: 'TodoListItem',
    data () {
        return {
        }
    },
    
    created() {
        // ALL TASKS
        this.$store.dispatch("GET_TASKS");
    },
    methods: {
        removeTask(id){
            console.log(id)
            this.$store.dispatch("DELETE_TASK", id);
        }
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