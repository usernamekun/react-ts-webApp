import axios from 'axios'

const requests = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0/',
  timeout: 5000
})
requests.interceptors.request.use(config=>{

  return config
})
requests.interceptors.response.use(res=>{

  return res.data
},err=>{

  return Promise.reject()
})
export default requests