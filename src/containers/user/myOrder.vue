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
                    <span>订单编号：5622456</span>
                    <span>订单生成</span>
                </div>
                <div class="content">
                    <div class="img-d">
                        <img src="../../../static/imgs/flower.jpg" alt="">
                    </div>
                    <p class="tp">的发送到发发大发房贷安抚阿士大夫大发啊打发啊打发啊打发啊打发大发大发啊</p>
                </div>
                <div class="bot-d">
                    <span class="money">应付：￥251.00</span>
                    <div class="btn-d">
                        <span class="qx btn">取消订单</span>
                        <span class="fk btn">去付款</span>
                    </div>
                </div>
            </li>
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
                this.$ajax.post("openapi.php?act=memberOrders",qs.stringify({
                    page:this.page,
                    state:this.selected
                }))
                    .then((data)=>{
                        console.log(data)
                    })
                    .catch((data)=>{
                        console.log(data)
                    })
            }
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
</style>
