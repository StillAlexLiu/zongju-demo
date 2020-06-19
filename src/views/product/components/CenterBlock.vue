<template>
    <div class='CenterBlock'>
        <div class="h-1-2">
            <div class="w-1-3 full-height list">
                <div v-for="(item,index) in list" :key="index" :class="active===index?'active':''"
                     @click="change(index)">
                    <div class="point" :style="{backgroundColor:index>2?'rgba(0,0,0,0)':colors[index]}">{{index+1}}
                    </div>
                    {{item}}
                </div>
            </div>
            <div class="w-1-3 full-height center-top">
                {{numbers[active]}}
            </div>
            <div class="w-1-3 full-height">
                <ChartsRadar :data="chartsData[active]" :indicator="indicator"/>
            </div>
        </div>
        <div class="h-1-2">
            <div class="full-height w-1-2 bottom-left">
                <div class="n1">{{ numbersArray[active][0]}}<span>%</span></div>
                <div class="n2">{{ numbersArray[active][1]}}<span>%</span></div>
                <div class="n3">{{ numbersArray[active][2]}}<span>%</span></div>
            </div>
            <div class="full-height w-1-2">
                <img-block class="full" :data="imgs[active]"/>
            </div>
        </div>
    </div>
</template>

<script>
import ImgBlock from '../../common/ImgBlock'
import ChartsRadar from '../../Topic/Law/components/ChartsRadar'
import Mock from 'mockjs'

export default {
  name: 'CenterBlock',
  components: {
    ChartsRadar,
    ImgBlock
  },
  data () {
    return {
      active: 0,
      colors: ['#E3475A', '#FE9E55', '#4A90E2'],
      list: ['口罩等防护用品紧缺', '水表改造后计价上扬问题的集..', '关于部分碟刹自行车的舆情预警', '福建奔驰汽车有限公司召回部...', '淘宝“一分钱团购”遭数万用户投诉', '西门子冰箱门质量门舆情'],
      numbers: [98, 96, 94, 90, 89, 88],
      numbersArray: [[9, 83, 8], [3, 90, 7], [90, 3, 7], [88, 10, 2], [76, 13, 11], [19, 33, 48]],
      imgs: [
        {
          img: require('./../BlockImg/group/全网红色警戒1.png'),
          width: 396,
          height: 214
        },
        {
          img: require('./../BlockImg/group/全网红色预警1.png'),
          width: 396,
          height: 214
        },
        {
          img: require('./../BlockImg/group/全网红色预警2.png'),
          width: 396,
          height: 214
        },
        {
          img: require('./../BlockImg/group/全网红色预警3.png'),
          width: 396,
          height: 214
        },
        {
          img: require('./../BlockImg/group/全网红色预警4.png'),
          width: 396,
          height: 214
        },
        {
          img: require('./../BlockImg/group/全网红色预警5.png'),
          width: 396,
          height: 214
        }
      ],
      indicator: [
        {
          name: '事件',
          max: 100
        }, {
          name: '评论',
          max: 100
        }, {
          name: '举报',
          max: 100
        }, {
          name: '申诉',
          max: 100
        }, {
          name: '关注度',
          max: 100
        }
      ],
      chartsData: [[{
        name: '',
        value: [Mock.Random.natural(60, 100), Mock.Random.natural(60, 100), Mock.Random.natural(60, 100), Mock.Random.natural(60, 100), Mock.Random.natural(60, 100)]
      }], [{
        name: '',
        value: [Mock.Random.natural(60, 100), Mock.Random.natural(60, 100), Mock.Random.natural(60, 100), Mock.Random.natural(60, 100), Mock.Random.natural(60, 100)]
      }], [{
        name: '',
        value: [Mock.Random.natural(60, 100), Mock.Random.natural(60, 100), Mock.Random.natural(60, 100), Mock.Random.natural(60, 100), Mock.Random.natural(60, 100)]
      }], [{
        name: '',
        value: [Mock.Random.natural(60, 100), Mock.Random.natural(60, 100), Mock.Random.natural(60, 100), Mock.Random.natural(60, 100), Mock.Random.natural(60, 100)]
      }], [{
        name: '',
        value: [Mock.Random.natural(60, 100), Mock.Random.natural(60, 100), Mock.Random.natural(60, 100), Mock.Random.natural(60, 100), Mock.Random.natural(60, 100)]
      }], [{
        name: '',
        value: [Mock.Random.natural(60, 100), Mock.Random.natural(60, 100), Mock.Random.natural(60, 100), Mock.Random.natural(60, 100), Mock.Random.natural(60, 100)]
      }]]
    }
  },
  methods: {
    change (index) {
      this.active = index
    }
  }
}
</script>

<style scoped lang="less">
.CenterBlock {
    .list {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: stretch;
        padding-bottom: 30px;

        > div {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            height: 32px;
            background: rgba(42, 49, 73, 0.50);
            padding: 0 10px;
            font-size: 14px;

            .point {
                width: 18px;
                height: 18px;
                border-radius: 50%;
                text-align: center;
                line-height: 18px;
                margin-right: 5px;
            }
        }
    }

    .center-top {
        background-image: url("./img/热点舆情.png");
        background-size: 204px 192px;
        background-position: center;
        background-repeat: no-repeat;
        font-family: 'LCD';
        font-size: 64px;
        color: #56E0FF;
        text-align: center;
        padding-top: 100px;
    }

    .bottom-left {

        background-image: url("./img/情感属性.png");
        background-size: 345px 203px;
        background-position: center;
        background-repeat: no-repeat;
        /*position: relative;*/
        color: #FFD589;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: stretch;
        padding: 0 30px;

        > div {
            /*position: absolute;*/
            font-family: 'LCD';

            > span {
                font-size: 24px;
            }
        }

        .n1 {
            font-size: 36px;
            padding-top: 140px;
        }

        .n2 {
            font-size: 48px;
            padding-top: 100px;
        }

        .n3 {
            font-size: 36px;
            padding-top: 140px;
        }

    }

    .active {
        background-image: linear-gradient(-90deg, rgba(69, 148, 232, 0.27) 0%, rgba(160, 210, 255, 0.00) 100%);
        border-left: 2px solid #fff;
    }
}
</style>
