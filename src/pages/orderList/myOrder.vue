<template>
    <div id="my-order">
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">全部</mt-tab-item>
            <mt-tab-item id="2">代付款</mt-tab-item>
            <mt-tab-item id="3">待发货</mt-tab-item>
            <mt-tab-item id="4">已发货</mt-tab-item>
            <mt-tab-item id="5">待评价</mt-tab-item>
        </mt-navbar>
        <ul class="list-ul">
            <li class="list-li">
                <div class="title">
                    <span>订单编号：5622456</span>
                    <span>订单生成</span>
                </div>
                <div class="content">
                    <div class="img-d">
                        <img src="" alt="">
                    </div>
                    <p>的发送到发发大发房贷安抚阿士大夫大发啊打发啊打发啊打发啊打发大发大发啊</p>
                </div>
                <div class="bot-d">
                    <span class="money">应付：￥251.00</span>
                    <div class="btn-d">
                        <span class="qx btn">取消订单</span>
                        <span class="fk btn">去付款</span>
                    </div>
                </div>
            </li>
            <li class="list-li">
                <div class="title">
                    <span>订单编号：5622456</span>
                    <span>订单生成</span>
                </div>
                <div class="content">
                    <div class="img-d">
                        <img src="" alt="">
                    </div>
                    <p>的发送到发发大发房贷安抚阿士大夫大发啊打发啊打发啊打发啊打发大发大发啊</p>
                </div>
                <div class="bot-d">
                    <span class="money">应付：￥251.00</span>
                    <div class="btn-d">
                        <span class="qx btn">取消订单</span>
                        <span class="fk btn">去付款</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import { Navbar, TabItem } from 'mint-ui';
    export default {
        name: "myOrder",
        data(){
            return{
                selected:'1'
            }
        }
    }
</script>

<style scoped>
    #my-order{
        font-size: 0.4rem;
    }
.is-selected{
    color: #c6606e!important;
    border-bottom: 3px solid #c6606e!important;
}
    .list-li{
        background: white;
        padding: 0 0.3rem;
        margin-top: 0.2rem;
    }
    .title{
        display: flex;
        justify-content: space-between;
        padding: 0.2rem 0;
        border-bottom: 1px solid #dfdfdf;
        font-size: 0.35rem;
    }
    .content{
        display: flex;
        padding: 0.2rem 0;
        align-items:center;
        border-bottom: 1px solid #dfdfdf;
    }
    .img-d{
        width: 1.85rem;
        height: 1.85rem;
        flex-shrink:0;
    }
    .img-d img{
        width: 100%;
        height: 100%;
    }
    .img-d p{
        padding-left: 0.25rem;
    }
    .bot-d{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.4rem 0;
        font-size: 0.35rem;
    }
    .btn{
        padding: 0.1rem 0.2rem;
        border: 1px solid #dfdfdf;
        border-radius: 2px;
        margin-left: 0.2rem;
    }
    .fk{
        padding: 0.1rem 0.2rem;
        border: none;
        color: white;
        background-color: #b4272d;
    }
</style>
