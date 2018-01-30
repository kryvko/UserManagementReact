export default (state = {roles: [], isLoading: false, hasError: false, role: {}}, action) => {
    switch (action.type) {
        case 'FETCH_ALL_ROLES_REQUEST': {
            return {
                ...state,
                roles: [],
                isLoading: true
            };
        }

        case 'FETCH_ALL_ROLES_SUCCESS': {
            return {
                ...state,
                roles: action.roles,
                isLoading: false
            };
        }

        case 'FETCH_ALL_ROLES_FAILURE': {
            return {
                ...state,
                roles: [],
                isLoading: false,
                hasError: true
            };
        }

        case 'CREATE_ROLE_REQUEST': {
            return {
                ...state,
                isLoading: true
            };
        }

        case 'CREATE_ROLE_SUCCESS': {
            return {
                ...state,
                isLoading: false,
                roles: [...state.roles, action.role],
                hasError: false
            };
        }

        case 'CREATE_ROLE_FAILURE': {
            return {
                ...state,
                isLoading: false,
                hasError: true
            };
        }

        case 'UPDATE_ROLE_REQUEST': {
            return {
                ...state,
                isLoading: true,
            };
        }

        case 'UPDATE_ROLE_SUCCESS': {
            return {
                ...state,
                isLoading: false,
                hasError: false,
                roles: state.roles.map(role => role.id === action.role.id ? action.role : role)
            };
        }

        case 'UPDATE_ROLE_FAILURE': {
            return {
                ...state,
                isLoading: false,
                hasError: true
            };
        }

        case 'FETCH_ROLE_REQUEST': {
            return {
                ...state,
                isLoading: true,
            };
        }

        case 'FETCH_ROLE_SUCCESS': {
            return {
                ...state,
                isLoading: false,
                hasError: false,
                role: action.role
            };
        }

        case 'FETCH_ROLE_FAILURE': {
            return {
                ...state,
                isLoading: false,
                hasError: true,
                role: {}
            };
        }

        case 'DELETE_ROLE_REQUEST': {
            return {
                ...state,
                isLoading: true,
            };
        }

        case 'DELETE_ROLE_SUCCESS': {
            return {
                ...state,
                isLoading: false,
                hasError: false,
                roles: state.roles.filter(role => role.id !== action.id)
            };
        }

        case 'DELETE_ROLE_FAILURE': {
            return {
                ...state,
                isLoading: false,
                hasError: true
            };
        }

        case 'NEW_ROLE': {
            return {
                ...state,
                role: {}
            };
        }

        default: {
            return state;
        }
    }
}