<template>
    <chart :options='options'/>
</template>

<script>
export default {
  name: 'deptChartBarLine',
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
          // min: 0,
          nameLocation: 'end',
          nameGap: 6,
          nameTextStyle: {
            fontSize: 12
          },
          min: 0,
          // max: i==1? 70:null,
          splitLine: {
            show: i === 0
          },
          show: true,
          // x: 'center',
          type: 'value'
        })
      }
      return {
        color: this.colors,
        title: {
          text: this.title
        },
        grid: {
          left: '0%',
          right: '0%',
          bottom: '5%',
          top: '25%',
          containLabel: true
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
          boundaryGap: true,
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
