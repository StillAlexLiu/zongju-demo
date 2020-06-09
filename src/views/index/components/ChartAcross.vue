<template>
    <div class='ChartPieCircle2 full'>
        <chart :options='options' class="chart"/>
    </div>
</template>

<script>
export default {
  name: 'ChartAcross',
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
          itemWidth: 10,
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
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang='less'>
.ChartPieCircle, .chart {
    width: 100%;
    height: 100%;
}
</style>
