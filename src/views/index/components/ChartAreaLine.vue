<template>
    <chart :options='options'/>
</template>

<script>
export default {
  name: 'ChartAreaLine',
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
    unit: {
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
    lineWithCircle: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    options () {
      const series = []
      for (let i = 0; i < this.legend.length; i++) {
        const item = {
          type: 'line',
          name: this.legend[i],
          areaStyle: {},
          // symbol: 'circle',
          symbolSize: 8,
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 1
          }
        }
        if (this.lineWithCircle) {
          item.symbolSize = 8
          item.itemStyle = {
            borderColor: '#fff',
            borderWidth: 1
          }
        } else {
          item.symbolSize = 0
        }
        series.push(item)
      }
      return {
        color: this.colors,
        title: {
          text: this.title
        },
        grid: {
          // containLabel: true,
          left: 40,
          top: 40,
          right: 10,
          bottom: 20
        },
        legend: {
          show: true,
          left: 'right',
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
          name: this.unit,
          nameLocation: 'end',
          nameGap: 6,
          nameTextStyle: {
            fontSize: 12
          },
          show: true,
          // x: 'center',
          min: function (value) {
            return value.min - 10
          },
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
