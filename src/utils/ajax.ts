import axios from 'axios';
import { Toast } from 'antd-mobile';

// 接口前缀
const BASE_URL = '/api/v1';

const instance = axios.create({
    baseURL: `${BASE_URL}`
});

instance.interceptors.request.use((config) => ({
    ...config,
    params: {
        ...(config.params || {}),
        _: +new Date()
    }
}));

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    Toast.loading('加载中...', 100);
    return config;
}, function (error) {
    Toast.hide();
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    Toast.hide();
    return response.data;
}, function (err) {
    // 当响应异常时做一些处理
    if (err && err.response) {
        switch (err.response.status) {
            case 400: err.message = '请求错误(400)'; break;
            case 401: err.message = '未授权，请重新登录(401)'; break;
            case 403: err.message = '拒绝访问(403)'; break;
            case 404: err.message = '请求出错(404)'; break;
            case 408: err.message = '请求超时(408)'; break;
            case 500: err.message = '服务器错误(500)'; break;
            case 501: err.message = '服务未实现(501)'; break;
            case 502: err.message = '网络错误(502)'; break;
            case 503: err.message = '服务不可用(503)'; break;
            case 504: err.message = '网络超时(504)'; break;
            case 505: err.message = 'HTTP版本不受支持(505)'; break;
            default: err.message = `连接出错(${err.response.status})!`;
        }
    } else {
        err.message = '连接服务器失败!'
    }
    Toast.fail(err.message);
    return Promise.reject(err);
});
