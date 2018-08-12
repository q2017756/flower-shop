<template>
    <div id="address">
        <mt-header fixed class="header" title="编辑地址">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button  slot="right">保存</mt-button>
        </mt-header>
        <ul>
            <li>收货人</li>
            <li>手机号码</li>
            <li>省份、城市、县区</li>
            <li>详细地址：如街道、小区、单元</li>
        </ul>
        <div>
            <div>设置为默认地址</div>
            <div></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "address"
    }
</script>

<style scoped>
    .header{
        background: white;
        color: #515151;
    }
    #address{
        padding-top: 45px;
    }
    ul{
        background: white;
        padding:0 0.26rem;
    }
    li{
        height: 1.2rem;
        font-size: 0.4rem;
        line-height: 1.2rem;
        border-bottom: 1px solid #dfdfdf;
        color: #7f7f7f;
    }
</style>
