import React, { Fragment, useState } from 'react';
import './TodoListItem.css';
// import Service from '../../services/axios-service.js';
import { allTasks, deleteTask } from '../../redux/actions/';

const TodoListItem = ({ task }) => {

    const [showResults, setShowResults] = useState(false)
    const onClick = () => setShowResults(true)

    const removeTask = (id) => {
        console.log(id)
        deleteTask(id)
        allTasks()
    }

    return (
        <Fragment >
            {/* <div className="task" key={task?.id}>
                <p>{task.name}</p>
                <input type="submit" value="Search" onClick={onClick} />
                <button onClick={()=>editTask(i)}><i className="fas fa-edit"></i></button>
                <button onClick={()=>delete_Task(task.id)}><i className="fas fa-trash-alt"></i></button>
            </div> */}

            <div className="card">
                    <div className="card__content">
                        <div className="card__title">{task.name}</div> 
                        <div>
                            <input type="checkbox" className="checkComplete" id="complete" name="complete" value="Complete" 
                            // v-model="task.status" click="checkboxToggle(category)"
                            />  
                            <label> Complete </label><br/>  
                        </div>
                                       
                        <div className="btns">
                            <button className="btn btn--block" onClick="showUpdate"><i className="fas fa-edit"></i></button>
                            <button className="btn btn--block" onClick="removeTask(task._id)"><i className="fas fa-trash-alt"></i></button>
                        </div>

                        <div className='status completed' style={{ display: !task.status ? "block" : "none" }} disabled>
                            Completed 
                        </div>
                        <div className='status pending' style={{ display: task.status ? "block" : "none" }} show="!task.status">
                            Pending
                        </div>
                    </div>
                </div>

            {/* UPDATE TASK  */}
                {/* <div className="update-form">
                    <div className="form-group">
                            <label for="title">Title</label>
                            <input type="text" className="form-control" id="name"
                            required name="name"
                            />
                    </div>
                    <button on-click="updateTask()" className="btn btn-success">Submit</button>     
                </div> */}  
        </Fragment>
    )    
}

export default TodoListItem;