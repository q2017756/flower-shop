<template>
  <div class="message">
    <app-header title="消息盒子"></app-header>
    <div class="message-container">
      <div class="text-center">
        <span class="title-line">优惠促销</span>
      </div>
      <div class="item" v-for="n in 5" :key="n">
        <p class="title">七夕特惠</p>
        <img src="../../assets/img/farm.png" alt="">
        <p class="font-smaller">满100减50</p>
      </div>
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
    methods: {},
  }
</script>
<style lang="scss" scoped>
  @import '../../styles/common';

  .message-container {
    .title-line {
      margin: px2rem(15);
    }
    .item {
      margin-bottom: $edge_small;
      padding: $edge_small $edge_default;
      background: #fff;
      .title {
        @include ellipsis;
        margin-bottom: px2rem(4);
        font-size: px2rem($size_default);
        color: $text_color;
      }
      img {
        width: 100%;
        height: px2rem(160);
      }
      .font-smaller {
        @include ellipsis;
        margin-left: -39px;
      }
    }
  }

</style>



