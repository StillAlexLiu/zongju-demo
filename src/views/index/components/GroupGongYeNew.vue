<template>
    <div class="GroupGongYe full-height">
        <div v-for="(item,index) in data" :key="index" class="item full-height  w-1-2" :class="index!==0?'line':''">
            <div style="font-size: 14px">
                {{item.name}}
            </div>
            <div class="number-font">
                {{item.value}}
            </div>
            <div style="font-size: 12px">
                {{item.unit}}
            </div>
            <span></span>
            <div class=" ">
                {{item.name2}}
            </div>
            <div style="font-size: 16px">
                {{item.value2}}
            </div>
            <span class=" percent-font"><Arrow :dir="item.status" v-if="item.status!==''"/></span>
        </div>
    </div>
</template>

<script>
import Arrow from './Arrow'

export default {
  name: 'GroupGongYeNew',
  components: { Arrow },
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style scoped lang="less">
.GroupGongYe {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: stretch;

    .line {
        background: linear-gradient(0deg, rgba(206, 235, 255, 0.2) 0%, rgba(183, 222, 255, 1) 50%, rgba(160, 210, 255, 0.18) 100%) no-repeat left;
        background-size: 1px 70%;
    }

    .item {
        display: flex;
        justify-content: center;
        align-items: center;

        > * {
            padding: 0 2px;
        }
    }

}
</style>
