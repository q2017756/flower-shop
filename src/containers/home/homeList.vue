<template>
  <div class="home-list">
    <span class="title-line">{{ title }}</span>
    <div class="box">
      <div class="item" v-for="(item,index) in list" :key="index" @click="handleDetail(item)">
        <div class="img-container">
          <img :src="item.thumbnail_pic" alt="">
        </div>
        <div class="text-container">
          <p class="name">{{ item.store_name }}</p>
          <p class="desc">{{ item.name }}</p>
          <p class="price">￥{{ item.price }}</p>
        </div>
      </div>
    </div>
    <div class="more" @click="handleList(title)">查看更多{{title}}</div>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    props: {
        list: Array,
      title: {
        type: String,
        default: '王牌切花'
      }
    },
    methods: {
      handleDetail(item) {
        this.$emit('handleDetail',item.goods_id)
      },
        handleList(name) {
            localStorage.setItem('productList',JSON.stringify({
                catId: '',
                tagId: '',
                keywords: name
            }))
          this.$router.push('/productList')
        }

    },
  }
</script>
<style lang="scss" scoped>
  @import '../../styles/common.scss';

  .home-list {
    width: 100vw;
    background: #fff;
    margin-bottom: $edge_small;
    padding: 0 $edge_default;
    text-align: center;
    color: $text_color;
  }

  .box {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    margin-left: 1px;
    .item {
      width: 33%;
    }
    .img-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: px2rem(125);
      margin: px2rem(10) 0 px2rem(10) -1px;
      border: 1px solid #eee;
      img {
        width: 90%;
          max-height: 90%;
      }
    }
    .text-container {
      text-align: left;
      .name {
        font-size: px2rem($size_small);
      }
      .desc {
        margin-left: -10px;
        font-size: px2rem($size_small);
        transform: scale(.85);
      }
      .price {
        font-size: px2rem($size_small);
        color: $red_default;
      }
    }
  }

  .more {
    display: inline-block;
    margin: px2rem(10) auto 0 auto;
    padding: px2rem(10);
    font-size: px2rem($size_small);
  }
</style>



