<template>
    <v-chart class="cbg" :autoresize='true' :options='options' ref="echarts" @click="this.handler"/>
</template>

<script>
import json from '../../index/components/china.json'

const geoData = json.features
const mapPint = require('../../index/components/img/mapPoint.png')
// const mapInfo = require('../../components/img/mapInfo.png')

export default {
  name: 'deptEchartsMap',
  props: ['gongdangList'],
  data () {
    return {
      options: {},
      center: [104.075206, 30.659799],
      mapSelectName: '四川',
      timer: 0,
      isIn: true,
      indata: [],
      inpoints: [],
      aspectScale: 0.7, // 地图长宽比
      themes: [{
        map: {
          border: 'rgba(89,148,187,.50)'
        },
        lines: {
          in: '',
          out: ''
        }
      }, {
        map: {
          default: 'rgb(0,40,94)',
          select: {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.5,
            colorStops: [{
              offset: 0.5,
              color: '#0C3996' // 0% 处的颜色
            }, {
              offset: 0.83,
              color: '#015CD5' // 0% 处的颜色
            }, {
              offset: 0.85,
              color: '#005ED8' // 100% 处的颜色
            }],
            global: false // 缺省为 false
          },
          border: '#61aaff'
        },
        lines: {
          in: '',
          out: ''
        }
      }],
      themeIndex: 0
    }
  },
  watch: {
    data: {
      immediate: true,
      deep: true,
      handler: function () {
        this.options = this.getOption()
        this.$nextTick(() => {
          // 选中四川
          this.$refs.echarts.dispatchAction({
            type: 'geoSelect',
            seriesName: 'geo',
            name: this.mapSelectName
          })
        })
      }
    },
    gongdangList: {
      handler: function () {
        this.mapSelectName = this.gongdangList.name.substring(0, 2)
        const find = this.getCPByName(this.mapSelectName)
        if (find) {
          this.center = find.properties.cp
        }
        this.options = this.getOption()
        this.$nextTick(() => {
          this.$refs.echarts.dispatchAction({
            type: 'geoSelect',
            seriesName: 'geo',
            name: this.gongdangList.name.substring(0, 2)
          })
        })
      }
    }
  },
  beforeDestroy () {
    clearInterval(this.timer)
  },
  mounted () {
    this.options = this.getOption()
  },
  methods: {
    handler (event) {
      console.log(event)
      if (event.componentType === 'geo') {
        this.mapSelectName = event.name
        const find = this.getCPByName(event.name)
        if (find) {
          this.center = find.properties.cp
        }
        this.options = this.getOption()
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
      const find = geoData.find(value => {
        return value.properties.name === name
      })
      return find
    },
    makeData () {
      this.indata = []
      this.inpoints = []
      for (let i = 0; i < geoData.length; i++) {
        const cp = geoData[i].properties.cp
        const name = geoData[i].properties.name
        if (name !== this.mapSelectName) {
          if (i % 2 === 0) {
            this.inpoints.push({
              value: cp,
              symbol: 'image://' + mapPint,
              symbolSize: '15',
              name: name,
              itemStyle: {}
            })
            this.indata.push({
              name: '',
              coords: [cp, this.center],
              lineStyle: {
                color: '#26C5EB',
                curveness: this.center[0] > cp[0] ? '0.3' : '-0.3'
              }
            })
          } else {
            this.inpoints.push({
              value: cp,
              symbol: 'image://' + mapPint,
              symbolSize: '15',
              name: name,
              itemStyle: {}
            })
            this.indata.push({
              name: '',
              coords: [this.center, cp],
              lineStyle: {
                color: '#F5D298',
                curveness: this.center[0] < cp[0] ? '0.3' : '-0.3'
              }
            })
          }
        }
      }
    },
    getOption () {
      this.makeData()
      // const mapSelectName = this.mapSelectName
      const geos = []
      const level = 3
      for (let i = 0; i < level; i++) {
        const geoItem = {
          map: 'china',
          // left: 0,
          top: 20 - 5 * i,
          bottom: 5 + 5 * i,
          aspectScale: this.aspectScale,
          silent: i !== level - 1,
          itemStyle: {
            color: i === level - 1 ? '#151729' : 'rgba(0,0,0,0)',
            borderWidth: 1,
            borderColor: 'rgba(89,148,187,.50)'
          },
          emphasis: {
            itemStyle: {
              color: i === level - 1 ? {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 0.5,
                colorStops: [{
                  offset: 0,
                  color: '#1D2435' // 0% 处的颜色
                }, {
                  offset: 0.85,
                  color: '#2E5E95' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              } : 'rgba(0,0,0,0)',
              borderWidth: 1,
              borderColor: 'rgba(89,148,187,.50)'
            },
            label: {
              show: i === level - 1,
              color: '#fff'
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
            coords: this.getPoint([[83, 24], this.center], 1),
            lineStyle: {
              color: '#A0D2FF',
              curveness: '0'
            }
          }]
        }]
      }
    },
    getPoint (coords) {
      const fixed = coords[0]
      const change = coords[1]
      const rad = Math.atan2(change[1] - fixed[1], change[0] - fixed[0])
      const r = 8.8
      const rtn2 = [fixed[0] + Math.cos(rad) * r, fixed[1] + Math.sin(rad) * r * this.aspectScale]
      return [rtn2, change]
    }
  }
}
</script>

<style scoped lang="less">
</style>
