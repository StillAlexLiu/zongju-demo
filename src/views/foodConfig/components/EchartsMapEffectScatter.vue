<template>
    <v-chart class="" :autoresize='true' :options='options' ref="echarts" @click="this.handler"/>
</template>

<script>
import echarts from 'echarts'
// import Mock from 'mockjs'

export default {
  name: 'EchartsMapEffectScatter',
  data () {
    return {
      center: [104.075206, 30.659799],
      mapSelectName: '',
      timer: 0,
      isIn: true,
      indata: [],
      inpoints: [],
      mapData: [],
      colors: ['#FE6941', '#FE9E55', '#FAD352', '#50BFFF', '#B8E986']
    }
  },
  props: {
    mapIndex: {
      type: Number,
      default: 0
    }
  },
  watch: {
    mapIndex: {
      immediate: true,
      deep: true,
      handler: function () {
        this.makeData(this.mapIndex)
      }
    }
  },
  computed: {
    options () {
      const geos = []
      const level = 9

      function getMapStyle (i) {
        if (i === 0) { // 上层
          return '#2B5386'
        } else { // 下层
          return '#2B5386'
        }
      }

      function getMapLineStyle (i, index, level) {
        if (i === 0) { // 上层
          return '#7ABAE1'
        } else { // 下层
          return 'rgba(122,186,225,' + (1 / (level * 2) * (index + 1)) + ')'
        }
      }

      for (let i = 0; i < level; i++) {
        const geoItem = {
          map: 'china',
          top: 90 - 4 * i,
          bottom: 20 + 4 * i,
          aspectScale: 0.8,
          silent: i !== level - 1,
          itemStyle: {
            color: i === level - 1 ? getMapStyle(0) : getMapStyle(1),
            // color: i === level - 1 ? '#2B5386' : '#314F69',
            borderWidth: 1,
            borderColor: i === level - 1 ? getMapLineStyle(0) : getMapLineStyle(1, i, level)
          },
          emphasis: {
            itemStyle: {
              color: '#2B5185',
              borderWidth: 0,
              borderColor: 'rgba(89,148,187,.50)'
            },
            label: {
              show: i === level - 1,
              color: '#fff',
              fontSize: 18
            }
          }
        }
        if (i !== level - 1) {
          geoItem.regions = [
            {
              name: '南海诸岛',
              value: 0,
              itemStyle: {
                normal: {
                  opacity: 0,
                  label: {
                    show: false
                  }
                }
              }
            }
          ]
        }
        geos.push(geoItem)
      }
      return {
        geo: geos,
        visualMap: {
          min: 0,
          max: 2500,
          left: '20',
          bottom: '20',
          type: 'piecewise',
          textStyle: {
            color: '#fff'
          },
          // text: [
          //   'High',
          //   'Low'
          // ],
          seriesIndex: [0],
          inRange: {
            color: this.colors
          },
          calculable: true
        },
        series: [{
          type: 'effectScatter',
          // geoIndex: level - 1,
          coordinateSystem: 'geo',
          data: this.mapData,
          label: {
            show: false
          },
          emphasis: {
            label: {
              show: false
            }
          }
        }]
      }
    }
  },
  methods: {
    handler (event) {
      console.log(event)
      if (event.componentType === 'series') {
        this.$emit('pointClick')
      }
    },
    makeData (step) {
      this.mapData = []
      for (let i = 0; i < echarts.getMap('china').geoJson.features.length; i++) {
        const item = echarts.getMap('china').geoJson.features[i]
        const index = (i + step) % 5
        this.mapData.push({
          name: item.properties.name,
          value: item.properties.cp.concat(index * 500),
          itemStyle: {
            color: this.colors[index]
          }
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
</style>
