<template>
    <div id="my-order">
      <mt-header fixed class="header" title="我的订单">
        <mt-button @click="$router.go(-1)"  slot="left" icon="back"></mt-button>
        <!--<mt-button icon="more" slot="right"></mt-button>-->
      </mt-header>
        <mt-navbar v-model="selected">
            <mt-tab-item id="0">全部</mt-tab-item>
            <mt-tab-item id="1">待付款</mt-tab-item>
            <mt-tab-item id="2">待发货</mt-tab-item>
            <mt-tab-item id="3">已发货</mt-tab-item>
            <mt-tab-item id="6">待评价</mt-tab-item>
        </mt-navbar>
        <ul class="list-ul"
            v-infinite-scroll="getList"
            infinite-scroll-disabled="loading"
            infinite-scroll-immediate-check="false"
            infinite-scroll-distance="0">
            <li v-for="item in  listData" @click="goDetails(item)" class="list-li">
                <div class="title">
                    <span>订单编号：{{item.order_id}}</span>
                    <span>订单生成</span>
                </div>
                <div v-for="sonItem in item.goods_info" class="content">
                    <div class="img-d">
                        <img :src="sonItem.thumbnail_pic" alt="">
                    </div>
                    <p class="tp body">{{sonItem.name}}</p>
                </div>
                <div class="bot-d">
                    <span class="money">应付：{{item.total_amount}}</span>
                    <div class="btn-d">
                        <!--<span @click="cancle_order(item.order_id)" class="qx btn">取消订单</span>-->
                        <span v-show="selected==1" @click="pay(item.order_id)" class="fk btn">去付款</span>
                    </div>
                </div>
            </li>
            <div v-show="listData.length==0" style="text-align: center;padding-top: 3rem">
                <img style="width: 3rem" src="../../assets/icon/no_order.png"/><br/>
                <span style="color: #d9d9d9;padding-top: 0.3rem;display: inline-block;font-size: 13px" class="">暂无数据</span>
            </div>
            <mt-spinner color="rgb(16, 187, 230)" v-show="loading" type="triple-bounce"></mt-spinner>
            <div v-show="finalPage" style="width: 100%;font-size: 0.7rem;color: #999999;padding-bottom: 0.5rem;text-align: center;background: white;">没有更多数据</div>
        </ul>
    </div>
</template>

<script>
    import { Navbar, TabItem } from 'mint-ui';
    import { Header } from 'mint-ui';
    import { MessageBox } from 'mint-ui';
    import { Indicator } from 'mint-ui';
    import { Toast } from 'mint-ui';
    import qs from "qs"
    export default {
        name: "myOrder",
        data(){
            return{
                selected:'1',
                page:1,
                listData:[],
                noneShow:false,
                finalPage:false,
                loading:false,
            }
        },
        methods:{
            getList(){
                console.log('s11')
                // this.loading = true;
                this.$axios('', {
                    act: 'memberOrders',
                    page:this.page,
                    state:this.selected
                }, (data) => {
                    if (data.data.res === "succ") {
                        this.listData=data.data.result.data
                    } else {
                        Toast(data.data.msg)
                    }
                })
            },
            goDetails(item){
                this.$router.push({path:"/morderDetails",query:{orderId:item.order_id}})
            },
            cancle_order(id){
                this.$axios('', {
                    act: 'closeOrder',
                }, (data) => {
                    if (data.data.res === "succ") {

                    } else {
                        Toast(data.data.msg)
                    }
                })

            },
            pay(order){
                window.location.href="http://static.florinsight.com/payment?order_id="+order;
            },
        },
        mounted(){
            this.getList();
            this.selected = this.$route.params.id
        },
        watch:{
            selected(n,o){
                console.log(o,n);
                this.getList();
                this.page=1;
                this.listData=[];
                this.finalPage=false;
            }
        }
    }
</script>

<style lang="scss" scoped>
  @import '../../styles/common.scss';
    #my-order{
      font-size: px2rem($size_default);
      padding-top: 45px;
    }
    .header{
      background: white;
      color: #515151;
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
  .tp{
    padding-left: 0.2rem;
  }
  body,.body{
      height: auto!important;
  }
</style>
<!--<style>-->
    <!--body{-->
        <!--height: auto!important;-->
    <!--}-->
<!--</style>-->
