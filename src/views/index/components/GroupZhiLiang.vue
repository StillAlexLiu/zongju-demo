<template>
    <div class="GroupZhiLiang full">
        <div v-for="(item,index) in data" :key="index" class="w-1-2 h-1-2 block">
            <div class="item">
                <div class="title text-center dt">
                    <span class="dc" style="font-size: 12px">{{item.title}}</span>
                </div>
                <div class="right-value">
                    <div v-for="(item2,index2) in item.value" :key="index2" class="w-1-2 full-height dt"
                         style="padding: 0 3px;float: left; overflow: hidden">
                        <span class="dc ws" style="font-size: 12px">{{item2.name}}</span>
                        <span class="dc number-font"
                              style="font-size: 14px"
                              :class="isPer(item2.value)?'percent-font':''">{{item2.value}}</span>
                        <span class="dc unit-font">{{item2.unit}}</span>
                        <span class="dc"><Arrow :dir="item2.status" v-if="item2.status!==''"/></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Arrow from './Arrow'

export default {
  name: 'GroupZhiLiang',
  components: { Arrow },
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    isPer (str) {
      return str.charAt(str.length - 1) === '%'
    }
  }
}
</script>

<style scoped lang="less">
.GroupZhiLiang {
    padding: 10px 0;

    .item {
        margin-top: 10px;
        height: 36px;;
        /*background-image: linear-gradient(270deg, rgba(51, 75, 115, 0.00) 3%, rgba(51, 75, 115, 0.35) 51%, rgba(51, 75, 115, 0.00) 100%);*/

        .title {
            height: 100%;
            width: 36px;
            font-size: 12px;
            line-height: 14px;
            background-image: url("./img/bg-zhiliang.png");
            white-space: pre-line;
            background-size: 100% 100%;
            float: left;
        }

        .right-value {
            width: calc(100% - 36px);
            height: 100%;
            float: left;
        }
    }

    .ws {
        white-space: pre-line;
        line-height: 18px;
    }

    .sub-name {
        width: 55%;
    }

    .block {
        background-image: url("./img/center-value-bg.png");
        background-size: 98% 30%;
        background-position: bottom center;
        background-repeat: no-repeat
    }
}
</style>
