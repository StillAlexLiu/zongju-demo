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
          // symbol: 'circle',
          symbolSize: this.symbolSize,
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 1
          },
          markLine: {
            symbol: 'none',
            data: [
              {
                type: 'max',
                name: '最大值'
              }
            ],
            label: {
              show: show, // 是否展示文字
              color: 'rgba(255, 37, 64, 1)',
              fontSize: 16,
              position: 'middle',
              formatter: function () {
                return '警戒线'
              }
            },
            lineStyle: {
              color: 'red',
              width: this.markLine === 1 ? 1 : 0, // 0 的时候可以隐藏线
              type: 'solid' // 实线，不写默认虚线
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
          top: '30%',
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
          boundaryGap: true,
          axisLabel: {
            interval: 0
          }
        },
        yAxis: {
          name: this.unit[0] === '%' ? '%' : '万个',
          nameLocation: 'end',
          nameGap: 6,
          nameTextStyle: {
            fontSize: 12
          },
          show: true,
          // x: 'center',
          // min: function (value) {
          //   return value.min - 50
          // },
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
