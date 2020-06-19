<template>
    <div class='HotMapBlock'>
        <div class="full">
            <EchartsMapHotMap class="full" :data="data"/>
            <img-block :data="img1" style="position: absolute;left: 45px;top:40px;"/>
            <img-block :data="img2" style="position: absolute;left: 20px;bottom: 15px"/>
            <div class="close" @click="close"></div>
        </div>
    </div>
</template>

<script>
import EchartsMapHotMap from './EchartsMapHotMap'
import ImgBlock from '../../common/ImgBlock'

export default {
  name: 'HotMapBlock',
  components: {
    ImgBlock,
    EchartsMapHotMap
  },
  data () {
    return {
      img1: {
        img: require('./img/hotMap/Element／Index-Dashboard-scale.png'),
        height: 118,
        width: 123
      },
      img2: {
        img: require('./img/hotMap/编组.png'),
        height: 158,
        width: 224
      }
    }
  },
  props: {
    data: {
      type: String,
      default: ''
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="less">
.HotMapBlock {
    position: relative;
    padding: 15px 5px 5px 5px;

    > div {
        background-image: url("./img/hotMap/组合／背景_首页弹出框背景.png");
        background-size: 100% 100%;
    }

    .close {
        position: absolute;
        width: 28px;
        height: 28px;
        right: 20px;
        top: 20px;
        font-size: 22px;
        color: #999999;
        font-weight: bold;
        cursor: pointer;
    }
}
</style>
