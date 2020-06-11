<template>
    <div class='PageChanger full' style="padding-top: 5px">
        <div v-if="dataIndex===0" class="full">
            <GroupShiPin class="h-1-3" :data="data.block1.text"/>
            <div class="h-2-3 " style="padding:0">
                <BlockShiPin class="full-height w-1-5" :data="data.block1.text2"/>
                <ChartCustomPie class="w-4-5 full-height" :data="data.block1.chart1.data"
                                :title="data.block1.chart1.title"/>
            </div>
        </div>
        <div v-if="dataIndex===1" class="full">
            <GroupYaoPin class="h-1-4 full-width" :data="data.block2.text"/>
            <ChartGroup class="h-3-4 full-width" :data="data.block2.charts" :tab="data.block2.tab"/>
        </div>
        <div v-if="dataIndex===2" class="full">

            <div class="w-6-12 full-height">
                <BlockTeZhongSheBei :data="data.block3.charts"/>
            </div>
            <div class="w-6-12 full-height">
                <ChartPieCircleDouble :data="data.block3.chart2.data"
                                      :title="data.block3.chart2.title"/>
            </div>
        </div>
        <div v-if="dataIndex===3" class="full">
            <div class="h-1-4">
                <GroupGongYe :data="data.block4.text"/>
            </div>
            <div class="h-3-4">
                <div class="full-height w-1-2">
                    <ChartAcross :title="data.block4.chart1.title" :data="data.block4.chart1"/>
                </div>
                <div class="full-height w-1-2">
                    <ChartAreaLine :data="data.block4.chart2.data"
                                   :title="data.block4.chart2.title"
                                   :dimensions="data.block4.chart2.dimensions"
                                   :colors="data.block4.chart2.color"
                                   :type="data.block4.chart2.type"
                                   :legend="data.block4.chart2.legend"
                                   :line-with-circle="false"
                                   :unit="data.block4.chart2.units"/>

                </div>
            </div>
        </div>
        <div v-if="dataIndex===4" class="full">
            <ChartBarLine
                :data="data.block5.chart1.data"
                :title="data.block5.chart1.title"
                :dimensions="data.block5.chart1.dimensions"
                :colors="data.block5.chart1.color"
                :type="data.block5.chart1.type"
                :legend="data.block5.chart1.legend"
                :units="data.block5.chart1.units"
                :two-axis="false"
            />
        </div>
    </div>
</template>

<script>

import GroupShiPin from '../../index/components/GroupShiPin'
import BlockShiPin from '../../index/components/BlockShiPin'
import ChartCustomPie from '../../index/components/ChartCustomPie'
import GroupYaoPin from '../../index/components/GroupYaoPin'
import ChartGroup from '../../index/components/ChartGroup'
import BlockTeZhongSheBei from '../../index/components/BlockTeZhongSheBei'
import ChartPieCircleDouble from '../../index/components/ChartPieCircleDouble'
import GroupGongYe from '../../index/components/GroupGongYe'
import ChartAreaLine from '../../index/components/ChartAreaLine'
import ChartAcross from '../../index/components/ChartAcross'
import ChartBarLine from '../../index/components/ChartBarLine'

export default {
  name: 'PageChanger',
  components: {
    ChartBarLine,
    ChartAcross,
    ChartAreaLine,
    GroupGongYe,
    ChartPieCircleDouble,
    BlockTeZhongSheBei,
    ChartGroup,
    GroupYaoPin,
    ChartCustomPie,
    BlockShiPin,
    GroupShiPin
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    },
    dataIndex: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped lang="less">
.PageChanger {
}
</style>
