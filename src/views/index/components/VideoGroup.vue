<template>
    <div class='VideoGroup'>
        <div class="w-1-2 h-1-3" v-for="(item,index) in data" :key="index">
            <img-block :data="{img:item.img,width:360/2,height:320/2}"/>
            <div class="name">{{item.name}}</div>
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
    > div {
        position: relative;

        .name {
            position: absolute;
            left: 20px;
            bottom: 15px;
            background-color: rgba(32, 76, 118, .6);
            height: 24px;
            width: 91px;
            font-size: 16px;
            line-height: 24px;
            border-radius: 12px;
            text-align: center;
        }
    }
}
</style>
