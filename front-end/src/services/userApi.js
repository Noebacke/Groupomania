const { default: axios } = require("axios");
const { URL_SIGNUP, URL_GET_USER } = require("../config");


function create(user) {
    return axios.post(URL_SIGNUP, user)
}

export default {
    create,
    
    
};