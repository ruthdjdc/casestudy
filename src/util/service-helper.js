import {getUserListURL, getTransListURL} from './service-url';
import axios from 'axios';

const getUserList = () => {
    return axios.get(getUserListURL);
}

const getTransList = () => {
    return axios.get(getTransListURL);
}


export {
    getUserList, getTransList
}