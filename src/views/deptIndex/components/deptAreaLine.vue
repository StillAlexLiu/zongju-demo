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
    symbolSize: {
      type: Number,
      default: 0
    }
  },
  computed: {
    options () {
      const series = []
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
          }
        })
      }
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
          bottom: '15%'
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
