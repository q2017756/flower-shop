<template>
  <div class="product-item" @click="handleDetail">
    <div class="img-container">
      <img src="../../assets/img/flower-img.png" alt="">
    </div>
    <div class="info">
      <p class="title">向日葵鲜花生日花束生日花束生日花束</p>
      <slot name="desc"></slot>
    </div>
  </div>
</template>
<script>

  export default {
    data() {
      return {}
    },
    props: {
    },
    components: {
    },
    methods: {
      handleDetail() {
        this.$emit('handleDetail')
      }
    },
  }
</script>
<style lang="scss" scoped>
  @import '../../styles/common';

  .product-item {
    display: flex;
    height: px2rem(125);
    padding: $edge_small $edge_default;
    background: #fff;
    margin-bottom: $edge_small;
    .img-container {
      @include flex_default;
      justify-content: center;
      width: px2rem(120);
      margin-right: px2rem(20);
      overflow: hidden;
      img {
        width: px2rem(100);
        height: px2rem(120);
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      margin-top: $edge_default;
      .title {
        height: px2rem(44);
        line-height: px2rem(22);
        overflow: hidden;
      }
    }
  }


</style>



