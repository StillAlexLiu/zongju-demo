<template>
    <div class="GroupChanQuan full">
        <div v-for="(item,index) in data" :key="index" class="item ">
            <div>{{item.name}}<span class="number-font">{{item.value}}</span><span class="unit">{{item.unit}}</span>
            </div>
            <div>
                <span class="number">{{item.percent}}</span>
                <Arrow :dir="item.status"/>
            </div>
            <div><span class="text">{{item.text}}</span><span class="unit">{{item.subText}}</span><span class="number">{{item.change}}</span><span
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
    flex-direction: column;
    justify-content: space-around;
    align-items: stretch;
    font-size: 16px;

    .item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        span {
            padding: 0 2px;
        }

        > div {
            &:nth-child(1) {
                flex: 4;
            }

            &:nth-child(2) {
                flex: 2;
            }

            &:nth-child(3) {
                flex: 3;
            }
        }
    }

    .unit {
        font-size: 12px;
    }

    .number {
        font-size: 20px;
    }

    .text {
        font-size: 14px;
    }
}
</style>
