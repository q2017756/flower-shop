<template>
    <div id="good">
        <div style="position: fixed;width: 100%;height: 100%;top: 0;left: 0;background: white;z-index: -999"></div>
        <ul>
            <li>
                <div class="img-d">
                    <img src="" alt="">
                </div>
                <div class="msg-d">
                    <div class="title">红玫瑰红玫瑰红玫瑰红玫瑰红玫瑰红玫瑰红玫瑰红玫瑰红玫瑰红玫瑰</div>
                    <span class="card">红玫瑰</span>
                    <div class="b-d">
                        <span class="text">好评率：97%</span>
                        <div class="button">立即购买</div>
                    </div>
                </div>
            </li>
            <li>
                <div class="img-d">
                    <img src="" alt="">
                </div>
                <div class="msg-d">
                    <div class="title">红玫瑰红玫瑰红玫瑰红玫瑰红玫瑰红玫瑰红玫瑰红玫瑰红玫瑰红玫瑰</div>
                    <span class="card">红玫瑰</span>
                    <div class="b-d">
                        <span class="text">好评率：97%</span>
                        <div class="button">立即购买</div>
                    </div>
                </div>
            </li><li>
            <div class="img-d">
                <img src="" alt="">
            </div>
            <div class="msg-d">
                <div class="title">红玫瑰红玫瑰红玫瑰红玫瑰红玫瑰红玫瑰红玫瑰红玫瑰红玫瑰红玫瑰</div>
                <span class="card">红玫瑰</span>
                <div class="b-d">
                    <span class="text">好评率：97%</span>
                    <div class="button">立即购买</div>
                </div>
            </div>
        </li>

        </ul>
    </div>
</template>

<script>
    export default {
        name: "good"
    }
</script>

<style scoped>
#good{
    font-size: 0.4rem;
    background: white;
}
    ul{
        padding: 0 0.3rem;


    }
    li{
        border: solid 1px #dfdddd;
        display: flex;
        padding: 0.3rem;
border-radius: 1px;
        margin-top: 0.2rem;
        background: #f9f9f9;
        /*height: ;*/
    }
    .img-d{
        width: 2.933rem;
        height: 3.24rem;
        flex-shrink: 0;
    }
    .msg-d{
        padding-left: 0.2rem;
        height: 3.24rem;
        position: relative;
        width: 5.8rem;
    }
    .title{
        font-size: 0.4rem;
        color: #515151;
        padding-bottom: 0.2rem;
    }
    .card{
        font-size: 12px;
        color: #7f7f7f;
    }
    .b-d{
        display: flex;
        position: absolute;
        left: 0.2rem;
        bottom: 0;
        font-size: 0;
        width: 5.6rem;
        justify-content:space-between ;
    }
    .text{
       font-size: 12px;
        background-color: #f7e0c1;
        padding:0 0.1rem;
        font-family: "黑体";
        height: auto;
        height: 14px;
        position: absolute;
        left: 0rem;
        bottom: 0;
        /*flex-shrink: 0;*/
    }
    .button{
        width: 1.867rem;
        height: 0.667rem;
        background-color: #b4272d;
        border-radius: 0.067rem;
        color: white;
        font-size:0.3rem ;
        flex-shrink: 0;
        text-align: center;
        line-height: 0.667rem;
        position: absolute;
        right: 0;
        bottom: 0;
    }
</style>
