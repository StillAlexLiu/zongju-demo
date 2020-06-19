<template>
    <div class='MapAndVideo'>
        <img-block class="img" :data="img"/>
<!--        <div class="map1" v-if="false">-->
<!--            <player class="full" src="http://202.158.165.201:8554/camera33/servicehall.m3u8" :index="1"/>-->
<!--        </div>-->
<!--        <div class="map2" v-if="false">-->
<!--            <player class="full" src="http://202.158.165.201:8554/camera34/servicehall.m3u8" :index="2"/>-->
<!--        </div>-->
    </div>
</template>

<script>
import ImgBlock from '../../../common/ImgBlock'

export default {
  name: 'MapAndVideo',
  components: { ImgBlock },
  data () {
    return {
      img: {
        img: require('./../../BlockImg/地图@2x.png'),
        width: 1834 / 2.1,
        height: 1222 / 2.1
      }
    }
  }
}
</script>

<style scoped lang="less">
.MapAndVideo {
    position: relative;

    > div {
        position: absolute;
    }

    .img {

    }

    .map1 {
        height: 285px;
        width: 523px;
        top: 67px;
        left: 2px;
    }

    .map2 {
        height: 138px;
        width: 251px;
        top: 360px;
        left: 622px;
    }
}
</style>
