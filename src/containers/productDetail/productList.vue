<template>
  <div class="product-list">
    <app-header title="商品列表"></app-header>
    <div class="filter-bar">
      <span class="active">综合</span>
      <span @click="toggleFarm">
        农场
        <img src="../../assets/icon/triangle-bottom.png" alt="">
      </span>
      <span>新品</span>
      <span>
        价格
        <img src="../../assets/icon/price-bottom.png" alt="">
      </span>
      <span @click="togglePopup">
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
    <transition name="fade">
      <div v-show="farmVisible" class="farm-list">
        <span class="farm-item" v-for="n in 6" :key="n">农场{{n}}</span>
      </div>
    </transition>
    <transition name="fade">
      <div v-show="farmVisible" class="mask"></div>
    </transition>
    <mt-popup
      v-model="popupVisible"
      position="right">
      <slot>
        <div class="popup">
          <img class="popup-back" src="../../assets/icon/back-black.png" alt="" @click="togglePopup">
          <category-item-container class="content-right" :imgShow="false" v-bind:section="section"
                                   v-bind:handleClick="handlePushToCommodity"/>
        </div>
      </slot>
    </mt-popup>
  </div>
</template>
<script>
  import appHeader from '@/components/common/appHeader'
  import productItem from '@/components/productDetail/productItem'
  import categoryItemContainer from '@/containers/category/categoryItemContainer'

  export default {
    data() {
      return {
        popupVisible: false,
        farmVisible: false,
        sections: [
          {name: '618', categoryId: '1000001', pic: '/static/img/rose.png'},
          {name: '新品', categoryId: '1000002', pic: '/static/img/best.png'},
          {name: '玫瑰', categoryId: '1000003', pic: '/static/img/rose.png'},
          {name: '洋桔梗', categoryId: '1000004', pic: '/static/img/best.png'},
          {name: '康乃馨', categoryId: '1000005', pic: '/static/img/rose.png'},
        ],
        section: {
          pic: '/static/img/rose.png',
          name: '618',
          section: {}
        }
      }
    },
    props: {},
    components: {
      appHeader,
      productItem,
      categoryItemContainer
    },
    methods: {
      handleDetail() {
        console.log(111)
        this.$router.push('productDetail/p1000001')
      },
      handlePushToCommodity(section, commodity) {
        console.log(section)
        console.log(commodity)
        this.$router.push('/productList')
      },
      togglePopup() {
        this.popupVisible = !this.popupVisible
      },
      toggleFarm() {
        this.farmVisible = !this.farmVisible
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
    z-index: 99;
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

  .popup {
    width: 60vw;
    height: 100vh;
    .popup-back {
      width: px2rem(15);
      padding: $edge_default;
    }
  }

  .farm-list {
    position: absolute;
    top: px2rem(85);
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    padding: $edge_default;
    background: #fff;
    z-index: 99;
    .farm-item {
      flex: 0 0 23%;
      display: inline-block;
      margin: 0 2% px2rem(10) 0;
      padding: px2rem(3) $edge_small;
      border: 1px solid $red_default;
      border-radius: 5px;
      text-align: center;
      color: $red_default;
    }
  }
  .mask {
    position: absolute;
    top: px2rem(85);
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.7);
    z-index: 97;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>



