<template>
  <div class="container">
    <div>
      <div class="flex jc-between mb20 blue">
        <nuxt-link :to="{ name: 'about' }">about</nuxt-link>
        <nuxt-link :to="{ name: 'games' }">games</nuxt-link>
        <nuxt-link :to="{ name: 'news' }">news</nuxt-link>
      </div>
      <Logo />
      <div class="fs20">nuxt</div>
      <todo-list />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
