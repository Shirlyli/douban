import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import live from '../views/AudioView/live.vue'
import Dlist from '../views/Dhome/Dlist.vue'
import Ddetail from '../views/Dhome/Ddetail.vue'
import BookDetail from '../components/BoookDetail.vue'
import MovieMore from '../components/MovieMore'
import ActSoonMovie from '../components/AudioSoonMovie'
import ToMovieDetail from '../components/ToMovieDetail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    name: 'home',
    meta: { title: '首页' }
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: { title: '首页' },
    beforeEnter: (to, from, next) => {
      // console.log('路由独享守卫beforeEnter', to, from)
      next()
    }
  },
  {
    path: '/Audio',
    name: 'Audio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Audio.vue'),
    children: [
      { path: '/Audio', redirect: '/Audio/movie', meta: { title: '电影' } },
      { path: 'live', name: 'live', component: live, meta: { title: '同城' } },
      { path: 'movie', name: 'movie', component: () => import('../views/AudioView/movie.vue'), meta: { title: '电影' } },
      { path: 'read', name: 'read', component: () => import('../views/AudioView/read.vue'), meta: { title: '读书' } },
      { path: 'tv', name: 'tv', component: () => import('../views/AudioView/tv.vue'), meta: { title: '电视' } },
      { path: 'music', name: 'music', component: () => import('../views/AudioView/music.vue'), meta: { title: '音乐' } }
    ]
  },
  {
    path: '/Mine',
    name: 'Mine',
    component: () => import(/* webpackChunkName: "about" */ '../views/Mine.vue'),
    beforeEnter: (to, from, next) => {
      // console.log(to, from);
      next()
    },
    meta: { title: '我的' } // 路由元信息
  },
  {
    path: '/Book',
    name: 'Book',
    component: () => import(/* webpackChunkName: "about" */ '../views/Book.vue'),
    meta: { title: '小组' }
  },
  {
    path: '/City',
    name: 'City',
    component: () => import(/* webpackChunkName: "about" */ '../views/City.vue'),
    meta: { title: '市集' }
  },
  // 方法1第三步 配置路由
  {
    path: '/dlist/:id', // 冒号后面的变量 相当于 路径上声明的变量
    name: 'dlist',
    component: Dlist
  },
  {
    path: '/ddetail/:id',
    name: 'ddetail',
    component: Ddetail
  },
  {
    path: '/bookdetail/:id',
    name: 'bookdetail',
    component: BookDetail
  },
  {
    path: '/moviemore',
    name: 'moviemore',
    component: MovieMore
  },
  {
    path: '/actsoonmovie',
    name: 'actsoonmovie',
    component: ActSoonMovie
  },
  {
    path: '/tomoviedetail/:id',
    name: 'tomoviedetail',
    component: ToMovieDetail
  }
]
// 方法2第三步 配置路由
//   {
//    path: '/dlist',//冒号后面的变量 相当于 路径上声明的变量
//    name:"dlist",
//    component: Dlist//import
//  },
//   //方法3第三步 配置路由
//   {
//    path: '/dlist',//冒号后面的变量 相当于 路径上声明的变量
//    name:"dlist",
//    component: Dlist//import
//  },
const router = new VueRouter({
  routes
})

export default router
