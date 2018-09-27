<template>
    <div id="card-index">
      <mt-header fixed class="header" title="我的优惠券">
        <mt-button @click="$router.go(-1)"  slot="left" icon="back"></mt-button>
        <!--<mt-button icon="more" slot="right"></mt-button>-->
      </mt-header>
      <mt-navbar class="navbar" v-model="selected">
        <mt-tab-item id="1">未使用</mt-tab-item>
        <mt-tab-item id="2">已使用</mt-tab-item>
        <mt-tab-item id="3">已过期</mt-tab-item>
      </mt-navbar>
        <ul class="l-u">
            <li v-for="item in listData" class="l-l">
                <div class="content">
                    <div class="money">
                        <span class="num">23</span>
                        <span class="tx">元</span>
                    </div>
                    <div class="t-d">
                        <div class="flx">
                            <div>
                                <div  class="card-type">{{item.coupon_title}}</div>

                                <div class="card-c">有效期至{{item.begin_time.split(" ")[0]}}</div>

                                <div class="txt">满{{item.total_num}}使用</div>
                                <!--<br>-->
                            </div>
                        </div>
                        <div v-show="item.getTag" class="bts">使用</div>
                    </div>
                </div>
                <div class="bot-text">每人可领{{item.ip_send_num}}张</div>
            </li>
            <!--<li v-show="selected == 2" class="l-l ed">-->
                <!--<div class="content">-->
                    <!--<div class="money edt">-->
                        <!--<span class="num">23</span>-->
                        <!--<span class="tx">元</span>-->
                    <!--</div>-->
                    <!--<div class="t-d">-->
                        <!--<div class="flx">-->
                            <!--<div>-->
                                <!--<div  class="card-type">现金券</div>-->

                                <!--<div class="card-c">有效期至2018年9月1日</div>-->

                                <!--<div class="txt">最高满减20元</div>-->
                                <!--&lt;!&ndash;<br>&ndash;&gt;-->
                            <!--</div>-->
                        <!--</div>-->
                        <!--&lt;!&ndash;<div class="bts">使用</div>&ndash;&gt;-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div class="bot-text">全场通用全场通用全场通用全场通用全场通用全场通用全场通用全场通用全场通用</div>-->
            <!--</li>-->
            <!--<li v-show="selected == 3" class="l-l ed">-->
                <!--<div class="content">-->
                    <!--<div class="money edt">-->
                        <!--<span class="num">23</span>-->
                        <!--<span class="tx">元</span>-->
                    <!--</div>-->
                    <!--<div class="t-d">-->
                        <!--<div class="flx">-->
                            <!--<div>-->
                                <!--<div  class="card-type">现金券</div>-->

                                <!--<div class="card-c">有效期至2018年9月1日</div>-->

                                <!--<div class="txt">最高满减20元</div>-->
                                <!--&lt;!&ndash;<br>&ndash;&gt;-->
                            <!--</div>-->
                        <!--</div>-->
                        <!--&lt;!&ndash;<div class="bts">使用</div>&ndash;&gt;-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div class="bot-text">全场通用全场通用全场通用全场通用全场通用全场通用全场通用全场通用全场通用</div>-->
            <!--</li>-->
        </ul>
    </div>
</template>

<script>
  import { Header } from 'mint-ui';
  import qs from "qs"
    export default {
        name: "cardIndex",
        data(){
            return{
                selected:'1',
                listData:[]
            }
        },
        methods:{
            getCard(){
                this.$ajax.post("",qs.stringify({
                    api_type:"wechat",
                    api_version:"1.0",
                    act:"coupon_list",
                    isEnd:"webroot",
                    open_id:"15601606633",
                    status:this.selected,
                    page:1,
                    pageSize:10
                }))
                    .then((data)=>{
                        console.log(data);
                        if(data.data.res == "success"){
                            var arr = data.data.errMsg.data;
                            if(!arr){
                                return;
                            }
                            console.log(arr);
                            for(let i =0;i<arr.length;i++){
                                this.listData.push(arr[i]);
                            }

                        }
                    })
            }
        },
        mounted(){
            this.getCard()
        },
        watch:{
            selected(){
                this.getCard();
                this.listData=[];
                this.page=0;
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
.mint-tab-item-label{
   font-size: px2rem($size_default);
}
#card-index{
  padding-top: 45px;
  font-size: px2rem($size_default);
}
  .navbar{
    /*color: #b4272d;*/

  }
.mint-tab-item{
    color: #515151;
  font-size: px2rem($size_default);
}
.is-selected{
    color: #b4272d!important;
}
.mint-navbar .mint-tab-item.is-selected{
    border-color:#b4272d!important ;
}
.l-u{
    padding: 0.3rem 0.4rem;
    background: white;
}
    .l-l{
        background: #ef7e7c;
        border-radius: 3px;
        padding:0.25rem 0.12rem ;
        margin-bottom: 0.3rem;
    }
    .content{
        /*width: 8.947rem;*/
        /*height: 2.413rem;*/
        background: white;
        border-radius: 3px;
        display: flex;
        position: relative;
    }
    .money{
        width: 3rem;
        flex-shrink: 0;
        height: 2.4rem;
        line-height: 2.4rem;
        text-align: center;
        color:#ef7e7c;
        border-right: 1px dotted #ef7e7c;
    }
    .num{
        font-weight: 600;
        font-size: 1rem;
    }
    .tx{
      font-size: px2rem($size_default);
    }
    .t-d{
        /*display: flex;*/
        /*position: relative;*/

    }
    .flx{
        height: 2.4rem;
        display: flex;
        align-items:center;
        padding-left: 1rem;
        font-family: "黑体";
        /*justify-content: center;*/
    }
    .bts{
        position: absolute;
        bottom: 0.2rem;
        right: 0.5rem;
        padding: 0.1rem 0.2rem;
        color: white;
        font-size: 12px;
        background: #ec7174;
        border-radius: 2px;
    }
    .bot-text{
        color: white;
        font-size: 12px;
        padding: 0.2rem 0.1rem 0 0.1rem;
    }
    .ed{
        background: #c1c8ca;
        color: #c1c8ca;
    }
    .edt{
        color: #c1c8ca;
        border-color: #c1c8ca;
    }
</style>
