import api from '../api/api'

const SET_USERS = "SET_USERS"
const SET_INITIALIZE = "SET_INITIALIZE"

let initialState = {
    users: null,
    initialize: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [...action.users],
                initialize: true
            }
        case SET_INITIALIZE:
            return {
                ...state,
                initialize: action.initialize
            }
        default:
            return state;
    }
}
export default appReducer;


const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}


const setInitialize = (initialize) => {
    return {
        type: SET_INITIALIZE,
        initialize
    }
}

export const getUsers = () => {
    return async (dispatch) => {
        dispatch(setInitialize(false))
        const data = await api.getUsers()
        if (data.status === 200) {
            dispatch(setUsers(data.data))
        }
    }
}
