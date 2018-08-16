<template>
    <div id="aboutus">
        <mt-header fixed class="header" title="关于花知">
            <mt-button @click="$router.go(-1)"  slot="left" icon="back"></mt-button>
            <!--<mt-button icon="more" slot="right"></mt-button>-->
        </mt-header>
        <img src="../../../static/imgs/aboutus.png">
    </div>
</template>

<script>
    import { Header } from 'mint-ui';
    export default {
        name: "aboutUs"
    }
</script>

<style scoped>
    .header{
        background: white;
        color: #515151;
    }
    #aboutus{
        padding-top: 45px;
    }
    img{
        width: 100%;
    }
</style>
