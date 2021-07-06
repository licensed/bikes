import axios from "axios"

export const cityBikesAPI = axios.create({
    baseURL: "http://api.citybik.es/v2/",
})