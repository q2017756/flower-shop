<template>
    <div id="farm-c">
        <mt-header fixed class="header" title="关注农场">
          <mt-button @click="$router.go(-1)"  slot="left" icon="back"></mt-button>
            <mt-button  slot="right">编辑</mt-button>
        </mt-header>
        <ul>
            <li class="l-l">
                <div class="img-d">
                    <img src="../../../static/imgs/timg.jpg" alt="">
                </div>
                <div class="msg">
                    <div class="xxd"><img class="xx" src="../../../static/imgs/xing.png" alt=""><img class="xx" src="../../../static/imgs/xing.png" alt=""><img class="xx" src="../../../static/imgs/xing.png" alt=""></div>
                    <div class="name">花枝花卉农场</div>
                </div>
                <div class="btn">
                    <div class="s-x">2 <br> 上新</div>
                    <div class="b-s">
                        <span class="zxs">找相似</span>
                        <span class="slh"><img class="mor" src="../../../static/imgs/mor.png" alt=""></span>
                    </div>
                </div>
            </li>
            <li class="l-l">
                <div class="img-d">
                    <img src="../../../static/imgs/timg.jpg" alt="">
                </div>
                <div class="msg">
                    <div class="xxd"><img class="xx" src="../../../static/imgs/xing.png" alt=""><img class="xx" src="../../../static/imgs/xing.png" alt=""><img class="xx" src="../../../static/imgs/xing.png" alt=""></div>
                    <div class="name">花枝花卉农场</div>
                </div>
                <div class="btn">
                    <div class="s-x">2 <br> 上新</div>
                    <div class="b-s">
                        <span class="zxs">找相似</span>
                        <span class="slh"><img class="mor" src="../../../static/imgs/mor.png" alt=""></span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import { Header } from 'mint-ui';
    export default {
        name: "farmC"
    }
</script>

<style scoped>
    #farm-c{
        padding-top: 45px;
        font-size: 0.4rem;
    }
    .header{
        background: white;
        color: #515151;
    }
    #farm-c img{
        width: 100%;
        height: 100%;
    }
    .l-l{
        display: flex;
        padding:0.18rem 0.3rem ;
        background: white;
        margin-bottom: 0.2rem;
    }
    .img-d{
        width: 1.33rem;
        height: 1.45rem;
        flex-shrink: 0;
    }
    .msg{
        padding-left: 0.2rem;
        width: 5.5rem;
    }
    #farm-c .xx{
        width: 0.4rem;
        margin-left: 0.1rem;
    }
    .name{
        font-size: 0.35rem;
        padding-top: 0.15rem;
    }
    .xxd{
        padding-top: 0.2rem;
    }
    .s-x{
        text-align: right;
        font-size: 0.35rem;
        color: #b4272d;
        flex-shrink: 0;
    }
    .btn{
        width: 3rem;
        flex-shrink: 0;
    }
    .bs{

    }
    .zxs{
        font-size: 0.35rem;
        border: 1px solid #c1c8ca;
        padding: 0.1rem 0.2rem;
        border-radius: 2px;
    }
    .slh{
        text-align: right;
    }
   #farm-c .mor{
        width: 0.5rem;
       text-align: right;
       margin: 0.3rem 0 0 0.7rem;
       /*position: absolute;*/
       /*bottom: 0;*/
       /*right: 0;*/
    }
</style>
