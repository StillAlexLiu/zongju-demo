<template>
    <chart :options="options" />
</template>
<script>
export default {
  name: 'ChartLineSimple',
  props: {
    xdata: {
      type: Array,
      default: () => {
        return []
      }
    },
    ydata: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    options () {
      return {
        xAxis: {
          type: 'category',
          data: this.xdata
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: this.ydata,
          type: 'line'
        }]
      }
    }
  }
}
</script>

<style scoped lang="less">
.EchartsSimpleLine {

}
</style>
