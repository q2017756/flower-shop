<template>
  <div class="pay-status">
    <app-header title="支付成功"></app-header>
    <div class="container">
      <img class="img" v-if="success" src="../../assets/icon/pay-success.png" alt="">
      <img class="img" src="../../assets/icon/pay-fail.png" v-else  alt="">
      <div class="text" v-if="success">付款成功！</div>
      <div class="text" v-else>付款失败！</div>
      <div class="border-btn"  @click="handleOrder" v-if="success">订单页面</div>
      <div class="border-btn"  @click="handleOrder" v-else>继续支付</div>
      <div class="border-btn" @click="handleHome">返回首页</div>
    </div>
  </div>
</template>
<script>
  import appHeader from '@/components/common/appHeader'

  export default {
    data() {
      return {}
    },
    props: {
      success: {
        type: Boolean,
        default: false
      }
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
  .container {
    @include flex_default;
    flex-direction: column;
    padding: 15vh 10vw;
    .img {
      width: px2rem(60);
    }
    .text {
      margin:px2rem(25) 0 px2rem(60) px2rem(10);
      font-size: px2rem($size_big);
      font-weight: bold;
    }
    .border-btn {
      margin-bottom: px2rem(20);
      padding: px2rem(10) px2rem(60);
      border: 1px solid $red_default;
      border-radius: 5px;
      color: $red_default;
      font-size: px2rem($size_big);
    }
  }


</style>



