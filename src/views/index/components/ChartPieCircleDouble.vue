<template>
    <chart :options='options'/>
</template>

<script>

export default {
  name: 'ChartPieCircleDouble',
  props: {
    title: {
      type: String,
      default: ''
    },
    data: {
      type: Object,
      default: () => {
        return {
          inData: [],
          outData: []
        }
      }
    }
  },
  computed: {
    options () {
      const center = ['50%', '50%']
      const indata = this.data.inData.data
      const legend = []
      for (let i = 0; i < indata.length; i++) {
        legend.push(indata[i].name)
      }
      return {
        title: {
          text: this.title
        },
        graphic: {
          elements: [{
            type: 'text',
            left: '5%',
            top: '15%',
            style: {
              text: this.data.inData.name,
              textAlign: 'left',
              font: '10px "PingFang"',
              fill: '#A8CAFF'
            }
          }, {
            type: 'text',
            top: '15%',
            left: '55%',
            style: {
              text: this.data.outData.name,
              textAlign: 'center',
              font: '10px "PingFang"',
              fill: '#A8CAFF'
            }
          }]
        },
        legend: {
          orient: 'horizontal',
          left: 'center',
          bottom: '0%',
          itemWidth: 6,
          padding: 0,
          itemGap: 4,
          itemHeight: 6,
          selectedMode: false,
          data: legend
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['26%', '36%'],
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
              length: 3,
              length2: 3
            },
            data: this.data.outData.data
          },
          {
            name: '访问来源',
            type: 'pie',
            radius: ['15%', '24%'],
            center: center,
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            data: this.data.inData.data
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
