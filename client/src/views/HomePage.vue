<template>
  <div>
    <public-head></public-head>
    <car-soule></car-soule>
    <content-com></content-com>
    <foot-com></foot-com>
  </div>
</template>

<script>
import FootCom from '../components/FootCom.vue'
import PublicHead from '../components/header/PublicHead.vue'
import CarSoule from '../components/home/CarSoule.vue'
import ContentCom from '../components/home/ContentCom.vue'
export default {
  components: { PublicHead, CarSoule, ContentCom, FootCom },

}
</script>

<style scoped>

</style>
