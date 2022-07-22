<template>
  <a-layout-sider v-model="collapsed" collapsible width="220">
    <a-menu
      v-model="selectedKeys"
      :default-selected-keys="defaultSelectedKeys"
      :open-keys="openKeys"
      mode="inline"
      theme="dark"
      @select="selectMenu"
      @openChange="onOpenChange"
    >
      <template v-for="menu of menuList">
        <a-menu-item v-if="!menu.children" :key="menu.route">
          <a-icon v-if="menu.icon" :type="menu.icon" style="" />
          <span>{{menu.cname}}</span>
        </a-menu-item>
        <a-sub-menu v-else :key="menu.route">
          <span slot="title">
            <a-icon v-if="menu.icon" :type="menu.icon" style="" />
            <span>{{menu.cname}}</span>
          </span>
          <template v-for="item of menu.children">
            <a-menu-item v-if="!item.children" :key="item.route">
              <a-icon v-if="item.icon" :type="item.icon" />
              <span>{{item.cname}}</span>
            </a-menu-item>
          </template>
        </a-sub-menu>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script>

export default {
  data() {
    return {
      selectedKeys: [],
      defaultSelectedKeys: ['/dashboard'],
      rootSubmenuKeys: ['form', 'list'],
      openKeys: [],
      collapsed: false,
      menuList: [
        {cname: '工作台', ename: 'dashboard', route: '/dashboard', icon: 'dashboard',},
        {
          cname: '表单页', ename: 'form', route: 'form', icon: 'form',
          children: [
            { cname: '基础表单', ename: 'basicForm', route: '/form/basic-form' },
          ]
        },
        {
          cname: '列表页', ename: 'list', route: 'list', icon: 'table',
          children: [
            { cname: '查询列表', ename: 'tableList', route: '/list/table-list' },
          ]
        },
      ],
    }
  },
  created() {
    this.selectedKeys = [this.$route.path]
    const key = this.rootSubmenuKeys.find(item => this.$route.path.indexOf(item) > -1)
    this.openKeys = key ? [key] : []
  },
  methods: {
    selectMenu({ selectedKeys }) {
      this.$router.push(selectedKeys[0])
    },
    onOpenChange(openKeys) {
      if(openKeys.length > 0) {
        this.openKeys = [openKeys[openKeys.length - 1]]
      } else {
        this.openKeys = []
      }
    },
  }
}
</script>

<style lang="stylus" scoped>
  .menu-container
    .main
      width 100%
</style>

