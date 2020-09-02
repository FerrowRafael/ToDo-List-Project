import axios from 'axios';
import store from '../store';
import { API_URL } from '../../api-config'
  // API_URL = 'http://localhost:8000/api/tasks/'


// ALL TASKS
export const allTasks = () => {
    return function(dispatch) {
        axios.get(`${API_URL}/tasks`)
        .then(respuesta => {
            dispatch({ 
                type: 'TASKS_ALL',
                payload: respuesta.data
            });
        }
    )}
}

// INSERT TASK
export const insert = async(task) => {
    const res = await axios.post(`${API_URL}/tasks`, task);
    store.dispatch({ 
        type: 'INSERT_TASK',
        payload: res.data
    });
    allTasks();
}

// UPDATE TASK
export const update = async(id, task) => {
    await axios.put(`${API_URL}${id}/tasks`, task);
    // store.dispatch({ 
    //     type: 'UPDATE_TASK',
    //     payload: res.data
    // });
    allTasks();
}

// DELETE TASK
export const deleteTask = async(id) => {
    await axios.delete(`${API_URL}/tasks${id}`);
    // store.dispatch({ 
    //     type: 'DELETE_TASK',
    //     payload: res.data
    // });
    allTasks();
}