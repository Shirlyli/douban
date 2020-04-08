<template>
  <div>
    <Header title="小组">
      <div class="searchItem" slot="search">
        <img class="searchImg1" src="../../static/img/ic_search_gray.png" alt />
        <input type="text" placeholder="影视 图书 唱片 小组等" />
        <img class="searchImg2" src="../../static/img/ic_scan_gray.png" alt />
      </div>
      <img class="icon2" slot="icon2" src="../../static/img/ic_chat_white.png" alt />
    </Header>
    <div class="con">
      <div class="img">
        <Swiper :autoplay="true" :loop="true" :delay="1000">
          <div class="swiper-slide" slot="bannerImg">
            <img src="../../static/img/u=211743035,1203047851&fm=11&gp=0.jpg" alt />
          </div>
          <div class="swiper-slide" slot="bannerImg">
            <img src="../../static/img/aaa.jpg" alt />
          </div>
          <div class="swiper-slide" slot="bannerImg">
            <img src="../../static/img/bbb.jpg" alt />
          </div>
        </Swiper>
      </div>
      <p>推荐</p>
      <BookItem></BookItem>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import BookItem from "../components/BookItem.vue";
import Swiper from "../components/Swiper";

export default {
  data() {
    return {
      msg: "我是书籍组件的内容"
    };
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Header,
    BookItem,
    Swiper
  }
};
</script>
<style scoped>
.con {
  margin-top: 50px;
  margin-bottom: 64px;
  overflow: scroll;
}
.img {
  width: 100%;
  height: 200px;
  margin-top: 20px;
}

.img img {
  width: 100%;
  height: 200px;
}
p {
  text-align: center;
  color: darkslategray;
  font-size: 20px;
  border-bottom: 1px dashed darkslategray;
}
</style>
