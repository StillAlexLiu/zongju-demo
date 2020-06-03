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
            radius: ['40%', '62%'],
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
                  return '{name|' + data.name + '}\n{percent|' + percent + '%}'
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
              length: 10,
              length2: 10
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
