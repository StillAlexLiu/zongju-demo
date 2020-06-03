<template>
    <chart :options='options'/>
</template>

<script>
export default {
  name: 'deptChartPermission',
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
      type: String,
      default: ''
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
      // eslint-disable-next-line no-unused-vars
      var list = data.sort((a, b) => {
        return b.value - a.value
      })
      var opt = { index: 0 }
      return {
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
            show: true
          },
          splitLine: {
            show: false
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
            show: true
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            interval: 0,
            color: '#666',
            fontSize: 12,
            formatter: function (value, index) {
              if (opt.index === 0 && index < 3) {
                return '{idx' + index + '|' + (1 + index) + '} {title|' + value + '}'
              } else if (opt.index !== 0 && (index + opt.index) < 9) {
                return '{idx|0' + (1 + index + opt.index) + '} {title|' + value + '}'
              } else {
                return '{idx|' + (1 + index + opt.index) + '} {title|' + value + '}'
              }
            },
            rich: {
              idx0: {
                color: '#FFFFFF',
                backgroundColor: '#FF6C6C',
                borderRadius: 100,
                width: 10,
                padding: [2, 6]
              },
              idx1: {
                color: '#FFFFFF',
                backgroundColor: '#F7B500',
                borderRadius: 100,
                width: 10,
                padding: [2, 6]
              },
              idx2: {
                color: '#FFFFFF',
                backgroundColor: '#8ED048',
                borderRadius: 100,
                width: 10,
                padding: [2, 6]
              },
              idx: {
                backgroundColor: 'rgba(116,205,254,0.9)',
                color: '#FFFFFF',
                borderRadius: 100,
                width: 10,
                padding: [2, 6]
              },
              title: {
                color: '#FFFFFF',
                width: 80,
                align: 'left',
                borderRadius: 5,
                padding: 5
              }
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
            margin: 20,
            fontSize: 12,
            formatter: function (value, index) {
              // console.log(data)
              return data[index].value + data[index].unit
            }
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
              barBorderRadius: [0, 20, 20, 0]
              // 渐变色
              // color: this.colors

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
