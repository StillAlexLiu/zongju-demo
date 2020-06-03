<template>
    <chart :options='options'/>
</template>

<script>
export default {
  name: 'foodChartJG',
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
    dimensions: {
      type: Array,
      default: () => {
        return null
      }
    },
    units: {
      type: Array,
      default: () => {
        return []
      }
    },
    colors: {
      type: Array,
      default: () => {
        return null
      }
    },
    type: {
      type: Array,
      default: () => {
        return []
      }
    },
    legend: {
      type: Array,
      default: () => {
        return null
      }
    },
    borderRadius: {
      type: Boolean,
      default: true
    },
    barWidth: {
      type: Number,
      default: 8
    }
  },
  computed: {
    options () {
      const series = []
      const yAxis = []
      for (let i = 0; i < this.type.length; i++) {
        const item = {
          type: this.type[i],
          name: this.legend[i],
          yAxisIndex: i,
          areaStyle: {},
          smooth: true,
          symbol: 'circle', // 拐点类型
          symbolSize: 0, // 拐点圆的大小
          itemStyle: {
            normal: {}
          }
        }
        if (this.type[i] === 'bar') {
          item.barWidth = this.barWidth

          if (this.borderRadius) {
            item.itemStyle.normal.barBorderRadius = [30, 30, 0, 0]
          }
        }
        if (this.type[i] === 'line') {
          item.symbolSize = 0
          item.itemStyle = {
            borderColor: '#fff',
            borderWidth: 1
          }
        }
        series.push(item)
        yAxis.push({
          name: this.units[i],
          min: 0,
          areaStyle: {},
          nameLocation: 'end',
          nameGap: 6,
          nameTextStyle: {
            fontSize: 12
          },
          splitLine: {
            show: i === 0
          },
          show: true,
          // x: 'center',
          type: 'value'
        })
      }
      return {
        grid: {
          containLabel: true,
          left: '1%',
          top: '25%',
          right: '5%',
          bottom: '10%'
        },
        color: this.colors,
        title: {
          show: true,
          text: this.title
        },
        legend: {
          show: true,
          left: 'right',
          selectedMode: false,
          itemWidth: 13,
          itemHeight: 7,
          data: this.legend
        },
        dataset: {
          dimensions: this.dimensions,
          source: this.data
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            interval: 0
          }
        },
        yAxis: yAxis,
        series: series
      }
    }
  }
}
</script>

<style scoped lang="less">
</style>
