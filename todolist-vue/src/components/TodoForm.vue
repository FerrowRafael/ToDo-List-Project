<template>
    <div>
        <h2>New Task</h2>
        <form class="example">
            <input type="text" class="form-control" id="name"
            required v-model="name" name="name"
            />
            <button @click="createTask" class="btn btn-success">Create</button>       
        </form>
    </div>
</template>

<script>
export default {
    name: 'TodoForm',
    props: {
    },
    data(){
        return {
            name: "",
        }
    },


    methods: {
        createTask() {
        let data = {
            name: this.name,  
            };
            this.$store.dispatch("CREATE_TASK", data)
            .then(response => {
            console.log(response);
            })
            .catch(e => {
            console.log(e);
            });
            this.name = ""
        },
        
  }
};
</script>

<style scoped>

/* FORM */
form.example{
    display: flex;
    justify-content: center;
}

form.example input[type=text] {
  padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  border-radius: 15px 0px 0px 15px;
  float: left;
  width: 10%;
  background: #f1f1f1;
}

form.example button {
  float: left;
  border-radius: 0px 15px 15px 0px;
  width: 5%;
  padding: 10px;
  background: #cf8700;
  color: white;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none;
  cursor: pointer;
}

form.example button:hover {
  background: #ffa90b;
}

form.example::after {
  content: "";
  clear: both;
  display: table;
}
</style>