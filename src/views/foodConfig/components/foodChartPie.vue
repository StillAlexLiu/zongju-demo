<template>
    <chart :options='options'/>
</template>

<script>

export default {
  name: 'foodChartPie',
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
      console.log(this.data)
      const center = ['50%', '50%']
      const indata = this.data
      const legend = []
      for (let i = 0; i < indata.length; i++) {
        legend.push(indata[i].name)
      }
      return {
        color: ['#A0CE3A', '#31C5C0', '#1E9BD1', '#0F347B', '#585247', '#7F6AAD', '#009D85', 'rgba(250,250,250,0.3)'],
        title: {
          show: false,
          text: this.title
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
            radius: '80%',
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
              length: 20,
              length2: 20
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
