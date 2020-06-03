<template>
    <chart  :options='options' @click="getChart($event)"/>
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
      const series = []
      const yAxis = [
        {
          inverse: true,
          name: '亿元',
          position: 'left',
          nameLocation: 'start',
          splitArea: {
            show: false
          },
          axisLabel: {
            formatter: function (value) {
              if (value < 0) {
                return -value
              } else {
                return value
              }
            }
          }
        }, {
          inverse: true,
          name: '',
          position: 'left',
          nameLocation: 'start',
          splitArea: {
            show: false
          }
        }
      ]
      for (let i = 0; i < this.type.length; i++) {
        const item = {
          type: this.type[i],
          name: this.legend[i],
          stack: 'one',
          yAxisIndex: 0,
          itemStyle: {
            normal: {}
          }
        }
        if (this.type[i] === 'bar') {
          item.barWidth = this.barWidth
          if (this.borderRadius) {
            item.itemStyle.normal.barBorderRadius = [0, 0, 30, 30]
          }
          if (i === 1) {
            item.itemStyle.normal.barBorderRadius = [30, 30, 0, 0]
          }
        }
        series.push(item)
      }
      return {
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
  },
  methods: {
    getChart (e) {
      // 0 投资金额 1被投资
      this.$emit('changeMap', e[0].name, e[0].seriesIndex)
    }
  }
}
</script>

<style scoped lang="less">
</style>
