import axios from 'axios';
const API_URL = 'http://localhost:8000/api/tasks';

export default {

    GET_TASKS ({ commit }) {
        console.log("PLatano")
        axios.get(`${API_URL}`)
        .then((res) => {
            if (res.status === 200) {
                commit('SET_TASKS', res.data);
            }
        })
    },
}