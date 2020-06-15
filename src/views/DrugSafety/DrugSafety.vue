<template>
    <div class='DrugSafety full'>
        <container class="w-2-7 full-height" title="药品">
            <img-block class="full" :data="img.left"/>
        </container>
        <div class="w-3-7 full-height">
            <div class="map h-7-10">
                <div style="height: 40px">
                    <tab-block :data="tab"
                               style="width:100%;text-align: center;justify-content: center;"
                               v-model="mapIndex"/>
                </div>
                <div style="height: calc(100% - 40px)">
                    <map-group class="full" :data="img.map" :data-index="mapIndex" @pointClick="pointClick"/>
                </div>
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
        <transition name="bounce" mode="out-in">
            <DrugDia class="dia" v-if="dia1" @close="close"/>
        </transition>
    </div>
</template>

<script>
import ImgBlock from '../common/ImgBlock'
import MapGroup from './components/MapGroup'
import DrugDia from './components/DrugDia'

export default {
  name: 'DrugSafety',
  components: {
    DrugDia,
    MapGroup,
    ImgBlock
  },
  data () {
    return {
      dia1: false,
      mapIndex: 0,
      tab: [{
        name: '不良反应监测',
        value: 0
      }, {
        name: '监督抽检',
        value: 1
      }, {
        name: '监督检查',
        value: 2
      }, {
        name: '执法分布',
        value: 3
      }, {
        name: '市场主体',
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
  },
  methods: {
    close () {
      this.dia1 = false
    },
    pointClick () {
      console.log('click')
      this.dia1 = true
    }
  }
}
</script>

<style scoped lang="less">
.DrugSafety {
    padding: 15px 20px;
    color: #ffffff;

    .map {
        padding-top: 60px;
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

}
</style>
