<template>
    <div class='DrugSafety full'>
        <container class="w-2-7 full-height" title="药品">
            <img-block class="full" :data="img.left"/>
        </container>
        <div class="w-3-7 full-height">
            <div class="map h-7-10">
                <img-block class="full" :data="img.map.map"/>
                <img-block class="" :data="img.map.top" style="left: 5px;top:130px"/>
                <img-block class="" :data="img.map.bottom" style="left: 5px;bottom:10px;"/>
                <tab-block :data="tab" style="width:100%;text-align: center;justify-content: center;top:70px;"/>
            </div>
            <container class="h-3-10" title="重点药品">
                <img-block class="full" :data="img.center"/>
            </container>
        </div>
        <div class="w-2-7 full-height">
            <container class="h-1-2" title="医疗器械">
                <img-block class="full" :data="img.right1"/>
            </container>
            <container class="h-1-2" title="化妆品">
                <img-block class="full" :data="img.right2"/>
            </container>
        </div>
    </div>
</template>

<script>
import ImgBlock from '../common/ImgBlock'

export default {
  name: 'DrugSafety',
  components: { ImgBlock },
  data () {
    return {
      tab: [{
        name: '市场准入',
        value: 0
      }, {
        name: '不良反应监测',
        value: 1
      }, {
        name: '监督检查',
        value: 2
      }, {
        name: '抽检合格率',
        value: 3
      }, {
        name: '执法分布',
        value: 4
      }],
      img: {
        left: {
          img: require('./BlockImg/药品.png'),
          width: 492,
          height: 977
        },
        center: {
          img: require('./BlockImg/重点药品.png'),
          width: 748,
          height: 209
        },
        right1: {
          img: require('./BlockImg/医疗器械.png'),
          width: 492,
          height: 451
        },
        right2: {
          img: require('./BlockImg/化妆品.png'),
          width: 493,
          height: 451
        },
        map: {
          map: {
            img: require('./BlockImg/地图.png'),
            width: 785,
            height: 597
          },
          top: {
            img: require('./BlockImg/圆.png'),
            width: 204,
            height: 204
          },
          bottom: {
            img: require('./BlockImg/重大舆情.png'),
            width: 262,
            height: 222
          }
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
.DrugSafety {
    padding: 15px 20px;
    color: #ffffff;

    .map {
        position: relative;
        padding-top: 60px;

        > div {
            position: absolute;
        }
    }
}
</style>
