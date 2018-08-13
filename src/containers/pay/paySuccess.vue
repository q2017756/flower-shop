<template>
  <div class="">
    <app-header title="付款成功"></app-header>
    <div>成功！</div>
    <mt-button @click="handleOrder">去订单页面</mt-button>
    <mt-button @click="handleHome">去首页</mt-button>
  </div>
</template>
<script>
  import appHeader from '@/components/common/appHeader'

  export default {
    data() {
      return {}
    },
    props: {
    },
    components: {
      appHeader
    },
    methods: {
      handleOrder() {
        this.$router.push('myOrder')
      },
      handleHome() {
        this.$router.push('/')
      }
    },
  }
</script>
<style lang="scss" scoped>
  @import '../../styles/common';



</style>



