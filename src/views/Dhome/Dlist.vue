<template>
  <div>
    <div class="listWrap">
      <ul>
        <!--3.点击 触发传出事件-->
        <li v-for="item in DlistData" :key="item.id" @click="doDetail(item.id)">{{ item.title}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getList } from '../../api/Dfirist'
export default {
  name: 'dlist',
  created() {
    getList().then(res => {
      this.DlistData = res
      // 根据传递过来的参数 typeid和当前自己组件中的数据过滤出需要的数据
      var typeid = this.$route.params.id
      // 2.过滤数据
      // eslint-disable-next-line eqeqeq
      this.DlistData = this.DlistData.filter(item => item.type == typeid)
    })
  },
  data() {
    return {
      DlistData: []
    }
  },
  methods: {
    doDetail(id) {
      // 执行传出事件跳转页面,传出参数
      this.$router.push('/ddetail/' + id)
    }
  }
}
</script>

<style scoped>
li {
  font-size: 14px;
  cursor: pointer;
  margin-top: 20px;
  text-align: left;
  margin-left: 10px;
  color: darkgreen;
}
</style>
