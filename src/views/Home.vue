<template>
  <div class="home">
    <Header title="主页">
      <div class="searchItem" slot="search">
        <img class="searchImg1" src="../../static/img/ic_search_gray.png" alt />
        <input type="text" placeholder="影视 图书 唱片 小组等" />
        <img class="searchImg2" src="../../static/img/ic_scan_gray.png" alt />
      </div>
      <img class="icon2" slot="icon2" src="../../static/img/ic_chat_white.png" alt />
    </Header>
    <div class="con">
      <!-- <dtype></dtype> -->
      <div class="img">
        <Swiper :delay="1000" :autoplay="true" :loop="true">
          <div slot="bannerImg" class="swiper-slide">
            <img src="../../static/img/u=317000444,2396529297&fm=11&gp=0.jpg" alt />
          </div>
          <div slot="bannerImg" class="swiper-slide">
            <img src="../../static/img/u=1516651488,4125080746&fm=26&gp=0.jpg" alt />
          </div>
          <div slot="bannerImg" class="swiper-slide">
            <img src="../../static/img/u=211743035,1203047851&fm=11&gp=0.jpg" alt />
          </div>
        </Swiper>

        <MovieList></MovieList>
      </div>
    </div>
  </div>
</template>

<script>
import MovieList from "../components/HomeMovieList.vue";
import Header from "../components/Header.vue";
import dtype from "./Dhome/Dtype.vue";
import Swiper from "../components/Swiper";
export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Header,
    MovieList,
    dtype,
    Swiper
  },
  // beforeRouteEnter(to, from, next) {
  //   // 在渲染该组件的对应路由被 confirm 前调用
  //   // 不！能！获取组件实例 `this`
  //   // 因为当守卫执行前，组件实例还没被创建
  //   console.log('组件内路由守卫beforeRouteEnter', to, from)
  //   next()
  // },
  // beforeRouteUpdate(to, from, next) {
  //   // 在当前路由改变，但是该组件被复用时调用
  //   // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
  //   // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  //   // 可以访问组件实例 `this`
  //   console.log('组件内路由守卫beforeRouteUpdate', to, from)
  //   next()
  // },
  // beforeRouteLeave(to, from, next) {
  //   // 导航离开该组件的对应路由时调用
  //   // 可以访问组件实例 `this`
  //   console.log('组件内路由守卫beforeRouteLeave', to, from)
  //   next()
  // },
  // beforeCreate() {
  //   // console.log("beforeCreate")
  // }
  methods: {
  },
};
</script>

<style scoped>
.con {
  margin-top: 50px;
  overflow: scroll;
  margin-bottom: 64px;
}

.img {
  margin-top: 10px;
}
.img img {
  width: 100%;
  height: 180px;
}
</style>
