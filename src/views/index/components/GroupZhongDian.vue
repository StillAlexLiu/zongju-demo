<template>
    <div class="GroupZhongDian">
        <div v-for="(item,index) in data" :key="index" class="w-1-3 full-height " :class="index!==0?'line':''">
            <span class="" style="white-space:pre; line-height: 15px">{{item.name}}</span>
            <span class="number-font">{{item.value}}</span>
            <span class="unit-font">{{item.unit}}</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'GroupZhongDian',
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
.GroupZhongDian {

    height: 24px;

    > div {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;

        .number-font {
        }

        > span {
            padding: 0 1px;
        }
    }

    .line {
        background: linear-gradient(0deg, rgba(206, 235, 255, 0.2) 0%, rgba(183, 222, 255, 1) 50%, rgba(160, 210, 255, 0.18) 100%) no-repeat left;
        background-size: 1px 70%;
    }
}
</style>
