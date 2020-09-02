import React, { useState, useEffect, Fragment } from 'react';
// import './Home.scss';
import TodoListItem from '../../components/TodoListItem/TodoListItem';
import TodoForm from '../../components/TodoForm/TodoForm';
// import axios from 'axios';
// import Service from '../../services/axios-service.js';
import { allTasks } from '../../redux/actions/';
import { connect } from "react-redux";
import { useDispatch, useSelector } from 'react-redux'

const Home = (props) => {

    useEffect(() => {
        allTasks()
    })

    const dispatch = useDispatch();
    
    useEffect( () => {
        // Productos cuando el componente este listo
        const cargarProductos = () => dispatch( allTasks() )
        cargarProductos();
        ;
    }, [dispatch])
    return (
        <Fragment>
            <TodoForm/>
            <div className='container'>
                {(props.tasks)?.slice(0, 50).map(task => <TodoListItem key={task.id} task={task}/>)}
            </div> 
        </Fragment>
    )
}

const mapStateToProps = (state) => ({ tasks: state.tasks })
export default connect(mapStateToProps)(Home);
