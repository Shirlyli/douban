
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Router from 'vue-router'
import './assets/element'
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Header, Button, InfiniteScroll } from 'mint-ui'

Vue.use(InfiniteScroll);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);


// 配置axios的第三种封装方式
import axios from './api/Axios'
Vue.prototype.$http = axios

Vue.use(MintUi)
Vue.config.productionTip = false

// 全局变量的使用
Vue.prototype.isLeave = true

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

router.beforeEach((to, from, next) => {
  // console.log('全局路由守卫beforeEach', to, from)
  if (to.meta && to.meta.title) { // 如果当前meta不为空 title值也不为空
    document.title = to.meta.title // 设置标题头为title值
  } else {
    document.title = '豆瓣'
  }
  next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
