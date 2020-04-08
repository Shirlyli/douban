<template>
  <div>
    <!-- 电影热映列表 -->
    <div
      v-infinite-scroll="getData"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
    <!-- 点击click到电影详情 -->
      <div v-for="item in list" :key="item.id" class="box" @click="toMovieDetail(item.id)">
        <img :src="item.images.small" alt />
        <div>
          <p class="top">{{ item.title }}({{item.year}})</p>
          <p class="bottom">{{item.pubdates[0]}}/ {{item.genres}} / {{item.directors[0].name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import douban from "../api/douban";
export default {
  name: "moviemoreitem",
  data() {
    return {
      list: [],
      loading: false,
      count: 8,
      start: 0
    };
  },
  methods: {
    async getData() {
      this.loading = true //禁止
      const res = await this.$http.get("/douban/movie/top250",{start:this.count*this.start,count:this.count});
      // 将新获取的数据与原先获取的数据绑定
      this.list = this.list.concat(res.subjects)
      this.loading = false
      this.start++
    },
    toMovieDetail(id){
      this.$router.push('/tomoviedetail/'+id)
    }
  },

  mounted() {
    // this.getData();
  }
};
</script>

<style scoped>
img {
  width: 90px;
  height: 120px;
}

.box {
  display: flex;
  margin: 10px;
}

.box img {
  flex: 3;
}

.box div {
  flex: 7;
  padding: 10px;
}

.top {
  font-size: 14px;
  color: #000000;
  margin-top: 10px;
}

.bottom {
  font-size: 12px;
  color: #999999;
  margin-top: 20px;
}
</style>