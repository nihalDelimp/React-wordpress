import axios from "axios";
// import { store } from '../Redux/store';

export const authAxios = () => {
    // let token = store.getState('state').auth.token;
    return axios.create({
        baseURL: process.env.REACT_APP_APIURL,
    });
};

export const withoutAuthAxios = () => {
    return axios.create({
        baseURL: process.env.REACT_APP_APIURL,
    });
};

// {
//     "Content-Type": "application/xml; charset=utf-8"
// }