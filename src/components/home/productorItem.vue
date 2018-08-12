<template>
  <router-link class="productor-item" v-bind:to="toPath">
    <img v-bind:src="productor.pic" />
    <p>{{ productor.title }}</p>
  </router-link>
</template>

<script>
  export default {
    props: ['productor'],
    computed: {
      toPath () {
        return `/farmDetail`
      }
    }
  }
</script>

<style lang="scss">
  @import '../../styles/mixin.scss';
  .productor-item {
    @include flex_default;
    flex-direction: column;
    justify-content: space-around;
    width: 50vw;
    height: px2rem(155);
    margin: -1px -1px 0 0;
    padding: px2rem(5);
    position: relative;
    border: 1px solid #eee;
    border-right: none;
    img {
      display: inline-block;
      width: 90%;
      height: 80%;
    }
    p {
      color: #666;
    }
  }
  .productor-item .content {
    position: absolute;
    top: 0;
    left: 0;
    padding: px2rem(10) 0 0 px2rem(10);
    font-size: px2rem($size_middle);
    color: $dark_text_color;
  }

  .productor-item .manufacturer{
    margin-bottom: px2rem(3);
    // 超出显示...
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-weight: normal;
    line-height: 14px;
  }

  .productor-item .new {
    display: inline-block;
    background: url('../../assets/icon/new.png') no-repeat 0 0;
    background-size: cover;
    width: px2rem(32);
    height: px2rem(16);
    margin-top: px2rem(5);
  }

</style>
