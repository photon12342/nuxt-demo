<template>
  <div class="container">
    <a-table :dataSource="list" rowKey="id" :columns="columns" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [],
        columns: [
          {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
          },
          {
            title: '语言',
            dataIndex: 'text',
            key: 'text',
          },
          {
            title: '使用人数',
            dataIndex: 'count',
            key: 'count',
          },
        ],
      }
    },
    async asyncData({$axios, error}) {
      const {ok, data} = await $axios.$get('/api/list')
      // 此处返回的数据会和data进行合并
      if(ok) {
        return {
          list: data
        }
      }
      // 错误处理
      error({statusCode: 400, message: '查询失败请重试~'})
    }
  }
</script>

<style lang="stylus" scoped>

</style>
