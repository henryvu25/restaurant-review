import axios from "axios";


const baseURL = process.env.NODE_ENV === "production" ? "api/v1/restaurants" : "http://localhost:3005/api/v1/restaurants"
//allows you to import this baseURL from other components
export default axios.create({
    baseURL: baseURL,
});