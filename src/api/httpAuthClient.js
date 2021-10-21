import Vue from "vue";
import Axios from "axios";
import env from "../config/config.env"



const httpAuthCLient = Axios.create({
    baseURL: env.BASE_URL,
    timeout: 2000
})

const getAuthToken = () => Vue.$cookies.get("userData").accessToken
const authInterceptor = (config) => {
    config.headers['Authorization'] = `Bearer ${getAuthToken()}`
    return config
}

httpAuthCLient.interceptors.request.use(authInterceptor)

export default httpAuthCLient