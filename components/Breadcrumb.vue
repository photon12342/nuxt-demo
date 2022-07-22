<template>
  <a-breadcrumb v-if="$store.state.common.breads.length > 0" class="common-breadcrumb">
    <a-breadcrumb-item v-for="item of $store.state.common.breads" :key="item.name">
      <a v-if="item.route" :href="item.route">{{item.name}}</a>
      <span v-else>Application</span>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
export default {
 
}
  
</script>
