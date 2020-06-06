import {combineReducers} from 'redux';
import authReducer from './authReducer';
import productsReducer from './productsReducer';
import customersReducer from './customersReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    auth: authReducer,
    products: productsReducer,
    customers: customersReducer,
    error:errorReducer
});