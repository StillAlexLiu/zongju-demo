<template>
    <div class="deptIndex full">
        <div class="side full-height w-3-10">
            <container class=" full-width h-3-9" :title="page.left.block1.title">
                <changeTab :data="page.left.block1.tab" v-on:changeTabView="changeTabViewTag"></changeTab>
                <dept-Market-ZT :data="page.left.block1.text.data" class="h-1-5 full-width"
                                v-if="changeTabViewTagIsShow===1"/>
                <deptXinShe class="h-1-5 full-width" :data="page.left.block1.text2"
                            v-else-if="changeTabViewTagIsShow===3"></deptXinShe>
                <div class="h-4-6 full-width deptPaddingTop">
                    <deptChartBarLine
                        :data="page.left.block1.chart1.data"
                        :title="page.left.block1.chart1.title"
                        :dimensions="page.left.block1.chart1.dimensions"
                        :colors="page.left.block1.chart1.color"
                        :type="page.left.block1.chart1.type"
                        :legend="page.left.block1.chart1.legend"
                        :units="page.left.block1.chart1.units"
                    />
                </div>
            </container>
            <container class=" full-width h-2-9" :title="page.left.block2.title">
                <deptMinitEnt :data="page.left.block2.text"></deptMinitEnt>
            </container>
            <container class=" full-width h-2-9" :title="page.left.block3.title">
                <div class="full-height w-1-5">
                    <deptEntyKB :data="page.left.block3.text.data"></deptEntyKB>
                </div>
                <div class="full-height w-4-5">
                    <deptEntyKBEchart :data="page.left.block3.chart1.data"
                                      :title="page.left.block3.chart1.title"
                                      :dimensions="page.left.block3.chart1.dimensions"
                                      :colors="page.left.block3.chart1.color"
                                      :type="page.left.block3.chart1.type"
                                      :legend="page.left.block3.chart1.legend"
                                      :units="page.left.block3.chart1.units "></deptEntyKBEchart>
                </div>
            </container>
            <container class=" full-width h-2-9" :title="page.left.block4.title">
                <div class="w-1-5 full-height">
                    <deptChartGauge :data="{name:'企业活力',value:98}" @click="openDia"/>
                </div>
                <div class="w-4-5 full-height" style="padding-left:2%">
                    <deptChartHuoli
                        :data="page.left.block4.chart1.data"
                        :title="page.left.block4.chart1.title"
                        :dimensions="page.left.block4.chart1.dimensions"
                        :colors="page.left.block4.chart1.color"
                        :type="page.left.block4.chart1.type"
                        :legend="page.left.block4.chart1.legend"
                        :units="page.left.block4.chart1.units"></deptChartHuoli>
                </div>
            </container>
        </div>
        <div class="center full-height  w-4-10">
            <div class="map h-7-11 full-width">
                <div class="mapTitleHeight full-width">
                    <div class="full-width">
                        <div class="main-title text-center">
                            <img class="logo" src="src/views/index/components/img/logo.png" alt=""/>
                            <span class="title-text">智慧监管中心</span>
                        </div>
                    </div>
                    <div class="mapTitleHeight full-width" style="margin-top:10px" v-if="isShowMap===1">
                        <mapView :data="page.center.mapView"></mapView>
                    </div>
                </div>
                <div class="MapcontenHeight full-width">
                    <div class="close full-width" @click="closeMap" v-if="isShowMap!==1"><span></span></div>
                    <initGongDangMap v-if="isShowMap===3"/>
                    <deptEchartsMap v-if="isShowMap===2" :gongdangList="gongdangList"/>
                    <initEchartMap v-if="isShowMap===1"/>
                </div>
            </div>
            <container class=" full-width h-4-11" :title="page.center.block.title">
                <div class="h-2-6">
                    <deptTaskSg :data="page.center.block.text.data"></deptTaskSg>
                </div>
                <div class="h-4-6">
                    <deptShangGaiEchart :data="page.center.block.chart1.data"
                                        :yAxisIndex="page.center.block.chart1.yAxisIndex"
                                        :title="page.center.block.chart1.title"
                                        :dimensions="page.center.block.chart1.dimensions"
                                        :colors="page.center.block.chart1.color"
                                        :type="page.center.block.chart1.type"
                                        :legend="page.center.block.chart1.legend"
                                        :units="page.center.block.chart1.units"></deptShangGaiEchart>
                </div>
            </container>
        </div>

        <div class="side full-height w-3-10">
            <container class=" full-width h-3-9" :title="page.right.block1.title">
                <div class="full-width h-1-10">
                    <deptJgxk :data="page.right.block1.text.data"></deptJgxk>
                </div>
                <div class="full-width h-1-10" style="padding-left:4%">
                    <changeTab :data="page.right.block1.tab" v-on:changeTabView="changeTabViewRight"></changeTab>
                </div>
                <div class="full-width h-8-10">
                    <deptChartPer :data="page.right.block1.chart1.data"
                                  :title="page.right.block1.chart1.title"
                                  :dimensions="page.right.block1.chart1.dimensions"
                                  :colors="page.right.block1.chart1.color"
                                  :type="page.right.block1.chart1.type"
                                  :legend="page.right.block1.chart1.legend"
                                  :units="page.right.block1.chart1.units"></deptChartPer>
                </div>
            </container>
            <container class=" full-width h-2-9" :title="page.right.block2.title">
                <div class="full-height w-1-2">
                    <deptZzfl :data="page.right.block2.text.data1" class="h-1-2"></deptZzfl>
                    <deptZzfl :data="page.right.block2.text.data2" class="h-1-2"></deptZzfl>
                </div>
                <div class="full-height w-1-2">
                    <!-- {{page.right.block2.chart}} -->
                    <deptChartZzfl :data="page.right.block2.chart.data"
                                   :title="page.right.block2.chart.title"
                                   :colors="page.right.block2.chart.color"></deptChartZzfl>
                </div>
            </container>
            <container class=" full-width h-2-9" :title="page.right.block3.title"
                       :chinaMap="page.right.block3.chinaMap">
                <div class="w-2-7 full-height">
                    <deptGongDang :data="page.right.block3.gongdangData"></deptGongDang>
                </div>
                <div class="w-5-7 full-height">
                    <deptFeiGongDangEchart v-on:FeiGongDangchangeMap="changeFeiGongDangMap"
                                           :data="page.right.block3.chart1.data"
                                           :title="page.right.block3.chart1.title"
                                           :dimensions="page.right.block3.chart1.dimensions"
                                           :colors="page.right.block3.chart1.color"
                                           :type="page.right.block3.chart1.type"
                                           :legend="page.right.block3.chart1.legend"
                                           :units="page.right.block3.chart1.units"></deptFeiGongDangEchart>
                </div>
            </container>
            <container class=" full-width h-2-9" :title="page.right.block4.title"
                       :chinaMap="page.right.block4.chinaMap">
                <div class="full-width h-1-9">
                    <changeTab :data="page.right.block4.tab" v-on:changeTabView="changeTabViewTagQy"></changeTab>
                </div>
                <div class="full-width h-8-9">
                    <deptEchartYsbl v-if="quShow===1" :data="page.right.block4.chart1.data"
                                    :dimensions="page.right.block4.chart1.dimensions"
                                    :colors="page.right.block4.chart1.color"
                                    :type="page.right.block4.chart1.type"
                                    :legend="page.right.block4.chart1.legend"
                                    :units="page.right.block4.chart1.units "
                                    v-on:changeMap="changeMapView"></deptEchartYsbl>
                    <deptAreaLine v-else-if="quShow===2" :data="page.right.block4.chart2.data"
                                  :title="page.right.block4.chart2.title"
                                  :dimensions="page.right.block4.chart2.dimensions"
                                  :colors="page.right.block4.chart2.color"
                                  :type="page.right.block4.chart2.type"
                                  :legend="page.right.block4.chart2.legend"
                                  :unit="page.right.block4.chart2.units"></deptAreaLine>
                </div>
            </container>
        </div>
        <transition name="bounce" mode="out-in">
            <HuoLiDia class="dia" v-if="dia3" @close="close"/>
        </transition>
    </div>
</template>
<script>
import Mock from 'mockjs'
import graphic from 'echarts/lib/util/graphic'
import changeTab from './components/changeTab.vue'
import deptMarketZT from './components/deptMarketZT.vue'
import deptEchartsMap from './components/deptEchartsMap.vue'
import initEchartMap from './components/initEchartMap.vue'
import deptChartBarLine from './components/deptChartBarLine.vue'
import deptMinitEnt from './components/deptMinitEnt.vue'
import deptChartGauge from './components/deptChartGauge'
import deptChartHuoli from './components/deptChartHuoli.vue'
import deptEntyKB from './components/deptEntyKB'
import deptTaskSg from './components/deptTaskSg'
import mapView from './components/mapView'
import deptJgxk from './components/deptJgxk'
import deptZzfl from './components/deptZzfl'
import deptEntyKBEchart from './components/deptEntyKbEchart'
import deptShangGaiEchart from './components/deptShangGaiEchart'
import deptChartZzfl from './components/deptChartZzfl'
import deptChartPer from './components/deptChartPermission'
import deptFeiGongDangEchart from './components/deptFeiGongDangEchart'
import deptEchartYsbl from './components/deptEchartYsbl'
import deptAreaLine from './components/deptAreaLine'
import initGongDangMap from './components/initGongdangMap'
import deptXinShe from './components/deptxinshe'
import deptGongDang from './components/deptGongDang'
import HuoLiDia from '../index/components/DialogImg/HuoLiDia'

export default {
  name: 'deptIndex',
  components: {
    HuoLiDia,
    changeTab,
    deptMarketZT,
    deptEchartsMap,
    initEchartMap,
    deptChartBarLine,
    deptMinitEnt,
    deptChartGauge,
    deptChartHuoli,
    deptEntyKB,
    deptTaskSg,
    mapView,
    deptJgxk,
    deptZzfl,
    deptEntyKBEchart,
    deptShangGaiEchart,
    deptChartZzfl,
    deptChartPer,
    deptFeiGongDangEchart,
    deptEchartYsbl,
    deptAreaLine,
    initGongDangMap,
    deptXinShe,
    deptGongDang
  },
  data () {
    return {
      dia3: false,
      page: {
        titles: {
          left: ['主体市场情况', '小微企业情况', '企业开办情况', '企业活力'],
          center: ['商改系列任务情况'],
          right: ['市场监管许可情况', '证照分离许可情况', '非公党建情况', '市场主体现状分析、预测']
        },
        left: {
          block1: {
            title: '主体市场情况',
            tab: [{
              title: '市场主体',
              id: 1
            }, {
              title: '新设',
              id: 2
            }, {
              title: '注吊销',
              id: 3
            }],
            text: {
              data: [
                {
                  name: '市场主体总数',
                  value: '1.25',
                  unit: '亿元'
                },
                {
                  name: '其中企业数',
                  value: '3927',
                  unit: '万户'
                },
                {
                  name: '日均增长',
                  value: '4.8',
                  unit: '万户'
                },
                {
                  name: '新设与注销比',
                  value: '3.76:1'
                }
              ]
            },
            text2: [{
              name: '一年来注销',
              value: '11.2',
              unit: '万户'
            }, {
              name: '一般注销',
              value: '3.9',
              value2: '35.13%',
              unit: '万户'
            }, {
              name: '简易注销',
              value: '7.3',
              value2: '64.87%',
              unit: '万户'
            }],
            chart1: {
              title: '全国市场主体分布',
              dimensions: ['name', 'value', 'value1'],
              legend: ['主体数量', '同比'],
              units: ['万户', ''],
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
              ), 'rgba(247, 216, 98, 1)'],
              data: [{
                name: '北京',
                value: Mock.Random.natural(200, 500),
                value1: Mock.Random.natural(10, 60)
              }, {
                name: '上海',
                value: Mock.Random.natural(200, 500),
                value1: Mock.Random.natural(10, 60)
              }, {
                name: '河北',
                value: Mock.Random.natural(200, 500),
                value1: Mock.Random.natural(10, 60)
              }, {
                name: '内蒙古',
                value: Mock.Random.natural(200, 500),
                value1: Mock.Random.natural(10, 60)
              }, {
                name: '江苏',
                value: Mock.Random.natural(200, 500),
                value1: Mock.Random.natural(10, 60)
              }, {
                name: '四川',
                value: Mock.Random.natural(200, 500),
                value1: Mock.Random.natural(10, 60)
              }, {
                name: '河南',
                value: Mock.Random.natural(200, 500),
                value1: Mock.Random.natural(10, 60)
              }, {
                name: '山东',
                value: Mock.Random.natural(200, 500),
                value1: Mock.Random.natural(10, 60)
              }, {
                name: '山西',
                value: Mock.Random.natural(200, 500),
                value1: Mock.Random.natural(10, 60)
              }, {
                name: '湖北',
                value: Mock.Random.natural(200, 500),
                value1: Mock.Random.natural(10, 60)
              }, {
                name: '贵州',
                value: Mock.Random.natural(200, 500),
                value1: Mock.Random.natural(10, 60)
              }, {
                name: '广州',
                value: Mock.Random.natural(200, 500),
                value1: Mock.Random.natural(10, 60)
              }, {
                name: '云南',
                value: Mock.Random.natural(200, 500),
                value1: Mock.Random.natural(10, 60)
              }, {
                name: '辽宁',
                value: Mock.Random.natural(200, 500),
                value1: Mock.Random.natural(10, 60)
              }]
            }
          },
          block2: {
            title: '小微企业情况',
            text: {
              data1: [
                {
                  name: '发展指数',
                  value: '125.88'
                },
                {
                  value: '34%',
                  name: '同比',
                  ra: 'up'
                }
              ],
              data2: [
                {
                  name: '小微企业数量',
                  value: '1.16',
                  unit: '亿户',
                  id: 'aa'
                },
                {
                  name: '占比',
                  value: '92.35%',
                  id: 'bb'
                },
                {
                  name: '平均寿命',
                  value: '2.8',
                  text: '上升到',
                  unit: '年',
                  value2: '4.5',
                  id: 'cc'
                }
              ],
              data3: [
                {
                  name: '享受扶持政策数量',
                  value: '2540',
                  unit: '万户'
                },
                {
                  name: '拉动就业人口',
                  value: '2.37',
                  unit: '亿'
                }
              ]
            }
          },
          block3: {
            title: '企业开办情况',
            text: {
              data: [{
                name: '企业开办业务',
                value: '13780',
                unit: '笔'
              }, {
                name: '平均办理时长',
                value: '12',
                value1: '3',
                unit: '天'
              }
              ]
            },
            chart1: {
              title: '',
              dimensions: ['name', 'value', 'value1'],
              legend: ['办结量', '天数'],
              type: ['bar', 'bar'],
              units: ['笔', ''],
              yAxisIndex: 0,
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
              ), new graphic.LinearGradient(
                0,
                1,
                0,
                0,
                [
                  {
                    offset: 0,
                    color: 'rgba(34, 174, 197, 1)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(40, 202, 228,1)'
                  }
                ],
                false
              )],
              data: [{
                name: '领取执照',
                value: Mock.Random.natural(200, 1000),
                value1: 2
              }, {
                name: '公章刻制',
                value: Mock.Random.natural(200, 1000),
                value1: 1
              }, {
                name: '银行开户',
                value: Mock.Random.natural(200, 1000),
                value1: 1
              }, {
                name: '领取发票',
                value: Mock.Random.natural(200, 1000),
                value1: 1
              }, {
                name: '社保、公积金办理',
                value: Mock.Random.natural(200, 1000),
                value1: 2
              }]
            }
          },
          block4: {
            title: '企业活力',
            text: {
              data: [{
                name: '市场主体',
                value: [{
                  name: '市场主体总量',
                  value: '1.25',
                  unit: '亿户'
                }, {
                  name: '小微企业总量',
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
              title: '企业活力变化趋势分析',
              dimensions: ['name', 'value1'],
              legend: ['企业活力'],
              type: ['line'],
              units: [''],
              color: [new graphic.LinearGradient(
                0,
                1,
                0,
                0,
                [
                  {
                    offset: 0,
                    color: '#50E3C2'
                  },
                  {
                    offset: 1,
                    color: '#50E3C2'
                  }
                ],
                false
              ), '#50E3C2'],
              data: [{
                name: '3月',
                value1: Mock.Random.natural(70, 98)
              }, {
                name: '4月',
                value1: Mock.Random.natural(70, 98)
              }, {
                name: '5月',
                value1: Mock.Random.natural(70, 98)
              }, {
                name: '6月',
                value1: Mock.Random.natural(70, 98)
              }, {
                name: '7月',
                value1: Mock.Random.natural(70, 98)
              }, {
                name: '8月',
                value1: Mock.Random.natural(70, 98)
              }, {
                name: '9月',
                value1: Mock.Random.natural(70, 98)
              }, {
                name: '10月',
                value1: Mock.Random.natural(70, 98)
              }, {
                name: '11月',
                value1: Mock.Random.natural(70, 98)
              }, {
                name: '12月',
                value1: Mock.Random.natural(70, 98)
              }, {
                name: '1月',
                value1: Mock.Random.natural(70, 98)
              }, {
                name: '2月',
                value1: Mock.Random.natural(70, 98)
              }]
            }
          }
        },
        center: {
          mapView: [
            {
              value: '1.25',
              unit: '亿户',
              name: '市场主体',
              img: require('./img/icon1.png')
            },
            {
              value: '3927',
              unit: '万户',
              name: '企业',
              img: require('./img/icon2.png')
            },
            {
              value: '8394',
              unit: '万户',
              name: '个体户',
              img: require('./img/icon3.png')
            },
            {
              value: '219',
              unit: '万户',
              name: '农专',
              img: require('./img/icon4.png')
            },
            {
              value: '1.16',
              unit: '亿户',
              name: '小微企业',
              img: require('./img/icon5.png')
            }
          ],
          block: {
            title: '商改系列任务情况',
            text: {
              data: [
                {
                  title: '外商投资企业信息报告',
                  name: '直接投资企业',
                  name1: '间接投资企业',
                  value: '45',
                  value1: '33',
                  unit: '万家',
                  unit1: '万家'
                },
                {
                  title: '注销便利化',
                  name: '债权人公告',
                  name1: '清算组备案',
                  value: '2304',
                  value1: '4267',
                  unit: '件',
                  unit1: '件'
                },
                {
                  title: '多证合一',
                  name: '多证合一数量',
                  name1: '惠及企业数量',
                  value: '34',
                  value1: '3337',
                  unit: '证',
                  unit1: '万家'
                },
                {
                  title: '实名登记',
                  name: '注册量',
                  name1: '业务量',
                  value: '1533',
                  value1: '7681',
                  unit: '万家',
                  unit1: '万件'
                }
              ]
            },
            chart1: {
              title: '简易注销',
              yAxisIndex: 0,
              dimensions: ['name', 'value', 'value1', 'value2'],
              legend: ['申请量', '异议量', '办结量'],
              type: ['bar', 'bar', 'bar'],
              units: ['户'],
              color: ['rgba(74, 144, 226, 1)', 'rgba(254, 158, 85, 1)', 'rgba(227, 71, 90, 1)'],
              data: [{
                name: '北京',
                value: Mock.Random.natural(1500, 2500),
                value1: Mock.Random.natural(120, 600),
                value2: Mock.Random.natural(1000, 1800)
              }, {
                name: '上海',
                value: Mock.Random.natural(1500, 2500),
                value1: Mock.Random.natural(120, 600),
                value2: Mock.Random.natural(1000, 1800)
              }, {
                name: '河北',
                value: Mock.Random.natural(1500, 2500),
                value1: Mock.Random.natural(120, 600),
                value2: Mock.Random.natural(1000, 1800)
              }, {
                name: '内蒙古',
                value: Mock.Random.natural(1500, 2500),
                value1: Mock.Random.natural(120, 600),
                value2: Mock.Random.natural(1000, 1800)
              }, {
                name: '江苏',
                value: Mock.Random.natural(1500, 2500),
                value1: Mock.Random.natural(120, 600),
                value2: Mock.Random.natural(1000, 1800)
              }, {
                name: '山东',
                value: Mock.Random.natural(1500, 2500),
                value1: Mock.Random.natural(120, 600),
                value2: Mock.Random.natural(1000, 1800)
              }, {
                name: '四川',
                value: Mock.Random.natural(1500, 2500),
                value1: Mock.Random.natural(120, 600),
                value2: Mock.Random.natural(1000, 1800)
              }, {
                name: '河南',
                value: Mock.Random.natural(1500, 2500),
                value1: Mock.Random.natural(120, 600),
                value2: Mock.Random.natural(1000, 1800)
              }, {
                name: '山西',
                value: Mock.Random.natural(1500, 2500),
                value1: Mock.Random.natural(120, 600),
                value2: Mock.Random.natural(1000, 1800)
              }, {
                name: '湖北',
                value: Mock.Random.natural(1500, 2500),
                value1: Mock.Random.natural(120, 600),
                value2: Mock.Random.natural(1000, 1800)
              }, {
                name: '贵州',
                value: Mock.Random.natural(1500, 2500),
                value1: Mock.Random.natural(120, 600),
                value2: Mock.Random.natural(1000, 1800)
              }, {
                name: '广州',
                value: Mock.Random.natural(1500, 2500),
                value1: Mock.Random.natural(120, 600),
                value2: Mock.Random.natural(1000, 1800)
              }, {
                name: '云南',
                value: Mock.Random.natural(1500, 2500),
                value1: Mock.Random.natural(120, 600),
                value2: Mock.Random.natural(1000, 1800)
              }, {
                name: '辽宁',
                value: Mock.Random.natural(1500, 2500),
                value1: Mock.Random.natural(120, 600),
                value2: Mock.Random.natural(1000, 1800)
              }]
            }
          }
        },
        right: {
          block1: {
            title: '市场监管许可情况',
            tab: [{
              title: '累计许可',
              id: 1
            }, {
              title: '本月许可',
              id: 2
            }],
            text: {
              data: [
                {
                  name: '累计许可',
                  value: '901',
                  unit: '万件'
                },
                {
                  name: '本月新增',
                  value: '19',
                  unit: '万件'
                },
                {
                  name: '同比',
                  value: '12.3%',
                  unit: '',
                  ra: 'up'
                }
              ]
            },
            chart1: {
              title: '简易注销',
              yAxisIndex: 0,
              dimensions: ['name', 'value', 'value1', 'value2'],
              legend: ['申请量', '异议量', '办结量'],
              type: ['bar', 'bar', 'bar'],
              units: '万件',
              color: [new graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: 'rgba(116,205,254,1)'
              }, {
                offset: 1,
                color: 'rgba(27,152,232,1)'
              }])],
              data: [
                {
                  name: '信息传输、计算',
                  value: 55,
                  sum: 1000,
                  unit: '万件'
                },
                {
                  name: '房地产',
                  value: 27,
                  sum: 1000,
                  unit: '万件'
                },
                {
                  name: '文化体育和娱乐业',
                  value: 41,
                  sum: 1000,
                  unit: '万件'
                },
                {
                  name: '农、林、牧、渔业',
                  value: 19,
                  sum: 1000,
                  unit: '万件'
                },
                {
                  name: '建筑业',
                  value: 33,
                  sum: 1000,
                  unit: '万件'
                },
                {
                  name: '金融业',
                  value: 43,
                  sum: 1000,
                  unit: '万件'
                },
                {
                  name: '居民服务',
                  value: 35,
                  sum: 1000,
                  unit: '万件'
                }
              ]
            }
          },
          block2: {
            title: '证照分离许可事项',
            text: {
              data1: [
                {
                  name: '证照分离企业数量',
                  value: '1296',
                  unit: '万户'
                },
                {
                  name: '许可事项办理数量',
                  value: '523',
                  unit: '项'
                }
              ],
              data2: [
                {
                  name: '部门数量',
                  value: '78',
                  unit: '个'
                },
                {
                  name: '推送情况',
                  value: '1145',
                  unit: '条'
                }
              ]
            },
            chart: {
              title: '证照分离改革',
              color: ['#4594E8', '#FFD86C', '#FF996C', '#EA4344', '#82D8FF'],
              data: [
                {
                  name: '惠及企业数量',
                  value: '1905'
                },
                {
                  name: '直接取消审批',
                  value: '1047'
                },
                {
                  name: '实行告知承诺',
                  value: '2790'
                },
                {
                  name: '优化审批服务',
                  value: '4087'
                }, {
                  name: '审批改为备案',
                  value: '315'
                }
              ]
            }
          },
          block3: {
            title: '全国非公党建分布',
            chinaMap: true,
            chart1: {
              title: '重点区域检查',
              dimensions: ['name', 'value', 'value1'],
              legend: ['党员担任法人数', '非公有制经济党组织数'],
              units: ['万次', '%'],
              type: ['bar', 'line'],
              color: ['#FE6941', '#61EADF'],
              data: ['北京市', '上海市', '天津市', '重庆市', '河北省', '山西省', '辽宁省', '吉林省']
            },
            gongdangData: [
              {
                title: '企业中有党组织数',
                value: 65,
                unit: '万个'
              }, {
                title: '全国法人数量',
                value: 8537,
                unit: '万个'
              }, {
                title: '其中党员人数',
                value: 147,
                unit: '万人',
                percent: '1.8%'
              }
            ]
          },
          block4: {
            title: '市场主体现状分析、预测',
            chinaMap: true,
            tab: [{
              title: '重点区域相互投资情况',
              id: 1
            }, {
              title: '营商便利度',
              id: 2
            }],
            chart1: {
              title: '',
              dimensions: ['name', 'value', 'value1'],
              legend: ['投资金额', '被投资金额'],
              units: ['万次'],
              type: ['bar', 'bar'],
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
              ), 'rgba(247, 216, 98, 1)'],
              data: [{
                name: '北京',
                value: 72.3,
                value1: -92.3
              }, {
                name: '上海',
                value: 84.4,
                value1: -104.4
              }, {
                name: '河北',
                value: 36.5,
                value1: -26.5
              }, {
                name: '内蒙古',
                value: 65.1,
                value1: -75.1
              }, {
                name: '江苏',
                value: 54.8,
                value1: -34.8
              }, {
                name: '山东',
                value: 39.9,
                value1: -29.9
              }, {
                name: '四川',
                value: 40.7,
                value1: -50.7
              }, {
                name: '河南',
                value: 58.3,
                value1: -68.3
              }, {
                name: '山西',
                value: 87.2,
                value1: -67.2
              }, {
                name: '湖北',
                value: 60.9,
                value1: -30.9
              }, {
                name: '贵州',
                value: 46.9,
                value1: -26.9
              }, {
                name: '广州',
                value: 76.4,
                value1: -96.4
              }, {
                name: '云南',
                value: 32.6,
                value1: -22.6
              }, {
                name: '辽宁',
                value: 28.9,
                value1: -23.9
              }]
            },
            chart2: {
              title: '',
              dimensions: ['name', 'value', 'value1', 'value2'],
              legend: ['营商便利度', '综合前沿距离分数', '开办企业便利度前沿距离分数'],
              color: [new graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: 'rgba(50, 197, 255, 0.6)'
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
                    color: 'rgba(255, 213, 137, 0.6)'
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
                    color: 'rgba(126, 211, 33, 0.6)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(0,0,0,0)'
                  }
                ],
                false
              )],
              data: [{
                name: '北京',
                value: 86.8,
                value1: 24,
                value2: 18
              }, {
                name: '上海',
                value: 82.9,
                value1: 26,
                value2: 12
              }, {
                name: '河北',
                value: 67.2,
                value1: 38,
                value2: 39
              }, {
                name: '内蒙古',
                value: 65.1,
                value1: 36,
                value2: 25
              }, {
                name: '江苏',
                value: 84.8,
                value1: 32,
                value2: 38
              }, {
                name: '山东',
                value: 69.9,
                value1: 44,
                value2: 40
              }, {
                name: '四川',
                value: 60.7,
                value1: 36,
                value2: 44
              }, {
                name: '河南',
                value: 58.3,
                value1: 38,
                value2: 36
              }, {
                name: '山西',
                value: 77.2,
                value1: 48,
                value2: 32
              }, {
                name: '湖北',
                value: 60.9,
                value1: 42,
                value2: 44
              }, {
                name: '贵州',
                value: 66.9,
                value1: 39,
                value2: 38
              }, {
                name: '广州',
                value: 76.4,
                value1: 25,
                value2: 36
              }, {
                name: '云南',
                value: 62.6,
                value1: 44,
                value2: 48
              }, {
                name: '辽宁',
                value: 50.8,
                value1: 50,
                value2: 42
              }]
            }
          }
        }
      },
      quShow: 1,
      changeTabViewTagIsShow: 1,
      isShowMap: 1,
      gongdangList: {}
    }
  },
  mounted () {
  },
  methods: {
    changeTabViewTag (item) {
      if (item.id === 1) {
        this.changeTabViewTagIsShow = 1
        this.page.left.block1.chart1 = {
          title: '全国市场主体分布',
          dimensions: ['name', 'value', 'value1'],
          legend: ['主体数量', '同比'],
          units: ['万户', ''],
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
          ), 'rgba(247, 216, 98, 1)'],
          data: [{
            name: '北京',
            value: Mock.Random.natural(200, 500),
            value1: Mock.Random.natural(10, 60)
          }, {
            name: '上海',
            value: Mock.Random.natural(200, 500),
            value1: Mock.Random.natural(10, 60)
          }, {
            name: '河北',
            value: Mock.Random.natural(200, 500),
            value1: Mock.Random.natural(10, 60)
          }, {
            name: '内蒙古',
            value: Mock.Random.natural(200, 500),
            value1: Mock.Random.natural(10, 60)
          }, {
            name: '江苏',
            value: Mock.Random.natural(200, 500),
            value1: Mock.Random.natural(10, 60)
          }, {
            name: '四川',
            value: Mock.Random.natural(200, 500),
            value1: Mock.Random.natural(10, 60)
          }, {
            name: '河南',
            value: Mock.Random.natural(200, 500),
            value1: Mock.Random.natural(10, 60)
          }, {
            name: '山东',
            value: Mock.Random.natural(200, 500),
            value1: Mock.Random.natural(10, 60)
          }, {
            name: '山西',
            value: Mock.Random.natural(200, 500),
            value1: Mock.Random.natural(10, 60)
          }, {
            name: '湖北',
            value: Mock.Random.natural(200, 500),
            value1: Mock.Random.natural(10, 60)
          }, {
            name: '贵州',
            value: Mock.Random.natural(200, 500),
            value1: Mock.Random.natural(10, 60)
          }, {
            name: '广州',
            value: Mock.Random.natural(200, 500),
            value1: Mock.Random.natural(10, 60)
          }, {
            name: '云南',
            value: Mock.Random.natural(200, 500),
            value1: Mock.Random.natural(10, 60)
          }, {
            name: '辽宁',
            value: Mock.Random.natural(200, 500),
            value1: Mock.Random.natural(10, 60)
          }]
        }
      } else if (item.id === 2) {
        this.changeTabViewTagIsShow = 1
        this.page.left.block1.chart1 = {
          title: '全国市场主体新设分布',
          dimensions: ['name', 'value', 'value1'],
          legend: ['主体数量', '同比'],
          units: ['万户', ''],
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
          ), 'rgba(247, 216, 98, 1)'],
          data: [{
            name: '3月',
            value: 235.6,
            value1: 25.39
          }, {
            name: '4月',
            value: 247.6,
            value1: 22.49
          }, {
            name: '5月',
            value: 214.5,
            value1: '-3.35'
          }, {
            name: '6月',
            value: 197.3,
            value1: 5.1
          }, {
            name: '7月',
            value: 216.3,
            value1: 15.17
          }, {
            name: '8月',
            value: 202.7,
            value1: 5.13
          }, {
            name: '9月',
            value: 210.4,
            value1: 9.97
          }, {
            name: '10月',
            value: 189.2,
            value1: 9.4
          }, {
            name: '11月',
            value: 226.2,
            value1: 4.95
          }, {
            name: '12月',
            value: 227.8,
            value1: 11.4
          }, {
            name: '1月',
            value: 110.2,
            value1: -35.87
          }, {
            name: '2月',
            value: 37.7,
            value1: -58.4
          }]
        }
      } else if (item.id === 3) {
        this.changeTabViewTagIsShow = 3
        this.page.left.block1.chart1 = {
          title: '全国市场主体注吊销分布',
          dimensions: ['name', 'value', 'value1'],
          legend: ['主体数量', '同比'],
          units: ['户', ''],
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
          ), 'rgba(247, 216, 98, 1)'],
          data: [{
            name: '北京',
            value: Mock.Random.natural(1000, 3500),
            value1: Mock.Random.natural(10, 25)
          }, {
            name: '上海',
            value: Mock.Random.natural(1000, 3500),
            value1: Mock.Random.natural(10, 25)
          }, {
            name: '河北',
            value: Mock.Random.natural(1000, 3500),
            value1: Mock.Random.natural(10, 25)
          }, {
            name: '内蒙古',
            value: Mock.Random.natural(1000, 3500),
            value1: Mock.Random.natural(10, 25)
          }, {
            name: '江苏',
            value: Mock.Random.natural(1000, 3500),
            value1: Mock.Random.natural(10, 25)
          }, {
            name: '四川',
            value: Mock.Random.natural(1000, 3500),
            value1: Mock.Random.natural(10, 25)
          }, {
            name: '河南',
            value: Mock.Random.natural(1000, 3500),
            value1: Mock.Random.natural(10, 25)
          }, {
            name: '山东',
            value: Mock.Random.natural(1000, 3500),
            value1: Mock.Random.natural(10, 25)
          }, {
            name: '山西',
            value: Mock.Random.natural(1000, 3500),
            value1: Mock.Random.natural(10, 25)
          }, {
            name: '湖北',
            value: Mock.Random.natural(1000, 3500),
            value1: Mock.Random.natural(10, 25)
          }, {
            name: '贵州',
            value: Mock.Random.natural(1000, 3500),
            value1: Mock.Random.natural(10, 25)
          }, {
            name: '广州',
            value: Mock.Random.natural(1000, 3500),
            value1: Mock.Random.natural(10, 25)
          }, {
            name: '云南',
            value: Mock.Random.natural(1000, 3500),
            value1: Mock.Random.natural(10, 25)
          }, {
            name: '辽宁',
            value: Mock.Random.natural(1000, 3500),
            value1: Mock.Random.natural(10, 25)
          }]
        }
      }
    },
    changeTabViewRight (item) {
      if (item.id === 2) {
        this.page.right.block1.chart1.data = [
          {
            name: '信息传输、计算',
            value: 892,
            sum: 1000,
            unit: '件'
          },
          {
            name: '房地产',
            value: 739,
            sum: 1000,
            unit: '件'
          },
          {
            name: '文化体育和娱乐业',
            value: 654,
            sum: 1000,
            unit: '件'
          },
          {
            name: '农、林、牧、渔业',
            value: 576,
            sum: 1000,
            unit: '件'
          },
          {
            name: '建筑业',
            value: 518,
            sum: 1000,
            unit: '件'
          },
          {
            name: '金融业',
            value: 435,
            sum: 1000,
            unit: '件'
          },
          {
            name: '居民服务',
            value: 354,
            sum: 1000,
            unit: '件'
          }
        ]
      } else {
        this.page.right.block1.chart1.data = [
          {
            name: '信息传输、计算',
            value: 55,
            sum: 1000,
            unit: '万件'
          },
          {
            name: '房地产',
            value: 27,
            sum: 1000,
            unit: '万件'
          },
          {
            name: '文化体育和娱乐业',
            value: 41,
            sum: 1000,
            unit: '万件'
          },
          {
            name: '农、林、牧、渔业',
            value: 19,
            sum: 1000,
            unit: '万件'
          },
          {
            name: '建筑业',
            value: 33,
            sum: 1000,
            unit: '万件'
          },
          {
            name: '金融业',
            value: 43,
            sum: 1000,
            unit: '万件'
          },
          {
            name: '居民服务',
            value: 35,
            sum: 1000,
            unit: '万件'
          }
        ]
      }
    },
    changeTabViewTagQy (item) {
      this.quShow = item.id
    },
    changeMapView (name, index) {
      this.isShowMap = 2 // 显示迁移
      console.log(index, name, '11111')
      this.gongdangList = {
        index: index,
        name: name
      }
    },
    changeFeiGongDangMap (name, index) {
      this.isShowMap = 3 // 显示热力地图
      console.log(index, name, '项传世')
    },
    closeMap () {
      this.isShowMap = 1
    },
    close () {
      this.dia3 = false
    },
    openDia () {
      console.log(1)
      this.dia3 = true
    }
  }
}
</script>
<style lang="less">
.deptIndex {
    padding: 15px 20px;
    color: #ffffff;

    .dia {
        position: absolute;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
        padding: 60px 67px 98px 67px;
        top: 0;
        left: 0;
        /*width: 1786px;*/
        /*height: 922px;*/
        /*top: 60px;*/
        /*left: 67px;*/

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

    .deptPaddingTop {
        padding-top: 4%;
    }

    .mapTitleHeight {
        height: 70px;
        margin-bottom: 10px;
    }

    .MapcontenHeight {
        height: calc(100% - 80px);
    }

    .main-title {
        height: calc(100% - 28px);

        .logo {
            width: 35px;
            height: 36px;
            vertical-align: bottom;
        }

        .title-text {
            font-size: 34px;
            line-height: 40px;
            letter-spacing: 4px;
            margin-left: 13px;
        }
    }

    .close {
        position: relative;
        z-index: 100;

        span {
            background: url('./img/close.png');
            background-size: 100% 100%;
            position: absolute;
            left: 4%;
            top: 10px;
            font-size: 40px;
            color: #3FD3D6;
            cursor: pointer;
            width: 40px;
            height: 40px;
            display: block;
        }
    }
}
</style>
