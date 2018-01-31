export default (state = {users: [], isLoading: false, hasError: false, user: {}}, action) => {
    switch (action.type) {
        case 'FETCH_ALL_USERS_REQUEST': {
            return {
                ...state,
                users: [],
                isLoading: true
            };
        }

        case 'FETCH_ALL_USERS_SUCCESS': {
            return {
                ...state,
                users: action.users,
                isLoading: false
            };
        }

        case 'FETCH_ALL_USERS_FAILURE': {
            return {
                ...state,
                users: [],
                isLoading: false,
                hasError: true
            };
        }

        case 'CREATE_USER_REQUEST': {
            return {
                ...state,
                isLoading: true
            }
        }

        case 'CREATE_USER_SUCCESS': {
            return {
                ...state,
                isLoading: false,
                hasError: false,
                users: [...state.users, action.user]
            }
        }

        case 'CREATE_USER_FAILURE': {
            return {
                ...state,
                isLoading: false,
                hasError: true
            }
        }

        case 'UPDATE_ROLE_REQUEST': {
            return {
                ...state,
                isLoading: true
            }
        }

        case 'UPDATE_USER_SUCCESS': {
            return {
                ...state,
                isLoading: false,
                hasError: false,
                users: state.users.map(user => user.id === action.user.id ? action.user : user)
            }
        }

        case 'UPDATE_USER_FAILURE': {
            return {
                ...state,
                isLoading: false,
                hasError: true
            }
        }

        case 'FETCH_USER_REQUEST': {
            return {
                ...state,
                isLoading: true
            }
        }

        case 'FETCH_USER_SUCCESS': {
            return {
                ...state,
                isLoading: false,
                hasError: false,
                user: action.user
            }
        }

        case 'FETCH_USER_FAILURE': {
            return {
                ...state,
                isLoading: false,
                hasError: true,
                user: {}
            }
        }

        case 'DELETE_USER_REQUEST': {
            return {
                ...state,
                isLoading: true,

            }
        }

        case 'DELETE_USER_SUCCESS': {
            return {
                ...state,
                isLoading: false,
                hasError: false,
                users: state.users.filter(user => user.id !== action.id)
            }
        }

        case 'DELETE_USER_FAILURE': {
            return {
                ...state,
                isLoading: false,
                hasError: true
            }
        }

        case 'NEW_USER': {
            return {
                ...state,
                user: {}
            }
        }

        default: {
            return state;
        }
    }
}
