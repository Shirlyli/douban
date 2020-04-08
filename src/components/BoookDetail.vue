<template>
  <div class="box">
    <p class="title">{{nowData.title}}</p>
    <p class="con">{{nowData.content}}</p>
    <img :src="nowData.img" alt />
  </div>
</template>

<script>
export default {
  name: 'bookdetail',
  created () {
    var itemId = this.$route.params.id
    console.log(itemId)
    // eslint-disable-next-line eqeqeq
    this.nowData = this.DetailData.find(item => item.id == itemId)
  },
  data () {
    return {
      nowData: null,
      DetailData: [
        {
          id: 1,
          type: 1,
          title: '诗经欣赏',
          content:
            '蟋蟀、山有枢、扬之水、椒聊、绸缪、杕杜、羔裘、鸨羽、无衣、有杕之杜、葛生、采苓',
          img: require('../../static/img/u=2050498860,3545958159&fm=26&gp=0.jpg')
        },
        {
          id: 2,
          type: 1,
          title: '儒家散文',
          content:
            '《大学》是一篇论述儒家修身齐家治国平天下思想的散文，原是《小戴礼记》第四十二篇，相传为曾子所作，实为秦汉时儒家作品，是一部中国古代讨论教育理论的重要著作。经北宋程颢、程颐竭力尊崇，南宋朱熹又作《大学章句》，最终和《中庸》、《论语》、《孟子》并称“四书”。宋、元以后，《大学》成为学校官定的教科书和科举考试的必读书，对中国古代教育产生了极大的影响。',
          img: require('../../static/img/u=2564082301,4224302957&fm=26&gp=0.jpg')
        },
        {
          id: 3,
          type: 1,
          title: '山海经',
          content:
            '共工之臣曰相柳氏，九首，以食于九山。相柳之所抵，厥为泽溪。禹杀相柳，其血腥，不可以树五谷种。禹厥之，三仞三沮，乃以为众帝之台。在昆仑之北，柔利之东。相柳者，九首人面，蛇身而青。不敢北射，畏共工之台。',
          img: require('../../static/img/u=1246548748,3043171009&fm=26&gp=0.jpg')
        },
        {
          id: 4,
          type: 1,
          title: '巴黎圣母院',
          content:
            '以离奇和对比手法写了一个发生在15世纪法国的故事：巴黎圣母院副主教克罗德道貌岸然、蛇蝎心肠，先爱后恨，迫害吉ト赛女郎埃斯梅拉达。面目丑陋、心地善良的敲钟人卡西莫多为救女郎舍身。小说揭露了宗教的虚伪，宣告禁欲主义的破产，歌颂了下层劳动人民的善良、友爱、舍己为人，反映了雨果的人道主义思想。',
          img: require('../../static/img/u=2999389106,1807536426&fm=26&gp=0.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped>
.box{
  margin: 10px
}
.title {
  font-size: 20px;
  color: darkgreen;
  padding-bottom: 10px
}

.con{
  font-size: 14px;
  color: #999999;
  margin-bottom: 10px
}

img{
  width: 100%;
}
</style>
