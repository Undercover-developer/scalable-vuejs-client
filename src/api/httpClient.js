// import Vue from "vue";
import Axios from "axios";
import { throttleAdapterEnhancer } from "axios-extensions"
import env from "../config/config.env"


const throttleConfig = {
    threshold: 2*1000
}

const httpCLient = Axios.create({
    baseURL: env.BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    adapter: throttleAdapterEnhancer(Axios.defaults.adapter, throttleConfig)
})

export default httpCLient