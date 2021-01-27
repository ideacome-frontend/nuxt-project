<template>
  <div>
    <div>
      <i class="icon iconfont icon-all"></i>
      <span>about</span>
    </div>
    <template v-for="item in $store.state.toDoList">
      <div :key="item.id">{{ item.content }}</div>
    </template>
  </div>
</template>
<script>
export default {
  layout: 'blog',
  mounted() {},
}
</script>
