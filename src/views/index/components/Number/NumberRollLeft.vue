<template>
    <div class="numberRoll">
        <div class="title">{{title}}</div>
        <template v-for="(item ,index) in (number+'')">
            <div v-if="((number+'').length - index)%3== 0&&index!=0" :key="index+'s'"
                 style="height: 40px;float: left;line-height: 40px;font-size: 30px">
                ,
            </div>
            <Num :index="index" :data="item" class="num" style="float: left" :key="index">
            </Num>
        </template>
        <span>{{unit}}</span>
    </div>
</template>

<script>
import Num from './num'

export default {
  name: 'numberRoll',
  components: { Num },
  data () {
    return {
      count: 0
    }
  },
  props: {
    number: {
      type: Number,
      default: 0
    },
    unit: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="less">
.numberRoll {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: flex-start;
    line-height: 40px;
    color: rgba(184, 184, 184, 1);
    margin-top: 20px;
    > div {
        /*flex-grow: 1;*/

        > div {
            margin: 10px 5px;
        }
    }

    .num {
        margin-right: 4px;
    }

    .title {
        line-height: 40px;
        font-size: 16px;
        margin-right: 10px;
        color: rgba(184, 184, 184, 1);
    }

}
</style>
