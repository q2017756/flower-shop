<template>
  <router-link class="ng-item" v-bind:to="toPath">
    <div class="ng-item-specification" v-if="good.specification">{{ good.specification }}</div>
    <img class="ng-item-pic" v-bind:src="good.pic"/>
    <h6 class="ng-item-name">{{ good.title }}</h6>
  </router-link>
</template>

<script>
  export default {
    // activity type: 0 爆款  type: 1 优惠
    props: ['good'],
    computed: {
      toPath() {
        return '/farm'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';

  .ng-item {
    width: px2rem(240);
    margin-left: px2rem(15);
    position: relative;
    .ng-item-specification {
      position: absolute;
      top: 0;
      margin: px2rem(8) 0 0 px2rem(10);
      color: #b4a078;
      border: 1px solid #b4a078;
      border-radius: px2rem(2);
      writing-mode: vertical-lr;
      font-size: px2rem($size_small);
      padding: px2rem(3) 0;
    }
    .ng-item-pic {
      height: px2rem(150);
    }
    .ng-item-name {
      @include ellipsis;
      font-size: px2rem($size_small);
      color: $dark_text_color;
      font-weight: normal;
      line-height: px2rem(17);
      padding: 0 px2rem(5);
      margin: px2rem(10) 0 px2rem(5);
    }
  }
</style>
