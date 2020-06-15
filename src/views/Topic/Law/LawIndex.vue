<template>
    <div class='LawIndex full'>
        <div class="side full-height w-2-7">
            <container :title="page.left.block1.title" class=" full-width h-2-5">
                <div class="h-3-5">
                    <div class="w-1-3 full-height">
                        <img-block :data="page.left.block1.img"/>
                    </div>
                    <div class="w-2-3 full-height">
                        <ChartsPie :data="page.left.block1.chart1.data" :show-legend="false" :show-all="true"
                                   :radius-circle="['60%','65%']"
                                   :radius-pie-center="[0,'50%']"
                                   :unit="'件'"
                                   :unit-center="'万件'"
                                   :title="'线索来源'"
                                   :double-pie="true" :center-data="page.left.block1.chart1.data2"/>
                    </div>
                </div>
                <div class="h-2-5">
                    <div class="w-1-3 full-height">
                        <ChartBarLine
                            :data="page.left.block1.chart2.data"
                            :title="page.left.block1.chart2.title"
                            :dimensions="page.left.block1.chart2.dimensions"
                            :colors="page.left.block1.chart2.color"
                            :type="page.left.block1.chart2.type"
                            :legend="page.left.block1.chart2.legend"
                            :units="page.left.block1.chart2.units"
                        />
                    </div>
                    <div class="w-2-3 full-height">
                        <ChartBarLine
                            :data="page.left.block1.chart3.data"
                            :title="page.left.block1.chart3.title"
                            :dimensions="page.left.block1.chart3.dimensions"
                            :colors="page.left.block1.chart3.color"
                            :type="page.left.block1.chart3.type"
                            :legend="page.left.block1.chart3.legend"
                            :units="page.left.block1.chart3.units"
                        />
                    </div>
                </div>
            </container>
            <container :title="page.left.block2.title" class=" full-width h-3-5">
                <div class="h-2-5">
                    <div class="w-1-3 full-height">
                        <img-block :data="page.left.block2.img"/>
                    </div>
                    <div class="w-2-3 full-height">
                        <TabBottomLine :data="tab4" style="height: 25px" v-model="tab4Selected"/>
                        <div style="height: calc(100% - 25px);">
                            <ChartsPie :data="page.left.block2.chart1[tab4Selected].data" :show-legend="false"
                                       :show-all="true"
                                       :radius-circle="['60%','65%']"
                                       :radius-pie-center="[0,'50%']"
                                       :unit="'件'"
                                       :color="['#22AEC5','#87A0F6','#FFD589','#91D243']"
                                       :unit-center="'件'"
                                       :double-pie="true" :center-data="page.left.block2.chart1[tab4Selected].data2"/>
                        </div>
                    </div>
                </div>
                <div class="h-3-5">
                    <div class="h-4-9">
                        <TabBottomLine :data="tab5" style="height: 25px"/>
                        <div style="height: calc(100% - 25px);padding-top: 10px">
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
                    <div class="h-5-9">
                        <div class="w-1-3 full-height">
                            <TabBottomLine :data="tab" style="height: 25px"/>
                            <div style="height: calc(100% - 25px);padding-top: 10px">
                                <img-block :data="page.left.block2.img1"/>
                            </div>
                        </div>
                        <div class="w-2-3 full-height">
                            <div style="font-size: 16px;height: 25px;text-indent: 10px">复议案件类型分布</div>
                            <div style="height: calc(100% - 25px);padding-top: 10px;">
                                <img-block :data="page.left.block2.img2"/>
                            </div>
                        </div>
                    </div>
                </div>
            </container>
        </div>
        <div class="center full-height w-3-7">
            <div class="map h-7-10">
                <EchartsMap :config="page.center.map" v-if="false"/>
                <img-block :data="mapImg" class="full"/>
            </div>
            <container :title="page.center.block1.title" class=" full-width h-3-10">
                <div class="full-height w-1-3">
                    <ChartBarLine
                        :data="page.center.block1.chart1.data"
                        :title="page.center.block1.chart1.title"
                        :dimensions="page.center.block1.chart1.dimensions"
                        :colors="page.center.block1.chart1.color"
                        :type="page.center.block1.chart1.type"
                        :legend="page.center.block1.chart1.legend"
                        :units="page.center.block1.chart1.units"
                        :rotate="45"
                        :bottom="80"
                    />
                </div>
                <div class="full-height w-1-3">
                    <ChartsRadar :data="page.center.block1.charts2.data"
                                 :title="page.center.block1.charts2.title"
                                 :radius="60"
                                 :indicator="page.center.block1.charts2.indicator"/>
                </div>
                <div class="full-height w-1-3">
                    <TabBottomLine :data="tab1" style="height: 25px"/>
                    <div style="height: calc(100% - 25px)">
                        <CenterBlockInfo class="h-1-4" :data="page.center.block1.charts3.top"/>
                        <div class="h-3-4">
                            <ChartBarH
                                :data="page.center.block1.charts3.data"
                                :title="page.center.block1.charts3.title"
                                :dimensions="page.center.block1.charts3.dimensions"
                                :colors="page.center.block1.charts3.color"
                                :type="page.center.block1.charts3.type"
                                :legend="page.center.block1.charts3.legend"
                                :units="page.center.block1.charts3.units"
                            />
                        </div>
                    </div>
                </div>
            </container>
        </div>
        <div class="side full-height w-2-7">
            <container :title="page.right.block1.title" class=" full-width h-3-10">
                <TabBottomLine :data="tab2" style="height: 25px"/>
                <div style="height: calc(100% - 25px)">
                    <img-block :data="page.right.block1.img"/>
                </div>
            </container>
            <container class="h-4-10" title="重点专项">
                <TabBottomLine :data="tab3" style="height: 35px" v-model="tab3Selected"/>
                <div style="height: calc(100% - 35px)">
                    <page-tab :data="page.right.block2.imgs[tab3Selected]" class="full"/>
                    <!--                    <div class="w-1-4 full-height">-->
                    <!--                        <div class="h-1-3" style="padding: 30px 0">-->
                    <!--                            <InfoCard class="" :data="page.right.block2.info"/>-->
                    <!--                        </div>-->
                    <!--                        <div class="h-2-3" style="padding: 10px">-->
                    <!--                            <img-block :data="page.right.block2.img"/>-->
                    <!--                        </div>-->
                    <!--                    </div>-->
                    <!--                    <div class="w-3-4 full-height">-->
                    <!--                        <div class="h-4-8">-->
                    <!--                            <ChartBarLine-->
                    <!--                                :data="page.right.block2.chart2.data"-->
                    <!--                                :title="page.right.block2.chart2.title"-->
                    <!--                                :dimensions="page.right.block2.chart2.dimensions"-->
                    <!--                                :colors="page.right.block2.chart2.color"-->
                    <!--                                :type="page.right.block2.chart2.type"-->
                    <!--                                :legend="page.right.block2.chart2.legend"-->
                    <!--                                :units="page.right.block2.chart2.units"-->
                    <!--                            />-->
                    <!--                        </div>-->
                    <!--                        <div class="h-4-8" style="padding-left: 10px;padding-top: 5px">-->
                    <!--                            <img-block :data="page.right.block2.img2" class="w-10-12"/>-->
                    <!--                        </div>-->
                    <!--                    </div>-->
                </div>
            </container>
            <container class="h-3-10" title="联合执法">
                <InfoCardFor class="w-1-4 full-height" :data="page.right.block3.info1"/>
                <div class="w-2-4 full-height">
                    <img-block :data="page.right.block3.img"/>
                </div>
                <InfoCardFor class="w-1-4 full-height" :data="page.right.block3.info2"/>
            </container>
        </div>
    </div>
</template>

<script>
import Mock from 'mockjs'
import EchartsMap from '../../index/components/EchartsMap'
import ChartBarLine from '../../index/components/ChartBarLine'
import ChartsRadar from './components/ChartsRadar'
import CenterBlockInfo from './components/CenterBlockInfo'
import graphic from 'echarts/lib/util/graphic'
import ChartBarH from './components/ChartBarH'
import ChartsPie from './components/ChartsPie'
import ImgBlock from '../../common/ImgBlock'
// import InfoCard from './components/InfoCard'
import InfoCardFor from './components/InfoCardFor'
import PageTab from './components/PageTab'

export default {
  name: 'LawIndex',
  components: {
    PageTab,
    InfoCardFor,
    // InfoCard,
    ImgBlock,
    ChartsPie,
    ChartBarH,
    CenterBlockInfo,
    ChartsRadar,
    ChartBarLine,
    EchartsMap
  },
  data () {
    return {
      mapImg: {
        img: require('./BlockImg/地图@1x.png'),
        width: 1322 / 1.5,
        height: 730 / 1.3
      },
      tab3Selected: 0,
      tab: [{
        name: '案件复议',
        value: 0
      }, {
        name: '案件诉讼',
        value: 1
      }],
      tab1: [{
        name: '案件案值',
        value: 0
      }, {
        name: '处罚金额',
        value: 1
      }],
      tab2: [{
        name: '重点关注案件',
        value: 0
      }, {
        name: '全国性、跨省大案要案',
        value: 1
      }],
      tab3: [{
        name: '食品安全专项执法',
        value: 0
      }, {
        name: '知识产权专项执法',
        value: 1
      }, {
        name: '防疫物资专项执法',
        value: 1
      }],
      tab4Selected: 0,
      tab4: [{
        name: '适用程序',
        value: 0
      }, {
        name: '案件类型',
        value: 1
      }],
      tab5: [{
        name: '案件发展趋势',
        value: 0
      }, {
        name: '平均处置时长变化趋势',
        value: 1
      }, {
        name: '延期案件数量',
        value: 2
      }],
      page: {
        left: {
          block1: {
            title: '线索情况',
            img: {
              img: require('./BlockImg/线索数量@2x.png'),
              width: 312 / 2,
              height: 362 / 2
            },
            chart1: {
              data: [{
                name: '投诉举报',
                value: 232
              }, {
                name: '监督检查',
                value: 232
              }, {
                name: '抽检',
                value: 200
              }, {
                name: '上级机关交办',
                value: 150
              }, {
                name: '其他部门移动',
                value: 241
              }, {
                name: '其他',
                value: 231
              }],
              data2: [
                {
                  name: '处置中',
                  value: 241
                }, {
                  name: '已处置',
                  value: 231
                }]
            },
            chart2: {
              title: '平均处置时长变化趋势',
              dimensions: ['name', 'value'],
              legend: [''],
              type: ['bar'],
              units: ['天'],
              color: [new graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: '#FFCD9D'
                  },
                  {
                    offset: 1,
                    color: '#E2A300'
                  }
                ],
                false
              )],
              data: [{
                name: '4月',
                value: Mock.Random.natural(60, 100)
              }, {
                name: '5月',
                value: Mock.Random.natural(60, 100)
              }, {
                name: '6月',
                value: Mock.Random.natural(60, 100)
              }, {
                name: '7月',
                value: Mock.Random.natural(60, 100)
              }, {
                name: '8月',
                value: Mock.Random.natural(60, 100)
              }, {
                name: '9月',
                value: Mock.Random.natural(60, 100)
              }]
            },
            chart3: {
              title: '平均处置时长变化趋势',
              dimensions: ['name', 'value', 'value1'],
              legend: ['新增线索数量', '同比'],
              type: ['bar', 'line'],
              units: ['万件'],
              color: [new graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: '#1EDFFF'
                  },
                  {
                    offset: 1,
                    color: '#2C6DEB'
                  }
                ],
                false
              ), '#FE6941'],
              data: [{
                name: '6月',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(60, 100)
              }, {
                name: '7月',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(60, 100)
              }, {
                name: '8月',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(60, 100)
              }, {
                name: '9月',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(60, 100)
              }, {
                name: '10月',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(60, 100)
              }, {
                name: '11月',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(60, 100)
              }, {
                name: '12月',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(60, 100)
              }, {
                name: '1月',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(60, 100)
              }, {
                name: '2月',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(60, 100)
              }, {
                name: '3月',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(60, 100)
              }, {
                name: '4月',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(60, 100)
              }, {
                name: '5月',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(60, 100)
              }]
            }
          },
          block2: {
            title: '案件情况',
            img: {
              img: require('./BlockImg/案件数量@2x.png'),
              width: 312 / 2,
              height: 362 / 2
            },
            img1: {
              img: require('./BlockImg/复议案件数量@2x.png'),
              width: 312 / 2,
              height: 282 / 2
            },
            img2: {
              img: require('./BlockImg/复议案件类型分布@2x.png'),
              width: 632 / 2,
              height: 288 / 2
            },
            chart1: [{
              data: [{
                name: '简易程序案件',
                value: 150
              }, {
                name: '一般程序案件',
                value: 232
              }],
              data2: [
                {
                  name: '已办结',
                  value: 223
                }, {
                  name: '办理中',
                  value: 145
                }]
            }, {
              data: [{
                name: '简易程序案件',
                value: 232
              }, {
                name: '一般程序案件',
                value: 232
              }],
              data2: [
                {
                  name: '已办结',
                  value: 241
                }, {
                  name: '办理中',
                  value: 231
                }]
            }],
            chart2: {
              title: '平均处置时长变化趋势',
              dimensions: ['name', 'value', 'value1'],
              legend: ['新增线索数量', '同比'],
              type: ['bar', 'line'],
              units: ['万件'],
              color: [new graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: '#FF5151'
                  },
                  {
                    offset: 1,
                    color: '#FF7C48'
                  }
                ],
                false
              ), '#FE9E55'],
              data: [{
                name: '6月',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(60, 100)
              }, {
                name: '7月',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(60, 100)
              }, {
                name: '8月',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(60, 100)
              }, {
                name: '9月',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(60, 100)
              }, {
                name: '10月',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(60, 100)
              }, {
                name: '11月',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(60, 100)
              }, {
                name: '12月',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(60, 100)
              }, {
                name: '1月',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(60, 100)
              }, {
                name: '2月',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(60, 100)
              }, {
                name: '3月',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(60, 100)
              }, {
                name: '4月',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(60, 100)
              }, {
                name: '5月',
                value: Mock.Random.natural(60, 100),
                value1: Mock.Random.natural(60, 100)
              }]
            }
          }
        },
        center: {
          block1: {
            title: '行政处罚',
            img: {
              img: '',
              width: '',
              height: ''
            },
            chart1: {
              title: '处罚类型',
              dimensions: ['name', 'value'],
              legend: [''],
              type: ['bar'],
              units: ['万件'],
              color: ['#FF4040'],
              data: [{
                name: '给予行政处罚',
                value: Mock.Random.natural(60, 100)
              }, {
                name: '不予行政处罚',
                value: Mock.Random.natural(60, 100)
              }, {
                name: '销案',
                value: Mock.Random.natural(60, 100)
              }, {
                name: '移送司法机关',
                value: Mock.Random.natural(60, 100)
              }, {
                name: '移送其他行政机关案件',
                value: Mock.Random.natural(60, 100)
              }, {
                name: '其他',
                value: Mock.Random.natural(60, 100)
              }]
            },
            charts2: {
              title: '处罚主体',
              data: [{
                name: '',
                value: [75, 80, 90, 20, 14, 56]
              }],
              indicator: [
                {
                  name: '公有制企业',
                  max: 100
                },
                {
                  name: '私营企业',
                  max: 100
                },
                {
                  name: '外资企业',
                  max: 100
                },
                {
                  name: '农村合作社',
                  max: 100
                },
                {
                  name: '个体工商户',
                  max: 100
                },
                {
                  name: '自然人',
                  max: 100
                }
              ]
            },
            charts3: {
              top: {
                name: '本年处罚案值',
                value: '43.63',
                unit: '亿元'
              },
              title: '本年度案件案值区间分布',
              dimensions: ['name', 'value'],
              legend: [''],
              units: ['单位：万件'],
              type: ['bar'],
              color: [
                new graphic.LinearGradient(
                  0,
                  0,
                  1,
                  0,
                  [
                    {
                      offset: 0,
                      color: '#F78F35'
                    },
                    {
                      offset: 1,
                      color: '#F7D862'
                    }
                  ],
                  false
                ),
                'rgba(247, 216, 98, 1)'
              ],
              data: [
                {
                  name: '大于1亿',
                  value: Mock.Random.natural(2000, 14000)
                },
                {
                  name: '1000万-1亿',
                  value: Mock.Random.natural(2000, 14000)
                },
                {
                  name: '100-1000万',
                  value: Mock.Random.natural(2000, 14000)
                },
                {
                  name: '0-100万',
                  value: Mock.Random.natural(2000, 14000)
                }
              ]
            }
          },
          map: {
            name: 'china',
            aspectScale: 0.7,
            center: [104.075206, 30.659799],
            center2: [114.274791, 30.594985],
            pointPosition: [82, 23.5],
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
          }
        },
        right: {
          block1: {
            title: '线索情况',
            img: {
              img: require('./BlockImg/线索情况@2x.png'),
              width: 1036 / 2.1,
              height: 494 / 2.1
            }
          },
          block2: {
            title: '重点专项',
            imgs: [{
              img: require('./BlockImg/tab/食品安全.png'),
              width: 500,
              height: 304
            }, {
              img: require('./BlockImg/tab/知识产权 28.png'),
              width: 500,
              height: 304
            }, {
              img: require('./BlockImg/tab/防汛.png'),
              width: 500,
              height: 304
            }]
          },
          block3: {
            title: '联合执法',
            img: {
              img: require('./BlockImg/联合执法变化趋势@2x.png'),
              width: 492 / 2,
              height: 460 / 2
            },
            info1: [{
              name: '联合执法案件',
              value: '19.8',
              unit: '万件'
            }, {
              name: '协查案件',
              value: '4.3',
              unit: '万件',
              text: '占联合执法案件14%'
            }, {
              name: '行刑衔接',
              value: '6.2',
              unit: '万件',
              text: '占联合执法案件12%'
            }],
            info2: [{
              name: '双打办',
              value: '3.8',
              unit: '万件',
              text: '占联合执法案件12%'
            }, {
              name: '联合双打',
              value: '1.9',
              unit: '万件',
              text: '占联合执法案件12%'
            }, {
              name: '其他',
              value: '5.1',
              unit: '万件',
              text: '占联合执法案件12%'
            }]
          }
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
.LawIndex {
    color: #ffffff;
    padding: 15px 20px;
}
</style>
