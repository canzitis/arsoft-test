import {api} from "../api/api";

const SET_USERS = "SET_USERS"
const SET_INITIALIZE = "SET_INITIALIZE"
const SORT_DATA = "SORT_DATA"
const SET_ORGANIZATIONS = "SET_ORGANIZATIONS"
const SET_WINDOW_LOADING = "SET_WINDOW_LOADING"
const ERROR_MESSAGE = "ERROR_MESSAGE"
const CURRENT_PAGE = "CURRENT_PAGE"
const SET_TEXT_FILE_DOWNLOAD = "SET_TEXT_FILE_DOWNLOAD"

let initialState = {
    users: null,
    initialUser: null,
    initialize: false,
    windowLoading: false,
    errorMessage: false,
    currentPage: 0,
    fileDownloadText: null,
    organizations: null
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [...action.users],
                initialUser: [...action.users],
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
        case ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.errorMessage
            }

        case CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case SET_TEXT_FILE_DOWNLOAD:
            return {
                ...state,
                fileDownloadText: action.fileDownloadText
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

const errorMessage = (errorMessage) => {
    return {
        type: ERROR_MESSAGE,
        errorMessage
    }
}

const setTextFileDownload = (text) => {
    return {
        type: SET_TEXT_FILE_DOWNLOAD,
        text
    }
}

export const setCurrentPage = (page) => {
    return {
        type: CURRENT_PAGE,
        page
    }
}

export const getUsers = (page) => {
    return async (dispatch) => {
        dispatch(setInitialize(false))
        dispatch(errorMessage(false))
        const data = await api.getUsers(page)
        if (!data) {
            setTimeout(() => {
                return dispatch(errorMessage(true))
            }, 2000)
        }
        if (data.status === 200) {
            dispatch(setUsers(data.data))
        }
    }
}

export const editUser = (dataUser) => {
    return async (dispatch) => {
        dispatch(setInitialize(false))
        const data = await api.editUser(dataUser)
        if (data.status === 200) {
            const data = await api.getUsers()
            if (data.status === 200) {
                dispatch(setUsers(data.data))
            }
        }
    }
}


export const getOrganization = () => {
    return async (dispatch) => {
        dispatch(setWindowLoading(false))
        const data = await api.getOrganization()
        if (data.status === 200) {
            dispatch(setOrganizations(data.data.data))
            dispatch(setWindowLoading(true))
        }
    }
}

export const addedUser = (user) => {
    return async (dispatch) => {
        const data = await api.addedUser(user)
        if (data.status === 200) {
            dispatch(setInitialize(false))
            const data = await api.getUsers()
            if (data.status === 200) {
                dispatch(setUsers(data.data))
            }
        }
    }
}

export const deleteUser = (email) => {
    return async (dispatch) => {
        const data = await api.deleteUser(email)
        if (data.status === 200) {
            dispatch(setInitialize(false))
            const data = await api.getUsers()
            if (data.status === 200) {
                dispatch(setUsers(data.data))
            }
        }
    }
}

export const fileDownload = (id) => {
    return async () => {
        const data = await api.getFileDownload(id)
        if (data.status === 200) {
            alert(data.data.description)
        }
    }
}
