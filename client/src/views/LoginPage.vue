<template>
  <div>
    <login-com></login-com>
    <foot-com></foot-com>
  </div>
</template>

<script>
import FootCom from '../components/FootCom.vue';
import LoginCom from "../components/login/LoginCom.vue";
export default {
  components:{LoginCom,FootCom}
}
</script>

<style scoped>
</style>