<template>
    <div class="user-card">
        <app-header title="会员俱乐部"></app-header>
        <div class="container">
            <div class="card">

            </div>
            <div class="level">

            </div>

            <div class="product">
                <div class="text-center">
                    <span class="title-line">会员商品</span>
                </div>
                <ul>
                    <li v-for="n in 4" :key="n">
                        <div class="img-d">
                            <img src="../../../static/imgs/flower.jpg" alt="">
                        </div>
                        <div class="msg-d">
                            <div class="title">向日葵花向日葵花花向日葵花花向日葵花花向日葵花花向日葵花花向日葵花花花</div>
                            <div class="b-d">
                                <div class="price">￥0.00+100积分</div>
                                <del>￥100</del>
                                <div class="text">562人想买</div>
                                <!--<div class="button">立即换购</div>-->
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import appHeader from '@/components/common/appHeader'

    export default {
        data() {
            return {}
        },
        props: {},
        components: {
            appHeader
        },
        methods: {},
    }
</script>
<style lang="scss" scoped>
    @import '../../styles/common';

    .card {
        width: 90vw;
        height: 28vh;
        margin: px2rem(10) px2rem(15);
        background: url("../../assets/img/member-bg1.png") no-repeat;
        background-size: 100% 100%;
    }

    .level {
        width: 100vw;
        height: 9vh;
        background: url("../../assets/img/member-bg2.png") no-repeat;
        background-size: 100% 100%;
    }

    .product {
        margin-top: px2rem(10);
        background: #fff;
    }

    .img-d img{
        width: 100%;
        height: 100%;
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



