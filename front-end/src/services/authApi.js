import axios from "axios";
import { URL_LOGIN } from "../config";


function authenticate(credentials){
    return axios.post(URL_LOGIN, credentials)
    .then(res => res.data)
    .then(data => {
        localStorage.setItem("token",   data.token)
        localStorage.setItem("user_Id",  data.userId)
        localStorage.setItem("user_name",  data.user_name)
        if(data.admin){
            localStorage.setItem("admin", data.admin)
        }else{
            localStorage.setItem("random_user", data.random_user)
        }
        axios.defaults.headers["authorization"] =data.token
        return data
    })
}



export default {
    authenticate
};