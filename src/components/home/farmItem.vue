<template>
  <router-link class="farm-item" v-bind:to="toPath">
    <img class="farm-img" :src="farmInfo.img_url"/>
    <div CLASS="text-container">
      <p class="name">{{farmInfo.farm_name}}</p>
      <div v-if="!addrShow" class="price-container">
        <span class="price">￥100</span>
        <span class="old-price">￥200</span>
      </div>
      <div class="info-container font-smaller">
        <span  v-if="!addrShow" class="num ">库存: 100件</span>
        <span  v-else class="address">
          <img class="addr-icon" src="../../assets/icon/addr.png" alt="">
          <span class="addr-text">{{farmInfo.province}}{{farmInfo.area}}</span>
        </span>
        <span v-if="!cartShow" class="comment">{{farmInfo.score}}%好评</span>
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
        farmInfo: {
            type: Object,
            default: () => {
                return {
                    farm_name: 'test11',
                    img_url: 'test',
                    province: '上海',
                    area: '徐家汇',
                    score: 100,
                }

            }
        },
      cartShow: {
        type: Boolean,
        default: false
      },
      addrShow: {
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
    .farm-img {
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
      width: 110%;
      padding-top: px2rem(3);
      .num {
        margin-left: px2rem(-20);
        padding: px2rem(2) px2rem(5);
        background: #eee;
        border-radius: 5px;
        color: #000;
      }
      .address {
        flex: 0 0 px2rem(140);
        @include ellipsis;
        @include flex_default;
        margin-left: px2rem(-25);
        .addr-icon {
          width: px2rem(12);
        }
        .addr-text {
          color: #666;
          @include ellipsis;
        }
      }
      .comment {
        white-space: nowrap;
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
