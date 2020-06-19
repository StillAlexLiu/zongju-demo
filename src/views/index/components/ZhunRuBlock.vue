<template>
    <div class='ZhunRuBlock full'>
        <div class="full" v-if="showIndex===0">
            <GroupZhunRuNew class="h-3-11" :data="data.text.data" @click="block1TabChange(2)"/>
            <div class="h-8-11">
                <div class="w-3-8 full-height">
                    <ChartGauge :data="data.chart" @click.native="block1TabChange(1)"/>
                </div>
                <div class="w-5-8 full-height">
                    <ChartBarLine
                        :data="data.chart1.data"
                        :title="data.chart1.title"
                        :dimensions="data.chart1.dimensions"
                        :colors="data.chart1.color"
                        :type="data.chart1.type"
                        :legend="data.chart1.legend"
                        :units="data.chart1.units"
                        :is-area="true"
                        :x-axis-trigger-event="true"
                        @click="barClick"
                    />
                </div>
            </div>
        </div>
        <div class="full" v-if="showIndex===1">
            <ZhunRuTab1 @close="block1TabChange(0)"/>
        </div>
        <div class="full" v-if="showIndex===2">
            <ZhunRuTab2 @close="block1TabChange(0)"/>
        </div>
    </div>
</template>

<script>
import GroupZhunRuNew from './GroupZhunRuNew'
import ChartGauge from './ChartGauge'
import ChartBarLine from './ChartBarLine'
import ZhunRuTab1 from './ZhunRuTab1'
import ZhunRuTab2 from './ZhunRuTab2'

export default {
  name: 'ZhunRuBlock',
  components: {
    ZhunRuTab2,
    ZhunRuTab1,
    ChartBarLine,
    ChartGauge,
    GroupZhunRuNew
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
      showIndex: 0
    }
  },
  methods: {
    block1TabChange (i) {
      this.showIndex = i
    },
    barClick (e) {
      this.$emit('barClick', e)
    }
  }
}
</script>

<style scoped lang="less">
.ZhunRuBlock {
}
</style>
