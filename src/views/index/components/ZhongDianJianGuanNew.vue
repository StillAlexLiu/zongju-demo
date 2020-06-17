<template>
    <div class='ZhiLiangTiSheng full'>
        <div class="full-height w-1-3">
            <GroupZhongDianNew :data="data.text"/>
        </div>
        <div class="full-height w-1-3">
            <div style="height: 20px">
                广告监管
            </div>
            <div style="height: calc(100% - 20px)">
                <ChartBarLine
                    :data="data.chart1.data"
                    :dimensions="data.chart1.dimensions"
                    :colors="data.chart1.color"
                    :type="data.chart1.type"
                    :legend="data.chart1.legend"
                    :units="data.chart1.units"
                    :two-axis="false"
                />
            </div>
        </div>
        <div class="full-height w-1-3">
            <div style="height: 20px">
                网络交易监管
            </div>
            <div style="height: calc(100% - 20px)">
                <Fliter class="full" :data="data.chart2"></Fliter>
            </div>
        </div>
    </div>
</template>

<script>
import GroupZhongDian from './GroupZhongDian'
import Fliter from './Fliter'
import ChartBarLine from './ChartBarLine'
import GroupZhongDianNew from './GroupZhongDianNew'

export default {
  name: 'ZhongDianJianGuanNew',
  components: {
    GroupZhongDianNew,
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
