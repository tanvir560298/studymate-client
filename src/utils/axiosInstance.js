import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://studymate-server-ten.vercel.app",
});

export default axiosInstance;