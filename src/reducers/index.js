import {combineReducers} from 'redux';
import roleReducer from './roles';
import userReducer from './users'
import {reducer} from 'redux-form';

export const rootReducer = combineReducers({
    roleStore: roleReducer,
    userStore: userReducer,
    form: reducer
});