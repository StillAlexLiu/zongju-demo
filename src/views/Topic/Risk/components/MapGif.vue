<template>
    <div class='MapGif full'>
        <div class="point" v-for="(item,index) in points" :key="index" :style="{left:item.left+'px',top:item.top+'px'}">
            <MapInfoBlock class="info" :color="item.color" :data="item" :active="selectedIndex===index"
                          @click="click(index)"/>
            <AnimatePoint class="icon" :color="item.color"/>
        </div>
        <div class="infoBlock" v-if="selectedIndex!==null">
            <div class="title">
                重要预警
            </div>
            <div class="text-block">
                <div v-for="(item,index) in points[selectedIndex].text" :key="index">
                    {{index+1}}.{{item}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AnimatePoint from './AnimatePoint'
import MapInfoBlock from './MapInfoBlock'

const gifRed = require('./img/合成-1.gif')
export default {
  name: 'MapGif',
  components: {
    MapInfoBlock,
    AnimatePoint
  },
  data () {
    return {
      selectedIndex: 0,
      points: [{
        icon: gifRed,
        left: 300,
        top: 470,
        color: 'red',
        title: '药物预警',
        text: ['药物引发严重伤害风险', '药物不良反应']
      }, {
        icon: gifRed,
        left: 500,
        top: 700,
        color: 'yellow',
        title: '食品预警',
        text: ['食品药品安全风险预警', '冷链运输']
      }, {
        icon: gifRed,
        left: 100,
        top: 570,
        color: 'blue',
        title: '食品预警',
        text: ['药物引发严重伤害风险', '非布司他心血管和全因死亡风险']
      }, {
        icon: gifRed,
        left: 600,
        top: 470,
        color: 'orange',
        title: '食品预警',
        text: ['农药残留']
      }]
    }
  },
  methods: {
    click (index) {
      if (this.selectedIndex === index) {
        this.selectedIndex = null
      } else {
        this.selectedIndex = index
      }
    }
  }
}
</script>

<style scoped lang="less">
.MapGif {
    background-image: url("./img/中间地图-预警事件@1x.png");
    background-size: 780px 974px;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;

    .point {
        position: absolute;
        width: 1px;
        height: 1px;

        > div {
            position: absolute;
        }

        .icon {
            bottom: 0;
            left: 30px;
        }

        .info {
            bottom: 150px;
        }
    }

    .infoBlock {
        position: absolute;
        background-image: url("./img/文字框.png");
        width: 748px;
        height: 157px;
        left: 22px;
        bottom: 20px;
        padding: 10px 15px;

        .title {
            height: 21px;
            background-image: url("./img/icon提示.png"), url("./img/重要预警背景框.png");
            background-size: 16px 15px, auto 21px;
            background-position: 8px center, left;
            line-height: 21px;
            text-indent: 30px;
            background-repeat: no-repeat;
        }

        .text-block {
            height: calc(100% - 21px);
            padding: 5px 0;

            > div {
                font-size: 14px;

                &:nth-child(even) {
                    color: #F5A623;
                }

                &:nth-child(odd) {
                    color: #7ED321;
                }

            }
        }
    }
}
</style>
