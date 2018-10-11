<template>
    <div id="success">
        <img src="../../assets/img/paySucc.png" style="width: 2.5rem;margin:4rem auto 0" alt=""><br>
        <span class="text">支付成功</span><br>
        <span @click="go" class="butt">返回首页</span>
    </div>
</template>

<script>
    export default {
        name: "paySuccess",
        methods:{
            go(){
                this.$router.push("/home/recommend")
            }
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
