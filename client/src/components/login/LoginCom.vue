<template>
  <div>
    <div class="logo-top">
      <div class="logo">
        <img
          src="https://res.fupin832.com/toc/1591348106928_21.757154941682334.png"
        />
        <span>欢迎登陆</span>
      </div>
    </div>
    <div class="login-top">
      <div class="login">
        <div class="login-left">
          <img
            src="https://img1.fupin832.com/dev//1614147337936_87.22767638537145_a03342e8-2e7a-48dd-93f2-72ba897728ee.jpg"
          />
        </div>
        <div class="login-right">
          <div class="login-top">
            <div class="top-left" :style="style1" @click="login">密码登陆</div>
            <div class="top-right" :style="style2" @click="enroll">
              注册用户
            </div>
          </div>
          <div :is="coms"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import EnrollCom from "./EnrollCom.vue";
import EnterCom from "./EnterCom.vue";
export default {
  components: { EnterCom, EnrollCom },
  data: function () {
    return {
      // namecom: this.com,
      style1: { color: "red" },
      style2: { color: "#666" },
    };
  },
  methods: {
    ...mapMutations(["setcom"]),
    login() {
      if (this.coms == "enroll-com") {
        this.setcom("enter-com");
      }
    },
    enroll() {
      if (this.coms == "enter-com") {
        this.setcom("enroll-com");
      }
    },
  },
  created: function () {
    if (this.coms == "enroll-com") {
      this.style2.color = "red";
      this.style1.color = "#666";
    }
    if (this.coms == "enter-com") {
      this.style1.color = "red";
      this.style2.color = "#666";
    }
    if (this.coms == "") {
      this.$store.commit("setcom", "enter-com");
    }
  },
  computed: {
    ...mapState(["coms"]),
  },
  watch: {
    coms: function (newval) {
      if (newval == "enter-com") {
        this.style1.color = "red";
        this.style2.color = "#666";
      }
      if (newval == "enroll-com") {
        this.style2.color = "red";
        this.style1.color = "#666";
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.logo-top {
  width: 100%;
  height: 100px;
}

.logo-top .logo {
  width: 1200px;
  height: 60px;
  margin: 0 auto;
  padding: 20px 0;
}

.logo-top .logo img {
  width: 180px;
  height: 60px;
}

.logo-top .logo span {
  width: 200px;
  color: darkgray;
  font-size: 30px;
  margin-left: 30px;
}

.login-top {
  width: 100%;
  background: #e9e9e8;
  height: 606px;
  overflow: hidden;
}

.login-top .login {
  width: 1200px;
  margin: 0 auto;
  height: 606px;
}

.login-top .login .login-left {
  float: left;
  width: 730px;
  height: 410px;
  overflow: hidden;
  padding: 90px 0 100px 60px;
}

.login-top .login .login-left img {
  width: 100%;
  height: 100%;
}

.login-top .login .login-right {
  float: left;
  width: 352px;
  min-height: 300px;
  margin-top: 90px;
  position: relative;
  background-color: #fff;
  box-sizing: border-box;
  margin-bottom: 100px;
  border: 1px solid #ddd;
}

.login-top .login .login-right .login-top {
  width: 100%;
  height: 56px;
  line-height: 1;
  font-size: 18px;
  font-weight: normal;
  margin: 0px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
}

.login-top .login .login-right .login-top .top-left {
  width: 49%;
  height: 56px;
  float: left;
  border-right: 1px solid #e9e9e8;
  text-align: center;
  line-height: 56px;
  font-size: 18px;
  /* color: #666; */
}

.login-top .login .login-right .login-top .top-right {
  width: 50%;
  height: 56px;
  float: right;
  text-align: center;
  line-height: 56px;
  font-size: 18px;
  color: #666;
}

.login-top .login .login-right .login-top .active {
  color: red;
}
</style>