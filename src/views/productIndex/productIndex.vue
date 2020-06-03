<template>
    <div class="deptIndex full">
        <div class=" full-width h-5-9">
            <div class="full-height w-1-3">
                <container class=" full-width h-3-5" :title="page.left.block1.title">
                    <div class="full-width h-1-2">
                        <productFirstView :data="page.left.block1.text.data" :title="page.left.block1.title1">
                        </productFirstView>
                    </div>
                    <div class="full-width h-1-2">
                        <prouctAreaLine :data="page.left.block1.chart1.data"
                                        :symbolSize="page.left.block1.chart1.symbolSize"
                                        :title="page.left.block1.chart1.title"
                                        :dimensions="page.left.block1.chart1.dimensions"
                                        :colors="page.left.block1.chart1.color"
                                        :type="page.left.block1.chart1.type"
                                        :legend="page.left.block1.chart1.legend"
                        ></prouctAreaLine>
                    </div>
                </container>
                <container class="full-width h-2-5" :title="page.left.block2.title">
                    <productbarLine :data="page.left.block2.chart1.data"
                                    :title="page.left.block2.chart1.title"
                                    :dimensions="page.left.block2.chart1.dimensions"
                                    :colors="page.left.block2.chart1.color"
                                    :type="page.left.block2.chart1.type"
                                    :legend="page.left.block2.chart1.legend"
                                    :units="page.left.block2.chart1.units"></productbarLine>
                </container>
            </div>
            <div class="full-height w-1-3 positionRelative">
                <div class="title full-width">
                    <CenterTitle/>
                    <proMapTopNumber :data="mapNumber"></proMapTopNumber>

                </div>
                <div class="full-width mapHeight">
                    <productMap :mapIndex="mapIndex"></productMap>
                    <productTabSipleMap class="map-tab" :data="mapTab" v-model="mapTabActive"
                                        @change="MapChange"/>
                </div>
            </div>
            <div class="full-height w-1-3">
                <container class="full" :title="page.right.block1.title">
                    <div style="padding-left:10px">
                        <changeTab :data="page.right.block1.tab" v-on:changeTabView="changeTabViewTagTwo"></changeTab>
                    </div>
                    <div class="rightTabH full-width">
                        <productJiankong></productJiankong>
                    </div>
                </container>
            </div>
        </div>
        <div class="full-width h-4-9">
            <container class="full" :title="page.center.title">
                <div class="w-1-3 full-height " style="margin-top:-10px">
                    <div class="full-width produtText produtTextTitle">{{page.center.block2.title1}}</div>
                    <div class="full-width produtListHeight">
                        <div class="w-1-3 h-1-2" v-for="(item,index) in page.center.block2.chartList " :key="index">
                            <productPic :data="item.data"
                                        :title="item.title"
                                        :colors="item.color" :center="item.center"></productPic>
                        </div>
                    </div>
                    <div class="full-width produtListHeight">
                        <div class="full-height w-2-5">
                            <productPicTwo :title="page.center.block2.chart2.title"
                                           :data="page.center.block2.chart2.data"></productPicTwo>
                        </div>
                        <div class="full-height w-3-5">
                            <productbarLine :data="page.center.block2.chart3.data"
                                            :title="page.center.block2.chart3.title"
                                            :dimensions="page.center.block2.chart3.dimensions"
                                            :colors="page.center.block2.chart3.color"
                                            :type="page.center.block2.chart3.type"
                                            :legend="page.center.block2.chart3.legend"
                                            :units="page.center.block2.chart3.units"></productbarLine>
                        </div>
                    </div>
                </div>
                <div class="full-height w-1-3 " style="margin-top:-10px">
                    <div class="produtTextTitle">{{page.center.title1}}</div>
                    <div class="full-width shizhongTextH">
                        <productOne :data="page.center.block1.text1.data" :title="page.center.block1.title1">
                        </productOne>
                    </div>
                    <div class="full-width h-1-4 shizhongTextH">
                        <productOne :data="page.center.block1.text2.data" :title="page.center.block1.title2">
                        </productOne>
                    </div>
                    <div class="full-width" style="height:45%">
                        <div class="full-width produtText ">
                            <changeTab :data="page.center.block1.tab" v-on:changeTabView="changeTabViewTag"></changeTab>
                        </div>
                        <div class="full-width produtCont">
                            <productShizhong class="h-1-2" :data="page.center.block1.text3" v-if="echartShow==1"/>
                            <productShizhong class="h-1-2" :data="page.center.block1.text4" v-if="echartShow==1"/>
                            <div class="full" v-else><img src="src/views/productIndex/img/echart.png"
                                                          style="width:100%;padding-top: 2%" alt=""></div>
                        </div>
                    </div>
                </div>
                <div class="w-1-3 full-height" style="margin-top:-10px">
                    <div class="full-width produtText produtTextTitle">{{page.center.block3.title}}</div>
                    <div class="produtCont">
                        <div class="h-1-2 full-width">
                            <productChartFive :title="page.center.block3.chart1.title"
                                              :data="page.center.block3.chart1"/>
                        </div>
                        <div class="h-1-2 full-width">
                            <div class="full-height w-1-2">
                                <prouctAreaLine :data="page.center.block3.chart2.data"
                                                :symbolSize="page.center.block3.chart2.symbolSize"
                                                :title="page.center.block3.chart2.title"
                                                :dimensions="page.center.block3.chart2.dimensions"
                                                :colors="page.center.block3.chart2.color"
                                                :type="page.center.block3.chart2.type"
                                                :unit="page.center.block3.chart2.units"
                                                :legend="page.center.block3.chart2.legend"
                                ></prouctAreaLine>
                            </div>
                            <div class="full-height w-1-2">
                                <productbarLine :data="page.center.block3.chart3.data"
                                                :title="page.center.block3.chart3.title"
                                                :dimensions="page.center.block3.chart3.dimensions"
                                                :colors="page.center.block3.chart3.color"
                                                :type="page.center.block3.chart3.type"
                                                :legend="page.center.block3.chart3.legend"
                                                :units="page.center.block3.chart3.units"></productbarLine>
                            </div>
                        </div>
                    </div>
                </div>
            </container>
        </div>
    </div>
</template>
<script>
import Mock from 'mockjs'
import graphic from 'echarts/lib/util/graphic'
import productFirstView from './components/productFirstView'
import prouctAreaLine from './components/productAreaLine'
import productbarLine from './components/productbarLine'
import productShizhong from './components/productShizhong'
import productOne from './components/productShizhongOne'
import productPic from './components/productPic'
import productPicTwo from './components/productPicTwo'
import productMap from './components/productMap'
import changeTab from '../deptIndex/components/changeTab.vue'
import productJiankong from './components/productJianKong'
import productChartFive from './components/productChartFive'
import productTabSipleMap from './components/productTabSipleMap'
import proMapTopNumber from './components/proMapTopNumber'
import CenterTitle from '../common/CenterTitle'

export default {
  name: 'productIndex',
  components: {
    CenterTitle,
    productFirstView,
    prouctAreaLine,
    productbarLine,
    productShizhong,
    productOne,
    productPic,
    productPicTwo,
    productMap,
    changeTab,
    productJiankong,
    productChartFive,
    productTabSipleMap,
    proMapTopNumber
  },
  data () {
    return {
      page: {
        titles: {
          left: ['事前监管', '重点产品'],
          center: ['事中监管'],
          right: ['舆情监测与防控']
        },
        left: {
          block1: {
            title: '事前监管',
            title1: '',
            text: {
              data: [
                {
                  name: '期末实有',
                  value: '3740',
                  unit: '单'
                },
                {
                  name: '本单新增',
                  value: '1290',
                  unit: '单'
                },
                {
                  name: '本期注销',
                  value: '173',
                  unit: '单'
                },
                {
                  name: '本期撤吊销',
                  value: '102',
                  unit: '单'
                },
                {
                  name: '水泥',
                  value: '890',
                  unit: '单'
                },
                {
                  name: '钢筋',
                  value: '679',
                  unit: '单'
                },
                {
                  name: '电线电缆',
                  value: '908',
                  unit: '单'
                },
                {
                  name: '危化品',
                  value: '123',
                  unit: '单'
                }
              ]
            },
            chart1: {
              title: '获证企业变化趋势',
              dimensions: ['name', 'value'],
              symbolSize: 8,
              color: [new graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: 'rgba(97, 228, 255, 1)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(50, 197, 255, 0)'
                  }
                ],
                false
              )],
              legend: [''],
              units: ['万个'],
              data: [{
                name: '3月',
                value: Mock.Random.natural(100, 300)
              }, {
                name: '4月',
                value: Mock.Random.natural(100, 300)
              }, {
                name: '5月',
                value: Mock.Random.natural(100, 300)
              }, {
                name: '6月',
                value: Mock.Random.natural(100, 300)
              }, {
                name: '7月',
                value: Mock.Random.natural(100, 300)
              }, {
                name: '8月',
                value: Mock.Random.natural(100, 300)
              }, {
                name: '9月',
                value: Mock.Random.natural(100, 300)
              }, {
                name: '10月',
                value: Mock.Random.natural(100, 300)
              }, {
                name: '11月',
                value: Mock.Random.natural(100, 300)
              }, {
                name: '12月',
                value: Mock.Random.natural(100, 300)
              }, {
                name: '1月',
                value: Mock.Random.natural(100, 300)
              }, {
                name: '2月',
                value: Mock.Random.natural(100, 300)
              }]
            }
          },
          block2: {
            title: '重点产品分布',
            chart1: {
              title: '重点产品分布分析',
              dimensions: ['name', 'value'],
              symbolSize: 8,
              type: ['bar'],
              legend: [''],
              units: ['万个'],
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
              )],
              data: [{
                name: '水泥',
                value: Mock.Random.natural(100, 300)
              }, {
                name: '钢筋',
                value: Mock.Random.natural(100, 300)
              }, {
                name: '电线',
                value: Mock.Random.natural(100, 300)
              }, {
                name: '危化品',
                value: Mock.Random.natural(100, 300)
              }, {
                name: '食品',
                value: Mock.Random.natural(100, 300)
              }, {
                name: '食品包装',
                value: Mock.Random.natural(100, 300)
              }, {
                name: ' 砂轮',
                value: Mock.Random.natural(100, 300)
              }, {
                name: '防爆电气',
                value: Mock.Random.natural(100, 300)
              }, {
                name: '容器',
                value: Mock.Random.natural(100, 300)
              }]
            }
          }

        },
        center: {
          title: '事中监管',
          title1: '质量监督',
          block1: {
            title1: '食品监督检查',
            title2: '棉花公正检验量',
            title3: ' ',
            tab: [
              {
                title: '非棉纤维公正检验量',
                id: 1
              },
              {
                title: '棉花等纤维质量监督检查',
                id: 2
              }
            ],
            text1: {
              data: [
                {
                  name: '检查企业',
                  value: '3564',
                  unit: '家'
                },
                {
                  name: '发现问题企业',
                  value: '1082',
                  unit: '家'
                },
                {
                  name: '督促整改',
                  value: '890',
                  unit: '家'
                },
                {
                  name: '查处违法企业',
                  value: '290',
                  unit: '家'
                }
              ]
            },
            text2: {
              data: [
                {
                  name: '新棉',
                  value: '345.4',
                  unit: '万吨'
                },
                {
                  name: '储备棉(轮出)',
                  value: '32.3',
                  unit: '万吨'
                },
                {
                  name: '储备棉(轮入)',
                  value: '55.4',
                  unit: '万吨'
                },
                {
                  name: '期货棉',
                  value: '856',
                  unit: '万吨'
                }
              ]
            },
            text3: [{
              title: '纯羊毛',
              value: '354',
              unit: '吨'
            }, {
              title: '山羊原绒',
              value: '383',
              unit: '吨'
            }, {
              title: '分梳山羊绒',
              value: '434',
              unit: '吨'
            }],
            text4: [{
              title: '干茧',
              value: '971',
              unit: '吨'
            }, {
              title: '生丝',
              value: '1690',
              unit: '吨'
            }, {
              title: '麻类纤维',
              value: '35.64',
              unit: '吨'
            }]
          },
          block2: {
            title1: '质量抽检',
            chartList: [
              {
                title: '抽查企业',
                color: ['#4A90E2', '#E26F6F', '#FF996C', '#EA4344', '#82D8FF'],
                data: [
                  {
                    name: '国抽',
                    value: '122'
                  },
                  {
                    name: '地抽',
                    value: '323'
                  }
                ],
                center: {
                  value: '2.5',
                  unit: '万家'
                }
              },
              {
                title: '不合格企业',
                color: ['#4A90E2', '#E26F6F', '#FF996C', '#EA4344', '#82D8FF'],
                data: [
                  {
                    name: '国抽',
                    value: '122'
                  },
                  {
                    name: '地抽',
                    value: '35'
                  }
                ],
                center: {
                  value: '3.5',
                  unit: '万家'
                }
              },
              {
                title: '抽查产品不合格率',
                color: ['#4A90E2', '#E26F6F', '#FF996C', '#EA4344', '#82D8FF'],
                data: [
                  {
                    name: '国抽',
                    value: '55'
                  },
                  {
                    name: '地抽',
                    value: '22'
                  }
                ],
                center: {
                  value: '0.5',
                  unit: '%'
                }
              },
              {
                title: '抽查产品',
                color: ['#4A90E2', '#E26F6F', '#FF996C', '#EA4344', '#82D8FF'],
                data: [
                  {
                    name: '国抽',
                    value: '122'
                  },
                  {
                    name: '地抽',
                    value: '67'
                  }
                ],
                center: {
                  value: '189',
                  unit: '万种'
                }
              },
              {
                title: '抽查产品批次',
                color: ['#4A90E2', '#E26F6F', '#FF996C', '#EA4344', '#82D8FF'],
                data: [
                  {
                    name: '国抽',
                    value: '122'
                  },
                  {
                    name: '地抽',
                    value: '67'
                  }
                ],
                center: {
                  value: '189',
                  unit: '万次'
                }
              },
              {
                title: '抽查产品批次',
                color: ['#4A90E2', '#E26F6F', '#FF996C', '#EA4344', '#82D8FF'],
                data: [
                  {
                    name: '国抽',
                    value: '156'
                  },
                  {
                    name: '地抽',
                    value: '78'
                  }
                ],
                center: {
                  value: '234',
                  unit: '批次'
                }
              }
            ],
            chart2: {
              title: '不合格后处置',
              data: [{
                name: '复查不合格',
                value: Mock.Random.natural(60, 100)
              }, {
                name: '复查合格',
                value: Mock.Random.natural(60, 100)
              }, {
                name: '复查中',
                value: Mock.Random.natural(60, 100)
              }, {
                name: '其他',
                value: Mock.Random.natural(60, 100)
              }]
            },
            chart3: {
              title: '不合格产品及地区排名',
              dimensions: ['name', 'value'],
              symbolSize: 8,
              type: ['bar'],
              legend: [''],
              units: ['户数'],
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
                    color: '#50E3C2'
                  }
                ],
                false
              )],
              data: [{
                name: '北京',
                value: Mock.Random.natural(100, 300)
              }, {
                name: '河北',
                value: Mock.Random.natural(100, 300)
              }, {
                name: '海南',
                value: Mock.Random.natural(100, 300)
              }, {
                name: '吉林',
                value: Mock.Random.natural(100, 300)
              }, {
                name: '上海',
                value: Mock.Random.natural(100, 300)
              }, {
                name: '浙江',
                value: Mock.Random.natural(100, 300)
              }]
            }
          },
          block3: {
            title: '近五年国抽情况',
            chart1: {
              title: '抽查产品数',
              legend: ['食品', '工业品', '药品', '化妆品', '医疗器械'],
              ydata: [
                '2015',
                '2016',
                '2017',
                '2018',
                '2019'
              ],
              data1: [Mock.Random.natural(50, 100), Mock.Random.natural(50, 100), Mock.Random.natural(50, 100), Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
              data2: [Mock.Random.natural(50, 100), Mock.Random.natural(50, 100), Mock.Random.natural(50, 100), Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
              data3: [Mock.Random.natural(50, 100), Mock.Random.natural(50, 100), Mock.Random.natural(50, 100), Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
              data4: [Mock.Random.natural(50, 100), Mock.Random.natural(50, 100), Mock.Random.natural(50, 100), Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
              data5: [Mock.Random.natural(50, 100), Mock.Random.natural(50, 100), Mock.Random.natural(50, 100), Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
              color: ['#4A90E2', '#50E3C2', '#FF98A4', '#5DC3FF', '#B8E986']
            },
            chart2: {
              title: '不合格率趋势',
              dimensions: ['name', 'value'],
              symbolSize: 8,
              color: [new graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: 'rgba(184, 233, 134, 1)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(184, 233, 134, 0.05)'
                  }
                ],
                false
              )],
              legend: [''],
              units: ['%'],
              data: [{
                name: '4月',
                value: 5
              }, {
                name: '5月',
                value: 4
              }, {
                name: '6月',
                value: 4.5
              }, {
                name: '7月',
                value: 4
              }, {
                name: '8月',
                value: 3.5
              }, {
                name: '9月',
                value: 3
              }, {
                name: '10月',
                value: 3.4
              }, {
                name: '11月',
                value: 2.9
              }, {
                name: '12月',
                value: 2.4
              }, {
                name: '1月',
                value: 2
              }, {
                name: '2月',
                value: 2.4
              }]
            },
            chart3: {
              title: '抽查企业变化',
              dimensions: ['name', 'value'],
              symbolSize: 8,
              type: ['bar'],
              legend: [''],
              units: ['万个'],
              color: [new graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: '#FFC9D1'
                  },
                  {
                    offset: 1,
                    color: '#FF98A4'
                  }
                ],
                false
              )],
              data: [{
                name: '北京',
                value: Mock.Random.natural(100, 300)
              }, {
                name: '河北',
                value: Mock.Random.natural(100, 300)
              }, {
                name: '海南',
                value: Mock.Random.natural(100, 300)
              }, {
                name: '吉林',
                value: Mock.Random.natural(100, 300)
              }, {
                name: '上海',
                value: Mock.Random.natural(100, 300)
              }, {
                name: '浙江',
                value: Mock.Random.natural(100, 300)
              }]
            }
          }
        },
        right: {
          block1: {
            title: '舆情监测与防控',
            tab: [
              {
                title: '口罩舆情',
                id: 1
              },
              {
                title: '疫苗舆情',
                id: 2
              }
            ],
            news: {
              newsTextTitle: '事件概览'
            },
            chart1: {
              title: '',
              dimensions: ['name', 'value'],
              symbolSize: 8,
              color: [new graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: 'rgba(50, 197, 255, 1)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(0,0,0,0)'
                  }
                ],
                false
              )],
              legend: [''],
              units: ['万个'],
              data: [{
                name: '3月',
                value: Mock.Random.natural(100, 300)
              }, {
                name: '4月',
                value: Mock.Random.natural(100, 300)
              }, {
                name: '5月',
                value: Mock.Random.natural(100, 300)
              }, {
                name: '6月',
                value: Mock.Random.natural(100, 300)
              }, {
                name: '7月',
                value: Mock.Random.natural(100, 300)
              }, {
                name: '8月',
                value: Mock.Random.natural(100, 300)
              }, {
                name: '9月',
                value: Mock.Random.natural(100, 300)
              }, {
                name: '10月',
                value: Mock.Random.natural(100, 300)
              }, {
                name: '11月',
                value: Mock.Random.natural(100, 300)
              }, {
                name: '12月',
                value: Mock.Random.natural(100, 300)
              }, {
                name: '1月',
                value: Mock.Random.natural(100, 300)
              }, {
                name: '2月',
                value: Mock.Random.natural(100, 300)
              }]
            }
          }
        }
      },
      mapIndex: 0,
      quShow: 1,
      isShowMap: 1,
      gongdangList: {},
      mapTab: [{
        name: '生产企业',
        value: 0
      }, {
        name: '检验机构',
        value: 1
      }, {
        name: '发证企业',
        value: 2
      }, {
        name: '异常企业',
        value: 3
      }, {
        name: '失信企业',
        value: 4
      }, {
        name: '重点产品',
        value: 5
      }],
      mapTabActive: 0,
      mapNumber: [{
        name: '重点产品目录',
        value: 25,
        unit: '种'
      }, {
        name: '全国生产企业',
        value: 3187,
        unit: '万家'
      }, {
        name: '工许获证企业',
        value: 3740,
        unit: '家'
      }, {
        name: '国抽承检机构',
        value: 1000,
        unit: '家'
      }, {
        name: '标准',
        value: 435,
        unit: '项'
      }, {
        name: '检验项目',
        value: 3715,
        unit: '项'
      }, {
        name: '检测方法',
        value: 100,
        unit: '种'
      }],
      echartShow: 1
    }
  },
  mounted () {
  },
  methods: {
    changeTabViewTag (data) {
      console.log(data)
      this.echartShow = data.id
    },
    changeTabViewTagTwo (data) {
      console.log(data)
    },
    MapChange (i) {
      this.mapIndex = i
    }
  }
}
</script>
<style lang="less">
.deptIndex {
    padding: 15px 20px;
    color: #ffffff;

    .productIndexPTop {
        padding-top: 10px;
    }

    .shizhongTextH {
        height: calc((100% - 10px) / 4);
    }

    .produtText {
        text-indent: 10px;
    }

    .produtTextTitle {
        font-size: 18px;
        padding-bottom: 8px;
    }

    .produtListHeight {
        height: calc((100% - 25px) / 2);
    }

    .produtCont {
        height: calc(100% - 20px);
    }

    .rightTabH {
        height: calc(100% - 35px);
    }

    .main-title {
        height: calc(100% - 28px);
        position: relative;

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

    .xy_syj {
        position: absolute;
        top: 25px;
        right: 10px;
        padding: 3px 10px;
        background: linear-gradient(180deg, rgba(5, 25, 49, 0.2) 0%, rgba(51, 75, 115, 1) 100%);
        border-radius: 4px 12px 4px 12px;
        opacity: 0.8;
        color: rgba(255, 255, 255, 1);
        font-size: 18px;
        font-weight: bold;

        span {
            font-size: 18px;
            color: rgba(255, 255, 255, 1);
            font-weight: bold;
            display: block;
            margin-top: -18px;
        }
    }

    .close {
        position: relative;
        z-index: 100;

        span {
            position: absolute;
            right: 4%;
            top: 0;
            font-size: 40px;
            color: #3FD3D6;
            cursor: pointer;
        }
    }

    .map-tab {
        position: absolute;
        bottom: 10px;
    }

    .mapHeight {
        height: calc(100% - 110px);
        margin-top: -13px;
    }
}

.positionRelative {
    position: relative;
}
</style>
