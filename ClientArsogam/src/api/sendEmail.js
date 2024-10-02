import axios from 'axios'

export const postTecnicAssistance = (request) => {
    axios.post('http://localhost:3000/api/sendEmail', request)
}