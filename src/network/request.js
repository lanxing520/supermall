import axios from "axios";

//全局axios和其配置
export function request(config){
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:4000,
  })
  // axios拦截器--请求拦截
  instance.interceptors.request.use(config => {
    return config
  },err => {
    console.log(err);
  })
  // 相应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })
  return instance(config)
}
// axios.defaults.baseURL = 'http://123.207.32.32:8000',
//   axios.defaults.timeout = 5000,
//   axios({
//     // url:'httbin.org/',
//     url: '/home/multidata',
//   }).then(res => {
//     console.log(res);
//   })






