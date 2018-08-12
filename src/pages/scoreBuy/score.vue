<template>
    <div id="score">
        <mt-header fixed class="header" title="积分换购">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <!--<mt-button  slot="right">编辑</mt-button>-->
        </mt-header>
        <div class="score">
            <div>可用积分：400</div>
            <div>签到领积分</div>
        </div>
        <ul>
            <li>
                <div class="img-d">
                    <img src="../../assets/img/flower.jpg" alt="">
                </div>
                <div class="msg-d">
                    <div class="title">向日葵花向日葵花花向日葵花花向日葵花花向日葵花花向日葵花花向日葵花花花</div>
                    <div class="b-d">
                        <div class="price">￥0.00+100积分</div>
                        <del>￥100</del>
                        <div class="text">562人想买</div>
                        <div class="button">立即换购</div>
                    </div>
                </div>
            </li>
            <li>
                <div class="img-d">
                    <img src="../../assets/img/flower.jpg" alt="">
                </div>
                <div class="msg-d">
                    <div class="title">向日葵花向日葵花花向日葵花花向日葵花花向日葵花花向日葵花花向日葵花花花</div>
                    <div class="b-d">
                        <div class="price">￥0.00+100积分</div>
                        <del>￥100</del>
                        <div class="text">562人想买</div>
                        <div class="button">立即换购</div>
                    </div>
                </div>
            </li>
            <li>
                <div class="img-d">
                    <img src="../../assets/img/flower.jpg" alt="">
                </div>
                <div class="msg-d">
                    <div class="title">向日葵花向日葵花花向日葵花花向日葵花花向日葵花花向日葵花花向日葵花花花</div>
                    <div class="b-d">
                        <div class="price">￥0.00+100积分</div>
                        <del>￥100</del>
                        <div class="text">562人想买</div>
                        <div class="button">立即换购</div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import { Header } from 'mint-ui';
    export default {
        name: "score"
    }
</script>

<style scoped>

    #score{
        padding-top: 45px;
    }
    .header{
        background: white;
        color: #515151;
    }
    .img-d img{
        width: 100%;
        height: 100%;
    }
.score{
    display: flex;
    background-color: #b2a078;

}
    .score div{
      width: 50%;
        height: 1.333rem;
        text-align: center;
        line-height: 1.333rem;
        color: white;
        font-size: 0.4rem;
        position: relative;
    }
    .score div:first-child:after{
        content: ' ';
        display: block;
        height: 80%;
        position: absolute;
        border-left: 1px solid white;
        top: 10%;
        right: 0;
    }
    li{
        background: white;
        padding: 0.26rem;
        display: flex;
        margin-top: 0.2rem;
    }
    .img-d{
        width: 4.567rem;
        height: 4.68rem;
        /*background-color: #697174;*/
        box-shadow: 0rem 0.027rem 0.067rem 0rem
        rgba(31, 38, 49, 0.1);
    }
    .msg-d{
        width: 5rem;
        height: 100%;
        font-size: 0.4rem;
        padding-left: 0.2rem;
        position: relative;
    }
    .b-d{
        position: absolute;
        top: 2.2rem;
        left: 0.2rem;
        width: 100%;
    }
    .price{
        color: #b2a078;
        font-size: 0.4rem;
    }
    del{
        color: #7f7f7f;
        font-size: 12px;
    }
    .text{
        color: #515151;
        font-size: 0.4rem;
    }
    .button{
        width: 1.933rem;
        height: 0.667rem;
        border: solid 1px #b2a078;
        line-height: 0.667rem;
        text-align: center;
        color:#b2a078 ;
        margin-left: 2.7rem;
        font-size: 0.4rem;
        border-radius: 2px;
    }
</style>
