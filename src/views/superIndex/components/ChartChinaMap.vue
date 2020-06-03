<template>
    <chart :options="options"/>
</template>

<script>
export default {
  name: 'ChartChinaMap',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {}
  },
  computed: {
    options () {
      return {
        visualMap: {
          show: true,
          min: 0,
          max: 2000,
          left: 16,
          bottom: 10,
          range: [0, 2000],
          calculable: true,
          textStyle: {
            color: 'white'
          },
          inRange: {
            // color: ['#04387b', '#467bc0'] // 蓝绿
            color: ['lightskyblue', 'yellow', 'orangered']
          }
        },
        geo: {
          map: 'china',
          roam: 1,
          scaleLimit: {
            min: 1,
            max: 2
          },
          zoom: 1.23,
          top: 90,
          label: {
            normal: {
              show: true,
              color: 'white'
            }
          },
          itemStyle: {
            normal: {
              borderColor: 'rgba(0, 0, 0, 0.2)'
            },
            emphasis: {
              areaColor: '#4499d0',
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              borderWidth: 0
            }
          }
        },
        series: [
          {
            name: '信用监管司',
            type: 'map',
            geoIndex: 0,
            data: this.data
          }
        ]
      }
    }
  }
}
</script>

<style lang="less">
</style>
