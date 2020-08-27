import React, { Component, Fragment } from 'react'
// import './TodoForm.css'

class TodoForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    render() {
            return (
            <Fragment >
               {/* <form ref="form" onSubmit={this.onSubmit} className="form-inline">
                    <input type="text" ref="itemName" className="form-control" placeholder="add a new todo..."/>
                    <button type="submit" className="btn btn-default">Add</button> 
                </form> */}
            </Fragment>
            )
       
    }  
}

export default TodoForm;