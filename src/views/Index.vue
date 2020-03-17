<template>
    <div class="Index full">
        <div class="side full-height w-1-3">
            <container :title="page.left.block1.title" class=" full-width h-1-4">
                <group-zhun-ru class="h-3-10" :data="page.left.block1.text.data"/>
                <div class="h-7-10">
                    <div class="w-1-4 full-height">
                        <ChartGauge :data="{name:'企业活力',value:45}"/>
                    </div>
                    <div class="w-3-4 full-height">
                        <ChartBarLine
                                :data="page.left.block1.chart1.data"
                                :title="page.left.block1.chart1.title"
                                :dimensions="page.left.block1.chart1.dimensions"
                                :colors="page.left.block1.chart1.color"
                                :type="page.left.block1.chart1.type"
                                :legend="page.left.block1.chart1.legend"
                                :units="page.left.block1.chart1.units"
                                :borderRadius="false"
                        />
                    </div>
                </div>
            </container>
            <container :title="page.left.block2.title" class=" full-width h-1-4">
                <div class="h-1-6">
                    <GroupJingZheng :data="page.left.block2.text"/>
                </div>
                <div class="h-5-6">
                    <div class="full-height w-1-2">
                        <ChartAreaLine :data="page.left.block2.chart1.data"
                                       :title="page.left.block2.chart1.title"
                                       :dimensions="page.left.block2.chart1.dimensions"
                                       :colors="page.left.block2.chart1.color"
                                       :type="page.left.block2.chart1.type"
                                       :legend="page.left.block2.chart1.legend"
                                       :unit="page.left.block2.chart1.units"/>
                    </div>
                    <div class="full-height w-1-2">
                        <ChartBarLine
                                :data="page.left.block2.chart2.data"
                                :title="page.left.block2.chart2.title"
                                :dimensions="page.left.block2.chart2.dimensions"
                                :colors="page.left.block2.chart2.color"
                                :type="page.left.block2.chart2.type"
                                :legend="page.left.block2.chart2.legend"
                                :units="page.left.block2.chart2.units"
                        />
                    </div>
                </div>
            </container>
            <container :title="page.left.block3.title" class=" full-width h-1-4">
                <div class="w-1-2 full-height">
                    字符云
                </div>
                <div class="w-1-2 full-height">
                    <GroupXiaoFei class="h-3-10" :data="page.left.block3.text"/>
                    <div class="h-7-10">
                        <ChartPieCircle :title="page.left.block3.chart1.title" :data="page.left.block3.chart1.data"/>
                    </div>
                </div>
            </container>
            <container :title="page.titles.left[3]" class=" full-width h-1-4">
                <div class="full-height w-3-10">
                    <BlockChanQuan/>
                </div>
                <div class="full-height w-7-10">
                    <ChartLineSimple class="w-3-4" :xdata="page.chart1.xdata" :ydata="page.chart1.ydata"/>
                </div>
            </container>
        </div>
        <div class="center full-height  w-1-3">
            <div class="title">{{page.title}}</div>
            <div class="map">
                <div class="map-can">
                    <EchartsMap v-if="false"/>
                    <Map3D/>
                </div>
                <TabSimpleMap class="map-tab" :data="mapTab" v-model="mapTabActive" @change="MapChange"/>
            </div>
            <container title="质量基础" class="center-bottom full-width h-1-4">
                <ChartBarSimple :data="page.chart2.data" :dimensions="page.chart2.dimensions"/>
            </container>
        </div>
        <div class="side full-height w-1-3">
            <container title="标题" class=" full-width h-1-4">
                内容
            </container>
            <container title="标题" class=" full-width h-1-4">
                内容
            </container>
            <container title="标题" class=" full-width h-1-4">
                内容
            </container>
            <container title="标题" class=" full-width h-1-4">
                内容
            </container>
        </div>
    </div>
</template>

<script>
// import TabSimplePoint from '../components/tab/TabSimplePoint'
import EchartsMap from './components/EchartsMap'
import TabSimpleMap from '../components/tab/TabSimpleMap'
import ChartLineSimple from './components/ChartLineSimple'
import ChartBarSimple from './components/ChartBarSimple'
import GroupZhunRu from './components/GroupZhunRu'
import ChartGauge from './components/ChartGauge'
import ChartBarLine from './components/ChartBarLine'
import Mock from 'mockjs'
import graphic from 'echarts/lib/util/graphic'
import Map3D from './components/Map3D'
import GroupJingZheng from './components/GroupJingZheng'
import ChartAreaLine from './components/ChartAreaLine'
import ChartPieCircle from './components/ChartPieCircle'
import GroupXiaoFei from './components/GroupXiaoFei'
import BlockChanQuan from './components/BlockChanQuan'

export default {
  name: 'Index',
  components: {
    BlockChanQuan,
    GroupXiaoFei,
    ChartPieCircle,
    ChartAreaLine,
    GroupJingZheng,
    Map3D,
    ChartBarLine,
    ChartGauge,
    GroupZhunRu,
    ChartBarSimple,
    ChartLineSimple,
    TabSimpleMap,
    EchartsMap
    // TabSimplePoint
  },
  data () {
    return {
      tabSelect0: 0,
      max: 3,
      mapTabActive: 0,
      mapTab: [{
        name: '首页',
        value: 0
      }, {
        name: '重点关注',
        value: 1
      }, {
        name: '会商机制',
        value: 2
      }, {
        name: '指挥调度',
        value: 3
      }],
      options: [],
      page: {
        titles: {
          left: ['准入环境', '竞争环境', '消费环境', '知识产权', '知识产权'],
          center: ['质量基础'],
          right: ['食品安全', '药品安全', '特种设备安全', '工业消费品', '重点监管']
        },
        left: {
          block1: {
            title: '准入环境',
            text: {
              data: [{
                name: '市场主体',
                value: [{
                  name: '总量',
                  value: '1.25',
                  unit: '亿户'
                }, {
                  name: '小微企业',
                  value: '203',
                  unit: '万户'
                }]
              }, {
                name: '平均办结',
                value: [{
                  value: '12',
                  unit: '月'
                }, {
                  value: '3',
                  unit: '月'
                }]
              }]
            },
            chart1: {
              title: '新设企业增长趋势分析',
              dimensions: ['name', 'value', 'value1'],
              legend: ['新设企业数量', '新设企业同比'],
              type: ['bar', 'line'],
              units: ['户数', '%'],
              color: [new graphic.LinearGradient(
                0,
                1,
                0,
                0,
                [
                  {
                    offset: 0,
                    color: 'rgba(247, 143, 53, 1)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(247, 216, 98, 1)'
                  }
                ],
                false
              ), 'rgba(50, 197, 255, 1)'],
              data: [{
                name: '2019.06',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(10, 40)
              }, {
                name: '2019.07',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(10, 40)
              }, {
                name: '2019.08',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(10, 40)
              }, {
                name: '2019.09',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(10, 40)
              }, {
                name: '2019.10',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(10, 40)
              }, {
                name: '2019.11',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(10, 40)
              }]
            }
          },
          block2: {
            title: '竞争环境',
            text: [{
              title: '不正当竞争案件',
              value: '13',
              unit: '万件',
              per: '15%',
              trend: 'up'
            }, {
              title: '反垄断案件',
              value: '306',
              unit: '件',
              per: '8%',
              trend: '-'
            }],
            chart1: {
              title: '价格监测趋势分析',
              dimensions: ['name', 'value', 'value1'],
              legend: ['商品零售价格指数', '居民消费价格指数'],
              color: [new graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: '#61E4FF'
                  },
                  {
                    offset: 1,
                    color: 'rgba(0, 0, 0, 0)'
                  }
                ],
                false
              ), new graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: '#4F7DF8'
                  },
                  {
                    offset: 1,
                    color: 'rgba(0, 0, 0, 0)'
                  }
                ],
                false
              )],
              data: [{
                name: '1月',
                value: Mock.Random.float(98, 103, 3, 3),
                value1: Mock.Random.float(98, 103, 3, 3)
              }, {
                name: '2月',
                value: Mock.Random.float(98, 103, 3, 3),
                value1: Mock.Random.float(98, 103, 3, 3)
              }, {
                name: '3月',
                value: Mock.Random.float(98, 103, 3, 3),
                value1: Mock.Random.float(98, 103, 3, 3)
              }, {
                name: '4月',
                value: Mock.Random.float(98, 103, 3, 3),
                value1: Mock.Random.float(98, 103, 3, 3)
              }, {
                name: '5月',
                value: Mock.Random.float(98, 103, 3, 3),
                value1: Mock.Random.float(98, 103, 3, 3)
              }, {
                name: '6月',
                value: Mock.Random.float(98, 103, 3, 3),
                value1: Mock.Random.float(98, 103, 3, 3)
              }]
            },
            chart2: {
              title: '重点区域检查',
              dimensions: ['name', 'value', 'value1'],
              legend: ['商品零售价格指数', '居民消费价格指数'],
              units: ['万次', '%'],
              type: ['bar', 'line'],
              color: [new graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: 'rgba(79, 255, 148, 0.68)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(79, 255, 245, 0.4)'
                  }
                ],
                false
              ), 'rgba(254, 105, 65, 1)'],
              data: [{
                name: '1月',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(10, 40)
              }, {
                name: '2月',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(10, 40)
              }, {
                name: '3月',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(10, 40)
              }, {
                name: '4月',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(10, 40)
              }, {
                name: '5月',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(10, 40)
              }, {
                name: '6月',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(10, 40)
              }]
            }
          },
          block3: {
            title: '消费环境',
            text: [
              {
                title: '投诉举报总量',
                value: '4501',
                unit: '万次',
                trend: '8.7%',
                status: 'down'
              },
              {
                title: '办结率',
                value: '100%'
              },
              {
                title: '诉转率',
                value: '100%'
              }
            ],
            chart1: {
              title: '投诉举报热点分析',
              data: [[{
                name: '烟、酒和饮料',
                value: Mock.Random.natural(60, 100),
                trend: Mock.Random.float(0.1, 0.5, 2, 2),
                status: 'up'
              }, {
                name: '食品',
                value: Mock.Random.natural(60, 100),
                trend: Mock.Random.float(0.1, 0.5, 2, 2),
                status: 'down'
              }, {
                name: '日用商品',
                value: Mock.Random.natural(60, 100),
                trend: Mock.Random.float(0.1, 0.5, 2, 2),
                status: '-'
              }, {
                name: '医疗及医疗用品',
                value: Mock.Random.natural(60, 100),
                trend: Mock.Random.float(0.1, 0.5, 2, 2),
                status: 'up'
              }], [{
                name: '烟、酒和饮料',
                value: Mock.Random.natural(60, 100),
                trend: Mock.Random.float(0.1, 0.5, 2, 2),
                status: 'up'
              }, {
                name: '食品',
                value: Mock.Random.natural(60, 100),
                trend: Mock.Random.float(0.1, 0.5, 2, 2),
                status: 'down'
              }, {
                name: '日用商品',
                value: Mock.Random.natural(60, 100),
                trend: Mock.Random.float(0.1, 0.5, 2, 2),
                status: '-'
              }, {
                name: '医疗及医疗用品',
                value: Mock.Random.natural(60, 100),
                trend: Mock.Random.float(0.1, 0.5, 2, 2),
                status: 'up'
              }]]
            }
          }
        },
        chart1: {
          xdata: [],
          ydata: []
        },
        chart2: {
          data: [{
            name: '测试1',
            value: 33
          }, {
            name: '测试2',
            value: 33
          }, {
            name: '测试3',
            value: 33
          }],
          dimensions: ['name', 'value']
        }
      }
    }
  },
  mounted () {
    // this.getConfig()
  },
  methods: {
    MapChange (i) { // 这个会立刻执行
      // console.log(i)
      this.showInPage()
    },
    getConfig () {
      this.$http.post('/screenNode/getTree', {}).then(value => {
        this.options = value
        this.showInPage(value)
      })
    },
    showInPage (value) {
      this.page.title = '标题'
      this.page.chart1.xdata = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      this.page.chart1.ydata = [820, 932, 901, 934, 1290, 1330, 1320]
    }
  }
}
</script>

<style scoped lang="less">
@SideWidth: 27%;
@MapHeight: 68%;
@TitleHeight: 5%;
@CenterBottomHeight: 27%;
.Index {
    padding: 15px 20px;
    color: #ffffff;

    > div {
        float: left;
    }

    .center {
        .title {
            height: @TitleHeight;
        }

        .map {
            height: @MapHeight;
            @MapTabHeight: 40px;

            .map-can {
                height: calc(-@MapTabHeight + ~"100%");
            }

            .map-tab {
                height: @MapTabHeight;
            }
        }

        .center-bottom {
            height: @CenterBottomHeight;
        }
    }
}
</style>
