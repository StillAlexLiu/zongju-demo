<template>
    <v-chart class="" :autoresize='true' :options='options' ref="echarts" @click="this.handler"/>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'EchartsMapHotMap',
  data () {
    return {
      center: [104.075206, 30.659799],
      mapSelectName: '',
      timer: 0,
      isIn: true,
      indata: [],
      inpoints: [],
      mapData: [],
      symbols: [{
        img: require('./img/mapPoint/低@2x.png'),
        size: [61, 91]
      }, {
        img: require('./img/mapPoint/中@2x.png'),
        size: [61, 115]
      }, {
        img: require('./img/mapPoint/高@2x.png'),
        size: [61, 143]
      }]
    }
  },
  props: {
    data: {
      type: String,
      default: ''
    }
  },
  computed: {
    options () {
      const geos = []
      const level = 9

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
          top: 120 - 4 * i,
          bottom: 60 + 4 * i,
          aspectScale: 1,
          silent: i !== level - 1,
          itemStyle: {
            color: '#2B5386',
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
        series: [{
          type: 'scatter',
          coordinateSystem: 'geo',
          geoIndex: level - 1,
          data: this.mapData
        }]
      }
    }
  },
  created () {
    this.makeData()
  },
  methods: {
    handler (event) {

    },
    makeData () {
      this.mapData = []
      for (let i = 0; i < echarts.getMap('china').geoJson.features.length; i++) {
        const item = echarts.getMap('china').geoJson.features[i]
        if (i % 14 < 3) {
          const icon = this.symbols[i % 3]
          this.mapData.push({
            name: item.properties.name,
            symbol: 'image://' + icon.img,
            symbolSize: icon.size,
            value: item.properties.cp,
            symbolOffset: [0, '-50%']
          })
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
</style>
