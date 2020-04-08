<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <!-- 方便其他页面也可以调用这个swiper组件 -->
        <slot name="bannerImg"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import 'swiper/js/swiper.min.js'
export default {
  name: 'Swiper',
  mounted () {
    var This = this
    // eslint-disable-next-line no-unused-vars
    var mySwiper = new Swiper('.swiper-container', {
      loop: This.loop, // 无缝轮播
      autoplay: This.autoplay, // 可选选项，自动滑动
      speed: 1500,
      pagination: {
        el: '.swiper-pagination' // 如果需要分页器
      }
    })
  },
  // props:["delay","loop","autoplay"],//调用时传递过来的
  props: {
    delay: {
      default: 1000
    },
    loop: {
      default: false
    },
    autoplay: {
      default: false
    }
  }
}
</script>
