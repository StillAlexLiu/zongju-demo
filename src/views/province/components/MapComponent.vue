<template>
    <div class='MapComponent'>
        <ImgBlock class="full" :data="mapFlag?img1:img2"/>
        <div v-if="mapFlag" class="full">
            <div class="point" v-for="(item,index) in points" :style="{left:item.left+'px',top:item.top+'px'}"
                 @click="pointChange(item)"
                 :key="index">{{item.name}}
            </div>
            <div class="msg">
                <div class="title">{{msg.name}}</div>
                <table class="table">
                    <tbody>
                    <tr v-for="(item,index) in msg.text" :key="index">
                        <td class="name">{{item.name}}</td>
                        <td class="value">{{item.value}}</td>
                        <td class="unit">{{item.unit}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import ImgBlock from '../../common/ImgBlock'

export default {
  name: 'MapComponent',
  components: { ImgBlock },
  props: {
    mapFlag: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      points: [{
        name: '张家口',
        text: [{
          name: '企业总数',
          value: '80',
          unit: '万户'
        }, {
          name: '个体数',
          value: '14',
          unit: '万户'
        }, {
          name: '农专户数',
          value: '23',
          unit: '万户'
        }, {
          name: '小微企业数',
          value: '15',
          unit: '万户'
        }],
        left: '250',
        top: '210'
      }, {
        name: '保定',
        text: [{
          name: '企业总数',
          value: '105',
          unit: '万户'
        }, {
          name: '个体数',
          value: '35',
          unit: '万户'
        }, {
          name: '农专户数',
          value: '19',
          unit: '万户'
        }, {
          name: '小微企业数',
          value: '27',
          unit: '万户'
        }],
        left: '265',
        top: '400'
      }, {
        name: '唐山',
        text: [{
          name: '企业总数',
          value: '88',
          unit: '万户'
        }, {
          name: '个体数',
          value: '29',
          unit: '万户'
        }, {
          name: '农专户数',
          value: '12',
          unit: '万户'
        }, {
          name: '小微企业数',
          value: '32',
          unit: '万户'
        }],
        left: '480',
        top: '330'
      }],
      msg: {
        name: '河北省',
        text: [{
          name: '企业总数',
          value: '430',
          unit: '万户'
        }, {
          name: '个体数',
          value: '130',
          unit: '万户'
        }, {
          name: '农专户数',
          value: '68',
          unit: '万户'
        }, {
          name: '小微企业数',
          value: '98',
          unit: '万户'
        }]
      },
      img1: {
        img: require('./../BlockImg/地图.png'),
        width: 780,
        height: 696
      },
      img2: {
        img: require('./../BlockImg/地图-活力.png'),
        width: 780,
        height: 696
      }
    }
  },
  methods: {
    pointChange (item) {
      this.msg = item
    }
  }
}
</script>

<style scoped lang="less">
.MapComponent {
    position: relative;

    > div {
        position: absolute;
    }

    .point {
        position: absolute;
        background-image: url("./img/红色.png");
        background-size: 36px 49px;
        width: 60px;
        height: 49px;
        background-position: center;
        background-repeat: no-repeat;
        text-align: center;
        line-height: 50px;
        cursor: pointer;
    }

    .msg {
        width: 203px;
        height: 203px;
        position: absolute;
        right: 45px;
        bottom: 51px;
        padding: 10px 20px;

        .title {
            text-align: center;
            font-size: 14px;
            height: 40px;
            line-height: 40px;
        }

        .table {
            width: 100%;
            height: calc(100% - 70px);
        }

        .name {
            font-size: 12px;
            text-align: right;
        }

        .value {
            font-size: 24px;
            font-family: 'LCD';
            text-align: right;
        }

        .unit {
            font-size: 12px;
        }
    }
}
</style>
