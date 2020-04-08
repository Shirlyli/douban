<template>
  <div>
    <p>热点</p>
    <MovieItem title="《加勒比海盗》14年老粉给你带来所有彩蛋和深埋梗" content="此影评送给那些不离不弃的老粉和船长杰克.斯派罗" author="作者：女神的秋裤" >
      <img src="../../static/img/index.jpg" alt="" slot="img">
    </MovieItem>
      <MovieItem title="One Day所有的渴望、煎熬、热情都来自你" content="我还是好爱你，可是我不再想喜欢你了" author="作者：Emma">
        <img src="../../static/img/u=1516651488,4125080746&fm=26&gp=0.jpg" alt="" slot="img">
      </MovieItem>
  </div>
</template>

<script>
import MovieItem from './HomeMovieItem.vue'
export default {
  name: 'MovieList',
  components: {
    MovieItem
  }
}
</script>

<style scoped>
  p{
    color: orange;
  }
  img{
    width: 100%
  }
</style>
