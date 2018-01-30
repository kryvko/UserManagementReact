import {restHost} from "../resources/properties";

const fetchAllUsersRequest = () => ({
    type: 'FETCH_ALL_USERS_REQUEST'
});

const fetchAllUsersSuccess = users => ({
    type: 'FETCH_ALL_USERS_SUCCESS',
    users
});

const fetchAllUsersFailure = error => ({
    type: 'FETCH_ALL_USERS_FAILURE',
    error
});

const createUserRequest = () => ({
    type: 'CREATE_USER_REQUEST'
});

const createUserSuccess = user => ({
    type: 'CREATE_USER_SUCCESS',
    user
});

const createUserFailure = error => ({
    type: 'CREATE_USER_FAILURE',
    error
});

const updateUserRequest = () => ({
    type: 'UPDATE_USER_REQUEST'
});

const updateUserSuccess = user => ({
    type: 'UPDATE_USER_SUCCESS',
    user
});

const updateUserFailure = error => ({
    type: 'UPDATE_USER_FAILURE',
    error
});

const fetchUserRequest = () => ({
    type: 'FETCH_USER_REQUEST'
});

const fetchUserSuccess = user => ({
    type: 'FETCH_USER_SUCCESS',
    user
});

const fetchUserFailure = error => ({
    type: 'FETCH_USER_FAILURE',
    error
});

const deleteUserRequest = () => ({
    type: 'DELETE_USER_REQUEST'
});

const deleteUsersSuccess = id => ({
    type: 'DELETE_USER_SUCCESS',
    id
});

const deleteUserFailure = error => ({
    type: 'DELETE_USER_FAILURE',
    error
});


export const newUser = () => ({
    type: 'NEW_USER'
});

export const fetchAllUsers = () => {
    return dispatch => {
        dispatch(fetchAllUsersRequest());
        return fetch(`${restHost}/users`)
            .then(resp => resp.json())
            .then(data => dispatch(fetchAllUsersSuccess(data)))
            .catch(error => dispatch(fetchAllUsersFailure(error)));
    }
};

export const createUser = user => {
    return dispatch => {
        dispatch(createUserRequest());
        return fetch(`${restHost}/users`, {
            method: 'post',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(user)
        })
            .then(resp => resp.json())
            .then(data => dispatch(createUserSuccess(data)))
            .catch(error => dispatch(createUserFailure(error)));
    }
};

export const updateUser = (id, user) => {
    return dispatch => {
        dispatch(updateUserRequest());
        return fetch(`${restHost}/users`, {
            method: 'put',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(user)
        })
            .then(resp => resp.json())
            .then(data => dispatch(updateUserSuccess(data)))
            .catch(error => dispatch(updateUserFailure(error)))
    }
};

export const fetchUser = id => {
    return dispatch => {
        dispatch(fetchUserRequest());
        return fetch(`${restHost}/users?ID=${id}`)
            .then(resp => resp.json())
            .then(data => dispatch(fetchUserSuccess(data)))
            .then(error => dispatch(fetchUserFailure(error)));
    }
};

export const deleteUser = id => {
    return dispatch => {
        dispatch(deleteUserRequest());
        return fetch(`${restHost}/users?ID=${id}`, {
            method: 'delete',
        })
            .then(resp => resp.json())
            .then(() => dispatch(deleteUsersSuccess(id)))
            .then(error => dispatch(deleteUserFailure(error)));
    }
};