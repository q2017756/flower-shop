<template>
  <div class="home">
    <div class="header">
      <div class="header-top">
        <img class="home-logo" src="/static/img/home-logo.png" alt="">
        <input class="search-input" type="text" placeholder="玫瑰">
        <img class="home-msg" src="/static/img/icon/message.png" alt="">
      </div>
      <div>

      </div>
    </div>

    <!--<div class="Homeheader"><i class="iconfont icon-VIVO"></i></div>-->
    <div class="official"><img src="/static/img/official.png" alt="图片" style="width: 100%;height:100%"></div>
    <Home-Swipe></Home-Swipe>
    <Home-List></Home-List>
    <Home-Container :todos="todos"></Home-Container>
    <Home-Footer></Home-Footer>
  </div>

</template>

<script>
  import {mapState, mapMutations, mapGetters} from 'vuex'
  import {Swipe, SwipeItem} from 'mint-ui'
  import {MessageBox} from 'mint-ui'
  import HomeSwipe from './component/HomeSwipe'
  import HomeList from './component/HomeList'
  import HomeContainer from './component/HomeContainer'
  import HomeFooter from '../../pages/footer'
  import axios from 'axios'

  export default {
    name: "Home",
    data() {
      return {
        todos: []
      }
    },
    components: {
      HomeSwipe,
      HomeList,
      HomeContainer,
      HomeFooter
    },
    mounted: function () {
      this.getData()
    },
    methods: {
      getData: function () {
        var _this = this
        axios.get("/static/ceshi.json").then(function (res) {
          console.log(res)
          _this.todos = res.data.data.home
        })
      }
    }
  }
</script>

<style lang="stylus">
  .home
    border-bottom 10px

  .header
    background #fff
    position fixed
    width 100vw
    top 0
    padding .2rem .3rem
    z-index 1
    .header-top
      display flex
      justify-content space-between
      align-items center
      .home-logo
        width 1.2rem
      .search-input
        flex 1
        background #f4f4f4
        color #000
        margin 0 .3rem
        padding .3rem .4rem .3rem 1rem
        background-image url("/static/img/icon/search.png")
        background-repeat no-repeat
        background-size .6rem
        background-position .2rem
        border 1px solid #e3e3e3
        border-radius 6px
        font-size 0.35rem
        outline none
      .home-msg
        width .8rem
    .header-bottom
      background red



  .Homeheader i {
    font-size: 0.55rem;
  }

  .Homeheader {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;
    height: 1.3rem;
    line-height: 1.3rem;
    font-size: 0.35rem;
    padding-left: 0.3rem;
    background: white;
  }

  .swipe {
    height: 6.5rem;
    margin-top: 1px;
  }

  .swipe img {
    width: 100%;
    height: 6.5rem;
  }

  .official {
    width: 100%;
    height: 0.8rem;
    background: white;
    margin-top: 5rem;
  }
</style>

