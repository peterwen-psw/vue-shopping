<template>
  <div>
    <public-head></public-head>
    <shop-info></shop-info>
    <foot-com></foot-com>
  </div>
</template>

<script>
import ShopInfo from '../components/car/ShopInfo.vue'
import FootCom from '../components/FootCom.vue'
import PublicHead from '../components/header/PublicHead.vue'
export default {
  components: { PublicHead, ShopInfo,FootCom },
}
</script>

<style>

</style>