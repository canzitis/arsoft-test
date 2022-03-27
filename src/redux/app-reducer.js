import {api} from "../api/api";

const SET_USERS = "SET_USERS"
const SET_INITIALIZE = "SET_INITIALIZE"
const SORT_DATA = "SORT_DATA"
const SET_ORGANIZATIONS = "SET_ORGANIZATIONS"
const SET_WINDOW_LOADING = "SET_WINDOW_LOADING"

let initialState = {
    users: null,
    initialize: false,
    windowLoading: false,
    roles: [
        {
            name: "Суперпользователь"
        }, {
            name: "Администратор"
        }, {
            name: "Пользователь"
        }],
    organizations: null
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
        case SORT_DATA:
            return {
                ...state,
                users: [...action.data]
            }
        case SET_ORGANIZATIONS:
            return {
                ...state,
                organizations: [...action.organizations],
                windowLoading: true

            }
        case SET_WINDOW_LOADING:
            return {
                ...state,
                windowLoading: action.windowLoading
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

export const sortData = (data) => {
    return {
        type: SORT_DATA,
        data
    }
}

const setOrganizations = (organizations) => {
    return {
        type: SET_ORGANIZATIONS,
        organizations
    }
}

const setWindowLoading = (windowLoading) => {
    return {
        type: SET_WINDOW_LOADING,
        windowLoading
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

export const editUser = (dataUser, idUserEdit) => {
    return async (dispatch) => {
        dispatch(setInitialize(false))
        const data = await api.editUser(dataUser, idUserEdit)
        if (data.status === 200) {
            const data = await api.getUsers()
            if (data.status === 200) {
                dispatch(setUsers(data.data))
                dispatch(setInitialize(true))
            }
        }
    }
}


export const getOrganization = () => {
    return async (dispatch) => {
        dispatch(setWindowLoading(false))
        const data = await api.getOrganization()
        if (data.status === 200) {
            dispatch(setOrganizations(data.data))
        }
    }
}

export const addedUser = (user) => {
    return async (dispatch) => {
        const data = await api.addedUser(user)
        if (data.status === 200) {
            console.log(data)
        }
    }
}
