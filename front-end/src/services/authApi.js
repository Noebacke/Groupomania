import axios from "axios";
import { URL_LOGIN } from "../config";


function authenticate(credentials){
    return axios.post(URL_LOGIN, credentials)
    .then(res => res.data)
    .then(data => {
        localStorage.setItem("token",data.token)
        localStorage.setItem("admin",data.admin)
        localStorage.setItem("name",data.user_name)
        axios.defaults.headers["authorization"] =data.token
        console.log("data.token.admin",data.token);
        return data
    })
}



export default {
    authenticate
};