<template>
    <div id="get-card">
        <mt-header fixed class="header" title="优惠券">
            <mt-button @click="$router.go(-1)"  slot="left" icon="back"></mt-button>
            <!--<mt-button icon="more" slot="right"></mt-button>-->
        </mt-header>
        <ul class="card-ul">
            <li class="li-c">
                <div class="top">
                    <div class="zi">
                        <div class="mnd">
                            <span class="ic">￥</span>
                            <span class="mn">20</span>
                        </div>
                        <div class="ex">
                            <div class="txt">优惠券</div>
                            <div > <span class="font-smaller">满100元可用</span></div>
                        </div>
                    </div>
                    <div class="btd">
                        <span class="bts">立即领取</span>
                    </div>
                </div>
                <div class="bot">
                    <span class="font-smaller">满打发手动阀阿道夫阿斯蒂芬阿斯蒂芬阿道夫的阿瑟东安抚发到付阿道夫阿道夫啊阿斯顿啊啊手动阀打发发</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {Toast} from "mint-ui"
    import qs from "qs"
    export default {
        name: "getCard",
        data(){
            return{

            }
        },
        methods:{

        },
        mounted(){
            this.$ajax.post("",qs.stringify({
                api_type:"common",
                api_version:"1.0",
                act:"coupon_list",
                isEnd:"webroot"
            }))
                .then((data)=>{
                    console.log(data)
                })
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/common.scss';
    .header{
        background: white;
        color: #515151;
    }
    #get-card{
        padding-top: 45px;
        font-size: px2rem($size_default);
    }
    .card-ul{
        padding: 0 0.5rem;
    }
    .li-c{

    }
    .top{
        background: white;
        /*width: 8.933rem;*/
        padding:0 0.26rem;
        height: 2.8rem;
        display: flex;
        justify-content: space-between;
    }
    .zi{
        display: flex;
        color: #f18983;
    }
    .ic{
        font-size:0.6rem ;
        font-weight: 800;
    }
    .mn{
        font-size: 0.9rem;
        font-weight: 600;
    }
    .mnd,.ex{
        padding-top: 0.75rem;
    }
    .btd{
        position: relative;

    }
    .bts{
        display: inline-block;
        width: 3.493rem;
        height: 0.533rem;
        background: #f18983;
        color: white;
        border-radius: 2px;
        text-align: center;
        line-height: 0.533rem;
        position: absolute;
        bottom: 0.26rem;
        right: 0.26rem;
    }
    .bot{
        background: #f18983;
        color: white;
        padding: 0.1rem 0.26rem;
    }
</style>
