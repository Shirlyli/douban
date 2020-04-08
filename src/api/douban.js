import axios from 'axios'

const getCount = () => {
  return axios.get('/php/count.php', {
    params: { title: '' }
  }).then((res) => res.data)
}

//参数：start,count
const top250 = (params) => {
  return axios.get("/douban/movie/top250", {
    params: params
  }).then((res) => res.data)
}
//正在热映 参数：start,count,city：城市
const inTheaters = (params) => {
  return axios.get("/douban/movie/in_theaters", {
    params: params
  }).then((res) => res.data)
}

//即将热映参数：start,count
const comingSoon = (params) => {
  return axios.get("/douban/movie/coming_soon", {
    params: params
  }).then((res) => res.data)
}
//北美票房 参数：start,count
const usBox = (params) => {
  return axios.get("/douban/movie/us_box", {
    params: params
  }).then((res) => res.data)
}
//新片榜 参数：start,count
const newMovies = (params) => {
  return axios.get("/douban/movie/new_movies", {
    params: params
  }).then((res) => res.data)
}
//本周口碑榜 参数：start,count
const weekly = (params) => {
  return axios.get("/douban/movie/weekly", {
    params: params
  }).then((res) => res.data)
}

//参数：start,count,q:关键字 tag:搜索电影的标签
//搜索 https://douban.uieee.com/v2/movie/search?q=欧美&count=15
const searchMovie = (params) => {
  return axios.get("/douban/movie/search", {
    params: params
  }).then((res) => res.data)
}
//参数：id 详情
//https://douban.uieee.com/v2/movie/subject/
//详情https://douban.uieee.com/v2/movie/subject/:id
const movieDetail = (params) => {
  console.log(params)
  return axios.get("/douban/movie/subject/" + params.id).then((res) => res.data)
}

//音乐搜索 https://douban.uieee.com/v2/music/search?q=欧美&count=15?
//音乐详情 https://douban.uieee.com/v2/music/:id
const searchMusic = (params) => {
  return axios.get("/douban/music/search", {
    params: params
  }).then((res) => res.data)
}
const musicDetail = (params) => {
  return axios.get("/douban/music", {
    params: params
  }).then((res) => res.data)
}

//图书
//https://douban.uieee.com/v2/book/search?q=虚构类&count=8 
//https://douban.uieee.com/v2/book/search?q=非虚构类&count=8 
//https://douban.uieee.com/v2/book/search?q=旅行&count=8
const searchBook = (params) => {
  return axios.get("/book/search", {
    params: params
  }).then((res) => res.data)
}

// 影人剧照
const photos = (params) => {
  return axios.get("/movie/celebrity/:id/photos", {
    params: params
  }).then((res) => res.data)
}

// 获取电影条目短评论
const LittleTxt = (params) => {
  return axios.get("/movie/subject/:id/comments", {
    params: params
  }).then((res) => res.data)
}
export default {
  top250,
  inTheaters,
  comingSoon,
  usBox,
  newMovies,
  weekly,
  searchMovie,
  movieDetail,
  searchMusic,
  musicDetail,
  searchBook,
  getCount,
  photos,
  LittleTxt
}