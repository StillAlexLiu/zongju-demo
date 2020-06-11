<template>
    <div class='InfoBlock2'>

        <div v-for="(item,index) in data" :key="index">
            <span class="name">{{item.name}}</span><span class="value number-font">{{item.value}}</span><span>万</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'InfoBlock2',
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
.InfoBlock2 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    font-size: 14px;
    flex-wrap: wrap;
    padding: 5px;

    > div {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        line-height: 24px;
        flex-basis: calc(100% / 3 - 20px);
        margin: 10px;
        background-image: linear-gradient(90deg, rgba(51, 75, 115, 0.00) 3%, rgba(51, 75, 115, 0.35) 51%, rgba(51, 75, 115, 0.00) 100%);
    }
}
</style>
