<template>
    <div class='Risk full'>
        <div class="full-height c-w-1">
            <container class="" title="风险指数" style="height: 30%">
                <img-block class="full-height" :data="img.block1"/>
            </container>
            <container class="" title="基础风险源" style="height: 27%">
                <img-block class="full-height" :data="img.block2"/>
            </container>
            <container class="" title="风险评级" style="height: 43%">
                <img-block class="full-height" :data="img.block3"/>
            </container>
        </div>
        <div class="full-height c-w-2" style="position: relative;padding-top: 62px">
            <img-block class="full-height" :data="img.center[selectedIndex]"/>
            <TabBlock :data="tab" v-model="selectedIndex" style="position: absolute;top: 90px;left:20px;"/>
        </div>
        <div class="full-height c-w-1">

            <container class="h-2-3" title="风险预警">
                <img-block class="full-height" :data="img.block4"/>
            </container>
            <container class="h-1-3" title="风险处置">
                <img-block class="full-height" :data="img.block5"/>
            </container>
        </div>
    </div>
</template>

<script>
import ImgBlock from '../../common/ImgBlock'

export default {
  name: 'Risk',
  components: { ImgBlock },
  data () {
    return {
      selectedIndex: 0,
      tab: [
        {
          name: '预警事件',
          value: 0
        }, {
          name: '预警区域分布',
          value: 1
        }, {
          name: '预警企业分布',
          value: 2
        }
      ],
      img: {
        block1: {
          img: require('./BlockImg/风险指数@2x.png'),
          width: 954 / 2,
          height: 536 / 2
        },
        block2: {
          img: require('./BlockImg/基础风险源@2x.png'),
          width: 988 / 2,
          height: 456 / 2
        },
        block3: {
          img: require('./BlockImg/风险评级@2x.png'),
          width: 946 / 2,
          height: 678 / 2
        },
        center: [{
          img: require('./BlockImg/中间地图-预警事件@2x.png'),
          width: 1560 / 2,
          height: 1948 / 2
        }, {
          img: require('./BlockImg/中间地图-预警区域分布@2x.png'),
          width: 1560 / 2,
          height: 1948 / 2
        }, {
          img: require('./BlockImg/中间地图-预警企业分布@2x.png'),
          width: 1560 / 2,
          height: 1948 / 2
        }],
        block4: {
          img: require('./BlockImg/风险预警@2x.png'),
          width: 962 / 2,
          height: 1190 / 2
        },
        block5: {
          img: require('./BlockImg/风险处置@2x.png'),
          width: 988 / 2,
          height: 518 / 2
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
.Risk {
    color: #ffffff;
    padding: 15px 20px;

    .c-w-1 {
        float: left;
        width: 29%;
    }

    .c-w-2 {
        float: left;
        width: 42%;
    }
}
</style>
