<template>
    <div class="category-item-container">
        <!--<div v-if="imgShow" class="cic-header-pic"-->
             <!--v-bind:style="{backgroundImage: 'url(/static/img/best.png)'}"></div>-->
        <!--<div class="cic-separator">-->
        <!--<span>{{ section.section.name }}分类</span>-->
        <!--</div>-->
        <!--<div class="category-items">-->
        <!--<category-item v-for="category in section.categories" v-bind:key="category.subCategoryId" v-bind:category="category" class="category-item" v-on:click.native="handleItemClick(category)" />-->
        <!--</div>-->
        <!--<div class="title">类型</div>-->
        <!--<div class="item-container">-->
            <!--<span @click="handleList('')">全部</span>-->
            <!--<span v-for="item in section"-->
                  <!--:key="item.cat_id"-->
                  <!--@click="handleList(item.cat_name)">{{ item.cat_name }}</span>-->
        <!--</div>-->
        <div v-if="productList" class="item-container">
            <product-item
                v-for="(item,index) in productList"
                :key="index"
                :name="item.name"
                :img="item.thumbnail_pic"
                :isCate="true"
                @handleDetail="handleDetail(item)">
                <div class="item-desc" slot="desc">
                    <div>
                        <div class="store">基地: {{item.store_name}}</div>
                        <div class="price-container">
                            <span class="price">￥{{item.price}}</span>
                            <span class="old-price">￥{{item.gprice}}</span>
                        </div>
                    </div>
                    <img src="../../assets/icon/tabbar-cart.png" @click.stop="addCart(item)" alt="">
                </div>
            </product-item>
        </div>
        <div class="null-data" v-else>暂无数据</div>
    </div>
</template>

<script>
    import categoryItem from '@/components/category/categoryItem'
    import productItem from '@/components/productDetail/productItem'
    import {Toast} from 'mint-ui'

    export default {
        data() {
            return {
                productList: []
            }
        },
        props: ['section', 'handleClick', 'imgShow'],
        components: {
            categoryItem,productItem
        },
        computed: {

        },
        watch: {
          section() {
              this.$axios('', {
                  act: 'getGoodsList',
                  page: 1,
                  // 暂时未做分页
                  pageLimit: 99999,
                  cat_id: this.section,
              }, (data) => {
                  console.log('list:', data)
                  if (data.data.res === "succ") {
                      this.productList = data.data.result.list
                  } else {
                      Toast(data.data.msg)
                  }
              })
          }
        },
        methods: {
            handleList(name) {
                localStorage.setItem('productList',JSON.stringify({
                    catId: '',
                    tagId: '',
                    keywords: name
                }))
                this.$router.push('productList')
            },
            addCart(item) {
                console.log(123);
                this.$axios('', {
                    act: 'getGoodsInfos',
                    goods_id: item.goods_id
                }, (data) => {
                    console.log('guige:', data)
//                    加入购物车
                    if (data.data.res === "succ") {
                        this.$axios('', {
                            act: 'carts_add',
                            product_id: data.data.result.product[0].pid,
                            open_id: localStorage.getItem('openId'),
                            product_num: 1
                        }, (data2) => {
                            console.log('add:', data2)
                            if (data2.data.res === "succ") {
                                Toast('添加购物车成功')
                            } else {
                                Toast(data2.data.msg)
                            }
                        })
                    } else {
                        Toast(data.data.msg)
                    }
                })

            },
            handleDetail(item) {
                this.$router.push(`/productDetail/${item.goods_id}`)
            },
        },
        mounted() {
            console.log(1);
            this.$axios('', {
                act: 'getGoodsList',
                page: 1,
                // 暂时未做分页
                pageLimit: 99999,
                cat_id: this.section,
            }, (data) => {
                console.log('list:', data)
                if (data.data.res === "succ") {
                    this.productList = data.data.result.list
                } else {
                    Toast(data.data.msg)
                }
            })
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
            padding: px2rem(8) px2rem(12) px2rem(8) 0;
            color: #666;
        }
    }

    .item-desc {
        display: flex;
        justify-content: space-between;
        img {
            align-self: flex-end;
            width: px2rem(20);
            height: px2rem(20);
            padding: px2rem(10) px2rem(10) 0 px2rem(10);
        }
        .store {
            color: #c5c5c5;
        }
        .price-container {
            /*display: flex;*/
            /*flex-direction: column;*/
        }
        .price {
            margin-right: px2rem(5);
            font-size: px2rem($size_default);
            color: $red_default;
        }
        .old-price {
            font-size: px2rem($size_small);
            color: $text_color;
            text-decoration: line-through;
        }
        .info-container {
            @include flex_default;
            justify-content: space-between;
            margin-bottom: px2rem(5);
            padding-top: px2rem(3);
            .num {
                margin: 0 px2rem(10) 0 px2rem(-18);
                padding: px2rem(2) px2rem(5);
                background: #eee;
                border-radius: 5px;
                color: #000;
            }
            .comment {
                padding: px2rem(2) px2rem(5);
                background: #eee;
                border-radius: 5px;
                color: #000;
            }
        }
    }

</style>
