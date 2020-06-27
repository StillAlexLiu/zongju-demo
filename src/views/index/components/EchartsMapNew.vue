<template>
    <v-chart class="" :autoresize='true' :options='options' ref="echarts" @click="this.handler"/>
</template>

<script>
import echarts from 'echarts'

const mapInfo = require('./img/mapInfo.png')
const pointImg = require('./img/绿色打点.png')
export default {
  name: 'EchartsMapNew',
  data () {
    return {
      options: {},
      center: [104.075206, 30.659799],
      mapSelectName: '',
      timer: 0,
      isIn: true,
      indata: [],
      level: 9,
      inpoints: []
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
    this.mapSelectName = this.config.mapSelectName
    this.options = this.getOption()
    this.$nextTick(() => {
      // 选中四川
      this.$refs.echarts.dispatchAction({
        type: 'geoSelect',
        seriesName: 'geo',
        name: this.mapSelectName
      })
    })
  },
  methods: {
    handler (event) {
      if (event.componentType === 'geo') {
        this.mapSelectName = event.name
        const find = this.getCPByName(event.name)
        if (find) {
          this.config.center = find.properties.cp
        }
        this.options = this.getOption()
        console.log(this.mapSelectName)
        this.$nextTick(() => {
          this.$refs.echarts.dispatchAction({
            geoIndex: this.level - 1,
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
      this.indata = []
      this.inpoints = []
      const geoData = echarts.getMap(this.config.name).geoJson.features
      for (let i = 0; i < geoData.length; i++) {
        const cp = geoData[i].properties.cp
        const name = geoData[i].properties.name
        if (name !== this.mapSelectName) {
          if (i % 4 === 0) {
            this.inpoints.push({
              value: cp,
              // symbol: 'image://' + mapPint,
              // symbol: 'circle',
              symbol: 'image://' + pointImg,
              // FBD420
              symbolSize: [42, 26],
              name: name,
              itemStyle: {
                color: '#FBD420'
              }
            })
            if (this.config.style === 0) {
              this.indata.push({
                name: '',
                coords: [cp, this.config.center],
                lineStyle: {
                  color: '#26C5EB',
                  curveness: this.config.center[0] > cp[0] ? '0.3' : '-0.3'
                }
              })
            }
          }
          if (i % 4 === 1) {
            this.inpoints.push({
              value: cp,
              // symbol: 'image://' + mapPint,
              // symbol: 'circle',
              symbol: 'image://' + pointImg,
              // FBD420
              symbolSize: [42, 26],
              name: name,
              itemStyle: {
                color: '#FBD420'
              }
            })

            if (this.config.style === 0) {
              this.indata.push({
                name: '',
                coords: [this.config.center, cp],
                lineStyle: {
                  color: '#F5D298',
                  curveness: this.config.center[0] < cp[0] ? '0.3' : '-0.3'
                }
              })
            }
          }
        }
      }
    },
    getOption () {
      const style = this.config.style
      this.makeData()
      const mapSelectName = this.mapSelectName
      const geos = []
      const level = this.level

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
              // color: '#2B5185',
              color: i === level - 1 ? {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: 'rgba(128 ,195, 243,.8)' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: 'rgba(74 ,144, 226,.8)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              } : '#2B5185',
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
              borderWidth: 1,
              borderColor: i === level - 1 ? getMapLineStyle(0) : getMapLineStyle(1, i, level)
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
          type: 'lines',
          coordinateSystem: 'geo',
          geoIndex: level - 1,
          zlevel: 2,
          effect: {
            show: true,
            constantSpeed: 60,
            trailWidth: 2,
            trailLength: 0.3
          },
          lineStyle: {
            width: 2,
            type: 'dotted',
            curveness: -0.3,
            opacity: 0.7
          },
          silent: true,
          data: this.indata
        }, {
          // type: 'effectScatter',
          type: 'scatter',
          coordinateSystem: 'geo',
          // pointImg
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
            coords: this.getPoint([this.config.pointPosition, this.config.center], 1),
            lineStyle: {
              color: '#7ABAE1',
              curveness: '0'
            }
          }]
        }, {
          type: 'scatter',
          coordinateSystem: 'geo',
          geoIndex: level - 1,
          label: {
            normal: {
              show: true,
              position: 'inside',
              formatter: function () {
                return '{title|' + mapSelectName + '}\n' +
                  '{name|企业总数}{value|430}{unit|万户}\n' +
                  '{name|个体数}{value|223}{unit|万户}\n' +
                  '{name|农专户数}{value|130}{unit|万户}\n' +
                  '{name|小微企业数}{value|93}{unit|万户}'
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
                  width: 80,
                  lineHeight: 22,
                  align: 'right',
                  verticalAlign: 'bottom'
                },
                unit: {
                  color: '#FFFFFF',
                  fontSize: 12,
                  width: 30,
                  lineHeight: 22,
                  verticalAlign: 'bottom'
                },
                value: {
                  color: '#fff',
                  fontSize: 24,
                  width: 40,
                  lineHeight: 26,
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
            symbol: 'image://' + mapInfo,
            symbolSize: ['203', '203'],
            name: '信息'
          }]
        }]
      }
    },
    getPoint (coords) {
      const fixed = coords[0]
      const change = coords[1]
      const rad = Math.atan2(change[1] - fixed[1], change[0] - fixed[0])
      const r = this.config.r
      const rtn2 = [fixed[0] + Math.cos(rad) * r, fixed[1] + Math.sin(rad) * r * this.config.aspectScale]
      return [rtn2, change]
    }
  }
}
</script>

<style scoped lang="less">
</style>
