<template>
   <div class="home-list">
     <span class="title">{{ title }}</span>
     
   </div>
</template>
<script>
  export default {
    data() {
      return {


      }
    },
    props: {
      title:{
        type: String,
        default: '王牌切花'
      }
    },
    methods: {
    },
  }
</script>
<style lang="stylus" scoped>

  .home-list
    width 100vw
    background #fff
    margin 5px 0
    text-align center
    .title
      position relative
      display inline-block
      margin 3vh auto
      font-size .45rem
      &:after
        content: '';
        position: absolute;
        top: 50%;
        left: -50%;
        display: block;
        width: 8vw;
        height: 1px;
        border-bottom: 1px solid #000;
      &:before
        content: '';
        position: absolute;
        top: 50%;
        right: -50%;
        display: block;
        width: 8vw;
        height: 1px;
        border-bottom: 1px solid #000;

    li
        width: 25%;
        height 100%;
        float: left;
        margin: auto;
        div
            width: 1.58rem;
            height: 1.59rem;
            margin: auto;
        img
            display: block;
            width: 100%;
            height: 100%
</style>



