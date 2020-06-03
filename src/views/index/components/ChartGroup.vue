<template>
    <div class="ChartGroup full">
        <TabBottomLine style="height: 24px" :data="tab" v-model="dataIndex"/>
        <div style="height: calc(100% - 24px);">
            <div class="w-3-5 full-height">
                <ChartBarLine
                        :barWidth="6"
                        :data="data[dataIndex].chart1.data"
                        :title="data[dataIndex].chart1.title"
                        :dimensions="data[dataIndex].chart1.dimensions"
                        :colors="data[dataIndex].chart1.color"
                        :type="data[dataIndex].chart1.type"
                        :legend="data[dataIndex].chart1.legend"
                        :units="data[dataIndex].chart1.units"
                />
            </div>
            <div class="w-2-5 full-height">
                <ChartPieCircle :data="data[dataIndex].chart2.data" :title="data[dataIndex].chart2.title"/>
            </div>
        </div>
    </div>
</template>

<script>
import ChartBarLine from './ChartBarLine'
import ChartPieCircle from './ChartPieCircle'

export default {
  name: 'ChartGroup',
  components: { ChartPieCircle, ChartBarLine },
  data () {
    return {
      dataIndex: 0
    }
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    tab: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style scoped lang="less">
.ChartGroup {

}
</style>
