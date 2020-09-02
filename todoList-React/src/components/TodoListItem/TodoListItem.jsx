import React, { Fragment, useState } from 'react';
import './TodoListItem.css';
// import Service from '../../services/axios-service.js';
import { allTasks, deleteTask } from '../../redux/actions/';

const TodoListItem = ({ task }) => {

    const [showResults, setShowResults] = useState(false)
    const onClick = () => setShowResults(true)

    const delete_Task = (id) => {
        console.log(id)
        deleteTask(id)
        allTasks()
    }

    return (
        <Fragment >
            <div className="task" key={task?.id}>
                <p>{task.name}</p>
                <input type="submit" value="Search" onClick={onClick} />
                {/* <button onClick={()=>editTask(i)}><i class="fas fa-edit"></i></button> */}
                <button onClick={()=>delete_Task(task.id)}><i class="fas fa-trash-alt"></i></button>
            </div>

            <div class="card">
                    <div class="card__content">
                        <div class="card__title">{task.name}</div> 
                        <div>
                            <input type="checkbox" class="checkComplete" id="complete" name="complete" value="Complete" 
                            // v-model="task.status" click="checkboxToggle(category)"
                            />  
                            <label for="complete"> Complete </label><br/>  
                        </div>
                                       
                        <div class="btns">
                            {/* <button class="btn btn--block" v-on:click="showUpdate"><i class="fas fa-edit"></i></button>
                            <button class="btn btn--block" v-on:click="removeTask(task._id)"><i class="fas fa-trash-alt"></i></button> */}
                        </div>

                        <div class='status completed' v-show="task.status" disabled>
                            Completed
                        </div>
                        <div class='status pending' v-show="!task.status">
                            Pending
                        </div>
                    </div>
                </div>

            {/* UPDATE TASK  */}
                {/* <div class="update-form">
                    <div class="form-group">
                            <label for="title">Title</label>
                            <input type="text" class="form-control" id="name"
                            required name="name"
                            />
                    </div>
                    <button on-click="updateTask()" class="btn btn-success">Submit</button>     
                </div> */}  
        </Fragment>
    )    
}

export default TodoListItem;