<template>
  <div class="search-page">
    <app-header :titleShow="false">
      <input slot="center" class="search-input center" type="text" placeholder="玫瑰"/>
      <span slot="btn" class="search-btn" @click="handleProdList">搜索</span>
    </app-header>

    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="1">商品</mt-tab-item>
      <mt-tab-item id="2">农场</mt-tab-item>
    </mt-navbar>

    <div class="search-hot">
      <p class="title">热搜中</p>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <div v-for="hot in hotSearchs" v-bind:key="hot.title"
               v-bind:class="['hot-item', hot.highlight ? 'highlight' : '']"
               @click="handleProdList">{{ hot.title }}
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <div v-for="hot in hotSearchs" v-bind:key="hot.title"
               v-bind:class="['hot-item', hot.highlight ? 'highlight' : '']"
               @click="handleProdList">{{ hot.title }}1
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <p class="history-title">历史搜索</p>
    <div class="history">
      <mt-cell v-for="n in 10" :title="'历史 ' + n" :key="n" @click="handleProdList"/>
    </div>
    <div class="clear-btn">清空历史记录</div>


  </div>
</template>

<script>
  import appHeader from '@/components/common/appHeader'

  export default {
    data() {
      return {
        hotSearchs: [
          {title: '玫瑰', highlight: true},
          {title: '菊花', highlight: true},
          {title: '康乃馨', highlight: false},
          {title: '荷花', highlight: false},
          {title: '鲜花小镇', highlight: true},
          {title: '全场8折', highlight: true},
          {title: '618', highlight: false}
        ],
        selected: '1'
      }
    },
    components: {
      appHeader
    },
    methods: {
      handleProdList() {
        this.$router.push('productList');
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/common.scss';

  .search-page {
    background-color: #fff;
    width: 100%;
    .search-input.center {
      display: inline-block;
      width: 70vw;
      margin: px2rem(8) 0 0 50vw;
      transform: translateX(-50%);
    }
    .search-btn {
      position: absolute;
      top: 0;
      right: 0;
      padding: 0 px2rem(12);
      line-height: $header_height;
      font-size: px2rem($size_default);
    }
  }

  .mint-navbar {
    background: #f4f4f4;
    font-size: px2rem($size_big);
    .mint-tab-item {
      padding: px2rem(12) 0;
      border-right: 1px solid #eee;
      &.is-selected {
        border-bottom: 2px solid $red_default;
        color: $red_default;
        margin-bottom: -2px;
      }
    }
  }

  .mint-tab-container-item {
    display: flex;
    flex-wrap: wrap;
  }

  .search-hot {
    padding: 0 0 0 px2rem(15);
    border-bottom: $edge_small solid #f4f4f4;
    .title {
      height: px2rem(45);
      line-height: px2rem(45);
      color: #000;
      font-size: px2rem($size_default);
      font-weight: normal;
    }
    .hot-item {
      color: #333;
      border: 1px solid #999;
      border-radius: 5px;
      padding: 0 px2rem(7.5);
      line-height: px2rem(23);
      font-size: px2rem($size_small);
      margin: 0 px2rem(16) px2rem(16) 0;
    }

    .highlight {
      color: #b4282d;
      border-color: #b4282d;
    }
  }

  /*.search-hot-content {*/
  /*display: flex;*/
  /*flex-wrap: wrap;*/
  /*}*/

  .history-title {
    height: px2rem(45);
    line-height: px2rem(45);
    color: #000;
    margin: 0 px2rem(15) px2rem(5) px2rem(15);
    border-bottom: 1px solid #eee;
    font-size: px2rem($size_default);
    font-weight: normal;
  }
  .history {
    height: 40vh;
    overflow-y: scroll;
  }

  .mint-cell-wrapper {
    margin: 0 px2rem(15);
    border-bottom: 1px solid #eee;
  }

  .clear-btn {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: $header_height;
    background: $red_default;
    font-size: px2rem($size_default);
    color: #fff;
    text-align: center;
    line-height: $header_height;
  }
</style>
