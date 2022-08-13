<template>
  <div class="zhuce">
    <input type="text" placeholder="手机号" v-model="name" @change="fn1" />
    <input type="password" placeholder="密码" v-model="pwd" @change="fn2" />
    <input
      type="password"
      placeholder="再次输入密码"
      v-model="pwds"
      @change="fn3"
    />
    <div class="yanzheng">
      <input
        type="text"
        placeholder="请输入验证码"
        id="num"
        v-model="verify"
        @change="fn4"
      />
      <span id="code" ref="box">{{ value }}</span>
      <a id="change" @click="change">换一张</a>
    </div>
    <button @click="entroll">注册</button>
  </div>
</template>

<script>
import {mapMutations } from "vuex";
export default {
  data: function () {
    return {
      name: "",
      pwd: "",
      pwds: "",
      value: "",
      verify: "",
    };
  },
  methods: {
       ...mapMutations(["setcom"]),
    fn1() {
      let reg =
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
      if (reg.test(this.name) == false || this.name.length == 0) {
        this.$notify.error({
          title: "错误",
          message: "请输入正确格式的手机号",
        });
        this.name = "";
      }
    },
    fn2() {
      let reg = /^\d{3,6}$/;
      if (reg.test(this.pwd) == false || this.pwd.length == 0) {
        this.$notify.error({
          title: "错误",
          message: "密码为3-6位纯数字",
        });
        this.pwd = "";
      }
    },
    fn3() {
      let reg = /^\d{3,6}$/;
      if (
        reg.test(this.pwds) == false ||
        this.pwd.length == 0 ||
        this.pwd != this.pwds
      ) {
        this.$notify.error({
          title: "错误",
          message: "两次密码输入不一致",
        });
        this.pwds = "";
      }
    },
    change() {
      let codeArr = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "a",
        "b",
        "c",
        "d",
        "A",
        "B",
        "C",
        "D",
      ];
      var str = "";
      for (var i = 0; i < 4; i++) {
        var index = parseInt(Math.random() * (codeArr.length - 1));
        str += codeArr[index];
      }
      this.value = str;
    },
    fn4() {
      if (this.verify != this.value || this.verify.length == 0) {
        this.$notify.error({
          title: "错误",
          message: "验证码错误",
        });
      }
    },
    entroll() {
      if (this.name && this.pwd && this.pwds && this.verify) {
        this.$axios({
          url: "/api/getuser",
          method: "post",
          data: {
            username: this.name,
            userpwd: this.pwd,
          },
        }).then((res) => {
          let data = res.data;
          if (data.status == 0) {
            this.setcom("enter-com")
            this.$message({
              message: "注册成功，请登录",
              type: "success",
            });
            (this.name = ""),
              (this.pwd = ""),
              (this.pwds = ""),
              (this.verify = "");
          }
          if (data.status == 1) {
            this.$message.error("该用户已存在");
            (this.name = ""),
              (this.pwd = ""),
              (this.pwds = ""),
              (this.verify = "");
          }
        });
      } else {
        this.$notify.error({
          title: "错误",
          message: "注册失败",
        });
      }
    },
  },
  created: function () {
    let codeArr = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "a",
      "b",
      "c",
      "d",
      "A",
      "B",
      "C",
      "D",
    ];
    var str = "";
    for (var i = 0; i < 4; i++) {
      var index = parseInt(Math.random() * (codeArr.length - 1));
      str += codeArr[index];
    }
    this.value = str;
  },
};
</script>

<style scoped>
.login-top .login .login-right .zhuce input {
  width: 280px;
  height: 20px;
  margin-top: 30px;
  margin-left: 20px;
  padding: 9px 10px;
  line-height: 20px;
  font-size: 14px;
  border: 1px solid #ddd;
  outline: none;
}

.login-top .login .login-right .zhuce .yanzheng {
  width: 280px;
  height: 38px;
  margin: 10px 20px;
  margin-top: 15px;
  border: 1px solid #ddd;
  padding: 0 10px;
}

.login-top .login .login-right .zhuce .yanzheng input {
  width: 130px;
  height: 35px;
  padding: 0 10px;
  border: 0;
  float: left;
  margin-top: 0;
  margin-left: 0;
  outline: none;
}

.login-top .login .login-right .zhuce .yanzheng #code {
  width: 64px;
  height: 30px;
  background-color: aquamarine;
  display: inline-block;
  margin-top: 3px;
  text-align: center;
  line-height: 30px;
  font-size: 16px;
}

.login-top .login .login-right .zhuce .yanzheng a {
  text-decoration: none;
  color: #000;
  display: inline-block;
}

.login-top .login .login-right .zhuce button {
  width: 280px;
  height: 38px;
  margin: 10px 35px;
  padding: 1px 6px;
  color: #fff;
  text-align: center;
  line-height: 38px;
  background-color: red;
  margin-bottom: 20px;
}
</style>