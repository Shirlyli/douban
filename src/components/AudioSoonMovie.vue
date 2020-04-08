<template>
  <div>
    <!-- 即将上映 列表区域 -->
    <mt-header title="即将上映">
      <router-link to="/Audio" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="onhot">
      <p>正在热映</p>
      <p>即将上映</p>
    </div>
    <div
      v-infinite-scroll="getData"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
      <div v-for="item in list" :key="item.count" class="box" @click="toSoon(item.id)">
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
export default {
  name: "actsoonmovie",
  data() {
    return {
      list: [],
      loading: false,
      start: 0,
      count: 5
    };
  },
  methods: {
    async getData() {
      this.loading = true;
      const res = await this.$http.get("/douban/movie/coming_soon", {
        start: this.start * this.count,
        count: this.count
      });   
      this.list = this.list.concat(res.subjects);
      this.loading = false;
      this.start++;
    },
    toSoon(id){
      this.$router.push('/tomoviedetail'+id)
    }
  }
};
</script>

<style scoped>
.onhot {
  font-size: 14px;
  height: 30px;
  color: #999999;
  display: flex;
  text-align: center;
  align-items: center;
}

.onhot p {
  flex: 1;
}
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