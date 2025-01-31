import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://jsonplaceholder.typicode.com",
    timeout: 5000,
});

export default axiosInstance;