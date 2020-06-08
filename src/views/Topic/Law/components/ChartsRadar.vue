<template>
    <chart :options='options'/>
</template>

<script>
export default {
  name: 'ChartsRadar',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    indicator: {
      type: Array,
      default: () => {
        return []
      }
    },
    title: {
      type: String,
      default: ''
    },
    radius: {
      type: Number,
      default: 75
    }
  },
  computed: {
    options () {
      const indicator = []
      for (let i = 0; i < this.indicator.length; i++) {
        const item = this.indicator[i]
        item.name = item.name + '\n' + this.data[0].value[i] + '%'
        indicator.push(item)
      }
      return {
        title: {
          text: this.title
        },
        tooltip: {
          show: true
        },
        radar: {
          name: {
            textStyle: {}
          },
          radius: this.radius + '%',
          splitLine: {
            lineStyle: {
              color: ['#4A90E2', '#2D4C78', '#2D4C78', '#2D4C78', '#2D4C78', '#2D4C78', '#2D4C78']
            }
          },
          axisLine: {
            lineStyle: {
              color: '#2D4C78'
            }
          },
          splitArea: {
            areaStyle: {
              color: [
                'rgba(0, 100, 130, 0)',
                'rgba(30, 170, 200, 0)'
              ]
            }
          },
          // indicator: this.indicator
          indicator: indicator
        },
        series: [
          {
            name: '',
            type: 'radar',
            lineStyle: {
              // color: '#6EE86D'
              color: '#FF955E'
            },
            areaStyle: {
              normal: {
                // color: 'rgba(70,200,30,0.1)'
                opacity: 0.3
              }
            },
            label: {
              show: false,
              position: 'inside',
              formatter: '{c}分'
            },
            data: this.data
          }
        ]
      }
    }
  }
}
</script>
