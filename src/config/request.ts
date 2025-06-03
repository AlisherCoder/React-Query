import axios from 'axios';

const request = axios.create({
  baseURL: 'https://6763a6c017ec5852cae97bf8.mockapi.io',
});

request.interceptors.request.use((config) => {
  config.headers.Authorization = 'Bearer ihegfjknejgiugf97gou3fg97q3guofwgou3s';

  return config;
});

export { request };
