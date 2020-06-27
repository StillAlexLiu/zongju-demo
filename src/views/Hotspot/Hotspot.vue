<template>
    <div class='Hotspot full' style="padding-top: 60px">
        <container class="w-3-9 full-height" title="热点舆情">
            <div class="full" style="padding-left: 30px">
                <img-block class="full" :data="img.left"/>
            </div>
        </container>
        <div class="w-4-9 full-height">
            <div class="h-2-3" style="position: relative">
                <img-block class="full" :data="img.maps[mapSelected]"/>
                <div class="btn" @click="change"></div>
            </div>
            <container class="h-1-3" title="事件分析">
                <img-block class="full" :data="img.bottom"/>
            </container>
        </div>
        <container class="w-2-9 full-height" title="事件精准监管">
            <img-block class="full" :data="img.right"/>
        </container>
    </div>
</template>

<script>
import ImgBlock from '../common/ImgBlock'

export default {
  name: 'Hotspot',
  components: { ImgBlock },
  data () {
    return {
      mapSelected: 0,
      img: {
        maps: [{
          img: require('./BlockImg/new/地图1.png'),
          width: 800 * 1.025,
          height: 646 * 1.025
        }, {
          img: require('./BlockImg/new/分组 22.png'),
          width: 800 * 1.025,
          height: 646 * 1.025
        }],
        left: {
          img: require('./BlockImg/new/左侧.png'),
          width: 619,
          height: 937
        },
        bottom: {
          img: require('./BlockImg/new/下方.png'),
          width: 754,
          height: 264
        },
        right: {
          img: require('./BlockImg/new/右侧.png'),
          width: 360,
          height: 915
        }
      }
    }
  },
  methods: {
    change () {
      this.mapSelected = this.mapSelected === 0 ? 1 : 0
    }
  }
}
</script>

<style scoped lang="less">
.Hotspot {
    padding: 15px 20px;
    color: #ffffff;

    .btn {
        position: absolute;
        width: 44px;
        height: 44px;
        right: 9px;
        top: 6px;
        cursor: pointer;
        background-size: 100% 100%;
        background-image: url("./BlockImg/new/左侧菜单_收起.png");
    }
}
</style>
