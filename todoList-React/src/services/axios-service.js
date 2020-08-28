import axios from 'axios';
let API_URL = 'http://localhost:8000/api/tasks'

const tasksAll = () => {
    const res = axios.get(`${API_URL}`)
    return res
};

const deleteTask = (id) => {
    const res = axios.delete(`${API_URL}/${id}`)
    return res
};


export default {tasksAll, deleteTask}