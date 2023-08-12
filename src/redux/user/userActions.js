import axios from "axios"
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"

export const fectUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fectUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fectUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fectUsersRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data
                dispatch(fectUsersSuccess(users))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fectUsersFailure(errorMsg))
            })
    }
}