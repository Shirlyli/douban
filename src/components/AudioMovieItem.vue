<template>
  <div>
    <!-- 影音首页轮播图部分 -->
    <div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="item in audioData"
            :key="item.count"
          >
            <img
              :src="item.images.small"
              alt
            />
            <p>{{item.title}}</p>
            <p>{{item.rating.average}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import "swiper/js/swiper.min.js";
// import douban from "../api/douban";
export default {
  name: "audiomovieitem",
  data() {
    return {
      audioData: []
    };
  },
  created() {},
  mounted() {
    this.getData();
  },
  methods: {
    Swiper() {
      var swiper = new Swiper(".swiper-container", {
        slidesPerView: 3,
        spaceBetween: 10
      });
    },
    async getData() {
      const res = await this.$http.get("/douban/movie/top250", {
        start: 0,
        count: 10
      });
      console.log(res.subjects);
      this.audioData = res.subjects;
      this.audioData = this.audioData.map(item => {
        item.images.small =
          "https://images.weserv.nl/?url=" + item.images.small;
        return item;
      });
      // 数据获取后触发dom更新
      this.$nextTick(() => {
        this.Swiper();
      });

      // const obj = {
      //   start: 0,
      //   count: 10,
      //   city: ""
      // };
      // douban.inTheaters(obj).then(res => {
      //   console.log(res);
      //   this.audioData = res.subjects;
      //   this.audioData = this.audioData.map(item => {
      //     item.images.small =
      //       "https://images.weserv.nl/?url=" + item.images.small;
      //     return item;
      //   });
      //   // 数据获取后触发dom更新
      //   this.$nextTick(() => {
      //     this.Swiper();
      //   });
      // });
    }
  }
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #ffffff;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  /* -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center; */
}

img {
  width: 100%;
  height: 150px;
}

p {
  font-size: 14px;
}
</style>
