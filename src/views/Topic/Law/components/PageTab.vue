<template>
    <div class='PageTab'>
        <img-block class="full" :data="data"/>
    </div>
</template>

<script>
import ImgBlock from '../../../common/ImgBlock'

export default {
  name: 'PageTab',
  components: { ImgBlock },
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
.PageTab {
}
</style>
