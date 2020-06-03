<template>
    <div class="numberRoll">
        <div class="title">{{title}}</div>
        <template v-for="(item ,index) in (number+'')">
            <div v-if="item==='.'" :key="index+'s'"
                 style="height: 40px;float: left;line-height: 30px;font-size: 40px">
                .
            </div>
            <Num v-else :index="index" :data="item" class="num" style="float: left" :key="index">
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

    > div {
        /*flex-grow: 1;*/

        > div {
            margin: 10px 5px;
        }
    }

    .num {
        margin:0 5px;
    }

    .title {
        line-height: 20px;
        font-size: 16px;
        height: 40px;
        width: 40px;
    }

}
</style>
