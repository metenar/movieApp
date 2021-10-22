import axios from "axios";

export const getMovie=axios.create({
    baseURL:"http://www.omdbapi.com"
})