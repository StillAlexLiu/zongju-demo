<template>
    <div class='InfoBlock'>
        <div v-for="(item,index) in data" :key="index">
            <span class="name">{{item.name}}</span><span class="value number-font">{{item.value}}</span><span>万</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'InfoBlock',
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
.InfoBlock {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    font-size: 14px;
    padding: 5px;

    > div {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        line-height: 24px;
    }
}
</style>
