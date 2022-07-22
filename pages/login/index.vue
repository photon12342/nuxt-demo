<template>
  <div class="main">
    <client-only>
      <div id="particles">
        <vue-particles 
          color="#dedede"
          :particle-opacity="0.7"
          :particles-number="60"
          shape-type="circle"
          :particle-size="4"
          lines-color="#dedede"
          :lines-width="1"
          :line-linked="true"
          :line-opacity="0.4"
          :lines-distance="150"
          :move-speed="2"
          :hover-effect="true"
          hover-mode="grab"
          :click-effect="true"
          click-mode="push"
        />
      </div>
    </client-only>
    <div class="container">
      <h2>xxx后台管理系统</h2>
      <a-divider style="margin-top: 16px;margin-bottom: 10px;background-color:rgb(0 0 0 / 22%)" />
      <a-form
        :model="form"
        name="basic"
        autocomplete="off"
        class="login-form"
      >
        <a-form-item
          name="username"
          :rules="[{ required: true, message: '请输入用户名' }]"
        >
          <a-input size="large" placeholder="请输入用户名" v-model="form.username">
            <template #prefix>
              <a-icon type="user" style="font-size:18px;color:#1890ff" />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
          name="password"
          :rules="[{ required: true, message: '请输入密码!' }]"
        >
          <a-input size="large" placeholder="请输入密码" v-model="form.password">
            <template #prefix>
              <a-icon type="lock" style="font-size:18px;color:#1890ff"/>
            </template>
          </a-input>
        </a-form-item>

        <a-form-item>
          <a-button type="primary" @click="onLogin" class="login-button">登录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  layout: 'blank',
  data () {
    return {
      form: {
        username: '',
        password: '',
      }
    }
  },
  methods: {
    ...mapActions({login: 'user/login'}),
    onLogin () {
      this.login(this.form).then(ok => {
        if(ok) {
          const redirect = this.$route.query.redirect || "/";
          this.$router.push(redirect);
        }
      })
    },
  }
}
</script>

<style lang="stylus" scoped>
.main {
  width: 100vw;
  height: 100vh;
  position: relative;
  background: url('../../static/img/loginBg.png') 0 0 no-repeat;
  background-color: #304175;
  background-size: cover;
  .container {
    width: 460px;
    position: absolute;
    left: calc(50vw - 230px);
    top: 20%;
    z-index: 2;
    border-radius: 5px;
    background: rgba(64,158,255,0);
    box-shadow: 0 0 10px rgb(0 0 0 / 40%);
    h2 {
      margin-top: 16px;
      color: #fff;
      text-align: center;
    }
    button.login-button {
      width: 100%;
      padding: 0 15px;
      font-size: 16px;
      height: 40px;
    }
    :deep(.ant-input) {
      font-size: 14px;
      padding-left: 36px;
    }
    .login-form {
      padding: 10px 50px;
    }
  }
}
</style>
