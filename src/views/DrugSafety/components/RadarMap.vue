<template>
    <div class='RadarMap full'>
        <div class="bgpng">

        </div>
        <v-chart class="" :autoresize='true' :options='options' ref="echarts" @click="handler"/>
        <div class="radar full" ref="bg">
            <img src="./img/radar@2x.png" alt>
        </div>
    </div>
</template>

<script>
import json from '../../index/components/china.json'

const geoData = json.features
export default {
  name: 'RadarMap',
  data () {
    return {
      imgs: {
        bg: require('./img/bg@2x.png'),
        bg2: require('./img/Group@2x.png'),
        line1: require('./img/medicine@2x.png'),
        line2: require('./img/syringe@2x.png'),
        line3: require('./img/flask@2x.png')
      },
      data: [{
        name: '江苏',
        value: [23, 2, 3]
      }, {
        name: '湖南',
        value: [1, 12, 3]
      }, {
        name: '云南',
        value: [1, 2, 31]
      }, {
        name: '西藏',
        value: [6, 19, 3]
      }, {
        name: '新疆',
        value: [12, 2, 13]
      }, {
        name: '宁夏',
        value: [0, 11, 29]
      }, {
        name: '内蒙古',
        value: [0, 0, 4]
      }, {
        name: '北京',
        value: [0, 1, 0]
      }],
      selectedData: {},
      selectedIndex: 0,
      timer: 0
    }
  },
  computed: {
    options () {
      // geoData
      const data = this.makeData(this.selectedData)
      let values = this.selectedData.value
      if (!values) {
        values = [0, 0, 0]
      }
      const option = {
        toolbox: {
          show: false
        },
        title: {
          text: [
            // '{bg|}' +
            '{line1Icon|} 药  ' + values[0] + '\n' +
            ' \n{line2Icon|} 械  ' + values[1] + '\n' +
            ' \n{line3Icon|} 化  ' + values[2] + '\n'
          ],
          left: 5,
          top: 6,
          textStyle: {
            color: 'white',
            fontSize: 20,
            rich: {
              line1Icon: {
                width: 20,
                height: 20,
                backgroundColor: {
                  image: this.imgs.line1
                }
              },
              line2Icon: {
                width: 20,
                height: 20,
                backgroundColor: {
                  image: this.imgs.line2
                }
              },
              line3Icon: {
                align: 'left',
                width: 20,
                height: 20,
                backgroundColor: {
                  image: this.imgs.line3
                }
              },
              bg: {
                width: 150,
                height: 200,
                color: 'white',
                backgroundColor: {
                  image: this.imgs.bg
                }
              }
            }
          }
        },
        geo: {
          map: 'china',
          roam: true,
          label: {
            normal: {
              show: true,
              textStyle: {
                color: 'rgba(0,0,0,0.4)'
              }
            }
          },
          itemStyle: {
            normal: {
              borderColor: 'rgba(0, 0, 0, 0.2)'
            },
            emphasis: {
              areaColor: null,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        },
        visualMap: {
          min: 0,
          max: 0,
          left: 'left',
          top: 'bottom',
          text: [
            'High',
            'Low'
          ],
          seriesIndex: [0],
          inRange: {
            color: [
              '#e0ffff',
              '#006edd'
            ]
          },
          calculable: true
        },
        series: [
          {
            name: '',
            type: 'map',
            geoIndex: 0,
            // mapType: 'hz', // 自定义扩展图表类型
            // itemStyle: {
            //     areaColor: "#1580ab",
            //     borderWidth: 0.2),
            //     borderColor: "#7AFAFF",
            // },

            this: this.data
          },
          {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: data,
            this: [
              {
                name: '223',
                value: null
              }
            ],
            symbolSize: 20,
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
              show: true,
              position: 'top',
              distance: 0,
              // formatter :'{bg|}',
              color: '#fff',
              formatter: function (param) {
                const idata = param.data.value
                return [
                  '  {line1Icon|} 药 ' + idata[2],
                  '',
                  '  {line2Icon|} 械 ' + idata[3],
                  '',
                  '  {line3Icon|} 化 ' + idata[4]
                ].join('\n')
              },
              backgroundColor: {
                image: this.imgs.bg2
              },
              padding: [
                10,
                20,
                20,
                20
              ],
              rich: {
                bg: {
                  width: 110,
                  height: 140
                },
                title: {
                  color: '#FFFFFF',
                  fontSize: 20,
                  position: [
                    '50%',
                    '50%'
                  ]
                },
                line1Icon: {
                  width: 20,
                  height: 20,
                  backgroundColor: {
                    image: this.imgs.line1
                  }
                },
                line2Icon: {
                  width: 20,
                  height: 20,
                  backgroundColor: {
                    image: this.imgs.line2
                  }
                },
                line3Icon: {
                  align: 'left',
                  width: 20,
                  height: 20,
                  backgroundColor: {
                    image: this.imgs.line3
                  }
                },
                abg: {
                  backgroundColor: '#333',
                  width: '100%',
                  align: 'right',
                  height: 25,
                  borderRadius: [
                    4,
                    4,
                    0,
                    0
                  ]
                },
                Sunny: {
                  height: 30,
                  align: 'left',
                  backgroundColor: {
                    image: this.imgs.bg
                  }
                }
              }
            },
            itemStyle: {
              normal: {
                color: '#E26F6F',
                shadowBlur: 10,
                shadowColor: '#333'
              }
            },
            zlevel: 111,
            z: 22
          }
        ]
      }
      return option
    }
  },
  mounted () {
    this.start()
  },
  methods: {
    handler (event) {
      console.log(event)
    },
    makeData (data) {
      const rtn = []
      const item = data
      const find = geoData.find(value => {
        return value.properties.name === item.name
      })
      if (find) {
        rtn.push({
          name: item.name,
          value: (find.properties.cp).concat(...item.value)
        })
      }
      return rtn
    },
    start () {
      const len = this.data.length
      // this.selectedData=
      this.selectedData = this.data[0]
      this.timer = setInterval(() => {
        this.selectedData = this.data[this.selectedIndex]
        this.selectedIndex++
        if (this.selectedIndex === len) {
          this.selectedIndex = 0
        }
      }, 16000 / len)
    }
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>

<style scoped lang="less">
.RadarMap {
    position: relative;

    .radar {
        top: 0;
        position: absolute;
        background-image: url('./img/radar_bg@2x.png');
        background-position: center 67%;
        background-repeat: no-repeat;
        background-size: auto 100%;
        overflow: hidden;
        text-align: center;

        > img {
            height: 100%;
            animation: kf 16s linear infinite;
        }
    }
}

@keyframes kf {
    from {
        -webkit-transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(360deg);
    }
}
</style>
