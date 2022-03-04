const { default: axios } = require("axios");
const { URL_POSTS } = require("../config");


function create(post) {
    return axios.post(URL_POSTS, post)
}

function update (post) {
    
    const postId = window.location.search.slice(1);
    return axios.put(URL_POSTS +  `/${postId}`, post)
}

function getOne (post) {
    const postId = window.location.search.slice(1);
    return axios.get(URL_POSTS + `/${postId}`, post)
}

export default {
    create,
    update,
    getOne,
};





