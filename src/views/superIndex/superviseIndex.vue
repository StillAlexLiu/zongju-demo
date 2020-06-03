<template>
    <div class="superviseIndex full-height">
        <div class="w-1-3 full-height">
            <container title="双随机、一公开" class="center-bottom h-4-10 full-width">
                <tableMessage class="full-width h-1-5" :tabData='page.tableMessageData'/>
                <tableMessage class="full-width h-1-5" :tabData='page.tableMessageData2'/>
                <div class="full-width h-3-5">
                    <ChartTwoBar :data='page.twoBarData' :legend='true'
                                 :color="['rgba(247, 216, 98, 1)', 'rgba(74, 144, 226, 1)']" :yname="'万个'"
                                 :title="'各省本年度抽取'"/>
                </div>
            </container>
            <container title="冒名登记信息" class="center-bottom h-2-10 full-width">
                <goUnderMessage :data='page.goUnderData'/>
            </container>
            <container title="联合惩戒" class="center-bottom h-4-10 full-width">
                <tableMessage2 class="h-2-5 full-width" :data='page.goUnder2'/>
                <div class="full-width h-3-5">
                    <ChartLines :data='page.ChartLines'
                                :color="['rgba(227, 71, 90, 1)', 'rgba(255, 167, 94, 1)', 'rgba(86, 188, 255, 1)']"
                                :areaColor='[["rgba(254, 105, 65, 0.7)", "rgba(255, 174, 176, 0.2)"], ["rgba(254, 177, 65, 0.6)", "rgba(255, 167, 94, 0.2)"],["rgba(86, 188, 255, 0.68)", "rgba(86, 188, 255, 0.4)"]]'
                                :yname='"万户"' :title='"联合惩戒实有数量"'/>
                </div>
            </container>
        </div>
        <div class="w-1-3 full-height">
            <div class="full-width h-6-10 maptab1">
                <div class="title h-1-7 full-width">
                    <div class="main-title text-center">
                        <img class="logo" src="src/views/index/components/img/logo.png" alt=""/>
                        <span class="title-text">智慧监管中心</span>
                        <NumberRoll :number="page.numberRolltop" :title='mapTab[mapTabActive].name+"年报已报"' unit="万户"
                                    class="number"/>
                        <NumberRoll :number="page.numberRollbtn" :title='mapTab[mapTabActive].name+"年报率"' unit="%"
                                    class="number"/>
                    </div>
                    <TabSimpleMap class="map-tab" :data="mapTab" v-model="mapTabActive" @change="MapChange"/>
                </div>
                <div class="full-width h-6-7 showmap">
                    <ChartChinaMap :data='page.dataList'/>
                </div>
            </div>
            <container title="信用信息归集" class="center-bottom full-width h-4-10">
                <div class="full-width h-1-7">
                    <creditMessage :data='page.fxData2'/>
                </div>
                <div class="w-1-2 h-6-7">
                    <stirsList :data='page.stairsData' @fromChild="getChild"/>
                </div>
                <div class="w-1-2 h-3-7">
                    <ChartPieCircle :data="page.chart3.data" :title="page.chart3.title"/>
                </div>
                <div class="w-1-2 h-3-7">
                    <ChartVerticalBar :data='page.twoBarData2' :legend='false'
                                      :color="['rgba(247, 216, 98, 1)', 'rgba(74, 144, 226, 1)']" :xname="''"
                                      :title="'各省本年度抽取'"/>
                </div>
            </container>
        </div>
        <div class="w-1-3 full-height">
            <container title="年报情况" class="center-bottom h-4-10 full-width">
                <annalsTable :tabData='page.annalsTableData' class="h-1-5 full-width"/>
                <annalsTable :tabData='page.annalsTableData2' class="h-1-5 full-width"/>
                <div class="full-width h-3-5">
                    <ChartThree :data='page.threeBarData' :legend='true'
                                :color="['rgba(74, 144, 226, 1)', 'rgba(80, 227, 194, 1)', 'rgba(255, 213, 137, 1)']"
                                :yname="'%'" :title="'年报率'"/>
                </div>
            </container>
            <container title="公示系统" class="center-bottom h-2-10 full-width">
                <publicityTable :data='page.publicData'/>
            </container>
            <container title="信用风险分类" class="center-bottom h-4-10 full-width">
                <div class="full-width h-2-5">
                    <div class="w-1-2 full-height">
                        <fxTable :data='page.fxData'/>
                    </div>
                    <div class="w-1-2 full-height">
                        <ChartPieCircle :data="page.chart2.data" :title="'高风险行业占比'"/>
                    </div>
                </div>
                <div class="full-width h-3-5">
                    <ChartRightLines :data='page.ChartRightLines'
                                     :color="['rgba(249, 205, 93, 1)', 'rgba(97, 228, 255, 1)']"
                                     :areaColor='["rgba(249, 205, 93, 1)", "rgba(97, 228, 255, 1)"]'
                                     :yname='["风险指数", ""]' :title='"联合惩戒实有数量"'/>
                </div>
            </container>
        </div>
    </div>
</template>

<script>
import Mock from 'mockjs'
import tableMessage from './components/tableMessage'
import ChartTwoBar from './components/ChartTwoBar'
import goUnderMessage from './components/goUnderMessage'
import tableMessage2 from './components/tableMessage2'
import ChartLines from './components/ChartLines'
import annalsTable from './components/annalsTable'
import ChartThree from './components/ChartThreeBar'
import publicityTable from './components/publicityTable'
import fxTable from './components/fxTable'
import ChartPieCircle from '../index/components/ChartPieCircle'
import ChartRightLines from './components/ChartRightLines'
import creditMessage from './components/creditMessage'
import stirsList from './components/stairsList'
import ChartVerticalBar from './components/ChartVerticalBar'
import NumberRoll from '../index/components/Number/NumberRollLeft'
import TabSimpleMap from './components/TabSimpleMap'
import ChartChinaMap from './components/ChartChinaMap'

export default {
  name: 'superviseIndex',
  components: {
    tableMessage,
    ChartTwoBar,
    goUnderMessage,
    tableMessage2,
    ChartLines,
    annalsTable,
    ChartThree,
    publicityTable,
    fxTable,
    ChartPieCircle,
    ChartRightLines,
    creditMessage,
    stirsList,
    ChartVerticalBar,
    NumberRoll,
    TabSimpleMap,
    ChartChinaMap
  },
  data () {
    return {
      mapTab: [{
        name: '市场主体',
        value: 0
      }, {
        name: '外资',
        value: 1
      }, {
        name: '内资非私营',
        value: 2
      }, {
        name: '私营',
        value: 3
      }, {
        name: '个体',
        value: 4
      }, {
        name: '农专',
        value: 5
      }],
      mapTabActive: 0,
      page: {
        // tableMessageData: [
        //   {
        //     name: '本年度检查企业数',
        //     num: 332,
        //     dw: '万'
        //   }, {
        //     name: '占比',
        //     num: 8.3,
        //     dw: '%'
        //   }, {
        //     name: '有问题的企业数',
        //     num: 122,
        //     dw: '万'
        //   }, {
        //     name: '占比',
        //     num: 37,
        //     dw: '%'
        //   }
        // ],
        tableMessageData: [
          {
            name: '本年度检查企业数',
            num: 332,
            dw: '万'
          }, {
            name: '占比',
            num: 8.2,
            dw: '%'
          }, {
            name: '有问题的企业数',
            num: 123,
            dw: '万'
          }, {
            name: '占比',
            num: 36.91,
            dw: '%'
          }
        ],
        tableMessageData2: [
          {
            name: '问题发现率',
            num: Mock.Random.natural(50, 100),
            dw: '%'
          }, {
            name: '问题处置率',
            num: Mock.Random.natural(50, 100),
            dw: '%'
          }, {
            name: '抽查结果公示率',
            num: Mock.Random.natural(50, 100),
            dw: '%'
          }, {
            name: '双随机覆盖率',
            num: Mock.Random.natural(50, 100),
            dw: '%'
          }
        ],
        // twoBarData: [
        //   ['product', '本部门', '外部门'],
        //   ['北京 ', 2952, 0],
        //   ['天津', 0, 0],
        //   ['河北', 27187, 183031],
        //   ['山西', 8, 37354],
        //   ['内蒙古', 16, 1061],
        //   ['辽宁', 294, 0],
        //   ['吉林', 17, 0],
        //   ['黑龙江', 2, 0],
        //   ['上海 ', 56, 311808],
        //   ['江苏', 1818, 79183],
        //   ['浙江', 1, 0],
        //   ['安徽', 50922, 0],
        //   ['福建', 116389, 995635],
        //   ['江西', 92464, 72487],
        //   ['山东', 77162, 170578],
        //   ['河南', 1, 1265932],
        //   ['湖北', 3, 139115],
        //   ['湖南', 557, 4751],
        //   ['广东', 155188, 104401],
        //   ['广西', 27614, 283366],
        //   ['海南', 0, 0],
        //   ['重庆', 3140, 0],
        //   ['四川', 0, 20046],
        //   ['贵州', 0, 0],
        //   ['云南', 0, 116744],
        //   ['西藏', 122, 0],
        //   ['陕西', 53, 85523],
        //   ['甘肃', 44034, 59],
        //   ['青海', 430, 311],
        //   ['宁夏', 5, 2041],
        //   ['新疆', 0, 1091]
        // ],
        twoBarData: [
          ['product', '本部门', '外部门'],
          ['北京 ', Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
          ['天津', Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
          ['河北', Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
          ['山西', Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
          ['内蒙古', Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
          ['辽宁', Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
          ['吉林', Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
          ['黑龙江', Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
          ['上海 ', Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
          ['江苏', Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
          ['浙江', Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
          ['安徽', Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
          ['福建', Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
          ['江西', Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
          ['山东', Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
          ['河南', Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
          ['湖北', Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
          ['湖南', Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
          ['广东', Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
          ['广西', Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
          ['海南', Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
          ['重庆', Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
          ['四川', Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
          ['贵州', Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
          ['云南', Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
          ['西藏', Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
          ['陕西', Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
          ['甘肃', Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
          ['青海', Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
          ['宁夏', Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
          ['新疆', Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)]
        ],
        // goUnderData: [
        //   {
        //     name: '冒名企业数',
        //     num1: 2061,
        //     unit: '万户',
        //     num2: Mock.Random.natural(50, 100),
        //     showImg: Mock.Random.natural(1, 2)
        //   },
        //   {
        //     name: '帮多人挽救损失',
        //     num1: 544,
        //     unit: '万户',
        //     num2: Mock.Random.natural(50, 100),
        //     showImg: Mock.Random.natural(1, 2)
        //   },
        //   {
        //     show: true,
        //     name: '实名登记覆盖',
        //     num1: Mock.Random.natural(50, 100),
        //     num2: Mock.Random.natural(50, 100),
        //     showImg: Mock.Random.natural(1, 2)
        //   }
        // ],
        goUnderData: [
          {
            name: '冒名企业数',
            num1: 2806,
            unit: '万户',
            num2: 9.9,
            showImg: Mock.Random.natural(1, 2)
          },
          {
            name: '帮多人挽救损失',
            num1: 544,
            unit: '万户',
            num2: 8.7,
            showImg: Mock.Random.natural(1, 2)
          },
          {
            show: true,
            name: '实名登记覆盖',
            num1: Mock.Random.natural(50, 100),
            num2: Mock.Random.natural(50, 100),
            showImg: 3
          }
        ],
        // goUnder2: [
        //   {
        //     name: '严重违法',
        //     num1: 81,
        //     unit1: '万户',
        //     num2: 1.9,
        //     showImg: Mock.Random.natural(1, 2)
        //   },
        //   {
        //     name: '经营异常',
        //     num1: 586,
        //     unit1: '万户',
        //     num2: 14,
        //     showImg: Mock.Random.natural(1, 2)
        //   },
        //   {
        //     name: '外部门黑名单',
        //     num1: 3065,
        //     unit1: '户',
        //     num2: 77,
        //     showImg: Mock.Random.natural(1, 2)
        //   }
        // ],
        goUnder2: [
          {
            name: '严重违法',
            num1: Mock.Random.natural(50, 100),
            unit1: '万户',
            num2: 8.9,
            showImg: Mock.Random.natural(1, 2)
          },
          {
            name: '经营异常',
            num1: Mock.Random.natural(50, 100),
            unit1: '万户',
            num2: 9.9,
            showImg: Mock.Random.natural(1, 2)
          },
          {
            name: '外部门黑名单',
            num1: Mock.Random.natural(50, 100),
            unit1: '万户',
            num2: 10.4,
            showImg: Mock.Random.natural(1, 2)
          }
        ],
        // ChartLines: {
        //   legend: ['严重违法', '经营异常', '外部门黑名单'],
        //   xdata: ['2020/2/18', '2020/2/19', '2020/2/20', '2020/2/21', '2020/2/22', '2020/2/23', '2020/2/24', '2020/2/25', '2020/2/26', '2020/2/27', '2020/2/28', '2020/2/29', '2020/3/1', '2020/3/2', '2020/3/3', '2020/3/4', '2020/3/5', '2020/3/6', '2020/3/7', '2020/3/8', '2020/3/9', '2020/3/10', '2020/3/11', '2020/3/12', '2020/3/13', '2020/3/14', '2020/3/15', '2020/3/16', '2020/3/17', '2020/3/18', '2020/3/19'],
        //   ydata1: [814761, 814731, 814695, 814653, 814591, 814575, 814571, 814522, 814466, 814392, 814327, 814242, 814216, 814209, 814115, 814018, 813900, 813784, 813651, 813607, 813602, 813519, 813395, 813245, 813120, 812979, 812867, 812858, 812797, 812671, 812564],
        //   ydata2: [Mock.Random.natural(700000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000)],
        //   ydata3: [Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(70000, 80000)]
        // },
        ChartLines: {
          legend: ['严重违法', '经营异常', '外部门黑名单'],
          xdata: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          ydata1: [270, 340, 290, 270, 250, 240, 190, 170, 160, 130, 120, 60],
          ydata2: [199, 270, 260, 234, 220, 190, 170, 230, 200, 180, 175, 222],
          ydata3: [130, 100, 130, 140, 145, 110, 90, 130, 110, 60, 120, 130]
          // xdata: ['2020/2/18', '2020/2/19', '2020/2/20', '2020/2/21', '2020/2/22', '2020/2/23', '2020/2/24', '2020/2/25', '2020/2/26', '2020/2/27', '2020/2/28', '2020/2/29', '2020/3/1', '2020/3/2', '2020/3/3', '2020/3/4', '2020/3/5', '2020/3/6', '2020/3/7', '2020/3/8', '2020/3/9', '2020/3/10', '2020/3/11', '2020/3/12', '2020/3/13', '2020/3/14', '2020/3/15', '2020/3/16', '2020/3/17', '2020/3/18', '2020/3/19'],
          // ydata1: [Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000),Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000),  Mock.Random.natural(60000, 80000)],
          // ydata2: [Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000),Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000),  Mock.Random.natural(60000, 80000)],
          // ydata3: [Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000),Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000), Mock.Random.natural(60000, 80000), Mock.Random.natural(70000, 80000),  Mock.Random.natural(60000, 80000)]
        },
        // annalsTableData: [
        //   {
        //     name: '市场监管已报',
        //     num: 674,
        //     dw: '万'
        //   }, {
        //     name: '统计已报',
        //     num: 674,
        //     dw: '万'
        //   }, {
        //     name: '社保已报',
        //     num: 674,
        //     dw: '万'
        //   }, {
        //     name: '外资已报',
        //     num: 2.9,
        //     dw: '万'
        //   }, {
        //     name: '海关已报',
        //     num: Mock.Random.natural(50, 110),
        //     dw: '万'
        //   }
        // ],
        annalsTableData: [
          {
            name: '市场监管已报',
            num: Mock.Random.natural(300, 600),
            dw: '万'
          }, {
            name: '统计已报',
            num: Mock.Random.natural(300, 600),
            dw: '万'
          }, {
            name: '社保已报',
            num: Mock.Random.natural(300, 600),
            dw: '万'
          }, {
            name: '外资已报',
            num: Mock.Random.natural(300, 600),
            dw: '万'
          }, {
            name: '海关已报',
            num: Mock.Random.natural(50, 110),
            dw: '万'
          }
        ],
        // annalsTableData2: [
        //   {
        //     name: '纳税总额',
        //     num: 207,
        //     dw: '亿'
        //   }, {
        //     name: '从业人数',
        //     num: 9638,
        //     dw: '万'
        //   }, {
        //     name: '参保人员',
        //     num: 20,
        //     dw: '亿'
        //   }, {
        //     name: '上市公司',
        //     num: 3,
        //     dw: '万'
        //   }, {
        //     name: '海关已报',
        //     num: Mock.Random.natural(50, 110),
        //     dw: '万'
        //   }
        // ],
        annalsTableData2: [
          {
            name: '纳税总额',
            num: Mock.Random.natural(300, 600),
            dw: '亿'
          }, {
            name: '从业人数',
            num: 9638,
            dw: '万'
          }, {
            name: '参保人员',
            num: 2,
            dw: '亿'
          }, {
            name: '上市公司',
            num: 3,
            dw: '万'
          }, {
            name: '会计电算化',
            num: 50,
            dw: '万'
          }
        ],
        // threeBarData: [
        //   ['product', '企业', '外资', '海关'],
        //   ['2012 ', Mock.Random.natural(50, 100), Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
        //   ['2013', Mock.Random.natural(50, 100), Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
        //   ['2014', Mock.Random.natural(50, 100), Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
        //   ['2015', Mock.Random.natural(50, 100), Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
        //   ['2016 ', Mock.Random.natural(50, 100), Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
        //   ['2017', 91.51, 91.26, 96.41],
        //   ['2018', 93.23, 92.89, 95.32],
        //   ['2019',18.67, 11.62, 19.23]
        // ],
        threeBarData: [
          ['product', '企业', '外资', '海关'],
          ['2017', Mock.Random.natural(50, 100), Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
          ['2018', Mock.Random.natural(50, 100), Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)],
          ['2019', Mock.Random.natural(50, 100), Mock.Random.natural(50, 100), Mock.Random.natural(50, 100)]
        ],
        // publicData: [
        //   {
        //     title: '累计访问',
        //     peopleNum: 1370,
        //     unit1: '亿',
        //     day: 1.7,
        //     unit2: '亿',
        //     tb: Mock.Random.natural(10, 30),
        //     showPng: Mock.Random.natural(1, 2)
        //   }, {
        //     title: '累计查询',
        //     peopleNum: 246,
        //     unit1: '亿',
        //     day: 1520,
        //     unit2: '万',
        //     tb: Mock.Random.natural(10, 30),
        //     showPng: Mock.Random.natural(1, 2)
        //   }, {
        //     title: '累计公示',
        //     peopleNum: Mock.Random.natural(1000, 1500),
        //     unit1: '万',
        //     day: Mock.Random.natural(50, 100),
        //     unit2: '万',
        //     tb: Mock.Random.natural(10, 30),
        //     showPng: Mock.Random.natural(1, 2)
        //   }
        // ],
        publicData: [
          {
            title: '累计访问',
            peopleNum: 1370,
            unit1: '亿人次',
            day: 1.7,
            unit2: '亿人次',
            tb: Mock.Random.natural(10, 30),
            showPng: Mock.Random.natural(1, 2)
          }, {
            title: '累计查询',
            peopleNum: 264,
            unit1: '亿人次',
            day: 1520,
            unit2: '万人次',
            tb: Mock.Random.natural(10, 30),
            showPng: Mock.Random.natural(1, 2)
          }, {
            title: '累计公示',
            peopleNum: Mock.Random.natural(1000, 1500),
            unit1: '亿条',
            day: Mock.Random.natural(50, 100),
            unit2: '亿条',
            tb: Mock.Random.natural(10, 30),
            showPng: Mock.Random.natural(1, 2)
          }
        ],
        fxData: [
          {
            title: '全国风险指数',
            peopleNum: 6.5,
            dw: '',
            day: Mock.Random.natural(50, 100),
            tb: 10
          }, {
            title: '高风险企业',
            peopleNum: 1233,
            dw: '万户',
            day: Mock.Random.natural(50, 100),
            tb: 8
          }
        ],
        chart2: {
          title: '高风险行业占比',
          data: [{
            name: '制造',
            value: Mock.Random.natural(60, 100)
          }, {
            name: '房地产',
            value: Mock.Random.natural(60, 100)
          }, {
            name: '采矿',
            value: Mock.Random.natural(60, 100)
          }, {
            name: '金融',
            value: Mock.Random.natural(60, 100)
          }, {
            name: '教育',
            value: Mock.Random.natural(60, 100)
          }]
        },
        ChartRightLines: {
          legend: ['风险指数', '同比'],
          xdata: ['北京', '河北', '海南', '吉林', '上海', '浙江', '福建', '山东', '湖北', '广东', '四川', '山西'],
          ydata1: [2, 5, 5, 3, 3.1, 2.5, 2.4, 3.4, 3.8, 3.6, 3.4, 3.3],
          ydata2: [85, 58, 59, 43, 41, 40, 38, 36, 35, 40, 41, 43]
        },
        // fxData2: [
        //   {
        //     title: '信用信息归集总数',
        //     peopleNum0: Mock.Random.natural(1000, 1500),
        //     dw0: '亿条',
        //     name1: '本部门',
        //     peopleNum: 634,
        //     dw: '万条',
        //     name2: '外部门',
        //     tb: 266,
        //     dw2: '万条'
        //   }
        // ],
        fxData2: [
          {
            title: '信用信息归集总数',
            peopleNum0: Mock.Random.natural(1000, 1500),
            dw0: '亿条',
            name1: '本部门',
            peopleNum: Mock.Random.natural(1000, 1500),
            dw: '亿条',
            name2: '外部门',
            tb: Mock.Random.natural(10, 30),
            dw2: '亿条'
          }
        ],
        // stairsData: [
        //     {
        //     name: '行政许可',
        //     num: 901,
        //     unit: '万条'
        //   }, {
        //     name: '行政处罚',
        //     num: 701,
        //     unit: '万条'
        //   }, {
        //     name: '股权出质',
        //     num: 95,
        //     unit: '万条'
        //   }, {
        //     name: '动产抵押',
        //     num: 85,
        //     unit: '万条'
        //   },{
        //     name: '股权冻结',
        //     num: 84,
        //     unit: '万条'
        //   }, {
        //     name: '商标',
        //     num: 1018,
        //     unit: '万条'00
        //   }
        // ],
        stairsData: [
          {
            name: '行政许可',
            num: 901,
            unit: '万条'
          }, {
            name: '行政处罚',
            num: 701,
            unit: '万条'
          }, {
            name: '股权出质',
            num: 84,
            unit: '万条'
          }, {
            name: '动产抵押',
            num: 94,
            unit: '万条'
          }, {
            name: '股权冻结',
            num: 83,
            unit: '万条'
          }, {
            name: '商标',
            num: 102,
            unit: '万条'
          }
        ],
        chart3: {
          title: '各外部门占比',
          data: [{
            name: '国务院',
            value: Mock.Random.natural(60, 100)
          }, {
            name: '国资委',
            value: Mock.Random.natural(60, 100)
          }, {
            name: '司法',
            value: Mock.Random.natural(60, 100)
          }, {
            name: '税务员',
            value: Mock.Random.natural(60, 100)
          }, {
            name: '税务局',
            value: Mock.Random.natural(60, 100)
          }, {
            name: '其他',
            value: Mock.Random.natural(60, 100)
          }]
        },
        // twoBarData2: {
        //   title: '行政许可条数TOP5',
        //   ydata: ['建设工程规划', '餐饮服务', '特种设备使用', '烟草专卖零售', '食品经营'],
        //   xdata: [200994, 226672, 323684, 1125425, 5644788]
        // },
        twoBarData2: {
          title: '行政许可条数TOP5',
          ydata: ['建设工程规划', '餐饮服务', '特种设备使用', '烟草专卖零售', '食品经营'],
          xdata: [Mock.Random.natural(10000, 12000), Mock.Random.natural(12000, 13000), Mock.Random.natural(13000, 14000), Mock.Random.natural(14000, 15000), Mock.Random.natural(15000, 16000)]
        },
        numberRolltop: Mock.Random.natural(55, 100),
        numberRollbtn: Mock.Random.natural(55, 100),
        dataList: [
          {
            name: '南海诸岛',
            value: 900
          },
          {
            name: '北京',
            value: 1830
          },
          {
            name: '天津',
            value: 900
          },
          {
            name: '上海',
            value: 1942
          },
          {
            name: '重庆',
            value: 329
          },
          {
            name: '河北',
            value: 110
          },
          {
            name: '河南',
            value: 400
          },
          {
            name: '云南',
            value: 600
          },
          {
            name: '辽宁',
            value: 340
          },
          {
            name: '黑龙江',
            value: 330
          },
          {
            name: '湖南',
            value: 400
          },
          {
            name: '安徽',
            value: 420
          },
          {
            name: '山东',
            value: 1470
          },
          {
            name: '新疆',
            value: 200
          },
          {
            name: '江苏',
            value: 1502
          },
          {
            name: '浙江',
            value: 1890
          },
          {
            name: '江西',
            value: 692
          },
          {
            name: '湖北',
            value: 400
          },
          {
            name: '广西',
            value: 623
          },
          {
            name: '甘肃',
            value: 400
          },
          {
            name: '山西',
            value: 390
          },
          {
            name: '内蒙古',
            value: 235
          },
          {
            name: '陕西',
            value: 320
          },
          {
            name: '吉林',
            value: 500
          },
          {
            name: '福建',
            value: 1470
          },
          {
            name: '贵州',
            value: 490
          },
          {
            name: '广东',
            value: 1882
          },
          {
            name: '青海',
            value: 330
          },
          {
            name: '西藏',
            value: 300
          },
          {
            name: '四川',
            value: 520
          },
          {
            name: '宁夏',
            value: 520
          },
          {
            name: '海南',
            value: 952
          },
          {
            name: '台湾',
            value: 202
          },
          {
            name: '香港',
            value: 882
          },
          {
            name: '澳门',
            value: 882
          }
        ]
      }
    }
  },
  methods: {
    MapChange (i) {
      // 监听切换value
    },
    getChild (name) {
      if (name === '行政许可') {
        // this.page.twoBarData2 = {
        //   title: '行政许可条数TOP5',
        //   ydata: ['建设工程规划', '餐饮服务', '特种设备使用登记', '烟草专卖零售', '食品经营'],
        //   xdata: [200994, 226672, 323684, 1125425, 5644788]
        // }
        this.page.twoBarData2 = {
          title: '行政许可条数TOP5',
          ydata: ['建设工程规划', '餐饮服务', '特种设备使用登记', '烟草专卖零售', '食品经营'],
          xdata: [Mock.Random.natural(10000, 12000), Mock.Random.natural(12000, 13000), Mock.Random.natural(13000, 14000), Mock.Random.natural(14000, 15000), Mock.Random.natural(15000, 16000)]
        }
      } else if (name === '行政处罚') {
        // this.page.twoBarData2 = {
        //   title: '行政处罚条数TOP5',
        //   ydata: ['南京苏宁易购', '北京趣拿', '北京晨报社', '北京京东世纪', '北京日报社'],
        //   xdata: [217, 472, 585, 743, 2400]
        // }
        this.page.twoBarData2 = {
          title: '行政处罚条数TOP5',
          ydata: ['南京苏宁易购', '北京趣拿', '北京晨报社', '北京京东世纪', '北京日报社'],
          xdata: [Mock.Random.natural(10000, 11000), Mock.Random.natural(11000, 12000), Mock.Random.natural(12000, 13000), Mock.Random.natural(13000, 14000), Mock.Random.natural(14000, 15000)]
        }
      } else if (name === '股权出质') {
        this.page.twoBarData2 = {
          title: '股权出质条数TOP5',
          ydata: ['浙江', '北京', '上海', '广东', '安徽'],
          xdata: [Mock.Random.natural(10000, 12000), Mock.Random.natural(12000, 13000), Mock.Random.natural(13000, 14000), Mock.Random.natural(14000, 15000), Mock.Random.natural(15000, 16000)]
        }
      } else if (name === '动产抵押') {
        this.page.twoBarData2 = {
          title: '动产抵押条数TOP5',
          ydata: ['浙江', '北京', '上海', '广东', '安徽'],
          xdata: [Mock.Random.natural(10000, 11000), Mock.Random.natural(11000, 12000), Mock.Random.natural(12000, 13000), Mock.Random.natural(13000, 14000), Mock.Random.natural(14000, 15000)]
        }
      } else if (name === '股权冻结') {
        this.page.twoBarData2 = {
          title: '股权冻结条数TOP5',
          ydata: ['浙江', '北京', '上海', '广东', '安徽'],
          xdata: [Mock.Random.natural(10000, 12000), Mock.Random.natural(12000, 13000), Mock.Random.natural(13000, 14000), Mock.Random.natural(14000, 15000), Mock.Random.natural(15000, 16000)]
        }
      } else if (name === '商标') {
        this.page.twoBarData2 = {
          title: '商标条数TOP5',
          ydata: ['浙江', '北京', '上海', '广东', '安徽'],
          xdata: [Mock.Random.natural(10000, 11000), Mock.Random.natural(11000, 12000), Mock.Random.natural(12000, 13000), Mock.Random.natural(13000, 14000), Mock.Random.natural(14000, 15000)]
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.superviseIndex {
    padding: 15px 20px;
    color: #ffffff;

    .main-title {
        position: relative;

        .xy_syj {
            position: absolute;
            top: 25px;
            right: 10px;
            width: 100px;
            background: linear-gradient(180deg, rgba(5, 25, 49, 0.2) 0%, rgba(51, 75, 115, 1) 100%);
        }

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

    .maptab1 {
        position: relative;
    }

    .map-tab {
        position: absolute;
        bottom: 10px;
    }

    .showmap {
        position: absolute;
        top: 30px;
    }
}
</style>
