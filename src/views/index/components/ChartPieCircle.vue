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
    },
    color: {
      type: Array,
      default: () => {
        return null
      }
    }
  },
  computed: {
    options () {
      return {
        title: {
          text: this.title
        },
        color: this.color,
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
                  const trend = data.trend ? +data.trend + '%' : ''
                  return data.name + '\n' + percent + ' ' + trend
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
