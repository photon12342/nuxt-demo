// 参数1：执行上下文
// 参数2：注入函数
export default ({ $axios }, inject) => {
  inject("login", user => {
    return $axios.$post('/api/login', user)
  })
}