import axios from 'axios';
const API_URL = 'http://localhost:8000/api/tasks';

export default {

    GET_TASKS ({ commit }) {
        axios.get(`${API_URL}`)
        .then((res) => {
            if (res.status === 200) {
                commit('SET_TASKS', res.data);
            }
        })
    },

    CREATE_TASK ({ commit }) {
        axios.post(`${API_URL}`)
        .then((res) => {
            if (res.status === 200) {
                commit('ADD_TASK', res.data);
            }
        })
    },

    UPDATE_TASKS ({ commit }, id) {
        axios.put(`${API_URL}/${id}`)
        .then((res) => {
            if (res.status === 200) {
                commit('UPDATE_TASK', res.data);
            }
        })
    },

    DELETE_TASK ({ commit }, id) {
        axios.delete(`${API_URL}/${id}`)
        .then((res) => {
            if (res.status === 200) {
                commit('DELETE_TASK', res.data);
            }
        })
    },
}