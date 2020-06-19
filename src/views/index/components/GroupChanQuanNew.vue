<template>
    <div class="GroupChanQuan full">
        <div v-for="(item,index) in data" :key="index" class="item ">
            <div class="name">{{item.name}}
            </div>
            <div class="block">
                <div class="number-font">{{item.value}}</div>
                <div class="unit">{{item.unit}}</div>
                <div class="number">{{item.percent}}
                    <Arrow :dir="item.status"/>
                </div>
            </div>
            <div class="bottom"><span class="text">{{item.text}}</span><span class="unit">{{item.subText}}</span><span
                class="number2 number-font">{{item.change}}</span><span
                class="unit">{{item.changeUnit}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import Arrow from './Arrow'

export default {
  name: 'GroupChanQuanNew',
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    font-size: 16px;
    text-align: center;

    .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
        flex: 1;

    }

    .block {
        height: 88px;
        background-image: url("./img/圆-背景@2x.png");
        background-size: 88px 88px;
        background-repeat: no-repeat;
        background-position: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .unit {
        font-size: 12px;
    }

    .number {
        font-size: 14px;
    }

    .number2 {
        font-size: 16px;
    }

    .text {
        font-size: 14px;
    }
}
</style>
