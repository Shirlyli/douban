<template>
  <div class="about">
    <Header title="市集">
      <img class="icon2" slot="icon2" src="../../static/img/ic_status_send_pic.png" alt />
    </Header>
    <div class="con">
      <CityNews></CityNews>
    </div>
  </div>
</template>
<script>
import Header from '../components/Header'
import CityNews from '../components/CityNews'
export default {
  data () {
    return {
      msg: '我是城市组件的内容'
    }
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Header,
    CityNews
  }
}
</script>
<style scoped>
.con {
  margin-top: 50px;
  overflow: scroll;
  margin-bottom: 64px;
}
</style>
