<template>
    <div class="metering full">
        <div class="metering_left w-1-3">
            <container class="full-with h-1-3" :title="page.titles.left[0]">
                <metMarket :data="page.low.text.data" class="h-1-5"></metMarket>
                <div class="h-4-5 w-1-2">
                    <pie :data="page.low.pie.data" :title="page.low.pie.title"></pie>
                </div>
                <div class="h-4-5 w-1-2">
                    <progressBar
                        :data="page.low.progressBar.data"
                        :title="page.low.progressBar.title"
                        :total="9000"
                    ></progressBar>
                </div>
            </container>
            <container class="full-with h-1-3" :title="page.titles.left[1]">
                <div class="h-4-5 full-with">
                    <div class="full-height w-1-5 left-border">
                        <div class="h-2-11"></div>
                        <div class="h-9-11">
                            <metTitle :data="page.industrial.echarts1.text1"></metTitle>
                        </div>
                    </div>
                    <div class="full-height w-2-5 left-border">
                        <metTitle2 :name="page.industrial.echarts1.text2[0]"></metTitle2>
                        <metTitle3 :data="page.industrial.echarts1.data1"></metTitle3>
                    </div>
                    <div class="full-height w-2-5 left-border">
                        <metTitle2 :name="page.industrial.echarts1.text2[1]"></metTitle2>
                        <metTitle3 :data="page.industrial.echarts1.data2"></metTitle3>
                    </div>
                </div>
                <div class="h-1-5 full-with left-buttom">
                    <div class="w-2-5 full-height left_bottom_left">
                        <div class="left-border" style="width:1px;float:right;height:100%"></div>
                        <div class="h-1-3"></div>
                        <div style="text-align:center">测量管理体系认证企业</div>
                    </div>
                    <div class="w-3-5 full-height">
                        <metTitle3 :data="page.industrial.echarts1.data3"></metTitle3>
                    </div>
                </div>
            </container>
            <container class="full-with h-1-3" :title="page.titles.left[2]">
                <div class="w-1-2 full-height">
                    <histogram
                        :data="page.industrial.echarts2.data1"
                        :yAxisIndex="page.industrial.echarts2.yAxisIndex"
                        :title="page.industrial.echarts2.title"
                        :dimensions="page.industrial.echarts2.dimensions"
                        :colors="page.industrial.echarts2.color"
                        :type="page.industrial.echarts2.type"
                        :legend="page.industrial.echarts2.legend"
                        :units="page.industrial.echarts2.units"
                    ></histogram>
                </div>
                <div class="w-1-2 full-height">
                    <metPer
                        :data="page.industrial.echarts3.data"
                        :yAxisIndex="page.industrial.echarts3.yAxisIndex"
                        :title="page.industrial.echarts3.title"
                        :dimensions="page.industrial.echarts3.dimensions"
                        :colors="page.industrial.echarts3.color"
                        :type="page.industrial.echarts3.type"
                        :legend="page.industrial.echarts3.legend"
                        :units="page.industrial.echarts3.units"

                    ></metPer>
                </div>
            </container>
        </div>
        <div class="metering_center full-height w-1-3">
            <div class="main-title text-center">
                <img class="logo" src="./images/logo.png" alt/>
                <span class="title-text">智慧监管中心</span>
            </div>
            <div class="main-contant full-width">
                <container class="full" :title="page.middle.title">
                    <div class="h-8-11">
                        <div style="height:5%">
                            <div class="w-1-2 left-title full-height">疫情防控检验情况</div>
                            <div class="w-1-2 text-right right-title full-height"></div>
                        </div>
                        <div class="h-3-10">
                            <middleText :data="page.middle.text.data1"></middleText>
                        </div>
                        <div class="h-4-10">
                            <histogram
                                :data="page.middle.echarts2.data"
                                :yAxisIndex="page.middle.echarts2.yAxisIndex"
                                :title="page.middle.echarts2.title"
                                :dimensions="page.middle.echarts2.dimensions"
                                :colors="page.middle.echarts2.color"
                                :type="page.middle.echarts2.type"
                                :legend="page.middle.echarts2.legend"
                                :units="page.middle.echarts2.units"
                            ></histogram>
                        </div>
                        <div class="h-3-10">
                            <middleText :data="page.middle.text.data2"></middleText>
                        </div>
                    </div>
                    <div class="h-3-11" style="padding-top:6%">
                        <metArea
                            :data="page.middle.chart3.data"
                            :yAxisIndex="page.middle.chart3.yAxisIndex"
                            :title="page.middle.chart3.title"
                            :dimensions="page.middle.chart3.dimensions"
                            :colors="page.middle.chart3.color"
                            :type="page.middle.chart3.type"
                            :legend="page.middle.chart3.legend"
                            :units="page.middle.chart3.units"
                        ></metArea>
                    </div>
                </container>
            </div>
        </div>
        <div class="metering_right w-1-3">
            <container class="full" :title="page.right.title">
                <div class="h-1-3">
                    <div class="w-1-2 full-height">
                        <div class="h-1-10 left-title">计量技术机构</div>
                        <div class="h-9-10" style="padding-bottom:5%">
                            <metTitle4 :data="page.right.text1"></metTitle4>
                        </div>
                    </div>
                    <div class="w-1-2 full-height">
                        <div class="h-1-10 left-title">计量技术规范（国家级）</div>
                        <div class="h-9-10" style="padding-bottom:5%">
                            <metPer2
                                :data="page.right.echarts1.data"
                                :yAxisIndex="page.right.echarts1.yAxisIndex"
                                :title="page.right.echarts1.title"
                                :dimensions="page.right.echarts1.dimensions"
                                :colors="page.right.echarts1.color"
                                :type="page.right.echarts1.type"
                                :legend="page.right.echarts1.legend"
                                :units="page.right.echarts1.units"
                            ></metPer2>
                        </div>
                    </div>
                </div>
                <div class="h-1-3">
                    <div class="w-1-2 full-height">
                        <div class="h-1-10 left-title">量传溯源</div>
                        <div class="h-9-10" style="padding-bottom:5%;position:relative;">
                            <div class="h-9-10 tixing" style="margin-left:10%;">
                                <div class="w-9-10 h-1-3 p1">
                                    <p>计量基准177项</p>
                                </div>
                                <div class="w-9-10 h-1-3 p2">
                                    <p>社会公用计量标准153项</p>
                                </div>
                                <div class="w-9-10 h-1-3 p3">
                                    <p>工作计量模具80万台件</p>
                                </div>
                            </div>
                            <span class="left_sp">量值传递</span>
                            <span class="right_sp">量值溯源</span>
                            <span></span>
                        </div>
                    </div>
                    <div class="w-1-2 full-height">
                        <div class="h-1-10 left-title">计量比对</div>
                        <div class="h-9-10" style="padding-bottom:5%">
                            <div class="h-4-10">
                                <metTitle5 :data="page.right.text2"></metTitle5>
                            </div>
                            <div class="h-6-10">
                                <metTitle6 :data="page.right.text3"></metTitle6>
                            </div>
                            <!-- <div class="h-3-10"></div> -->
                        </div>
                    </div>
                </div>
                <div class="h-1-3">
                    <div class="w-1-2 full-height">
                        <div class="full">
                            <pie :data="page.right.pie2.data" :title="page.right.pie2.title"></pie>
                        </div>
                    </div>
                    <div class="w-1-2 full-height">
                        <div class="full" style="padding-top:3%">
                            <metLine
                                :data="page.right.echarts3.data"
                                :title="page.right.echarts3.title"
                                :dimensions="page.right.echarts3.dimensions"
                                :colors="page.right.echarts3.color"
                                :type="page.right.echarts3.type"
                                :legend="page.right.echarts3.legend"
                                :units="page.right.echarts3.units "
                                :maxs="page.right.echarts3.maxs"
                            ></metLine>
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
import metMarket from './components/metMarket.vue'
import progressBar from './components/progressBar.vue'
import pie from './components/pie.vue'
import metTitle from './components/metTitle.vue'
import metTitle2 from './components/metTitle2.vue'
import metTitle3 from './components/metTitle3.vue'
import metTitle4 from './components/metTitle4.vue'
import metTitle5 from './components/metTitle5.vue'
import metTitle6 from './components/metTitle6.vue'
import histogram from './components/histogram.vue'
import metPer from './components/metPer.vue'
import metPer2 from './components/metPer2.vue'
import middleText from './components/middleText.vue'
import metArea from './components/metArea.vue'
import metLine from './components/metLine.vue'

export default {
  components: {
    metMarket,
    progressBar,
    pie,
    metTitle,
    metTitle2,
    metTitle3,
    metTitle4,
    metTitle5,
    metTitle6,
    histogram,
    metPer,
    metPer2,
    middleText,
    metArea,
    metLine
  },
  name: 'metering',
  props: [''],
  data () {
    return {
      page: {
        titles: {
          left: ['法制计量', '工业计量', '民生计量'],
          center: ['商改系列任务情况'],
          right: [
            '市场监管许可情况',
            '证照分离许可情况',
            '非公党建情况',
            '市场主体现状分析、预测'
          ]
        },
        low: {
          title: '法制计量',
          text: {
            data: [
              {
                name: '工作器具使用单位',
                value: 1789,
                unit: '家'
              },
              {
                name: '工作器具台账总数',
                value: 12.5,
                unit: '万台件'
              },
              {
                name: '检定合格率',
                value: 89.9,
                unit: '%'
              },
              {
                name: '年度同比',
                value: 5.9,
                unit: '%'
              }
            ]
          },
          pie: {
            title: '法制计量分布',
            data: [
              {
                name: '环境监测-方面',
                value: 3,
                unit: '万台件'
              },
              {
                name: '贸易结算-方面',
                value: 2,
                unit: '万台件'
              },
              {
                name: '医疗卫生-方面',
                value: 1,
                unit: '万台件'
              },
              {
                name: '安全防护-方面',
                value: 4,
                unit: '万台件'
              }
            ]
          },
          progressBar: {
            title: '强制检定全国排名TOP3',
            colors: ['#FE9E55', '#91D243', '#22AEC5'],
            data: [
              {
                name: '北京',
                value: 8279,
                unit: '万台件'
              },
              {
                name: '上海',
                value: 7279,
                unit: '万台件'
              },
              {
                name: '杭州',
                value: 6279,
                unit: '万台件'
              }
            ]
          }
        },
        industrial: {
          echarts1: {
            title: '',
            text1: ['备案生产者', '备案产品型号', '检测实验室'],
            text2: ['能效标识', '水效标识'],
            text3: [''],
            data1: [
              {
                name: '备案生产者',
                type: '能效标识',
                value1: 6578,
                unit1: '家',
                value2: 30,
                unit2: '%'
              },
              {
                name: '备案产品型号',
                type: '能效标识',
                value1: 1256,
                unit1: '家',
                value2: 30,
                unit2: '%'
              },
              {
                name: '检测实验室',
                type: '能效标识',
                value1: 1234,
                unit1: '家',
                value2: 30,
                unit2: '%'
              }
            ],
            data2: [
              {
                name: '备案生产者',
                type: '水效标识',
                value1: 6578,
                unit1: '家',
                value2: 14,
                unit2: '%'
              },
              {
                name: '备案产品型号',
                type: '水效标识',
                value1: 1789,
                unit1: '家',
                value2: 30,
                unit2: '%'
              },
              {
                name: '检测实验室',
                type: '水效标识',
                value1: 1209,
                unit1: '家',
                value2: 30,
                unit2: '%'
              }
            ],
            data3: [
              {
                name: '备案生产者',
                type: '水效标识',
                value1: 23980,
                unit1: '家',
                value2: 12,
                unit2: '%'
              }
            ]
          },
          echarts2: {
            title: '重点计量器具检定情况分析',
            yAxisIndex: 0,
            dimensions: ['name', 'value', 'value1', 'value2'],
            legend: ['使用未经检定', '检定不合格', '超过检定周期'],
            type: ['bar', 'bar', 'bar'],
            units: ['', ''],
            //  color:['#4A90E2','#FE6941','#FFD589'],
            color: [

              [{
                offset: 0, // 颜色的开始位置
                color: 'rgba(0, 118, 255, 1)' // 0% 处的颜色
              }, {
                offset: 1, // 颜色的结束位置
                color: 'rgba(80, 182, 255, 1)' // 100% 处的颜色
              }],
              [{
                offset: 0, // 颜色的开始位置
                color: 'rgba(255, 54, 0, 1)' // 0% 处的颜色
              }, {
                offset: 1, // 颜色的结束位置
                color: 'rgba(254, 165, 122, 1)' // 100% 处的颜色
              }],
              [{
                offset: 0, // 颜色的开始位置
                color: 'rgba(226, 163, 0, 1)' // 0% 处的颜色
              }, {
                offset: 1, // 颜色的结束位置
                color: 'rgba(255, 205, 157, 1)' // 100% 处的颜色
              }]

            ],
            data1: [
              {
                name: '加油机',
                value: Mock.Random.natural(100, 1300),
                value1: Mock.Random.natural(100, 700),
                value2: Mock.Random.natural(100, 500)
              },
              {
                name: '横器',
                value: Mock.Random.natural(100, 1300),
                value1: Mock.Random.natural(100, 700),
                value2: Mock.Random.natural(100, 500)
              },
              {
                name: '出租车计价器',
                value: Mock.Random.natural(100, 1300),
                value1: Mock.Random.natural(100, 700),
                value2: Mock.Random.natural(100, 500)
              },
              {
                name: '民用四表',
                value: Mock.Random.natural(100, 1300),
                value1: Mock.Random.natural(100, 700),
                value2: Mock.Random.natural(100, 500)
              },
              {
                name: '医用计量器具',
                value: Mock.Random.natural(100, 1300),
                value1: Mock.Random.natural(100, 700),
                value2: Mock.Random.natural(100, 500)
              }
            ]
          },
          echarts3: {
            title: '“C”标志各类企业主体分布',
            dimensions: ['name', 'value', 'value1'],
            legend: ['检查次数', '变化率'],
            units: ['万次', '%'],
            type: ['bar', 'line'],
            color: [
              new graphic.LinearGradient(
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
              ),
              'rgba(247, 216, 98, 1)'
            ],
            data: [
              {
                name: '纯净水',
                value: Mock.Random.natural(2000, 14000),
                value1: Mock.Random.natural(10, 40)
              },
              {
                name: '牛奶',
                value: Mock.Random.natural(2000, 14000),
                value1: Mock.Random.natural(10, 40)
              },
              {
                name: '奶粉',
                value: Mock.Random.natural(2000, 14000),
                value1: Mock.Random.natural(10, 40)
              },
              {
                name: '方便面',
                value: Mock.Random.natural(2000, 14000),
                value1: Mock.Random.natural(10, 40)
              },
              {
                name: '米',
                value: Mock.Random.natural(2000, 14000),
                value1: Mock.Random.natural(10, 40)
              },
              {
                name: '食用油',
                value: Mock.Random.natural(2000, 14000),
                value1: Mock.Random.natural(10, 40)
              },
              {
                name: '酒',
                value: Mock.Random.natural(2000, 14000),
                value1: Mock.Random.natural(10, 40)
              }
            ]
          }
        },
        middle: {
          title: '热点动态',
          text: {
            data1: [
              {
                text1:
                  '出动人员\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0',
                value: 23,
                unit: '万人次',
                text2:
                  '检定温度计量器具\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0',
                value2: 3.5,
                unit2: '万台件',
                text3: '检定温度计量器具',
                value3: 3.5,
                unit3: '万台件',
                text4: '检定或校准其他医用计量器具',
                value4: 3.5,
                unit4: '万台件',
                text5: '',
                value5: '',
                unit5: '',
                num: 1
              },
              {
                text1: '出开展计量技术服务\xa0\xa0\xa0\xa0',
                value: 2.6,
                unit: '万次',
                text2:
                  '服务医疗卫生单位\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0',
                value2: 9000,
                unit2: '家',
                text3: '',
                value3: '',
                unit3: '',
                text4: '',
                value4: '',
                unit4: '',
                text5: ' 服务其他单位\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0',
                value5: 5000,
                unit5: '家',
                num: 2
              }
            ],
            data2: [
              {
                text1: '建立\xa0\xa0',
                value: 5,
                unit: '个  技术交流平台',
                text2: '解答防疫相关仪器检定技术问题',
                value2: 850,
                unit2: '个',
                text3: '',
                value3: '',
                unit3: '',
                text4: '',
                value4: '',
                unit4: '',
                text5: '向社会公布疫情期间已提供相关标准物质\xa0\xa0',
                value5: 1400,
                unit5: '\xa0单元',
                num: 3
              },
              {
                text1:
                  '计量科普剪报\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0',
                value: 1,
                unit: '\xa0期',
                text2:
                  '企业复工复产剪报\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0',
                value2: 2,
                unit2: '\xa0期',
                text3: '计量典型人物剪报\xa0\xa0\xa0\xa0\xa0',
                value3: 3,
                unit3: '\xa0期',
                text4:
                  '计量典型事迹剪报\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0',
                value4: 1,
                unit4: '\xa0期',
                text5: '',
                value5: '',
                unit5: '',
                num: 4
              }
            ]
          },
          echarts2: {
            title: '各省疫情防控检验情况',
            yAxisIndex: 10,
            dimensions: ['name', 'value'],
            legend: ['出动人员'],
            type: ['bar'],
            units: ['单位：万人', ''],
            color: [
              [{
                offset: 0, // 颜色的开始位置
                color: 'rgba(79, 255, 148, 0.68)' // 0% 处的颜色
              }, {
                offset: 1, // 颜色的结束位置
                color: 'rgba(79, 255, 245, 0.4)' // 100% 处的颜色
              }]
            ],
            // color:['#4FFF94'],
            data: [
              {
                name: '北京',
                value: Mock.Random.natural(30, 80)
              },
              {
                name: '上海',
                value: Mock.Random.natural(30, 80)
              },
              {
                name: '河北',
                value: Mock.Random.natural(30, 80)
              },
              {
                name: '江苏',
                value: Mock.Random.natural(30, 80)
              },
              {
                name: '山东',
                value: Mock.Random.natural(30, 80)
              },
              {
                name: '四川',
                value: Mock.Random.natural(30, 80)
              },
              {
                name: '河南',
                value: Mock.Random.natural(30, 80)
              },
              {
                name: '山西',
                value: Mock.Random.natural(30, 80)
              },
              {
                name: '湖北',
                value: Mock.Random.natural(30, 80)
              },
              {
                name: '贵州',
                value: Mock.Random.natural(30, 80)
              },
              {
                name: '广州',
                value: Mock.Random.natural(30, 80)
              },
              {
                name: '云南',
                value: Mock.Random.natural(30, 80)
              },
              {
                name: '辽宁',
                value: Mock.Random.natural(30, 80)
              }
            ]
          },
          chart3: {
            title: '重点区域检查',
            dimensions: ['name', 'value', 'value2', 'value3'],
            legend: ['温度计量', '校准温度计量', '其他医用计量器具'],
            units: ['单位：万户', ''],
            type: ['line', 'line', 'line'],
            color: ['#44B77F', 'rgba(254, 158, 85, 1)', '#FE6941'],
            data: [
              {
                name: '北京',
                value: 48,
                value2: 41,
                value3: 34
              },
              {
                name: '上海',
                value: 44,
                value2: 28,
                value3: 25
              },
              {
                name: '河北',
                value: 40,
                value2: 30,
                value3: 18
              },
              {
                name: '内蒙古',
                value: 56,
                value2: 37,
                value3: 21
              },
              {
                name: '江苏',
                value: 72,
                value2: 50,
                value3: 24
              },
              {
                name: '吉林',
                value: 60,
                value2: 42,
                value3: 28
              },
              {
                name: '四川',
                value: 48,
                value2: 28,
                value3: 16
              },
              {
                name: '河南',
                value: 70,
                value2: 41,
                value3: 26
              },
              {
                name: '山西',
                value: 92,
                value2: 70,
                value3: 41
              },
              {
                name: '湖北',
                value: 72,
                value2: 41,
                value3: 36
              },
              {
                name: '贵州',
                value: 52,
                value2: 65,
                value3: 36
              },
              {
                name: '广州',
                value: 48,
                value2: 41,
                value3: 32
              },
              {
                name: '云南',
                value: 49,
                value2: 45,
                value3: 37
              },
              {
                name: '辽宁',
                value: 70,
                value2: 60,
                value3: 40
              }
            ]
          }
        },
        right: {
          title: '科学计量',
          echarts1: {
            title: '计量技术规范排名',
            dimensions: ['name', 'value', 'value1'],
            legend: ['', ''],
            units: ['', ''],
            type: ['bar', 'line'],
            color: [
              new graphic.LinearGradient(
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
              ),
              'rgba(247, 216, 98, 1)'
            ],
            data: [
              {
                name: '型式评价-大纲',
                value: Mock.Random.natural(100, 4700),
                value1: Mock.Random.natural(10, 40)
              },
              {
                name: '计量校准-规范',
                value: Mock.Random.natural(200, 600),
                value1: Mock.Random.natural(10, 40)
              },
              {
                name: '计量检定-规程',
                value: Mock.Random.natural(200, 600),
                value1: Mock.Random.natural(10, 40)
              },
              {
                name: '计量检定-系统表',
                value: Mock.Random.natural(200, 600),
                value1: Mock.Random.natural(10, 40)
              },
              {
                name: '其他',
                value: Mock.Random.natural(200, 600),
                value1: Mock.Random.natural(10, 40)
              }
            ]
          },
          text1: [
            {
              name: '依法设置',
              value: 52714,
              unit: '家'
            },
            {
              name: '依法授权',
              value: 62315,
              unit: '家'
            },
            {
              name: '国家城市能源计量中心',
              value: 22794,
              unit: '家'
            },
            {
              name: '国家产业计量测试中心',
              value: 31544,
              unit: '家'
            }
          ],
          pie2: {
            title: '一二级注册计量师占比',
            data: [
              {
                name: '一级注册-计量师',
                value: 7.5,
                unit: '万人'
              },
              {
                name: '二级注册-计量师',
                value: 2.5,
                unit: '万人'
              }
            ]
          },
          echarts3: {
            title: '近三年注册计量师统计',
            dimensions: ['name', 'value', 'value1'],
            legend: ['数量', '增长率'],
            type: ['line', 'bar'],
            units: ['', ''],
            maxs: [100, 10],
            yAxisIndex: 0,
            color: [
              [{
                offset: 0, // 颜色的开始位置
                color: '#FF8989' // 0% 处的颜色
              }, {
                offset: 1, // 颜色的结束位置
                color: '#FF8989' // 100% 处的颜色
              }],
              [{
                offset: 0, // 颜色的开始位置
                color: '#5B67FE' // 0% 处的颜色
              }, {
                offset: 1, // 颜色的结束位置
                color: '#92B1FF' // 100% 处的颜色
              }]
            ],
            data: [
              {
                name: '2018年',
                value: 40,
                value1: 5
              },
              {
                name: '2019年',
                value: 60,
                value1: 7
              },
              {
                name: '2020年',
                value: 50,
                value1: 6
              }
            ]
          },
          text2: [
            {
              name: '国际对比',
              value: 17823,
              unit: '项'
            },
            {
              name: '国内对比',
              value: 7812,
              unit: '项'
            }
          ],
          text3: [
            {
              name: '国家一级标准物质',
              value: 60,
              unit: '项'
            },
            {
              name: '国家二级标准物质',
              value: 71,
              unit: '项'
            }
          ]
        }
      }
    }
  },
  computed: {},
  beforeMount () {
  },
  mounted () {
  },
  methods: {},
  watch: {}
}
</script>
<style lang='less' scoped>
.metering {
    color: white;
}

.metering_left {
    height: 98%;
    padding: 1% 0 0 1%;
}

.metering_right {
    height: 98%;
    padding: 1% 1% 0 0;
}

//   .left-border{
//     border:1px solid;
// border-image:radial-gradient(circle, rgba(255,255,255,1), rgba(93,197,241,0)) 1 1;
//   }
.left-nothing {
    background: url("./images/bg1.png") no-repeat;
    background-size: 100% 100%;
}

.left-buttom {
    margin-top: 1.5%;
    height: 17%;
    // background: linear-gradient(180deg,
    // rgba(49, 58, 88, 1) 0%,
    // rgba(46, 54, 85, 1) 100%);
}

.main-title {
    height: 3%;

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

.metering_center {
    height: 98%;
    padding: 1% 0 0 0;
}

.main-contant {
    height: 97%;
}

.left-title {
    font-size: 18px;
    // padding-left: 1rem;
    margin-top: 1%;
}

.right-title {
    font-size: 18px;
    margin-top: 1%;
}

.tixing {
    background: url("./images/tixing.png") no-repeat;
    // background-size: 100% 100%;
}

.left_sp {
    position: absolute;
    top: 3rem;
    left: 1rem;
}

.right_sp {
    position: absolute;
    top: 3rem;
    right: 1rem;
}

.p1 {
    p {
        text-align: center;
        width: 30%;
        margin: 2.5rem auto 0;
    }
}

.p2 {
    p {
        text-align: center;
        width: 50%;
        margin: 2.5rem auto 0;
    }
}

.p3 {
    p {
        text-align: center;
        width: 50%;
        margin: 2.5rem auto 0;
    }
}

.left_bottom_left {
    border-right: 1px solid;
    border-image: radial-gradient(circle, #ffffff, rgba(93, 197, 241, 0)) 1 1;

    .left-border {
        background-image: linear-gradient(rgba(206, 235, 255, 0.2),
        rgba(183, 222, 255, 1),
        rgba(160, 210, 255, 0.18));
    }
}
</style>
