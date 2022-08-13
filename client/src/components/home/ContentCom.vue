<template>
  <div>
    <div class="List-top">
      <div class="List" @click="fn1">
        <img
          src="https://img1.fupin832.com/dev/back-cms-web/1651118309910_1.8228436694882721_8014ed0a-0c3a-49b2-be92-6d227e585670.jpg"
        />
      </div>
      <div class="img" @click="fn1">
        <img
          src="https://img1.fupin832.com/dev/back-cms-web/1645774200663_59.51568254241649_305f4f75-9b20-4e8e-961b-4e0d3b01f30e.jpg"
        />
      </div>
      <div class="shoplist" @click="gotodetaile">
        <ul>
          <li v-for="(item, key) in newarr" :key="key" :id="item._id">
            <img :src="item.image" :id="item._id" />
            <p :id="item._id">￥{{ item.price }}</p>
            <h5 :id="item._id">{{ item.title }}</h5>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      newarr: [],
    };
  },
  created: async function () {
    let { data } = await this.$axios.get("/api/getgoods");
    this.newarr = data.filter((item) => item.type == 2);
  },
  methods: {
    gotodetaile(e) {
      let id = e.target.getAttribute("id");
      this.$router.push({ path: "/detail", query: { id: id } });
    },
    fn1() {
      this.$message.error("靓仔！ 这是假的，点不了的");
    },
  },
};
</script>

<style scoped>
.List-top {
  width: 100%;
  padding-top: 10px;
}

.List-top .List {
  width: 1200px;
  height: 180px;
  margin: 0 auto 20px auto;
}

.List-top .List img {
  width: 100%;
  height: 100%;
}

.List-top .img {
  width: 1200px;
  height: 152px;
  margin: 0 auto 20px auto;
}

.List-top .img img {
  width: 100%;
  height: 100%;
}

.List-top .shoplist {
  width: 1200px;
  margin: 0 auto;
}

.List-top .shoplist ul {
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  /* flex-direction: column; */
}

.List-top .shoplist ul li {
  width: 240px;
  height: 340px;
  padding: 20px;
  border: 1px solid #eee;
  margin-bottom: 10px;
  box-sizing: border-box;
}
.List-top .shoplist ul li:hover {
  z-index: 1;
  box-sizing: border-box;
  border: 1px solid #ff6a5e;
  box-shadow: 1px 1px 8px #ff6a5e;
  cursor: pointer;
}
.List-top .shoplist ul li img {
  width: 199px;
  height: 199px;
}

.List-top .shoplist ul li p {
  margin-top: 15px;
  margin-bottom: 20px;
  font-size: 20px;
  color: #f23030;
}

.List-top .shoplist ul li h5 {
  font-weight: normal;
  margin: 0px;
  font-size: 16px;
  color: #333;
  line-height: 18px;
  width: 215px;
  height: 37px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
