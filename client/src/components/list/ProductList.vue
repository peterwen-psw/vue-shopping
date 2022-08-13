<template>
  <div class="list-top">
    <div class="list" @click="gotodetail">
      <div class="shop" v-for="item in arrs" :key="item._id" :id="item._id">
        <img :src="item.image" :id="item._id" />
        <span :id="item._id">￥{{ item.price }}</span>
        <p :id="item._id">{{ item.title }}</p>
        <div class="num" :id="item._id">
          <span class="left" :id="item._id"
            >累计销量：<i>{{ item.num }}</i></span
          >
          <span class="right" :id="item._id"
            >评价：<i>{{ item.comment }}</i></span
          >
        </div>
      </div>
    </div>
    <div class="pages" @click="pages">
      <el-pagination background layout=" pager" :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  data: function () {
    return {
      arrs: [],
      type: this.$route.query.type,
      total: 0,
      setting: "",
    };
  },
  created: async function () {
    //请求总数量
    let val = await this.$store.dispatch("getList", this.type);
    this.total = val.length;
    //设置默认第一页
    this.$axios({
      method: "post",
      url: "/api/setpages",
      data: {
        type: this.type,
        page: 1,
      },
    }).then((res) => {
      this.arrs = res.data;
    });
  },
  methods: {
    ...mapMutations(["setpage"]),
    ...mapActions(["sort"]),
    gotodetail(e) {
      let id = e.target.getAttribute("id");
      this.$router.push({ path: "/detail", query: { id: id } });
    },
    async pages(e) {
      // console.log(Number(e.target.innerHTML));
      let pages = Number(e.target.innerHTML);
      this.setpage(pages);
      if (pages != 0) {
        if (this.setting == "") {
          let { data } = await this.$axios({
            method: "post",
            url: "/api/setpages",
            data: {
              type: this.type,
              page: pages,
            },
          });
          this.arrs = data;
        } else {
          let res = await this.sort("price");
          this.arrs=res.data
        }
      }
    },
  },
};
</script>

<style scoped>
.list-top {
  width: 100%;
  overflow: hidden;
}

.list-top .list {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}

.list-top .list .shop {
  float: left;
  width: 240px;
  height: 420px;
  min-height: 420px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #fff;
  position: relative;
  margin-bottom: 10px;
}

.list-top .list .shop:hover {
  z-index: 1;
  box-sizing: border-box;
  border: 1px solid #ff6a5e;
  box-shadow: 1px 1px 8px #ff6a5e;
  cursor: pointer;
}

.list-top .list .shop img {
  display: block;
  width: 218px;
  height: 218px;
}

.list-top .list .shop span {
  display: inline-block;
  margin: 20px 0px 5px;
  color: #f23030;
  font-size: 18px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
}

.list-top .list .shop p {
  line-height: 21px;
  height: 43px;
  min-height: 43px;
  margin-top: 0;
  font-size: 14px;
  word-wrap: break-word;
  word-break: break-all;
  font-weight: normal;
  color: #000;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.list-top .list .shop .num {
  margin-bottom: 5px;
  width: 100%;
}

.list-top .list .shop .num .left {
  float: left;
  font-size: 12px;
  color: #333;
}

.list-top .list .shop .num .right {
  float: right;
  font-size: 12px;
  color: #333;
}

.list-top .list .shop .num i {
  color: #f23030;
}
.pages {
  text-align: center;
  width: 1200px;
  height: 50px;
  margin: 0 auto;
}
</style>