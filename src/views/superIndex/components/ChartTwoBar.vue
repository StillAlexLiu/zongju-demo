<template>
  <chart :options='options' class="onlyChart"/>
</template>

<script>
export default {
  name: 'ChartTwoBar',
  props: {
    data: {
      type: Array,
      default: () => {
        return {}
      }
    },
    legend: {
      type: Boolean,
      default: () => {
        return ''
      }
    },
    color: {
      type: Array,
      default: () => {
        return []
      }
    },
    yname: {
      type: String,
      default: () => {
        return ''
      }
    },
    title: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  data () {
    return {
    }
  },
  computed: {
    options () {
      return {
        title: {
          text: this.title,
          left: 0
        },
        legend: {
          show: this.legend,
          right: 20,
          itemWidth: 10,
          itemHeight: 10,
          selectedMode: false
        },
        tooltip: {
          show: false
        },
        grid: {
          top: '30%',
          bottom: 40,
          left: 60,
          right: 0
        },
        dataset: {
          source: this.data
        },
        xAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: 'rgba(51, 75, 115, 1)'
            }
          },
          axisLabel: {
            interval: 0
          }
        },
        yAxis: {
          name: this.yname
        },
        dataZoom: [// 给x轴设置滚动条
          {
            start: 0, // 默认为0
            end: 100 - 1500 / 31, // 默认为100
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            handleSize: 0, // 滑动条的 左右2个滑动条的大小
            height: 5, // 组件高度
            left: '10%', // 左边的距离
            right: '10%', // 右边的距离
            bottom: 5, // 右边的距离
            borderColor: '#000',
            fillerColor: '#269cdb',
            borderRadius: 5,
            backgroundColor: '#33384b', // 两边未选中的滑动条区域的颜色
            showDataShadow: false, // 是否显示数据阴影 默认auto
            showDetail: false, // 即拖拽时候是否显示详细数值信息 默认true
            realtime: true, // 是否实时更新
            filterMode: 'filter'
          }
        ],
        series: [
          {
            type: 'bar',
            barWidth: 10,
            itemStyle: {
              color: this.color[0],
              barBorderRadius: [10, 10, 0, 0]
            }
          },
          {
            type: 'bar',
            barWidth: 10,
            barGap: '30%',
            itemStyle: {
              color: this.color[1],
              barBorderRadius: [10, 10, 0, 0]
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="less" scoped>
.onlyChart{
  // width: 240%!important;
  // height: 100%!important;
}
</style>
