const { default: axios } = require("axios");
const { URL_SIGNUP, URL_GET_USER } = require("../config");


function create(user) {
    return axios.post(URL_SIGNUP, user)
}
function update (user) {
    const userId = window.location.search.slice(1);
    return axios.put(URL_GET_USER +  `/update`, user)
}
function deleteUser (user) {
    const userId = window.location.search.slice(1);
    return axios.delete(URL_GET_USER +  `/${userId}`, user)
}

export default {
    create, 
    update,
    deleteUser
};