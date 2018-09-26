<template>
  <div class="format-container">
        <div class="commodity-info">
          <div class="img-wrapper">
            <img v-bind:src="commodity.pics" />
          </div>
          <div class="commodity-info-content">
            <p class="price">价格：¥{{ commodity.price }}</p>
            <p class="select">已选择：{{ selectString || '请选择规格数量' }}</p>
          </div>
        </div>
        <div class="format-content">

          <div v-for="(format, index) in format.classifylist" class="format-content-item">
            <h4>{{ format.title }}</h4>
            <div class="format-item-container">
              <span
                v-for="option in format.list"
                v-bind:class="['format-item', option.text === selects[index] ? 'select-format-item' : '']"
                v-on:click="handleSelectFormat(option.text, index)"
              >
                {{ option.text }}
              </span>
            </div>
          </div>
        </div>
        <div class="number">
          <step
            v-bind:handleChange="handleCountChange"
            v-bind:current="count"
          />
        </div>
      </div>
</template>

<script>
  import step from '@/components/common/step'
  export default {
    components: { step },
    props: ['commodity','format', 'selectString', 'handleSelectFormat', 'handleCountChange', 'count'],
    computed: {
      selects () {
        console.log('+++++++++')
        console.log(this.selectString)
        console.log(this.selectString.split(' '))
        return this.selectString.split(' ')
      }
    },
  }
</script>

<style lang="scss">
  @import '../../styles/mixin.scss';
  .format-container {
    flex: 1;
    overflow-y: auto;
    padding: px2rem(15);
    padding-bottom: px2rem(65);
  }

  .commodity-info {
    padding-bottom: px2rem(20);
    display: flex;
    align-items: center;
  }

  .commodity-info .img-wrapper {
    background-color: #f4f4f4;
    width: px2rem(85);
    height: px2rem(85);
    margin-right: px2rem(12);
  }

  .commodity-info img {
    width: 100%;
    height: 100%;
  }

  .commodity-info-content {
    margin-bottom: px2rem(15);
  }

  .format-content-item {
    margin-bottom: px2rem(15);
  }

  .format-content-item h4 {
    font-weight: normal;
    padding-bottom: px2rem(12);
  }

  .format-item-container {
    display: flex;
    flex-wrap: wrap;
  }

  .format-item {
    border: 1px solid #333;
    border-radius: 3px;
    padding: 0 px2rem(17);
    margin-bottom: px2rem(8);
    margin-right: px2rem(12);
    line-height: px2rem(32);
  }

  .select-format-item {
    color: #b4282d;
    border-color: #b4282d;
  }

  .commodity-info-content .price {
    font-size: px2rem($size_default);
  }

  .commodity-info-content .select {
    font-size: px2rem($size_middle);

  }
</style>
