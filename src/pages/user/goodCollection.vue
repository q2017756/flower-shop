<template>
    <div id="good-collection">
        <ul>
            <li>
                <div class="g-l clear">
                    <div class="check check-l">
                        <i class="iconfont icon-xuanzekuangmoren" v-show="!qx"></i>
                        <i class="iconfont icon-xuanzekuangxuanzhong" v-show="qx" style="color:#25b5fe"></i>
                    </div>
                    <div class="g-m">
                        <div class="img-d">
                            <img src="" alt="">
                        </div>
                        <div class="g-t">
                            <div class="g-title">满天星满天星满天星满天星满天星满天星</div>
                            <!--<span class="type">A级</span>-->
                            <div class="bot-p">
                                <span class="price">￥256.00</span>
                                <div>
                                    <span class="bt-sam">找相似</span>
                                    <span class="cart-p">购物</span>
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
                            <img src="" alt="">
                        </div>
                        <div class="g-t">
                            <div class="g-title">满天星满天星满天星满天星满天星满天星</div>
                            <!--<span class="type">A级</span>-->
                            <div class="bot-p">
                                <span class="price">￥256.00</span>
                                <div>
                                    <span class="bt-sam">找相似</span>
                                    <span class="cart-p">购物</span>
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
        name: "goodCollection"
    }
</script>

<style scoped>
    #good-collection{
        font-size: 0.4rem;
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
        margin-right: 0.4rem;
    }
</style>
