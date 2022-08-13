<template>
  <div>
    <public-head></public-head>
    <screen-com ></screen-com>
    <product-list></product-list>
    <foot-com></foot-com>
  </div>
</template>

<script>
import FootCom from '../components/FootCom.vue';
import PublicHead from "../components/header/PublicHead.vue";
import ProductList from "../components/list/ProductList.vue";
import ScreenCom from "../components/list/ScreenCom.vue";


export default {
  components: { PublicHead, ScreenCom, ProductList, FootCom },
  data: function () {
    return {
    };
  },
 
};
</script>

<style scoped>

</style>