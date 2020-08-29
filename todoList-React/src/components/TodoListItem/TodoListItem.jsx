import React, { Fragment } from 'react';
import './TodoListItem.css';
// import Service from '../../services/axios-service.js';

const TodoListItem = ({ task }) => {

    // const deleteTask = (id) => {
    //     console.log(id)
    //     Service.deleteTask(id)
    // Service.tasksAll()
    // }
    
    return (
        <Fragment >
            <div className="task" key={task?.id}>
                <p>{task.name}</p>
                {/* <a href=""></a> */}
                {/* <button onClick={deleteTask(task.id)}>Delete</button> */}
            </div>
        </Fragment>
    )
       
}

export default TodoListItem;