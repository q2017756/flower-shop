<template>
  <router-link class="farm-item" v-bind:to="toPath">
    <img src="../../assets/img/flower-img.png"/>
    <div CLASS="text-container">
      <p class="name">向日葵生日花束</p>
      <div class="price-container">
        <span class="price">￥100</span>
        <span class="old-price">￥200</span>
      </div>
      <div class="info-container font-smaller">
        <span class="num ">库存: 100件</span>
        <span v-if="!cartShow" class="comment">98%好评</span>
        <div v-else>
          <img class="farm-cart" src="../../assets/icon/tabbar-cart.png"  alt="">
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
  export default {
    props: {
      cartShow: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      toPath() {
        return `/farmDetail`
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/common.scss';

  .farm-item {
    @include flex_default;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    width: 50vw;
    height: px2rem(255);
    margin: -1px -1px 0 0;
    padding: $edge_small $edge_default;
    position: relative;
    background: #fff;
    border: 1px solid #eee;
    margin-bottom: $edge_small;
    img {
      flex: 0 0 px2rem(160);
      align-self: center;
      display: inline-block;
      width: 90%;
    }
    .text-container {
      width: 100%;
    }
    .name {
      font-size: px2rem($size_middle);
      color: #666;
    }
    .price {
      margin-right: px2rem(5);
      font-size: px2rem($size_middle);
      color: $red_default;
    }
    .old-price {
      font-size: px2rem($size_small);
      color: $text_color;
      text-decoration: line-through;
    }
    .info-container {
      @include flex_default;
      justify-content: space-between;
      padding-top: px2rem(3);
      .num {
        margin-left: px2rem(-20);
        padding: px2rem(2) px2rem(5);
        background: #eee;
        border-radius: 5px;
        color: #000;
      }
      .comment {
        color: #000;
      }
      .farm-cart {
        position: relative;
        left: px2rem(18);
        bottom: px2rem(5);
        width: px2rem(30);
      }
    }
  }

</style>
