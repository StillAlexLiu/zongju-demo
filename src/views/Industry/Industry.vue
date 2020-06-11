<template>
    <div class='Industry full'>
        <div class="h-6-11 full-width">
            <container title="事前监管" class="full-height w-3-10">
                <LeftBlock/>
            </container>
            <div class="full-height w-4-10" style="padding-top: 60px">
                <container class="full">
                    <img-block class="full" :data="img.center"/>
                </container>
            </div>
            <container title="事后监管" class="full-height w-3-10">
                <img-block class="full" :data="img.right"/>
            </container>
        </div>
        <container class="h-5-11" title="事中监管" style="position: relative">
            <img-block class="full" :data="img.bottom"/>
            <div class="in">
                <div class="sub-title" style="height: 22px">
                    <TabBottomLine :data="tab" v-model="selectedIndex"/>
                </div>
                <div class="chart-sub" style="height: calc(100% - 22px)">
                    <ChartBarLine
                        :data="chart[selectedIndex].data"
                        :title="chart[selectedIndex].title"
                        :dimensions="chart[selectedIndex].dimensions"
                        :colors="chart[selectedIndex].color"
                        :type="chart[selectedIndex].type"
                        :legend="chart[selectedIndex].legend"
                        :units="chart[selectedIndex].units"
                        :two-axis="false"
                    />
                </div>
            </div>
        </container>
    </div>
</template>

<script>
import ImgBlock from '../common/ImgBlock'
import LeftBlock from './components/LeftBlock'
import ChartBarLine from '../index/components/ChartBarLine'
import Mock from 'mockjs'

export default {
  name: 'Industry',
  components: {
    ChartBarLine,
    LeftBlock,
    ImgBlock
  },
  data () {
    return {
      tab: [{
        name: '不合格地区排名',
        value: 0
      }, {
        name: '不合格产品排名',
        value: 1
      }],
      selectedIndex: 0,
      img: {
        bottom: {
          img: require('./BlockImg/事中监管.png'),
          width: 1828,
          height: 389
        },
        center: {
          img: require('./BlockImg/中间地图.png'),
          width: 694,
          height: 478
        },
        left: {
          img: require('./BlockImg/中间地图.png'),
          width: 694,
          height: 478
        },
        right: {
          img: require('./BlockImg/事后监管.png'),
          width: 493,
          height: 522
        }
      },
      chart: [{
        title: '',
        dimensions: ['name', 'value'],
        legend: ['不合格批次'],
        type: ['bar'],
        units: ['户数'],
        color: ['#F78F35'],
        data: [{
          name: '北京',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '上海',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '河北',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '内蒙古',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '江苏',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '山东',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '四川',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '河南',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '山西',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '湖北',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '贵州',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '广州',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '云南',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '辽宁',
          value: Mock.Random.natural(60, 100)
        }]
      }, {
        title: '',
        dimensions: ['name', 'value'],
        legend: ['不合格批次'],
        type: ['bar'],
        units: ['户数'],
        color: ['#F78F35'],
        data: [{
          name: '北京',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '上海',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '河北',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '内蒙古',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '江苏',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '山东',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '四川',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '河南',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '山西',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '湖北',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '贵州',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '广州',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '云南',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '辽宁',
          value: Mock.Random.natural(60, 100)
        }]
      }]
    }
  }
}
</script>

<style scoped lang="less">
.Industry {
    color: #ffffff;
    padding: 15px 20px;

    .in {
        position: absolute;
        left: 550px;
        top: 260px;
        width: 410px;
        height: 200px;
    }

    .sub-title {
        background-image: linear-gradient(270deg, rgba(36, 59, 83, 0.00) 10%, rgba(43, 137, 254, 0.48) 98%);
        background-size: 162px 22px;
        background-repeat: no-repeat;
        background-position: left;
    }
}
</style>
