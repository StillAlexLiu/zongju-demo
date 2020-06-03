<template>
    <chart :options="options"/>
</template>

<script>
export default {
  name: 'progressBar',
  props: {
    total: {
      type: Number,
      default: null
    },
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
      return {
        title: {
          text: this.title,
          left: 'left',
          top: 10
        },
        xAxis: {
          max: this.total,
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        grid: {
          left: 80,
          top: 60, // 设置条形图的边距
          right: 80,
          bottom: 0
        },
        yAxis: [
          {
            type: 'category',
            inverse: false,
            data: this.data,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            }
          }
        ],
        series: [
          {
            // 内
            type: 'bar',
            barWidth: 10,
            legendHoverLink: false,
            silent: false,
            itemStyle: {
              normal: {
                color: function (params) {
                  // console.log(params.dataIndex)
                  let color
                  if (params.dataIndex === 0) {
                    color = '#FE9E55'
                  } else if (params.dataIndex === 1) {
                    color = '#91D243'
                  } else if (params.dataIndex === 2) {
                    color = '#22AEC5'
                  } else {
                    color = 'white'
                  }
                  return color
                }
              }
            },
            label: {
              normal: {
                show: true,
                position: 'left',
                formatter: '{b}',
                textStyle: {
                  color: '#fff',
                  fontSize: 12
                }
              }
            },
            data: this.data,
            z: 1,
            animationEasing: 'elasticOut'
          },
          {
            // 分隔
            type: 'pictorialBar',
            itemStyle: {
              normal: {
                color: '#061348'
              }
            },
            symbolRepeat: 'fixed',
            symbolMargin: 1,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [1, 10],
            symbolPosition: 'start',
            symbolOffset: [1, -1],
            symbolBoundingData: this.total,
            data: this.data,
            z: 2,
            animationEasing: 'elasticOut'
          },
          {
            // 外边框
            type: 'pictorialBar',
            symbol: 'rect',
            symbolBoundingData: this.total,
            itemStyle: {
              normal: {
                color: 'none'
              }
            },
            label: {
              normal: {
                fontSize: 12,
                formatter: params => {
                  // console.log(params.data)
                  var text
                  if (params.dataIndex === 1) {
                    text = '{f|  ' + params.data.value + params.data.unit + '}'
                  } else {
                    text = '{f|  ' + params.data.value + params.data.unit + '}'
                  }
                  return text
                },
                rich: {
                  a: {
                    color: 'red'
                  },
                  b: {
                    color: 'blue'
                  },
                  c: {
                    color: 'yellow'
                  },
                  d: {
                    color: 'green'
                  },
                  f: {
                    color: '#ffffff'
                  }
                },
                position: 'right',
                distance: 0, // 向右偏移位置
                show: true
              }
            },
            data: this.data,
            z: 0,
            animationEasing: 'elasticOut'
          },
          {
            name: '外框',
            type: 'bar',
            barGap: '-120%', // 设置外框粗细
            data: [],
            barWidth: 15,
            show: false,
            itemStyle: {
              normal: {
                color: 'transparent', // 填充色
                barBorderColor: 'black', // 边框色
                barBorderWidth: 0, // 边框宽度
                // barBorderRadius: 0, //圆角半径
                label: {
                  // 标签显示位置
                  show: false,
                  position: 'top' // insideTop 或者横向的 insideLeft
                }
              }
            },
            z: 0
          }
        ]
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
