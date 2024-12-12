import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance | null = null;

function createAxiosInstance() {
  if (!axiosInstance) {
    return axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    });
  }

  return axiosInstance;
}

export default createAxiosInstance();
