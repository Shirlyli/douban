<template>
  <div class="tabberWrap">
    <!-- 底部nav区域 -->
    <Item title="首页" mark="Home" :active="sel" @changeactive="doChange">
      <img slot="darkIcon" src="../../static/img/ic_tab_home_normal.png" alt />
      <img slot="lightIcon" src="../../static/img/ic_tab_home_active.png" alt />
    </Item>
    <Item title="书影音" mark="Audio" :active="sel" @changeactive="doChange">
      <img slot="darkIcon" src="../../static/img/ic_tab_subject_normal.png" alt />
      <img slot="lightIcon" src="../../static/img/ic_tab_subject_active.png" alt />
    </Item>
    <Item title="小组" mark="Book" :active="sel" @changeactive="doChange">
      <img slot="darkIcon" src="../../static/img/ic_tab_group_normal.png" alt />
      <img slot="lightIcon" src="../../static/img/ic_tab_group_active.png" alt />
    </Item>
    <Item title="市集" mark="City" :active="sel" @changeactive="doChange">
      <img slot="darkIcon" src="../../static/img/ic_tab_status_normal.png" alt />
      <img slot="lightIcon" src="../../static/img/ic_tab_status_active.png" alt />
    </Item>
    <Item title="我的" mark="Mine" :active="sel" @changeactive="doChange">
      <img slot="darkIcon" src="../../static/img/ic_tab_profile_female_normal.png" alt />
      <img slot="lightIcon" src="../../static/img/ic_tab_profile_female_active.png" alt />
    </Item>
  </div>
</template>

<script>
import Item from "./FooterItem.vue";
export default {
  name: "TabberBar",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Item
  },
  data() {
    return {
      sel: "Home"
    };
  },
  methods: {
    // data是传递过来的mark值，flot是自定义的变量active
    doChange(data) {
      this.sel = data;
    }
  }
};
</script>

<style  scoped>
.tabberWrap {
  width: 100%;
  height: 64px;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: white;
}
</style>
