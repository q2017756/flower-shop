<template>
    <div id="cart">
        <ul>
            <li>
                <div class="title clear">
                    <div class="check">
                        <i class="iconfont icon-xuanzekuangmoren" v-show="!qx"></i>
                        <i class="iconfont icon-xuanzekuangxuanzhong" v-show="qx" style="color:#25b5fe"></i>
                    </div>
                    <div class="t-text">
                        <span class="farm-name">花知农场农场</span>
                        <span class="quan">优惠券</span>
                    </div>
                </div>
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
                            <span class="type">A级</span>
                            <div class="bot-p"><span class="button-s"><span >-</span><input  type="number"><span >+</span></span><span class="b-pr">￥1547.70</span></div>
                        </div>
                    </div>
                </div>
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
                            <span class="type">A级</span>
                            <div class="bot-p"><span class="button-s"><span >-</span><input  type="number"><span >+</span></span><span class="b-pr">￥1547.70</span></div>
                        </div>
                    </div>
                </div>
            </li>
          <li>
            <div class="title clear">
              <div class="check">
                <i class="iconfont icon-xuanzekuangmoren" v-show="!qx"></i>
                <i class="iconfont icon-xuanzekuangxuanzhong" v-show="qx" style="color:#25b5fe"></i>
              </div>
              <div class="t-text">
                <span class="farm-name">花知农场农场</span>
                <span class="quan">优惠券</span>
              </div>
            </div>
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
                  <span class="type">A级</span>
                  <div class="bot-p"><span class="button-s"><span >-</span><input  type="number"><span >+</span></span><span class="b-pr">￥1547.70</span></div>
                </div>
              </div>
            </div>
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
                  <span class="type">A级</span>
                  <div class="bot-p"><span class="button-s"><span >-</span><input  type="number"><span >+</span></span><span class="b-pr">￥1547.70</span></div>
                </div>
              </div>
            </div>
          </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "cartindex",
        data(){
            return{
                qx:false,
            }
        }
    }
</script>

<style scoped>
#cart{
    font-size: 0.4rem;
}
.img-d img{
  width: 100%;
  height: 100%;
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
        text-align: right;
    }
    .button-s{
        display: inline-block;
        height:0.5rem ;
        width: 1.8rem;
        border: solid 1px #c1c8ca;
        border-radius: 0.15rem;
        float: right;
        display: flex;
    }
    .b-pr{
        display: inline-block;
        height:0.5rem ;
        float: right;
        padding-right: 0.3rem;
    }
    .button-s span{
        display: inline-block;
        text-align: center;
        line-height: 0.5rem;
        width: 0.5rem;
    }
    .button-s input{
        text-align: center;
        width: 0.8rem;
        border-left: solid 1px #c1c8ca;
        border-right: solid 1px #c1c8ca;
    }
</style>
