<template>
    <div class="home-content">
        <carousel-container :imgs="imgs" :imgsDetail="imgsDetail"/>
        <home-list title="王牌切花" :list="wangpaiList" id="146672" @handleDetail="handleDetail"></home-list>

        <div class="home-member">
            <img class="item-big" @click="handleMember" src="../../assets/img/home-member.png"/>
            <div class="item-small" @click="handleScore">
                <p class="font-small">积分兑换</p>
                <p class="font-smaller">签到领积分享优惠</p>
            </div>
            <div class="item-small" @click="handleMember">
                <p class="font-small">特级优惠</p>
                <p class="font-smaller">全程参与优选历程</p>
            </div>
        </div>

        <div class="home-farm">
            <div class="productor-header">
                <h2>品牌基地种植直供</h2>
                <i/>
            </div>
            <hotRecommend :hots="data.hotItems"/>
        </div>

        <home-list title="新品首发" :list="newGoodsList" id="146666" @handleDetail="handleDetail"></home-list>

        <div class="productor-container">
            <div class="productor-header">
                <h2>人气推荐</h2>
                <i/>
            </div>
            <div class="productor-content">
                <productor-item v-for="item,index in hotGoodsList" :key="index"
                                :productor="item"/>
            </div>
        </div>

        <best-topic :topic="topData"/>
        <div @click="goTop" style="text-align: center;background: white;margin: -0.14rem 0 0.14rem 0;padding: 0.2rem 0;border-top: 1px solid #cccccc">查看更多专题精选>>></div>
        <div class="home-activity">
            <div class="welfare" @click="handleCoupon">
                <p class="font-default">福利社</p>
                <p class="font-small">抢券领福利</p>
            </div>
            <div class="time-buy" @click="handleTimeShop">
                <p class="font-default">限时购</p>
                <p class="font-small">先到先得,</p>
                <p>好货领不停！</p>
            </div>
            <div class="group-buy" @click="handleGroup">
                <p class="font-default">花卉一起拼</p>
                <p class="font-small">超值一元团</p>
                <p class="font-smaller">全场包邮</p>
            </div>
        </div>

        <div class="home-like">
            <div class="text-center">
                <span class="title-line">猜你喜欢</span>
            </div>
            <farm-item v-for="item,index in historyList" type="goods" :farmInfo="item" :key="index"></farm-item>
        </div>

        <bottom-footer/>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    import qs from 'qs'


    import {fetchHome} from '@/utils/fetchData'
    import carouselContainer from './carouselContainer'
    import homeList from './homeList'
    import hotRecommend from './hotRecommend'
    import bestTopic from './bestTopic'
    import productorItem from '@/components/home/productorItem'
    import bottomFooter from '@/components/common/bottomFooter'
    import farmItem from '@/components/home/farmItem'

    export default {
        components: {
            homeList,
            hotRecommend,
            bestTopic,
            carouselContainer,
            bottomFooter,
            productorItem,
            farmItem
        },
        data() {
            return {
                wangpaiList: [],
                newGoodsList: [],
                hotGoodsList: [],
                historyList: [],
                imgsDetail:[],
                topData: {},
                imgs: ['/static/img/best.png', '/static/img/farm.png', '/static/img/farm-header.png', '/static/img/farm-invite.png', '/static/img/home-member.png',],
                data: {
                    "hotItems": [
                        {
                            "title": "万卉生态基地",
                            "pic": "/static/img/farm.png",
                        },
                        {
                            "title": "万卉生态基地2",
                            "pic": "/static/img/farm.png",
                        },
                        {
                            "title": "万卉生态基地3",
                            "pic": "/static/img/farm.png",
                        },
                        {
                            "title": "万卉生态基地",
                            "pic": "/static/img/farm.png",
                        },
                        {
                            "title": "万卉生态基地2",
                            "pic": "/static/img/farm.png",
                        },
                        {
                            "title": "万卉生态基地3",
                            "pic": "/static/img/farm.png",
                        }
                    ],
                    "bestTopic": {
                        "pic": "/static/img/best.png",
                        "title": "无接口",
                        "description": "无接口",
                        "lowestPrice": "19.9",
                        "topicId": "t101"
                    }
                }
            }
        },
        methods: {
            getData() {
                this.$axios('', {
                    act:'getGoodsList',
                    page:1,
                    pageLimit:10,
                    tag_id: 146672
                }, (data) => {
                    if(data.data.res=="succ"){
                        this.wangpaiList = data.data.result.list.slice(0,6)
                    }else{
                        Toast(data.data.msg)
                    }
                })
                this.$axios('', {
                    act:'getGoodsList',
                    page:1,
                    pageLimit:10,
                    tag_id: 146666
                }, (data) => {
                    if(data.data.res=="succ"){
                        this.newGoodsList = data.data.result.list.slice(0,6)
                    }else{
                        Toast(data.data.msg)
                    }
                })
                this.$axios('', {
                    act:'getGoodsList',
                    page:1,
                    pageLimit:10,
                    tag_id: 146664
                }, (data) => {
                    console.log(1234,data.data.result);
                    if(data.data.res=="succ"){
                        this.hotGoodsList = data.data.result.list.slice(0,6)
                    }else{
                        Toast(data.data.msg)
                    }
                })

                this.$axios('', {
                    act:'getGoodsLSList',
                    page:1,
                    pageLimit:10,
                    memberid:1
                }, (data) => {
                    if(data.data.res=="succ"){
                        this.historyList = data.data.result.list
                        this.historyList.map(item => {
                            item.farm_name = item.name
                            item.img_url = item.thumbnail_pic
                        })
                    }else{
                        Toast(data.data.msg)
                    }
                })
                this.$axios('', {
                    act:'getSlideshow',
                }, (data) => {
                    if(data.data.res=="succ"){
                        this.imgsDetail = data.data.result
                        this.imgs = []
                        this.imgsDetail.map((item) => {
                            this.imgs.push(item.url)
                        })
                    }else{
                        Toast(data.data.msg)
                    }
                })
                this.$axios("",{
                    act:"getTopicList",
                    page:1,
                    pageLimit:"1"
                },(data)=>{
                    if(data.data.res == "succ"){
                        this.topData=data.data.result.data.list[0];
                    }
                })
            },
            goTop(){
              this.$router.push("/TopList")
            },
            handleDetail(id) {
                this.$router.push(`/productDetail/${id}`)
            },
            handleCoupon() {
                this.$router.push('/getCard')
            },
            handleTimeShop() {
                this.$router.push('/timeShop')
            },
            handleMember() {
                this.$router.push('/memberCard')
            },
            handleScore() {
                this.$router.push('/score')
            },
            handleGroup() {
                this.$router.push('/group')
            },
        },
        // 在该方法中进行网络请求等操作
        mounted() {

            this.getData()
        }
    }
</script>

<style lang="scss" scpoed>
    @import '../../styles/common.scss';
    .home-content {
        overflow-y: scroll;
        overflow-x: hidden;
    }
    .home-member {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: $edge_small;
        .item-big {
            flex: 0 0 100%;
            width: 100vw;
            height: px2rem(100);
        }
        .item-small {
            flex: 0 0 50%;
            padding: px2rem(10);
            background: #C6606E;
            text-align: center;
            &:last-child {
                background: #D1808B;
            }
            p {
                color: #f4f4f4;
            }
        }
    }

    .home-activity {
        @include flex_default;
        flex-direction: column;
        flex-wrap: wrap;
        background: #fff;
        height: px2rem(245);
        margin-bottom: $edge_small;
        div {
            border: 1px solid #eee;
            border-right: none;
            padding: $edge_default;
            background-repeat: no-repeat;

        }
        .welfare {
            flex: 0 0 px2rem(245);
            width: 40vw;
            background-image: url("../../assets/img/home-activity-1.png");
            background-size: 60%;
            background-position: 85% 80%;
        }
        .time-buy {
            flex: 3;
            width: 60vw;
            background-image: url("../../assets/img/home-activity-2.png");
            background-size: 50%;
            background-position: 85% 80%;
        }
        .group-buy {
            flex: 2;
            width: 60.2vw;
            margin-top: -1px;
            background-image: url("../../assets/img/home-activity-3.png");
            background-size: 35%;
            background-position: 75% 80%;
        }
        .font-default {
            color: #000;
        }
    }


</style>

