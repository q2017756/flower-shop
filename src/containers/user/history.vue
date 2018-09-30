<template>
    <div id="history">
      <mt-header fixed class="header" title="我的足迹">
        <mt-button @click="$router.go(-1)"  slot="left" icon="back"></mt-button>
        <!--<mt-button icon="more" slot="right"></mt-button>-->
      </mt-header>
        <ul v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-immediate-check="false"
            infinite-scroll-distance="10">
            <li @click="go(item.goods_id)" v-for="item in list">
                <!--<div class="title clear">-->
                    <!--<div class="check">-->
                        <!--<i class="iconfont icon-xuanzekuangmoren" v-show="!qx"></i>-->
                        <!--<i class="iconfont icon-xuanzekuangxuanzhong" v-show="qx" style="color:#25b5fe"></i>-->
                    <!--</div>-->
                    <!--<div class="t-text">-->
                        <!--<span class="farm-name">今天</span>-->
                    <!--</div>-->
                <!--</div>-->
                <div  class="g-l clear">
                    <div class="check check-l">
                        <i class="iconfont icon-xuanzekuangmoren" v-show="!qx"></i>
                        <i class="iconfont icon-xuanzekuangxuanzhong" v-show="qx" style="color:#25b5fe"></i>
                    </div>
                    <div class="g-m">
                        <div class="img-d">
                            <img :src="item.thumbnail_pic" alt="">
                        </div>
                        <div class="g-t">
                            <div class="g-title">{{item.name}}</div>
                            <!--<span class="type">A级</span>-->
                            <div class="bot-p">
                                <span class="price">￥{{item.gprice}}</span>
                                <div class="ffl">
                                    <!--<span class="bt-sam">找相似</span>-->
                                  <img @click.stop="cart(item.goods_id)" id="cart-img" src="../../../static/imgs/cart.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--<div class="g-l clear">-->
                    <!--<div class="check check-l">-->
                        <!--<i class="iconfont icon-xuanzekuangmoren" v-show="!qx"></i>-->
                        <!--<i class="iconfont icon-xuanzekuangxuanzhong" v-show="qx" style="color:#25b5fe"></i>-->
                    <!--</div>-->
                    <!--<div class="g-m">-->
                        <!--<div class="img-d">-->
                          <!--<img src="../../../static/imgs/flower.jpg" alt="">-->
                        <!--</div>-->
                        <!--<div class="g-t">-->
                            <!--<div class="g-title">满天星满天星满天星满天星满天星满天星</div>-->
                            <!--&lt;!&ndash;<span class="type">A级</span>&ndash;&gt;-->
                            <!--<div class="bot-p">-->
                                <!--<span class="price">￥256.00</span>-->
                              <!--<div class="ffl">-->
                                <!--<span class="bt-sam">找相似</span>-->
                                <!--<img id="cart-img" src="../../../static/imgs/cart.png" alt="">-->
                              <!--</div>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
            </li>
            <!--<li>-->
                <!--<div class="title clear">-->
                    <!--<div class="check">-->
                        <!--<i class="iconfont icon-xuanzekuangmoren" v-show="!qx"></i>-->
                        <!--<i class="iconfont icon-xuanzekuangxuanzhong" v-show="qx" style="color:#25b5fe"></i>-->
                    <!--</div>-->
                    <!--<div class="t-text">-->
                        <!--<span class="farm-name">2018/05/02</span>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div class="g-l clear">-->
                    <!--<div class="check check-l">-->
                        <!--<i class="iconfont icon-xuanzekuangmoren" v-show="!qx"></i>-->
                        <!--<i class="iconfont icon-xuanzekuangxuanzhong" v-show="qx" style="color:#25b5fe"></i>-->
                    <!--</div>-->
                    <!--<div class="g-m">-->
                        <!--<div class="img-d">-->
                          <!--<img src="../../../static/imgs/flower.jpg" alt="">-->
                        <!--</div>-->
                        <!--<div class="g-t">-->
                            <!--<div class="g-title">满天星满天星满天星满天星满天星满天11星</div>-->
                            <!--&lt;!&ndash;<span class="type">A级</span>&ndash;&gt;-->
                            <!--<div class="bot-p">-->
                                <!--<span class="price">￥256.00</span>-->
                              <!--<div class="ffl">-->
                                <!--<span class="bt-sam">找相似</span>-->
                                <!--<img id="cart-img" src="../../../static/imgs/cart.png" alt="">-->
                              <!--</div>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div class="g-l clear">-->
                    <!--<div class="check check-l">-->
                        <!--<i class="iconfont icon-xuanzekuangmoren" v-show="!qx"></i>-->
                        <!--<i class="iconfont icon-xuanzekuangxuanzhong" v-show="qx" style="color:#25b5fe"></i>-->
                    <!--</div>-->
                    <!--<div class="g-m">-->
                        <!--<div class="img-d">-->
                          <!--<img src="../../../static/imgs/flower.jpg" alt="">-->
                        <!--</div>-->
                        <!--<div class="g-t">-->
                            <!--<div class="g-title">满天星满天星满天星满天星满天星满天星</div>-->
                            <!--&lt;!&ndash;<span class="type">A级</span>&ndash;&gt;-->
                            <!--<div class="bot-p">-->
                                <!--<span class="price">￥256.00</span>-->
                              <!--<div class="ffl">-->
                                <!--<span class="bt-sam">找相似</span>-->
                                <!--<img id="cart-img" src="../../../static/imgs/cart.png" alt="">-->
                              <!--</div>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</li>-->
        </ul>
    </div>
</template>

<script>
  import { Header } from 'mint-ui';
  import qs from "qs"
  import urls from "../../utils/url"
  import { InfiniteScroll } from 'mint-ui';
  import { Toast } from 'mint-ui';
    export default {
        name: "history",
        data(){
            return{
                qx:false,
                list:[],
                page:1,
                loading:false
            }

        },
        methods:{
          loadMore(){
              console.log("cd...........")
              this.loading=true;
              this.$ajax.post("",qs.stringify({
                  api_type:"common",
                  api_version:"1.0",
                  act:"getGoodsLSList",
                  isEnd:"webroot",
                  page:this.page,
                  pageLimit:10,
                  memberid:1
              }))
                  .then((data)=>{

                      console.log(data);
                      if(data.data.res == "succ"){
                          if(this.page<data.data.result.pageCount){
                              this.page++;
                              this.loading=false;
                          }else {

                          }
                          for(let i=0;i<data.data.result.list.length;i++){
                              this.list.push(data.data.result.list[i]);
                          }

                      }

                  })
          },
            go(id){
                // alert(id)
                this.$router.push(`/productDetail/${id}`)
            },
            cart(id){
                // console.log(item)
                this.$ajax.post("",qs.stringify({
                    api_type:"common",
                    api_version:"1.0",
                    act:"carts_add",
                    isEnd:"webroot",
                    product_id:id,
                    open_id:"15601606633",
                    product_num:"1"
                }))
                    .then((data)=>{
                        Toast(data.data.msg)
                    })
            }
        },
        mounted(){
            console.log(this.$ajax)
            this.loadMore();
        }
    }
</script>

<style lang="scss" scoped>
  @import '../../styles/common.scss';
    #history{
      font-size: px2rem($size_default);
      padding-top: 45px;
    }
    .header{
      background: white;
      color: #515151;
    }
    #cart-img{
      width: 0.6rem;
      height: 0.6rem;
    }
    ul{
        /*background: white;*/
    }
    li{
        padding: 0 0.3rem;
        margin-bottom: 0.2rem;
        background: white;
    }
    .title{
        position: relative;
        padding-top: 0.4rem;
        padding-bottom: 0.4rem;
        border-bottom: 1px solid #dfdfdf;
    }
    .check{
        width: 0.6rem;
        float: left;
        /*height: 2.5rem;*/
        /*line-height: 2.5rem;*/
    }
    .ffl{
      display: flex;
    }
    .check-l{
        height: 2rem;
        line-height: 2rem;
    }
    .t-text,.g-m{
        width: 8.8rem;
        float: right;
        display: flex;
        justify-content:space-between;
    }
    .clear:after{
        content: " ";
        display: block;
        clear: both;
    }
    .farm-name{
        color: #515151;
    }
    .quan{
        color: #b4272d;
    }
    .img-d{
        width: 2rem;
        height: 2rem;
        background: #232323;
    }
    .g-t{
        padding-left: 0.2rem;
        position: relative;
        width: 9rem;
    }
    .g-l{
        padding-top: 0.2rem;
        padding-bottom: 0.3rem;
        border-bottom: 1px solid #dfdfdf;
    }
    li .g-l:last-child{
        border-bottom: none;
    }
    .type{
        font-size: 12px;
        background-color: #f4f4f4;
        padding: 0 0.2rem;
    }
    .bot-p{
        display: flex;
        justify-content: space-between;
        position: absolute;
        bottom: 0;
        left: 0.2rem;
        width: calc(100% - 0.2rem);
    }
    .price{
        color: #b4272d;
      font-size: px2rem($size_middle);
    }
    .bt-sam{
        border: 1px solid #dfdfdf;
        color: #515151;
      font-size: px2rem($size_middle);
        padding: 0.1rem 0.2rem;
        border-radius: 5px;
        margin-right: 0.4rem;
    }
    .img-d img{
      width: 100%;
      height: 100%;
    }
  .g-m{
    width: 100%;
  }
  .check{
    display: none;
  }
</style>
