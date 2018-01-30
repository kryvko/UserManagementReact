import {combineReducers} from 'redux';
import roleReducer from './roles';
import {reducer} from 'redux-form';

export const rootReducer = combineReducers({
    roleStore: roleReducer,
    form: reducer
});