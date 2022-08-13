<template>
  <div>
    <public-head></public-head>
    <detail-com></detail-com>
    <foot-com></foot-com>
  </div>
</template>

<script>
import DetailCom from "../components/detail/DetailCom.vue";
import FootCom from '../components/FootCom.vue';
import PublicHead from "../components/header/PublicHead.vue";
export default {
  components: { PublicHead, DetailCom, FootCom },
 
};
</script>

<style scoped>
</style>