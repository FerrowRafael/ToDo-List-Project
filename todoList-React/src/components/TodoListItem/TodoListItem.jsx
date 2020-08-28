import React, { Fragment } from 'react'
// import './TodoListItem.css'

const TodoListItem = ({ task }) => {

    return (
        <Fragment >
            <div className="task" key={task?.id}>
                <p>{task.name}</p>
                <p>{task.description}</p>
                {/* <a href=""></a> */}
                {/* <button onClick="delete()">Delete</button> */}
            </div>
        </Fragment>
    )
       
}

export default TodoListItem;