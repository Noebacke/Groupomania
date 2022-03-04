import axios from "axios";
import { URL_LOGIN } from "../config";


function authenticate(credentials){
    return axios.post(URL_LOGIN, credentials)
    .then(res => res.data)
    .then(data => {
        localStorage.setItem("token",   data.token)
        axios.defaults.headers["authorization"] =data.token
        return data
    })
}



export default {
    authenticate
};