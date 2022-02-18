const { default: axios } = require("axios");
const { URL_POSTS } = require("../config");


function create(post) {
    return axios.post(URL_POSTS, post)
}

function update (post) {
    return axios.put(URL_POSTS +  `/${post.id}`, post)
}

function getOne (post) {
    let postId = localStorage.getItem('Post_id')
    return axios.get(URL_POSTS + `/${postId}`, post)
}

export default {
    create,
    update,
    getOne,
};





