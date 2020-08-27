const TaskModel = require('../db/models/Task.js');

const TaskController = {
    
    // GET ALL TASKS
    getAllTasks(req, res) {
        TaskModel.find() //include equivalent
            .then(tasks => res.send(tasks))
            .catch(error => {
                console.error(error);
                res.send(error)
            })
    },

    // TASK BY TASK ID
    getOneTask(req, res) {
        _id = req.params._id
        TaskModel.findById(_id)
            .then(task => res.send(task))
            .catch(error => {
                console.error(error);
                res.send(error)
            })
    },

    // INSERT TASK
    addTask(req, res) {
        TaskModel.create(req.body)
            .then(task => res.status(201).send(task))
            .catch(error => {
                console.error(error);
                res.send(error)
            })
    },

    // UPDATE TASK
    updateTask(req, res) {
        TaskModel.findByIdAndUpdate(req.params._id)
            .then(task => res.send(task))
            .catch(error => {
                console.error(error);
                res.send(error)
            })
    },

    // DELETE TASK **Revisar y añadir mensaje detallado cuando se borre
    deleteTask(req, res) {
        TaskModel.findByIdAndDelete(req.params._id)
            .then(task => res
                .status(201)
                .send({message:`task has been deleted.`, task}))
            .catch(error => {
                console.error(error);
                res.send(error)
            })
    },
}

module.exports = TaskController