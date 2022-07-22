<template functional>
  <a-sub-menu :key="data.attrs.menu.route">
    <span slot="title">
      <a-icon v-if="data.attrs.menu.icon" :type="data.attrs.menu.icon" style="" />
      <span>{{data.attrs.menu.cname}}</span>
    </span>
    <template v-for="item of data.attrs.menu.children">
      <a-menu-item v-if="!item.children" :key="item.route">
        <a-icon v-if="item.icon" :type="item.icon" />
        <span>{{item.cname}}</span>
      </a-menu-item>
      <Submenu v-else :key="item.route" :menu="item" />
    </template>
  </a-sub-menu>
</template>
