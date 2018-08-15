<template>
  <div class="pay">
    <app-header title="付款"></app-header>
    <div class="container">
      <div class="item">
        <span class="select"></span>
        <img class="pay-icon" src="../../assets/icon/pay-ali.png" alt="">
        <span class="pay-type">支付宝</span>
      </div>
      <div class="item">
        <span class="select"></span>
        <img class="pay-icon" src="../../assets/icon/pay-wx.png" alt="">
        <span class="pay-type">微信</span>
      </div>
      <div class="item">
        <span class="select"></span>
        <img class="pay-icon" src="../../assets/icon/pay-card.png" alt="">
        <span class="pay-type">银行卡快捷支付</span>
      </div>
      <div class="common-btn" @click="handlePaySuccess">确定</div>
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
  .pay {
    height: 100vh;
    background: #fff;
  }
  .container {
    padding: $edge_default;
    border-top: px2rem(10) solid #f4f4f4;
    .item {
      @include flex_default;
      margin-bottom: px2rem(10);
      padding-bottom: px2rem(20);
      border-bottom: 1px solid #f4f4f4;
      .select {
        width: px2rem(20);
        height: px2rem(20);
        background: url("../../assets/icon/select-no.png") no-repeat;
        background-size: cover;
      }
      .pay-icon {
        width: px2rem(30);
        height: px2rem(30);
        margin: 0 px2rem(15);
      }
      .pay-type {

      }
    }
  }

</style>



