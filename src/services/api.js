import axios from 'axios';
    //baseURL: 'http://IPEXPO:3333'
    //baseURL: 'http://172.26.75.73:3333'
const api = axios.create({
    baseURL: 'http://192.168.1.143:3333',
});

export default api;