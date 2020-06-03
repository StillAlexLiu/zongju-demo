<template>
    <chart :options="options"/>
</template>

<script>
export default {
  name: 'progressBar',
  props: {
    total: {
      type: Number,
      default: null
    },
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
    dimensions: {
      type: Array,
      default: () => {
        return null
      }
    },
    units: {
      type: Array,
      default: () => {
        return []
      }
    },
    colors: {
      type: Array,
      default: () => {
        return null
      }
    },
    type: {
      type: Array,
      default: () => {
        return []
      }
    },
    legend: {
      type: Array,
      default: () => {
        return null
      }
    },
    borderRadius: {
      type: Boolean,
      default: true
    },
    barWidth: {
      type: Number,
      default: 8
    },
    yAxisIndex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    options () {
      return {
        title: {
          text: this.title,
          left: 'left',
          top: 10
        },
        tooltip: {
          trigger: 'item',
          formatter: '',
          textStyle: {
            align: 'center', // 水平对齐方式可选left，right，center
            baseline: 'top'
          }
        },
        series: [
          {
            name: '数据来源',
            type: 'pie',
            radius: ['40%', '60%'],
            center: ['50%', '60%'],
            data: this.data,
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: function (val) { // 让series 中的文字进行换行
                    //  console.log(val)
                    val.name = val.name + '-' + val.value * 10 + '%'
                    return val.name.split('-').join('\n')
                  }
                },
                labelLine: {
                  show: true
                },
                borderColor: '#20233A',
                borderWidth: 6
              },
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    }
  },
  methods: {}
}
</script>

<style scoped lang="less">
</style>
