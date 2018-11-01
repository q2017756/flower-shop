<template>
    <div class="farm-list">
        <app-header title="品牌基地"></app-header>
        <div class="item" @click="goFarmDetails(item)" v-for="item in farmList" >
            <img :src="item.img_url" alt="">
            <div class="text">
                <p class="title">{{item.farm_name}}</p>
                <p class="font-small">{{item.memo}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    import appHeader from '@/components/common/appHeader'

    export default {
        data() {
            return {
                farmList:[]
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
                this.$router.push({path:"/farmDetail",query:{farmId:msg.farm_id,name:msg.farm_name,start:msg.farm_lv_id}})
            }
        },
        mounted(){
            console.log("sdfsdfas")
            // 接口对接错误
            this.$axios('', {
                act: 'getFarmList',
            }, (data) => {
                if (data.data.res === "succ") {
                    this.farmList=data.data.result.list
                } else {
                    Toast(data.data.msg)
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
            img {
                width: 100%;
                height: px2rem(160);
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



