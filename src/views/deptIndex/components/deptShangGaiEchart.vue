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
      for (let i = 0; i < this.type.length; i++) {
        const item = {
          type: this.type[i],
          name: this.legend[i],
          itemStyle: {
            normal: {
              barBorderRadius: [30, 30, 0, 0]
            }
          },
          barWidth: this.barWidth
        }
        series.push(item)
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
        yAxis: {
          name: this.units[0],
          nameLocation: 'end',
          nameGap: 6,
          nameTextStyle: {
            fontSize: 12
          },
          // splitLine: {
          //   show: i === 0
          // },
          show: true,
          // x: 'center',
          type: 'value'
        },
        series: series
      }
    }
  }
}
</script>

<style scoped lang="less">
</style>
