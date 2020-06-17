<template>
    <div class="ChartGroupHuanJing full">
        <ChartPieCircle :title="title" :data="data[dataIndex]" :color="color" :is-pie="true"/>
        <div class="radioBox" >
            <CheckAndRadioBox :data="radio" v-model="dataIndex"/>
        </div>
    </div>
</template>

<script>
import ChartPieCircle from './ChartPieCircle'

export default {
  name: 'ChartGroupHuanJing',
  components: { ChartPieCircle },
  data () {
    return {
      dataIndex: 0,
      radio: [{
        name: '商品类',
        value: 0
      }, {
        name: '服务类',
        value: 1
      }]
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    color: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style scoped lang="less">
.ChartGroupHuanJing {
    position: relative;

    .radioBox {
        position: absolute;
        top: 0;
        right: 0;
    }
}
</style>
