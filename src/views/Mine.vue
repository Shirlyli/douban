<template>
  <div class="about">
    <Header title="我的">
      <img class="icon2" slot="icon2" src="../../static/img/ic_book_annotation_like.png" alt />
    </Header>
    <div class="con">
      <MIneItem></MIneItem>
    </div>
  </div>
</template>
<script>
import Header from '../components/Header.vue'
import $ from 'jquery'
import MIneItem from '../components/MineItem'
export default {
  data() {
    return {
      msg: '我是Mine组件的内容'
    }
  },
  components: {
    Header,
    MIneItem
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    console.log('组件内路由守卫beforeRouteLeave:', to, from)
    if (from.path === '/Mine') {
      // 如果是需要加判断的界面
      const res = confirm('确定要离开吗？')
      if (res) {
        next()
      } else {
        // isleave为false表示不离开
        this.isLeave = false
        // 回到最后一次点击时的地方
        $('.itemBox')
          .last()
          .click()
      }
    }
  }
}
</script>
<style  scoped>
.con {
  margin-top: 50px;
  margin-bottom: 64px;
  overflow: scroll;
}
</style>
