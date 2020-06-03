<template>
    <chart :options='options'/>
</template>

<script>
export default {
  name: 'deptAreaLine',
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
    markLine: {
      type: Number,
      default: 0
    },
    unit: {
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
    symbolSize: {
      type: Number,
      default: 0
    }
  },
  computed: {
    options () {
      const series = []
      let show = false
      if (this.markLine === 1) {
        show = true
      }

      for (let i = 0; i < this.legend.length; i++) {
        series.push({
          type: 'line',
          name: this.legend[i],
          areaStyle: {},
          symbol: 'circle',
          symbolSize: this.symbolSize,
          itemStyle: {
            borderColor: 'rgba(123, 214, 146, 1)',
            borderWidth: 1

          },
          smooth: true,
          // symbol: 'circle', // 拐点类型
          markLine: {
            symbol: 'none',
            data: [
              {
                name: '警戒线',
                yAxis: 6
              }
            ],
            label: {
              show: show, // 是否展示文字
              color: 'rgba(255, 37, 64, 1)',
              fontSize: 16,
              padding: [0, 0, 30, -50],
              position: 'end',
              formatter: function () {
                return '警戒线'
              }
            },
            lineStyle: {
              color: 'red',
              width: this.markLine === 1 ? 1 : 0, // 0 的时候可以隐藏线
              type: 'solid' // 实线，不写默认虚线
            }
          },
          markPoint: {
            symbol: 'circle',
            // symbol:'image://http://img30.360buyimg.com/poprx/jfs/t23662/172/668395134/12944/5653b1ff/5b3c2737N3d867c2f.png',
            itemStyle: {
              color: 'rgba(255, 0, 31, 1)',
              borderColor: 'rgba(255, 0, 31, 1)',
              borderWidth: 15,
              opacity: 0.3,
              shadowBlur: 100,
              shadowColor: 'rgba(255, 0, 31, 1)'
            },
            symbolSize: [10, 10], // 容器大小
            // symbolOffset:[0,-20],//位置偏移
            data: [
              { type: 'max', name: '最大值' }
            ],
            label: {
              offset: [0, 0],
              color: '#ffffff',
              show: false,
              formatter: [
                '2'
              ].join('\n')
            }
          }
        })
      }
      console.log(this.unit)
      return {
        color: this.colors,
        title: {
          text: this.title
        },
        grid: {
          containLabel: true,
          left: '1%',
          top: '10%',
          right: '1%',
          bottom: '0%'
        },
        legend: {
          show: true,
          left: 'right',
          top: 'bottom',
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
          boundaryGap: true
        },
        yAxis: {
          // name: this.unit[0] === '%' ? '%' : '万个',
          nameLocation: 'end',
          nameGap: 6,
          nameTextStyle: {
            fontSize: 12
          },
          show: true,
          // x: 'center',
          min: 0,
          type: 'value'
        },
        series: series
      }
    }
  }
}
</script>

<style scoped lang="less">
.ChartAreaLine {

}
</style>
