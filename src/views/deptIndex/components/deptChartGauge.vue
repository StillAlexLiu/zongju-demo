<template>
    <div class="full ChartGauge" style="position: relative">
        <chart class="chart" :options='options' @click="click"/>
        <div class="info" @click="click" >
            <span>{{data.value}}</span>%
        </div>
    </div>
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
  methods: {
    click () {
      console.log(1)
      this.$emit('click', '')
    }
  },
  computed: {
    options () {
      const color = new echarts.graphic.LinearGradient(1, 0, 0, 0, [
        // {
        //   offset: 0,
        //   color: 'rgba(0, 219, 141, 0.62)'
        // }, {
        //   offset: 0.17,
        //   color: 'rgba(140, 221, 56, 1)'
        // },
        // {
        //   offset: 0.9,
        //   color: 'rgba(239, 239, 43, 1)'
        // },
        // {
        //   offset: 1,
        //   color: 'rgba(255, 145, 0, 1)'
        // }
        {
          offset: 0,
          color: 'rgba(0, 219, 141, 0.62)'
        }, {
          offset: 0.17,
          color: 'rgba(140, 221, 56, 1)'
        },
        {
          offset: 0.9,
          color: 'rgba(255, 145, 0, 1)'
        },
        {
          offset: 1,
          color: '#E3475A'
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
            top: '74%',
            left: 'center',
            style: {
              text: this.data.name,
              textAlign: 'center',
              font: '14px "LESLIE"',
              fill: '#fff'
            }
          }]
        },
        series: [
          {
            type: 'gauge',
            center: ['50%', '45%'],
            radius: '80%',
            startAngle: '230',
            endAngle: '-10',
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
    .chart {
        background-image: url("../../index/components/img/gauge.png");
        background-size: 114px 117px;
        background-position: center;
        background-repeat: no-repeat;
    }

    .info {
        position: absolute;
        width: 100%;
        top: 50px;
        text-align: center;
        span {
            padding-left:6px;
            font-size: 36px;
            color: rgba(255, 213, 137, 1);
            font-family: 'LESLIE';
        }
    }
}
</style>
