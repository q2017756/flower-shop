<template>
    <div id="u-c">
        <div class="head">
            <div class="usm">
                <div class="img-d">
                    <img class="h-m" src="../../../static/imgs/timg.jpg" alt="">
                    <img class="vip" src="../../../static/imgs/v1.png" alt="">
                </div>
                <div class="jf-d">
                    <div class="name-d">
                        <span class="name">
                            花枝花卉
                        </span>
                            <span class="mob">
                            182******90
                        </span>
                    </div>
                    <div class="jf">
                        会员积分：200分
                    </div>
                </div>
                <div class="edit"  @click="goPage('/userMsg')">设置</div>
            </div>
            <div class="gz">
                <div @click="goPage('/goodsCol')"  class="gz-l">
                    <div>80</div>
                    <div>商品收藏</div>
                </div>
                <div @click="goPage('/farmC')" class="gz-l">
                    <div>80</div>
                    <div>关注农场</div>
                </div>
                <div @click="goPage('/cardIndex')" class="gz-l">
                    <div>80</div>
                    <div>优惠券</div>
                </div>
                <div @click="goPage('/history')" class="gz-l">
                    <div>80</div>
                    <div>足迹</div>
                </div>
            </div>
        </div>
        <div style="background: white;margin-bottom: 0.3rem">
            <div class="c-h-t">
                <span class="b-t">我的订单</span>
                <span @click="goPage('/myOrder')" class="ltt">查看全部订单</span>
                <img class="dp-rights" src="../../../static/imgs/right.png"/>
            </div>
            <div @click="goPage('/myOrder')" class="d-d-d">
                <div class="d-l">
                    <img src="../../../static/imgs/dfk.png" alt=""><br>
                    <span>待付款</span>
                </div>
                <div class="d-l">
                    <img src="../../../static/imgs/dfh.png" alt=""><br>
                    <span>待发货</span>
                </div>
                <div class="d-l">
                    <img src="../../../static/imgs/dsh.png" alt=""><br>
                    <span>待收货</span>
                </div>
                <div class="d-l">
                    <img src="../../../static/imgs/dpj.png" alt=""><br>
                    <span>待评价</span>
                </div>
                <div class="d-l">
                    <img src="../../../static/imgs/thsh.png" alt=""><br>
                    <span>退换/售后</span>
                </div>
            </div>
            <ul @click="goPage('/myOrder')" class="l-u">
                <li class="l-l">
                    <div class="img-d-g">
                        <img src="../../../static/imgs/flower.jpg" alt="">
                    </div>
                    <div class="msg">
                        <div class="abs">
                            <div>订单号：65522466</div>
                            <div>总价：￥123</div>
                        </div>
                    </div>
                    <div class="btn">
                        <span class="status">运输中</span>
                        <div class="btn-p-b">
                            <span>查询订单</span>
                        </div>
                    </div>
                </li>
                <li class="l-l">
                    <div class="img-d-g">
                        <img src="../../../static/imgs/flower.jpg" alt="">
                    </div>
                    <div class="msg">
                        <div class="abs">
                            <div>订单号：65522466</div>
                            <div>总价：￥123</div>
                        </div>
                    </div>
                    <div class="btn">
                        <span class="status">运输中</span>
                        <div class="btn-p-b">
                            <span>查询订单</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="tools">
            <div class="c-h-t">
                <span class="b-t">必备工具</span>
                <span style="visibility: hidden" class="ltt">产看全部工具</span>
                <img class="dp-rights" src="../../../static/imgs/right.png"/>
            </div>
            <div class="d-d-d">
                <div @click="goPage('/addressX')" class="d-l d-l-l">
                    <img src="../../../static/imgs/address.png" alt=""><br>
                    <span>地址</span>
                </div>
                <div  @click="goPage('/help')" class="d-l">
                    <img src="../../../static/imgs/help.png" alt=""><br>
                    <span>帮助</span>
                </div>
                <div class="d-l">
                    <img src="../../../static/imgs/kf.png" alt=""><br>
                    <span>在线客服</span>
                </div>
                <div  @click="goPage('/aboutus')" class="d-l">
                    <img src="../../../static/imgs/about.png" alt=""><br>
                    <span>关于我们</span>
                </div>

            </div>
        </div>
      <!--<tabbar :items="items" />-->
    </div>
</template>

<script>
  import tabbar from '@/components/tabbar'
  import { Toast } from 'mint-ui';
  import qs from "qs"
    export default {
        name: "userCenter",
      data(){
          return{

          }
      },
      components: {
        tabbar
      },
      computed: {

      },
        mounted(){
          this.$ajax.post('openapi.php?act=memberFrontpage')
              .then((data)=>{
                  console.log(data);
                  if(data.data.res=="succ"){

                  }else{
                      Toast(data.data.msg)
                  }
              })
              .catch((data)=>{
                  console.log(data);
                  Toast("服务器异常")
              })
        },
      methods:{
          goPage(route){
            this.$router.push(route)
          }
      }
    }
</script>

<style lang="scss" scoped>
  @import '../../styles/common.scss';
    #u-c{
      font-size: px2rem($size_default);
      flex: 1;
      overflow-y: scroll;
    }
    .head{
        background: linear-gradient(to right, #f1d596, #b89b59); /* 标准的语法 */
        padding: 0 0.4rem;
        padding-top: 0.8rem;
    }
    .usm{
        display: flex;
    }
    .img-d{
        width: 1.547rem;
        height: 1.547rem;
        position: relative;
    }
    .img-d .h-m{
        width: 100%;
        height: 100%;
        border-radius: 100%;
        flex-shrink: 0;
    }
    .img-d .vip{
        width: 0.45rem;
        height: 0.45rem;
        position: absolute;
        right: 0;
        bottom: 0;
    }
    .jf-d{
        color: white;padding-left: 0.3rem;
        width: 8rem;

    }
    .edit{
color: white;
        flex-shrink: 0;
        padding-top: 0.2rem;
    }
    .name-d{
        padding-top: 0.25rem;
        position: relative;
    }
    .name{
        font-family: "黑体";
        font-size: 0.45rem;
    }
    .mob{
        font-size: 13px;
    }
    .jf{
        font-size: 13px;
        padding-top: 0.1rem;
    }
    .gz{
        display: flex;
        padding-top: 0.8rem;
        padding-bottom: 0.8rem;
    }
    .gz .gz-l{
        width: 25%;
        color: white;
      font-size: px2rem($size_default);
        text-align: center;
        /*font-family: "黑体";*/
    }
    .dp-rights{
        /*width: 0.187rem;*/
        height: 0.373rem;
        display: inline-block;
    }
    .c-h-t{
        display: flex;
       height: 1rem;
        line-height: 1rem;
        align-items: center;
        padding: 0 0.26rem;
        position: relative;
    }
    .c-h-t:after{
        content: ' ';
        display: block;
        width: 9.48rem;
        height: 0;
        border-bottom: 1px solid #dfdfdf;
        position: absolute;
        bottom: 0;
        left: 0.26rem;
    }
    .b-t{
        font-size: 0.45rem;
        width: 2.5rem;

    }
    .ltt{
        font-size: 0.38rem;
        width: 7rem;
        text-align: right;
    }
    .d-d-d{
        display: flex;
        padding: 0.5rem 0.2rem 0;
        font-size: 0.4rem;
        position: relative;
        padding-bottom: 0.2rem;
        justify-content: space-between;
    }
    .d-d-d .d-l{
        width: 20%;
        text-align: center;
    }
    .d-d-d:after{
        content: ' ';
        display: block;
        width: 9.48rem;
        height: 0;
        border-bottom: 1px solid #dfdfdf;
        position: absolute;
        bottom: 0;
        left: 0.26rem;
    }
    .d-l img{
        width: 0.53rem;
        margin-bottom: 0.15rem;
    }
    .l-u{
        padding: 0.1rem 0.26rem;
        background: white;
    }
    .l-l{
        display: flex;
        padding-bottom: 0.2rem;
        border-bottom: 1px solid #dfdfdf;
        padding-top: 0.1rem;
    }
    .l-l:last-child{
        border: none;
    }
    .img-d-g{
        width:2rem ;
        height: 2rem;
    }
    .img-d-g img{
        width: 100%;
        height: 100%;
    }
    .msg{
        width: 4.3rem;
        padding-left: 0.2rem;
        font-size: 0.3rem;
        position: relative;
    }
    .btn{
        width: 4rem;
        position: relative;
    }
    .abs{
        position: absolute;
        bottom: 0.2rem;
        left: 0.2rem;
    }
    .abs div:first-child{
        padding-bottom: 0.2rem;
    }
    .status{
        font-size: 0.38rem;
        position: absolute;
        right: 0.26rem;
        top: 0.2rem;
    }
    .btn-p-b{
        position: absolute;
        right: 0.2rem;
        bottom: 0.2rem;
        font-size: 0.3rem;
        padding: 0.05rem 0.1rem;
        background-color: #b4272d;
        border-radius: 0.067rem;
        color: white;
    }
.tools{
    background: white;
}
.tools .d-d-d:after{
    display: none;
}
.d-l-l img{
  margin-bottom: 0;
}
</style>
