<template>
    <div>
        <h3>Todo List</h3>
        <ul class="cards">
            <li class="cards__item" v-for="task in Tasks" :key="task.id">
                <div class="card">
                    <div class="card__content">
                        <div class="card__title">{{task.name}}</div>
                        <p class="card__text">{{task.description}}</p>
                        <div class="btns">
                            <button class="btn btn--block" v-on:click="showUpdate"><i class="fas fa-edit"></i></button>
                            <button class="btn btn--block" v-on:click="removeTask(task.id)"><i class="fas fa-trash-alt"></i></button>
                        </div>
                    </div>
                </div>
            </li>
        </ul>

        <!-- UPDATE TASK -->
        <div v-show="show" class="update-form">
            <div class="form-group">
                    <label for="title">Title</label>
                    <input
                    type="text"
                    class="form-control"
                    id="name"
                    required
                    v-model="task"
                    name="name"
                    />
            </div>
            <button @click="removeTask(task.id)" class="btn btn-success">Submit</button>     
        </div>
    </div>
</template>

<script>
export default {
    name: 'TodoListItem',
    data () {
        return {
            show: false
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
        },

        updateTask(id){
            console.log(id)
            this.$store.dispatch("UPDATE_TASK", id);
        },

        showUpdate(){
            this.show = !this.show
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

body {
  color: gray;
  font-family: 'Roboto','Helvetica Neue', Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0;
  padding: 1rem;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

.cards__item {
  display: flex;
  padding: 1rem;
  @media(min-width: 40rem) {
    width: 50%;
  }
  @media(min-width: 56rem) {
    width: 33.3333%;
  }
}

.card {
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0,0,0,0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.card__content {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
}

.card__title {
  color: gray;
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.card__text {
  flex: 1 1 auto;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
}

.btns{
    display: flex;
    flex-direction: row;
}

.btn {
  background-color: red;
  border: 1px solid gray;
  border-radius: 1rem;
  color: gray;
  padding: 0.5rem;
  text-transform: lowercase;
  cursor: pointer;
}

.btn--block {
  display: block;
  width: 100%;
}
</style>