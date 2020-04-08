<template>
  <div>
    <div class="top">
      <div class="left" v-for="item in imgData" :key="item.id">
        <img :src="item.src" alt />
      </div>
      <div class="middle">
        <p>肖申克的救赎</p>
        <p>ID:57857645</p>
        <p>关注：1 &nbsp; &nbsp;被关注：3</p>
      </div>
      <div class="right">
        <p>个人主页</p>
      </div>
    </div>
    <div class="bottom">
      <div v-for="item in bottomData" :key="item.id" >
        <img :src="item.url" alt />
        <p>{{item.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'mineitem',
  data() {
    return {
      imgData: [],
      bottomData: [
        {
          id: '1',
          title: '喜欢',
          url: require('../../static/img/ic_my_likes.png')
        },
        {
          id: '2',
          title: '日记',
          url: require('../../static/img/ic_my_note.png')
        },
        {
          id: '3',
          title: '相册',
          url: require('../../static/img/ic_settings.png')
        },
        {
          id: '4',
          title: '我的广播',
          url: require('../../static/img/ic_my_status.png')
        },
        {
          id: '5',
          title: '电影电视',
          url: require('../../static/img/ic_my_movies_tvs.png')
        },
        {
          id: '6',
          title: '读书',
          url: require('../../static/img/ic_label_related_book.png')
        },
        {
          id: '7',
          title: '音乐',
          url: require('../../static/img/ic_my_music.png')
        },
        {
          id: '8',
          title: '同城活动',
          url: require('../../static/img/ic_my_events.png')
        },
        {
          id: '9',
          title: '豆列',
          url: require('../../static/img/ic_my_doulist.png')
        },
        {
          id: '10',
          title: '订单',
          url: require('../../static/img/ic_my_orders.png')
        },
        {
          id: '11',
          title: '钱包',
          url: require('../../static/img/ic_my_wallet.png')
        }
      ]
    }
  },
  created() {
    axios.get('../../static/js/img.json').then(res => {
      console.log(res.data)
      this.imgData = res.data
      console.log(this.imgData)
    })
  }
}
</script>

<style scoped>
.top {
  width: 100%;
  height: 150px;
  background-color: orange;
  display: flex;
  color: white;
}

.left {
  flex: 3;
  padding: 20px 10px;
}
.left img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.middle {
  flex: 5;
  display: flex;
  /* align-content: center; */
  /* align-items: center; */
  flex-direction: column;
  padding-left: 4px;
  justify-content: space-around;
}

.middle p {
  flex: 1;
  line-height: 50px;
}

.middle p:nth-child(1) {
  font-size: 18px;
}
.middle p:nth-child(2) {
  font-size: 14px;
  border-bottom: 1px dashed white;
}
.middle p:nth-child(3) {
  font-size: 14px;
}

.right {
  flex: 2;
  line-height: 150px;
  font-size: 14px;
}

.bottom {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}

.bottom div {
  width: 25%;
  height: 100px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bottom img{
  width: 40px;
}

.bottom p{
  font-size: 14px;
  color: #999999;
}
</style>
