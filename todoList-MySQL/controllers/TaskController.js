const {Task, Priority, Category} = require('../models');

const TaskController = {

    // GET ALL TASKS
    async getAllTasks(req, res) {
        await Task.findAll({
            include:[
                Priority,
                Category 
            ],
            attributes: { exclude: ['createdAt', 'updatedAt'] },
        })
            .then(data => {
                res.status(200);
                res.json(data);
            })
            .catch(err => {
                res.status(500);
                res.json(`"error": ${err}`);
            })
    },

    // GET ONE TASK
    getOneTask(req, res) {
        Task.findOne({
            where: {
                id: req.params.id
              }
        })
            .then(tasks => res.send(tasks))
    },

    // GET ADD TASK
    // addTask(req, res) {
    //     let {name,description,StatusId,PriorityId,CategoryId} = req.body;
    //     Task.create({
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
            const task = await Task.create({
                name: req.body.name,
                description: req.body.description,
                status: req.body.status,
            })
            res.send(task)
            res.status(201).send({message: 'Task create succesfully', task});  
        }
        catch{
            res.status(401).send({message: 'error :('})
        }
    },

    // GET UPDATE TASK
    async updateTask(req, res) {
        let body = req.body;
        res.send(body)
        let { id } = req.params;
        await Task.update({ 
            name: body.name,
            description: body.description,
            status: body.status,
            PriorityId: body.PriorityId,
            CategoryId: body. CategoryId,
        },
            { where: 
                { id } 
            }
        )
        .then(data => {
            res.status(200);
            res.send(data, {message: 'Task modificada satisfactoriamente'});
            
        })
        .catch(err => {
            res.status(500);
            res.json(`"error": ${err}`);
        }); 
    },

    // GET DELETE TASK
    deleteTask(req, res){
        let { id } = req.params;
        Task.destroy({ where: { id } })
        .then(task => {
            res.status(200);
            res.send({message: 'Task eliminada satisfactoriamente'});
            res.json(task)
        })
        .catch(err => {
            res.status(500);
            res.json(`"error": ${err}`);
        });
    },
}

module.exports = TaskController;