import React, { useEffect, useState, Fragment } from 'react';
import './TodoForm.css'
import axios from 'axios';
// import Service from '../../services/axios-service.js';
import { allTasks, deleteTask } from '../../redux/actions/';

const TodoForm = (props) => {

    const [name, setName] = useState("");

    useEffect(() => {
    }, [])
    
    const addTask = async (event) => {
        event.preventDefault();
        console.log(name)
        await axios.post('http://localhost:8000/api/tasks', name, {
    })
        .then(res => {
            alert('Task creado con éxito');
            Service.tasksAll();
        })
        .catch((error) => {
            console.error(error)
        })
        Service.tasksAll()
    }

    const handleChange = event =>{
        setName({ name: event.target.value});
        console.log(setName)
      }
  
    return (
        <Fragment >
           <form onSubmit={addTask} className="example">
                <input type="text" name="name" className="form-control" 
                placeholder="Add a new todo..." onChange= {handleChange}/>
                <button type="submit" className="btn btn-success">Add Task</button> 
            </form>
        </Fragment>
    )
       
    
}

export default TodoForm;