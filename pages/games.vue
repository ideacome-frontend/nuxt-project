<template>
  <div class="map">
    <div>{{ info }}</div>
  </div>
</template>
<script>
import { getAdvice } from './../plugins/api/getdata'
export default {
  data() {
    return {
      text: '',
    }
  },
  asyncData() {
    return getAdvice({
      adviceId: 25,
    }).then((res) => {
      console.log(res.data.content)
      return { info: res.data.content }
    })
  },
  // mounted() {
  //   getAdvice({
  //     adviceId: 25,
  //   }).then((res) => {
  //     console.log(res.data.content)
  //   })
  // },
}
</script>
