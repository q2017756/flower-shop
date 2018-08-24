<template>
    <div class="farm-list">
        <app-header title="品牌基地"></app-header>
        <div class="item" v-for="n in 2" :key="n">
            <img src="../../assets/img/farm.png" alt="">
            <div class="text">
                <p class="title">xxxxx农场</p>
                <p class="font-small">一望无际大草原一望无际大草原一望无际大草原一望无际大草原一望无际大草原一望无际大草原一望无际大草原一望无际大草原一望无际大草原一望无际大草原一望无际大草原</p>
            </div>
        </div>
    </div>
</template>
<script>
    import appHeader from '@/components/common/appHeader'

    export default {
        data() {
            return {}
        },
        props: {
        },
        components: {
            appHeader
        },
        methods: {
            handleStory() {
                this.$router.push('/farmStory')
            }
        },
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



