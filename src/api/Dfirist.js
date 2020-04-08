import axios from 'axios'

export const getType = () => {
  return axios.get('../../static/js/Dtype.json').then((res) => res.data)
}

export const getList = () => {
  return axios.get('../../static/js/Dlist.json').then((res) => res.data)
}

export const getDetail = () => {
  return axios.get('../../static/js/Ddetail.json').then((res) => res.data)
}

// export const getTheater = () => {
//   const obj = {
//     start: 0,
//     count: 5,
//     city: ''
//   }
//   return axios.get('/douban/movie/in_theaters', { params: obj }).then((res) => res.data)
// }

// 方法二
// export defaults {
// getType,
// getList,
// getDetail
// }
// 用法： mian.js中 import api from './src/api/Dfirst'
// api.getType().then((res)=>{ })

// 用法三
// Vue.prototype.api = api
// this.api.getDetail().then((res)=>{
//   this.DdatailData = res;//数组
//   var id= this.$route.params.id;//数组中某条数据的id
//   //console.log(id)
//   this.obj = this.DdatailData.find((item)=>item.id==id);//找到当前对象
// })
