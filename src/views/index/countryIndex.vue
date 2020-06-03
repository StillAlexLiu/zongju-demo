<template>
    <Index :page="data"/>
    <!--    <div>{{data}}</div>-->
</template>

<script>
import graphic from 'echarts/lib/util/graphic'
import Mock from 'mockjs'
import Index from './Index'

export default {
  name: 'countryIndex',
  components: { Index },
  data () {
    return {
      data: {
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
              title: '新设企业增长趋势分析',
              dimensions: ['name', 'value', 'value1'],
              legend: ['新设企业数量', '新设企业同比'],
              type: ['bar', 'line'],
              units: ['户数', '%'],
              color: ['#FE6941', '#32C5FF'],
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
              color: ['#91D243', '#FE6941'],
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
                name: '立案查处',
                value: '172万'
              },
              {
                name: '数违法线索',
                value: '23万'
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
  }
}
</script>

<style scoped lang="less">
.countryIndex {

}
</style>
