const TaskModel = require('../models/Task.js');

const TaskController = {

    // GET ALL TASKS
    getTasksAll(req, res) {
        TaskModel.find({})
            .then(tasks => res.send(tasks))
    },
}

module.exports = TaskController;