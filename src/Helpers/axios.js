import axios from "axios";
const instance = axios.create({
    baseURL: import.meta.env.DOMAIN_URL
});

export { axiosinstance };

