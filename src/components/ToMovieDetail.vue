<template>
  <div>
    <!-- 电影详情页面 -->
    <div class="bg">
      <mt-header title="电影">
        <router-link to="/moviemore" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
      <!-- head头部 -->
      <div class="onebox">
        <img :src="detailImg" alt />
        <div>
          <p class="top">{{MovieDetail.title}}</p>
          <p class="mid">{{MovieDetail.original_title}} ({{MovieDetail.year}})</p>
          <p
            class="bottom"
          >{{MovieDetail.countries[0]}}/{{MovieDetail.languages[0]}}/{{MovieDetail.pubdates[0]}}/{{MovieDetail.genres[0]}}/片长{{MovieDetail.durations[0]}}</p>
          <mt-button type="default" size="large" width="100">想看</mt-button>
          <mt-button type="default" size="large">看过</mt-button>
        </div>
      </div>
      <!-- 剧情简介 -->
      <p class="intro">剧情简介</p>
      <div class="sum">
        <p>{{MovieDetail.summary}}</p>
      </div>
      <!-- 评论区域 -->
      <div class="txtbox">
        <span class="intro">短评</span>
        <div class="txt" v-for="item in txtData" :key="item.id">
          <div>
            <img :src="item.author.avatar" alt />
            <span>{{item.author.name}}</span>
          </div>
          <p class="sum">{{item.summary}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tomoviedetail",
  data() {
    return {
      MovieDetail: {
        countries: [],
        languages: [],
        pubdates: [],
        genres: [],
        durations: []
      },
      detailId: 0,
      txtData: [],
      detailImg: "",
      keepAlive:false
    };
  },
  created() {
    this.getDetailData();
  },
  methods: {
    async getDetailData() {
      this.detailId = this.$route.params.id;
      const res = await this.$http.get(
        "/douban/movie/subject/" + this.detailId
      );
      this.txtData = res.popular_reviews;
      console.log(res);
      this.MovieDetail = res;
      res.images.small = "https://images.weserv.nl/?url=" + res.images.small;
      this.detailImg = res.images.small;
    }
  }
};
</script>

<style scoped>
img {
  width: 90px;
  height: 120px;
}

.onebox {
  display: flex;
  margin: auto 10px;
  box-sizing: border-box;
  padding-top: 10px;
  position: relative;
}

.onebox img {
  flex: 3;
  height: 100%;
}

.onebox div {
  flex: 7;
  margin-left: 10px;
}

.top {
  font-size: 16px;
  color: white;
  margin-top: 6px;
}
.mid {
  font-size: 14px;
  color: white;
  margin-top: 4px;
}
.bottom {
  font-size: 12px;
  color: rgb(207, 196, 196);
  margin-top: 6px;
}

.mint-button {
  width: 100px;
  margin-top: 6px;
  height: 26px;
  border-radius: 8px;
  bottom: 0;
}
* {
  margin: 0;
  padding: 0;
}
.bg {
  background-color: darkcyan;
  width: 100vw;
  height: 100vh;
  color: white;
  overflow: scroll;
  margin-bottom: 64px;
}
.mint-header{
  background-color: darkcyan;
}
.intro {
  font-size: 18px;
  margin: 10px;
}

.sum {
  margin-left: 10px;
  margin-right: 10px;
  font-size: 14px;
  /* height: 60px; */
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}
.txtbox {
  margin: 10px;
  background-color: rgba(41, 99, 99, 0.582);
  border-radius: 10px;
}
.txt {
  margin: 10px;
}
.txt img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
</style>