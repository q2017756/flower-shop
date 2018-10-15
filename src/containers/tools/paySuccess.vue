<template>
    <div id="success">
        <img src="../../assets/img/paySucc.png" style="width: 2.5rem;margin:4rem auto 0" alt=""><br>
        <span class="text">支付成功</span><br>
        <span v-show="order_id" v style="display: inline-block;padding-top: 0.3rem">订单号：{{order_id}}</span><br>
        <span @click="go" class="butt">返回首页</span>
    </div>
</template>

<script>
    export default {
        name: "paySuccess",
        data(){
          return{
              order_id:""
          }
        },
        methods:{
            go(){
                this.$router.push("/home/recommend")
            }
        },
        mounted(){
            function getUrlParam(name) {
                var url = window.location.href;
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
                var r = url
                    .split("?")[1]
                    .substr(0)
                    .match(reg); //匹配目标参数
                if (r != null) return unescape(r[2]);
                return null; //返回参数值
            };
            this.order_id=getUrlParam("order_id")
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/common';
    #success{
        text-align: center;
    }
    .text{
        color: #515151;
        font-size: px2rem(18);
        display: inline-block;
        padding-top: 0.35rem;
        font-weight: 600;
    }
    .butt{
        display: inline-block;
        width: 5rem;
        height: 1.3rem;
        border-radius: 3px;
        font-size: px2rem(16);
        border: solid 0.03rem #b4272d;
        text-align: center;
        line-height: 1.3rem;
        color: #b4272d;
        margin-top: 2rem;
    }
</style>
