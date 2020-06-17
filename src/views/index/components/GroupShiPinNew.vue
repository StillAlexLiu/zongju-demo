<template>
    <div class="GroupShiPin">
        <div v-for="(item,index) in  data" :key="index" class="w-1-2 h-1-2 ">
            <div class="item" style="padding: 0 10px">
                <div class="w-2-7 full-height name" style="font-size: 16px">
                    {{item.name}}
                </div>
                <div class="w-5-7 full-height  right">
                    <div class="number-font" style="width: 38%;text-align: right;font-size: 19px">{{item.value}}</div>
                    <div class="unit-font" style="width: 16%;font-size: 12px">{{item.unit}}</div>
                    <div class="percent-font" style="width: 30%; text-align: right;font-size: 16px;">{{item.trend}}
                    </div>
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
  name: 'GroupShiPinNew',
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
        height: 28px;
        line-height: 28px;
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
