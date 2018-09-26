<template>
  <div class="c-container">
    <carousel v-bind:pics="imgs" :imgsDetail="imgsDetail" />
    <ul class="cc-bottom">
      <li><i/><span>基地直供</span></li>
      <li><i/><span>精选优品</span></li>
      <li><i/><span>售后保障</span></li>
    </ul>
  </div>
</template>

<script>
    import carousel from '@/components/common/carousel'
    export default {
      props: ['imgs','imgsDetail'],
      components: { carousel }
    }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  .c-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: px2rem(218);
    margin-bottom: px2rem(5);
  }
  .cc-bottom {
    display: flex;
    justify-content: space-between;
    height: px2rem(36);
    background-color: #fff;
    padding: 0 px2rem(15);
  }

  .cc-bottom li {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  .cc-bottom li i {
    background: url('../../assets/icon/fine.png');
    background-size: cover;
    width: px2rem(16);
    height: px2rem(16);
  }

  .cc-bottom li span {
    display: inline-block;
    font-size: px2rem($size_small);
    line-height: px2rem(16);
    margin-left: px2rem(4);
  }
</style>
