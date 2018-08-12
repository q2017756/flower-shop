<template>
  <div class="pd-page">
    <app-header :titleShow="false">
      <div slot="center" class="header-btns">
        <span>商品</span>
        <span>详情</span>
        <span>推荐</span>
        <span>评价</span>
      </div>
      <img slot="btn" src="../../assets/icon/share.png" class="share-btn" @click="handleShare">
    </app-header>

    <div class="pd-content">
      <div class="carousel-wrapper"  v-if="productDetail.pics">
        <carousel v-bind:hideIndicator="true" v-bind:pics="productDetail.pics" v-bind:onPicChange="handleCarouselChange" />
        <p class="indicator">{{ currentPic }}/{{ productDetail.pics.length }}</p>
      </div>
      <div class="content">
        <div class="info">
          <p class="price">
            ¥{{ productDetail.price }}
            <span class="font-smaller-b">会员专享</span>
          </p>
          <h3 class="title">{{ productDetail.title }}</h3>
          <div class="tag-wrapper">
            <span class="font-smaller-b">A级</span>
            <span class="font-smaller-b">库存100件</span>
            <span class="font-smaller-b">花知农场</span>
            <span class="font-smaller-b">好评率:97%</span>
          </div>
          <span class="sales">月销: 100件</span>
        </div>
      </div>

      <div class="coupon">
        <div class="coupon-header">
          <span>会员优惠</span>
          <div>加入会员</div>
        </div>
        <div class="coupon-content">
          <span>优惠券</span>
          <div class="item-container">
            <span class="coupon-item">满299减100</span>
            <span class="coupon-item">满199减100</span>
          </div>
        </div>
      </div>

      <div class="select-section">
        <div class="select" v-on:click="handlePickFormat">
          <span>{{ selectFormat.format && selectFormat.format.length ? '已选择：' + selectFormat.format.join('') + 'x' + selectFormat.count : '请选择规格数量' }}</span>
          <i class="more" />
        </div>
      </div>
      <div class="comment-wrapper">
        <div class="header" v-on:click="pushToComment">
          <span>宝贝评价({{ commentCountString }})</span>
          <div class="comment-more">查看全部<i class="more" /></div>
        </div>
        <comment style="border: none;" />
      </div>
      <!--<attribute-container />-->
      <div class="product-detail">
        <div class="title">商品详情</div>
        <div>xxxxx</div>
        <!--<p v-for="detailPic in productDetail.detailPics">-->
          <!--<img v-bind:src="detailPic" />-->
        <!--</p>-->
      </div>
      <common-issue />
    </div>
    <!--底部-->
    <div class="pd-bottom">
      <div class="icon-item">
        <img src="../../assets/icon/kefu.png" alt="">
        <span>客服</span>
      </div>
      <div class="icon-item">
        <img src="../../assets/icon/tabbar-farm.png" alt="">
        <span>农场</span>
      </div>
      <div class="icon-item">
        <img src="../../assets/icon/star.png" alt="">
        <span>收藏</span>
      </div>
      <button v-on:click="handleAddCart" class="cart">加入购物车</button>
      <button v-on:click="handleBuyNow" class="buy">购买</button>
    </div>
  </div>
</template>

<script>
  import appHeader from '@/components/common/appHeader'
  import carousel from '@/components/common/carousel'
  import descriptionWrapper from '@/components/productDetail/descriptionWrapper'
  import comment from '@/components/common/comment'
  import attributeContainer from './attributeContainer.vue'
  import commonIssue from '@/components/common/commonIssue'
  import { fetchProductDetail } from '@/utils/fetchData'
  import { mapState, mapActions } from 'vuex'
  export default {
    computed: {
      // ...mapState(['selectFormat'])
      selectFormat () {
        console.log('------')
        console.log(this.$store.state.selectFormat)
        const selectFormat = this.$store.state.selectFormat
        return selectFormat[this.$route.params.id] || {}
      },
      commentCountString () {
        const count = this.productDetail.commentCount
        return count > 999 ? '999+' : count
      }
    },
    components: {
      appHeader,
      carousel,
      descriptionWrapper,
      comment,
      attributeContainer,
      commonIssue
    },
    methods: {
      ...mapActions(['showCommodityDetail', 'addToCart']),
      pushToComment () {
        this.$router.push('/comment')
      },
      handleShare() {
        console.log('分享')
      },
      fetchData () {
        fetchProductDetail()
          .then(r => {
            console.log(r)
            const pId = this.$route.params.id
            this.productDetail = r[pId]
          })
      },
      handlePickFormat () {
        const pId = this.$route.params.id
        this.showCommodityDetail({
          pId: pId,
          title: this.productDetail.title,
          price: this.productDetail.price,
          pic: this.productDetail.pics[0],
          formats: this.productDetail.format
        })
        this.$router.push(`/format/${pId}`)
      },
      handleCarouselChange (current) {
        this.currentPic = current + 1
      },
      handleBuyNow () {
        this.$router.push('/confirmOrder')
      },
      handleAddCart () {
        const format = this.selectFormat.format
        if (format && format.length) {
          this.addToCart({
            pId: this.productDetail.pId,
            title: this.productDetail.title,
            price: this.productDetail.price,
            pic: this.productDetail.pics[0],
            selectd: true,
            count: this.selectFormat.count,
            formats: this.productDetail.formats,
            selectString: this.selectFormat.format.join(';')
          })
        } else {
          this.handlePickFormat()
        }
      }
    },
    mounted () {
      this.fetchData()
    },
    data () {
      return {
        productDetail: {},
        currentPic: 1
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/common.scss';
  .pd-page {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .header-btns {
      @include flex_default;
      justify-content: space-around;
      width: 60vw;
      height: $header_height;
      margin: 0 0 0 50vw;
      transform: translateX(-50%);
      span {
        padding: px2rem(10);
        font-size: px2rem($size_default);
      }
    }
    .share-btn {
      position: absolute;
      top: 0;
      right: 0;
      width: px2rem(24);
      padding: px2rem(13) px2rem(12);
    }
  }

  .pd-content {
    flex: 1;
    overflow-y: auto;
    .carousel-wrapper {
      width: 100%;
      height: px2rem(310);
      display: flex;
      position: relative;
      margin-bottom: $edge_small;
      .indicator {
        position: absolute;
        right: px2rem(15);
        bottom: px2rem(15);
        width: px2rem(27);
        background-color: #fff;
        border: 1px solid rgba(0,0,0,.15);
        border-radius: px2rem(4);
        font-size: px2rem($size_small);
        text-align: center;
      }
    }
  }

  .content {
    padding: px2rem(10) px2rem(15) px2rem(15) px2rem(15);
    background-color: #fff;
    margin-bottom: $edge_small;
    display: flex;
    .info {
      position: relative;
      flex: 1;
      .price {
        margin-bottom: $edge_small;
        color: $red_default;
        font-size: px2rem($size_default);
        .font-smaller-b {
          margin-left: px2rem(10);
          background: orange;
          color: #fff;
        }
      }
      .title {
        font-weight: normal;
        font-size: px2rem($size_default);
        margin-bottom: $edge_default;
      }
      .tag-wrapper {
        margin-left: px2rem(-6);
      }
      .sales {
        position: absolute;
        right: px2rem(10);
        bottom: 0;
      }
    }

    .comment {
      width: px2rem(78);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      // border-left: 1px dashed #919191;
      background-image: linear-gradient(to bottom,#919191 33%,rgba(255,255,255,0) 0);
      background-size: 1px 12px;
      background-repeat: repeat-y;
      .count {
        color: #B4282D;
        font-weight: bold;
        line-height: 1;
        margin-bottom: px2rem(5);
        text-align: center;
        font-size: px2rem(18);
      }
      .com {
        color: #B4282D;
        line-height: 1;
        margin-bottom: px2rem(5);
        text-align: center;
        font-size: px2rem($size_small);
      }
      .checkBtn {
        width: px2rem(57);
        border: 1px solid #7F7F7F;
        border-radius: 2px;
        text-align: center;
        background: none;
        font-size: px2rem($size_small);
        padding: px2rem(2) 0;
        margin: 0 px2rem(8);
      }
    }
  }

  .coupon {
    background: #fff;
    margin-bottom: $edge_small;
    padding: px2rem(10) px2rem(15);
    .coupon-header, .coupon-content {
      display: flex;
      span {
        flex: 0 0 px2rem(80);
        font-size: px2rem($size_small);
      }
      div {
        font-size: px2rem($size_small);
      }
    }
    .coupon-header {
      padding-bottom: px2rem(5);
      border-bottom: 1px solid #eee;
    }
    .coupon-content {
      padding-top: px2rem(8);
      .item-container {
        display: flex;
        flex-wrap: wrap;
      }
      .coupon-item {
        margin: 0 px2rem(10) px2rem(5) 0;
        padding: px2rem(4) px2rem(8) px2rem(4) px2rem(10);
        background: $red_default;
        color: #fff;
        white-space: nowrap;
      }
    }

  }
  .select-section {
    background-color: #fff;
    padding-left: px2rem(15);
    margin-bottom: $edge_small;
  }

  .more {
    display: inline-block;
    width: px2rem(25);
    height: px2rem(25);
    background: url('../../assets/icon/more.png') no-repeat center;
    background-size: px2rem(8);
    margin-right: px2rem(8);
  }

  .select, .promotion {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: px2rem(52);
  }

  .promotion-wrapper {
    display: flex;
  }

  .promotion-num {
    margin-right: px2rem(5);
    word-wrap: normal;
    line-height: px2rem(18);
  }

  .promotion-content {
    display: flex;
    align-items: center;
  }

  .promotion-content .tag {
    margin-top: 0;
  }

  .promotion-detail {
    @include ellipsis;
    color: #f48f18;
    max-width: px2rem(175);
  }

  .comment-wrapper {
    background-color: #fff;
    margin-bottom: px2rem(10);
    .header {
      display: flex;
      justify-content: space-between;
      padding: px2rem(5) 0;
      margin-left: px2rem(15);
      align-items: center;
      span {
        color: #000;
        font-size: px2rem($size_default);
      }
    }
    .comment-more {
      display: flex;
      align-items: center;
      font-size: px2rem($size_middle);
    }
  }

  .product-detail {
    background: #fff;
    margin-bottom: $edge_small;
    .title {
      padding: px2rem(10) px2rem(15);
      font-size: px2rem($size_default);
      color: #000;
    }
    p {
      font-size: 0;
    }
    img {
      width: 100%;
    }
  }


  .pd-bottom {
    background-color: #fff;
    height: px2rem(49);
    border-top: 1px solid $border_color;
    display: flex;
    .icon-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 px2rem(15);
      border-right: 1px solid #eee;
      img {
        width: px2rem(20);
        margin-bottom: px2rem(2);
      }
      span {
        font-size: px2rem($size_small);
      }
    }
    .cart {
      flex: 1;
      background-color: orange;
      color: #fff;
    }
    .buy {
      flex: 1;
      background-color: #b4282d;
      color: #fff;
    }
  }

</style>
