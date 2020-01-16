import Axios from 'axios';

export const baseUrl = 'http://18.224.18.3/api/'
export const api = axios.create({
    baseURL: baseUrl,
    // timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
});