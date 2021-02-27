import axios from 'axios';
import { getToken } from '../Pages/Login/auth';

const Api = axios.create({
    baseURL: 'https://colabdevs-kanban-api.herokuapp.com'
  });

  Api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
  
  
export default Api;