const index = (state = {}, action) => {
    switch (action.type) {
        // TASKS_ALL
        case 'TASKS_ALL':
            return {
                ...state,
                tasks: action.payload
            }
        // INSERT_TASK
        case 'INSERT_TASK':
            return {
                ...state,
                tasks: undefined
            }
        // UPDATE_TASK
        case 'UPDATE_TASK':
            return {
                ...state,
                tasks: undefined
            }
        // DELETE_TASK
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: undefined
            }
        default:
            return state

    }
}
export default index;