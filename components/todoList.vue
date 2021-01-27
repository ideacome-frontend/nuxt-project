<template>
  <div>
    <div class="flex">
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <el-button @click="ensure">确定</el-button>
    </div>
    <template v-for="item in showList">
      <div :key="item.id">{{ item.content }}</div>
    </template>
  </div>
</template>
<script>
import utils from './../plugins/utils/index'
export default {
  data() {
    return {
      input: '',
      count: 1,
      showList: [],
    }
  },
  methods: {
    ensure() {
      if (!this.input) {
        utils.alert('请输入内容')
        return false
      }
      this.showList.push({ id: this.count, content: this.input })
      this.$store.commit('setToDoList', this.showList)
      this.count++
      this.input = ''
    },
  },
}
</script>
<style lang="less" scoped></style>
