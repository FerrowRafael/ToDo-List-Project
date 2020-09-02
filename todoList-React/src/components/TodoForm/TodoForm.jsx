import React, { useEffect, useState, Fragment } from 'react';
import './TodoForm.css'
// import Service from '../../services/axios-service.js';
import { addTask, updateTask, allTasks } from '../../redux/actions/';

const TodoForm = (props) => {

    const [name, setName] = useState("");

    useEffect(() => {
    }, [])
    
    const add_Task = event => {
        event.preventDefault();
        let data={
            name: event.target.name.value
        }
        console.log(data)
        addTask(data)
        .then(res => {
            console.log('Task creado con éxito');
            allTasks();
        })
        .catch((error) => {
            console.error(error)
        })
    }

    const handleChange = event =>{
        setName({ name: event.target.name.value});
        console.log(setName)
      }
  
    return (
        <Fragment >
           <form onSubmit={add_Task} className="example">
                <input type="text" name="name" className="form-control" 
                placeholder="Add a new todo..." onChange= {handleChange}/>
                <button type="submit" className="btn btn-success">Add Task</button> 
            </form>
        </Fragment>
    )
       
    
}

export default TodoForm;