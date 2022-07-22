<template>
  <a-spin tip="Loading..." :spinning="spinning" size="large">
    <a-layout>
      <common-header />
      <a-layout class="common-wrapper" style="flex-direction:row">
        <common-sider />
        <a-layout class="common-container">
          <common-breadcrumb></common-breadcrumb>
          <a-layout-content class="common-content">
            <transition name="fade" mode="out-in" appear>
              <nuxt />
            </transition>
          </a-layout-content>
        </a-layout>
      </a-layout>
    </a-layout>
  </a-spin>
</template>

<script>
  import CommonHeader from '@/components/Header';
  import CommonSider from '@/components/Sider';
  import CommonBreadcrumb from '@/components/Breadcrumb';

  export default {
    components: {
      CommonHeader,
      CommonSider,
      CommonBreadcrumb
    },
    data() {
      return {
        spinning: false
      }
    },
    provide() {
      return {
        spinGlobal: (flag) => this.spin(flag)
      }
    },
    methods: {
      spin(flag) {
        this.spinning = flag
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>