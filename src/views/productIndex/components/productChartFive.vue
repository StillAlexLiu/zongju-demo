<template>
    <chart :options='options' class="chart"/>
</template>

<script>
export default {
  name: 'productChartFive',
  data () {
    return {}
  },
  props: ['title', 'data'],
  computed: {
    options () {
      return {
        title: {
          text: this.title
        },
        legend: {
          show: true,
          left: 'right',
          selectedMode: false,
          itemWidth: 13,
          itemHeight: 7,
          data: this.data.legend
        },
        xAxis: {},
        yAxis: [
          {
            data: this.data.ydata
          }
        ],
        series: [
          {
            type: 'bar',
            name: this.data.legend[0],
            stack: '2',
            legendHoverLink: false,
            barWidth: 5,
            itemStyle: {
              normal: {
                color: this.data.color[0]
              },
              emphasis: {
                color: this.data.color[0]
              }
            },
            data: this.data.data1
          },
          {
            type: 'bar',
            name: this.data.legend[1],
            stack: '2',
            legendHoverLink: false,
            barWidth: 5,
            itemStyle: {
              normal: {
                color: this.data.color[1]
              },
              emphasis: {
                color: this.data.color[1]
              }
            },
            data: this.data.data2
          },
          {
            type: 'bar',
            stack: '2',
            name: this.data.legend[2],
            legendHoverLink: false,
            barWidth: 5,
            itemStyle: {
              normal: {
                color: this.data.color[2],
                barBorderRadius: [0, 5, 5, 0]
              },
              emphasis: {
                color: this.data.color[2]
              }
            },
            data: this.data.data3
          },
          {
            type: 'bar',
            stack: '2',
            name: this.data.legend[3],
            legendHoverLink: false,
            barWidth: 5,
            itemStyle: {
              normal: {
                color: this.data.color[3],
                barBorderRadius: [0, 5, 5, 0]
              },
              emphasis: {
                color: this.data.color[3]
              }
            },
            data: this.data.data4
          },
          {
            type: 'bar',
            stack: '2',
            name: this.data.legend[4],
            legendHoverLink: false,
            barWidth: 5,
            itemStyle: {
              normal: {
                color: this.data.color[4],
                barBorderRadius: [0, 5, 5, 0]
              },
              emphasis: {
                color: this.data.color[4]
              }
            },
            data: this.data.data5
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang='less'>
</style>
