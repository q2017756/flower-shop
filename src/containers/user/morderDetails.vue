<template>
    <div id="order-details">
        <mt-header  fixed class="header" title="确认订单">
            <mt-button @click="$router.go(-1)"  slot="left" icon="back"></mt-button>
            <!--<mt-button icon="more" slot="right"></mt-button>-->
        </mt-header>
        <div @click="showP">
            <mt-cell class="wl-x" :title="WL[0].context"  is-link></mt-cell>
        </div>

        <div v-show="showAds"  class="address-div">
            <div class="flex user-msg">
                <div class="text">
                    收货人：{{receiver.name}}
                </div>
                <div class="text">
                    {{receiver.mobile}}
                </div>
            </div>
            <div class="flex address">
                收货地址：{{receiver.addr}}
            </div>
        </div>
        <!--<div class="sele-ads" v-show="!showAds">-->
            <!--<van-cell title="选择收货地址" is-link value="" />-->
        <!--</div>-->
        <div class="goods-div">
            <div style="border-bottom: 1px solid #cccccc;padding: 0.2rem 0;font-size: 16px">{{farm.name}}</div>
            <div v-for="its in goodsData" style="padding-top: 0.2rem" class="goods flex">
                <div class="img">
                    <img :src="its.thumbnail_pic" alt="">
                </div>
                <div class="msg">
                    <div class="goodsname">{{its.name}}</div>
                    <div class="int">默认</div>
                    <div class="p-n">
                        <span class="pr">￥{{its.pprice}}</span>
                        <span class="num">×{{its.nums}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <!--<van-cell-group>-->
            <!--<van-cell @click="test()" title="优惠券" is-link />-->
            <!--<van-cell title="配送方式" is-link value="内容" />-->
            <!--<van-cell title="优惠" is-link arrow-direction="down" value="内容" />-->
            <!--</van-cell-group>-->
        </div>
        <van-popup v-model="showPop"  position="bottom" >
            <div class="v-content">
                <van-steps direction="vertical" :active="0" active-color="#3283fa">
                    <van-step v-for="item in WL">
                        <h3>{{item.context}}</h3>
                        <p>{{item.time}}</p>
                    </van-step>
                </van-steps>
            </div>
        </van-popup>
        <!--<button @click="weixin_pay">zhifu </button>-->
    </div>
</template>

<script>
    import {Toast} from "mint-ui"
    import qs from "qs"
    // import { Cell, CellGroup } from 'vant';
    import { Cell } from 'mint-ui';
    import { SubmitBar } from 'vant';
    import { Step, Steps } from 'vant';
    import { Popup } from 'vant';
    export default {
        name: "orderDetails",
        data(){
            return{
                address:{},
                showAds:true,
                goods:{},
                totalPrice:0,
                renderData:[],
                farm:{},
                goodsData:[],
                receiver:{},
                WL:[{context:"暂无物流信息"}],
                showPop:false
            }
        },
        components:{
            [Step.name]:Step,
            [Steps.name]:Steps,
            [Popup.name]:Popup,
        },
        mounted(){
            this.order_id=this.$route.query.orderId;
            this.getOrderDetail()
        },
        methods:{
            test(){
                // alert('sss')
            },
            showP(){
                this.showPop=true;
                // alert('ss')
            },
            weixin_pay(order){
                // alert(JSON.stringify(order))
                window.location.href="http://static.florinsight.com/payment?order_id="+order;
            },
            order(){

            },
            getOrderDetail(){
                this.$axios('', {
                    act: 'orderdetail',
                    order_id:this.order_id
                }, (data) => {
                    if (data.data.res === "succ") {
                        this.goodsData=data.data.result.order.items;
                        this.farm=data.data.result.site_info;
                        this.receiver=data.data.result.order.receiver;
                        if(data.data.result.delivery){
                            this.getWL(data.data.result.delivery.logi_no)
                        }
                    } else {
                        Toast(data.data.msg)
                    }
                })
            },
            getWL(num){
                this.$ajax.post("",qs.stringify({
                    api_type:"common",
                    api_version:"1.0",
                    act:"get_logistics",
                    isEnd:"webroot",
                    no:num
                }))
                    .then((data)=>{
                        console.log(data);
                        if(data.data.res=="succ"){
                            this.WL=data.data.result;
                        }
                    })
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
    .sele-ads{
        background: white;
        padding: 0.25rem;
    }
    .goods{
        border-bottom: 1px solid #cccccc;
        padding-bottom: 0.2rem;
    }
    .wl-x{
        font-size: px2rem(14);
        color: #3283fa;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        padding:0.15rem 0;
    }
    .v-content{
        height: 80vh;
        width: 100vw;
        background: white;
        overflow-x: auto;
        overflow-y: scroll;
    }
</style>
