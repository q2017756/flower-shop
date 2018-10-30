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
    import qs from "qs"
    import { Cell, CellGroup } from 'vant';
    import { SubmitBar } from 'vant';
    export default {
        name: "orderDetails",
        data(){
            return{
                address:{},
                showAds:true,
                goods:{},
                totalPrice:0,
                renderData:[],
                canUseC: 3,
                spje: '0',
                yhq: '0',
                yf: '0',
                mj: '0',
                hj: '0',
                address_id: '',
                goodsInfo:[]
            }
        },
        components:{
            [Cell.name]:Cell,
            [CellGroup.name]:CellGroup,
            [SubmitBar.name]:SubmitBar
        },
        mounted(){
            var _this = this;
          // console.log(this.$route.query)
            var address = this.$route.params;
            this.address_id = address.id;

            // console.log('.........................')
            // console.log(this.$store.state.orderProd)
            this.goods = this.$store.state.orderProd;
            // var renderData=[];
            for (var key in this.goods){
                // console.log(key);
               this.renderData.push({
                    farm_name:this.goods[key][0].farm_name,
                    good_list:this.goods[key]
                });
                for (let j = 0;j<this.goods[key].length;j++){
                    // console.log()
                    this.totalPrice+=this.goods[key][j].price*this.goods[key][j].nums
                }
                for(let item of _this.goods[key]){
                    _this.goodsInfo.push({
                        product_id: item.product_id,
                        product_num: item.nums,
                    })
                }
            };
            this.getOrderInfo()
            // console.log(this.renderData)
            var goodsData = 1
            // console.log(address)
            if(address.province){
                this.address=address;
                this.showAds = true;
            }else{
                this.showAds = false;
            }
        },
        methods:{
            test(){
                // alert('sss')
            },
            onSubmit(){
                // 处理地址数据
                this.$ajax.post("",qs.stringify({
                    api_type:"common",
                    api_version:"1.0",
                    act:"add_order",
                    isEnd:"webroot",
                    cost_freight:"0.00",//快递费
                    final_amount:"0.04",//订单总额
                    product:JSON.stringify(this.$store.state.orderProd) ,//订单商品
                    goods_final_amount:"0.04",//商品总金额
                    payment:{"id":3},//支付类别
                    product_count:"1",//商品总数量
                    store_info:{
                        "store_name":"\u65f6\u5c1a\u5708M",
                        "logo":"http:\/\/qmfx-s39210.s3.fy.shopex.cn\/gpic\/20170512\/edfcf9ea8e441e3fed8bdea98616a9bf.jpg"
                    },//商户信息
                    product_sign:"",
                    order_source:"local",//订单来源
                    act_id:"0",//活动ID
                    dentity:"",//
                    use_score_off:"off",//是否使用积分
                    delivery_type:"common",//配送类型
                    store_name:"张付俊",//店铺名称
                    store_phone:"13564137019",//店铺电话
                    store_id:"",//店铺ID
                    show_price:"",
                    group_act_id:"",//拼团活动ID
                    team_id:"",
                    member_id:"2"//订单会员id
                }))
                    .then((data)=>{
                        // console.log(data);
                        if(data.data.res=="succ"){
                            // console.log(data.data.info.order_id)
                            this.weixin_pay(data.data.info.order_id)
                        }else{
                            Toast(data.data.msg?data.data.msg:"下单失败")
                        }
                    })
            },
            goAddress(){
                // Toast("选择地址")
                this.$router.push({path:"addressList",query:{'isSelect':this.address_id||''}})
            },
            getOrderInfo() {
                var _this = this
                this.$axios('',{
                    act:"order_checkout",
                    address_id:this.address_id,
                    coupon_id:'',
                    goods:JSON.stringify(this.goodsInfo)
                },data=>{
                    let v=data.data.result
                    _this.hj = v.orders.final_amount
                    _this.spje = v.orders.goods_final_amount
                    _this.yf = v.orders.cost_freight
                    _this.yhq = v.coupon_price
                    _this.mj = v.minusAmount
                    _this.canUseC = v.couponNum
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
            padding: 0 0.5rem 50px;
            background: white;

            .item {
                display: flex;
                justify-content: space-between;
                height: 1.4rem;
                align-items: center;
                border-bottom: 1px solid #efefef;
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
