import axios from "axios";
import cookie from "js-cookie";

const service = axios.create({
  baseURL: 'http://110.131.136.5',
  timeout: 5000
})

// 设置拦截器
service.interceptors.request.use(
  config => {
    if (cookie.get('web-token')) {
      // 把cookie值放入header
      config.headers['web-token'] = cookie.get('web-token')
    }
    return config
  }
)

export default service
