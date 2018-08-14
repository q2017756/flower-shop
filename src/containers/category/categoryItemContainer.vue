<template>
  <div class="category-item-container">
    <div class="cic-header-pic" v-bind:style="{backgroundImage: 'url(' + section.section.pic + ')'}"></div>
    <!--<div class="cic-separator">-->
      <!--<span>{{ section.section.name }}分类</span>-->
    <!--</div>-->
    <!--<div class="category-items">-->
      <!--<category-item v-for="category in section.categories" v-bind:key="category.subCategoryId" v-bind:category="category" class="category-item" v-on:click.native="handleItemClick(category)" />-->
    <!--</div>-->
    <div class="title">{{ section.section.name }}品种</div>
    <div class="item-container">
      <span @click="handleList">全部</span>
      <span @click="handleList">玫瑰1</span>
      <span @click="handleList">玫瑰2</span>
      <span @click="handleList">玫瑰3</span>
      <span @click="handleList">玫瑰3</span>
    </div>
    <div class="title">{{ section.section.name }}颜色</div>
    <div class="item-container">
      <span @click="handleList">全部</span>
      <span @click="handleList">红色</span>
      <span @click="handleList">黄色</span>
      <span @click="handleList">蓝色</span>
      <span @click="handleList">绿色</span>
    </div>
    <div class="title">支数</div>
    <div class="item-container">
      <span @click="handleList">1支</span>
      <span @click="handleList">2支</span>
      <span @click="handleList">9支</span>
      <span @click="handleList">99支</span>
      <span @click="handleList">999支</span>
    </div>
  </div>
</template>

<script>
  import categoryItem from '@/components/category/categoryItem'
  export default {
    props: ['section', 'handleClick'],
    components: {
      categoryItem
    },
    methods: {
      handleItemClick (commodity) {
        this.handleClick(this.section.section, commodity)
      },
      handleList() {
        this.$router.push('productList')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  .category-item-container {
    flex: 1;
    height: 100%;
    overflow-y: auto;
    /*padding: px2rem(15);*/
    background: #fff;
  }

  .cic-header-pic {
    width: 100%;
    height: px2rem(120);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .cic-separator {
    height: px2rem(54);
    line-height: px2rem(54);
    text-align: center;
  }

  .cic-separator span {
    font-size: px2rem($size_small);
    position: relative;
    &::before {
      left: - px2rem(28);
    }
    &::after {
      right: - px2rem(28);
    }
    &::before, &::after {
      position: absolute;
      content: '';
      top: 0;
      bottom: 0;
      margin: auto;
      height: 1px;
      width: px2rem(20);
      background-color: #d9d9d9;
      // 更改一个元素的变形原点
      transform-origin: 50% 100% 0;
    }
  }

  .category-items {
    display: flex;
    flex-wrap: wrap;
  }

  .category-item:nth-child(3n) {
    margin-right: 0;
  }
  .title {
    font-size: px2rem($size_default);
    background: #f4f4f4;
    color: #666;
    padding: $edge_default $edge_default $edge_small $edge_default;
  }
  .item-container {
    background: #fff;
    padding: px2rem(12);
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    span {
      padding: px2rem(8) px2rem(12);
      color: #666;
    }
  }

</style>
