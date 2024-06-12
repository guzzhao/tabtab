// axiosInstance.js

import axios from 'axios';

const request = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 5000, // 设置超时时间
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer yourTokenHere' // 添加默认的请求头
  }
});

// 添加请求拦截器
request.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  return config;
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use(response => {
  // 对响应数据做点什么
  return response.data;
}, error => {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default request;

export function get(url, param,config) {
  return request({
    ...{
      method: 'get',
      url: url,
      params: param
    },...config
  })
}


export function post(url, param,config) {
  return request({
    ...{
      method: 'post',
      url: url,
      data: param
    },...config
  })
}

