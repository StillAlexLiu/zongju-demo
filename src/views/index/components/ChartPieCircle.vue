<template>
    <chart :options='options'/>
</template>

<script>

export default {
  name: 'ChartPieCircle',
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
    isPie: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    options () {
      return {
        title: {
          text: this.title
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: this.isPie ? [0, '62%'] : ['40%', '62%'],
            // position: ['60%', '50%'],
            top: 20,
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                fontSize: 10,
                formatter: (params) => {
                  const data = params.data
                  const percent = params.percent
                  const trend = data.trend ? ' {trend|' + data.trend + '}' : ''
                  return '{name|' + data.name + '}\n{percent|' + percent + '%}' + trend
                },
                rich: {
                  name: {},
                  percent: {},
                  trend: {},
                  status: {}
                }
              },
              emphasis: {
                show: true
              }
            },
            labelLine: {
              length: 5,
              length2: 8
            },
            data: this.data
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang="less">
.ChartPieCircle {
}
</style>
