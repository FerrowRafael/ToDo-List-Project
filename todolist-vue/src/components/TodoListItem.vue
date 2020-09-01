<template>
    <div>
        <ul class="cards">
            <li class="cards__item" v-for="task in Tasks" :key="task.id">
                <div class="card">
                    <div class="card__content">
                        <div class="card__title">{{task.name}}</div> 
                        <div>
                            <input type="checkbox" class="checkComplete" id="complete" name="complete" value="Complete" 
                            v-model="task.status" @click="checkboxToggle(category)">  
                            <label for="complete"> Complete </label><br>  
                        </div>
                                       
                        <div class="btns">
                            <button class="btn btn--block" v-on:click="showUpdate"><i class="fas fa-edit"></i></button>
                            <button class="btn btn--block" v-on:click="removeTask(task.id)"><i class="fas fa-trash-alt"></i></button>
                        </div>

                        <div class='status completed' v-show="task.status" disabled>
                            Completed
                        </div>
                        <div class='status pending' v-show="!task.status">
                            Pending
                        </div>
                    </div>
                </div>
            </li>
        </ul>

        <!-- UPDATE TASK -->
        <div v-show="show" class="update-form">
            <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" id="name"
                    required v-model="task" name="name"
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
    width: 15rem;
}

.card__content {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
}

.card__title {
    color: gray;
    background-color: bisque;
    font-size: 1.25rem;
    font-weight: 300;
    letter-spacing: 2px;
    text-transform: uppercase;
    min-height: 7rem;
    margin: auto !important;
    padding: 10px;
    width: 11.5rem
}

.btns{
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
}

.btn {
  border: 1px solid gray;
  border-radius: 1rem;
  color: gray;
  padding: 0.5rem;
  margin: 0.5rem;
  text-transform: lowercase;
  cursor: pointer;
  justify-content: space-between;
}

.btn--block {
  display: block;
  width: 100%;
}

.status{
    margin-top: 1rem;
    border-radius: 15px;
    font-weight: bold;
    font-size: 20px;
    padding: 0.5rem;
}

.pending{
    border: 2px solid #e30000;
    color: #e30000;
}

.completed{
    border: 2px solid #1ae300;
    color: #1ae300;
    font-weight: bold;
}

.checkComplete{
    margin-top: 1rem;
}

</style>