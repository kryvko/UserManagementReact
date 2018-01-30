import {restHost} from "../resources/properties";

const fetchAllRolesRequest = () => ({
    type: 'FETCH_ALL_ROLES_REQUEST'
});

const fetchAllRolesSuccess = roles => ({
    type: 'FETCH_ALL_ROLES_SUCCESS',
    roles
});

const fetchAllRolesFailure = error => ({
    type: 'FETCH_ALL_ROLES_FAILURE',
    error
});

const createRoleRequest = () => ({
    type: 'CREATE_ROLE_REQUEST'
});

const createRoleSuccess = role => ({
    type: 'CREATE_ROLE_SUCCESS',
    role
});

const createRoleFailure = error => ({
    type: 'CREATE_ROLE_FAILURE',
    error
});

const updateRoleRequest = () => ({
    type: 'UPDATE_ROLE_REQUEST'
});

const updateRoleSuccess = role => ({
    type: 'UPDATE_ROLE_SUCCESS',
    role
});

const updateRoleFailure = error => ({
    type: 'UPDATE_ROLE_FAILURE',
    error
});

const fetchRoleRequest = () => ({
    type: 'FETCH_ROLE_REQUEST'
});

const fetchRoleSuccess = role => ({
    type: 'FETCH_ROLE_SUCCESS',
    role
});

const fetchRoleFailure = error => ({
    type: 'FETCH_ROLE_FAILURE',
    error
});

const deleteRoleRequest = () => ({
    type: 'DELETE_ROLE_REQUEST'
});

const deleteRoleSuccess = id => ({
    type: 'DELETE_ROLE_SUCCESS',
    id
});

const deleteRoleFailure = error => ({
    type: 'DELETE_ROLE_FAILURE',
    error
});


export const newRole = () => ({
    type: 'NEW_ROLE'
});

export const fetchAllRoles = () => {
    return dispatch => {
        dispatch(fetchAllRolesRequest());
        return fetch(`${restHost}/roles`)
            .then(resp => resp.json())
            .then(data => dispatch(fetchAllRolesSuccess(data)))
            .catch(error => dispatch(fetchAllRolesFailure(error)));
    }
};

export const createRole = role => {
    return dispatch => {
        dispatch(createRoleRequest());
        return fetch(`${restHost}/roles`, {
            method: 'post',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(role)
        })
            .then(resp => resp.json())
            .then(data => dispatch(createRoleSuccess(data)))
            .catch(error => dispatch(createRoleFailure(error)));
    }
};

export const updateRole = (id, role) => {
    return dispatch => {
        dispatch(updateRoleRequest());
        return fetch(`${restHost}/roles?ID=${id}`, {
            method: 'put',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(role)
        })
            .then(resp => resp.json())
            .then(data => dispatch(updateRoleSuccess(data)))
            .catch(error => dispatch(updateRoleFailure(error)))
    };
};

export const fetchRole = id => {
    return dispatch => {
        dispatch(fetchRoleRequest);
        return fetch(`${restHost}/roles?ID=${id}`)
            .then(resp => resp.json())
            .then(data => dispatch(fetchRoleSuccess(data)))
            .catch(error => dispatch(fetchRoleFailure(error)))
    };
};

export const deleteRole = id => {
    return dispatch => {
        dispatch(deleteRoleRequest());
        return fetch(`${restHost}/roles?ID=${id}`, {
            method: 'delete'
        })
            .then(resp => resp.json())
            .then(() => dispatch(deleteRoleSuccess(id)))
            .catch(error => dispatch(deleteRoleFailure(error)))
    };
};