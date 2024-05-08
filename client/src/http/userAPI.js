import {$authHost, $host} from "./index";
import { jwtDecode } from "jwt-decode";


export const registration = async (email, login, password) => {
    const { data } = await $host.post('api/user/registration', { email, login, password, role: 'ADMIN' });
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
}

export const login = async (email, password) => {
    const { data } = await $host.post('api/user/login', { email, password });
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
}

export const check = async () => {
    const token = localStorage.getItem('token');
    if (token) {
        const { data } = await $authHost.post('api/user/auth');
        localStorage.setItem('token', data.token);
        return jwtDecode(data.token);
    } else {
        throw new Error('No token found in localStorage');
    }
}