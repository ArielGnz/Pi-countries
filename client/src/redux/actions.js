import { 
    GET_COUNTRIES,
    GET_NAME, 
    GET_DETAIL, 
    FILTER_CONTINENTS, 
    GET_ORDER, 
    POBLATION_ORDER,
    GET_ACTIVITIES,
    FILTER_ACTIVITY
} from './action-types';

import axios from 'axios';

//axios.defaults.baseURL = "https://radiant-communication-production.up.railway.app/";
axios.defaults.baseURL = "http://localhost:3001";

export const getCountries = () => {
    return async function(dispatch){
        const response = await axios(`/countries`);
        return dispatch({
            type: GET_COUNTRIES,
            payload: response.data
        })
    }
}

export const getName = (name) => {
    return async function(dispatch){
        const response = await axios(`/countries/?name=${name}`);
        return dispatch({
            type: GET_NAME,
            payload: response.data
        })
    }
}

export const getDetail = (id) => {
    return async function(dispatch){
        const response = await axios(`/countries/${id}`);
        return dispatch({
            type: GET_DETAIL,
            payload: response.data
        });
    }
}

export const filterContinents = (continent) => {
   
    return {
        type: FILTER_CONTINENTS,
        payload: continent
    };
    
}

export const filterActivity = (name) => {

    return {
        type: FILTER_ACTIVITY,
        payload: name
    }
}

export const getOrder = (order) => {
    return {
        type: GET_ORDER,
        payload: order
    }
}

export const poblationOrder = (order) => {
    return {
        type: POBLATION_ORDER,
        payload: order
    }
}

export function getActivities() {
    return async function (dispatch) {
            const response = await axios(`/activities`);
            return dispatch({
                type: GET_ACTIVITIES,
                payload: response.data
            })
       
    }
}


export function postForm(payload) {

    return async function () {
        try {
            const res = await axios.post('/activities', payload)
            return res;
        } catch (error) {
            
        }
    }
}
