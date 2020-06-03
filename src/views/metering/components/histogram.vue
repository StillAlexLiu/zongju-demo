<template>
  <chart :options="options" style="padding-bottom:2rem" />
</template>

<script>
import echarts from 'echarts'
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
      // console.log(echarts)
      // _this = this
      const series = []
      const yAxis = []
      for (let i = 0; i < this.type.length; i++) {
        let index = i
        if (this.yAxisIndex === 0) {
          index = 0
        }
        const item = {
          type: this.type[i],
          name: this.legend[i],
          yAxisIndex: index,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, this.colors[i])
              // color:this.colors[i]
            }
          }
        }
        if (this.type[i] === 'bar') {
          item.barWidth = this.barWidth

          if (this.borderRadius) {
            item.itemStyle.normal.barBorderRadius = [30, 30, 0, 0]
          }
        }
        if (this.legend[i] === '天数') {
          item.markLine = {
            symbol: 'none',
            data: [
              { type: 'max', name: '最大值' },
              { type: 'min', name: '最小值' }
            ]
          }
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
        grid: {
          bottom: 30
        },
        legend: {
          show: true,
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
            interval: 0,
            formatter: function (value) {
              // debugger;
              var ret = '' // 拼接加\n返回的类目项
              var maxLength = 4 // 每项显示文字个数
              var valLength = value.length // X轴类目项的文字个数
              var rowN = Math.ceil(valLength / maxLength) // 类目项需要换行的行数
              if (rowN > 1) {
                // 如果类目项的文字大于3,
                for (var i = 0; i < rowN; i++) {
                  var temp = '' // 每次截取的字符串
                  var start = i * maxLength // 开始截取的位置
                  var end = start + maxLength // 结束截取的位置
                  // 这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                  temp = value.substring(start, end) + '\n'
                  ret += temp // 凭借最终的字符串
                }
                return ret
              } else {
                return value
              }
            }
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
