<template>
    <div class="category-page">
        <header class="category-header">
            <input class="search-input center" type="text" placeholder="玫瑰" @click="handleSearch"/>
        </header>
        <div class="category-content">
            <section-container class="content-left" v-bind:sections="sections" v-bind:onChange="handleChangeSection"/>
            <category-item-container class="content-right" :imgShow="true" v-bind:section="section"
                                     v-bind:handleClick="handlePushToCommodity"/>
        </div>
    </div>
</template>

<script>
    import categoryItemContainer from './categoryItemContainer'
    import sectionContainer from './sectionContainer'
    import {fecthCategory} from '@/utils/fetchData'
    import {Toast} from 'mint-ui'

    export default {
        data() {
            return {
                sections: [],
                section: {}
            }
        },
        components: {
            categoryItemContainer,
            sectionContainer
        },
        methods: {
            getData() {
                this.$axios('', {
                    act: 'goodsTagCatList',
                    page: 1,
                    pageLimit: 10,
                }, (res) => {
                    console.log('tag:', res);
                    if (res.data.res == "succ") {
//                        this.segmentArr = res.data.result
                        this.sections = Object.keys(res.data.result).map(key => res.data.result[key]);
                        this.section = this.sections[0].cat_id
//                        this.section = Object.keys(this.section).map(key => this.section[key]);
                        console.log(1111,this.section);
                    } else {
                        Toast(res.data.msg)
                    }
                })
            },
            handleSearch() {
                console.log('handle search in category page...')
                this.$router.push('/search')
            },
            handleChangeSection(section) {
//                console.log('handleChangeSection',section.sec_cat)
                this.section = section
            },
            handlePushToCommodity(section, commodity) {
                console.log(section)
                console.log(commodity)
                this.$router.push('/productList')
            }
        },
        mounted() {
            this.getData()
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/common.scss';

    .category-page {
        height: 100%;
        width: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }

    .category-header {
        display: flex;
        height: px2rem(44);
        background-color: #fff;
        align-items: center;
        border-bottom: 1px solid $border_color;
    }

    .category-content {
        width: 100%;
        flex: 1;
        overflow: hidden;
        display: flex;
    }

    .content-left {
        width: px2rem(81);
        height: 100%;
        background-color: #fff;
        border-right: 1px solid $border_color;
    }

    .content-right {
        background-color: #fff;
        flex: 1;
    }

</style>
