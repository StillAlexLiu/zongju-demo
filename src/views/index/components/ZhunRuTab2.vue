<template>
    <div class='ZhunRuTab2 full'>
        <div class="full-height w-1-2">
            <div class="tab">
                <tab-freedom :data="tab" v-model="tabSelected">
                    <template v-slot:default="item">
                        <div :class="item.index===item.active?'active':''" class="item">{{item.item.name}}</div>
                    </template>
                </tab-freedom>
            </div>
            <div class="tab-page">
                <div v-for="(item,index) in list[tabSelected]" :key="index" class="row">
                    <div>{{item.name}}</div>
                    <div>
                        <span class="f20" v-if="item.from!==''">{{item.from}}</span><span v-if="item.unit!==''"
                                                                                          class="f14">{{item.unit}}</span><span
                        v-if="item.status!==''"><arrow
                        :dir="item.status"/></span><span class="f20" v-if="item.to!==''">{{item.to}}</span><span
                        v-if="item.unit!==''"
                        class="f14">{{item.unit}}</span><span v-if="item.text!==''">{{item.text}}</span><span
                        class="number-font" v-if="item.value!==''">{{item.value}}</span><span v-if="item.text2!==''">{{item.text2}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="full-height w-1-2">
            <div style="height: 22px">
                <TabBottomLine :data="tab1" v-model="tabSelected1"/>
            </div>
            <div style="height: calc(100% - 22px)">
                <ChartBarLine :data="chartsData[tabSelected1]" :legend="chartsConfig.legend" :type="chartsConfig.type"
                              :dimensions="chartsConfig.dimensions"
                              :units="chartsConfig.units"
                              :two-axis="false"
                              :colors="chartsConfig.color"
                              :is-area="true"/>
            </div>
        </div>
        <div class="close" @click="close">x</div>
    </div>
</template>

<script>
import Arrow from './Arrow'
import ChartBarLine from './ChartBarLine'
import Mock from 'mockjs'
import graphic from 'echarts/lib/util/graphic'

export default {
  name: 'ZhunRuTab2',
  components: {
    ChartBarLine,
    Arrow
  },
  data () {
    return {
      tabSelected: 0,
      tabSelected1: 0,
      tab: [{
        name: '企业开办情况',
        value: 0
      }, {
        name: '企退出情况',
        value: 1
      }],
      tab1: [{
        name: '新设企业变化',
        value: 0
      }, {
        name: '退出企业变化',
        value: 1
      }],
      list: [[{
        name: '平均办结时长',
        from: '12',
        to: '3',
        unit: '天',
        status: 'right',
        text: '',
        value: '',
        text2: ''
      }, {
        name: '平均办理环节',
        from: '5',
        to: '3',
        unit: '环节',
        status: 'right',
        text: '',
        value: '',
        text2: ''
      }, {
        name: '办理费用',
        from: '',
        to: '',
        unit: '',
        status: '',
        text: '取消收费',
        value: '10',
        text2: '项'
      }], [{
        name: '平均办结时长',
        from: '17',
        to: '5',
        unit: '天',
        status: 'right',
        text: '',
        value: '',
        text2: ''
      }, {
        name: '平均办理环节',
        from: '7',
        to: '4',
        unit: '环节',
        status: 'right',
        text: '',
        value: '',
        text2: ''
      }, {
        name: '办理费用',
        from: '',
        to: '',
        unit: '',
        status: '',
        text: '取消收费',
        value: '11',
        text2: '项'
      }]],
      monthList: ['12月', '1月', '2月', '3月', '4月', '5月'],
      chartsData: [[], []],
      chartsConfig: {
        legend: ['同比', '环比'],
        type: ['line', 'line'],
        units: ['%'],
        dimensions: ['name', 'value', 'value1'],
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
              color: '#5DC3FF'
            },
            {
              offset: 1,
              color: 'rgba(0,0,0,0)'
            }
          ],
          false
        )]
      }
    }
  },
  mounted () {
    this.makeData()
  },
  methods: {
    close () {
      this.$emit('close')
    },
    makeData () {
      this.chartsData = [[], []]
      for (let i = 0; i < this.monthList.length; i++) {
        const item = this.monthList[i]
        this.chartsData[0].push({
          name: item,
          value: Mock.Random.natural(20, 100),
          value1: Mock.Random.natural(20, 100)
        })
        this.chartsData[1].push({
          name: item,
          value: Mock.Random.natural(20, 100),
          value1: Mock.Random.natural(20, 100)
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
.ZhunRuTab2 {
    position: relative;

    .tab {
        height: 33px;
    }

    .tab-page {
        height: calc(100% - 33px);
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: stretch;

        .row {
            flex: 1;
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            &:nth-child(odd) {
                background-color: rgba(0, 0, 0, .2);
            }

            > div {
                flex: 1;
                display: flex;
                align-items: center;
                padding: 0 5px;
                justify-content: space-between;
            }
        }
    }

    .item {
        background-color: #5994BB;
        height: 33px;
        line-height: 33px;
        text-align: center;
        cursor: pointer;
        margin-left: 2px;
    }

    .active {
        background: rgba(74, 144, 226, 0.31)
    }

    .close {
        position: absolute;
        width: 18px;
        height: 18px;
        right: 2px;
        top: 2px;
        font-size: 18px;
        color: #999999;
        font-weight: bold;
        transform: scale(1.3, 1);
        cursor: pointer;

    }

    .f14 {
        font-size: 14px;
    }

    .f20 {
        font-size: 20px;
    }
}
</style>
