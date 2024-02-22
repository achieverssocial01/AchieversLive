import axios from "axios";

export const axiosClient = axios.create({
    baseURL: "https://achieverstech.site/",
    // withCredentials:true,
});
// export const axiosClient = axios.create({
//     baseURL: "http://localhost:8089",
//     // withCredentials:true,  
// });

export const baseURL= 'https://achieverstech.site';