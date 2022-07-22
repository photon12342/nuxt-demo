export const actions = {
  // nuxtServerInit @nuxtjs/axios 里的方法
  nuxtServerInit({ commit }, { app }) {
    // cookie-universal-nuxt用法如下
    // app是server实例也就是koa实例
    const token = app.$cookies.get("token");
    // 表明是登录用户
    if (token) {
      // console.log("nuxtServerInit: token:"+token);
      commit("user/init", token);
    }
  }
};