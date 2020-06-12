<template>
    <div class="Index full">
        <div class="h-4-5">
            <div class="side full-height w-2-7">
                <container :title="page.left.block1.title" class=" full-width h-1-4">
                    <group-zhun-ru class="h-3-11" :data="page.left.block1.text.data"/>
                    <div class="h-8-11">
                        <div class="w-3-8 full-height">
                            <ChartGauge/>
                        </div>
                        <div class="w-5-8 full-height">
                            <ChartBarLine
                                :data="page.left.block1.chart1.data"
                                :title="page.left.block1.chart1.title"
                                :dimensions="page.left.block1.chart1.dimensions"
                                :colors="page.left.block1.chart1.color"
                                :type="page.left.block1.chart1.type"
                                :legend="page.left.block1.chart1.legend"
                                :units="page.left.block1.chart1.units"
                                :is-area="true"
                            />
                        </div>
                    </div>
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
                    <div class="w-3-9 full-height">
                        <ChartWord/>
                    </div>
                    <div class="w-6-9 full-height">
                        <GroupXiaoFei class="h-3-10" :data="page.left.block3.text"/>
                        <div class="h-7-10">
                            <ChartGroupHuanJing :title="page.left.block3.chart1.title"
                                                :data="page.left.block3.chart1.data"/>
                        </div>
                    </div>
                </container>
                <container :title="page.left.block4.title" class=" full-width h-1-4">
                    <template v-if="page.name==='china'">
                        <div class="full-height w-3-10">
                            <BlockChanQuan :data="page.left.block4.text1"/>
                        </div>
                        <div class="full-height w-7-10">
                            <GroupChanQuan :data="page.left.block4.text2"/>
                        </div>
                    </template>
                    <template v-else>
                        <ChartBarLine
                            :data="page.left.block4.chart1.data"
                            :title="page.left.block4.chart1.title"
                            :dimensions="page.left.block4.chart1.dimensions"
                            :colors="page.left.block4.chart1.color"
                            :type="page.left.block4.chart1.type"
                            :legend="page.left.block4.chart1.legend"
                            :units="page.left.block4.chart1.units"
                            :two-axis="false"
                        />
                    </template>
                </container>
            </div>
            <div class="center full-height  w-3-7">

                <div class="h-4-4">
                    <div class="title h-1-7">
                        <CenterTitle/>
                        <TabSimpleMap class="map-tab" :data="mapTab" v-model="mapTabActive" @change="MapChange"/>
                    </div>
                    <div class="h-6-7" style="position: relative">
                        <EchartsMap v-if="map1Show" :config="page.center.map"/>
                        <NumberRoll :number="1.254" v-if="map1Show&&page.name==='china'" title="市场主体" unit="亿户"
                                    class="number"/>
                        <EchartsMapRenWu v-if="map2Show" :config="page.center.map"/>
                        <MapText class="map-text" v-if="map2Show" title="重点任务" text="中共中央政治局常务委员会召开会议..."/>
                    </div>
                </div>

            </div>
            <div class="side full-height w-2-7">
                <container :title="page.right.block1.title" class=" full-width h-1-4">
                    <GroupShiPin class="h-1-3" :data="page.right.block1.text"/>
                    <div class="h-2-3 " style="padding:0">
                        <BlockShiPin class="full-height w-1-5" :data="page.right.block1.text2"></BlockShiPin>
                        <ChartCustomPie class="w-4-5 full-height" :data="page.right.block1.chart1.data"
                                        :title="page.right.block1.chart1.title"/>
                    </div>
                </container>
                <container :title="page.right.block2.title" class=" full-width h-1-4">
                    <GroupYaoPin class="h-1-4 full-width" :data="page.right.block2.text"/>
                    <ChartGroup class="h-3-4 full-width" :data="page.right.block2.charts" :tab="page.right.block2.tab"/>
                </container>
                <container :title="page.right.block3.title" class=" full-width h-1-4">
                    <div class="w-6-12 full-height">
                        <BlockTeZhongSheBei :data="page.right.block3.charts"/>
                    </div>
                    <div class="w-6-12 full-height">
                        <ChartPieCircleDouble :data="page.right.block3.chart2.data"
                                              :title="page.right.block3.chart2.title"/>
                    </div>
                </container>
                <container :title="page.right.block4.title" class=" full-width h-1-4">
                    <div class="h-1-4">
                        <GroupGongYe :data="page.right.block4.text"/>
                    </div>
                    <div class="h-3-4">
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
            <container title="质量提升" class="full-height w-1-4">
                <GroupZhiLiang :data="page.center.block1.data"/>
            </container>
            <container title="风险管控"
                       class=" w-1-4 full-height">
                <img-block class="full" :data="data.bottom.chart2"/>
            </container>
            <container title="重点监管" class="full-height w-1-4">
                <ZhongDianJianGuan :data="page.center.block3"/>
            </container>
            <container title="综合执法" class="full-height w-1-4">
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
import EchartsMap from './components/EchartsMap'
import TabSimpleMap from '../../components/tab/TabSimpleMap'
import GroupZhunRu from './components/GroupZhunRu'
import ChartGauge from './components/ChartGauge'
import ChartBarLine from './components/ChartBarLine'
import GroupJingZheng from './components/GroupJingZheng'
import ChartAreaLine from './components/ChartAreaLine'
import ChartGroupHuanJing from './components/ChartGroupHuanJing'
import GroupXiaoFei from './components/GroupXiaoFei'
import BlockChanQuan from './components/BlockChanQuan'
import GroupChanQuan from './components/GroupChanQuan'
import ChartWord from './components/ChartWordCloud'
import ChartAcross from './components/ChartAcross'
import GroupShiPin from './components/GroupShiPin'
import BlockShiPin from './components/BlockShiPin'
import ChartCustomPie from './components/ChartCustomPie'
import GroupYaoPin from './components/GroupYaoPin'
import ChartGroup from './components/ChartGroup'
import BlockTeZhongSheBei from './components/BlockTeZhongSheBei'
import ChartPieCircleDouble from './components/ChartPieCircleDouble'
import GroupGongYe from './components/GroupGongYe'
import Consultation from './DialogImg/Consultation'
import Commander from './DialogImg/Command'
import EchartsMapRenWu from './components/EchartsMapRenWu'
import NumberRoll from './components/Number/numberRoll'
import MapText from './components/mapText'
import HuoLiDia from './DialogImg/HuoLiDia'
import CenterTitle from '../common/CenterTitle'
import GroupZhiLiang from './components/GroupZhiLiang'
import ZongHeZhiFa from './components/ZongHeZhiFa'
import ZhongDianJianGuan from './components/ZhongDianJianGuan'
import ImgBlock from '../common/ImgBlock'
import Battle from './DialogImg/Battle'
import Mock from 'mockjs'
import graphic from 'echarts/lib/util/graphic'

export default {
  name: 'Index',
  components: {
    Battle,
    ImgBlock,
    ZhongDianJianGuan,
    ZongHeZhiFa,
    GroupZhiLiang,
    CenterTitle,
    HuoLiDia,
    MapText,
    NumberRoll,
    EchartsMapRenWu,
    Commander,
    Consultation,
    GroupGongYe,
    ChartPieCircleDouble,
    BlockTeZhongSheBei,
    ChartGroup,
    GroupYaoPin,
    ChartCustomPie,
    BlockShiPin,
    GroupShiPin,
    GroupChanQuan,
    BlockChanQuan,
    GroupXiaoFei,
    ChartGroupHuanJing,
    ChartAreaLine,
    GroupJingZheng,
    ChartBarLine,
    ChartGauge,
    GroupZhunRu,
    TabSimpleMap,
    EchartsMap,
    ChartWord,
    ChartAcross
    // TabSimplePoint
  },
  data () {
    return {
      tabSelect0: 0,
      max: 3,
      mapTabActive: 0,
      centerIndex: 0,
      dia1: false,
      dia2: false,
      dia3: false,
      dia4: false,
      map1Show: true,
      map2Show: false,
      mapTab: [{
        name: '主体',
        value: 0
      }, {
        name: '任务',
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
                  unit: '亿户'
                }, {
                  name: '小微企业总量',
                  value: '1.16',
                  unit: '亿户'
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
                    color: '#8CD142'
                  },
                  {
                    offset: 1,
                    color: 'rgba(184, 233, 134, .4)'
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
                    color: '#B8E986'
                  },
                  {
                    offset: 1,
                    color: 'rgba(184, 233, 134, .4)'
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
                    color: '#61E4FF'
                  },
                  {
                    offset: 1,
                    color: 'rgba(50, 197, 255, 0.4)'
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
              color: ['#F6B850', '#F86A47'],
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
                value: '15%'
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
                name: '质量',
                value: 33,
                trend: 0.4,
                status: 'up'
              }, {
                name: '合同',
                value: 13.70,
                trend: 0.1,
                status: 'down'
              }, {
                name: '虚假宣传',
                value: 7.50,
                trend: 0.2,
                status: 'down'
              }, {
                name: '计量',
                value: 5,
                trend: 0.1,
                status: 'down'
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
              icon: require('./components/img/icon-chanquan-1.png'),
              data: [{
                name: '商品注册',
                value: '198',
                unit: '万件'
              }, {
                name: '',
                value: '25%',
                unit: '',
                status: 'up'
              }, {
                name: '审查时限',
                value: '',
                status: '',
                from: '9',
                fromUnit: '个月',
                arrow: true,
                to: '8',
                toUnit: '个月'
              }]
            }, {
              icon: require('./components/img/icon-chanquan-2.png'),
              data: [
                {
                  name: '地理标志',
                  value: '2320',
                  unit: '个'
                }, {
                  name: '',
                  value: '16%',
                  status: 'up',
                  from: '',
                  fromUnit: '',
                  arrow: false,
                  to: '',
                  toUnit: ''
                }, {
                  name: '新增',
                  unit: '个',
                  value: '528',
                  status: 'up'
                }
              ]
            }, {
              icon: require('./components/img/icon-chanquan-3.png'),
              data: [{
                name: '专利',
                value: '283',
                unit: '万件'
              }, {
                name: '',
                value: '20%',
                unit: '',
                status: 'up'
              }, {
                name: '审查时限',
                value: '',
                status: '',
                from: '1',
                fromUnit: '年',
                arrow: true,
                to: '9',
                toUnit: '个月'
              }]
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
              title: '抽检合格率',
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
              title: '事故各环节分析',
              data: {
                inData: {
                  name: '内环为涉事行业',
                  data: [{
                    name: '制造业',
                    value: Mock.Random.natural(10, 100)
                  }, {
                    name: '建设和建筑业',
                    value: Mock.Random.natural(10, 100)
                  }, {
                    name: '冶金石化业',
                    value: Mock.Random.natural(10, 100)
                  }, {
                    name: '运输和物流业',
                    value: Mock.Random.natural(10, 100)
                  }, {
                    name: '其他行业',
                    value: Mock.Random.natural(10, 100)
                  }]
                },
                outData: {
                  name: '外环为发生环节',
                  data: [{
                    name: '检验检测',
                    value: Mock.Random.natural(10, 100)
                  }, {
                    name: '制造',
                    value: Mock.Random.natural(10, 100)
                  }, {
                    name: '使用',
                    value: Mock.Random.natural(10, 100)
                  }, {
                    name: '安装',
                    value: Mock.Random.natural(10, 100)
                  }, {
                    name: '维修',
                    value: Mock.Random.natural(10, 100)
                  }, {
                    name: '改造',
                    value: Mock.Random.natural(10, 100)
                  }]
                }
              }
            }
          },
          block4: {
            title: '工业消费品',
            text: [{
              title: '抽检',
              name1: '批次',
              value1: '23.6',
              unit: '万',
              name2: '合格率',
              value2: '96.4%',
              status: ''
            }, {
              title: '缺陷召回',
              name1: '批次',
              value1: '1900',
              unit: '',
              name2: '同比',
              value2: '12%',
              status: 'down'
            }],
            chart1: {
              title: '消费品风险预警分析',
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
              color: ['#4A90E2', '#F5A623', '#E3475A']
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
                    color: '#56BCFF'
                  },
                  {
                    offset: 1,
                    color: 'rgba(86,188,255,0.20)'
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
                    color: 'rgba(254,105,65,0.70)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(255,174,176,0.20)'
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
            aspectScale: 0.7,
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
                  name: '国家\n标准',
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
                  name: '证书\n总数',
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
                  name: '强检\n器具',
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
                  name: '检测\n报告',
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
              name: '异常\n名录',
              value: '686',
              unit: '万户'
            }, {
              name: '严重违\n法失信',
              value: '81.2',
              unit: '万户'
            }, {
              name: '联合\n惩戒',
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
    MapChange (i) { // 这个会立刻执行
      console.log(i)
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
        .map-tab {
            height: 28px;
            margin-top: 40px;
        }

        .main-title {
            height: calc(100% - 28px);
        }
    }

    .dia {
        position: absolute;
        background: rgba(0, 0, 0, 0.7);
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
}
</style>
