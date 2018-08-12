<template>
  <div class="header">
    <div class="header-top">
      <img class="back" src="../../assets/icon/back-black.png" alt="" @click="handleBack">
      <span class="tilte" v-if="titleShow">{{title}}</span>
      <slot name="center" v-else></slot>
      <slot name="btn"></slot>
    </div>
    <div class="header-fill"></div>
  </div>
</template>

<script>
  export default {
    name: 'appHeader',
    props: {
      titleShow: {
        type: Boolean,
        default: true
      },
      title: {
        type:String,
        default: '鲜花商城'
      }
    },
    methods: {
      handleBack() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/common";

  .header-top {
    position: fixed;
    width: 100vw;
    height: $header_height;
    background: #fff;
    z-index: 999;
    .back {
      position: absolute;
      top: 0;
      left: px2rem(5);
      height: px2rem(26);
      padding: px2rem(12);
    }
    .tilte {
      display: inline-block;
      margin-left: 50vw;
      transform: translateX(-50%);
      font-family: '黑体';
      font-size: px2rem($size_big);
      line-height: $header_height;
      color: #000;
    }
  }
  .header-fill {
    height: $header_height;
  }
</style>
