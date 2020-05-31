<template>
    <div class="Index full">
        <div class="side full-height w-2-7">
            <container :title="page.left.block1.title" class=" full-width h-1-4">
                <group-zhun-ru class="h-3-10" :data="page.left.block1.text.data"/>
                <div class="h-7-10">
                    <div class="w-1-4 full-height">
                        <ChartGauge :data="page.left.block1.chart" @click="openDia()"/>
                    </div>
                    <div class="w-3-4 full-height">
                        <ChartBarLine
                                :data="page.left.block1.chart1.data"
                                :title="page.left.block1.chart1.title"
                                :dimensions="page.left.block1.chart1.dimensions"
                                :colors="page.left.block1.chart1.color"
                                :type="page.left.block1.chart1.type"
                                :legend="page.left.block1.chart1.legend"
                                :units="page.left.block1.chart1.units"
                        />
                    </div>
                </div>
            </container>
            <container :title="page.left.block2.title" class=" full-width h-1-4">
                <div class="h-1-4">
                    <GroupJingZheng :data="page.left.block2.text"/>
                </div>
                <div class="h-3-4">
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
                <div class="w-4-9 full-height">
                    <ChartWord/>
                </div>
                <div class="w-5-9 full-height">
                    <GroupXiaoFei class="h-3-10" :data="page.left.block3.text"/>
                    <div class="h-7-10">
                        <ChartGroupHuanJing :title="page.left.block3.chart1.title"
                                            :data="page.left.block3.chart1.data"/>
                    </div>
                </div>
            </container>
            <container :title="page.left.block4.title" class=" full-width h-1-4">
                <template v-if="page.name==='china'">
                    <div class="full-height w-4-10">
                        <BlockChanQuan :data="page.left.block4.text1"/>
                    </div>
                    <div class="full-height w-6-10">
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

            <div class="h-3-4">
                <div class="title h-1-7">
                    <!--                        <div class="title h-1-7" style="background-color: #42b983">-->
                    <div class="main-title text-center">
                        <img class="logo" src="./components/img/logo.png" alt=""/>
                        <span class="title-text">智慧监管中心</span>
                    </div>
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
            <container
                    :title="[page.center.block1.title,page.center.block2.title,page.center.block3.title][centerIndex]"
                    class="center-bottom full-width h-1-4">
                <trans class="full-height float-left" :data1="page.center.block1" :data2="page.center.block2"
                       :data3="page.center.block3"
                       :selectIndex="centerIndex"
                       style="width: calc(100% - 20px)"
                />
                <tab-point style="width: 20px" class="float-left full-height" :max="3" v-model="centerIndex"/>
            </container>
        </div>
        <div class="side full-height w-2-7">
            <container :title="page.right.block1.title" class=" full-width h-1-4">
                <GroupShiPin class="h-2-5" :data="page.right.block1.text"/>
                <div class="h-3-5 " style="padding:0">
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
                <div class="w-3-5 full-height">
                    <BlockTeZhongSheBei :data="page.right.block3.charts"/>
                </div>
                <div class="w-2-5 full-height">
                    <ChartPieCircleDouble :data="page.right.block3.chart2.data"
                                          :title="page.right.block3.chart2.title"/>
                </div>
            </container>
            <container :title="page.right.block4.title" class=" full-width h-1-4">
                <div class="h-2-7">
                    <GroupGongYe :data="page.right.block4.text"/>
                </div>
                <div class="h-5-7">
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

        <transition name="bounce" mode="out-in">
            <MapDia1 class="dia" v-if="dia1" @close="close"/>
            <MapDia2 class="dia" v-if="dia2" @close="close"/>
            <HuoLiDia class="dia" v-if="dia3" @close="close"/>
        </transition>
    </div>
</template>

<script>
import EchartsMap from './components/EchartsMap'
import TabSimpleMap from '../components/tab/TabSimpleMap'
import GroupZhunRu from './components/GroupZhunRu'
import ChartGauge from './components/ChartGauge'
import ChartBarLine from './components/ChartBarLine'
import GroupJingZheng from './components/GroupJingZheng'
import ChartAreaLine from './components/ChartAreaLine'
import ChartGroupHuanJing from './components/ChartGroupHuanJing'
import GroupXiaoFei from './components/GroupXiaoFei'
import BlockChanQuan from './components/BlockChanQuan'
import GroupChanQuan from './components/GroupChanQuan'
import ChartWord from './components/ChartWordCloub'
import ChartAcross from './components/ChartAcross'
import GroupShiPin from './components/GroupShiPin'
import BlockShiPin from './components/BlockShiPin'
import ChartCustomPie from './components/ChartCustomPie'
import GroupYaoPin from './components/GroupYaoPin'
import ChartGroup from './components/ChartGroup'
import BlockTeZhongSheBei from './components/BlockTeZhongSheBei'
import ChartPieCircleDouble from './components/ChartPieCircleDouble'
import GroupGongYe from './components/GroupGongYe'
import MapDia1 from './components/DialogImg/MapDia1'
import MapDia2 from './components/DialogImg/MapDia2'
import EchartsMapRenWu from './components/EchartsMapRenWu'
import NumberRoll from './components/Number/numberRoll'
import MapText from './components/mapText'
import Trans from './components/trans'
import TabPoint from '../components/tab/TabPoint'
import HuoLiDia from './components/DialogImg/HuoLiDia'

export default {
  name: 'Index',
  components: {
    HuoLiDia,
    TabPoint,
    Trans,
    MapText,
    NumberRoll,
    EchartsMapRenWu,
    MapDia2,
    MapDia1,
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
      }],
      options: []
    }
  },
  props: {
    page: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  mounted () {
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
    }

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
