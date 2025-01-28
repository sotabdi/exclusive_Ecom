import axios from "axios";
const axiosinstance = axios.create({
    baseURL: import.meta.env.DOMAIN_URL
});

export { axiosinstance };

