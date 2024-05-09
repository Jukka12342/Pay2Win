import axios from "axios";

// инстанс для запросов без авторизации
const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

// инстанс, подставляющий хедер авторизации + добавление токена
const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

// автоматическое подставление токена к каждому запросу
const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
}

$authHost.interceptors.request.use(authInterceptor);

export {
    $host,
    $authHost
}
