<template>
    <div id="order-details">
        <mt-header  fixed class="header" title="确认订单">
            <mt-button @click="$router.go(-1)"  slot="left" icon="back"></mt-button>
            <!--<mt-button icon="more" slot="right"></mt-button>-->
        </mt-header>
        <div @click="goAddress" class="address-div">
            <div class="flex user-msg">
                <div class="text">
                    收货人：王小二
                </div>
                <div class="text">
                    18211655490
                </div>
            </div>
            <div class="flex address">
                收货地址：是打发斯蒂芬阿斯蒂芬阿斯蒂芬阿斯蒂芬水电费水电费阿斯蒂芬啊
            </div>
        </div>
        <div class="goods-div">
            <div class="goods flex">
                <div class="img">
                    <img src="" alt="">
                </div>
                <div class="msg">
                    <div class="goodsname">大是大非阿斯蒂芬阿道夫啊阿斯蒂芬阿道夫啊阿斯蒂芬阿道夫啊</div>
                    <div class="int">默认</div>
                    <div class="p-n">
                        <span class="pr">￥250.00</span>
                        <span class="num">×1</span>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <van-cell-group>
                <van-cell @click="test()" title="优惠券" is-link />
                <van-cell title="配送方式" is-link value="内容" />
                <van-cell title="优惠" is-link arrow-direction="down" value="内容" />
            </van-cell-group>
        </div>
        <van-submit-bar
            :price="3050"
            button-text="提交订单"
            @submit="onSubmit"
        />
    </div>
</template>

<script>
    import {Toast} from "mint-ui"
    import qs from "qs"
    import { Cell, CellGroup } from 'vant';
    import { SubmitBar } from 'vant';
    export default {
        name: "orderDetails",
        data(){
            return{

            }
        },
        components:{
            [Cell.name]:Cell,
            [CellGroup.name]:CellGroup,
            [SubmitBar.name]:SubmitBar
        },
        methods:{
            test(){
                alert('sss')
            },
            onSubmit(){
                alert("提价")
            },
            goAddress(){
                Toast("选择地址")
                this.$router.push({path:"addressList",query:{'isSelect':1}})
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/common.scss';
    .header{
        background: white;
        color: #515151;
    }
    #order-details{
        font-size: px2rem($size_default);
        padding: 45px 0;
    }
    .flex{
        display: flex;
        justify-content: space-between;
    }
    .address-div{
        margin-top: 5px;
        background: white;
        padding: 0.2rem 0.2rem;
    }
    .user-msg .text{
        font-size: px2rem(16);
        padding: 0.1rem 0 ;
    }
    #order-details .address{
        font-size: 13px;
    }
    .goods-div{
        background: white;
        margin-top: 0.1rem;
        padding: 0.2rem;
    }
    .img{
        width: 2.2rem;
        height: 2.2rem;
        flex-shrink: 1;
    }
    .img img{
        width: 100%;
        height: 100%;
    }
    .goodsname{
        font-size: px2rem(15);
    }
    .int{
        font-size: px2rem(12);
        color: #666666;
    }
    .msg{
        width: 7.2rem;
        position: relative;
    }
    .p-n{
        position: absolute;
        left: 0;
        bottom: 0.2rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
</style>
