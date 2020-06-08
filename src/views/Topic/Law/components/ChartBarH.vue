<template>
    <chart :options='options'/>
</template>

<script>
export default {
  name: 'ChartBarH',
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
      default: 0
    }
  },
  computed: {
    options () {
      const yAxis = []
      const series = []
      for (let i = 0; i < this.type.length; i++) {
        const item = {
          type: this.type[i],
          name: this.legend[i],
          itemStyle: {
            normal: {}
          }
        }
        if (this.twoAxis) {
          item.yAxisIndex = i
        }
        if (this.type[i] === 'bar') {
          item.barWidth = this.barWidth

          if (this.borderRadius) {
            item.itemStyle.normal.barBorderRadius = [0, 30, 30, 0]
          }
        }
        if (this.type[i] === 'line') {
          if (this.lineWithCircle) {
            item.symbolSize = 8
            item.itemStyle = {
              borderColor: '#fff',
              borderWidth: 1
            }
          } else {
            item.symbolSize = 0
          }

          if (this.isArea) {
            item.areaStyle = {}
          }
        }
        series.push(item)
        if (this.twoAxis) {
          yAxis.push({
            name: '',
            type: 'category',
            min: 0,
            nameLocation: 'end',
            nameGap: 6,
            nameTextStyle: {
              fontSize: 12
            },
            splitLine: {
              show: false
            },
            axisLine: {
              show: false
            },
            show: true
            // x: 'center',
          })
        } else {
          if (i === 0) {
            yAxis.push({
              name: '',
              min: 0,
              type: 'category',
              nameLocation: 'end',
              nameGap: 6,
              nameTextStyle: {
                fontSize: 12
              },
              splitLine: {
                show: false
              },
              show: true
              // x: 'center',
            })
          }
        }
      }
      return {
        dataset: {
          dimensions: this.dimensions,
          source: this.data
        },
        title: [{
          text: this.title,
          left: 'left',
          textStyle: {
            fontSize: 14,
            fontWeight: 'normal'
          }
        }, {
          text: this.units[0],
          fontSize: 10,
          right: 0,
          top: 4,
          textStyle: {
            fontSize: 10,
            fontWeight: 'normal'
          }
        }],
        color: this.colors,
        grid: {
          containLabel: true,
          left: 5,
          top: 30,
          right: 10,
          bottom: 10
        },
        xAxis: {
          type: 'value'
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
