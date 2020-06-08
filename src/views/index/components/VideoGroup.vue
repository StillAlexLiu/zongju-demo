<template>
    <div class='VideoGroup'>
        <div class="w-1-2 h-1-3" v-for="(item,index) in data" :key="index">
            <img-block :data="{img:item.img,width:360/2,height:320/2}"/>
        </div>
    </div>
</template>

<script>
import ImgBlock from '../../common/ImgBlock'

export default {
  name: 'VideoGroup',
  components: { ImgBlock },
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style scoped lang="less">
.VideoGroup {
}
</style>
