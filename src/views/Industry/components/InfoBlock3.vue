<template>
    <div class='InfoBlock3 full'>
        <div class="img w-2-5 full-height">
            <img-block class="full" :data="img"/>
        </div>
        <div class="w-3-5 full-height info">
            <div class="name">
                {{data.name}}
            </div>
            <div class="value">
                {{data.value}}
                <arrow dir="up"/>
            </div>
        </div>
    </div>
</template>

<script>
import ImgBlock from '../../common/ImgBlock'
import Arrow from '../../index/components/Arrow'

export default {
  name: 'InfoBlock3',
  components: {
    Arrow,
    ImgBlock
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
      img: {
        img: require('./img/图标.png'),
        width: 32,
        height: 57
      }
    }
  }
}
</script>

<style scoped lang="less">
.InfoBlock3 {
    background-image: url("./img/台子.png");
    background-size: 210px 28px;
    background-repeat: no-repeat;
    background-position: center 80%;

    .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;

        .value {
            font-family: 'LCD';
            font-size: 30px;
            color: #3FD3D6;
        }

        .name {
            font-size: 12px;
        }
    }
}
</style>
