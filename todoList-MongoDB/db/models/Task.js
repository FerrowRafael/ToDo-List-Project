const mongoose = require('mongoose');
// const ObjectId = mongoose.SchemaTypes.ObjectId;

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El campo nombre es requerido']
    },
    description: {
        type: String
    },
    status: {
        type: Boolean
    },
    priority: {
        type: String
    },
    category: {
        type: String
    },

}, {
    timestamps: true
});
const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;