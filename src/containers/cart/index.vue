<template>
    <div class="cart-page">
        <div class="cart-content">
            <header class='cart-header'>
                <!--<img src="../../assets/icon/back-black.png" alt="">-->
                <h3>购物车</h3>
                <span v-on:click="handleEdit" class="cart-edit">{{ isEdit ? '完成' : '编辑' }}</span>
            </header>

            <div v-if="cartCommodities.length === 0" class="cart-nothing">
                <div class="nothing-login">
                    <div class="nothing-cart-img"></div>
                </div>
            </div>
            <div v-if="cartCommodities.length > 0" class="cart-commodity">
                <cart-commodity
                    v-bind:handlePush="pushToProductDetail"
                    v-bind:handleSelect="handleSelect"
                    v-bind:isEdit="isEdit"
                    v-bind:handleRemove="handleRemove"
                    v-bind:handleChange="handleChangeCount"
                    v-bind:removeCartList="removeCartList"
                    v-bind:handleToFormat="handleToFormat"
                />
            </div>
        </div>
        <order-bar
            v-if="cartCommodities.length > 0"
            v-bind:totalPrice="totalPrice"
            v-bind:selectedCount="selectedCount"
            v-bind:totalCount="cartCommodityCount"
            v-bind:handleClick="handleSelectAll"
            v-bind:isEdit="isEdit"
            v-bind:removeCommodityCount="removeCommodityCount"
            v-bind:handleAction="handleAction"
        />
    </div>
</template>

<script>
    import cartCommodity from '@/components/cart/cartCommodity'
    import orderBar from '@/components/cart/orderBar'
    import {mapState, mapActions, mapGetters} from 'vuex'
    import qs from 'qs'
    import {Toast} from 'mint-ui'

    export default {
        data() {
            return {
                selectRemoveAll: false,
                cartCommodities: []
            }
        },
        components: {
            cartCommodity,
            orderBar
        },
        beforeRouteLeave(to, from, next) {
            this.changeCartEdit(false)
            this.resetCartCommodity()
            next()
        },
        computed: {
            ...mapState({

                removeCartList: state => {
                    console.log('========')
                    console.log(state.removeCartList)
                    return state.removeCartList
                },
                isEdit: 'cartIsEdit',
                totalPrice: state => {
                    const total = state.cartList.filter(c => c.selected).reduce((total, commodity, index) => {
                        return total + Number(commodity.price) * Number(commodity.num)
                    }, 0)
                    return total
                },
                selectedCount: state => {
                    const total = state.cartList.reduce((total, c) => {
                        total += c.selected ? Number(c.num) : 0
                        return total
                    }, 0)
                    return total
                }
            }),
            ...mapGetters(['cartCommodityCount', 'removeCommodityCount'])
        },
        methods: {
            ...mapActions([
                'selectCartCommodity', 'selectAllCartCommodity', 'getRemoveCartCommodity',
                'selectRemoveAllCartCommodity', 'removeCartCommodity', 'pushToCartFormat',
                'changeCartEdit', 'changeRemoveCartCommodity', 'finishEditCartCommodity',
                'resetCartCommodity'
            ]),
            getData() {
                // 购物车列表
                this.$axios('', {
                    act: 'carts_list',
                    open_id: localStorage.getItem('openId'),
                }, (data) => {
                    console.log('cart:', data)
                    if (data.data.res === "succ") {
                        if(data.data.result.no_rules_gids) {
                            this.cartCommodities = data.data.result.no_rules_gids[0].list
                            this.$store.state.cartList = data.data.result.no_rules_gids[0].list
                        }else {
                            Toast('购物车为空')
                        }
                    } else {
                        Toast(data.data.msg)
                    }
                })
            },
            pushToProductDetail(id) {
                this.$router.push(`/productDetail/${id}`)
            },
            handleSelect(commodity) {
                console.log(commodity)
                this.selectCartCommodity(commodity)
            },
            handleSelectAll() {
                if (!this.isEdit) {
                    this.selectAllCartCommodity()
                } else {
                    const selectCount = this.removeCartList.length
                    let selected = false
                    if (selectCount !== this.cartCommodities.length) {
                        selected = true
                    }
                    this.selectRemoveAllCartCommodity(selected)
                }
            },
            handleEdit() {
                if (this.isEdit) {
                    this.finishEditCartCommodity()
                } else {
                    this.selectRemoveAllCartCommodity(false)
                }
                this.changeCartEdit(!this.isEdit)
            },
            handleRemove(commodity) {
                this.getRemoveCartCommodity(commodity)
            },
            handleAction() {
                console.log('delete')
                if (!this.isEdit) {
                    // order
                    const orderOtherData = {
                        "pdt_desc":"\u9ed8\u8ba4\u89c4\u683c",
                        "is_activity":"0",//是否设置为活动商品 1 0
                        "dt_id":"1447",//运费模板ID,0代表使用默认模板
                        "weight":"12.000",//物品重量
                        "volume":"11.00",//物品体积
                        "type":"normal",//货品类型,normal=一般商品,presale=预售商品
                        "profit_price":"0",//利润价格
                        "nums":"1",//商品数量
                        "goodsType":"normal",//商品类型，normal=一般商品,presale=预售商品
                    }
                    console.log('下单')
                    console.log('selected data: ',this.$store.state.cartList.filter(item => item.selected === true));
                    let group = {}
                    this.$store.state.cartList.filter(item => item.selected === true).map(item => {
                        if(!group[item.farm_id]){
                            group[item.farm_id] = []
                        }
                        group[item.farm_id].push(item)
                    })
                    console.log(111,group);
                    for (const i in group) {
                        let totalNum = 0
                        group[i].map(item => {
                            totalNum += Number(item.num)
                        })
                        if(totalNum < 10) {
                            Toast(`${group[i][0].farm_name}商品不足10个，无法下单`)
                            return false
                        }else {
                            group[i].map(item => {
                                item = Object.assign(item,{'spec_desc': item.spec_value,'props': item.spec_value},orderOtherData)
                            })
                        }
                    }
                    this.$store.state.orderProd = group
                    this.$router.push('orderDetails')
                } else {
                    // remove
//                    this.selectRemoveAll = false
//                    this.removeCartCommodity(this.removeCartList)
                    this.$axios('', {
                        act: 'carts_del',
                        open_id: localStorage.getItem('openId'),
                        product_id: this.removeCartList.map(item => item.product_id).join(',')
                    }, (data) => {
                        console.log('cart edit:', data)
                        if (data.data.res === "succ") {
                            this.getData()
                        } else {
                            Toast(data.data.msg)
                        }
                    })
                }
            },
            // 修改商品
            handleChangeCount(commodity, currentValue) {
                console.log(commodity, currentValue)
//                this.pushToCartFormat(commodity)
//                this.changeRemoveCartCommodity({count: currentValue})
                this.$axios('', {
                    act: 'carts_edit',
                    open_id: localStorage.getItem('openId'),
                    update_cart: JSON.stringify({
                        product_id: commodity.product_id,
                        product_num: currentValue,
                    })
                }, (data) => {
                    console.log('cart edit:', data)
                    if (data.data.res === "succ") {
                        this.getData()
                    } else {
                        Toast(data.data.msg)
                    }
                })
            },
            handleToFormat(commodity) {
                this.pushToCartFormat(commodity)
                this.$router.push('/cartFormat')
            },
            handleLogin() {
                this.$router.push('/login')
            }
        },
        mounted() {
            this.$store.state.cartList = []
            this.getData()
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/common.scss';

    .cart-page {
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }

    .cart-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
    }

    .cart-header {
        height: $header_height;
        line-height: $header_height;
        background-color: #fff;
        position: relative;
        border-bottom: 1px solid $border_color;
        img {
            position: absolute;
            top: 0;
            left: px2rem(5);
            height: px2rem(26);
            padding: px2rem(12);
        }
    }

    .cart-header h3 {
        font-weight: normal;
        font-size: px2rem(18);
        text-align: center;
    }

    .cart-edit {
        position: absolute;
        font-size: px2rem(15);
        height: $header_height;
        right: px2rem(15);
        bottom: 0;
    }

    .cart-nothing {
        width: 100%;
        flex: 1;
        position: relative;
    }

    .nothing-policy {
        height: px2rem(35);
        padding: 0 px2rem(15);
        width: 100%;
        display: flex;
    }

    .nothing-policy li {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .nothing-policy li i {
        display: inline-block;
        width: px2rem(5);
        height: px2rem(5);
        background: url('../../assets/icon/dot.png') no-repeat;
        background-size: cover;
        margin-right: px2rem(3);
    }

    .nothing-login {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        width: 100%;
        left: 0;
        top: px2rem(250);
    }

    .nothing-cart-img {
        width: px2rem(124);
        height: px2rem(124);
        background: url('../../assets/icon/cart_nothing.png') no-repeat;
        background-size: cover;
    }

    .nothing-login .login {
        width: px2rem(240);
        height: px2rem(46);
        background-color: #b4282d;
        color: #fff;
        margin-top: px2rem(15);
        border-radius: px2rem(3);
        out-line: none;
    }
</style>


