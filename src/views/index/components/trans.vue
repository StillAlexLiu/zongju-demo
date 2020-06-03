<template>
    <div class="trans">
        <div style="position: relative;overflow: hidden" class="full">
            <transition name="bounce-tab">
                <GroupZhiLiang :key="0" :data="data1.data" v-if="selectIndex===0" class="item"/>
                <div :key="1" class="full item" v-if="selectIndex===1">
                    <GroupZhiFa class="w-1-6 full-height" :data="data2.text"/>
                    <ChartGroup2 class="w-5-6 full-height" :data="data2.charts"
                                 :tab="data2.tab"/>
                </div>
                <div :key="2" class="full item" v-if="selectIndex===2">
                    <GroupZhongDian :data="data3.text"/>
                    <div style="height: calc(100% - 24px)">
                        <div class="full-height w-1-2">
                            <ChartBarLine
                                    :data="data3.chart1.data"
                                    :title="data3.chart1.title"
                                    :dimensions="data3.chart1.dimensions"
                                    :colors="data3.chart1.color"
                                    :type="data3.chart1.type"
                                    :legend="data3.chart1.legend"
                                    :units="data3.chart1.units"
                                    :two-axis="false"
                            />
                        </div>
                        <Fliter class="full-height w-1-2" :data="data3.chart2"></Fliter>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import GroupZhiLiang from './GroupZhiLiang'
import ChartGroup2 from './ChartGroup2'
import ChartBarLine from './ChartBarLine'
import Fliter from './Fliter'
import GroupZhongDian from './GroupZhongDian'
import GroupZhiFa from './GroupZhiFa'

export default {
  name: 'trans',
  components: {
    GroupZhiFa,
    GroupZhongDian,
    Fliter,
    ChartBarLine,
    ChartGroup2,
    GroupZhiLiang
  },
  props: {
    selectIndex: {
      type: Number,
      default: 0
    },
    data1: {
      type: Object,
      default: () => {
        return {}
      }
    },
    data2: {
      type: Object,
      default: () => {
        return {}
      }
    },
    data3: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style scoped lang="less">
.trans {
    position: relative;

    .btn-group {
        position: absolute;
        right: 0;
        top: 10px;

        .btn {
            background-color: #42b983;
            float: left;
            margin-left: 30px;
        }
    }

    .item {
        position: absolute;
    }

    .bounce-tab-enter-active {
        animation: bounce-tab-in 1s;
    }

    .bounce-tab-leave-active {
        animation: bounce-tab-out 1s;
    }

    @keyframes bounce-tab-in {
        0% {
            top: 100%;
        }
        100% {
            top: 0;
        }
    }
    @keyframes bounce-tab-out {
        0% {
            top: 0%;
        }
        100% {
            top: -100%;
        }
    }
}
</style>
