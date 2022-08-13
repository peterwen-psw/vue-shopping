<template>
  <div class="denglu">
    <input type="text" placeholder="手机号" v-model="iphone" @change="fn1" />
    <input type="password" placeholder="密码" v-model="pwd" @change="fn2" />
    <!-- <p>忘记密码</p> -->
    <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      iphone: "",
      pwd: "",
    };
  },
  methods: {
    login() {
      if (this.iphone && this.pwd) {
        this.$axios({
          url: "/api/getinfo",
          method: "post",
          data: {
            username: this.iphone,
            userpwd: this.pwd,
          },
        }).then((res) => {
          if (res.data.status == 1) {
            this.$message.error("密码、用户错误或该用户不存在");
            this.iphone = "";
            this.pwd = "";
          } else if (res.data.status == 0) {
            this.$message({
              message: "登录成功",
              type: "success",
            });
            let token = res.data.token;
            localStorage.setItem("token", token);
            let objs = {
              name: this.iphone,
              pwd: this.pwd,
            };
            localStorage.setItem("user", JSON.stringify(objs));
            this.$router.go(-1);
            this.iphone = "";
            this.pwd = "";
          }
        });
      }
    },
    fn1() {
      let reg =
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
      if (reg.test(this.iphone) == false || this.iphone.length == 0) {
        this.$notify.error({
          title: "错误",
          message: "请输入正确格式的手机号",
        });
        this.iphone = "";
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
  },
};
</script>

<style scoped>
.login-top .login .login-right .denglu input {
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

.login-top .login .login-right .denglu p {
  margin: 10px 0;
  font-size: 16px;
  float: right;
  margin-right: 20px;
}

.login-top .login .login-right .denglu button {
  width: 280px;
  height: 38px;
  margin: 10px 35px;
  padding: 1px 6px;
  color: #fff;
  text-align: center;
  line-height: 38px;
  background-color: red;
  margin-bottom: 20px;
  margin-top: 30px;
}
</style>