<template>
    <div class='Business full'>
        <container title="准入环境" class="w-2-7 full-height">
            <img-block class="full-height" :data="img.left"/>
            <div class="link" slot="title-right" @click="openPage(0)"></div>
        </container>
        <div class="w-3-7 full-height" style="padding-top: 60px">
            <container class="h-3-5">
                <div class="h-1-2">
                    <img-block class="full" :data="img.center"/>
                </div>
                <div class="h-1-2">
                    <div style="height: 33px;padding-left:10px">
                        <TabBottomLine :data="tab" v-model="tabSelected"/>
                    </div>
                    <div style="height: calc(100% - 33px)">
                        <ChartBarLine
                            :data="chart1.data"
                            :title="chart1.title"
                            :dimensions="chart1.dimensions"
                            :colors="chart1.color"
                            :type="chart1.type"
                            :legend="chart1.legend"
                            :units="chart1.units"
                            v-if="tabSelected===0"
                            :two-axis="false"
                        />
                        <ChartBarLine
                            :data="chart2.data"
                            :title="chart2.title"
                            :dimensions="chart2.dimensions"
                            :colors="chart2.color"
                            :type="chart2.type"
                            :legend="chart2.legend"
                            :units="chart2.units"
                            v-if="tabSelected===1"
                            :two-axis="false"
                            :bar-width="16"
                        />
                    </div>
                </div>
            </container>
            <container title="竞争环境" class="h-2-5">
                <div class="link" slot="title-right" @click="openPage(1)"></div>
                <img-block class="full" :data="img.bottom"/>
            </container>
        </div>
        <container title="消费环境" class="w-2-7 full-height">
            <div class="link" slot="title-right" @click="openPage(2)"></div>
            <img-block class="full-height" :data="img.right"/>
        </container>
        <transition name="bounce" mode="out-in">
            <BusinessDia1 class="dia" @click="closePage(0)" v-if="dia1"/>
            <BusinessDia2 class="dia" @click="closePage(1)" v-if="dia2"/>
            <BusinessDia3 class="dia" @click="closePage(2)" v-if="dia3"/>
        </transition>
    </div>
</template>

<script>
import ImgBlock from '../common/ImgBlock'
import BusinessDia1 from './Dia/BusinessDia1'
import BusinessDia2 from './Dia/BusinessDia2'
import BusinessDia3 from './Dia/BusinessDia3'
import graphic from 'echarts/lib/util/graphic'
import Mock from 'mockjs'
import ChartBarLine from '../index/components/ChartBarLine'

export default {
  name: 'Business',
  components: {
    ChartBarLine,
    BusinessDia3,
    BusinessDia2,
    BusinessDia1,
    ImgBlock
  },
  data () {
    return {
      tabSelected: 0,
      tab: [{
        name: '国际市场主体活力对标',
        value: 0
      }, {
        name: '各省市场主体活力对标',
        value: 1
      }],
      img: {
        left: {
          img: require('./BlockImg/准入环境.png'),
          width: 520 / 1.03,
          height: 1040 / 1.03
        },
        right: {
          img: require('./BlockImg/消费环境.png'),
          width: 489,
          height: 998
        },
        bottom: {
          img: require('./BlockImg/竞争环境.png'),
          width: 780 / 1.04,
          height: 376 / 1.04
        },
        center: {
          img: require('./BlockImg/yuqing.png'),
          width: 748,
          height: 258
        },
        center2: [{
          img: require('./BlockImg/国际指标.png'),
          width: 743,
          height: 209
        }, {
          img: require('./BlockImg/各省市场主体活力.png'),
          width: 746,
          height: 209
        }]
      },
      dia1: false,
      dia2: false,
      dia3: false,
      chart1: {
        title: '',
        dimensions: ['name', 'value', 'value1', 'value2', 'value3', 'value4'],
        legend: ['中国', '美国', '印度', '英国', '新加坡'],
        type: ['line', 'line', 'line', 'line', 'line'],
        units: ['指数'],
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
          name: '2015年',
          value: Mock.Random.natural(60, 100),
          value1: Mock.Random.natural(60, 100),
          value2: Mock.Random.natural(60, 100),
          value3: Mock.Random.natural(60, 100),
          value4: Mock.Random.natural(60, 100)
        }, {
          name: '2016年',
          value: Mock.Random.natural(60, 100),
          value1: Mock.Random.natural(60, 100),
          value2: Mock.Random.natural(60, 100),
          value3: Mock.Random.natural(60, 100),
          value4: Mock.Random.natural(60, 100)
        }, {
          name: '2017年',
          value: Mock.Random.natural(60, 100),
          value1: Mock.Random.natural(60, 100),
          value2: Mock.Random.natural(60, 100),
          value3: Mock.Random.natural(60, 100),
          value4: Mock.Random.natural(60, 100)
        }, {
          name: '2018年',
          value: Mock.Random.natural(60, 100),
          value1: Mock.Random.natural(60, 100),
          value2: Mock.Random.natural(60, 100),
          value3: Mock.Random.natural(60, 100),
          value4: Mock.Random.natural(60, 100)
        }, {
          name: '2019年',
          value: Mock.Random.natural(60, 100),
          value1: Mock.Random.natural(60, 100),
          value2: Mock.Random.natural(60, 100),
          value3: Mock.Random.natural(60, 100),
          value4: Mock.Random.natural(60, 100)
        }]
      },
      chart2: {
        title: '',
        dimensions: ['name', 'value'],
        legend: ['活跃度'],
        type: ['bar'],
        units: ['%'],
        color: ['#F7CB5A'],
        data: [{
          name: '北京',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '上海',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '河北',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '内蒙古',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '江苏',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '四川',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '河南',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '山西',
          value: Mock.Random.natural(60, 100)
        }, {
          name: '湖北',
          value: Mock.Random.natural(60, 100)
        }]
      }
    }
  },
  methods: {
    openPage (index) {
      if (index === 0) {
        this.dia1 = true
      }
      if (index === 1) {
        this.dia2 = true
      }
      if (index === 2) {
        this.dia3 = true
      }
    },
    closePage (index) {
      if (index === 0) {
        this.dia1 = false
      }
      if (index === 1) {
        this.dia2 = false
      }
      if (index === 2) {
        this.dia3 = false
      }
    }
  }
}
</script>

<style scoped lang="less">
.Business {
    padding: 15px 20px;
    color: #ffffff;

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

    .dia {
        position: absolute;
        background: rgba(0, 0, 0, 0.85);
        width: 100%;
        height: 100%;
        padding: 60px 67px 98px 67px;
        top: 0;
        z-index: 199;
        left: 0;
        /*width: 1786px;*/
        /*height: 922px;*/
        /*top: 60px;*/
        /*left: 67px;*/

    }

    .link {
        background-image: url("./img/icon@2x.png");
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
