<template>
    <chart :options='options'/>
</template>

<script>

export default {
  name: 'foodChartPieR',
  props: {
    title: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
      default: () => {
        return {
          data: []
        }
      }
    }
  },
  computed: {
    options () {
      const center = ['50%', '50%']
      const indata = this.data
      const legend = []
      for (let i = 0; i < indata.length; i++) {
        legend.push(indata[i].name)
      }
      return {
        color: ['#F7B500', '#FF8838', '#1EA2FB', '#8475EC', '#6DD400', 'rgba(250,250,250,0.3)'],
        title: {
          show: false,
          text: this.title,
          x: 'center',
          y: 'center'
        },
        legend: {
          show: false,
          orient: 'vertical',
          right: 0,
          top: 'middle',
          itemWidth: 6,
          itemHeight: 6,
          selectedMode: false,
          data: legend
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: center,
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                fontSize: 10,
                formatter: (params) => {
                  const data = params.data
                  const percent = params.percent
                  const trend = data.trend ? ' {trend|' + data.trend + '}' : ''
                  return '{name|' + data.name + data.value + '}\n{percent|' + percent + '%}' + trend
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
              length: 3,
              length2: 3
            },
            data: indata
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
