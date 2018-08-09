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
                    <div class="check">
                        <i class="iconfont icon-xuanzekuangmoren" v-show="!qx"></i>
                        <i class="iconfont icon-xuanzekuangxuanzhong" v-show="qx" style="color:#25b5fe"></i>
                    </div>
                    <div class="g-m">
                        <div class="img-d">
                            <img src="" alt="">
                        </div>
                        <div class="g-t">
                            <div class="g-title">满天星满天星满天星满天星满天星满天星</div>
                            <span class="type">A级</span>
                            <div class="bot-p"><span>￥1547.70</span><span class="button-s">1</span></div>
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
    ul{
        background: white;
    }
    li{
        padding: 0 0.3rem;
    }
    .title{
        position: relative;
        padding-top: 0.4rem;
    }
    .check{
        width: 0.6rem;
        float: left;
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
        width: 1.5rem;
        border: solid 1px #c1c8ca;
        border-radius: 0.15rem;
    }
</style>
