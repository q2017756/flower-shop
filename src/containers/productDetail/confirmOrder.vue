<template>
  <div class="confirm">
    <app-header title="确认订单"></app-header>
    <div class="confirm-content">
      <div class="user-info" @click="handleAddr">
        <div>
          <p class="name">张晓华</p>
          <p class="default-btn">默认</p>
        </div>
        <div>
          <p class="tel">136****1234</p>
          <p class="addr">上海市浦东新区浦东国际机场</p>
        </div>
        <img class="more" src="../../assets/icon/more.png" alt="">
      </div>

      <div class="product-info">
        <div class="farm">花知农场</div>
        <product-item>
          <div class="prodect-desc" slot="desc">
            <span>¥ 1020.00</span>
            <span>×1</span>
          </div>
        </product-item>
        <div class="coupon" @click="handleCoupon">
          <span>优惠券: 2张可用</span>
          <img class="more" src="../../assets/icon/more.png" alt="">
        </div>
      </div>

      <div class="price-info">
        <div>
          <span>商品金额</span>
          <span>¥ 1020.00</span>
        </div>
        <div>
          <span>运费</span>
          <span>¥ 0.00</span>
        </div>
        <div>
          <span>优惠券</span>
          <span>-¥ 20.00</span>
        </div>
      </div>
    </div>
    <div class="confirm-bottom">
      <span class="price-total">应付: ¥ 1000.00</span>
      <span class="pay-btn" @click="handlePay">去付款</span>
    </div>
  </div>
</template>
<script>
  import appHeader from '@/components/common/appHeader'
  import productItem from '@/components/productDetail/productItem'

  export default {
    data() {
      return {}
    },
    props: {
    },
    components: {
      appHeader,
      productItem
    },
    methods: {
      handleCoupon() {
        this.$router.push('chooseCoupon')
      },
      handleAddr() {
        this.$router.push('addressX')
      },
      handlePay() {
        this.$router.push('pay')
      }
    },
  }
</script>
<style lang="scss" scoped>
  @import '../../styles/common';
  .confirm {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: #fff;

    .confirm-content {
      flex: 1;
      overflow-y: scroll;
      height: 100vw;
    }
    .product-info, .user-info, .price-info {
      padding: px2rem(5) px2rem(15);
    }
    .user-info {
      @include flex_default;
      justify-content: space-between;
      padding: px2rem(15);
      border-top: 1px solid #eee;
      border-bottom: px2rem(10) solid #eee;
      .name, .tel {
        font-size: px2rem($size_big);
        margin-bottom: px2rem(4);
      }
      .default-btn {
        width: px2rem(40);
        margin: 0 auto;
        padding: px2rem(2) px2rem(4);
        border: 1px solid $red_default;
        color: $red_default;
        text-align: center;
        font-size: px2rem($size_small);
      }
      .more {
        width: px2rem(10);
        padding: px2rem(10);
      }
    }
    .product-info {
      border-bottom: px2rem(10) solid #eee;
      .farm {
        padding-bottom: px2rem(8);
        border-bottom: 1px solid #eee;
      }
      .prodect-desc {
        display: flex;
        justify-content: space-between;
        margin-top: px2rem(30);
      }
      .coupon {
        @include flex_default;
        justify-content: space-between;
        border-top: 1px solid #eee;
        height: px2rem(30);
        .more {
          width: px2rem(5);
          padding: px2rem(10);
        }
      }
    }
    .price-info {
      div {
        @include flex_default;
        justify-content: space-between;
        height: px2rem(35);
        border-bottom: 1px solid #eee;
        font-size: px2rem($size_default);
      }
    }

    .confirm-bottom {
      display: flex;
      height: $header_height;
      .price-total, .pay-btn {
        display: inline-block;
        line-height: $header_height;
      }
      .price-total {
        flex: 1;
        padding-left: px2rem(15);
        border-top: 1px solid #eee;
        color: $red_default;
      }
      .pay-btn {
        flex: 0 0 px2rem(140);
        background: $red_default;
        color: #fff;
        text-align: center;
      }
    }
  }


</style>



