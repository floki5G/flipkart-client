import axios from "axios";
import { apiurl } from "./api.url";


const authToken =  localStorage.getItem("token");



const axiosInstance = axios.create({
    baseURL: apiurl.URL,
    headers: {
        Authorization:`Bearer ${authToken}`
      }
})

export default axiosInstance
