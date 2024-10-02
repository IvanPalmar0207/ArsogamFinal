import axios from "axios";

const instanceAxios = axios.create({
    baseUrl : 'http://localhost:3000/api/',
    withCredentials : true
})

export default instanceAxios