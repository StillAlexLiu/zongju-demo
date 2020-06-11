<template>
    <div class="MapDia2 full">
        <div class="full img">
            <div class="full">
                <div v-for="(item,index) in points" :key="index">
                    <div class="point" v-for="(item2,index2) in item.coords" :key="index2"
                         @click="pointClick(item.name)"
                         :style="{left:item2[0]+'px',top:item2[1]+'px',backgroundImage:'url('+item.img+')'}">
                    </div>
                </div>
            </div>
            <div class="title" @click="close">调度指挥</div>
            <left-tab/>
            <img-block class="img1" :data="img"/>
            <BottomMenu class="menu" :data="menu" :points="points"/>
            <div class="dia">
                <img-block :data="diaImg"/>
            </div>
        </div>
    </div>
</template>

<script>
import LeftTab from './components/LeftTab'
import ImgBlock from '../../common/ImgBlock'
import BottomMenu from './components/BottomMenu'

export default {
  name: 'MapDia2',
  components: {
    BottomMenu,
    ImgBlock,
    LeftTab
  },
  data () {
    return {
      img: {
        img: require('./../BlockImg/即时通讯_调度指挥@2x.png'),
        width: 644 / 2,
        height: 1422 / 2
      },
      points: [],
      diaImg: {},
      dias: [
        {
          img: require('./../BlockImg/dia/弹窗1@2x.png'),
          width: 828 / 2,
          height: 440 / 2
        },
        {
          img: require('./../BlockImg/dia/弹窗2@2x.png'),
          width: 796 / 2,
          height: 746 / 2
        },
        {
          img: require('./../BlockImg/dia/弹窗3@2x.png'),
          width: 796 / 2,
          height: 746 / 2
        }
      ],
      menu: [
        {
          name: '执法力量',
          children: [{
            name: '执法人员',
            active: false,
            img: require('./../BlockImg/menuGroup/m1/执法人员@2x.png')
          }, {
            name: '站所',
            active: false,
            img: require('./../BlockImg/menuGroup/m1/站所@2x.png')
          }, {
            name: '车辆',
            active: false,
            img: require('./../BlockImg/menuGroup/m1/车辆@2x.png')
          }]
        },
        {
          name: '资源',
          children: [{
            name: '快检室',
            active: false,
            img: require('./../BlockImg/menuGroup/m2/快检室@2x.png')
          }, {
            name: '检测机构',
            active: false,
            img: require('./../BlockImg/menuGroup/m2/检测机构@2x.png')
          }, {
            name: '温感摄像头',
            active: false,
            img: require('./../BlockImg/menuGroup/m2/温感摄像头@2x.png')
          }, {
            name: '温测',
            active: false,
            img: require('./../BlockImg/menuGroup/m2/温测@2x.png')
          }, {
            name: '防疫物资',
            active: false,
            img: require('./../BlockImg/menuGroup/m2/防疫物资@2x.png')
          }]
        },
        {
          name: '重点场所',
          children: [{
            name: '医院',
            active: false,
            img: require('./../BlockImg/menuGroup/m3/医院@2x.png')
          }, {
            name: '商场',
            active: false,
            img: require('./../BlockImg/menuGroup/m3/商场@2x.png')
          }, {
            name: '学校',
            active: false,
            img: require('./../BlockImg/menuGroup/m3/学校@2x.png')
          }, {
            name: '药店',
            active: false,
            img: require('./../BlockImg/menuGroup/m3/药店@2x.png')
          }, {
            name: '菜市场',
            active: false,
            img: require('./../BlockImg/menuGroup/m3/菜市场@2x.png')
          }]
        },
        {
          name: '实时监控',
          children: [{
            name: '厨房',
            active: false,
            img: require('./../BlockImg/menuGroup/m4/厨房@2x.png')
          }, {
            name: '电梯',
            active: false,
            img: require('./../BlockImg/menuGroup/m4/电梯@2x.png')
          }, {
            name: '药店',
            active: false,
            img: require('./../BlockImg/menuGroup/m4/药店@2x.png')
          }]
        }
      ]
    }
  },
  watch: {},
  methods: {
    close () {
      this.$emit('close')
    },
    pointClick (name) {
      switch (name) {
        case '执法人员':
          this.diaImg = this.dias[0]
          break
        case '站所':
          this.diaImg = this.dias[1]
          break
        case '车辆':
          this.diaImg = this.dias[2]
          break
        default:
          this.diaImg = {}
          break
      }
    }
  }
}
</script>

<style scoped lang="less">
.MapDia2 {
    position: relative;

    .img {
        position: relative;
        background-image: url("./components/img/地图@2x.png"), url("./../../../components/container/img/大弹出框背景.png");
        background-size: calc(100% - 10px) calc(100% - 10px), 100% 100%;
        background-position: center, center;
        background-repeat: no-repeat;

        .title {
            line-height: 63px;
            position: absolute;
            font-size: 30px;
            left: 721px;
            width: 340px;
            top: 1px;
            margin: 0 auto;
            background-image: url("./../../../components/container/img/编组.png");
            background-size: 340px 63px;
            background-repeat: no-repeat;
            text-align: center;
            background-position: center;
        }
    }

    .img1 {
        position: absolute;
        right: 10px;
        top: 10px;
        width: 322px;
        height: 711px;
    }

    .menu {
        position: absolute;
        bottom: 0;
        left: 611px;
    }

    .point {
        position: absolute;
        height: 35px;
        width: 35px;
        background-position: -10px;
        background-size: auto 120%;
        cursor: pointer;
    }

    .dia {
        position: absolute;
        width: 20px;
        height: 30px;
        left: 1200px;
        top: 200px;
    }

    .close {
        position: absolute;
        cursor: pointer;
        top: 0;
        right: 0;
    }
}
</style>
