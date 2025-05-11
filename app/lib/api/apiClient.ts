import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios';
// import Cookies from 'js-cookie';
// import { ApiResponse, ApiError } from '../../types/api/api.types';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || '/api';

const apiClient = axios.create({
  baseURL,
  withCredentials: true,
});

export default apiClient;