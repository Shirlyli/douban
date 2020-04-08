<template>
  <div>
    <mt-header title="经典电影">
      <router-link to="/Audio" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="top">
      <span class="left">影视500</span>
      <span class="right">筛选</span>
    </div>
    <MovieMoreItem></MovieMoreItem>
  </div>
</template>

<script>
import MovieMoreItem from "./MovieMoreItem";
export default {
  name: "moviemore",
  data() {
    return {};
  },
  components: {
    MovieMoreItem
  },
  created() {}
};
</script>

<style scoped>
.top span {
  display: inline-block;
  font-size: 14px;
  margin: 10px auto;
  margin-left: 20px;
}
.mint-header{
  background-color: white;
}
.mint-button{
  color: black;
}
.top .right {
  margin-left: 230px;
}
</style>