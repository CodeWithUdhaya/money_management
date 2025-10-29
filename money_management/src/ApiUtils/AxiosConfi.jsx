import axios from "axios";
// import.meta.env.VITE_*;
console.log("BaseUrl==="+import.meta.env.base_url)
const axiosInstance = axios.create({
  baseURL: import.meta.env.base_url,
  withCredentials: true, // uses your .env value
});


export default axiosInstance
