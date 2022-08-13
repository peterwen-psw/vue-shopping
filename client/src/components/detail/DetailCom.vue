<template>
  <div class="detail-top">
    <div class="detail">
      <!-- 面包屑 -->
      <div class="mode-top">
        <div class="mode">
          <div class="mode-left">
            <el-breadcrumb separator-class="el-icon-arrow-right" class="crumbs">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>{{ obj.title }}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </div>
      </div>
      <tab-card></tab-card>
      <mer-news></mer-news>
    </div>
  </div>
</template>

<script>
import MerNews from "./MerNews.vue";
import TabCard from "./TabCard.vue";
export default {
  components: { TabCard, MerNews },
  data: function () {
    return {
      id: this.$route.query.id,
      obj: {},
    };
  },
  created: async function () {
    let res = await this.$store.dispatch("getid", this.id);
    this.obj = res[0];
  },
};
</script>

<style scoped>
.detail-top {
  width: 100%;
  height: 523px;
}

.detail-top .detail {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
}
.mode-top {
  width: 100%;
  height: 60px;
}

.mode-top .mode {
  width: 1200px;
  height: 60px;
  margin: 0 auto;
}

.mode-top .mode .mode-left {
  float: left;
  width: 600px;
  height: 60px;
  line-height: 60px;
  /* background-color: aqua; */
}
.crumbs {
  height: 60px;
  line-height: 60px;
}
</style>