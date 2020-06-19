<template>
    <div class='Industry full'>
        <div class="h-6-11 full-width">
            <container title="准入与认证" class="full-height w-2-7">
                <LeftBlock/>
            </container>
            <div class="full-height w-3-7" style="padding-top: 60px">
                <container class="full">
                    <div class="h-7-9">
                        <div class="w-2-3 full-height">
                            <img-block class="full" :data="img.center"/>
                        </div>
                        <div class="w-1-3 full-height">
                            <div class="h-1-3">
                                <info-block3 :data="tabList[tabListIndex]"/>
                            </div>
                            <div class="h-2-3" style="position: relative">
                                <top2 :img="img.center2" :data="tabList[tabListIndex]"/>
                            </div>
                        </div>
                    </div>
                    <div class="h-2-9">
                        <TabFreedom :data="tabList" class="full" v-model="tabListIndex">
                            <template v-slot:default="row">
                                <TabItem :data="row.item" :index="row.index"/>
                            </template>
                        </TabFreedom>
                    </div>
                </container>
            </div>
            <container title="事后监管" class="full-height w-2-7">
                <img-block class="full" :data="img.right"/>
            </container>
        </div>
        <div class="h-5-11">
            <container title="生产经营" class="full-height w-2-7">
                <img-block class="full" :data="img.left"/>
            </container>
            <container title="抽样检测" class="full-height w-3-7" style="position: relative">
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
            <container title="标准" class="full-height w-2-7">
                <img-block class="full" :data="img.right2"/>
            </container>
        </div>
    </div>
</template>

<script>
import ImgBlock from '../common/ImgBlock'
import LeftBlock from './components/LeftBlock'
import ChartBarLine from '../index/components/ChartBarLine'
import Mock from 'mockjs'
import TabItem from './components/TabItem'
import InfoBlock3 from './components/InfoBlock3'
import Top2 from './components/Top2'

export default {
  name: 'Industry',
  components: {
    Top2,
    InfoBlock3,
    TabItem,
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
      tabListIndex: 0,
      tabList: [{
        name: '电动自行车',
        value: '95%',
        values: [{
          name: '云南',
          value: '95%'
        }, {
          name: '贵州',
          value: '95%'
        }]
      }, {
        name: '电冰箱',
        value: '90%',
        values: [{
          name: '四川',
          value: '87%'
        }, {
          name: '湖南',
          value: '73%'
        }]
      }, {
        name: '洗衣机',
        value: '87%',
        values: [{
          name: '北京',
          value: '95%'
        }, {
          name: '上海',
          value: '80%'
        }]
      }, {
        name: '电视机',
        value: '85%',
        values: [{
          name: '浙江',
          value: '76%'
        }, {
          name: '江西',
          value: '44%'
        }]
      }, {
        name: '电风扇',
        value: '83%',
        values: [{
          name: '广东',
          value: '88%'
        }, {
          name: '海南',
          value: '78%'
        }]
      }, {
        name: '空调',
        value: '81%',
        values: [{
          name: '云南',
          value: '96%'
        }, {
          name: '贵州',
          value: '88%'
        }]
      }],
      selectedIndex: 0,
      img: {
        left: {
          img: require('./BlockImg/生产经营.png'),
          width: 500,
          height: 389
        },
        bottom: {
          img: require('./BlockImg/抽样检测.png'),
          width: 748,
          height: 376
        },
        center: {
          img: require('./BlockImg/小地图.png'),
          width: 371,
          height: 310
        },
        center2: {
          img: require('./BlockImg/中间框.png'),
          width: 210,
          height: 138
        },
        right: {
          img: require('./BlockImg/事后监管.png'),
          width: 493,
          height: 522
        },
        right2: {
          img: require('./BlockImg/工业品-标准.png'),
          width: 483,
          height: 374
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
          name: '电动自行车',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '电冰箱',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '洗衣机',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '电视机',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '电风扇',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '空调',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '奶粉',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '卤制品',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '食用冰',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '果茶',
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
        left: 28px;
        top: 250px;
        width: 380px;
        height: 190px;
    }

    .sub-title {
        background-image: linear-gradient(270deg, rgba(36, 59, 83, 0.00) 10%, rgba(43, 137, 254, 0.48) 98%);
        background-size: 162px 22px;
        background-repeat: no-repeat;
        background-position: left;
    }
}
</style>
