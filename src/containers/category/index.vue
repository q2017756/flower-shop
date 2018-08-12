<template>
  <div class="category-page">
    <header class="category-header">
      <input class="search-input center" type="text" placeholder="玫瑰" @click="handleSearch"/>
    </header>
    <div class="category-content">
      <section-container class="content-left" v-bind:sections="sections" v-bind:onChange="handleChangeSection"/>
      <category-item-container class="content-right" v-bind:section="section" v-bind:handleClick="handlePushToCommodity" />
    </div>
  </div>
</template>

<script>
  import categoryItemContainer from './categoryItemContainer'
  import sectionContainer from './sectionContainer'
  import { fecthCategory } from '@/utils/fetchData'
  export default {
    components: {
      categoryItemContainer,
      sectionContainer
    },
    methods: {
      handleSearch () {
        console.log('handle search in category page...')
        this.$router.push('/search')
      },
      handleChangeSection (section) {
        console.log(section)
        // 请求分类
        fecthCategory()
          .then(r => {
            console.log(r)
            this.section.section = section
            this.section.categories = r[section.categoryId]
          })
      },
      handlePushToCommodity (section, commodity) {
        console.log(section)
        console.log(commodity)
        this.$router.push('/productList')
      }
    },
    data () {
      return {
        sections: [
          { name: '618', categoryId: '1000001', pic: '/static/img/rose.png' },
          { name: '新品', categoryId: '1000002', pic: '/static/img/best.png' },
          { name: '玫瑰', categoryId: '1000003', pic: '/static/img/rose.png' },
          { name: '洋桔梗', categoryId: '1000004', pic: '/static/img/best.png' },
          { name: '康乃馨', categoryId: '1000005', pic: '/static/img/rose.png' },
         ],
        section: {
          pic: '../../assets/img/rose.png',
          name: '618',
          section: {}
        }
      }
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
