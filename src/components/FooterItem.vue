<template>
  <div>
    <!-- 底部 nav 区域组件 -->
    <div class="itemBox" @click="change()">
      <span v-if="!bol">
        <slot name="darkIcon"></slot>
      </span>
      <span v-if="bol">
        <slot name="lightIcon"></slot>
      </span>
      <!-- 标题的文字颜色随着一起变换 -->
      <p :class="{active:bol}">{{title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: ['title', 'mark', 'active'],
  methods: {
    change () {
      this.$emit('changeactive', this.mark)
      this.$router.push('/' + this.mark)
    }
  },
  computed: {
    bol () {
      // eslint-disable-next-line eqeqeq
      if (this.mark == this.active) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>
.footBox {
  width: 100%;
  height: 64px;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid #eeeeee;
}

.itemBox {
  flex: 1;
  text-align: center;
}

.itemBox img {
  width: 35px;
}

.active {
  color: rgb(66, 192, 85);
}

.itemBox p{
  font-size: 14px
}
</style>
