const { default: axios } = require("axios");
const { URL_SIGNUP, URL_GET_USER } = require("../config");


function create(user) {
    return axios.post(URL_SIGNUP, user)
}

function getUser (user) {
    return axios.get(URL_GET_USER, user)
}

export default {
    create,
    getUser,
    
};