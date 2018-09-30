<template>
    <div>
        <app-header title="精品推荐"></app-header>
        <div class="item">
            <div class="box">
                <img :src="data.images.url">
            </div>
            <div class="title">{{data.title}}</div>
            <div class="desc">{{data.content}}</div>
        </div>
        <div class="goods">
            <div v-for="item in data.goods_list" class="farm-item">
                <img  @click="go(item.goods_id)" class="farm-img" :src="item.big_pic"/>
                <div CLASS="text-container">
                    <p class="name">{{item.name}}</p>
                    <div  class="price-container">
                        <span class="price">￥{{item.price}}</span>
                        <span class="old-price">￥{{item.gprice}}</span>
                    </div>
                    <div class="info-container font-smaller">
                        <span   class="num ">库存: {{item.store}}</span>

                        <!--<span v-if="!cartShow" class="comment">{{farmInfo.score ? farmInfo.score : 100}}%好评</span>-->
                        <div >
                            <img @click="addCart(item)" class="farm-cart" src="../../assets/icon/tabbar-cart.png"  alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import qs from "qs"
    import appHeader from '@/components/common/appHeader'
    import {Toast} from "mint-ui"
    export default {
        name: "TopDetails",
        data(){
            return{
                data:{

                }
            }
        },
        components: {
            appHeader
        },
        methods:{
            addCart(item){
                console.log(item)
                this.$ajax.post("",qs.stringify({
                    api_type:"common",
                    api_version:"1.0",
                    act:"carts_add",
                    isEnd:"webroot",
                    product_id:item.goods_id,
                    open_id:"15601606633",
                    product_num:"1"
                }))
                    .then((data)=>{
                        Toast(data.data.msg)
                    })
            },
            go(id){
                // alert(id)
                this.$router.push(`/productDetail/${id}`)
            },

        },
        mounted(){
            this.$axios("",{
                act:"getTopicInfo",
                topic_id:this.$route.query.id
                // page:1,
                // pageLimit:"1"
            },(data)=>{
                console.log("ssssssss")
                console.log(data);
                if(data.data.res == "succ"){
                    this.data=data.data.result.info
                }
                // if(data.data.res == "succ"){
                //     this.data=data.data.result.data.list;
                // }
            })
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/common';
    .item{
        margin-top: $edge_small;
        padding: $edge_small 0;
        background: #fff;
        padding: 0 0.2rem;
        .box{
            /*width: 94%;*/
            height: auto;
            margin: 0 auto;
            padding: 0.35rem 0;
            img{
                width: 100%;
                height: auto;
            }
        }
        .title{
            font-size: px2rem(16);
        }
        .desc{
            font-size: px2rem(14);
            padding: 0.2rem;
        }
    }
    .goods{
        margin-top: 0.2rem;
        display: flex;
        .farm-item {
            @include flex_default;
            flex-direction: column;
            justify-content: space-around;
            align-items: flex-start;
            width: 50vw;
            height: px2rem(255);
            margin: -1px -1px 0 0;
            padding: $edge_small $edge_default;
            position: relative;
            background: #fff;
            border: 1px solid #eee;
            margin-bottom: $edge_small;
            .farm-img {
                flex: 0 0 px2rem(160);
                align-self: center;
                display: inline-block;
                width: 90%;
                height: 60%;
            }
            .text-container {
                width: 100%;
            }
            .name {
                font-size: px2rem($size_middle);
                color: #666;
            }
            .price {
                margin-right: px2rem(5);
                font-size: px2rem($size_middle);
                color: $red_default;
            }
            .old-price {
                font-size: px2rem($size_small);
                color: $text_color;
                text-decoration: line-through;
            }
            .info-container {
                @include flex_default;
                justify-content: space-between;
                width: 110%;
                padding-top: px2rem(3);
                .num {
                    margin-left: px2rem(-20);
                    padding: px2rem(2) px2rem(5);
                    background: #eee;
                    border-radius: 5px;
                    color: #000;
                }
                .address {
                    flex: 0 0 px2rem(140);
                    @include ellipsis;
                    @include flex_default;
                    margin-left: px2rem(-25);
                    .addr-icon {
                        width: px2rem(12);
                    }
                    .addr-text {
                        color: #666;
                        @include ellipsis;
                    }
                }
                .comment {
                    white-space: nowrap;
                    color: #000;
                }
                .farm-cart {
                    position: relative;
                    left: px2rem(18);
                    bottom: px2rem(5);
                    width: px2rem(30);
                }
            }
        }
    }
</style>
