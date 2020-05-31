<template>
    <div class="GroupChanQuan full">
        <div v-for="(item,index) in data" :key="index" class="item ">
            <!--            {{item}}-->
            <!--            <div class="w-1-6 full-height">-->
            <!--                <img :src="item.icon" class="icon">-->
            <!--            </div>-->
            <div class="w-6-6 full-height">
                <div class="row full-height" v-for="(item2,index2) in item.data" :key="index2" :class="width[index2]">
                    <div class="h-3-7">{{item2.name}}</div>
                    <div class="h-4-7">
                        <span class=" "
                              :class="isPer(item2.value,index2)?'percent-font':'number-font'">{{item2.value}}</span>
                        <span>{{item2.unit}}</span>
                        <Arrow :dir="item2.status"
                               :size="18"
                               v-if="item2.status&&item2.status!==''"/>
                        <span class="percent-font "> {{item2.from}}</span>
                        {{item2.fromUnit}}
                        <Arrow v-if="item2.arrow" :size="12" dir="right"/>
                        <span class="percent-font "> {{item2.to}}</span>
                        {{item2.toUnit}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Arrow from './Arrow'

export default {
  name: 'GroupChanQuan',
  components: { Arrow },
  data () {
    return {
      width: ['w1', 'w2', 'w3']
    }
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    isPer (str, index) {
      return str.charAt(str.length - 1) === '%' || index === 2
      // return str === 2
    }
  }
}
</script>

<style scoped lang="less">
.GroupChanQuan {
    padding: 3px 1px;

    .icon {
        height: 90%;
    }

    .num {
        font-size: 18px;
    }

    .item {
        margin: 4px 0;
        height: calc(33% - 8px);
        /*background-image: linear-gradient(270deg, rgba(51, 75, 115, 0.00) 3%, rgba(51, 75, 115, 0.35) 51%, rgba(51, 75, 115, 0.00) 100%);*/
    }

    .w1 {
        width: 30%;
    }

    .w2 {
        width: 30%;
    }

    .w3 {
        width: 40%;
    }

    img {
        width: 99%;
    }

    .row {
        float: left;
    }

}
</style>
