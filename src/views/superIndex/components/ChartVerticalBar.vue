<template>
  <chart :options='options'/>
</template>

<script>
export default {
  name: 'ChartVerticalBar',
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    },
    legend: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    color: {
      type: Array,
      default: () => {
        return []
      }
    },
    xname: {
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
        grid: {
          top: 30,
          left: 100,
          bottom: 25,
          right: 50
        },
        title: {
          text: this.data.title,
          left: 0,
          top: 0
        },
        xAxis: {
          name: this.xname,
          show: true,
          type: 'value',
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false,
            fontSize: 10,
            textStyle: {
              color: '#b0caff'
            }
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'category',
          axisLabel: {
            show: true,
            fontSize: 14,
            interval: 0,
            textStyle: {
              color: '#b0caff'
            }
          },
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          data: this.data.ydata
        },
        series: [{
          name: '',
          type: 'bar',
          barWidth: 10,
          label: {
            show: true,
            position: 'right',
            fontSize: 10
          },
          itemStyle: {
            normal: {
              barBorderRadius: [0, 10, 10, 0],
              color: {
                type: 'bar',
                colorStops: [{
                  offset: 0,
                  color: 'rgba(79, 255, 245, 0.4)' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: 'rgba(79, 255, 148, 0.68)' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
              }
              // 'rgba(79, 255, 245, 0.65)'
            }
          },
          data: this.data.xdata
        }
        ]
      }
    }
  }
}
</script>

<style lang='less'>
</style>
