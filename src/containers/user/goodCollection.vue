<template>
    <div id="good-collection">
      <mt-header fixed class="header" title="我的收藏">
        <mt-button @click="$router.go(-1)"  slot="left" icon="back"></mt-button>
        <!--<mt-button icon="more" slot="right"></mt-button>-->
      </mt-header>
        <ul>
            <li>
                <div class="g-l clear">
                    <div class="check check-l">
                        <i class="iconfont icon-xuanzekuangmoren" v-show="!qx"></i>
                        <i class="iconfont icon-xuanzekuangxuanzhong" v-show="qx" style="color:#25b5fe"></i>
                    </div>
                    <div class="g-m">
                        <div class="img-d">
                            <img src="../../../static/imgs/flower.jpg" alt="">
                        </div>
                        <div class="g-t">
                            <div class="g-title">满天星满天星满天星满天星满天星满天星</div>
                            <!--<span class="type">A级</span>-->
                            <div class="bot-p">
                                <span class="price">￥256.00</span>
                                <div>
                                    <span class="bt-sam">找相似</span>
                                    <span class="cart-p"><img src="../../../static/imgs/cart.png" alt=""></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="g-l clear">
                    <div class="check check-l">
                        <i class="iconfont icon-xuanzekuangmoren" v-show="!qx"></i>
                        <i class="iconfont icon-xuanzekuangxuanzhong" v-show="qx" style="color:#25b5fe"></i>
                    </div>
                    <div class="g-m">
                        <div class="img-d">
                            <img src="../../../static/imgs/flower.jpg" alt="">
                        </div>
                        <div class="g-t">
                            <div class="g-title">满天星满天星满天星满天星满天星满天星</div>
                            <!--<span class="type">A级</span>-->
                            <div class="bot-p">
                                <span class="price">￥256.00</span>
                                <div>
                                    <span class="bt-sam">找相似</span>
                                    <span class="cart-p"><img src="../../../static/imgs/cart.png" alt=""></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "goodCollection",
      data(){
          return{
            qx:''
          }
      },
        methods:{
            getGood(){
                this.$ajax.post("openapi.php?act=myFavorites")
                    .then((data)=>{
                        console.log(data)
                    })
            }
        },
        mounted(){
            this.getGood();
        }
    }
</script>

<style lang="scss" scoped>
  @import '../../styles/common.scss';
    #good-collection{
      font-size: px2rem($size_default);
      padding-top: 45px;
    }
    .header{
      background: white;
      color: #515151;
    }
    ul{
        /*background: white;*/
    }
    li{
        padding: 0 0.3rem;
        margin-bottom: 0.2rem;
        background: white;
    }
    .title{
        position: relative;
        padding-top: 0.4rem;
        padding-bottom: 0.4rem;
        border-bottom: 1px solid #dfdfdf;
    }
    .check{
        width: 0.6rem;
        float: left;
        /*height: 2.5rem;*/
        /*line-height: 2.5rem;*/
    }
    .check-l{
        height: 2rem;
        line-height: 2rem;
    }
    .t-text,.g-m{
        width: 8.8rem;
        float: right;
        display: flex;
        justify-content:space-between;
    }
    .img-d img{
      width: 100%;
      height: 100%;
    }
    .clear:after{
        content: " ";
        display: block;
        clear: both;
    }
    .farm-name{
        color: #515151;
    }
    .quan{
        color: #b4272d;
    }
    .img-d{
        width: 2rem;
        height: 2rem;
        background: #232323;
    }
    .g-t{
        padding-left: 0.2rem;
        position: relative;
    }
    .g-l{
        padding-top: 0.2rem;
        padding-bottom: 0.3rem;
        border-bottom: 1px solid #dfdfdf;
    }
    li .g-l:last-child{
        border-bottom: none;
    }
    .type{
        font-size: 12px;
        background-color: #f4f4f4;
        padding: 0 0.2rem;
    }
    .bot-p{
        display: flex;
        justify-content: space-between;
        position: absolute;
        bottom: 0;
        left: 0.2rem;
        width: calc(100% - 0.2rem);
    }
    .price{
        color: #b4272d;
        font-size: 0.35rem;
    }
    .bt-sam{
        border: 1px solid #dfdfdf;
        color: #515151;
        font-size: 0.35rem;
        padding: 0.1rem 0.2rem;
        border-radius: 5px;
        /*margin-right: 0.4rem;*/
      position: absolute;
      bottom: 0rem;
      right: 1rem;
      /*margin-bottom: 0.1rem;*/
    }
  .cart-p img{
    width: 0.6rem;
    height: 0.6rem;
    /*margin-top: 0.2rem;*/
  }
</style>
