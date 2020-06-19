<template>
    <div class="GroupZhongDian full">
        <div v-for="(item,index) in data" :key="index" class="  " :class="index!==0?'line':''">
            <span class="" style="font-size: 16px">{{item.name}}</span>
            <div class="right">
                <span class="number-font">{{item.value}}</span>
                <span style="font-size: 12px;line-height: 24px">{{item.unit}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'GroupZhongDianNew',
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
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: stretch;
    padding: 0 30px;

    > div {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        flex-basis: 42px;
        background-image: linear-gradient(270deg, rgba(51, 75, 115, 0.00) 3%, rgba(51, 75, 115, 0.35) 51%, rgba(51, 75, 115, 0.00) 100%);

        .right {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: center;

            span {
                padding: 0 3px;
            }
        }
    }

}
</style>
