<template>
    <div class="ChartGroup2 full">
        <TabBottomLine style="height: 30px" :data="tab" v-model="dataIndex"/>
        <div style="height: calc(100% - 30px)">
            <ChartBarLine
                    :barWidth="6"
                    :data="data[dataIndex].data"
                    :dimensions="data[dataIndex].dimensions"
                    :colors="data[dataIndex].color"
                    :type="data[dataIndex].type"
                    :legend="data[dataIndex].legend"
                    :units="data[dataIndex].units"
                    :lineWithCircle="false"
                    :twoAxis="false"
            />
        </div>
    </div>
</template>

<script>
import ChartBarLine from './ChartBarLine'

export default {
  name: 'ChartGroup2',
  components: { ChartBarLine },
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
.ChartGroup2 {

}
</style>
