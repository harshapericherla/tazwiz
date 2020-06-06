import axios from 'axios';
import { FETCH_USER,FETCH_CUSTOMERS,FETCH_PRODUCTS,FETCH_ERROR} from './types';

export const loginUser = (user) => async dispatch => { 
      let res;
      dispatch({type:FETCH_ERROR,payload:""});
      try{
            res = await axios.post('/auth/login',user);
            console.log(res.data);
            dispatch({type:FETCH_USER,payload:res.data});
      }catch(error)
      {
            if(error.response && error.response.data)
            dispatch({type:FETCH_ERROR,payload:error.response.data.message});
      }
}

export const signout = () => async dispatch => { 
      dispatch({type:FETCH_ERROR,payload:""});
      dispatch({type:FETCH_USER,payload:[]});
}

export const fetchProducts = (token) => async dispatch => {

      let res;
      dispatch({type:FETCH_ERROR,payload:""});
      try{
            res = await axios.get('/api/get_products',{headers:{'x-access-token':token}});
            console.log(res);
            dispatch({type:FETCH_PRODUCTS,payload:res.data});
      }catch(error)
      {
            if(error.response && error.response.data)
            dispatch({type:FETCH_ERROR,payload:error.response.data.message});
      }
}

export const fetchCustomers = (token) => async dispatch => {

      console.log(token);
      let res;
      dispatch({type:FETCH_ERROR,payload:""});
      try{
            res = await axios.get('/api/get_customers',{headers:{'x-access-token':token}});
            console.log(res);
            dispatch({type:FETCH_CUSTOMERS,payload:res.data});
      }catch(error)
      {
            if(error.response && error.response.data)
            dispatch({type:FETCH_ERROR,payload:error.response.data.message});
      }
}

export const editCustomer = (customer,token) => async dispatch => {
      let res;
      dispatch({type:FETCH_ERROR,payload:""});
      try{
            res = await axios.put('/api/edit_customer',customer,{headers:{'x-access-token':token}});
            dispatch({type:FETCH_CUSTOMERS,payload:res.data});
      }catch(error)
      {
            if(error.response && error.response.data)
            dispatch({type:FETCH_ERROR,payload:error.response.data.message});
      }
}

export const editProduct = (product,token) => async dispatch => {
      let res;
      dispatch({type:FETCH_ERROR,payload:""});
      try{
            res = await axios.put('/api/edit_product',product,{headers:{'x-access-token':token}});
            dispatch({type:FETCH_PRODUCTS,payload:res.data});
      }catch(error)
      {
            if(error.response && error.response.data)
            dispatch({type:FETCH_ERROR,payload:error.response.data.message});
      }
}