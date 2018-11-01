<template>
    <div id="order-details">
        <mt-header  fixed class="header" title="确认订单">
            <mt-button @click="$router.go(-1)"  slot="left" icon="back"></mt-button>
            <!--<mt-button icon="more" slot="right"></mt-button>-->
        </mt-header>
        <div v-show="showAds" @click="goAddress" class="address-div">
            <div class="flex user-msg">
                <div class="text">
                    收货人：{{address.ship_name}}
                </div>
                <div class="text">
                    {{address.ship_mobile}}
                </div>
            </div>
            <div class="flex address">
                收货地址：{{address.province+address.city+address.region+address.address}}
            </div>
        </div>
        <div @click="goAddress" class="sele-ads" v-show="!showAds">
            <van-cell title="选择收货地址" is-link value="" />
        </div>
        <div v-for="item in renderData" class="goods-div">
            <div style="border-bottom: 1px solid #efefef;padding: 0.2rem 0;font-size: 16px">{{item.farm_name}}</div>
            <div v-for="its in item.good_list" style="padding-top: 0.2rem" class="goods flex">
                <div class="img">
                    <img :src="its.thumbnail_pic" alt="">
                </div>
                <div class="msg">
                    <div class="goodsname">{{its.name}}</div>
                    <div class="int">默认</div>
                    <div class="p-n">
                        <span class="pr">￥{{its.price}}</span>
                        <span class="num">×{{its.nums}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div style="margin: 0.1rem 0">
            <van-cell-group>
                <van-cell is-link @click="test()">
                    <template slot="title">
                        优惠券：{{canUseC}}张可用
                    </template>
                </van-cell>
            </van-cell-group>
        </div>
        <div class="moneys">
            <div class="item">
                <div>商品金额</div>
                <div>￥ {{spje}}</div>
            </div>
            <div class="item">
                <div>运费</div>
                <div>￥ {{yf}}</div>
            </div>
            <div class="item">
                <div>优惠券</div>
                <div>-￥ {{yhq}}</div>
            </div>
            <div class="item">
                <div>满减</div>
                <div>-￥ {{mj}}</div>
            </div>

        </div>
        <!--<button @click="weixin_pay">zhifu </button>-->
        <van-submit-bar
            :price="hj*100"
            button-text="提交订单"
            @submit="onSubmit"
        />
    </div>
</template>

<script>
    import {Toast} from "mint-ui"
    import { Cell, CellGroup } from 'vant';
    import { SubmitBar } from 'vant';
    export default {
        name: "orderDetails",
        data(){
            return{
                address:{},
                showAds:true,
                goods:{},
                renderData:[],
                canUseC: 3,
                spje: '0',
                yhq: '0',
                yf: '0',
                mj: '0',
                hj: '0',
                address_id: '',
                goodsInfo:[],
                submitOrder: ''
            }
        },
        components:{
            [Cell.name]:Cell,
            [CellGroup.name]:CellGroup,
            [SubmitBar.name]:SubmitBar
        },
        created() {
            var _this = this;
            var address = this.$route.params;
            this.address_id = address.id;
            this.goods = this.$store.state.orderProd;
            for (var key in this.goods){
                this.renderData.push({
                    farm_name:this.goods[key][0].farm_name,
                    good_list:this.goods[key]
                });
                for(let item of _this.goods[key]){
                    _this.goodsInfo.push({
                        product_id: item.product_id,
                        product_num: item.nums,
                    })
                }
            };
            this.getOrderInfo()

            if(address.province){
                this.address=address;
                this.showAds = true;
            }else{
                this.showAds = false;
            }
        },
        methods:{
            test(){
                this.$router.push({name:"checkcard",params:{'cp_id': this.submitOrder || ''}})
            },
            onSubmit(){
                this.$axios('',{
                    act: "add_order",
                    address_id: this.address_id,
                    coupon_id: '',
                    goods:JSON.stringify(this.goodsInfo)
                },data=>{
                    if(data.data.res=="succ"){
                        this.weixin_pay(data.data.info.order_id)
                    }else{
                        Toast(data.data.msg?data.data.msg:"下单失败")
                    }
                })
            },
            goAddress(){
                this.$router.push({ path: "addressList", query:{'isSelect': this.address_id || ''}})
            },
            getOrderInfo() {
                let _this = this
                this.$axios('',{
                    act:"order_checkout",
                    address_id:this.address_id,
                    coupon_id:'',
                    goods:JSON.stringify(this.goodsInfo)
                },data=>{
                    let v=data.data.result
                    _this.hj = v.real_pay_amount
                    _this.spje = v.orders.goods_final_amount
                    _this.yf = v.orders.cost_freight
                    _this.yhq = v.coupon_price
                    _this.mj = v.minusAmount
                    _this.canUseC = v.couponNum
                    _this.submitOrder = v.submitOrder
                })
            },
            weixin_pay(order){
                window.location.href="http://static.florinsight.com/payment?order_id="+order;
            },
            order(){

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

        .moneys {
            padding: 0 0.5rem 2px;
            background: white;

            .item {
                display: flex;
                justify-content: space-between;
                height: 1.4rem;
                align-items: center;
                border-bottom: 1px solid #efefef;
                &:last-of-type {
                    border-bottom: none;
                }
            }
        }
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
    }
</style>
