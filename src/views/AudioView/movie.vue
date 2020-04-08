<template>
  <div class="box">
    <AudioMovieItem></AudioMovieItem>
  </div>
</template>

<script>

import AudioMovieItem from "../../components/AudioMovieItem";

export default {
  name: "movie",
  created() {
  },
  data() {
    return {};
  },
  components: {
    AudioMovieItem
  },
};
</script>

<style scoped>
.box {
  margin-top: 20px;
}

.img {
  padding: 10px;
}

.img img,
p {
  margin-bottom: 10px;
}
</style>
