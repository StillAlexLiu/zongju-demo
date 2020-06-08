<template>
    <div class='ZhiLiangTiSheng full'>
        <GroupZhongDian :data="data.text"/>
        <div style="height: calc(100% - 24px)">
            <div class="full-height w-1-2">
                <ChartBarLine
                    :data="data.chart1.data"
                    :title="data.chart1.title"
                    :dimensions="data.chart1.dimensions"
                    :colors="data.chart1.color"
                    :type="data.chart1.type"
                    :legend="data.chart1.legend"
                    :units="data.chart1.units"
                    :two-axis="false"
                />
            </div>
            <Fliter class="full-height w-1-2" :data="data.chart2"></Fliter>
        </div>
    </div>
</template>

<script>
import GroupZhongDian from './GroupZhongDian'
import Fliter from './Fliter'
import ChartBarLine from './ChartBarLine'

export default {
  name: 'ZhiLiangTiSheng',
  components: {
    GroupZhongDian,
    Fliter,
    ChartBarLine
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style scoped lang="less">
.ZhiLiangTiSheng {
}
</style>
