<template>
    <chart :options='options' @click="click"/>
</template>

<script>
export default {
  name: 'ChartBarLine',
  props: {
    title: {
      type: String,
      default: ''
    },
    titleSize: {
      type: Number,
      default: 14
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
    twoAxis: {
      type: Boolean,
      default: true
    },
    lineWithCircle: {
      type: Boolean,
      default: true
    },
    isArea: {
      type: Boolean,
      default: false
    },
    rotate: {
      type: Number,
      default: 0
    },
    bottom: {
      type: Number,
      default: 20
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
            item.itemStyle.normal.barBorderRadius = [30, 30, 0, 0]
          }
        }
        if (this.type[i] === 'line') {
          if (this.lineWithCircle) {
            item.symbolSize = 5
            item.itemStyle = {
              borderColor: '#fff',
              borderWidth: 0
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
            name: this.units[i],
            min: 0,
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
        } else {
          if (i === 0) {
            yAxis.push({
              name: this.units[i],
              min: 0,
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
        }
      }
      return {
        color: this.colors,
        tooltip: {
          show: false,
          trigger: 'axis'
        },
        title: {
          text: this.title,
          te: this.titleSize,
          textStyle: {
            fontSize: this.titleSize,
            fontWeight: 'normal'
          }
        },
        grid: {
          left: 40,
          top: 40,
          right: 20,
          bottom: this.rotate > 0 ? this.bottom : 20
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
            interval: 0,
            rotate: this.rotate
          }
        },
        yAxis: yAxis,
        series: series
      }
    }
  },
  methods: {
    click (args) {
      this.$emit('click', args)
    }
  }
}
</script>

<style scoped lang="less">
.ChartBar {

}
</style>
