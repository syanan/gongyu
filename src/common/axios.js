import axios from 'axios'
import qs from 'qs'
// axios.defaults.headers.post['Content-Type']="application/x-www-form-urlencoded; charset=UTF-8"
// axios.defaults.headers.post['Content-Type']="multipart/form-data; charset=UTF-8"
axios.interceptors.request.use(
        config => {
                return config;
        },
        error => {
                console.log('请求失败');
                return Promise.reject(error)
        }
)
axios.interceptors.response.use(
        res => {
                console.log('响应失败');
                return res
        },
        err => {
                console.log(err)
                return Promise.reject(err)
        }
)
// axios.interceptors.request.eject(jjj)
// axios.CancelToken.source()
export function post(url,params){
        return new Promise((resolve,reject) => {
                console.log(window.BASE)
                axios.post(url,qs.stringify(params,{ depth: 10 }))
                        .then(res => {
                                console.log(res)
                        })
        })
}
export function get(url,params){
        return new Promise((resolve,reject) => {
                axios.get(url,{params:params})
                        .then(res => {
                                console.log(res)
                        })
        })
}