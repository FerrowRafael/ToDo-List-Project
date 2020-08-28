import React, { useState, useEffect, Fragment } from 'react';
import TodoListItem from '../../components/TodoListItem/TodoListItem';
import TodoForm from '../../components/TodoForm/TodoForm';
// import axios from 'axios';
import Service from '../../services/axios-service.js';
// import './Home.scss'

const Home = (props) => {

    const [res, setRes] = useState({});
    useEffect(() => {
        tasksAll();
    })

    const tasksAll = async() => {
        let res = await Service.tasksAll()
        console.log(res)
        setRes(res);
    }

    return (
        <Fragment>
            <h2>TODO LIST REACT</h2>
            <div className='container'>
                {(res.data)?.slice(0, 50).map(task => <TodoListItem key={task.id} task={task}/>)}
            </div> 
            <TodoForm/>
        </Fragment>
    )

}

export default Home;
