<template>
    <div id="time-shop">
        <mt-header fixed class="header" title="团购">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <!--<mt-button  slot="right">编辑</mt-button>-->
        </mt-header>
        <div class="scrool">
            <ul class="s-ul">
                <li class="s-li">
                    <div class="time">14:00</div>
                    <div class="status">已开抢</div>
                </li>
                <li class="s-li active">
                    <div class="time">14:00</div>
                    <div class="status">已开抢</div>
                </li>
                <li class="s-li">
                    <div class="time">14:00</div>
                    <div class="status">已开抢</div>
                </li>
                <li class="s-li">
                    <div class="time">14:00</div>
                    <div class="status">已开抢</div>
                </li>
                <li class="s-li">
                    <div class="time">14:00</div>
                    <div class="status">已开抢</div>
                </li>
            </ul>
        </div>
        <div class="status-msg">
            <span class="line"></span>
            <span class="text">已经开团</span>
            <!--<span class="line"></span>-->
        </div>
        <ul>
            <li class="g-l">
                <div class="img-d">
                    <img src="../../../static/imgs/flower.jpg">
                </div>
                <div class="msg-d">
                    <div class="title">
                        玫瑰花生日爱情玫瑰花生日爱情玫瑰花生日爱情玫瑰花生日爱情
                    </div>
                    <div class="msg">
                        <span class="num-g">仅剩100件</span>
                        <span class="cent-g">好评率：100%</span>
                    </div>
                    <div class="price">
                        <span class="normal-p">￥288</span>
                        <del>￥588.00</del>
                        <span class="button">马上抢</span>
                    </div>
                </div>
            </li>
            <li class="g-l">
                <div class="img-d">
                    <img src="../../../static/imgs/flower.jpg">
                </div>
                <div class="msg-d">
                    <div class="title">
                        玫瑰花生日爱情玫瑰花生日爱情玫瑰花生日爱情玫瑰花生日爱情
                    </div>
                    <div class="msg">
                        <span class="num-g">仅剩100件</span>
                        <span class="cent-g">好评率：100%</span>
                    </div>
                    <div class="price">
                        <span class="normal-p">￥288</span>
                        <del>￥588.00</del>
                        <span class="button">马上抢</span>
                    </div>
                </div>
            </li>
            <li class="g-l">
                <div class="img-d">
                    <img src="../../../static/imgs/flower.jpg">
                </div>
                <div class="msg-d">
                    <div class="title">
                        玫瑰花生日爱情玫瑰花生日爱情玫瑰花生日爱情玫瑰花生日爱情
                    </div>
                    <div class="msg">
                        <span class="num-g">仅剩100件</span>
                        <span class="cent-g">好评率：100%</span>
                    </div>
                    <div class="price">
                        <span class="normal-p">￥288</span>
                        <del>￥588.00</del>
                        <span class="button">马上抢</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import { Header } from 'mint-ui';
    export default {
        name: "timeShop"
    }
</script>

<style scoped>
#time-shop{
    font-size: 0.45rem;
    padding-top: 45px;
    /*background: white;*/
}
.img-d img{
    width: 100%;
    height: 100%;
}
.header{
    background: white;
    color: #515151;
}
    .scrool{
        width: 100%;
        overflow-x: scroll;
        overflow-y:hidden;
        height: 1.7rem;
    }
    .s-ul{
        display: flex;
        flex-wrap: nowrap;
    }
    .s-li{
        width: 2.267rem;
        height: 1.48rem;
        background-color: #f7e0c1;
        color: #515151;
        position: relative;
        flex-shrink:0;
    }
    .time,.status{
        font-size: 0.35rem;
        text-align: center;
        /*line-height: 0.74rem;*/
    }
    .time{
        padding-top: 0.2rem;
    }
    .status{
        padding-top: 0.1rem;
    }
    .s-li:before{
        content: ' ';
        display: block;
        height: 80%;
        border-left: 1px solid #e2ceb4;
        right: 0;
        top: 10%;
        position: absolute;
    }
    .active{
        background-color: #f49018;
        color: white;
    }
    .active:after{
        content: ' ';
        display: block;
        border:0.2rem solid #f00283;
        border-color: #f49018 transparent transparent transparent;
        position: absolute;
        bottom: -0.4rem;
        left: calc(50% - 0.2rem);
        z-index: 500;
    }
    .status-msg{
        /*display: flex;*/
        /*justify-content:center;;*/
        width: 100%;
        height: 1.5rem;
        line-height: 1.5rem;
        position: relative;
        background: white;
        text-align: center;
        margin-top: -0.2rem;
    }
    .status-msg span{
        display: inline-block;
    }
    .line{
        border-top: 1px solid #dfdfdf;
        width: 9rem;
        height: 0;
        position: absolute;
        left: 0.5rem;
        top: 50%;
        z-index: 0;
    }
    .text{
        line-height: 1.5rem;
        padding: 0 0.5rem;
        margin: 0 auto;
        z-index: 500;
        font-size: 0.35rem;
        position: relative;
        background: white;
        color: #515151;
    }
    .g-l{
        margin-top: 0.15rem;
        padding: 0.13rem  0.35rem;
        display: flex;
        background: white;
    }
    .img-d{
        width: 3.48rem;
        height: 3.213rem;
        /*background-color: #6a005f;*/
        flex-shrink: 0;
    }
    .msg-d{
        padding-left: 0.15rem;
        font-size: 0.4rem;
    }
    .title{
        font-size: 0.42rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        line-height: 0.65rem;
    }
    .msg{
        padding: 0.2rem 0;
    }
    .msg span{
        display: inline-block;
        font-size: 12px;
        padding: 0 0.2rem;
        background-color: #f4f4f4;
        border-radius: 3px;
    }
    .price del{
        color: #7f7f7f;
        font-size: 12px;
    }
    .normal-p{
        font-size: 0.45rem;
        color: #b4272d;
    }
    .button{
        display: inline-block;
        width: 1.467rem;
        height: 0.533rem;
        background-color: #f49018;
        border-radius: 0.133rem;
        color: white;
        text-align: center;
        font-size: 0.3rem;
        line-height: 0.533rem;
        position: absolute;
        right: 0;
    }
    .price{
        position: relative;
    }
    .num-g{
        color: #f49018;
    }
</style>
