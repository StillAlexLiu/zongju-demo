<template>
    <v-chart class="" :autoresize='true' :options='options' ref="echarts" @click="handler"/>
</template>

<script>
import echarts from 'echarts'

const mapInfo = require('./img/mapInfo2.png')
const mapInfo2 = require('./img/mapInfo3.png')

const pointImg = require('./img/绿色打点.png')
export default {
  name: 'EchartsMapRenWuNew',
  data () {
    return {
      center: [104.075206, 30.659799],
      mapSelectName: '湖北',
      timer: 0,
      isIn: true,
      inpoints: [],
      mapInfoImg: mapInfo,
      aspectScale: 0.75 // 地图长宽比
    }
  },
  props: {
    config: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  beforeDestroy () {
    clearInterval(this.timer)
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.echarts.dispatchAction({
        type: 'geoSelect',
        seriesName: 'geo',
        name: '湖北'
      })
    })
  },
  computed: {
    options () {
      const style = this.config.style
      this.makeData()
      const mapSelectName = this.mapSelectName
      const geos = []
      const level = 9

      function getMapStyle (i) {
        if (i === 0) { // 上层
          if (style === 0) {
            return '#2B5386'
          } else {
            return new echarts.graphic.LinearGradient(0, 0, 1, 1, [
              {
                offset: 0,
                color: '#32C7E1'
              },
              {
                offset: 1,
                color: 'rgba(50,198,223,.40)'
              }
            ])
            // return {
            //   type: 'radial',
            //   x: 0.5,
            //   y: 0.5,
            //   r: 0.5,
            //   colorStops: [{
            //     offset: 0,
            //     color: 'rgba(50,198,223,.40)' // 0% 处的颜色
            //   }, {
            //     offset: 0.85,
            //     color: '#32C7E1' // 100% 处的颜色
            //   }],
            //   global: false // 缺省为 false
            // }
          }
        } else { // 下层
          if (style === 0) {
            return '#2B5386'
          } else {
            return '#2B5386'
          }
        }
      }

      function getMapLineStyle (i, index, level) {
        if (i === 0) { // 上层
          if (style === 0) {
            return 'rgba(89, 148, 187, .50)'
          } else {
            return '#7ABAE1'
            // return '#5995BA'
          }
        } else { // 下层
          if (style === 0) {
            // return 'rgba(0, 0, 0, 0)'
            return 'rgba(122,186,225,' + (1 / (level * 2) * (index + 1)) + ')'
          } else {
            // return 'rgba(89, 148, 187, .50)'
            // return 'rgba(89, 148, 187, .50)'
            return 'rgba(106,175,217,' + 0.1 * level + ')'
          }
        }
      }

      for (let i = 0; i < level; i++) {
        const geoItem = {
          map: this.config.name,
          top: 120 - 4 * i,
          bottom: 60 + 4 * i,
          aspectScale: this.config.aspectScale,
          silent: i !== level - 1,
          itemStyle: {
            color: i === level - 1 ? getMapStyle(0) : getMapStyle(1),
            // color: i === level - 1 ? '#2B5386' : '#314F69',
            borderWidth: 2,
            borderColor: i === level - 1 ? getMapLineStyle(0) : getMapLineStyle(1, i, level)
            // borderColor: 'rgba(89, 148, 187, .50)'
          },
          emphasis: {
            itemStyle: {
              color: '#2B5185',
              // color: i === level - 1 ? {
              //   type: 'radial',
              //   x: 0.5,
              //   y: 0.5,
              //   r: 0.5,
              //   colorStops: [{
              //     offset: 0,
              //     color: '#32C7E1' // 0% 处的颜色
              //   }, {
              //     offset: 0.85,
              //     color: 'rgba(50,198,223,.40)' // 100% 处的颜色
              //   }],
              //   global: false // 缺省为 false
              // } : 'rgba(0,0,0,0)',
              // color: i === level - 1 ? new echarts.graphic.LinearGradient(0, 0, 1, 1, [
              //   {
              //     offset: 0,
              //     color: '#32C7E1'
              //   },
              //   {
              //     offset: 1,
              //     color: 'rgba(50,198,223,.40)'
              //   }
              // ]) : 'rgba(0,0,0,0)',
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
          type: 'effectScatter',
          coordinateSystem: 'geo',
          geoIndex: level - 1,
          // zlevel: 2,
          // rippleEffect: {
          //   brushType: 'stroke'
          // },
          label: {
            normal: {
              show: true,
              position: 'bottom',
              formatter: '{b}',
              fontSize: 18,
              color: '#fff'
            }
          },
          silent: true,
          data: this.inpoints
        }, {
          type: 'lines',
          coordinateSystem: 'geo',
          geoIndex: level - 1,
          zlevel: 2,
          lineStyle: {
            width: 1
          },
          data: [{
            name: '',
            coords: this.getPoint([this.config.pointPosition, this.config.center2], 1),
            lineStyle: {
              color: '#A0D2FF',
              curveness: '0'
            }
          }]
        }, {
          type: 'scatter',
          coordinateSystem: 'geo',
          geoIndex: level - 1,
          label: {
            normal: {
              show: false,
              position: 'inside',
              formatter: function () {
                return '{title|' + mapSelectName + '}\n' +
                  '{name|企业总数}{value|430}{name|万户}\n' +
                  '{name|个体数}{value|130}{name|万户}\n' +
                  '{name|农专户数}{value|68}{name|万户}\n' +
                  '{name|小微企业数}{value|98}{name|万户}'
              },
              rich: {
                title: {
                  color: '#FFFFFF',
                  align: 'center',
                  fontSize: 15
                },
                name: {
                  color: '#FFFFFF',
                  fontSize: 12,
                  lineHeight: 22,
                  verticalAlign: 'bottom'
                },
                value: {
                  color: '#3FD3D6',
                  fontSize: 22,
                  padding: [0, 3],
                  lineHeight: 22,
                  verticalAlign: 'bottom',
                  fontFamily: 'LESLIE'
                }
              },
              verticalAlign: 'middle',
              color: '#fff'
            }
          },
          silent: true,
          data: [{
            value: this.config.pointPosition,
            symbol: 'image://' + this.mapInfoImg,
            symbolSize: ['212', '212'],
            name: '信息'
          }]
        }]
      }
    }
  },
  methods: {
    handler (event) {
      if (event.componentType === 'geo') {
        this.mapSelectName = event.name
        const find = this.getCPByName(event.name)
        if (find) {
          this.config.center2 = find.properties.cp
        }
        // mapInfoImg
        if (this.mapSelectName === '北京') {
          this.mapInfoImg = mapInfo2
        } else {
          this.mapInfoImg = mapInfo
        }
        this.$nextTick(() => {
          this.$refs.echarts.dispatchAction({
            type: 'geoSelect',
            seriesName: 'geo',
            name: this.mapSelectName
          })
        })
      }
    },
    getCPByName (name) {
      const find = echarts.getMap(this.config.name).geoJson.features.find(value => {
        return value.properties.name === name
      })
      return find
    },
    makeData () {
      this.inpoints = []
      for (let i = 0; i < this.config.pointData.length; i++) {
        const item = this.config.pointData[i]
        this.inpoints.push({
          value: item.coords,
          symbol: 'circle',
          symbolSize: item.value / 2,
          name: item.name,
          itemStyle: {
            color: item.value > 50 ? '#FE5C70' : '#FBD420'
          }
        })
      }
    },
    getOption () {
    },
    getPoint (coords) {
      const fixed = coords[0]
      const change = coords[1]
      const rad = Math.atan2(change[1] - fixed[1], change[0] - fixed[0])
      const r = this.config.r
      const rtn2 = [fixed[0] + Math.cos(rad) * r, fixed[1] + Math.sin(rad) * r * this.aspectScale]
      return [rtn2, change]
    }
  }
}
</script>

<style scoped lang="less">
</style>
