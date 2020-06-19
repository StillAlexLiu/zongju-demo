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
                    @click="lineClick"
                />
            </div>
            <div class="w-2-5 full-height">
                <!--                <ChartPieCircle :data="data[dataIndex].chart2.data" :color="['#3651AF','#4A90E2','#94CCFF','#67ADFF']"-->
                <!--                                :title="data[dataIndex].chart2.title"/>-->
                <ChartPieCircle :data="chartData" :color="['#3651AF','#4A90E2','#94CCFF','#67ADFF']"
                                :title="chartTitle"/>
            </div>
        </div>
    </div>
</template>

<script>
import ChartBarLine from './ChartBarLine'
import ChartPieCircle from './ChartPieCircle'
import Mock from 'mockjs'

export default {
  name: 'ChartGroup',
  components: {
    ChartPieCircle,
    ChartBarLine
  },
  data () {
    return {
      dataIndex: 0,
      chartData: [],
      chartTitle: []
    }
  },
  watch: {
    dataIndex: {
      immediate: true,
      deep: true,
      handler: function () {
        this.chartData = this.data[this.dataIndex].chart2.data
        this.chartTitle = this.data[this.dataIndex].chart2.title
      }
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
  },
  methods: {
    lineClick () {
      const old = this.data[this.dataIndex].chart2.data
      this.chartData = []
      for (let i = 0; i < old.length; i++) {
        this.chartData.push({
          name: old[i].name,
          value: Mock.Random.natural(20, 100)
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
.ChartGroup {

}
</style>
