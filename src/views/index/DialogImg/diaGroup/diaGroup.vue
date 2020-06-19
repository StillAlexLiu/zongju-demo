<template>
    <div class='diaGroup'>
        <img-block class="full" :data="img[index]"/>
        <div class="close" @click="$emit('close')"></div>
    </div>
</template>

<script>
import ImgBlock from '../../../common/ImgBlock'

export default {
  name: 'diaGroup',
  components: { ImgBlock },
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      img: [{
        img: require('./img/标准@2x.png'),
        width: 1560 / 1.97,
        height: 1512 / 1.97
      }, {
        img: require('./img/认证认可@2x.png'),
        width: 1560 / 1.97,
        height: 1512 / 1.97
      }, {
        img: require('./img/计量@2x.png'),
        width: 1560 / 1.97,
        height: 1512 / 1.97
      }, {
        img: require('./img/检验检测@2x.png'),
        width: 1560 / 1.97,
        height: 1512 / 1.97
      }]
    }
  }
}
</script>

<style scoped lang="less">
.diaGroup {
    padding-top: 20px;
    position: relative;

    .close {
        position: absolute;
        width: 30px;
        height: 30px;
        right: 20px;
        top: 40px;
        font-size: 22px;
        font-weight: bold;
        cursor: pointer;
    }
}
</style>
