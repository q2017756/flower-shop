<template>
    <router-view></router-view>
</template>

<script>
    import {Toast} from 'mint-ui'
    export default {
        name: 'app',
        mounted() {
            this.$store.dispatch('getCartCommodity')
            this.$axios('', {
                act: 'getMemberInfo',
            }, (data) => {
                console.log('member:', data)
                if (data.data.res === "succ") {
                    localStorage.setItem('openId',data.data.result)
                    this.$router.push("/home")
                } else {
                    Toast(data.data.msg)
                }
            })
        }
    }

    // 设置html的font-size
    document.addEventListener('DOMContentLoaded', function () {
        const ratio = 375 / 10
        const rem = window.innerWidth / ratio
        const dpr = window.devicePixelRatio
        const html = document.querySelector('html')
        html.classList.add(`env__dpr-${dpr}`)
        html.style.fontSize = window.innerWidth / 10 + 'px'
    })

</script>

<style>
    /* 全局css */
    @import './styles/global.scss';
    @import './font/iconfont.css';
</style>
