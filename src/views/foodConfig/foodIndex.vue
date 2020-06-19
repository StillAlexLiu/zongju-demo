<template>
    <div class="deptIndex full">
        <div class="side full-height w-2-7">
            <container class=" full-width h-4-12" title="食品准入">
                <img-block class="full" :data="img.left[0]"/>
            </container>
            <container class=" full-width h-3-12" title="认证许可">
                <img-block class="full" :data="img.left[1]"/>
            </container>
            <container class=" full-width h-5-12" title="生产经营">
                <div style="height: 40px;padding-top: 20px">
                    <TabBottomLine :data="tab" v-model="selectedIndex"/>
                </div>
                <div style="height: calc(100% - 40px)">
                    <img-block class="full" :data="img.left[2][selectedIndex]"/>
                </div>
            </container>
        </div>
        <div class="center full-height  w-3-7">
            <div class="map h-7-12 full-width" style="position: relative">
                <EchartsMapEffectScatter @pointClick="pointClick" :mapIndex="mapIndex"/>
                <FoodMapText/>
            </div>
            <div class="h-5-12">
                <container class=" full-width h-2-7" title="投诉举报">
                    <img-block class="full" :data="img.center[0]"/>
                </container>
                <container class=" full-width h-5-7" title="舆情">
                    <img-block class="full" :data="img.center[1]"/>
                </container>
            </div>
        </div>
        <div class="side full-height w-2-7">
            <container class=" full-width h-7-12" title="抽样检测" style="position: relative">
                <img-block class="full" :data="img.right[0]"/>
                <BtnGroup @itemClick="itemClick"/>
            </container>
            <container class=" full-width h-5-12" title="食品执法">

                <img-block class="full" :data="img.right[1]"/>
            </container>
        </div>

        <transition name="bounce" mode="out-in">
            <FoodDia class="dia" v-if="dia1" @close="close"/>
        </transition>
    </div>
</template>
<script>
import ImgBlock from '../common/ImgBlock'
import BtnGroup from './components/btnGroup'
import EchartsMapEffectScatter from './components/EchartsMapEffectScatter'
import FoodDia from './components/FoodDia'
import FoodMapText from './components/FoodMapText' // 信息card
export default {
  name: 'foodIndex',
  components: {
    FoodMapText,
    BtnGroup,
    EchartsMapEffectScatter,
    ImgBlock,
    FoodDia
  },
  data () {
    return {
      mapIndex: 0,
      dia1: false,
      tab: [{
        name: '生产日常监管',
        value: 0
      }, {
        name: '经营日常监管',
        value: 1
      }],
      selectedIndex: 0,
      img: {
        left: [{
          img: require('./BlockImg/食品准人.png'),
          width: 1040 / 2,
          height: 564 / 2
        }, {
          img: require('./BlockImg/食品安全-认证认可.png'),
          width: 944 / 2,
          height: 422 / 2
        }, [{
          img: require('./BlockImg/生产经营1.png'),
          width: 1012 / 2,
          height: 598 / 2
        }, {
          img: require('./BlockImg/生产经营2.png'),
          width: 1012 / 2,
          height: 598 / 2
        }]],
        center: [{
          img: require('./BlockImg/投诉举报.png'),
          width: 1212 / 2,
          height: 96 / 2
        }, {
          img: require('./BlockImg/食品安全-舆情.png'),
          width: 1440 / 2,
          height: 372 / 2
        }],
        right: [{
          img: require('./BlockImg/抽样检测@2x.png'),
          width: 1014 / 2,
          height: 1042 / 2
        }, {
          img: require('./BlockImg/食品执法.png'),
          width: 1014 / 2,
          height: 650 / 2
        }]
      }
    }
  },
  mounted () {
  },
  methods: {
    mapClick (item) {
      if (item.value[2] === 1) {
        this.dia1 = true
      }
    },
    close () {
      this.dia1 = false
    },
    pointClick () {
      this.dia1 = true
    },
    itemClick (index) {
      this.mapIndex = index
    }
  }
}
</script>
<style lang="less">
.deptIndex {
    padding: 15px 20px;

    .foot-center-title {
        height: 35px;
    }

    .food-center-title-sub {
        height: calc(100% - 35px);
    }

    .bounce-enter-active {
        animation: bounce-in 0.8s;
    }

    .bounce-leave-active {
        /*animation: bounce-out 0.5s;*/
        animation: bounce-in 0.8s reverse;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        /*50% {*/
        /*    transform: scale();*/
        /*}*/
        100% {
            transform: scale(1);
        }
    }

    .dia {
        position: absolute;
        background: rgba(0, 0, 0, 0.85);
        /*background: rgba(0, 0, 0, 0.5);*/
        width: 100%;
        height: 100%;
        padding: 60px 67px 98px 67px;
        top: 0;
        left: 0;
        z-index: 199;
        /*width: 1786px;*/
        /*height: 922px;*/
        /*top: 60px;*/
        /*left: 67px;*/

    }

}
</style>
