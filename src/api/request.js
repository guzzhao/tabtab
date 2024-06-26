// axiosInstance.js

import axios from 'axios';

const request = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer yourTokenHere'
  }
});

request.interceptors.request.use(config => {
  return config;
}, error => {
  return Promise.reject(error);
});

request.interceptors.response.use(response => {
  return response.data;
}, error => {
  return Promise.reject(error);
});

export default request;

export function get(url, param, config) {
  return request({
    ...{
      method: 'get',
      url: url,
      params: param
    }, ...config
  })
}


export function post(url, param, config) {
  return request({
    ...{
      method: 'post',
      url: url,
      data: param
    }, ...config
  })
}

