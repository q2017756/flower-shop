// 简易的axios
import Vue from "vue";
import axios from "axios";
import { Toast } from 'mint-ui';
import qs from 'qs'
Vue.prototype.$ajax = axios;
var api = window.location.origin;
// alert(api)
axios.defaults.timeout = 5000;
axios.defaults.baseURL ='http://static.florinsight.com/service';
axios.defaults.headers = {
    "Content-Type": "application/x-www-form-urlencoded"
}
// axios.defaults.withCredentials = true
axios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
axios.interceptors.response.use(function (response){
    // console.log(response)
    if(response.data.msg == 'unauthorized'){
        location.href= '/main'
        return false
    }
    // 返回响应时做一些处理;
    // if(response.data.success){
    //
    // }else{
    //   return Promise.reject(error);
    // }
    return response;
}, function (error) {
    // 当响应异常时做一些处理
    return Promise.reject(error);
});
// console.log(apiUrl)
var $ajax={
    post:function (url,data) {
        return axios.post(url,data);
    },
    get:function (url,data) {
        return axios.get(url,data);
    }
};
Vue.prototype.$ajax = $ajax;

Vue.prototype.$axios = (url,data,cb,type) => {
    if(type === 'get') {
        $ajax.get(url)
            .then((res)=>{
                cb(res)
            })
            .catch((error)=>{
                console.log(error);
                Toast("服务器异常")
            })
    }else {
        $ajax.post(url,qs.stringify({
            api_type:'common',
            api_version:'1.0',
            isEnd:'webroot',
            ...data
        }))
            .then((res)=>{
                cb(res)
            })
            .catch((error)=>{
                console.log(error);
                Toast("服务器异常")
            })
    }
}

// demo
// this.$axios('', {
//
// }, (data) => {
//
// })

export default $ajax;
