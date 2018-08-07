<template>
  <div class="home">
    <div class="header">
      <div class="header-top">
        <img class="home-logo" src="/static/img/home-logo.png" alt="">
        <input class="search-input" type="text" placeholder="玫瑰">
        <img class="home-msg" src="/static/img/icon/message.png" alt="">
      </div>
      <div class="header-bottom">
        <ul>
          <li class="active">牡丹花</li>
          <li>玫瑰</li>
          <li>绣球</li>
          <li>菊花</li>
          <li>洋桔梗</li>
          <li>向日葵</li>
        </ul>
        <img src="/static/img/icon/fine.png" alt="">
      </div>
    </div>
    <div class="fill"></div>
    <Home-Swipe></Home-Swipe>
    <div class="fine-text">
      <div>
        <img src="/static/img/icon/fine.png" alt="">
        <span>基地直供</span>
      </div>
      <div>
        <img src="/static/img/icon/fine.png" alt="">
        <span>精品优选</span>
      </div>
      <div>
        <img src="/static/img/icon/fine.png" alt="">
        <span>售后保障</span>
      </div>
    </div>


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
    font-size .35rem
  .header
    background #fff
    position fixed
    width 100vw
    top 0
    padding .2rem .3rem .1rem .3rem
    z-index 1
    .header-top
      display flex
      justify-content space-between
      align-items center
      height 66.6px
      .home-logo
        width 1.1rem
      .search-input
        flex 1
        background #f4f4f4
        color #000
        margin 0 .3rem
        padding .15rem .4rem .15rem 1rem
        background-image url("/static/img/icon/search.png")
        background-repeat no-repeat
        background-size .5rem
        background-position .3rem .15rem
        border 1px solid #e3e3e3
        border-radius 6px
        font-size 0.35rem
        outline none
      .home-msg
        width .65rem
    .header-bottom
      display flex
      justify-content space-around
      align-items center
      height 33.3px
      font-size 16px
      ul
        flex 1
        display flex
        justify-content space-between
        align-items center
        margin-right .5rem
        li
          position relative
          &.active
            color red
          &.active:after
            content ''
            position absolute
            top 30px
            margin-left -15%
            display block
            width 130%
            height 1px
            border-bottom 2px solid red

  .fill
    width 100vw
    height 99px

  .fine-text
    display flex
    justify-content space-between
    align-items center
    background #fff
    padding .2rem .4rem
    div
      display flex
      align-items center
    img
      width .4rem
      margin-right .1rem

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

