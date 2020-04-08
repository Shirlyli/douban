<template>
  <div class="ItemBox">
    <div class="left">
      <p class="title">{{title}}</p>
      <p class="con">{{content}}</p>
      <p class="auth">{{author}}</p>
    </div>
    <div class="right">
      <slot name="img"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieItem',
  props: ['title', 'content', 'author', 'url']
}
</script>

<style scoped>
  .ItemBox{
    width: 100%;
    height: 150px;
    padding: 10px;
    display: flex;
  }

  .left{
    flex:6;
    display: flex;
    flex-direction: column;
    align-items: flex-start
  }

  .left .title{
    flex:4;
    font-size: 18px;
    font-weight: 900;
  }

  .left .con{
    padding-top: 10px;
    flex: 3;
    font-size: 14px;
    color: #999999;
  }

  .left .auth{
    flex:3;
    font-size: 14px;
    color: #cccccc
  }

  .right{
    flex: 4;
    padding-left: 10px;
  }
</style>
