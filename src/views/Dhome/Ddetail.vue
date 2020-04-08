<template>
  <div>
    <p>{{Detail.title}}</p>
    <div class="img">
      <img :src="Detail.img" alt />
    </div>
  </div>
</template>

<script>
import { getDetail } from '../../api/Dfirist'
export default {
  name: 'ddetail',
  created() {
    console.log(getDetail())
    getDetail().then(res => {
      this.DdatailData = res
      var listId = this.$route.params.id
      // eslint-disable-next-line eqeqeq
      this.Detail = this.DdatailData.find(item => item.id == listId)
    })
  },
  data() {
    return {
      Detail: [],
      DdatailData: []
    }
  }
}
</script>

<style scoped>
p {
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 10px;
  color: darkgreen;
  text-align: center;
}
.img {
  padding: 10px;
}
img {
  width: 100%;
}
</style>
