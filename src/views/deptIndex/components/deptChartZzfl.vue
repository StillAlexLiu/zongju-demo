<template>
    <div class="deptChartZzfl full">
      <chart :options='options'/>
      <div class="postionsDept">
        <div class="full-width dc">累计办理量</div>
        <div class="full-width dc number-font">10144</div>
        <div class="full-width dc ">户次</div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'deptChartZzfl',
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
    dimensions: {
      type: Array,
      default: () => {
        return null
      }
    },
    colors: {
      type: Array,
      default: () => {
        return null
      }
    },
    type: {
      type: Array,
      default: () => {
        return []
      }
    },
    legend: {
      type: Array,
      default: () => {
        return null
      }
    },
    borderRadius: {
      type: Boolean,
      default: true
    },
    barWidth: {
      type: Number,
      default: 8
    },
    yAxisIndex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    options () {
      var scaleData = this.data
      var rich = {
        white: {
          color: '#ddd',
          align: 'center',
          fontSize: 14,
          padding: [3, 0]
        },
        a: {
          // fontFamily: 'SourceHanSansCN-Regular',
          fontWeight: '400',
          color: '#AEE6FF',
          fontSize: 12,
          align: 'center',
          textAlign: 'center'
        },
        b: {
          fontFamily: 'SourceHanSansCN-Medium',
          fontWeight: '500',
          color: '#FFFFFF',
          fontSize: 14,
          textAlign: 'center',
          align: 'center'
        }
      }
      var placeHolderStyle = {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          color: 'rgba(0, 0, 0, 0)',
          // borderColor: 'rgba(0, 0, 0, 0)',
          borderWidth: 0
        }
      }
      var data = []
      var color = this.colors
      for (var i = 0; i < scaleData.length; i++) {
        data.push({
          value: scaleData[i].value,
          name: scaleData[i].name,
          itemStyle: {
            normal: {
              fontSize: 12,
              borderWidth: 5,
              // shadowBlur: 20,
              borderColor: color[i],
              shadowColor: color[i]
            }
          }
        }, {
          value: 10,
          name: '',
          itemStyle: placeHolderStyle
        })
      }

      var seriesObj = [{
        name: '',
        type: 'pie',
        clockWise: false,
        radius: ['65%', '64%'],
        center: ['50%', '55%'],
        hoverAnimation: false,
        itemStyle: {
          normal: {
            label: {
              show: true,
              // position: 'outside',
              fontSize: 10,
              formatter: function (params) {
                if (params.name !== '') {
                  return '{white|' + '' + params.value + '户次}\n' + params.name
                } else {
                  return ''
                }
              },
              rich: rich
            },
            labelLine: {
              length: 8,
              length2: 8,
              show: true
            }
          }
        },
        data: data
      },
      {
        type: 'pie',
        radius: ['55%', '54%'],
        center: ['50%', '55%'],
        data: [100],
        label: {
          show: false
        }
      }]
      return {
        // backgroundColor: '#04243E',
        title: {
          text: this.title
        },
        tooltip: {
          show: false
        },
        legend: {
          show: false
        },
        toolbox: {
          show: false
        },
        series: seriesObj
      }
    }
  }
}

</script>

<style scoped lang="less">
.deptChartZzfl{
  position: relative;
  .postionsDept {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding-top: 30px;
    .dc{
      line-height: 25px;
      text-align: center;
      &:nth-child(2){
        // font-family: 'LESLIE';
        line-height: 24px;
      }
      // &:nth-child(1){
      //   line-height: 24px;
      // }
    }
  }
}

</style>
