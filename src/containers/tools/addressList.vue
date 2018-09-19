<template>
    <div id="address-list">
        <mt-header fixed class="header" title="地址列表">
            <mt-button @click="$router.go(-1)"  slot="left" icon="back"></mt-button>
            <!--<mt-button icon="more" slot="right"></mt-button>-->
        </mt-header>
        <van-address-list
            v-model="chosenAddressId"
            :list="list"
            @add="onAdd"
            @edit="onEdit"
        />
    </div>
</template>

<script>
    import { AddressList } from 'vant';
    import { Toast } from 'mint-ui';
    export default {
        name: "addressList",
        data(){
            return{
                chosenAddressId: '1',
                list: [
                    {
                        id: '1',
                        name: '张三',
                        tel: '13000000000',
                        address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
                    },
                    {
                        id: '2',
                        name: '李四',
                        tel: '1310000000',
                        address: '浙江省杭州市拱墅区莫干山路 50 号'
                    }
                ],
            }
        },
        components:{
            [AddressList.name]: AddressList,
            // [Popup.name]:Popup
        },
        methods: {
            onAdd() {
                Toast('新增地址');
                this.$router.push("/addressX")
            },

            onEdit(item, index) {
                Toast('编辑地址:' + index);

            }
        }
    }
</script>

<style lang="scss"  scoped>
    @import '../../styles/common.scss';
    #address-list{
        font-size: px2rem($size_default);
        padding-top: 45px;
    }
    .header{
        background: white;
        color: #515151;
    }
</style>
