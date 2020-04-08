<template>
  <!--方法1 第一步 触发点击事件 把参数传给函数-->
  <div class="typeWrap">
    <div class="type" v-for="item in types" @click="toDlist(item.id)" :key="item.id">{{item.title}}</div>
  </div>
  <!--方法2 第一步 触发点击事件 把参数传给函数 多个参数-->
  <!--<div class="typeWrap"><div class="type" v-for="item in types" @click="toDolist(item.id,item.title)">
      {{item.title}}</div>
  </div>-->
</template>

<script>
import { getType } from '../../api/Dfirist'
export default {
  name: 'dtype',
  created() {
    getType().then((res) => {
      this.types = res
    })
  },
  data() {
    return {
      types: []
    }
  },
  methods: {
    toDlist(id) {
      // <!--方法1 第二步  把参数显示到路径上  @click="toDlist(item.id)"-->
      // 改变路径 把参数加入路径中
      this.$router.push('/dlist/' + id)

      // this.$router.push({
      // path:"/dlist/"+id
      // })

      // this.$router.push({
      // path:`/dlist/${id}`
      // })
    }
  }
}
</script>

<!--scoped="scoped" 当前组件中的样式只对当前组件起作用-->
<style scoped="scoped">
.typeWrap {
  width: 100%;
  height: 80px;
  overflow: hidden;
}
.typeWrap .type {
  width: 33%;
  float: left;
  height: 40px;
  font-size: 14px;
  text-align: center;
  line-height: 40px;
}
</style>
