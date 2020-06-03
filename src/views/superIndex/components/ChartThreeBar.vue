<template>
  <chart :options='options'/>
</template>

<script>
export default {
  name: 'ChartThreeBar',
  props: {
    data: {
      type: Array,
      default: () => {
        return {}
      }
    },
    legend: {
      type: Boolean,
      default: () => {
        return ''
      }
    },
    color: {
      type: Array,
      default: () => {
        return []
      }
    },
    yname: {
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
        title: {
          text: this.title,
          left: 0
        },
        legend: {
          show: this.legend,
          right: 20,
          itemWidth: 10,
          itemHeight: 10,
          selectedMode: false
        },
        tooltip: {
          show: false
        },
        grid: {
          top: '30%',
          bottom: 20,
          left: 30,
          right: 0
        },
        dataset: {
          source: this.data
        },
        xAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: 'rgba(51, 75, 115, 1)'
            }
          }
        },
        yAxis: {
          name: this.yname
        },
        series: [
          {
            type: 'bar',
            barWidth: 12,
            barGap: '60%',
            itemStyle: {
              color: this.color[0],
              barBorderRadius: [10, 10, 0, 0]
            }
          },
          {
            type: 'bar',
            barWidth: 12,
            itemStyle: {
              color: this.color[1],
              barBorderRadius: [10, 10, 0, 0]
            }
          },
          {
            type: 'bar',
            barWidth: 12,
            itemStyle: {
              color: this.color[2],
              barBorderRadius: [10, 10, 0, 0]
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="less">
</style>
