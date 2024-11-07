//封装axios请求
import axios from 'axios';

const request = axios.create({
  timeOut: 10000,
  header: { 'content-type': 'application/json;charset=UTF-8' },
});

request.interceptors.request.use(
  (config) => {
    //请求拦截器
    //可以再这里添加token
    return config;
  },
  (error) => {
    //请求错误处理
    return Promise.reject('error');
  }
);

request.interceptors.response.use(
  (response) => {
    //响应拦截器
    //处理响应得到的结果
    return response;
  },
  (error) => {
    //对响应返回错误进行处理
  }
);
//导出request实例
export default request;
