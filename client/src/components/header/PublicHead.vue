<template>
  <div>
    <!-- 头部注册登陆 -->
    <div class="user-top">
      <div class="user">
        <ul>
          <li>
            <a @click="login" v-show="judge4">HI,请登录</a>
            <a v-show="!judge4" style="color: red">{{ user }}</a>
          </li>
          <li>
            <a @click="login2" v-show="judge4">注册</a>
            <a v-show="judge6" @click="outlogin">退出登陆</a>
            <a v-show="judge5" @click="gotohome">退出登陆</a>
          </li>
          <li><a @click="fn">我的订单</a></li>
          <li><a @click="fn">个人中心</a></li>
          <li><a @click="gohome">首页</a></li>
        </ul>
      </div>
      <div class="nav">
        <img
          src="https://res.fupin832.com/toc/1591348106928_21.757154941682334.png"
          @click="fn"
        />
        <div class="serach">
          <input type="text" />
          <button class="el-icon-search"></button>
        </div>
        <el-badge :value="shopnums" class="item" v-if="judge3">
          <div class="shopcar" v-if="judge3" @click="gotocar">
            <i class="el-icon-shopping-cart-2"></i>购物车
          </div>
        </el-badge>
      </div>
    </div>
    <!-- 二级导航 -->
    <div class="list-top" v-if="judge2">
      <div class="list">
        <div class="list-nav" @mouseenter="fn1" @mouseleave="fn2">
          商品分类
          <div class="two-nav" v-show="judge" @click="tolist">
            <!-- 二级 -->
            <div
              class="item"
              v-for="(item, key) in arr"
              :key="key"
              :type="key + 1"
            >
              <p :type="key + 1">{{ item.tag }}</p>
              <span :type="key + 1">{{ item.tag1 }} | {{ item.tag2 }}</span>
            </div>
          </div>
        </div>
        <ul>
          <li @click="gotohome">首页</li>
          <li @click="fn">832平台</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data: function () {
    return {
      name: "",
      type: 0,
      judge: false,
      judge2: true,
      judge3: true,
      judge4: true,
      judge5: false,
      judge6: false,
      arr: [
        { tag: "米面粮油", tag1: "粮油干货", tag2: "厨房调味" },
        { tag: "时令果蔬", tag1: "新鲜水果", tag2: "根茎类" },
        { tag: "茗茶饮品", tag1: "茶类", tag2: "饮料" },
        { tag: "肉禽蛋奶", tag1: "蛋类", tag2: "肉类冻品" },
        { tag: "休闲零食", tag1: "营养保健", tag2: "饼干糕点" },
      ],
      user: "",
      num: 0,
    };
  },
  methods: {
    ...mapMutations(["setcom", "setnums"]),
    login() {
      this.$router.push({ path: "/login" });
      this.setcom("enter-com");
      this.setnums("0");
    },
    login2() {
      this.$router.push({ path: "/login" });
      this.setcom("enroll-com");
      this.setnums("0");
    },
    outlogin() {
      window.localStorage.removeItem("user");
      window.localStorage.removeItem("token");
      this.judge4 = true;
      this.judge6 = false;
    },
    fn1() {
      this.judge = true;
    },
    fn2() {
      this.judge = false;
    },
    tolist(e) {
      let type = e.target.getAttribute("type");
      if (type) {
        if (this.$route.name != "list") {
          this.$router.push({ path: "/list", query: { type: type } });
        }
      } else {
        this.$message({
          message: "   你个老六",
          type: "success",
        });
      }
    },
    gotohome() {
      if (this.$route.name != "home") {
        this.$router.push("home");
        window.localStorage.removeItem("user");
        window.localStorage.removeItem("token");
        this.judge5 = false;
        this.judge6 = false;
      }
    },
    gohome() {
      if (this.$route.name != "home") {
        this.$router.push("home");
      }
    },
    async gotocar() {
      let val = await this.$store.dispatch("getname");
      if (val != null) {
        if (this.$route.name != "car") {
          this.$router.push("car");
        }
      } else {
        this.$message({
          showClose: true,
          message: "请先登陆哦",
          type: "warning",
        });
      }
    },
    fn() {
      this.$message("点不了，换一个点");
    },
  },
  created: async function () {
    let val = await this.$store.dispatch("getname");
    if (val != null) {
      let name = val.name;
      let res = await this.$store.dispatch("getshopdata", name);
      res.data.forEach((item) => {
        this.num += item.num;
      });
      this.$store.commit("setnums", this.num);
    }
  },
  mounted: async function () {
    this.name = this.$route.name;
    let val = await this.$store.dispatch("getname");
    if (val != null) {
      this.user = val.name;
      if (this.name == "car") {
        this.judge5 = true;
        this.judge4 = false;
      } else {
        this.judge4 = false;
        this.judge6 = true;
        this.judge5 = false;
      }
    }
  },
  watch: {
    name: function (newvalue) {
      if (newvalue == "home") {
        this.judge = true;
      }
      if (newvalue == "car") {
        this.judge2 = false;
        this.judge3 = false;
      }
    },
  },
  computed: {
    ...mapState(["shopnums"]),
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.user-top {
  width: 100%;
}

.user-top .user {
  width: 1200px;
  margin: 0 auto;
  height: 30px;
}

.user-top .user ul {
  float: right;
  box-sizing: border-box;
}

.user-top .user ul li {
  float: left;
  line-height: 30px;
}
.user-top .user ul li a:hover {
  color: red;
  cursor: pointer;
}

.user-top .user ul li a {
  border-right: 1px solid #ddd;
  padding: 0 20px;
  text-decoration: none;
  color: black;
  font-size: 12px;
}

.user-top .nav {
  width: 1200px;
  height: 110px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.user-top .nav img {
  width: 180px;
  height: 60px;
  margin: 19px 120px 0 0;
}

.user-top .nav .serach {
  margin-top: 30px;
}

.user-top .nav .serach input {
  float: left;
  width: 520px;
  height: 34px;
  border: 2px solid #d00f00;
  border-right: 0px;
  padding: 2px 2px 2px 10px;
  outline: none;
}

.user-top .nav .serach button {
  width: 50px;
  height: 42px;
  background: #d00f00 no-repeat 14px 9px;
  border: 0;
  color: aliceblue;
  font-size: 20px;
}
.user-top .nav .item {
  width: 122px;
  height: 40px;
  cursor: pointer;
  margin-top: 30px;
  border: 1px solid #ddd;
  font-size: 14px;
  color: #d00f00;
  text-align: center;
  background-color: #fff;
  line-height: 40px;
  margin-right: 70px;
}
.user-top .nav .shopcar {
  width: 122px;
  height: 40px;
  cursor: pointer;
  font-size: 14px;
  color: #d00f00;
  text-align: center;
  background-color: #fff;
  line-height: 40px;
}
.user-top .nav .shopcar i {
  font-size: 20px;
}

.list-top {
  width: 100%;
  height: 44px;
  border-bottom: 2px solid #d00f00;
}

.list-top .list {
  width: 1200px;
  height: 44px;
  margin: 0 auto;
}

.list-top .list .list-nav {
  width: 175px;
  height: 44px;
  padding-left: 15px;
  float: left;
  background-color: #d00f00;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  line-height: 44px;
  position: relative;
  z-index: 100;
}

.list-top .list .list-nav .two-nav {
  position: absolute;
  bottom: -378px;
  left: 0;
  width: 190px;
  height: 378px;
  background-color: rgba(70, 70, 70, 0.9);
}

.list-top .list .list-nav .two-nav .item {
  width: 100%;
  height: 56px;
  padding: 8px 0;
}
.list-top .list .list-nav .two-nav .item:hover {
  box-shadow: 1px 1px 8px #ff6a5e;
  border: 1px solid #ff6a5e;
}

.list-top .list .list-nav .two-nav .item p {
  padding-left: 15px;
  color: #fff;
  font-size: 14px;
  margin-top: 5px;
}

.list-top .list .list-nav .two-nav .item span {
  font-size: 12px;
  color: #fff;
  padding-left: 15px;
}

.list-top .list ul {
  float: left;
}

.list-top .list ul li {
  float: left;
  margin: 0 20px;
  padding-left: 20px;
  color: #333;
  line-height: 44px;
}
.list-top .list ul li:hover {
  color: red;
  cursor: pointer;
}
</style>