import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { AbstractHeader, TypedAxiosInstance } from './api.instance.type';

class API implements TypedAxiosInstance {
  private axiosInstance: AxiosInstance | null = null;

  private isResponseInitialized = false;

  public initialize(params: { baseURL: string; headers: AbstractHeader }) {
    this.axiosInstance = axios.create({
      baseURL: params.baseURL,
    });
    this.setRequestInterceptor(params.headers);
    this.setResponseInterceptor();
  }

  public setAuthToken(token: string) {
    this.setRequestInterceptor({ Authorization: `Bearer ${token}` });
  }

  private setRequestInterceptor(headers: AbstractHeader) {
    if (this.axiosInstance) {
      console.log('INITIALIZE REQUEST INTERCEPTOR');
      this.axiosInstance.interceptors.request.use((config) => {
        for (const key in headers) {
          config.headers.set(key, headers[key]);
        }

        return config;
      });
    }
  }

  private setResponseInterceptor() {
    if (!this.isResponseInitialized) {
      this.isResponseInitialized = true;

      console.log('INITIALIZE RESPONSE INTERCEPTOR');
      const responseInterceptor = {
        onFulfilled: (response: AxiosResponse) => {
          return response.data;
        },
        onRejected: ({ response }: { response: AxiosResponse }) => {
          // TODO 나중에 제키랑 같이 고고
          return Promise.reject();
        },
      };

      if (this.axiosInstance) {
        this.axiosInstance.interceptors.response.use(
          responseInterceptor.onFulfilled,
          responseInterceptor.onRejected,
        );
      }
    }
  }

  public get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    console.log(this.axiosInstance);
    if (!this.axiosInstance) throw new Error('API is not initialized');

    return this.axiosInstance.get(url, config);
  }

  public post<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    if (!this.axiosInstance) throw new Error('API is not initialized');

    return this.axiosInstance.post(url, data, config);
  }

  public put<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    if (!this.axiosInstance) throw new Error('API is not initialized');

    return this.axiosInstance.put(url, data, config);
  }

  public delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    if (!this.axiosInstance) throw new Error('API is not initialized');

    return this.axiosInstance.delete(url, config);
  }

  public patch<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    if (!this.axiosInstance) throw new Error('API is not initialized');

    return this.axiosInstance.patch(url, data, config);
  }
}

export default new API();
