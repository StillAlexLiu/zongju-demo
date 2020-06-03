<template>
  <chart :options='options'/>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'ChartRightLines',
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    },
    color: {
      type: Array,
      default: () => {
        return []
      }
    },
    areaColor: {
      type: Array,
      default: () => {
        return []
      }
    },
    yname: {
      type: Array,
      default: () => {
        return []
      }
    },
    title: {
      type: String,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  computed: {
    options () {
      return {
        title: {
          text: this.title,
          left: 0,
          top: 0
        },
        color: this.color,
        legend: {
          data: this.data.legend,
          right: 0,
          top: 0,
          itemWidth: 10,
          itemHeight: 10,
          selectedMode: false
        },
        grid: {
          left: '5%',
          right: '4%',
          bottom: '1%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: this.data.xdata
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: this.yname[0]
          }, {
            type: 'value',
            name: this.yname[1],
            max: 100,
            axisLabel: {
              formatter: '{value}%'
            }
          }
        ],
        series: [
          {
            name: this.data.legend[0],
            type: 'line',
            stack: '总量',
            lineStyle: {
              color: this.color[0]
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  { offset: 0, color: 'rgba(50, 197, 255, 0)' },
                  { offset: 1, color: this.areaColor[0] }
                ]
              )
            },
            data: this.data.ydata1
          },
          {
            name: this.data.legend[1],
            type: 'line',
            stack: '总量',
            yAxisIndex: 1,
            lineStyle: {
              color: this.color[1]
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  { offset: 0, color: 'rgba(50, 197, 255, 0)' },
                  { offset: 1, color: this.areaColor[1] }
                ]
              )
            },
            data: this.data.ydata2
          }
        ]
      }
    }
  }
}
</script>

<style lang="less">
</style>
