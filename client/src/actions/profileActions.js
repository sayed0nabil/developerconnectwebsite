

import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import { logoutUser } from './authAction';

export const getCurrentProfile = () => dispatch => {
    axios.get(`http://localhost:4000/api/profile`)
    .then( result => {
        dispatch({
            type: 'GET_PROFILE',
            payload: result.data
        })
    })
    .catch(err => {
       dispatch({
        type: 'GET_PROFILE',
        payload: {}
       })
    })
}

export const clearProfile = () => {
    return {
        type: 'CLEAR_PROFILE'
    }
}
export const createProfile = (profile, history) => dispatch => {
    axios.post('http://localhost:4000/api/profile/createprofile', profile)
    .then(result => {
        history.push('/dashboard');
    })
    .catch(err => {
        dispatch({
            type: 'GET-ERRORS',
            payload: err.response.data
        })
    })
}
export const deleteAccount = () => dispatch => {
    if(window.confirm('Are you sure that you want to delete account ?')){
        axios.get('http://localhost:4000/api/profile/delete')
        .then(result => {
            dispatch(logoutUser());
        }).catch(err => {
            dispatch({
                type: 'GET_ERRORS',
                payload: err.response.data
            })
        });
    }
}

export const addExperience = (experience, history) => dispatch => {
    axios.post('http://localhost:4000/api/profile/addexperience', experience)
    .then(result => {
        dispatch({
            type: 'GET_PROFILE',
            payload: result.data
        })
        dispatch({
            type: 'GET-ERRORS',
            payload: {}
        })
        history.push('/dashboard');
    })
    .catch(err => {
        dispatch({
            type: 'GET-ERRORS',
            payload: err.response.data
        })
    });
}
export const addEducation = (education, history) => dispatch => {
    axios.post('http://localhost:4000/api/profile/addeducation', education)
    .then(result => {
        history.push('/dashboard');
    })
    .catch(err => {
        dispatch({
            type: 'GET-ERRORS',
            payload: err.response.data
        })
    })
}
export const removeExperience = (id) => dispatch => {
    axios.get(`http://localhost:4000/api/profile/removeexperience/${id}`)
    .then(result => {
        dispatch(getCurrentProfile());
    }) 
    .catch(err => {
        dispatch({
            type: 'GET-ERRORS',
            payload: err.response.data
        })
    })
}
export const removeEducation = (id) => dispatch => {
    axios.get(`http://localhost:4000/api/profile/removeeducation/${id}`)
    .then(result => {
        dispatch(getCurrentProfile());
    }) 
    .catch(err => {
        dispatch({
            type: 'GET-ERRORS',
            payload: err.response.data
        })
    })
}
export const getProfiles = () => dispatch => {
    
    axios.get('http://localhost:4000/api/profile/all')
    .then(result => {
        dispatch({
            type: 'GET_PROFILES',
            payload: result.data
        })
    })
    .catch(err => {
        console.log(err);
        dispatch({
            type: 'GET-ERRORS',
            payload: err.response.data
        })
    })
}