<template>
  <div>
    <p class="top">城市新闻</p>
    <div class="newsBox" v-for="item in newsItem" :key="item.id">
      <div class="img">
        <img :src="item.src" alt="">
      </div>
      <div class="right">
        <p class="title">{{item.title}}</p>
        <p class="content">{{item.des}}</p>
        <p class="author">{{item.author}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'citynews',
  created () {
    axios.get('../static/js/newslist.json').then((res) => {
      this.newsItem = res.data
      console.log(res.data)
    })
  },
  data() {
    return {
      newsItem: []
    }
  }
}
</script>

<style scoped>
.top{
  font-size: 16px;
  text-align: center;
  margin: 10px auto;
  color: darkgreen;
  border-bottom: 1px dashed darkgreen;
}
.newsBox{
  width: 100%;
  margin: 20px auto;
  display: flex;
}

.newsBox .img{
  flex: 3;
}
.img img {
  width: 100%;
}

.newsBox .right{
  flex:7;
  margin-left: 10px;
}
.title{
  font-size: 14px;
  color: darkolivegreen;
}

.content{
  font-size: 12px;
  color: #999999;
}

.author{
  font-size: 12px;
  color: #cccccc;
}
</style>
