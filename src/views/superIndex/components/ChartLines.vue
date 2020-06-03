<template>
  <chart :options='options'/>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'ChartLines',
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
      type: String,
      default: () => {
        return ''
      }
    },
    title: {
      type: String,
      default: () => {
        return ''
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
          itemWidth: 10,
          itemHeight: 10,
          selectedMode: false
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
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
            name: this.yname
          }
        ],
        series: [
          {
            name: this.data.legend[0],
            type: 'line',
            symbol: 'none',
            lineStyle: {
              color: this.color[0]
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  { offset: 1, color: this.areaColor[0][0] },
                  { offset: 0, color: this.areaColor[0][1] }
                ]
              )
            },
            data: this.data.ydata1
          },
          {
            name: this.data.legend[1],
            type: 'line',
            symbol: 'none',
            lineStyle: {
              color: this.color[1]
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  { offset: 1, color: this.areaColor[1][0] },
                  { offset: 0, color: this.areaColor[1][1] }
                ]
              )
            },
            data: this.data.ydata2
          },
          {
            name: this.data.legend[2],
            type: 'line',
            symbol: 'none',
            areaStyle: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  { offset: 1, color: this.areaColor[2][0] },
                  { offset: 0, color: this.areaColor[2][1] }
                ]
              )
            },
            lineStyle: {
              color: this.color[2]
            },
            data: this.data.ydata3
          }
        ]
      }
    }
  }
}
</script>

<style lang="less">
</style>
