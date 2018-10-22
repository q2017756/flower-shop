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
            <div style="border-bottom: 1px solid #cccccc;padding: 0.2rem 0;font-size: 16px">{{item.farm_name}}</div>
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
        <div>
            <!--<van-cell-group>-->
                <!--<van-cell @click="test()" title="优惠券" is-link />-->
                <!--<van-cell title="配送方式" is-link value="内容" />-->
                <!--<van-cell title="优惠" is-link arrow-direction="down" value="内容" />-->
            <!--</van-cell-group>-->
        </div>
        <!--<button @click="weixin_pay">zhifu </button>-->
        <van-submit-bar
            :price="totalPrice*100"
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
                renderData:[]
            }
        },
        components:{
            [Cell.name]:Cell,
            [CellGroup.name]:CellGroup,
            [SubmitBar.name]:SubmitBar
        },
        mounted(){
          // console.log(this.$route.query)
            var address = this.$route.params;
            // console.log('.........................')
            // console.log(this.$store.state.orderProd)
            this.goods = this.$store.state.orderProd;
            // var renderData=[];
            // console.log(this.goods["11"])
            for (var key in this.goods){
                console.log(key);
               this.renderData.push({
                    farm_name:this.goods[key][0].farm_name,
                    good_list:this.goods[key]
                });
                for (let j = 0;j<this.goods[key].length;j++){
                    console.log()
                    this.totalPrice+=this.goods[key][j].price*this.goods[key][j].nums
                }
            };
            console.log(this.renderData)
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
                var ads=this.address;
                let addressData={
                    address:ads.address,//(详细地址)
                    ship_area:ads.province+"/"+ads.city+"/"+ads.region,//（省市区）
                    ship_addr:ads.province+ads.city+ads.region+ads.address,//（全部地址）
                    ship_mobile:ads.ship_mobile,//（收货人手机号）
                    ship_name:ads.ship_name,//（收货人姓名）
                    province:ads.province,
                    city:ads.city,
                    region:ads.region,
                    default:ads.default,
                    area_id:ads.region_id,//（区id）
                    province_id:ads.province_id,//（省id）
                    city_id:ads.city_id,//（市id）
                    deliver_type:"common",//（配送类型 快递  门店）
                    store_name:"",//门店的名称）
                    store_id:"",//（门店的id）
                    memo:""//（备注）
                }
                // {
                //     address:"河南省郑州市中牟县",//(详细地址)
                //         ship_area:"上海市/上海市/徐汇区：26",//（省市区）
                //     ship_addr:"河南省郑州市中牟县",//（全部地址）
                //     ship_mobile:'13564137019',//（收货人手机号）
                //     ship_name:"ff",//（收货人姓名）
                //     province:"上海",//（省）
                //     city:"上海市",//（市）
                //     region:"徐汇区",//（区）
                //     area_id:"26",//（区id）
                //     province_id:"22",//（省id）
                //     city_id:"23",//（市id）
                // default:"false",//（默认地址）
                //     deliver_type:"common",//（配送类型 快递  门店）
                //     store_name:"",//门店的名称）
                //     store_id:"",//（门店的id）
                //     memo:""//（备注）
                // }

                // {
                //     "11": [
                //     {
                //         "goods_id":"6",//商品id
                //         "product_id":"5", //货品id
                //         "price":"0.04",//销售价
                //         "gprice":"0.04",//成本价
                //         "name":"12123123fsdfs",//商品名称
                //         "pdt_desc":"\u9ed8\u8ba4\u89c4\u683c",
                //         "spec_desc":"",//规格
                //         "props":"",//规格值
                //         "store":"1099978",//库存
                //         "thumbnail_pic":"http:\/\/qmfx-s39210.s3.fy.shopex.cn\/gpic\/20170515\/7013715a4110dc909eb6273643f8c911.jpg?imageView2\/2\/w\/600\/h\/600\/interlace\/1",
                //         "is_activity":"0",//是否设置为活动商品 1 0
                //         "free_postage":"1",//是否包邮
                //         "dt_id":"1447",//运费模板ID,0代表使用默认模板
                //         "weight":"12.000",//物品重量
                //         "volume":"11.00",//物品体积
                //         "type":"normal",//货品类型,normal=一般商品,presale=预售商品
                //         "profit_price":"0",//利润价格
                //         "nums":"1",//商品数量
                //         "goodsType":"normal",//商品类型，normal=一般商品,presale=预售商品
                //         "farm_id":11//农场ID  商品订单是根据农场进行拆单
                //     }
                // ]
                // }
                this.$ajax.post("",qs.stringify({
                    api_type:"common",
                    api_version:"1.0",
                    act:"add_order",
                    isEnd:"webroot",
                    cost_freight:"0.00",//快递费
                    final_amount:"0.04",//订单总额
                    consignee:JSON.stringify(addressData) ,//收获地址
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
                        console.log(data);
                        if(data.data.res=="succ"){
                            console.log(data.data.info.order_id)
                            this.weixin_pay(data.data.info.order_id)
                        }else{
                            Toast(data.data.msg?data.data.msg:"下单失败")
                        }
                    })
            },
            goAddress(){
                // Toast("选择地址")
                this.$router.push({path:"addressList",query:{'isSelect':1}})
            },
            weixin_pay(order){
                // alert(JSON.stringify(order))
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
</style>
