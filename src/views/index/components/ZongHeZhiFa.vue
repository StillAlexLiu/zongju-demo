<template>
    <div class='ZongHeZhiFa full'>
        <GroupZhiFa class="w-1-3 full-height" :data="data.text"/>
        <ChartGroup2 class="w-2-3 full-height" :data="data.charts"
                     :tab="data.tab"/>
    </div>
</template>

<script>
import GroupZhiFa from './GroupZhiFa'
import ChartGroup2 from './ChartGroup2'

export default {
  name: 'ZongHeZhiFa',
  components: {
    GroupZhiFa,
    ChartGroup2
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
.ZongHeZhiFa {
}
</style>
