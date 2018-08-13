<template>
  <div class="">
    <app-header title="付款"></app-header>
    <div>微信</div>
    <div>支付宝</div>
    <mt-button @click="handlePaySuccess">支付</mt-button>
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
      handlePaySuccess() {
        this.$router.push('paySuccess')
      }
    },
  }
</script>
<style lang="scss" scoped>
  @import '../../styles/common';



</style>



