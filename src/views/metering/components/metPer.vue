<template>
    <chart :options='options'/>
</template>

<script>
export default {
  name: 'metPer',
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
      var data = this.data
      return {
        title: {
          text: this.title,
          left: 'left',
          top: 10
        },
        color: this.colors,
        grid: {
          left: '3%',
          right: '0%',
          bottom: '1%',
          top: '15%',
          containLabel: true
        },

        xAxis: {
          show: true,
          axisLine: {
            show: false
          },
          splitLine: {
            show: true
          },
          axisTick: {
            show: false
          }
        },
        yAxis: [{
          triggerEvent: true,
          show: true,
          inverse: true,
          data: this.getArrByKey(data, 'name'),
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            interval: 0,
            color: '#FFFFFF',
            fontSize: 12,
            formatter: function (value) {
              return value.split('-').join('\n')
            }

          }
        }, {
          triggerEvent: true,
          show: true,
          inverse: true,
          data: this.getArrByKey(data, 'name'),
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            interval: 0,
            // color: '#fff',
            align: 'left',
            margin: 10,
            fontSize: 12,
            formatter: ''
          }
        }],
        series: [{
          name: '条',
          type: 'bar',
          yAxisIndex: 0,
          data: data,
          barWidth: 10,
          itemStyle: {
            normal: {
              barBorderRadius: [0, 20, 20, 0],
              // 渐变色
              color: function () {
                return {
                  colorStops: [{
                    offset: 0, // 颜色的开始位置
                    color: 'rgba(0, 115, 169, 1)' // 0% 处的颜色
                  }, {
                    offset: 1, // 颜色的结束位置
                    color: 'rgba(60, 186, 255, 1)' // 100% 处的颜色
                  }]

                }
              }
            }
          }
        }]
      }
    }
  },
  methods: {
    getArrByKey (data, k) {
      const key = k || 'value'
      const res = []
      if (data) {
        data.forEach(function (t) {
          res.push(t[key])
        })
      }
      return res
    }
  }
}
</script>

<style scoped lang="less">
</style>
