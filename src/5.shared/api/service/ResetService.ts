import { AxiosResponse } from "axios";
import { axiosInstance } from "../axiosInstance/axiosInstance";

export const RestService = {
  get: async <T = unknown>(
    path: string
  ): Promise<AxiosResponse<T, unknown>> => {
    return await axiosInstance.get<T>(path);
  },
  post: async <T = unknown, K = unknown>(
    path: string,
    sendData: T
  ): Promise<K> => {
    return await axiosInstance.post(path, sendData);
  },
  put: async <T = unknown, K = unknown>(
    path: string,
    sendData: T
  ): Promise<K> => {
    return await axiosInstance.put(path, sendData);
  },
  delete: async <T = unknown>(path: string): Promise<T> => {
    return await axiosInstance.delete(path);
  },
};
