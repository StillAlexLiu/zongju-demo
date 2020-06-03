<template>
    <chart :options='options'/>
</template>

<script>

export default {
  name: 'foodChartFunnel',
  props: {
    // title: {
    //   type: String,
    //   default: ''
    // },
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
      const indata = this.data
      const legend = []
      return {
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
        series: [{
          name: '漏斗图',
          type: 'funnel',
          sort: 'ascending',
          left: '0%',
          top: '5%',
          width: '100%',
          label: {
            normal: {
              position: 'inside',
              // padding: [0, 0, -80, 0],
              formatter: function (params) {
                var text = ''
                switch (params.name) {
                  case '个人完税证明开具':
                    text = '{a|779}{b|笔}\n{c|个人完税证明开具}'
                    break
                  case '自然人登记':
                    text = '{a|32652}{b|笔}\n{c|自然人登记}'
                    break
                  case '申报总量':
                    text = '{a|217966}{b|笔}\n{c|申报总量}'
                    break
                }
                return text
              },
              rich: {
                a: {
                  align: 'center',
                  border: 0
                },
                b: {
                  align: 'center',
                  border: 0
                },
                c: {
                  align: 'center',
                  border: 0
                }
              }
            }
          },
          data: indata
        }]
      }
    }
  }
}
</script>

<style scoped lang="less">
.ChartPieCircle {
}
</style>
