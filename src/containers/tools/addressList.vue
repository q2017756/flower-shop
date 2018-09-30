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
            @select="check"
        />
    </div>
</template>

<script>
    import { AddressList } from 'vant';
    import { Toast } from 'mint-ui';
    // import urls from "../../utils/url"
    import qs from "qs"
    export default {
        name: "addressList",
        data(){
            return{
                chosenAddressId: '1',
                list: [
                ],
                CustList:[]
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
                // Toast('编辑地址:' + index);
                console.log(this.CustList[index]);
                let address = this.CustList[index]
                this.$router.push({ name:"address", params:address})
            },
            check(item,index){
                if(this.$route.query.isSelect){
                    Toast("选中");
                    // console.log(item,index);
                    let address = this.CustList[index];
                    this.$router.push({name:"orderDetails",params:address})
                    console.log(address)
                }
            }
        },
        mounted(){
            this.$ajax.post("",qs.stringify({
                api_type:"wechat",
                api_version:"1.0",
                act:"address_list",
                isEnd:"webroot",
                open_id:"15601606633"
            }))
                .then((data)=>{
                    console.log(data);
                    if(data.data.res=="success"){
                        let dataArr=[];
                        let arr = data.data.errMsg.data
                        for(let i=0;i<arr.length;i++){
                            dataArr.push({
                                id:arr[i].id,
                                name:arr[i].ship_name,
                                address:arr[i].province+arr[i].city+arr[i].region+arr[i].address,
                                tel:arr[i].ship_mobile,
                            })
                        };
                        this.list = dataArr;
                        this.CustList = arr;
                    }
                })
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
