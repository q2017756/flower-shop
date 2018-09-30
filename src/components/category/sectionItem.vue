<template>
  <div class="section-item">
    <p v-bind:class="['section-name', isSelected ? 'selected' : '']">{{ section.cat_name }}</p>
  </div>
</template>

<script>
  export default {
    props: ['section', 'isSelected']
  }
</script>

<style lang="scss">
  @import '../../styles/mixin.scss';
  /*.section-item {*/
    /*width: 100%;*/
    /*height: px2rem(25);*/
    /*padding: px2rem(20) 0;*/
    /*border-bottom: 1px solid #eee;*/
  /*}*/
  /*.section-item .selected {*/
    /*background: #f4f4f4;*/
  /*}*/
  .section-item .section-name {
    padding: px2rem(15) 0;
    font-size: px2rem($size_middle);
    text-align: center;
    @include ellipsis;
  }

  .section-item .selected {
    color: #ab2b2b;
    position: relative;
    background: #f4f4f4;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: px2rem(3);
      background-color: #ab2b2b
    }
  }
</style>
