<template>
    <div class="GroupYaoPin">
        <div v-for="(item,index) in data" :key="index" class="text-center">
            <div class="">{{item.name}}</div>
            <div class="text-right">
                <span class="number-font">{{item.value}}</span><span class="unit">{{item.unit}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'GroupZhiFa',
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
.GroupYaoPin {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: stretch;

    > div {
        height: 45px;
        background-image: linear-gradient(270deg, rgba(51, 75, 115, 0.00) 3%, rgba(51, 75, 115, 0.35) 51%, rgba(51, 75, 115, 0.00) 100%);

        .number-font {
            /*font-size: 18px;*/
        }

        .unit {
            font-size: 12px;
        }
    }

    .text-center {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
}
</style>
