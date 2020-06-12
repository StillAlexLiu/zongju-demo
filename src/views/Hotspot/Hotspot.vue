<template>
    <div class='Hotspot full'>
        <div class="w-5-12 full-height">
            <div class="h-7-10" style="padding-top: 8px">
                <img-block class="full" :data="img.map"/>
            </div>
            <div class="h-3-10">
                <container class="full-height w-1-2" title="传播趋势">
                    <img-block class="full" :data="img.left1"/>
                </container>
                <container class="full-height w-1-2" title="整体情感">
                    <img-block class="full" :data="img.left2"/>
                </container>
            </div>
        </div>
        <div class="w-7-12 full-height" style="padding-top: 60px">
            <container class="w-4-11 full-height" title="受众分析">
                <img-block class="full" :data="img.center"/>
            </container>
            <div class="w-7-11 full-height">
                <container class="h-3-5" title="热点舆情事件">
                    <div style="height: 44px">
                        <TabBottomLine :data="tab" v-model="selectedIndex"/>
                    </div>
                    <div style="height: calc(100% - 44px);">
                        <img-block class="full" :data="img.right1"/>
                    </div>
                </container>
                <container class="h-2-5" title="热点舆情处置">
                    <img-block class="full" :data="img.right2"/>
                </container>
            </div>
        </div>
    </div>
</template>

<script>
import ImgBlock from '../common/ImgBlock'

export default {
  name: 'Hotspot',
  components: { ImgBlock },
  data () {
    return {
      selectedIndex: 0,
      tab: [{
        name: '口罩舆情',
        value: 0
      }, {
        name: '疫苗舆情',
        value: 1
      }],
      img: {
        map: {
          img: require('./BlockImg/舆情地图.png'),
          width: 780,
          height: 690
        },
        left1: {
          img: require('./BlockImg/传播趋势.png'),
          width: 351,
          height: 230
        },
        left2: {
          img: require('./BlockImg/整体情感.png'),
          width: 350,
          height: 233
        },
        center: {
          img: require('./BlockImg/受众分析.png'),
          width: 360,
          height: 921
        },
        right1: {
          img: require('./BlockImg/热点舆情事件-口罩舆情.png'),
          width: 620,
          height: 456
        },
        right2: {
          img: require('./BlockImg/热点舆情处置.png'),
          width: 580,
          height: 348
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
.Hotspot {
    padding: 15px 20px;
    color: #ffffff;
}
</style>
