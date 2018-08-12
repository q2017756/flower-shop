<template>
  <div class="product-list">
    <app-header title="商品列表"></app-header>
    <div class="filter-bar">
      <span class="active">综合</span>
      <span>
        农场
        <img src="../../assets/icon/triangle-bottom.png" alt="">
      </span>
      <span>新品</span>
      <span>
        价格
        <img src="../../assets/icon/price-bottom.png" alt="">
      </span>
      <span>
        筛选
        <img src="../../assets/icon/filter.png" alt="">
      </span>
    </div>

    <div class="item-container">
      <product-item v-for="n in 10" :key="n" @handleDetail="handleDetail">
        <div class="item-desc" slot="desc">
          <div>
            <div class="info-container font-smaller">
              <span class="num ">库存: 100件</span>
              <span class="comment">98%好评</span>
            </div>
            <div class="price-container">
              <span class="price">￥100</span>
              <span class="old-price">￥200</span>
            </div>
          </div>
          <img src="../../assets/icon/tabbar-cart.png" alt="">
        </div>
      </product-item>
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
      handleDetail() {
        console.log(111)
        this.$router.push('productDetail/p1000001')
      }
    },
  }
</script>
<style lang="scss" scoped>
  @import '../../styles/common';

  .product-list {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: scroll;
  }
  .filter-bar {
    @include flex_default;
    justify-content: space-between;
    margin-top: $edge_small;
    padding: 0 $edge_small;
    background: #fff;
    span {
      padding: $edge_small $edge_default;
      img {
        width: px2rem(12);
        vertical-align: unset;
      }
      &.active {
        color: $red_default;
      }
    }
  }

  .item-container {
    flex: 1;
    overflow-y: scroll;
    padding-top: $edge_small;
  }
  .item-desc {
    display: flex;
    justify-content: space-between;
    img {
      align-self: flex-end;
      width: px2rem(20);
      height: px2rem(20);
    }
    .price {
      margin-right: px2rem(5);
      font-size: px2rem($size_default);
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
      margin-bottom: px2rem(5);
      padding-top: px2rem(3);
      .num {
        margin: 0 px2rem(10) 0 px2rem(-18);
        padding: px2rem(2) px2rem(5);
        background: #eee;
        border-radius: 5px;
        color: #000;
      }
      .comment {
        padding: px2rem(2) px2rem(5);
        background: #eee;
        border-radius: 5px;
        color: #000;
      }
    }
  }
</style>



