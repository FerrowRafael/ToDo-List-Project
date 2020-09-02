import React, { useState, useEffect, Fragment } from 'react';
// import './Home.scss';
import TodoListItem from '../../components/TodoListItem/TodoListItem';
import TodoForm from '../../components/TodoForm/TodoForm';
// import Service from '../../services/axios-service.js';
import { allTasks } from '../../redux/actions/';
import { connect } from "react-redux";
import { useDispatch } from 'react-redux'

const Home = (props) => {

    const [showResults, setShowResults] = useState(false)
    // const onClick = () => setShowResults(true)

    useEffect(() => {
        allTasks()
    })

    const dispatch = useDispatch();
    
    useEffect( () => {
        // Productos cuando el componente este listo
        const cargarProductos = () => dispatch( allTasks() )
        cargarProductos();
        console.log(showResults)
        ;
    }, [dispatch])

    const Results = () => (
        <div id="results" className="search-results">
          Some Results
        </div>
    )

    return (
        <Fragment>
            <TodoForm/>
            <div className='container'>
                {(props.tasks)?.slice(0, 50).map(task => <TodoListItem key={task.id} task={task}/>)}
            </div> 
            <div>
               
                { showResults ? <Results /> : null }
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => ({ tasks: state.tasks })
export default connect(mapStateToProps)(Home);
