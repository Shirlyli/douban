<template>
  <div id="app">
    <router-view />
    <TabberBar v-if= "keepAlive"></TabberBar>
  </div>
</template>
<script>
// import dlist from './views/Dhome/d-list.vue'
import TabberBar from './components/TabberBar.vue'
export default {
  name: 'App',
  data() {
    return {
      keepAlive:true
    }
  },
  components: {
    TabberBar
    // dlist
  },
  watch: {
    $route(to,from){
      console.log(to,from)
      if(this.$route.path === '/tomoviedetail'){
        this.keepAlive = false
      }else{
        this.bol = true
      }
    }
  },
  beforeCreate() {
    this.$router.push('/')
  },
  methods: {
  },
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
</style>
