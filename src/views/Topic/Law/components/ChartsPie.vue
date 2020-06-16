<template>
    <chart :options='options'/>
</template>

<script>

export default {
  name: 'ChartsPie',
  props: {
    title: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    color: {
      type: Array,
      default: () => {
        return []
      }
    },
    isPie: {
      type: Boolean,
      default: false
    },
    showAll: {
      type: Boolean,
      default: false
    },
    showValue: {
      type: Boolean,
      default: false
    },
    showLegend: {
      type: Boolean,
      default: true
    },
    legendPosition: {
      type: String,
      default: 'top'
    },
    img: {
      type: String,
      default: ''
    },
    imgSize: {
      type: Array,
      default: () => {
        return [120, 120]
      }
    },
    centerValue: {
      type: String,
      default: ''
    },
    unit: {
      type: String,
      default: ''
    },
    unitCenter: {
      type: String,
      default: ''
    },
    doublePie: {
      type: Boolean,
      default: false
    },
    centerData: {
      type: Array,
      default: () => {
        return []
      }
    },
    radiusPie: {
      type: Array,
      default: () => {
        return [0, '62%']
      }
    },
    radiusPieCenter: {
      type: Array,
      default: () => {
        return [0, '35%']
      }
    },
    radiusCircle: {
      type: Array,
      default: () => {
        return ['40%', '62%']
      }
    }
  },
  computed: {
    options () {
      const elements = []
      const img = {
        type: 'image',
        style: {
          image: this.img,
          height: this.imgSize[0],
          width: this.imgSize[1]
        },
        left: 'center',
        top: 'middle'
      }
      const text = {
        type: 'text',
        left: 'center',
        top: 'center',
        z: 100,
        style: {
          fill: '#fff',
          textAlign: 'center',
          text: this.centerValue,
          font: ' 52px LESLIE'
        }
      }
      if (this.img !== '') {
        elements.push(img)
      }
      if (this.centerValue !== '') {
        elements.push(text)
      }
      const series = []
      let left = 0
      const center = ['50%', '50%']
      const legend = {
        show: this.showLegend
      }
      switch (this.legendPosition) {
        case 'top':
          legend.orient = 'horizontal'
          break
        case 'left':
          legend.orient = 'vertical'
          legend.left = 10
          legend.top = 'center'
          legend.itemGap = 30
          left = '20%'
          break
        default:
          break
      }
      if (this.doublePie) {
        series.push({
          name: '',
          type: 'pie',
          radius: this.radiusPieCenter,
          center: center,
          top: 20,
          left: left,
          label: {
            show: true,
            position: 'inside',
            color: '#ddd',
            // fontSize: 22,
            align: 'left',
            alignTo: 'edge',
            // margin: 10,
            formatter: (params) => {
              if (params.name !== '') {
                if (this.showAll) {
                  return params.name + '\n{white|' + params.value + this.unitCenter + '}' + '\n{white|' + params.percent + '%}'
                } else if (this.showValue) {
                  return params.name + '\n{white|' + params.value + this.unitCenter + '}'
                } else {
                  return params.name + '\n{white|' + params.percent + '%}'
                }
              } else {
                return ''
              }
              // return params.percent
            },
            rich: {
              white: {
                color: '#fff',
                // fontSize: 22,
                align: 'left'
              }
            }
          },
          data: this.centerData
        })
      }
      series.push({
        name: '',
        type: 'pie',
        radius: this.isPie ? this.radiusPie : this.radiusCircle,
        center: center,
        top: 20,
        left: left,
        label: {
          show: true,
          position: 'outside',
          color: '#ddd',
          // fontSize: 22,
          align: 'left',
          alignTo: 'edge',
          margin: 10,
          formatter: (params) => {
            if (params.name !== '') {
              if (this.showAll) {
                return params.name + '\n{white|' + params.value + this.unit + '}' + '\n{white|' + params.percent + '%}'
              } else if (this.showValue) {
                return params.name + '\n{white|' + params.value + this.unit + '}'
              } else {
                return params.name + '\n{white|' + params.percent + '%}'
              }
            } else {
              return ''
            }
            // return params.percent
          },
          rich: {
            white: {
              // color: '#79DFEF',
              // fontSize: 22,
              align: 'left'
            }
          }
        },
        labelLine: {
          length: 5,
          length2: 8
        },
        data: this.data
      })
      return {
        color: this.color.length > 0 ? this.color : null,
        graphic: {
          elements: elements
        },
        title: {
          text: this.title
          // textStyle: {
          //   color: 'red'
          //   // fontSize: 200
          // }
        },
        legend: legend,
        series: series
      }
    }
  }
}
</script>

<style scoped lang="less">
.ChartPieCircle {
}
</style>
