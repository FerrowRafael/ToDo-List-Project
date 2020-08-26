const router = require('express').Router();
const TaskController = require('../controllers/TaskController.js');

router.get('/', TaskController.getAllTasks);                              // 1 ALL TASKS
router.get('/:_id', TaskController.getOneTask);                           // 2 ONE TASK
router.post('/', TaskController.addTask);                                 // 3 ADD TASK
router.put('/task/:_id', TaskController.updateTask);                      // 4 UPDATE TASK
router.delete('/task/:_id', TaskController.deleteTask);                   // 5 DELETE TASK

module.exports = router;

