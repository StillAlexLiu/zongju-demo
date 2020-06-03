<template>
    <div class="GroupShiPin">
        <div v-for="(item,index) in  data" :key="index" class="w-1-2 h-1-2 ">
            <div class=" item">
                <div class="w-1-4 full-height name">
                    {{item.name}}
                </div>
                <div class="w-3-4 full-height line right">
                    <div class="number-font" style="width: 38%;text-align: right">{{item.value}}</div>
                    <div class="unit-font" style="width: 16%;">{{item.unit}}</div>
                    <!--                    <div class=" full-height float-left">-->
                    <!--                    </div>-->
                    <div class="unit-font" style="width: 14%;">{{item.text}}</div>
                    <div class="percent-font" style="width: 30%; text-align: right;">{{item.trend}}</div>
                    <div style="text-align: right;">
                        <Arrow :dir="item.status"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Arrow from './Arrow'

export default {
  name: 'GroupShiPin',
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
.GroupShiPin {
    padding: 5px 5px 0 5px;

    .item {
        background-image: linear-gradient(270deg, rgba(51, 75, 115, 0.00) 3%, rgba(51, 75, 115, 0.35) 51%, rgba(51, 75, 115, 0.00) 100%);
        height: 28px;
        line-height: 28px;
    }

    .line {
        background: linear-gradient(0deg, rgba(206, 235, 255, 0.2) 0%, rgba(183, 222, 255, 1) 50%, rgba(160, 210, 255, 0.18) 100%) no-repeat left;
        background-size: 1px 70%;
    }

    .name {
        text-indent: 0px;
    }

    .right {
        padding-left: 3px;

        > div {
            float: left;
        }

        span {
            margin-left: 3px;
        }

    }
}
</style>
