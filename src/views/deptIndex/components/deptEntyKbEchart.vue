<template>
    <chart :options='options'/>
</template>

<script>
export default {
  name: 'deptEntyKbEchart',
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
    },
    yAxisIndex: {
      type: Number,
      default: 1
    }
  },
  computed: {
    options () {
      console.log(this.data)
      const series = []
      const yAxis = []
      for (let i = 0; i < this.type.length; i++) {
        let index = i
        if (this.yAxisIndex === 0) {
          index = 0
        }
        const item = {
          type: this.type[i],
          name: this.legend[i],
          yAxisIndex: index,
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
        if (this.legend[i] === '天数') {
          item.markLine = {
            symbol: 'none',
            data: [
              {
                name: '最小值',
                yAxis: 1
              },
              {
                name: '最大值',
                yAxis: 2
              }
            ],
            label: {
              show: true, // 是否展示文字
              // color: 'rgba(255, 37, 64, 1)',
              // fontSize: 13,
              padding: [0, 0, 10, -20],
              position: 'end'
            }
          }
        }
        series.push(item)
        yAxis.push({
          name: this.units[i],
          min: 0,
          max: i === 1 ? 5 : null,
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
          left: '3%',
          right: '0%',
          bottom: '1%',
          top: '20%',
          containLabel: true
        },
        color: this.colors,
        title: {
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
