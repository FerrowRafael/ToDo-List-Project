const TaskModel = require('../models/Task.js');

const TaskController = {

    // GET ALL TASKS
    getAllTasks(req, res) {
        TaskModel.find({})
            .then(tasks => res.send(tasks))
    },

    // GET ONE TASK
    getOneTask(req, res) {
        TaskModel.findOne({
            where: {
                id: req.params.id
              }
        })
            .then(tasks => res.send(tasks))
    },

    // GET ADD TASK
    // addTask(req, res) {
    //     let {name,description,StatusId,PriorityId,CategoryId} = req.body;
    //     TaskModel.create({
    //         name,description,StatusId,PriorityId,CategoryId
    //     }).then(()=>{
    //         res.statusCode=201;
    //         res.json({status: 'OK'})
    //     }).catch(err => {
    //         res.statusCode = 400;
    //         res.json({status: 'KO', message: err})
    //     })
    // },

    async addTask(req, res){
        try{
            const task = await TaskModel.create({
                name: req.body.name,
                description: req.body.description,
            })
            res.send(task)
            res.status(201).send({message: 'Task create succesfully', task});  
        }
        catch{
            res.status(401).send({message: 'error :('})
        }
    },
    // GET UPDATE TASK
    updateTask(req, res) {
        TaskModel.find({})
            .then(tasks => res.send(tasks))
    },

    // GET DELETE TASK
    deleteTask(req, res) {
        TaskModel.find({})
            .then(tasks => res.send(tasks))
    },
}

module.exports = TaskController;