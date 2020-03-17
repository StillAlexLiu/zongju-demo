<template>
    <chart :options='options'/>
    <!--    <div>{{options}}</div>-->
</template>

<script>
export default {
  name: 'ChartBarSimple',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    dimensions: {
      type: Array,
      default: () => {
        return null
      }
    },
    unit: {
      type: String,
      default: ''
    },
    colors: {
      type: Array,
      default: () => {
        return ['#FF997D', '#4A90E2', '#FFD86D']
      }
    }
  },
  computed: {
    options () {
      return {
        dataset: {
          dimensions: this.dimensions,
          source: this.data
        },
        xAxis: {
          type: 'category',
          boundaryGap: true
        },
        yAxis: [{
          name: this.unit,
          min: 0,
          splitNumber: 7,
          nameLocation: 'end',
          nameTextStyle: {
            color: 'white',
            fontSize: 12
          },
          show: true,
          x: 'center',
          type: 'value'
        }],
        series: [
          {
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            name: '市场主体数量',
            type: 'bar',
            barWidth: '61.8%'
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang="less">
.ChartBar {

}
</style>
