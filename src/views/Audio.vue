<template>
  <div class="about">
    <Header title="书影音">
      <div class="searchItem" slot="search">
        <img class="searchImg1" src="../../static/img/ic_search_gray.png" alt />
        <input type="text" placeholder="影视 图书 唱片 小组等" />
        <img class="searchImg2" src="../../static/img/ic_scan_gray.png" alt />
      </div>
      <img class="icon2" slot="icon2" src="../../static/img/ic_chat_white.png" alt />
    </Header>
    <div class="AudioBox">
      <router-link to="/Audio/movie" tag="span">电影</router-link>
      <router-link to="/Audio/tv" tag="span">电视</router-link>
      <router-link to="/Audio/read" tag="span">读书</router-link>
      <router-link to="/Audio/music" tag="span">音乐</router-link>
      <router-link to="/Audio/live" tag="span">同城</router-link>
    </div>
    <div class="con">
      <div class="AudioHot">
        <div class="top">
          <span class="left">{{msg}}</span>
          <span class="right" @click="ActMoreMovie">{{msg2}}</span>
        </div>
        <!-- 热映轮播图区域 -->
        <router-view></router-view>
      </div>
      <div class="AudioSoon">
        <div class="top">
          <span class="left">{{msg3}}</span>
          <span class="right" @click="ActSoonMovie">{{msg4}}</span>
        </div>
        <!-- 即将上映区域 -->
        <AudioMovieSoon></AudioMovieSoon>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import AudioMovieSoon from '../components/AudioMovieSoon'
export default {
  data() {
    return {
      msg: "豆瓣热门",
      msg2: "全部500>",
      msg3:'即将上映',
      msg4:'全部17>'
    };
  },
  components: {
    Header,
    AudioMovieSoon
  },
  methods: {
    ActMoreMovie() {
      this.$router.push("/moviemore");
    },
    ActSoonMovie(){
      this.$router.push('/actsoonmovie')
    }
  }
};
</script>
<style scoped>
.con {
  margin-top: 100px;
  margin-bottom: 64px;
  overflow: scroll;
}
.AudioBox {
  width: 100%;
  background-color: white;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 50px;
  z-index: 999;
  border-bottom: 1px solid #cccccc;
}

.AudioBox li {
  font-size: 14px;
}

.AudioHot {
  width: 100%;
  /* height: 200px; */
  /* margin-top:30px ; */
}

.top {
  margin: 10px;
}
.left {
  color: #000000;
  font-size: 18px;
}
.right {
  font-size: 14px;
  float: right;
  line-height: 30px;
  color: #000000;
}
</style>
