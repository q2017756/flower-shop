<template>
    <div>
        <div class="farm-container" v-for="farm in farmList">
            <p class="farm-name">基地: {{farm.name}}</p>
            <div  class="cart-commodity"
                v-for="commodity in group[farm.id]"
                :key="commodity.product_id">
                <i v-if="isEdit" class="edit-select"
                   :class="[selected(commodity) ? 'cart-select' : '']"
                   @click="handleRemoveSelect(commodity)"/>
                <i v-else class="select-icon"
                   :class="[commodity.selected ? 'cart-select' : '']"
                   @click.stop="_handleSelect(commodity)"/>
                <div class="commodity-pic">
                    <img class="img" :src="commodity.thumbnail_pic"/>
                    <div class="tag" v-if="commodity.is_mj">满减</div>
                </div>
                <div class="cart-commodity-content" @click="_handlePush(commodity)">
                    <div v-if="isEdit">
                        <!--暂时不做规格选择-->
                        <!--<div class="cart-commodity-edit-select" v-on:click="handleToFormat(commodity)">-->
                        <div class="cart-commodity-edit-select">
                            <div class="title2">{{ commodity.name }}</div>
                            <span>已选择：{{ commodity.spec_value }}</span><i/>
                        </div>
                        <div class="cart-commodity-edit-number">
                            <p class="price">¥{{ commodity.price }}</p>
                            <step class="step"
                                  :commodity="commodity"
                                  :current="Number(commodity.num)" @
                                  :handleChange="handleChangeCount"/>
                        </div>
                    </div>
                    <div v-else>
                        <p class="title-container">
                            <span class="title">{{ commodity.name }}</span>
                            <span class="count">x{{ commodity.num }}</span>
                        </p>
                        <p class="description">{{ commodity.spec_value }}</p>
                        <p class="price">¥{{ commodity.price }}</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import step from '@/components/common/step'

    export default {
        data() {
            return {
                farmList: [],
                farmIdList: [],
            }
        },
        computed: {
            selected() {
                return (commodity) => {
                    return this.removeCartList.indexOf(commodity) >= 0
                }
            },
            group() {
                let group = {}
                this.$store.state.cartList.map(item => {
                    if(!group[item.farm_id]){
                        group[item.farm_id] = []
                    }
                    group[item.farm_id].push(item)
                })
                this.$store.state.cartGroup = group
                return group
            }
        },
        components: {
            step
        },
        // props: ['commodity', 'handleSelect', 'handlePush', 'isEdit', 'handleRemove', 'handleChange', 'removeCartList', 'handleToFormat'],
        props: {
            handleSelect: {
                type: Function,
                default: () => {
                }
            },
            isEdit: Boolean,
            removeCartList: Array,
            handlePush: {
                type: Function,
                default: () => {
                }
            },
            handleRemove: {
                type: Function,
                default: () => {
                }
            },
            handleChange: {
                type: Function,
                default: () => {
                }
            },
            handleToFormat: {
                type: Function,
                default: () => {
                }
            }
        },
        methods: {
            _handleSelect(commodity) {
                this.handleSelect(commodity)
            },
            _handlePush(commodity) {
                if (this.isEdit) return
                this.handlePush(commodity.goods_id)
            },
            handleRemoveSelect(commodity) {
                this.handleRemove(commodity)
            },
            handleChangeCount(currentVal,commodity) {
                this.handleChange(commodity, currentVal)
            }
        },
        mounted() {
            this.$store.state.cartList.map(item => {
                if(this.farmIdList.indexOf(item.farm_id) < 0){
                    this.farmIdList.push(item.farm_id)
                    this.farmList.push({
                        id: item.farm_id,
                        name: item.farm_name,
                    })
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/mixin.scss';
    .farm-container {
        margin-top: px2rem(10);
        .farm-name {
            padding: $edge_default;
            border-bottom: 1px solid #eee;
            background: #fff;
            font-size: px2rem($size_middle);
        }
    }
    .cart-commodity {
        background-color: #fff;
        height: px2rem(92);
        display: flex;
        align-items: center;
    }

    .cart-commodity .select-icon, .cart-commodity .edit-select {
        width: px2rem(19);
        height: px2rem(19);
        background: url('../../assets/icon/unselect.png') no-repeat;
        background-size: cover;
        margin: 0 px2rem(15);
    }

    .cart-commodity .cart-select {
        background-image: url('../../assets/icon/select.png');
    }

    .commodity-pic {
        width: px2rem(70);
        height: px2rem(70);
        margin-right: px2rem(10);
        position: relative;
        .img{
            width: 100%;
            height: 100%;
        }
        .tag{
            background: #b4282d;
            color: white;
            position: absolute;
            left: 0;
            top: 0;
            font-size: px2rem(8);
            padding: 0 px2rem(4);
        }
    }

    .cart-commodity-content {
        flex: 1;
        padding-right: px2rem(15);
    }

    .title-container {
        display: flex;
        justify-content: space-between;
        margin-bottom: px2rem(5);
    }

    .title-container .title, .title-container .count, .price {
        font-size: px2rem($size_middle);
    }

    .description {
        font-size: px2rem($size_small);
        line-height: px2rem($size_middle);
        margin-bottom: px2rem(5);
        @include ellipsis;
    }

    .cart-commodity-edit-select {
        margin-bottom: px2rem(20);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .cart-commodity-edit-select span {
        width: px2rem(150);
        color: $text_color;
        font-size: px2rem(12);
        @include ellipsis;
        text-align: right;
        padding-right: px2rem(8);
        padding-left: px2rem(10);
    }

    .cart-commodity .cart-commodity-edit-select i {
        display: inline-block;
        width: px2rem(6);
        height: px2rem(10);
        background: url('../../assets/icon/to.png') no-repeat;
        background-size: cover;
    }

    .cart-commodity-edit-number {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }

    .cart-commodity-edit-number .step {
        height: px2rem(27);
        width: px2rem(130);
    }
    .title2 {
        width: px2rem(60);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>
