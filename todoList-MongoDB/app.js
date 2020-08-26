let express = require('express');
const mongoose = require('mongoose');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let app = express();

const cors = require('./middleware/cors.js');

// CONNECT DATA BASE
mongoose.connect('mongodb://localhost:27017/TodoListMongo', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => console.log('Successfully connected to MongoDB'))
    .catch(console.error);
    

app.use(cors);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

let indexRouter = require('./routes/index');
let tasksRouter = require('./routes/tasks');

app.use('/', indexRouter);
app.use('/tasks', tasksRouter);

module.exports = app;
