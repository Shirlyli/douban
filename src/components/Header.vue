<template>
  <div :class="{'searchBox':true,'green':keyid}">
    <p>{{title}}</p>
    <slot name="search"></slot>
    <slot name="icon1"></slot>
    <slot name="icon2"></slot>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['title', 'keyid']
}
</script>

<style  scoped>
* {
  margin: 0;
  padding: 0;
}
.searchBox {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid gray;
  text-align: center;
  line-height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  background:  rgb(66, 192, 85);
  color:white;
  font-weight: 900;
  z-index: 999;
}

.searchBox .icon2 {
  width: 26px;
  position: absolute;
  right: 16px;
  top: 14px;
}

.searchBox .searchItem {
  width: 82%;
  height: 30px;
  background: white;
  border-radius: 20px;
  position: absolute;
  top: 10px;
  left: 10px;
}

.searchBox .searchItem input {
  text-indent: 10px;
  position: absolute;
  width: 80%;
  height: 30px;
  top: 0px;
  left: 30px;
  border: none;
  background-color: white;
  font-size: 14px
}

.searchBox .searchItem .searchImg1 {
  position: absolute;
  left: 8px;
  width: 22px;
  top: 6px;
  color: white;
}

.searchBox .searchItem .searchImg2 {
  position: absolute;
  right: 10px;
  width: 20px;
  top: 6px;
}

.green {
  background-color: rgb(66, 192, 85);
}
</style>
