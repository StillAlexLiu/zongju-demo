<template>
    <div class="deptIndex full">
        <div class="side full-height w-3-10">
            <container class=" full-width h-3-9" :title="page.left.block2.title">
                <deptMinitEnt :data="page.left.block2.text"></deptMinitEnt>
            </container>
            <container class=" full-width h-3-9" :title="page.left.block1.title">
                <div class="link" slot="title-right" @click="openPage(1)"></div>
                <changeTab :data="page.left.block1.tab" v-on:changeTabView="changeTabViewTag"></changeTab>
                <dept-Market-ZT :data="page.left.block1.text.data" class="h-1-5 full-width"
                                v-if="changeTabViewTagIsShow===1"/>
                <deptXinShe class="h-1-5 full-width" :data="page.left.block1.text2"
                            v-else-if="changeTabViewTagIsShow===2"></deptXinShe>
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
            <container class=" full-width h-3-9" :title="page.left.block3.title">
                <ImgBlock class="full" :data="page.left.block3.img"/>
            </container>
        </div>
        <div class="center full-height  w-4-10">
            <div class="map h-7-11 full-width" style="position: relative">
                <div class="mapTitleHeight full-width">
                    <div class="full-width">
                        <CenterTitle/>
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
                <transition name="bounce" mode="out-in">
                    <div class="dia" v-if="diaShow" @close="close">
                        <div>
                            <img-block class="full" :data="diaImg" style="background-color: #1B1F31;"/>
                        </div>
                    </div>
                </transition>
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
                <img-block :data="page.right.block1.img" class="full"/>
            </container>
            <container class=" full-width h-3-9" :title="page.right.block2.title">
                <img-block :data="page.right.block2.img" class="full-width" style="height: 40px"/>
                <TabBottomLine :data="page.right.block2.tabs" v-model="tabSelect2" style="height: 30px"/>
                <img-block v-for="(item,index) in page.right.block2.imgs" :data="item" :key="index"
                           style="height: calc(100% - 70px);"
                           v-show="index===tabSelect2"/>
            </container>
            <container class=" full-width h-3-9" :title="page.right.block3.title">
                <img-block :data="page.right.block3.img" class="full"/>
            </container>
        </div>
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
import deptTaskSg from './components/deptTaskSg'
import mapView from './components/mapView'
import deptShangGaiEchart from './components/deptShangGaiEchart'
import initGongDangMap from './components/initGongdangMap'
import deptXinShe from './components/deptxinshe'
import CenterTitle from '../common/CenterTitle'
import ImgBlock from '../common/ImgBlock'

export default {
  name: 'deptIndex',
  components: {
    ImgBlock,
    CenterTitle,
    changeTab,
    deptMarketZT,
    deptEchartsMap,
    initEchartMap,
    deptChartBarLine,
    deptMinitEnt,
    deptTaskSg,
    mapView,
    deptShangGaiEchart,
    initGongDangMap,
    deptXinShe
  },
  data () {
    return {
      dia3: false,
      diaShow: false,
      diaImg: {
        img: require('./BlockImg/画板@2x.png'),
        width: 1484 / 2,
        height: 1074 / 2
      },
      tabSelect2: 0,
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
              title: '新设',
              id: 1
            }, {
              title: '注吊销',
              id: 2
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
            title: '重点指标',
            text: {
              data1: [
                {
                  name: '注册登记总量',
                  value: '1.25',
                  unit: '亿元',
                  text: '同比',
                  per: '24%',
                  status: 'up'
                },
                {
                  name: '行政许可（备案）办结',
                  value: '1.25',
                  unit: '万户',
                  text: '同比',
                  per: '24%',
                  status: 'up'
                },
                {
                  name: '注撤销数',
                  value: '1.25',
                  unit: '万户',
                  text: '同比',
                  per: '26%',
                  status: 'down'
                }
              ],
              data2: [
                [{

                  name: ' 小微企业党组织数',
                  value: '321'
                }, {
                  name: '党员担任法人数',
                  value: '345'
                }, {
                  name: '覆盖率',
                  value: '20%',
                  status: 'up'
                }],
                [{

                  name: '个体工商户党组织数',
                  value: '321'
                }, {
                  name: '党员担任法人数',
                  value: '345'
                }, {
                  name: '覆盖率',
                  value: '20%',
                  status: 'down'
                }]
              ]
            }
          },
          block3: {
            title: '小微企业情况',
            img: {
              img: require('./BlockImg/小微企业情况@2x.png'),
              width: 1032 / 2,
              height: 524 / 2
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
            title: '注册工作开展情况',
            img: {
              img: require('./BlockImg/注册工作开展@2x.png'),
              width: 1040 / 2,
              height: 452 / 2
            }
          },
          block2: {
            title: '行政许可情况',
            tabs: [{
              name: '办结率发展趋势',
              value: 0
            }, {
              name: '办结类型',
              value: 1
            }, {
              name: '办结承诺时限',
              value: 2
            }],
            img: {
              img: require('./BlockImg/行政许可情况数据@2x.png'),
              width: 1020 / 2,
              height: 90 / 2
            },
            imgs: [{
              img: require('./BlockImg/办结率发展趋势@2x.png'),
              width: 1024 / 2,
              height: 416 / 2
            }, {
              img: require('./BlockImg/办结类型@2x.png'),
              width: 908 / 2,
              height: 376 / 2
            }, {
              img: require('./BlockImg/办结承诺时限@2x.png'),
              width: 1008 / 2,
              height: 416 / 2
            }]
          },
          block3: {
            title: '个体工商户情况',
            img: {
              img: require('./BlockImg/个体工商户情况@2x.png'),
              width: 1032 / 2,
              height: 524 / 2
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
    openPage () {
      this.diaShow = !this.diaShow
    },
    changeTabViewTag (item) {
      if (item.id === 1) {
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
      } else if (item.id === 2) {
        this.changeTabViewTagIsShow = 2
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
      this.diaShow = false
    },
    openDia () {
      console.log(1)
      this.dia3 = true
    }
  }
}
</script>
<style lang="less" scoped>
.deptIndex {
    padding: 15px 20px;
    color: #ffffff;

    .dia {
        position: absolute;
        width: 100%;
        height: calc(100% - 50px);
        top: 50px;

        padding: 5px;

        > div {
            border: 1px solid;
            border-image: radial-gradient(circle, rgba(115, 143, 253, 0), rgba(60, 79, 155, 0.47), rgba(126, 176, 241, 0.09), rgba(135, 189, 253, 0.94)) 1 1;
            height: 100%;
            width: 100%;
        }

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

    .link {
        background-image: url("./../Business/img/icon@2x.png");
        width: 20px;
        height: 20px;
        background-size: 20px 20px;
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
        margin-right: 10px;
    }
}
</style>
