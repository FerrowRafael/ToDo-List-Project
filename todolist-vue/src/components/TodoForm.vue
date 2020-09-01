<template>
    <div>
        <div class="submit-form">
            <div class="form-group">
                <label for="name">New task:</label>
                <input type="text" class="form-control" id="name"
                required v-model="name" name="name"
                />
            </div>
            <button @click="createTask" class="btn btn-success">Submit</button>       
        </div>

        <h3>Update task</h3>
        
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

</style>