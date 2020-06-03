<template>
    <div class="GroupGongYe full-height">
        <div v-for="(item,index) in data" :key="index" class="dt full-height  w-1-2" :class="index!==0?'line':''">
            <div class="dr">
                <div class="dc title text-center">
                    {{item.title}}
                </div>
                <div class="dc  sub-item">
                    <div class="unit-font full-width">
                        {{item.name1}}
                    </div>
                    <span class="number-font">
                        {{item.value1}}
                    </span>
                    <span class="unit-font">
                        {{item.unit}}
                    </span>
                </div>
                <div class="dc  sub-item">
                    <div class="unit-font full-width">
                        {{item.name2}}
                    </div>
                    <span class=" percent-font">
                        {{item.value2}}
                    </span>
                    <Arrow :dir="item.status" v-if="item.status!==''"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Arrow from './Arrow'

export default {
  name: 'GroupGongYe',
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
    align-items: baseline;
    background-image: linear-gradient(270deg, rgba(51, 75, 115, 0.00) 3%, rgba(51, 75, 115, 0.35) 51%, rgba(51, 75, 115, 0.00) 100%);

    > div {
        /*background-image: linear-gradient(270deg, rgba(51, 75, 115, 0.00) 3%, rgba(51, 75, 115, 0.35) 51%, rgba(51, 75, 115, 0.00) 100%);*/
    }

    .line {
        background: linear-gradient(0deg, rgba(206, 235, 255, 0.2) 0%, rgba(183, 222, 255, 1) 50%, rgba(160, 210, 255, 0.18) 100%) no-repeat left;
        background-size: 1px 70%;
    }

    .sub-item {
        padding: 0 4px;
    }

    .title {
        width: 70px;
    }
}
</style>
