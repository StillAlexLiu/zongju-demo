<template>
    <div class="GroupYaoPin">
        <div v-for="(item,index) in data" :key="index" class="text-center">
            <div class="h-2-5">{{item.name}}</div>
            <div class="h-3-5"><span class="number-font">{{item.value}}</span><span class="unit">{{item.unit}}</span></div>
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
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    > div {
        height: 64px;
        background-image: linear-gradient(270deg, rgba(51, 75, 115, 0.00) 3%, rgba(51, 75, 115, 0.35) 51%, rgba(51, 75, 115, 0.00) 100%);

        .number-font {
            /*font-size: 18px;*/
        }
        .unit{
            font-size: 12px;
        }
    }
}
</style>
