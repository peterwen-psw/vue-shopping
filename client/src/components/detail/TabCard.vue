<template>
  <div class="detail-left">
    <div class="showimg">
      <img :src="obj.image" />
    </div>
    <div class="list-card">
      <span><img :src="obj.image" /></span>
      <span><img :src="obj.image" /></span>
      <span><img :src="obj.image" /></span>
      <span><img :src="obj.image" /></span>
    </div>
  </div>
</template>

<script>
export default {
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
.detail-top .detail .detail-left {
  float: left;
  width: 400px;
  height: 100%;
}

.detail-top .detail .detail-left .showimg {
  width: 100%;
  height: 400px;
  border: 1px solid #eee;
}

.detail-top .detail .detail-left .showimg img {
  width: 100%;
  height: 100%;
}

.detail-top .detail .detail-left .list-card {
  width: 100%;
  height: 75px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.detail-top .detail .detail-left .list-card span {
  width: 24%;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid #ddd;
}
.detail-top .detail .detail-left .list-card span img {
  width: 100%;
  height: 100%;
}
</style>