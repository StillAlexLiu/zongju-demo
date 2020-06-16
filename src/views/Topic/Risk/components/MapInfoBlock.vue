<template>
    <div class='MapInfoBlock'>
        <div class="title" :style="{backgroundImage:'url('+colors[color]+')'}" @click="$emit('click')">
            {{data.title}}
        </div>
        <div class="text" v-if="active">
            <div v-for="(item,index) in data.text" :key="index" class="row">
                <div class="point">
                    <div></div>
                </div>
                <div class="text-in-line">{{item}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MapInfoBlock',
  data () {
    return {
      colors: {
        orange: require('./img/打点/橙色预警框.png'),
        red: require('./img/打点/红色预警框.png'),
        blue: require('./img/打点/蓝色预警框.png'),
        yellow: require('./img/打点/黄色预警框.png')
      }
    }
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    },
    color: {
      type: String,
      default: 'yellow'
    },
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="less">
.MapInfoBlock {
    width: 130px;

    .title {
        height: 30px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% 100%;
        cursor: pointer;
        line-height: 30px;
        text-align: center;
    }

    .text {
        background-image: url("./img/文字背景框.png");
        width: 100%;

        .row {
            display: flex;

            .point {
                width: 22px;
                padding-left: 7px;
                padding-top: 5px;

                div {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background-image: linear-gradient(0deg, #FF5151 0%, #FF7C48 100%);
                }
            }

            .text-in-line {
                width: calc(100% - 22px);
            }

            padding: 5px 0;
        }
    }
}
</style>
