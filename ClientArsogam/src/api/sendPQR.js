import axios from "axios";

export const postPqr = (request) => {
    axios.post('http://localhost:3000/api/sendPQR',request)
}