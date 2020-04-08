<template>
  <div>
  </div>
</template>

<script>
import douban from '../../api/douban'
export default {
  name: 'HelloWorld',
  data() {
    return {}
  },
  created() {
    douban.inTheaters().then(res => {
      console.log(res)
    })
    douban.getCount().then(res => {
      console.log(res)
    })
  }
}
</script>
