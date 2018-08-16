<template>
    <div id="helpmsg">
        <mt-header fixed class="headers" title="花枝">
            <mt-button @click="$router.go(-1)"  slot="left" icon="back"></mt-button>
            <!--<mt-button icon="more" slot="right"></mt-button>-->
        </mt-header>
        <div class="content">
            <div id="title">订购流程</div>
            <p>1.查找商品 <br>
                如果您不知要如何挑选商品，建议您可以从分类开始，寻找适合您的商品。若您已知
                道您要找的东西，您可以直接利用搜索的方式，找到该样商品。 <br>
                <br>

                2.放入购物车 <br>
                （1）当您选定了一件商品后，在商品详情页点击“放入购物车”按钮，商品会自动添
                加到您的购物车中。此时，您还可以继续挑选商品，把想要购买的商品都放入购物车
                中，最后一起结算。 <br>
                （2）在选购中，每件商品的订购数量默认为一件，如果您想购买多件商品，可直接
                在购买单品页加减，也可在购物页面改写。 <br>
                （3） 如果您想删除购物车中的某样商品，可以点击“删除”按钮进行删除操作。 <br>
                <br>

                3.填写订单并提交 <br>
                （1）填写订货人信息 <br>
                请填写真实的订货人和收货人姓名、所在地区、详细的收货地址、邮编和联系电话。 <br>
                （2）选择支付信息 <br>
                春水堂为您提供了网上支付、货到付款、邮局汇款、银行转账等多种支付方式。 <br>
                （3）填写配送信息 <br>
                春水堂为您提供优质快递送货上门、普通邮递两种送货方式。如果您想选择优质快递
                送货上门，请先核对您的地址是否在相应的送货范围内。如果您不在快递送货上门的
                范围，请选择普通快递。 <br>
                （4）填写备注信息 <br>
                填写您的特殊要求或者提醒信息。 <br>
                （5）确认无误后，请点击“提交订单”按钮提交订单，完成订购。 <br>
                填写完以上信息之后，请仔细核对；确认无误后，请点击“提交订单”按钮提交订单。 <br>
                生成订单号后，表明您已经成功提交了订单。 <br>
                <br>

                4.查看订单信息 <br>
                提交订单表示您已经阅读并接受了春水堂的“用户协议”。您的订单是您购买春水堂产
                品的意愿表示，我们将通过电子邮件或者电话向您确认核实。
                您可以通过“订单查询”按钮查询您的订单信息。</p>
        </div>

    </div>
</template>

<script>
    export default {
        name: "helpmsg"
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/common.scss';
    #helpmsg{
        padding-top: 45px;
        font-size: px2rem($size_default);
    }
    .headers{
        background: white;
        color: #515151;
    }
    #title{
        font-size: 0.45rem;
        color: #b4272d;
        text-align: center;
        font-size: 0.55rem;
        padding-bottom: 0.5rem;
        padding-top: 0.5rem;
    }
    .content{
        background: white;
        color: #515151;
        padding: 0.2rem 0.3rem;
        font-family: "黑体";
        font-size: 0.35rem;
    }
</style>
