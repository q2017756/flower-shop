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
    <mt-popup
      v-model="popupVisible"
      position="bottom">
      <slot>
        <div class="popup">
          <format-detail
            v-bind:commodity="commodity"
            v-bind:selectString="selectString"
            v-bind:handleCountChange="handleCountChange"
            v-bind:handleSelectFormat="handleSelectFormat"
            v-bind:count="count"
          />
          <div class="format-btns">
            <button class="back" v-on:click="handleBack">返回</button>
            <button class="buyNow" v-on:click="handleAddToCart">加入购物车</button>
            <button class="addToCart" v-on:click="handleNext">立即购买</button>
          </div>
        </div>
      </slot>
    </mt-popup>
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
  import formatDetail from '@/components/common/formatDetail'
  import { fetchProductDetail } from '@/utils/fetchData'
  import { mapState, mapActions } from 'vuex'
  export default {
    data () {
      return {
        productDetail: {
          "pId": "p1000001",
          "title": "玫瑰花",
          "description": "MUJI代工厂，素雅大气，结实不易蛀",
          "price": "1699",
          "commentCount": "0",
          "pics": ["/static/img/rose.png","/static/img/flower-img.png","/static/img/home-activity-3.png"],
          "format": [
            {
              "name": "颜色",
              "options": ["红", "白"]
            },
            {
              "name": "规格",
              "options": ["99朵", "999朵"]
            }
          ],
          "remark": "大家具送货安装及售后服务细则>>",
          "activity": [
            {
              "name": "家居好物免费领 全场每满199减40",
              "tag": "限时",
              "activityId": "101"
            }
          ],
          "characteristics": [
            {
              "items": ["简单巧妙", "稳固链接"],
              "pic": "http://yanxuan.nosdn.127.net/a5e48c2ea5682773008c7b1086fd5ceb.jpg"
            },
            {
              "items": ["圆角打磨", "安全放心"],
              "pic": "http://yanxuan.nosdn.127.net/6bc0661e1467457197d99b93dc153dbd.jpg"
            },
            {
              "items": ["忠于原木", "自然纹理"],
              "pic": "http://yanxuan.nosdn.127.net/a5bbe1c9b55266090cf18d8a78ca5a0c.jpg"
            }
          ],
          "tags": [{ "name": "新品", "tId": "1200000"}, { "name": "MUJI制造商", "tId": "1200001" }],
          "services": ["30天无忧退货", "48小时快速退款", "满88元免邮费", "网易自营品牌", "部分地区无法配送"],
          "detailPics": ["http://yanxuan.nosdn.127.net/ef53b73ebf9bf482e8424aa5910aae5e.jpg", "http://yanxuan.nosdn.127.net/afe0e6309b07ca1bbf0df252419ce7e3.jpg", "http://yanxuan.nosdn.127.net/23b09c1721979086d4912089ec50e84d.jpg", "http://yanxuan.nosdn.127.net/7969aaff6ae99e8f398f39816f0d2ed6.jpg",
            "http://yanxuan.nosdn.127.net/4f98bbd05d4640d99c4358e5ab2377dc.jpg", "http://yanxuan.nosdn.127.net/4bfb1ea5ff5ad1739e6c02267e5dffae.jpg", "http://yanxuan.nosdn.127.net/e206c3665131b87ddc61d20b80dced16.jpg", "http://yanxuan.nosdn.127.net/52ca8ccc276f44146bab888a23592102.jpg", "http://yanxuan.nosdn.127.net/b156739dcacca6c477c1daca8f7ef508.jpg",
            "http://yanxuan.nosdn.127.net/1bc868f11288b92ebd9f4e9fed2584e9.jpg", "http://yanxuan.nosdn.127.net/b5a22b5a710ca36f9836cf6234c19277.jpg", "http://yanxuan.nosdn.127.net/13a28cea55bb6d2efe8a28ad9b1dc698.jpg", "http://yanxuan.nosdn.127.net/63d905fb4b67a4baba668b6e6a93cbb5.jpg",
            "http://yanxuan.nosdn.127.net/230a388048354582fee4a3f0078cddda.jpg", "http://yanxuan.nosdn.127.net/3f1274c471342480fb516881b5ae21e0.jpg", "http://yanxuan.nosdn.127.net/aaccc31334b6e0e28f647a022c8955eb.jpg", "http://yanxuan.nosdn.127.net/05a4a1aa45fbfdc711b61a92840e30ea.jpg", "http://yanxuan.nosdn.127.net/4f4d77bd030309c6cfcf4b868f87d2e8.jpg",
            "http://yanxuan.nosdn.127.net/395730ee03d2cd2053269f2ed6c0ee97.jpg", "http://yanxuan.nosdn.127.net/7393c0b0eeafb858a1adbfe7671fa224.jpg", "http://yanxuan.nosdn.127.net/9042956a64e0e3d58ffbc70160281eaa.jpg", "http://yanxuan.nosdn.127.net/46300b11ee09b3c0cac41a8c88203abd.jpg", "http://yanxuan.nosdn.127.net/847b1298aeab62b908f92ddb150bfd46.jpg",
            "http://yanxuan.nosdn.127.net/ce61d7917509e5a0049a4651f75b4b65.jpg", "http://yanxuan.nosdn.127.net/be36db9971c6cd29b835aab31d2cd46e.jpg", "http://yanxuan.nosdn.127.net/f7f75e099205312371d56267bc385230.jpg", "http://yanxuan.nosdn.127.net/d97e15dc49b6a38add90d7f584c7f86a.jpg", "http://yanxuan.nosdn.127.net/3a9971b50d18d5c2697248fcf86435bd.jpg",
            "http://yanxuan.nosdn.127.net/f1fcae3fbf18dade10207da8982162ea.jpg", "http://yanxuan.nosdn.127.net/814c95c3376f3d74835c98b42f1b6dc7.jpg", "http://yanxuan.nosdn.127.net/c0238d5f811e2cc1ae0528aef6f8025b.jpg", "http://yanxuan.nosdn.127.net/ea6b9ff611d682c65387d3587b4c7323.jpg", "http://yanxuan.nosdn.127.net/7d354323f8e964ee77edc0daf08d6faa.jpg",
            "http://yanxuan.nosdn.127.net/460f64576a0d7a5c5fd501574d3a364e.jpg", "http://yanxuan.nosdn.127.net/49e7488a2306830b261c9726ba49ea04.jpg", "http://yanxuan.nosdn.127.net/9e5a809e688942933aa9ad3e810b0311.jpg", "http://yanxuan.nosdn.127.net/05d079ea49fbdafd0aba7427a5b93522.jpg", "http://yanxuan.nosdn.127.net/f550dc7a38f5e4375d55ed2ea56cf838.jpg",
            "http://yanxuan.nosdn.127.net/928a4db68ef9475871049b601d6d9983.jpg", "http://yanxuan.nosdn.127.net/ccaa67ffee0b4bbfeb0909ac11cfcd33.jpg", "http://yanxuan.nosdn.127.net/8da6bda843f8c67f51d3afec3fbe23e6.jpg", "http://yanxuan.nosdn.127.net/fdfcb93ce9cd6cdbba19d69305d438a5.jpg", "http://yanxuan.nosdn.127.net/dfa5148a0ba266d05ab973f5d2b363d3.jpg",
            "http://yanxuan.nosdn.127.net/3de8029f1a0fb535adcd41cc79646e80.jpg", "http://yanxuan.nosdn.127.net/32921ce7eb344ee5f3888f38d1a7a072.jpg", "http://yanxuan.nosdn.127.net/0078a36433f89759a8f468bfdb34c0a7.jpg", "http://yanxuan.nosdn.127.net/7c46cd327f1cf94b3f03b55c061418f5.jpg", "http://yanxuan.nosdn.127.net/a6d869d45712f226c7a6ab555e161233.jpg",
            "http://yanxuan.nosdn.127.net/6b48aa2e873eb47333f018fff1d76630.jpg", "http://yanxuan.nosdn.127.net/7a81e1875799f7da449c87d80b641731.jpg", "http://yanxuan.nosdn.127.net/99f3658a533d25bd07352071a9cbe45f.jpg", "http://yanxuan.nosdn.127.net/182543e58dc5393467883e2e26519728.jpg", "http://yanxuan.nosdn.127.net/b1ea67e24eac8a86f3cb187dcee62d95.jpg",
            "http://yanxuan.nosdn.127.net/6680a6f42b7f13ac0e98d90557917cc6.jpg", "http://yanxuan.nosdn.127.net/a673f85989f21039bc388944bbdb9d7a.jpg", "http://yanxuan.nosdn.127.net/e2a2419c8c76851a60857c8a033fa1d0.jpg", "http://yanxuan.nosdn.127.net/35938375758355736cf416cad168963e.jpg", ""
          ],
          "attrs": [
            { "name": "材质", "content": "进口白蜡木" },
            { "name": "涂漆", "content": "环保涂漆" },
            { "name": "产品尺寸", "content": "1400/1600*820*750mm" },
            { "name": "安装方式", "content": "需要组装" }
          ],
          "stock": 111
        },
        currentPic: 1,
        popupVisible: false,
        count: this.$store.state.selectFormat.count || 1
      }
    },
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
      },
      ...mapState({
        commodity: 'showCommodityDetail',
        selects: function (state) {
          const selectFormat = state.selectFormat[this.$route.params.pId] || {}
          console.log('+++++++', selectFormat.format)
          return selectFormat.format || []
        }
      }),
      selectString () {
        return this.selects.join(' ')
      }
    },
    components: {
      appHeader,
      carousel,
      descriptionWrapper,
      comment,
      attributeContainer,
      commonIssue,
      formatDetail
    },
    methods: {
      ...mapActions(['showCommodityDetail', 'addToCart', 'changeSelectFormat',
        'addToCart']),
      pushToComment () {
        this.$router.push('/comment')
      },
      handleShare() {
        console.log('分享')
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
        this.popupVisible = true
      },
      handleNext () {
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
      },
      handleBack () {
        this.popupVisible = false
      },
      handleAddToCart () {
        console.log('add to cart...')
        if (this.selects.length === this.commodity.formats.length) {
          this.addToCart({
            pId: this.commodity.pId,
            title: this.commodity.title,
            price: this.commodity.price,
            pic: this.commodity.pic,
            selectd: true,
            count: this.count,
            formats: this.commodity.formats,
            selectString: this.selects.join(';')
          })
        }
      },
      handleSelectFormat (option, index) {
        console.log(index, option)
        if (this.selects[index] === option) {
          this.selects.splice(index, 1)
          return
        }
        this.selects[index] = option
        // this.selects = Object.assign([], this.selects)
        // this.$set(this.selects, index, option)
        this.changeSelectFormat({
          pId: this.$route.params.pId,
          format: this.selects,
          count: this.count
        })
      },
      handleCountChange (currentVal) {
        this.changeSelectFormat({
          pId: this.$route.params.pId,
          format: this.selects,
          count: currentVal
        })
        this.count = currentVal
      },
      fetchData () {
        // fetchProductDetail()
        //   .then(r => {
        //     console.log(r)
        //     const pId = this.$route.params.id
        //     this.productDetail = r[pId]
        //   })
      },
    },
    mounted () {
      // this.fetchData()
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
  .popup {
    width: 100vw;
  }
  .format-btns {
    height: px2rem(50);
    border-top: 1px solid $border_color;
    background-color: #fff;
    display: flex;
    button {
      outline: none;
      background: none;
      height: 100%;
    }
    .back {
      width: px2rem(50);
      border-right: 1px solid $border_color;
    }
    .buyNow, .addToCart {
      flex: 1;
    }
    .addToCart {
      background-color: #b4282d;
      color: #fff;
    }
  }

</style>
