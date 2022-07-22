<template>
  <a-layout-header class="header">
    <div class="logo">
      <img width="40" src="" alt="">
      xxx平台
    </div>
    admin
  </a-layout-header>
</template>

<script>
  export default {
    data() {
      return {
        collapse: false,
        username: 'aa'
      }
    },
    methods: {
      
    }
  }
</script>

<style lang="stylus" scoped>
  .header {
    display: flex;
    height: 60px;
    padding: 0 20px;
    align-items: center;
    justify-content: space-between;
    background: #242f42;
    color: #fff;
    .logo {
      font-size: 18px;
      font-weight: 500;
    }
    .user-avator {
      margin-right: 20px;
    }
  }
</style>