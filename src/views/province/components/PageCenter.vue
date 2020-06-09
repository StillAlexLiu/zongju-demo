<template>
    <div class='PageCenter full'>
        <div class="h-1-2">
            <TabCustomColor style="height: 22px" :data="tab1"/>
            <div style="height: calc(100% - 22px)">
                <group-zhun-ru class="h-3-11" :data="data.block1.text.data"/>
                <div class="h-8-11">
                    <div class="w-1-4 full-height">
                        <ChartGauge :data="data.block1.chart"/>
                    </div>
                    <div class="w-3-4 full-height">
                        <ChartBarLine
                            :data="data.block1.chart1.data"
                            :title="data.block1.chart1.title"
                            :dimensions="data.block1.chart1.dimensions"
                            :colors="data.block1.chart1.color"
                            :type="data.block1.chart1.type"
                            :legend="data.block1.chart1.legend"
                            :units="data.block1.chart1.units"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="h-1-2">
            <TabCustomColor style="height: 22px" :data="tab2" v-model="tabIndex"/>
            <div style="height: calc(100% - 22px)">
                <div class="full" v-if="tabIndex===0">
                    <div class="h-1-5">
                        <GroupJingZheng :data="data.block2.text"/>
                    </div>
                    <div class="h-4-5">
                        <div class="full-height w-1-2">
                            <ChartBarLine :data="data.block2.chart1.data"
                                          :title="data.block2.chart1.title"
                                          :dimensions="data.block2.chart1.dimensions"
                                          :colors="data.block2.chart1.color"
                                          :type="data.block2.chart1.type"
                                          :legend="data.block2.chart1.legend"
                                          :isArea="true"
                                          :units="data.block2.chart1.units"/>
                        </div>
                        <div class="full-height w-1-2">
                            <ChartBarLine
                                :data="data.block2.chart2.data"
                                :title="data.block2.chart2.title"
                                :dimensions="data.block2.chart2.dimensions"
                                :colors="data.block2.chart2.color"
                                :type="data.block2.chart2.type"
                                :legend="data.block2.chart2.legend"
                                :units="data.block2.chart2.units"
                            />
                        </div>
                    </div>
                </div>
                <div class="full" v-if="tabIndex===1">
                    <div class="w-3-9 full-height">
                        <ChartWordCloud/>
                    </div>
                    <div class="w-6-9 full-height">
                        <GroupXiaoFei class="h-3-10" :data="data.block3.text"/>
                        <div class="h-7-10">
                            <ChartGroupHuanJing :title="data.block3.chart1.title"
                                                :data="data.block3.chart1.data"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import GroupZhunRu from '../../index/components/GroupZhunRu'
import ChartGauge from '../../deptIndex/components/deptChartGauge'
import ChartBarLine from '../../index/components/ChartBarLine'
import GroupJingZheng from '../../index/components/GroupJingZheng'
import ChartWordCloud from '../../index/components/ChartWordCloud'
import GroupXiaoFei from '../../index/components/GroupXiaoFei'
import ChartGroupHuanJing from '../../index/components/ChartGroupHuanJing'

export default {
  name: 'PageCenter',
  components: {
    ChartGroupHuanJing,
    GroupXiaoFei,
    ChartWordCloud,
    GroupJingZheng,
    ChartBarLine,
    ChartGauge,
    GroupZhunRu
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      tabIndex: 0,
      tab1: [{
        name: '准入环境',
        value: 0
      }],
      tab2: [{
        name: '竞争环境',
        value: 0
      }, {
        name: '消费环境',
        value: 1
      }]
    }
  }
}
</script>

<style scoped lang="less">
.PageCenter {
}
</style>
