<template>
    <div class="farm-list">
        <app-header title="精品专题"></app-header>
        <div class="item" @click="goFarmDetails(item)" v-for="item in topData" >
            <div class="box">
                <img :src="item.images.url" alt="">
            </div>

            <div class="text">
                <p class="title">{{item.title}}</p>
                <p class="font-small">{{item.description}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    import appHeader from '@/components/common/appHeader'

    export default {
        data() {
            return {
                topData:[]
            }
        },
        props: {
        },
        components: {
            appHeader
        },
        methods: {
            handleStory() {
                this.$router.push('/farmStory')
            },
            goFarmDetails(msg){
                console.log(msg);
                this.$router.push({path:"/TopDetails",query:{id:msg.topic_id}})
            }
        },
        mounted(){
            console.log("sdfsdfas")
            // 接口对接错误
            this.$axios("",{
                act:"getTopicList",
                // page:1,
                // pageLimit:"1"
            },(data)=>{
                console.log("ssssssss")
                console.log(data);
                if(data.data.res == "succ"){
                    this.topData=data.data.result.data.list;
                }
            })
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../styles/common';
    .farm-list {
        .item {
            margin-top: $edge_small;
            padding: $edge_small 0;
            background: #fff;
            .box{
                width: 94%;
                height: px2rem(160);
                margin: 0 auto;
                border-radius: 2px;
                overflow: hidden;
                img {
                    width: 100%;
                    height: px2rem(160);
                }
            }

            .text {
                padding: px2rem(10) px2rem(15);
            }
            .title {
                @include ellipsis;
                margin-bottom: px2rem(4);
                font-size: px2rem($size_default);
                color: $text_color;
            }
        }
    }


</style>



