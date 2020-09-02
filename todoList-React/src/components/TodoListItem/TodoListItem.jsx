import React, { Fragment } from 'react';
import './TodoListItem.css';
// import Service from '../../services/axios-service.js';
import { allTasks, deleteTask } from '../../redux/actions/';

const TodoListItem = ({ task }) => {

    const delete_Task = (id) => {
        console.log(id)
        deleteTask(id)
        allTasks()
    }
    
    return (
        <Fragment >
            <div className="task" key={task?.id}>
                <p>{task.name}</p>
                {/* <a href=""></a> */}
                <button onClick={()=>delete_Task(task.id)}>Delete</button>
            </div>
        </Fragment>
    )
       
}

export default TodoListItem;