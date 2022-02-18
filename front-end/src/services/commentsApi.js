import { URL_COMMENTS } from "../config";
const { default: axios } = require("axios");

function create(comment) {
    axios.post(URL_COMMENTS, comment);
}

export default {
    create,
};