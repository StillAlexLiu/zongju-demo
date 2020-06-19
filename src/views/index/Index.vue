<template>
    <div class="Index full">
        <div class="h-4-5 full-width">
            <div class="side full-height w-2-7">
                <container :title="page.left.block1.title" class=" full-width h-1-4">
                    <ZhunRuBlock :data="page.left.block1" @barClick="barClick"/>
                </container>
                <container :title="page.left.block2.title" class=" full-width h-1-4">
                    <div class="h-1-5">
                        <GroupJingZheng :data="page.left.block2.text"/>
                    </div>
                    <div class="h-4-5">
                        <div class="full-height w-1-2">
                            <ChartBarLine :data="page.left.block2.chart1.data"
                                          :title="page.left.block2.chart1.title"
                                          :dimensions="page.left.block2.chart1.dimensions"
                                          :colors="page.left.block2.chart1.color"
                                          :type="page.left.block2.chart1.type"
                                          :legend="page.left.block2.chart1.legend"
                                          :isArea="true"
                                          :units="page.left.block2.chart1.units"/>
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
                    <div style="height: 32px">
                        <GroupXiaoFeiNew :data="page.left.block3.text" @itemClick="itemClick"/>
                    </div>
                    <div style="height: calc(100% - 32px)">
                        <div class="w-1-2 full-height">
                            <ChartWord/>
                        </div>
                        <div class="w-1-2 full-height">
                            <ChartGroupHuanJing :title="page.left.block3.chart1.title"
                                                :color="page.left.block3.chart1.color"
                                                :data="page.left.block3.chart1.data"
                                                v-if="xiaoFeiSelected"/>
                            <ChartGroupHuanJingTab2 v-if="!xiaoFeiSelected"/>
                        </div>
                    </div>
                </container>
                <container :title="page.left.block4.title" class=" full-width h-1-4">
                    <div class="full-height w-3-10">
                        <BlockChanQuan :data="page.left.block4.text1"/>
                    </div>
                    <div class="full-height w-7-10">
                        <GroupChanQuanNew :data="page.left.block4.text2"/>
                    </div>
                </container>
            </div>
            <div class="center full-height  w-3-7" style="padding-top: 40px;position: relative">
                <div style="top:80px;height:calc(100% - 80px);" class="full-width"
                     v-if="!sankShow&&!hotMapShow&&!zhiLiangShow">
                    <keep-alive>
                        <EchartsMapNew v-if="map1Show" :config="page.center.map"/>

                    </keep-alive>
                    <NumberRoll :number="1.254" v-if="map1Show&&page.name==='china'" title="市场主体"
                                style="top:100px"
                                unit="亿户"
                                class="number"/>
                    <div class="full" v-if="map2Show">
                        <div style="height: calc(100% - 132px);">
                            <keep-alive>
                                <EchartsMapRisk :config="page.center.map"/>
                            </keep-alive>
                            <MapText class="map-text" v-if="map2Show"
                                     style="top:40px;left:20px"/>
                        </div>
                        <div style="height:132px">
                            <MapRiskBlock/>
                        </div>
                    </div>
                    <TabSimpleMap class="map-tab" :data="mapTab" v-model="mapTabActive"
                                  style="width: 100%;top:0;position: absolute"
                                  @change="MapChange"/>
                </div>

                <container v-if="sankShow" class="foodCharts full-width" style="top:40px;height:calc(100% - 40px);">
                    <div style="height: 100px">
                        <sankey-group/>
                    </div>
                    <div style="height: calc(100% - 100px)">
                        <ChartsSanKey/>
                    </div>
                </container>
                <div v-if="hotMapShow" class="foodCharts full-width" style="top:40px;height:calc(100% - 40px);">
                    <HotMapBlock class="full" :data="selectedMonth" @close="closeHotMap"/>
                </div>
                <div v-if="zhiLiangShow" class="full-width" style="top:40px;height:calc(100% - 40px);">
                    <dia-group class="full" :index="zhiLiangIndex" @close="zhiLiangClose"/>
                </div>
            </div>
            <div class="side full-height w-2-7">
                <container :title="page.right.block1.title" class=" full-width h-1-4">
                    <GroupShiPinNew class="h-1-3" :data="page.right.block1.text"/>
                    <div class="h-2-3 " style="padding:0">
                        <BlockShiPin class="full-height w-1-5" :data="page.right.block1.text2"
                                     @click.native="sankShowClick"
                        ></BlockShiPin>
                        <TabPageShipin class="w-4-5 full-height" :data="page.right.block1.chart1" :showPage="sankShow"/>
                    </div>
                </container>
                <container :title="page.right.block2.title" class=" full-width h-1-4">
                    <div style="height:30px">
                        <GroupYaoPin class=" full-width" :data="page.right.block2.text"/>
                    </div>
                    <div style="height: calc(100% - 30px)">
                        <ChartGroup class="full full-width" :data="page.right.block2.charts"
                                    :tab="page.right.block2.tab"/>
                    </div>
                </container>
                <container :title="page.right.block3.title" class=" full-width h-1-4">
                    <div style="height: 30px;">
                        <BlockTeZhongSheBeiGroup :data="page.right.block3.charts" @change="TabChange"/>
                    </div>
                    <div style="height: calc(100% - 30px)">
                        <div class="w-6-12 full-height">
                            <BlockTeZhongSheBeiNew :data="page.right.block3.charts" :dataIndex="tabSelect3"/>
                        </div>
                        <div class="w-6-12 full-height">
                            <ChartPieCircle :data="page.right.block3.chart2.data"
                                            :color="page.right.block3.chart2.color"
                                            :title="page.right.block3.chart2.title"/>
                        </div>
                    </div>
                </container>
                <container :title="page.right.block4.title" class=" full-width h-1-4">
                    <div style="height: 40px">
                        <GroupGongYeNew :data="page.right.block4.text"/>
                    </div>
                    <div style="height: calc(100% - 40px)">
                        <div class="full-height w-1-2">
                            <ChartAcross :title="page.right.block4.chart1.title" :data="page.right.block4.chart1"/>
                        </div>
                        <div class="full-height w-1-2">
                            <ChartAreaLine :data="page.right.block4.chart2.data"
                                           :title="page.right.block4.chart2.title"
                                           :dimensions="page.right.block4.chart2.dimensions"
                                           :colors="page.right.block4.chart2.color"
                                           :type="page.right.block4.chart2.type"
                                           :legend="page.right.block4.chart2.legend"
                                           :line-with-circle="false"
                                           :unit="page.right.block4.chart2.units"/>

                        </div>
                    </div>
                </container>
            </div>
        </div>
        <div class="h-1-5 full-width">
            <container title="质量提升" class="full-height w-2-7">
                <GroupZhiLiangNew :data="page.center.block1.data" @itemClick="zhiLiangClick"/>
            </container>
            <!--            <container title="风险管控"-->
            <!--                       class=" w-1-4 full-height">-->
            <!--                <img-block class="full" :data="data.bottom.chart2"/>-->
            <!--            </container>-->
            <container title="重点监管" class="full-height w-3-7">
                <ZhongDianJianGuanNew :data="page.center.block3"/>
            </container>
            <container title="综合执法" class="full-height w-2-7">
                <ZongHeZhiFa :data="page.center.block2"/>
            </container>
        </div>
        <transition name="bounce" mode="out-in">
            <Consultation class="dia" v-if="dia1" @close="close"/>
            <Commander class="dia" v-if="dia2" @close="close"/>
            <HuoLiDia class="dia" v-if="dia3" @close="close"/>
            <Battle class="dia" v-if="dia4" @close="close"/>
        </transition>
    </div>
</template>

<script>
import graphic from 'echarts/lib/util/graphic'
import Mock from 'mockjs'
import TabSimpleMap from '../../components/tab/TabSimpleMap'
import BlockChanQuan from './components/BlockChanQuan'
import BlockShiPin from './components/BlockShiPin'
import BlockTeZhongSheBeiGroup from './components/BlockTeZhongSheBeiGroup'
import BlockTeZhongSheBeiNew from './components/BlockTeZhongSheBeiNew'
import ChartAcross from './components/ChartAcross'
import ChartAreaLine from './components/ChartAreaLine'
import ChartBarLine from './components/ChartBarLine'
import ChartGroup from './components/ChartGroup'
import ChartGroupHuanJing from './components/ChartGroupHuanJing'
import ChartGroupHuanJingTab2 from './components/ChartGroupHuanJingTab2'
import ChartPieCircle from './components/ChartPieCircle'
import ChartsSanKey from './components/ChartsSanKey'
import ChartWord from './components/ChartWordCloud'
import EchartsMapNew from './components/EchartsMapNew'
import EchartsMapRisk from './components/EchartsMapRisk'
import GroupChanQuanNew from './components/GroupChanQuanNew'
import GroupGongYeNew from './components/GroupGongYeNew'
import GroupJingZheng from './components/GroupJingZheng'
import GroupShiPinNew from './components/GroupShiPinNew'
import GroupXiaoFeiNew from './components/GroupXiaoFeiNew'
import GroupYaoPin from './components/GroupYaoPin'
import GroupZhiLiangNew from './components/GroupZhiLiangNew'
import HotMapBlock from './components/HotMapBlock'
import MapRiskBlock from './components/MapRiskBlock'
import MapText from './components/mapText'
import NumberRoll from './components/Number/numberRoll'
import SankeyGroup from './components/SankeyGroup'
import TabPageShipin from './components/TabPageShipin'
import ZhongDianJianGuanNew from './components/ZhongDianJianGuanNew'
import ZhunRuBlock from './components/ZhunRuBlock'
import ZongHeZhiFa from './components/ZongHeZhiFa'
import Battle from './DialogImg/Battle'
import Commander from './DialogImg/Command'
import Consultation from './DialogImg/Consultation'
import DiaGroup from './DialogImg/diaGroup/diaGroup'
import HuoLiDia from './DialogImg/HuoLiDia'

export default {
  name: 'Index',
  components: {
    DiaGroup,
    MapRiskBlock,
    EchartsMapRisk,
    ChartGroupHuanJingTab2,
    HotMapBlock,
    ZhunRuBlock,
    SankeyGroup,
    TabPageShipin,
    ChartsSanKey,
    EchartsMapNew,
    ZhongDianJianGuanNew,
    GroupGongYeNew,
    BlockTeZhongSheBeiGroup,
    BlockTeZhongSheBeiNew,
    ChartPieCircle,
    GroupShiPinNew,
    GroupZhiLiangNew,
    GroupChanQuanNew,
    GroupXiaoFeiNew,
    Battle,
    ZongHeZhiFa,
    HuoLiDia,
    MapText,
    NumberRoll,
    Commander,
    Consultation,
    ChartGroup,
    GroupYaoPin,
    BlockShiPin,
    BlockChanQuan,
    ChartGroupHuanJing,
    ChartAreaLine,
    GroupJingZheng,
    ChartBarLine,
    TabSimpleMap,
    ChartWord,
    ChartAcross
    // TabSimplePoint
  },
  data () {
    return {
      zhiLiangIndex: 0,
      zhiLiangShow: false,
      xiaoFeiSelected: true,
      tabSelect0: 0,
      tabSelect3: 0,
      selectedMonth: '',
      hotMapShow: false,
      max: 3,
      mapTabActive: 0,
      centerIndex: 0,
      dia1: false,
      dia2: false,
      dia3: false,
      dia4: false,
      map1Show: true,
      map2Show: false,
      sankShow: false,
      mapTab: [{
        name: '主体',
        value: 0
      }, {
        name: '风险',
        value: 1
      }, {
        name: '会商',
        value: 2
      }, {
        name: '指挥',
        value: 3
      }, {
        name: '挂图作战',
        value: 4
      }],
      options: [],
      data: {
        bottom: {
          chart2: {
            img: require('./BlockImg/编组 10@2x.png'),
            width: 844 / 2,
            height: 324 / 2
          }
        }
      },
      page: {
        name: 'china',
        left: {
          block1: {
            title: '准入环境',
            text: {
              data: [{
                name: '市场主体',
                value: [{
                  name: '市场主体总量',
                  value: '1.25',
                  unit: '亿户',
                  percent: '12%',
                  status: 'up'
                }, {
                  name: '小微企业总量',
                  value: '203',
                  unit: '亿户',
                  percent: '15%',
                  status: 'up'
                }]
              }, {
                name: '平均办结',
                value: [{
                  value: '12',
                  unit: '天'
                }, {
                  value: '3',
                  unit: '天'
                }]
              }]
            },
            chart: {
              name: '企业活力',
              value: '98'
            },
            chart1: {
              title: '企业活力变化趋势',
              dimensions: ['name', 'value'],
              legend: ['企业活力'],
              type: ['line'],
              units: ['%'],
              color: [new graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: '#5DC3FF'
                  },
                  {
                    offset: 1,
                    color: 'rgba(134,188,233,.17)'
                  }
                ],
                false
              )],
              data: [{
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
              }, {
                name: '7月',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(10, 40)
              }, {
                name: '8月',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(10, 40)
              }, {
                name: '9月',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(10, 40)
              }, {
                name: '10月',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(10, 40)
              }, {
                name: '11月',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(10, 40)
              }, {
                name: '12月',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(10, 40)
              }, {
                name: '1月',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(10, 40)
              }, {
                name: '2月',
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
              trend: 'down'
            }, {
              title: '反垄断案件',
              value: '306',
              unit: '件',
              per: '8%',
              trend: '-'
            }],
            chart1: {
              title: '价格指数变化趋势',
              dimensions: ['name', 'value', 'value1'],
              type: ['line', 'line'],
              legend: ['价格指数', '同比'],
              color: [new graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: '#50E3C2'
                  },
                  {
                    offset: 1,
                    color: 'rgba(0,0,0,0)'
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
                    color: '#5DC3FF'
                  },
                  {
                    offset: 1,
                    color: 'rgba(0, 0, 0, 0)'
                  }
                ],
                false
              )],
              data: [{
                name: '9月',
                value: 107.31,
                value1: Mock.Random.float(8, 15, 3, 3)
              }, {
                name: '10月',
                value: 100.48,
                value1: Mock.Random.float(8, 15, 3, 3)
              }, {
                name: '11月',
                value: 104.92,
                value1: Mock.Random.float(8, 15, 3, 3)
              }, {
                name: '12月',
                value: 102.3,
                value1: Mock.Random.float(8, 15, 3, 3)
              }, {
                name: '1月',
                value: 121.48,
                value1: Mock.Random.float(8, 15, 3, 3)
              }, {
                name: '2月',
                value: 104.02,
                value1: Mock.Random.float(8, 15, 3, 3)
              }]
            },
            chart2: {
              title: '重点区域检查',
              dimensions: ['name', 'value', 'value1'],
              legend: ['检查次数', '变化率'],
              units: ['万次', '%'],
              type: ['bar', 'line'],
              color: ['#4A90E2', '#50E3C2'],
              data: [{
                name: '水电',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(10, 40)
              }, {
                name: '中介收费',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(10, 40)
              }, {
                name: '租金',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(10, 40)
              }, {
                name: '气价',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(10, 40)
              }, {
                name: '医疗物资',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(10, 40)
              }]
            }
          },
          block3: {
            title: '消费环境',
            text: [
              {
                title: '投诉',
                value: '1743',
                unit: '万次'
              },
              {
                title: '办结',
                value: '100%'
              },
              {
                title: '诉转',
                value: '15%'
              }
            ],
            chart1: {
              title: '投诉举报热点分析',
              color: ['#3651AF', '#4A90E2', '#94CCFF', '#67ADFF', '#4A90E2'],
              data: [[{
                name: '家居用品',
                value: 221
              }, {
                name: '一般食品',
                value: 199
              }, {
                name: '交通工具',
                value: 126
              }, {
                name: '服装鞋帽',
                value: 92
              }, {
                name: '装修建材',
                value: 69
              }], [{
                name: '餐饮和住宿服务',
                value: 137
              }, {
                name: '教育培训服务（',
                value: 77
              }, {
                name: '制作保养和修理服务',
                value: 64
              }, {
                name: '文化娱乐体育服务',
                value: 35
              }, {
                name: '销售服务',
                value: 34
              }]]
            }
          },
          block4: {
            title: '知识产权',
            text1: [{
              name: '发展指数',
              value: '62.6'
            }, {
              name: '国际排行',
              text: '上升至',
              from: '13',
              to: '8'
            }],
            text2: [{
              name: '商品注册',
              value: '198',
              unit: '万件',
              percent: '25%',
              status: 'up',
              text: '时限',
              subText: '缩短',
              change: '1',
              changeUnit: '个月'
            }, {
              name: '地理标志',
              value: '2320',
              unit: '个',
              percent: '16%',
              status: 'up',
              text: '新增',
              subText: '',
              change: '528',
              changeUnit: '个'
            }, {
              name: '专利颁发',
              value: '283',
              unit: '万件',
              percent: '10%',
              status: 'up',
              text: '时限',
              subText: '缩短',
              change: '3',
              changeUnit: '个月'
            }]
          }
        },
        right: {
          block1: {
            title: '食品安全',
            text: [{
              name: '生产企业',
              value: '1626',
              unit: '万户',
              text: '',
              trend: '10%',
              status: 'up'
            }, {
              name: '特殊食品',
              value: '89',
              unit: '万户',
              text: '',
              trend: '8%',
              status: 'up'
            }, {
              name: '生产证书',
              value: '16.5',
              unit: '万张',
              text: '',
              trend: '12%',
              status: 'up'
            }, {
              name: '经营证书',
              value: '1233',
              unit: '万张',
              text: '',
              trend: '8%',
              status: 'down'
            }],
            text2: {
              name: '食品风险指数',
              value: 98
            },
            chart1: {
              title: '社会热点',
              data: [{
                name: '婴幼儿配方乳粉',
                value: '100'
              }, {
                name: '校园食品',
                value: '98'
              }, {
                name: '保健食品',
                value: '95'
              }]
            }
          },
          block2: {
            title: '药品安全',
            text: [{
              name: '药品生产企业',
              value: '4863',
              unit: '户'
            }, {
              name: '药品流通企业',
              value: '50.8',
              unit: '万户'
            }, {
              name: '医疗器械生产企业',
              value: '2.1',
              unit: '万户'
            }, {
              name: '医疗器械流通企业',
              value: '52.3',
              unit: '万户'
            }],
            tab: [{
              name: '抽检不合格',
              value: 0
            }, {
              name: '投诉举报',
              value: 1
            }, {
              name: '不良反应',
              value: 2
            }],
            charts: [{
              chart1: {
                title: '抽检不合格变化趋势',
                dimensions: ['name', 'value', 'value1'],
                legend: ['抽检批次', '同比'],
                type: ['bar', 'line'],
                units: ['次', '%'],
                color: ['#4A90E2', '#FFBB70'],
                data: [{
                  name: '9月',
                  value: Mock.Random.natural(200, 900),
                  value1: Mock.Random.natural(10, 70)
                }, {
                  name: '10月',
                  value: Mock.Random.natural(200, 900),
                  value1: Mock.Random.natural(10, 70)
                }, {
                  name: '11月',
                  value: Mock.Random.natural(200, 900),
                  value1: Mock.Random.natural(10, 70)
                }, {
                  name: '12月',
                  value: Mock.Random.natural(200, 900),
                  value1: Mock.Random.natural(10, 70)
                }, {
                  name: '1月',
                  value: Mock.Random.natural(200, 900),
                  value1: Mock.Random.natural(10, 70)
                }, {
                  name: '2月',
                  value: Mock.Random.natural(200, 900),
                  value1: Mock.Random.natural(10, 70)
                }]
              },
              chart2: {
                title: '抽检不合格占比',
                data: [{
                  name: '中药注射',
                  value: Mock.Random.natural(60, 100)
                }, {
                  name: '疫苗',
                  value: Mock.Random.natural(60, 100)
                }, {
                  name: '免疫调节',
                  value: Mock.Random.natural(60, 100)
                }, {
                  name: '抗菌药物',
                  value: Mock.Random.natural(60, 100)
                }]
              }
            }, {
              chart1: {
                title: '投诉举报变化趋势',
                dimensions: ['name', 'value', 'value1'],
                legend: ['次数', '同比'],
                type: ['bar', 'line'],
                units: ['次', '%'],
                color: ['rgba(135, 160, 246, 1)', '#FFBB70'],
                data: [{
                  name: '9月',
                  value: Mock.Random.natural(200, 900),
                  value1: Mock.Random.natural(10, 70)
                }, {
                  name: '10月',
                  value: Mock.Random.natural(200, 900),
                  value1: Mock.Random.natural(10, 70)
                }, {
                  name: '11月',
                  value: Mock.Random.natural(200, 900),
                  value1: Mock.Random.natural(10, 70)
                }, {
                  name: '12月',
                  value: Mock.Random.natural(200, 900),
                  value1: Mock.Random.natural(10, 70)
                }, {
                  name: '1月',
                  value: Mock.Random.natural(200, 900),
                  value1: Mock.Random.natural(10, 70)
                }, {
                  name: '2月',
                  value: Mock.Random.natural(200, 900),
                  value1: Mock.Random.natural(10, 70)
                }]
              },
              chart2: {
                title: '投诉举报占比',
                data: [{
                  name: '商品质量',
                  value: Mock.Random.natural(60, 100)
                }, {
                  name: '网络购物',
                  value: Mock.Random.natural(60, 100)
                }, {
                  name: '虚假广告',
                  value: Mock.Random.natural(60, 100)
                }, {
                  name: '其他',
                  value: Mock.Random.natural(60, 100)
                }]
              }
            }, {
              chart1: {
                title: '不良反应变化趋势',
                dimensions: ['name', 'value', 'value1'],
                legend: ['个', '同比'],
                type: ['bar', 'line'],
                units: ['户数', '%'],
                color: ['rgba(135, 160, 246, 1)', '#FFBB70'],
                data: [{
                  name: '9月',
                  value: Mock.Random.natural(200, 900),
                  value1: Mock.Random.natural(10, 70)
                }, {
                  name: '10月',
                  value: Mock.Random.natural(200, 900),
                  value1: Mock.Random.natural(10, 70)
                }, {
                  name: '11月',
                  value: Mock.Random.natural(200, 900),
                  value1: Mock.Random.natural(10, 70)
                }, {
                  name: '12月',
                  value: Mock.Random.natural(200, 900),
                  value1: Mock.Random.natural(10, 70)
                }, {
                  name: '1月',
                  value: Mock.Random.natural(200, 900),
                  value1: Mock.Random.natural(10, 70)
                }, {
                  name: '2月',
                  value: Mock.Random.natural(200, 900),
                  value1: Mock.Random.natural(10, 70)
                }]
              },
              chart2: {
                title: '不良反应占比',
                data: [{
                  name: '中成药',
                  value: Mock.Random.natural(60, 100)
                }, {
                  name: '抗菌药物',
                  value: Mock.Random.natural(60, 100)
                }, {
                  name: '抗肿瘤药物',
                  value: Mock.Random.natural(60, 100)
                }, {
                  name: '其他',
                  value: Mock.Random.natural(60, 100)
                }]
              }
            }]
          },
          block3: {
            title: '特种设备安全',
            charts: [{
              name: '特种设备',
              value: '1296',
              unit: '万台',
              sub: '特种设备数量分布',
              img: require('./components/img/tabImg/1@2x.png')
            }, {
              name: '从业人员',
              value: '1145',
              unit: '万人 ',
              sub: '特种设备从业人员分布',
              img: require('./components/img/tabImg/2@2x.png')
            }, {
              name: '生产单位',
              value: '7.3',
              unit: '万家',
              sub: '特种设备生产单位分布',
              img: require('./components/img/tabImg/3@2x.png')
            }],
            chart2: {
              title: '事故行业环节分析',
              color: ['#3651AF', '#4A90E2', '#94CCFF', '#67ADFF', '#4A90E2'],
              data: [{
                name: '制造业',
                value: Mock.Random.natural(10, 100)
              }, {
                name: '建筑业',
                value: Mock.Random.natural(10, 100)
              }, {
                name: '安装',
                value: Mock.Random.natural(10, 100)
              }, {
                name: '石化工业',
                value: Mock.Random.natural(10, 100)
              }, {
                name: '改造',
                value: Mock.Random.natural(10, 100)
              }]
            }
          },
          block4: {
            title: '工业消费品',
            text: [{
              name: '抽检',
              value: '23.6',
              unit: '万批次',
              name2: '合格率',
              value2: '96.4%',
              status: ''
            }, {
              name: '缺陷召回',
              value: '1900',
              unit: '批次',
              name2: '同比',
              value2: '12%',
              status: 'down'
            }],
            chart1: {
              title: '消费品风险预警',
              legend: ['低', '中', '高'],
              ydata: [
                '罐头',
                '酒精',
                '电池',
                '奶粉',
                '汽车'
              ],
              data1: [Mock.Random.natural(50, 100), Mock.Random.natural(50, 100), Mock.Random.natural(50, 100), Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
              data2: [Mock.Random.natural(50, 100), Mock.Random.natural(50, 100), Mock.Random.natural(50, 100), Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
              data3: [Mock.Random.natural(50, 100), Mock.Random.natural(50, 100), Mock.Random.natural(50, 100), Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
              color: ['#435287', '#4A90E2', '#FE9E55']
            },
            chart2: {
              title: '缺陷产品召回',
              dimensions: ['name', 'value', 'value1'],
              legend: ['汽车', '各类消费品等'],
              color: [new graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: '#50E3C2'
                  },
                  {
                    offset: 1,
                    color: 'rgba(0,0,0,0)'
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
                    color: '#5DC3FF'
                  },
                  {
                    offset: 1,
                    color: 'rgba(0,0,0,0)'
                  }
                ],
                false
              )],
              data: [{
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
              }, {
                name: '7月',
                value: Mock.Random.float(98, 103, 3, 3),
                value1: Mock.Random.float(98, 103, 3, 3)
              }, {
                name: '8月',
                value: Mock.Random.float(98, 103, 3, 3),
                value1: Mock.Random.float(98, 103, 3, 3)
              }, {
                name: '9月',
                value: Mock.Random.float(98, 103, 3, 3),
                value1: Mock.Random.float(98, 103, 3, 3)
              }, {
                name: '10月',
                value: Mock.Random.float(98, 103, 3, 3),
                value1: Mock.Random.float(98, 103, 3, 3)
              }, {
                name: '11月',
                value: Mock.Random.float(98, 103, 3, 3),
                value1: Mock.Random.float(98, 103, 3, 3)
              }, {
                name: '12月',
                value: Mock.Random.float(98, 103, 3, 3),
                value1: Mock.Random.float(98, 103, 3, 3)
              }, {
                name: '1月',
                value: Mock.Random.float(98, 103, 3, 3),
                value1: Mock.Random.float(98, 103, 3, 3)
              }, {
                name: '2月',
                value: Mock.Random.float(98, 103, 3, 3),
                value1: Mock.Random.float(98, 103, 3, 3)
              }]
            }
          }
        },
        center: {
          title: {},
          map: {
            name: 'china',
            aspectScale: 0.8,
            center: [104.075206, 30.659799],
            center2: [114.274791, 30.594985],
            pointPosition: [84, 23.5],
            mapSelectName: '四川',
            style: 0,
            r: 8,
            pointData: [{
              name: '武汉',
              coords: [114.274791, 30.594985],
              value: '64'
            }, {
              name: '北京',
              coords: [116.416837, 39.916237],
              value: '32'
            }, {
              name: '济南',
              coords: [117.123524, 36.658407],
              value: '18'
            }, {
              name: '上海',
              coords: [121.473641, 31.236917],
              value: '3'
            }, {
              name: '南昌',
              coords: [115.859411, 28.701622],
              value: '26'
            }, {
              name: '广州',
              coords: [113.256481, 23.144907],
              value: '11'
            }, {
              name: '昆明',
              coords: [102.823345, 24.883125],
              value: '5'
            }]
          },
          block1: {
            title: '质量提升',
            data: [
              {
                title: '标准',
                value: [{
                  name: '国家标准',
                  value: '2435',
                  unit: '项',
                  status: ''
                }, {
                  name: '同比',
                  value: '5.5%',
                  unit: '',
                  status: 'up'
                }]
              }, {
                title: '认证\n认可',
                value: [{
                  name: '证书总数',
                  value: '123',
                  unit: '万份',
                  status: ''
                }, {
                  name: '同比',
                  value: '9.7%',
                  unit: '',
                  status: 'up'
                }]
              }, {
                title: '计量',
                value: [{
                  name: '强检器具',
                  value: '2.1',
                  unit: '万个',
                  status: ''
                }, {
                  name: '检定率',
                  value: '95%',
                  unit: '',
                  status: ''
                }]
              }, {
                title: '检验\n检测',
                value: [{
                  name: '检测报告',
                  value: '3.5',
                  unit: '亿份',
                  status: ''
                }, {
                  name: '机构',
                  value: '3.9',
                  unit: '万户',
                  status: ''
                }]
              }]
          },
          block2: {
            title: '综合执法',
            text: [{
              name: '执法机构',
              value: '2102',
              unit: '个'
            }, {
              name: '执法人员',
              value: '62.7',
              unit: '万人'
            }, {
              name: '立案查处',
              value: '3.76',
              unit: '万件'
            }],
            tab: [{
              name: '撤、吊销证书',
              value: 0
            }, {
              name: '立案查处',
              value: 1
            }, {
              name: '刑事措施',
              value: 2
            }, {
              name: '涉案金额',
              value: 3
            }],
            charts: [
              {
                title: '撤、吊销证书变化趋势',
                dimensions: ['name', 'value', 'value1', 'value2', 'value3'],
                legend: ['打击假冒伪劣', '价格违法', '网络交易', '广告违法'],
                type: ['line', 'line', 'line', 'line'],
                units: ['万件'],
                color: ['#91D243', '#FE6941', '#4A90E2', '#FFD589'],
                data: [{
                  name: '3月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '4月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '5月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '6月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '7月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '8月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '9月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '10月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '11月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '12月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '1月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '2月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }]
              }, {
                title: '撤、吊销证书变化趋势',
                dimensions: ['name', 'value', 'value1', 'value2', 'value3'],
                legend: ['打击假冒伪劣', '价格违法', '网络交易', '广告违法'],
                type: ['line', 'line', 'line', 'line'],
                units: ['万件'],
                color: ['#91D243', '#FE6941', '#4A90E2', '#FFD589'],
                data: [{
                  name: '3月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '4月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '5月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '6月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '7月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '8月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '9月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '10月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '11月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '12月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '1月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '2月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }]
              }, {
                title: '撤、吊销证书变化趋势',
                dimensions: ['name', 'value', 'value1', 'value2', 'value3'],
                legend: ['打击假冒伪劣', '价格违法', '网络交易', '广告违法'],
                type: ['line', 'line', 'line', 'line'],
                units: ['万件'],
                color: ['#91D243', '#FE6941', '#4A90E2', '#FFD589'],
                data: [{
                  name: '3月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '4月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '5月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '6月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '7月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '8月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '9月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '10月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '11月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '12月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '1月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '2月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }]
              }, {
                title: '撤、吊销证书变化趋势',
                dimensions: ['name', 'value', 'value1', 'value2', 'value3'],
                legend: ['打击假冒伪劣', '价格违法', '网络交易', '广告违法'],
                type: ['line', 'line', 'line', 'line'],
                units: ['万件'],
                color: ['#91D243', '#FE6941', '#4A90E2', '#FFD589'],
                data: [{
                  name: '3月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '4月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '5月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '6月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '7月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '8月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '9月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '10月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '11月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '12月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '1月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }, {
                  name: '2月',
                  value: Mock.Random.natural(60, 100),
                  value1: Mock.Random.natural(10, 40),
                  value2: Mock.Random.natural(10, 40),
                  value3: Mock.Random.natural(10, 40)
                }]
              }]
          },
          block3: {
            title: '重点监管',
            text: [{
              name: '异常名录',
              value: '686',
              unit: '万户'
            }, {
              name: '严重违法失信',
              value: '81.2',
              unit: '万户'
            }, {
              name: '联合惩戒',
              value: '26.1',
              unit: '万户'
            }],
            chart1: {
              title: '广告监管',
              dimensions: ['name', 'value', 'value1', 'value2'],
              legend: ['广告监测', '违法线索', '立案处罚'],
              type: ['bar', 'bar', 'bar'],
              units: ['万个'],
              color: ['#FFD589', '#4A90E2', '#3DAA7F'],
              data: [{
                name: '互联网',
                value: Mock.Random.natural(300, 500),
                value1: Mock.Random.natural(100, 300),
                value2: Mock.Random.natural(10, 100)
              }, {
                name: '传统媒体',
                value: Mock.Random.natural(300, 500),
                value1: Mock.Random.natural(100, 300),
                value2: Mock.Random.natural(10, 100)
              }, {
                name: '户外广告',
                value: Mock.Random.natural(300, 500),
                value1: Mock.Random.natural(100, 300),
                value2: Mock.Random.natural(10, 100)
              }, {
                name: '移动广告',
                value: Mock.Random.natural(300, 500),
                value1: Mock.Random.natural(100, 300),
                value2: Mock.Random.natural(10, 100)
              }]
            },
            chart2: [
              {
                name: '立案查处数',
                value: '172万件'
              },
              {
                name: '违法线索',
                value: '23万个'
              },
              {
                name: '网络交易主体',
                value: '2677万户次'
              }
            ]
          }
        }
      }
    }
  },
  // props: {
  //   page: {
  //     type: Object,
  //     default: () => {
  //       return {}
  //     }
  //   }
  // },
  watch: {
    $route: {
      deep: true,
      immediate: true,
      handler: function () {
        const action = this.$route.query.action
        console.log(this.$route.query)
        console.log(action)
        // eslint-disable-next-line no-eval
        eval(action)
      }
    }
  },
  mounted () {
    // this.
    // $route.params.key
    // this.getConfig()
  },
  methods: {
    zhiLiangClick (index) {
      this.zhiLiangIndex = index
      this.zhiLiangShow = true
    },
    zhiLiangClose () {
      this.zhiLiangShow = false
    },
    TabChange (i) {
      this.tabSelect3 = i
    },
    itemClick () {
      this.xiaoFeiSelected = !this.xiaoFeiSelected
    },
    MapChange (i) { // 这个会立刻执行
      if (i === 0) {
        this.map1Show = true
        this.map2Show = false
      }
      if (i === 1) {
        this.map1Show = false
        this.map2Show = true
      }
      if (i === 2) {
        this.dia1 = true
      }
      if (i === 3) {
        this.dia2 = true
      }
      if (i === 4) {
        this.dia4 = true
      }
    },
    // getConfig () {
    //   this.$http.post('/screenNode/getTree', {}).then(value => {
    //     this.options = value
    //     this.showInPage(value)
    //   })
    // },
    centerIndexChange (i) {
      console.log(i)
      this.centerIndex = i
    },
    close () {
      this.dia1 = false
      this.dia2 = false
      this.dia3 = false
      this.dia4 = false
    },
    openDia () {
      console.log(1)
      this.dia3 = true
    },
    sankShowClick () {
      this.sankShow = !this.sankShow
      if (this.sankShow) {
        this.hotMapShow = false
      }
    },
    barClick ([item]) {
      this.hotMapShow = true
      this.sankShow = false
      let name = ''
      if (item.componentType === 'xAxis') {
        name = item.value
      } else if (item.componentType === 'series') {
        name = item.name
      }
      this.selectedMonth = name
    },
    closeHotMap () {
      this.hotMapShow = false
    }
  }
}
</script>

<style scoped lang="less">
.Index {
    padding: 15px 20px;
    color: #ffffff;

    > div {
        float: left;
    }

    .center {
        > div {
            position: absolute;
        }

        .map-tab {
            height: 28px;
        }

        .main-title {
            height: calc(100% - 28px);
        }
    }

    .dia {
        position: absolute;
        background: rgba(0, 0, 0, 0.85);
        /*background: rgba(0, 0, 0, 0.5);*/
        width: 100%;
        height: 100%;
        padding: 60px 67px 98px 67px;
        top: 0;
        left: 0;
        z-index: 199;
        /*width: 1786px;*/
        /*height: 922px;*/
        /*top: 60px;*/
        /*left: 67px;*/

    }

    .number {
        position: absolute;
        top: 26px;
        left: 260px;
    }

    .map-text {
        position: absolute;
        top: 26px;
        left: 80px;
    }

    .bounce-enter-active {
        animation: bounce-in 0.8s;
    }

    .bounce-leave-active {
        /*animation: bounce-out 0.5s;*/
        animation: bounce-in 0.8s reverse;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        /*50% {*/
        /*    transform: scale();*/
        /*}*/
        100% {
            transform: scale(1);
        }
    }

    .bounce-tab-enter-active {
        animation: bounce-tab-in .5s;
        animation-timing-function: linear;
    }

    .bounce-tab-leave-active {
        /*animation: bounce-out 0.5s;*/
        animation: bounce-tab-out .5s;
        animation-timing-function: linear;
    }

    @keyframes bounce-tab-in {
        0% {
            /*transform: scale(0);*/

            transform: rotateY(270deg) rotateZ(5deg) rotateX(5deg);
        }
        /*50% {*/
        /*    transform: scale();*/
        /*}*/
        100% {
            /*transform: scale(1);*/
            transform: rotateY(360deg) rotateZ(0deg) rotateX(0);
        }
    }
    @keyframes bounce-tab-out {
        0% {
            /*transform: scale(0);*/

            transform: rotateY(0deg) rotateZ(0) rotateX(0);
        }
        /*50% {*/
        /*    transform: scale();*/
        /*}*/
        100% {
            /*transform: scale(1);*/
            transform: rotateY(90deg) rotateZ(-5deg) rotateX(-5deg);
        }
    }

    .foodCharts {
        top: 0;
        left: 0;
        position: absolute;
    }
}
</style>
