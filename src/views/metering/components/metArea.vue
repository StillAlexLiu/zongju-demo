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
      // console.log(this.data)
      const series = []
      const yAxis = []
      for (let i = 0; i < this.type.length; i++) {
        // const index = i
        // if (this.yAxisIndex === 0) {
        //   index = 0
        // }
        const item = {
          type: this.type[i],
          name: this.legend[i],
          // yAxisIndex: index,
          itemStyle: {
            normal: {}
          },
          areaStyle: {}
        }
        series.push(item)
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
      return {
        color: this.colors,
        title: {
          text: this.title
        },
        legend: {
          show: false,
          left: 'right',
          selectedMode: false,
          itemWidth: 5,
          itemHeight: 5,
          top: 20,
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
