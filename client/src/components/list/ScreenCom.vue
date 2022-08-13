<template>
  <div class="box-top">
    <div class="box">
      <!-- 面包屑 -->
      <div class="tite">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="crumbs">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ title }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 列表 条件-->
      <div class="table">
        <div class="tr">
          <div class="td-left">保质期</div>
          <div class="td-midlle">
            <ul>
              <li>6个月</li>
            </ul>
          </div>
        </div>
        <div class="tr">
          <div class="td-left">规格</div>
          <div class="td-midlle">
            <ul>
              <li>180g</li>
            </ul>
          </div>
        </div>
        <div class="tr">
          <div class="td-left">净含量</div>
          <div class="td-midlle">
            <ul>
              <li>500ml</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 排序 -->
      <div class="sort">
        <div class="tostring">
          <span @click="all">综合</span>
          <span @click="sortnum">销量</span>
          <span @click="sortcomment">评论</span>
          <span @click="sortprice">价格</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: function () {
    return {
      data: [],
      type: this.$route.query.type,
      title: "",
    };
  },
  methods: {
    ...mapActions(["sort", "getonepage"]),
    async all() {
      let res = await this.getonepage(this.type);
      this.$parent.$children[2].arrs = res.data;
    },
    async sortnum() {
      let res = await this.sort("num");
      this.$parent.$children[2].arrs = res.data;
      this.$parent.$children[2].setting = "num";
    },
    async sortcomment() {
      let res = await this.sort("comment");
      this.$parent.$children[2].arrs = res.data;
      this.$parent.$children[2].setting = "comment";
    },
    async sortprice() {
      let res = await this.sort("price");
      this.$parent.$children[2].arrs = res.data;
      this.$parent.$children[2].setting = "price";
    },
  },
  mounted: function () {
    this.type = this.$route.query.type;
  },
  watch: {
    type: function (newvalue) {
      if (newvalue == "1") {
        this.title = "米面粮油";
      }
      if (newvalue == "2") {
        this.title = "时令果蔬";
      }
      if (newvalue == "3") {
        this.title = "茗茶饮品";
      }
      if (newvalue == "4") {
        this.title = "肉禽蛋奶";
      }
      if (newvalue == "5") {
        this.title = "休闲零食";
      }
    },
  },
};
</script>

<style scoped>
.box-top {
  width: 100%;
}

.box-top .box {
  width: 1200px;
  margin: 0 auto;
}

.box-top .box .tite {
  width: 1200px;
  height: 38px;
  /* background-color: blue; */
}
.box-top .box .tite .crumbs {
  height: 38px;
  line-height: 38px;
}

.box-top .box .table {
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 12px;
  border-top: 1px solid #ddd;
}

.box-top .box .table .tr {
  width: 100%;
  position: relative;
  border-bottom: 1px solid #ddd;
  overflow: hidden;
  border-right: 1px solid #ddd;
  border-left: 1px solid #ddd;
}

.box-top .box .table .tr .td-left {
  position: absolute;
  top: 0;
  left: 0;
  width: 133px;
  height: 100%;
  padding-left: 10px;
  padding-right: 15px;
  line-height: 34px;
  line-height: 45px;
  color: #999;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  background-color: #f8f8f8;
  text-align: right;
}

.box-top .box .table .tr .td-midlle {
  width: 865px;
  margin-left: 156px;
  min-height: 35px;
  padding: 5px 0px 5px 20px;
}

.box-top .box .table .tr .td-midlle ul {
  float: left;
}

.box-top .box .table .tr .td-midlle ul li {
  font-size: 14px;
  width: 99px;
  float: left;
  padding: 10px 0 10px 5px;
  color: #333;
  font-size: 12px;
}

.box-top .box .sort {
  height: 39px;
  position: relative;
  overflow: visible;
  font-size: 12px;
  line-height: 40px;
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  margin-bottom: 40px;
}

.box-top .box .sort .tostring {
  float: left;
}

.box-top .box .sort .tostring span {
  display: inline-block;
  height: 38px;
  line-height: 38px;
  padding: 0 14px;
  border-right: 1px solid #ddd;
  background-color: #f8f8f8;
  color: #000;
  box-sizing: border-box;
}
.box-top .box .sort .tostring span:hover {
  background-color: #d00f00;
}
</style>