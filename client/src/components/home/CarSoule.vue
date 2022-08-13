<template>
  <div>
    <div class="banner-top">
      <div class="banner">
        <div class="block" @click="fn1">
          <el-carousel height="376px">
            <el-carousel-item v-for="item in imgarr" :key="item">
              <h3 class="small"><img :src="item" /></h3>
            </el-carousel-item>
          </el-carousel>
        </div>
        <!-- <div class="login">
          <div class="welcome">
            <img src="https://gr.gxyj.com/images/header.png" />
            <div class="title">
              HI,欢迎来到供销e家
              <br />
              马上开始逛逛吧!
            </div>
          </div>
          <div class="getlogin">
            <button class="login-user">登陆</button>
            <button class="login-use">注册</button>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      imgarr: [
        "https://img1.fupin832.com/dev//1654477599622_18.547819734127803_74a08bd4-f2ea-45b4-b9b3-560bf85441a2.jpg",
        "https://img1.fupin832.com/dev//1646993306706_96.17009942981313_3b0281fc-3a7a-47d5-af2d-01219e4ff02f.jpg",
        "https://img1.fupin832.com/dev//1648889997865_8.146675241206147_1a95fe93-893f-4efd-bb58-7614a1cf529f.jpg",
      ],
    };
  },
  methods: {
    fn1() {
      this.$message({
        message: "轮播图看看就好了阿，  点什么点",
        type: "warning",
      });
    },
  },
};
</script>

<style scoped>
.banner-top {
  width: 100%;
  height: 376px;
  margin-bottom: 23px;
}

.banner-top .banner {
  width: 1200px;
  height: 376px;
  margin: 0 auto;
  /* position: relative; */
}

.banner-top .banner .block {
  width: 1200px;
  height: 376px;
  margin: 0 auto;
  /* position: absolute;
  top: 0;
  left: 190px; */
  background-color: #d00f00;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 376px;
  margin: 0;
}
.el-carousel__item h3 img {
  width: 1200px;
  height: 376px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.banner-top .login {
  position: absolute;
  top: 0;
  right: 0;
  width: 186px;
  height: 90px;
  padding: 14px 12px;
  margin-bottom: 5px;
  background-color: #f8f8f8;
}

.banner-top .login .welcome {
  font-size: 0;
  height: 59px;
}

.banner-top .login .welcome img {
  float: left;
  height: 51px;
  width: 51px;
  margin-right: 8px;
}

.banner-top .login .welcome .title {
  float: left;
  font-size: 12px;
  width: 125px;
  margin-top: 5px;
}

.banner-top .login .getlogin .login-user {
  display: inline-block;
  width: 80px;
  height: 23px;
  background-color: #ff6900;
  text-align: center;
  line-height: 23px;
  border: 1px solid #ff6900;
  color: #fff;
  font-size: 12px;
  border-radius: 4px;
  cursor: pointer;
}

.banner-top .login .getlogin .login-use {
  width: 80px;
  margin-left: 21px;
  font-size: 12px;
  border: 1px solid #eee;
  background: #fff;
  color: #333;
  height: 25px;
  line-height: 25px;
  cursor: pointer;
}
</style>