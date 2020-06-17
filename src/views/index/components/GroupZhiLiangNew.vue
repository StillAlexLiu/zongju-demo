<template>
    <div class="GroupZhiLiang full">
        <div v-for="(item,index) in data" :key="index" class="">
            <div class="title text-center ">
                {{item.title}}
            </div>
            <div class="right-value">
                <div v-for="(item2,index2) in item.value" :key="index2" class=" full-height text-block "
                     :class="index2===0?'w-1-2':'w-1-2'">
                    <div style="font-size: 16px">{{item2.name}}</div>
                    <div class="">
                        <span class=" number-font"
                              :class="isPer(item2.value)?'percent-font':''">{{item2.value}}</span><span
                        class=" unit-font" style="font-size: 12px">{{item2.unit}}</span>
                        <span class="">
                            <Arrow :dir="item2.status" v-if="item2.status!==''"/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Arrow from './Arrow'

export default {
  name: 'GroupZhiLiangNew',
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
    padding: 10px 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: stretch;

    > div {
        height: 50px;
        flex-basis: 50%;
    }

    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 50px;
        font-size: 12px;
        line-height: 14px;
        background-image: url("./img/bg-zhiliang.png");
        white-space: pre-line;
        background-size: 100% 100%;
        float: left;
    }

    .right-value {
        width: calc(100% - 50px);
        height: 100%;
        float: left;
        padding: 0 10px;
    }

    .sub-name {
        width: 55%;
    }

    .text-block {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;

        .percent-font {
            font-size: 20px;
            font-weight: normal;
        }
    }
}
</style>
