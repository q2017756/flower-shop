<template>
    <div class="category-item-container">
        <div v-if="imgShow" class="cic-header-pic"
             v-bind:style="{backgroundImage: 'url(/static/img/best.png)'}"></div>
        <!--<div class="cic-separator">-->
        <!--<span>{{ section.section.name }}分类</span>-->
        <!--</div>-->
        <!--<div class="category-items">-->
        <!--<category-item v-for="category in section.categories" v-bind:key="category.subCategoryId" v-bind:category="category" class="category-item" v-on:click.native="handleItemClick(category)" />-->
        <!--</div>-->
        <div class="title">类型</div>
        <div class="item-container">
            <span @click="handleList">全部</span>
            <span v-for="item in section"
                  :key="item.cat_id"
                  @click="handleList(item.cat_name)">{{ item.cat_name }}</span>
        </div>

    </div>
</template>

<script>
    import categoryItem from '@/components/category/categoryItem'

    export default {
        data() {
            return {
            }
        },
        props: ['section', 'handleClick', 'imgShow'],
        components: {
            categoryItem
        },
        computed: {

        },
        methods: {
            handleList(name) {
                localStorage.setItem('productList',JSON.stringify({
                    catId: '',
                    tagId: '',
                    keywords: name
                }))
                this.$router.push('productList')
            }
        },
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/mixin.scss';

    .category-item-container {
        flex: 1;
        height: 100%;
        overflow-y: auto;
        /*padding: px2rem(15);*/
        background: #fff;
    }

    .cic-header-pic {
        width: 100%;
        height: px2rem(120);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .cic-separator {
        height: px2rem(54);
        line-height: px2rem(54);
        text-align: center;
    }

    .cic-separator span {
        font-size: px2rem($size_small);
        position: relative;
        &::before {
            left: - px2rem(28);
        }
        &::after {
            right: - px2rem(28);
        }
        &::before, &::after {
            position: absolute;
            content: '';
            top: 0;
            bottom: 0;
            margin: auto;
            height: 1px;
            width: px2rem(20);
            background-color: #d9d9d9;
            // 更改一个元素的变形原点
            transform-origin: 50% 100% 0;
        }
    }

    .category-items {
        display: flex;
        flex-wrap: wrap;
    }

    .category-item:nth-child(3n) {
        margin-right: 0;
    }

    .title {
        font-size: px2rem($size_default);
        background: #f4f4f4;
        color: #666;
        padding: $edge_default $edge_default $edge_small $edge_default;
    }

    .item-container {
        background: #fff;
        padding: px2rem(12);
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        span {
            padding: px2rem(8) px2rem(12);
            color: #666;
        }
    }

</style>
