<template>
    <chart class="ChartGauge" :options='options'/>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'ChartGauge',
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          name: '',
          value: ''
        }
      }
    }
  },
  computed: {
    options () {
      const color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [
        {
          offset: 0,
          color: 'rgba(0, 219, 141, 0.62)'
        }, {
          offset: 0.17,
          color: 'rgba(140, 221, 56, 1)'
        },
        {
          offset: 0.9,
          color: 'rgba(239, 239, 43, 1)'
        },
        {
          offset: 1,
          color: 'rgba(255, 145, 0, 1)'
        }
      ])
      const colorSet = [
        [(this.data.value / 100), color],
        [1, 'rgba(0,0,0,0)']
      ]
      return {
        graphic: {
          elements: [{
            type: 'text',
            left: '35%',
            top: '35%',
            style: {
              text: this.data.value,
              textAlign: 'right',
              font: '20px "LESLIE"',
              fill: 'rgba(255, 213, 137, 1)'
            }
          }, {
            type: 'text',
            left: '55%',
            top: '43%',
            style: {
              text: '%',
              textAlign: 'left',
              font: '10px "LESLIE"',
              fill: '#fff'
            }
          }, {
            type: 'text',
            top: '79%',
            left: 'center',
            style: {
              text: this.data.name,
              textAlign: 'center',
              font: '10px "LESLIE"',
              fill: '#fff'
            }
          }]
        },
        series: [
          {
            type: 'gauge',
            center: ['50%', '44%'],
            radius: '66%',
            startAngle: '225',
            endAngle: '-45',
            pointer: {
              show: false
            },
            detail: {
              show: false
            },
            data: [this.data],
            title: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: colorSet,
                width: '7',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: 1
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false,
              length: 25,
              lineStyle: {
                color: '#00377a',
                width: 2,
                type: 'solid'
              }
            },
            axisLabel: {
              show: false
            },
            markPoint: {
              data: [
                {
                  name: '周最低',
                  value: -2,
                  xAxis: 1,
                  yAxis: -1.5
                }
              ]
            }
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang="less">
.ChartGauge {
    background-image: url("./img/gauge.png");
    background-size: 91px 94px;
    background-position: center;
    background-repeat: no-repeat;
}
</style>
