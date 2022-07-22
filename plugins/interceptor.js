import Vue from 'vue'
import Message from 'ant-design-vue/lib/message'
Vue.use(Message)

export default function({$axios, store}) {
  $axios.onRequest(config => {
    // 附加令牌
    // if (store.state.user.token) {
    //   config.headers.Authorization = "Bearer " + store.state.user.token;
    // }
    return config;
  }, error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }),
  $axios.onResponse(res => {
    if (res.ok === 0) {
      Message.error(res.message);
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  }, error => {
    console.log('err' + error) // for debug
    Message.error(error);
    return Promise.reject(error)
  })
}