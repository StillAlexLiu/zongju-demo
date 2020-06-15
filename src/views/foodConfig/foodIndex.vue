<template>
    <div class="deptIndex full">
        <div class="side full-height w-2-7">
            <container class=" full-width h-7-11" :title="page.left.block1.title">
                <foodChangeTitle :data="page.left.block1.tab"></foodChangeTitle>
                <foodMarketZT :data="page.left.block1.text.data" class="h-1-8"/>
                <foodChangeTitle :data="page.left.block1.tab1"></foodChangeTitle>
                <foodMarketZT :data="page.left.block1.text1.data" class="h-1-8"/>
                <foodChangeTitle :data="page.left.block1.tab2"></foodChangeTitle>
                <foodMarketZB :data="page.left.block1.text2.data" class="h-1-8"/>
                <div class="borderbg w-7-9 h-1-10"></div>
                <div class=" w-1-3 h-3-8">
                    <foodMarketCard class="full-width h-5-8" :data="page.left.block1.cardList"></foodMarketCard>
                    <foodMarketMain class="w-8-9 h-3-9" :data="page.left.block1.card"></foodMarketMain>
                </div>
                <div class=" w-1-3 h-3-8">
                    <div class=" w-12-13 h-7-9 foodbg"></div>
                    <div class=" w-11-12 h-1-10 foodbottnbg"></div>
                </div>
                <div class=" w-1-3 h-3-8">
                    <foodMarketCard class="full-width h-5-8" :data="page.left.block1.cardList1"></foodMarketCard>
                    <foodMarketMainRight class="w-8-9 h-3-9" :data="page.left.block1.card1"></foodMarketMainRight>
                </div>
            </container>
            <container class=" full-width h-4-11" :title="page.left.block2.title">
                <foodChangetab :data="page.left.block1.tab3" v-on:foodChangetabView="foodChangetabView"></foodChangetab>
                <div class="h-3-9">
                    <foodMarketTS :data="page.left.block2.text.data"></foodMarketTS>
                </div>
                <div class="h-5-8">
                    <foodChartJG
                        :data="page.left.block2.chart1.data"
                        :title="page.left.block2.chart1.title"
                        :dimensions="page.left.block2.chart1.dimensions"
                        :colors="page.left.block2.chart1.color"
                        :type="page.left.block2.chart1.type"
                        :legend="page.left.block2.chart1.legend"
                        :units="page.left.block2.chart1.units"
                    >
                    </foodChartJG>
                </div>
            </container>
        </div>
        <div class="center full-height  w-3-7">
            <div class="map h-7-11 full-width">
                <div class="h-1-6 full-width">
                    <div class="h-1-2 full-width">
                        <CenterTitle/>
                    </div>
                    <div class="h-1-2 full-width">
                        <mapList :data="page.center.mapList"
                                 @foodChangetabMap="ChangeMapType(0)"
                                 v-model="mapIndex"></mapList>
                    </div>
                    <div class="titleBg"><p>{{mapIndex.name}}</p></div>
                </div>
                <div class="h-5-6 full-width">
                    <foodEchartsMap :mapIndex='mapItem' :map-type="mapType" @click="mapClick"/>
                </div>
            </div>
            <container class=" full-width h-4-11" :title="page.center.block.title">
                <div class="full-width h-4-7">
                    <foodChartBarLine
                        :data="page.center.chart2.data"
                        :title="page.center.chart2.title"
                        :dimensions="page.center.chart2.dimensions"
                        :colors="page.center.chart2.color"
                        :type="page.center.chart2.type"
                        :legend="page.center.chart2.legend"
                        :units="page.center.chart2.units"></foodChartBarLine>
                </div>
                <div class="h-3-7">
                    <foodChangeTitle :data="page.center.tab" class="foot-center-title"></foodChangeTitle>
                    <foodTable class="full-width food-center-title-sub" :data="page.center.block.table"
                               :data1="page.center.block.table1"></foodTable>
                </div>
            </container>
        </div>
        <div class="side full-height w-2-7">
            <container class=" full-width h-7-11" :title="page.right.block1.title">
                <foodMarketJC :data="page.right.block1.text5.data" class="full-width h-2-6"
                              @click="rightClick"
                              style="padding:10px"></foodMarketJC>
                <foodJgxk :data="page.right.block1.text.data" class=" full-width h-1-6"></foodJgxk>
                <foodJgxk :data="page.right.block1.text1.data" class=" full-width h-1-6"></foodJgxk>
                <foodJgxk :data="page.right.block1.text2.data" class=" full-width h-1-6"></foodJgxk>
                <foodMarketZBR :data="page.right.block1.text3.data" class="full-width h-1-6" style="padding:10px"/>
            </container>
            <container class=" full-width h-4-11" :title="page.right.block2.title">
                <div class="titile_box h-1-6">{{page.right.block2.main.title}}<span class="number-font">{{page.right.block2.main.value}}</span><span
                    class="unit-font">{{page.right.block2.main.unit}}</span></div>
                <div class="h-5-6">
                    <div class="w-1-2 full-height">
                        <div class="JGbg w-1-1 h-6-8">
                            <div class="text-center h-6-12" style="padding-top:45px;">
                                <div>责令停产</div>
                                <div><span class='number-font'>120</span><span class='unit-font'>件</span></div>
                            </div>
                            <div class="text-center h-3-11" style="padding-top:0px;">
                                <div>罚款</div>
                                <div><span class='number-font'>200</span><span class='unit-font'>万元</span></div>
                            </div>
                            <div class="text-center h-3-12">
                                <div>警告</div>
                                <div><span class='number-font'>902</span><span class='unit-font'>件</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="w-1-2 full-height">
                        <foodChartPieR
                            :data="page.right.block2.chart1.data"
                            :title="page.right.block2.chart1.title"
                        />
                    </div>
                </div>
            </container>
        </div>

        <transition name="bounce" mode="out-in">
            <FoodDia class="dia" v-if="dia1" @close="close"/>
        </transition>
    </div>
</template>
<script>
import Mock from 'mockjs'
import graphic from 'echarts/lib/util/graphic'
import foodChangeTitle from './components/foodChangeTitle' // 子标题
import foodChangetab from './components/foodChangetab' // 切换
import foodMarketZT from './components/foodMarketZT' // 卡片
import foodMarketZB from './components/foodMarketZB' // 卡片
import mapList from './components/mapList' // map文字
import foodEchartsMap from './components/foodEchartsMap' // map
import foodJgxk from './components/foodJgxk' // 指标
import foodMarketJC from './components/foodMarketJC' // 指标
import foodChartBarLine from './components/foodChartBarLine' // 柱折混合图
import foodChartPieR from './components/foodChartPieR' // 饼图
import foodTable from './components/foodTable' // 表格
import foodChartJG from './components/foodChartJG' // 表格
import foodMarketTS from './components/foodMarketTS' // 信息提示
import foodMarketCard from './components/foodMarketCard' // 信息list
import foodMarketMain from './components/foodMarketMain' // 信息card
import foodMarketMainRight from './components/foodMarketMainRight' // 信息card
import foodMarketZBR from './components/foodMarketZBR'
import CenterTitle from '../common/CenterTitle'
import FoodDia from './components/FoodDia' // 信息card
export default {
  name: 'foodIndex',
  components: {
    FoodDia,
    CenterTitle,
    foodChangeTitle,
    foodChangetab,
    foodMarketZT,
    foodMarketZB,
    mapList,
    foodChartBarLine,
    foodEchartsMap,
    foodMarketJC,
    foodJgxk,
    foodChartPieR,
    foodTable,
    foodChartJG,
    foodMarketTS,
    foodMarketCard,
    foodMarketMain,
    foodMarketMainRight,
    foodMarketZBR
  },
  data () {
    return {
      mapIndex: {},
      mapType: 0,
      dia1: false,
      mapItem: {},
      titleName: '特食注册备案地区分布',
      page: {
        left: {
          block1: {
            title: '市场准入情况',
            tab: [{
              title: '生产许可',
              id: 1
            }],
            tab1: [{
              title: '经营许可',
              id: 1
            }],
            tab2: [{
              title: '特殊食品注册备案',
              id: 1
            }],
            tab3: [{
              title: '生产日常监管',
              id: 1
            }, {
              title: '经营日常监管',
              id: 2
            }],
            text: {
              data: [
                {
                  name: '全国食品经营企业',
                  value: '1626',
                  unit: '万家'
                },
                {
                  name: '本月新增',
                  value: '12',
                  unit: '家'
                },
                {
                  name: '本周新增',
                  value: '23',
                  unit: '家'
                },
                {
                  name: '平均审批时间',
                  value: '3',
                  unit: '天'
                }
              ]
            },
            text1: {
              data: [
                {
                  name: '全国食品生产企业',
                  value: '1233',
                  unit: '万家'
                },
                {
                  name: '本月新增',
                  value: '12',
                  unit: '家'
                },
                {
                  name: '本周新增',
                  value: '23',
                  unit: '家'
                },
                {
                  name: '平均审批时间',
                  value: '3',
                  unit: '天'
                }
              ]
            },
            text2: {
              data: [
                {
                  name: '全国保健食品产业',
                  value: '89',
                  unit: '万家'
                },
                {
                  name: '保健食品',
                  value: '23',
                  unit: '家'
                },
                {
                  name: '本周新增',
                  value: '23',
                  unit: '家'
                },
                {
                  name: '平均审批时间',
                  value: '3',
                  unit: '天'
                }
              ]
            },
            cardList: [
              {
                name: '特医食品',
                value: 239,
                unit: '类'
              },
              {
                name: '本月新增',
                value: 25,
                unit: '家'
              },
              {
                name: '平均审批时间',
                value: 3,
                unit: '天'
              }
            ],
            cardList1: [
              {
                name: '婴配奶粉',
                value: 128,
                unit: '类 '
              },
              {
                name: '本月新增',
                value: 19,
                unit: '家'
              },
              {
                name: '平均审批时间',
                value: 3,
                unit: '天'
              }
            ],
            card: [
              {
                name: '全国特医食品企业',
                value: 64,
                unit: '万家'
              }
            ],
            card1: [
              {
                name: '全国婴配乳粉企业',
                value: 25,
                unit: '万家'
              }
            ]
          },
          block2: {
            title: '日常监管概况',
            text: {
              data: [
                {
                  name: '本年度已检查企业数',
                  value: '123',
                  unit: '家次'
                },
                {
                  name: '发现问题',
                  value: '23',
                  unit: '家'
                },
                {
                  name: '问题',
                  value: '13',
                  unit: '个'
                },
                {
                  name: '问题整改完成',
                  value: '12',
                  unit: '个'
                },
                {
                  name: '完成率',
                  value: '89',
                  unit: '%'
                }
              ]
            },
            chart1: {
              title: '行政处罚按地区统计',
              dimensions: ['name', 'value1', 'value2'],
              legend: ['企业（家）', '问题（个）'],
              type: ['line', 'line'],
              units: ['单位：家', '单位：个'],
              color: [new graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: '#FE6941'
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
                    color: '#61E4FF'
                  },
                  {
                    offset: 1,
                    color: 'rgba(0,0,0,0)'
                  }
                ],
                false
              )],
              data: [{
                name: '2019.06',
                value1: Mock.Random.natural(20, 60),
                value2: Mock.Random.natural(4, 13)
              }, {
                name: '2019.07',
                value1: Mock.Random.natural(20, 60),
                value2: Mock.Random.natural(4, 13)
              }, {
                name: '2019.08',
                value1: Mock.Random.natural(20, 60),
                value2: Mock.Random.natural(4, 13)
              }, {
                name: '2019.09',
                value1: Mock.Random.natural(20, 60),
                value2: Mock.Random.natural(4, 13)
              }, {
                name: '2019.10',
                value1: Mock.Random.natural(20, 60),
                value2: Mock.Random.natural(4, 13)
              }, {
                name: '2019.11',
                value1: Mock.Random.natural(20, 60),
                value2: Mock.Random.natural(4, 13)
              }]
            }
          }
        },
        center: {
          mapList: [
            {
              name: '特食注册备案地区分布',
              id: 0
            },
            {
              name: '经济许可地区',
              id: 1
            },
            {
              name: '生产许可地区分布',
              id: 2
            },
            {
              name: '生产许可历史变化',
              id: 3
            },
            {
              name: '经营许可历史变化',
              id: 4
            },
            {
              name: '特食注册备案历史变化',
              id: 5
            },
            {
              name: '抽检不合格率历史变化',
              id: 6
            }
          ],
          tab: [{
            title: '食品安全工作督查与评议考核',
            id: 1
          }],
          chart2: {
            title: '全国市场主体分布',
            dimensions: ['name', 'value', 'value1'],
            legend: ['批次', '不合格率'],
            units: ['次', '%'],
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
              name: '速冻食品',
              value: Mock.Random.natural(200, 500),
              value1: Mock.Random.natural(10, 60)
            }, {
              name: '淀粉及淀粉制品',
              value: Mock.Random.natural(200, 500),
              value1: Mock.Random.natural(10, 60)
            }, {
              name: '肉及肉制品',
              value: Mock.Random.natural(200, 500),
              value1: Mock.Random.natural(10, 60)
            }, {
              name: '调味品',
              value: Mock.Random.natural(200, 500),
              value1: Mock.Random.natural(10, 60)
            }, {
              name: '酒类',
              value: Mock.Random.natural(200, 500),
              value1: Mock.Random.natural(10, 60)
            }, {
              name: '粮食及其制品',
              value: Mock.Random.natural(200, 500),
              value1: Mock.Random.natural(10, 60)
            }, {
              name: '糕点',
              value: Mock.Random.natural(200, 500),
              value1: Mock.Random.natural(10, 60)
            }, {
              name: '蔬菜机器制品',
              value: Mock.Random.natural(200, 500),
              value1: Mock.Random.natural(10, 60)
            }, {
              name: '饮料',
              value: Mock.Random.natural(200, 500),
              value1: Mock.Random.natural(10, 60)
            }, {
              name: '水果及其制品',
              value: Mock.Random.natural(200, 500),
              value1: Mock.Random.natural(10, 60)
            }]
          },
          block: {
            title: '抽检食品类型分布',
            table: [{
              name: '北京',
              address: '完善食品安全监管体制机制',
              value: '98'
            }, {
              name: '上海',
              address: '完善食品安全监管体制机制',
              value: '98'
            }],
            table1: [{
              name: '浙江',
              address: '完善食品安全监管体制机制',
              value: '98'
            }, {
              name: '湖南',
              address: '完善食品安全监管体制机制',
              value: '98'
            }]
          }
        },
        right: {
          block1: {
            title: '抽检监察',
            text5: {
              data: [
                {
                  name: '年度食品安全抽检',
                  value: '3234',
                  unit: '批',
                  id: 0,
                  img: require('./img/多边形@2x.png')
                },
                {
                  name: '完成抽检批次',
                  value: '5434',
                  unit: '批',
                  id: 1,
                  img: require('./img/多边形@2x.png')
                },
                {
                  name: '抽检抽检企业',
                  value: '2100',
                  unit: '家',
                  id: 2,
                  img: require('./img/多边形@2x.png')
                },
                {
                  name: '本月新增抽检批次',
                  value: '273',
                  unit: '批',
                  id: 3,
                  img: require('./img/多边形@2x.png')
                }
              ]
            },
            text: {
              data: [
                {
                  name: '本年度监督抽检',
                  value: '132',
                  unit: '批次'
                },
                {
                  name: '总体不合格率',
                  value: '98',
                  unit: '%'
                }
              ]
            },
            text1: {
              data: [
                {
                  name: '本年度风险监测',
                  value: '132',
                  unit: '批次'
                },
                {
                  name: '问题发现',
                  value: '98',
                  unit: '个'
                }
              ]
            },
            text2: {
              data: [
                {
                  name: '本年度评价性抽检',
                  value: '132',
                  unit: '批次'
                },
                {
                  name: '总体合格率',
                  value: '98',
                  unit: '%'
                }
              ]
            },
            text3: {
              data: [
                {
                  name: '全国抽查核查处置',
                  value: '123',
                  unit: '件次'
                },
                {
                  name: '本月新增',
                  value: '13',
                  unit: '件'
                },
                {
                  name: '已完成',
                  value: '23',
                  unit: '件次'
                },
                {
                  name: '按时完成率',
                  value: '96%'
                }
              ]
            }
          },
          block2: {
            title: '市场监管许可情况',
            main: {
              title: '本年度全国食品相关行政处罚',
              value: '1886',
              unit: '件'
            },
            chart1: {
              title: '行政处罚\n按地区分布',
              data: [{
                name: '北京',
                value: Mock.Random.natural(60, 100)
              }, {
                name: '上海',
                value: Mock.Random.natural(60, 100)
              }, {
                name: '天津',
                value: Mock.Random.natural(60, 100)
              }, {
                name: '四川',
                value: Mock.Random.natural(60, 100)
              }, {
                name: '云南',
                value: Mock.Random.natural(60, 100)
              }]
            },
            chart2: {
              data: [{
                value: 1,
                name: '个人完税证明开具',
                itemStyle: {
                  color: new graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: '#FFBF54'
                      },
                      {
                        offset: 1,
                        color: '#FFBF54'
                      }
                    ],
                    false
                  )
                }
              }, {
                value: 2,
                name: '自然人登记',
                itemStyle: {
                  color: new graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: '#016EC3'
                      },
                      {
                        offset: 1,
                        color: '#016BC3'
                      }
                    ],
                    false
                  )
                }
              }, {
                value: 3,
                name: '申报总量',
                itemStyle: {
                  color: new graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: '#02AF92'
                      },
                      {
                        offset: 1,
                        color: '#02AF92 '
                      }
                    ],
                    false
                  )
                }
              }]
            }
          }
        }
      }
    }
  },
  mounted () {
  },
  methods: {
    foodChangetabView (item) {
      console.log(item)
      if (item.id === 1) {
        this.page.left.block2.text.data = [
          {
            name: '本年度已检查企业数',
            value: '123',
            unit: '家次'
          },
          {
            name: '发现问题',
            value: '23',
            unit: '家'
          },
          {
            name: '问题',
            value: '13',
            unit: '个'
          },
          {
            name: '问题整改完成',
            value: '12',
            unit: '个'
          },
          {
            name: '完成率',
            value: '89',
            unit: '%'
          }
        ]
      } else if (item.id === 2) {
        this.page.left.block2.text.data = [
          {
            name: '本年度已检查企业数',
            value: '153',
            unit: '家次'
          },
          {
            name: '发现问题',
            value: '33',
            unit: '家'
          },
          {
            name: '问题',
            value: '15',
            unit: '个'
          },
          {
            name: '问题整改完成',
            value: '15',
            unit: '个'
          },
          {
            name: '完成率',
            value: '100',
            unit: '%'
          }
        ]
      }
    },
    foodChangetabMap (item) {
      this.titleName = item.name
      // this.mapIndex = item
    },
    ChangeMapType (type) {
      this.mapType = type
    },
    rightClick (item) {
      this.ChangeMapType(1)
      this.mapItem = item
    },
    mapClick (item) {
      if (item.value[2] === 1) {
        this.dia1 = true
      }
    },
    close () {
      this.dia1 = false
    }
  },
  watch: {
    mapIndex: {
      deep: true,
      immediate: true,
      handler: function () {
        this.mapItem = this.mapIndex
      }
    }
  }
}
</script>
<style lang="less">
.deptIndex {
    padding: 15px 20px;

    .borderbg {
        margin-left: 60px;
        background-image: url('./img/分组 66@2x.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }

    .foodbg {
        background-image: url('./img/分组 56@2x.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }

    .foodbottnbg {
        margin-left: 4px;
        background-image: url('./img/分组 68@2x.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }

    .JGbg {
        margin-top: 20px;
        position: relative;
        background-image: url('./img/三角.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }

    .sssBg {
        background-image: url('./img/Rectangle@2x.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 20%;
        text-align: center;
        float: right;

        p {
            margin-top: -10px;
            padding-bottom: 5px;
        }
    }

    .titleBg {
        background-image: url('./img/矩形@2x (3).png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        text-align: center;
        width: 30%;
        margin-left: 10px;
        margin-top: 5px;
    }

    .deptPaddingTop {
        padding-top: 4%;
    }

    .titile_box {

        background: linear-gradient(270deg, rgba(51, 75, 115, 0) 0%, rgba(51, 75, 115, 0.5) 50%, rgba(51, 75, 115, 0) 100%) no-repeat top;
        background-size: 100% 30px;
        text-indent: 10px;

        span {
            padding-left: 20px;
        }
    }

    .foot-center-title {
        height: 35px;
    }

    .food-center-title-sub {
        height: calc(100% - 35px);
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

}
</style>
