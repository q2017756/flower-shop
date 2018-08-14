<template>
  <div class="home-page">
    <header>
      <div class="header-top">
        <img class="home-logo" src="../../assets/img/home-logo.png" alt="">
        <input class="search-input" type="text" placeholder="玫瑰"   @click="handleSearch">
        <img class="home-msg" src="../../assets/icon/message.png" alt=""  @click="handleMessage">
      </div>
      <segment :titles="titles" :handleClick="handleChange" :currentTitle="current"/>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
  import {fetchHome} from '@/utils/fetchData'
  import segment from '@/components/common/segment'
  import { Toast } from 'mint-ui';

  export default {
    name: 'home',
    components: {
      segment
    },
    data() {
      return {
        titles: ['全部', '牡丹花', '玫瑰', '绣球', '菊花', '洋桔梗', '向日葵', '花', '草', '树'],
        categoryId: ['', '1000001', '1000002', '1000003', '1000004', '1000005', '1000006', '1000007', '1000008', '1000009'],
        data: {}
      }
    },
    computed: {
      current() {
        const index = this.categoryId.indexOf(this.$route.params.cId)
        return this.titles[index]
      }
    },
    methods: {
      handleSearch() {
        this.$router.push('/search')
      },
      handleMessage() {
        this.$router.push('/message')
      },
      handleChange(title) {
        console.log('click at ', title)
        this.$router.push('/productList')
        // Toast(title);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/common.scss';

  .home-page {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: px2rem(5) $edge_default;
    .home-logo {
      width: px2rem(43);
    }
    .home-msg {
      width: px2rem(23);
    }
  }

  .home-content {
    flex: 1;
    overflow-y: auto;
  }

</style>
