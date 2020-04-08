<template>
  <div>
    <div class="soonItem">
      <div v-for="item in SoonData" :key="item.count">
        <img :src="item.images.small" alt />
        <p>{{item.title}}</p>
        <p>{{item.rating.average}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "audiomoviesoon",
  data() {
    return {
      SoonData: []
    };
  },
  methods: {
    async getSoonData(params) {
      const res = await this.$http.get("/douban/movie/coming_soon",{start:0,count:6});
      console.log(res.subjects);
      console.log(res)
      this.SoonData = res.subjects;
      this.SoonData = this.SoonData.map(item => {
        item.images.small =
          "https://images.weserv.nl/?url=" + item.images.small;
        return item;
      });
    }
  },
  mounted() {
    this.getSoonData();
  }
};
</script>

<style scoped>
.soonItem{
  display: flex;
  flex-wrap: wrap;
}

.soonItem div{
  width: 33.3%;
  padding-left: 10px;
  box-sizing: border-box;
}
img {
  width: 100%;
  height: 150px;
}

p {
  font-size: 14px;
}
</style>