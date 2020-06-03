<template>
    <chart :options='options' @click="clickEchart($event)"/>
</template>

<script>
export default {
  name: 'deptFeiGongDangEchart',
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
      return {
        color: this.colors,
        textStyle: {
          color: '#fff'
        },
        tooltip: {
          trigger: 'axis',
          show: false,
          axisPointer: {
            lineStyle: {
              type: 'dashed',
              width: 2,
              color: '#4B941A'
            },
            animation: true
          }
        },
        legend: {
          show: true,
          data: this.legend,
          left: 'right',
          itemWidth: 8
        },
        grid: {
          left: '3%',
          right: '0%',
          bottom: '1%',
          top: '10%',
          containLabel: true
        },
        yAxis: {
          splitLine: {
            show: false,
            lineStyle: {
              color: ['#fff']
            }
          },
          axisTick: {
            show: false
          },
          // axisLine: {
          //   show: true,
          //   lineStyle: {
          //     color: ['#334B73']
          //   }
          // },
          axisLabel: {
            formatter: '{value}%'
            // color: '#999',
            // textStyle: {
            //   fontSize: 18
            // }
          },
          max: 100
        },
        xAxis: {
          data: this.data,
          axisLine: {
            show: true,
            lineStyle: {
              color: '#fff'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            interval: 0
          }
        },
        series: [{
          name: '党员担任法人数',
          type: 'scatter',
          symbol: 'circle', // 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
          symbolSize: function (data) {
            return Math.sqrt(data[2]) * 4
          },
          label: {
            emphasis: {
              show: true,
              formatter: function (param) {
                return param.data[2]
              },
              position: 'top'
            }
          },
          data: [
            ['北京市', '71', 10],
            ['上海市', '61', 90],
            ['天津市', '31', 30],
            ['重庆市', '51', 50],
            ['山西省', '41', 70],
            ['辽宁省', '31', 35],
            ['吉林省', '71', 100],
            ['江苏省', '61', 90],
            ['浙江省', '21', 30],
            ['安徽省', '41', 50],
            ['福建省', '31', 70],
            ['河北省', '21', 35]
          ]
        },
        {
          name: '非公有制经济党组织数',
          type: 'scatter',
          symbol: 'circle', // 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
          symbolSize: function (data) {
            return Math.sqrt(data[2]) * 4
          },
          label: {
            emphasis: {
              show: true,
              formatter: function (param) {
                return param.data[2]
              },
              position: 'top'
            }
          },
          data: [
            ['北京市', '21', 100],
            ['上海市', '10', 90],
            ['天津市', '31', 30],
            ['重庆市', '21', 50],
            ['山西省', '51', 70],
            ['辽宁省', '31', 35],
            ['吉林省', '51', 100],
            ['江苏省', '31', 90],
            ['浙江省', '21', 30],
            ['安徽省', '41', 50],
            ['福建省', '45', 70],
            ['河北省', '21', 35]
          ]
        }
        ]
      }
    }
  },
  methods: {
    clickEchart (e) {
      // 0 党员担任法人数  1 "非公有制经济党组织数"
      console.log(e)
      this.$emit('FeiGongDangchangeMap', e[0].name, e[0].seriesIndex)
    }
  }
}
</script>

<style scoped lang="less">
</style>
