import axios, { AxiosResponse } from 'axios';
import { AbstractHeader, TypedAxiosInstance } from './api.instance.type';

class API {
  private static axiosInstance: TypedAxiosInstance;

  private isResponseInitialized = false;

  public initialize(params: { baseURL: string; headers: AbstractHeader }) {
    API.axiosInstance = axios.create({
      baseURL: params.baseURL,
    });
    this.setRequestInterceptor(params.headers);
    this.setResponseInterceptor();
  }

  public setAuthToken(token: string) {
    this.setRequestInterceptor({ Authorization: `Bearer ${token}` });
  }

  private setRequestInterceptor(headers: AbstractHeader) {
    API.axiosInstance.interceptors.request.use((config) => {
      for (const key in headers) {
        config.headers.set(key, headers[key]);
      }

      return config;
    });
  }

  private setResponseInterceptor() {
    if (!this.isResponseInitialized) {
      this.isResponseInitialized = true;

      const responseInterceptor = {
        onFulfilled: (response: AxiosResponse) => {
          return response.data;
        },
        onRejected: ({ response }: { response: AxiosResponse }) => {
          // TODO 나중에 제키랑 같이 고고
          return Promise.reject();
        },
      };

      API.axiosInstance.interceptors.response.use(
        responseInterceptor.onFulfilled,
        responseInterceptor.onRejected,
      );
    }
  }

  public getInstance() {
    if (!API.axiosInstance) {
      throw new Error('API is not initialized');
    }
    return API.axiosInstance;
  }
}

export default API;
