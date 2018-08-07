<template>
  <div class="home-swiper">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(list,index) in swiper" :key="index">
        <img :src="list.img">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default {
    name: "HomeSwipe",
    data() {
      return {
        swiper: [
          {
            img: "https://shopstatic.vivo.com.cn/vivoshop/commodity/20180418/20180418104131830678_original.jpg"
          },
          {
            img: "https://shopstatic.vivo.com.cn/vivoshop/commodity/20180430/20180430232146894398_original.jpg"
          }
        ]
      }
    }
  }
</script>


<style lang="stylus">
  .home-swiper
    height 5.3rem;
    margin-top 1px;
    img
      width 100%;
      height 6.5rem
  .mint-swipe-indicators
    left 80%
  .mint-swipe-indicator.is-active {
    background red
  }
</style>
