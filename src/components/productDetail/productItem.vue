<template>
    <div class="product-item" @click="handleDetail" :class="isCate ? 'cate' : ''">
        <div class="img-container">
            <img :src="img" alt="">
        </div>
        <div class="info">
            <p class="title">{{name}}</p>
            <slot name="desc"></slot>
        </div>
    </div>
</template>
<script>

    export default {
        data() {
            return {}
        },
        props: {
            name: '',
            img: '',
            isCate: {
                type: Boolean,
                default: false
            }
        },
        components: {},
        methods: {
            handleDetail() {
                this.$emit('handleDetail')
            }
        },
    }
</script>
<style lang="scss" scoped>
    @import '../../styles/common';

    .product-item {
        display: flex;
        height: px2rem(125);
        padding: $edge_small $edge_default;
        background: #fff;
        margin-bottom: $edge_small;
        &.cate {
            padding: $edge_small 0;
            border-bottom: 1px solid #eee;
        }
        .img-container {
            @include flex_default;
            justify-content: center;
            width: px2rem(120);
            margin-right: px2rem(20);
            overflow: hidden;
            img {
                max-height: 90%;
            }
        }
        .info {
            display: flex;
            flex-direction: column;
            margin-top: $edge_default;
            width: 60%;
            .title {
                height: px2rem(44);
                line-height: px2rem(22);
                overflow: hidden;
            }
        }
    }


</style>



