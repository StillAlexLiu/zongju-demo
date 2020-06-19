<template>
    <div class='MapRiskBlock full'>
        <div class="full can">
            <img-block class="full" :data="img"/>
        </div>
    </div>
</template>

<script>
import ImgBlock from '../../common/ImgBlock'

export default {
  name: 'MapRiskBlock',
  components: { ImgBlock },
  data () {
    return {
      img: {
        img: require('./img/风险管控@2x.png'),
        width: 771,
        height: 116
      }
    }
  }
}
</script>

<style scoped lang="less">
.MapRiskBlock {
    padding: 5px;

    .can {
        background: rgba(22, 46, 74, 0.76);
        border: 1px solid;
        border-image: radial-gradient(circle, rgba(115, 143, 253, 0), rgba(60, 79, 155, 0.47), rgba(126, 176, 241, 0.09), rgba(135, 189, 253, 0.94)) 1 1;
        padding-top: 13px;
    }
}
</style>
