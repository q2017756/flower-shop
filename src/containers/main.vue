<template>
  <div id="main">
    <router-view class="content"></router-view>
    <tabbar :items="items" />
  </div>
</template>

<script>
  import tabbar from '@/components/tabbar'
  export default {
    components: {
      tabbar
    },
    computed: {
      items () {
        const barItems = [
          { title: '首页', icon:`home`, selectedIcon: `home-active`, to: '/home' },
          { title: '农场', icon: `farm`, selectedIcon: `farm-active`, to: '/farm' },
          { title: '分类', icon: `category`, selectedIcon: `category-active`, to: '/category' },
          { title: '购物车', icon: `cart`, selectedIcon: 'cart-active', to: '/cart', badge: this.$store.getters.cartCommodityCount },
          { title: '我的', icon: `me`, selectedIcon: `me-active`, to: '/profile' }
        ]
        return barItems
      }
    }
  }
</script>

<style lang="scss" scoped>
  #main {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  .content {
    flex: 1;
  }
</style>
