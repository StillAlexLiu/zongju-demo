<template>
    <div class='RightList full'>
        <div v-for="(item,index) in data.length/3" :key="index">
            <div v-for="(item2,index2) in data.slice(index*3,index*3+3)" :key="index2">
            <span class="name">
            {{item2.name}}
            </span>
                <span class="value number-font">{{item2.value}}</span>
                户
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'RightList',
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
.RightList {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: stretch;

    > div {
        height: 36px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: stretch;
        background-image: linear-gradient(90deg, rgba(51, 75, 115, 0.00) 3%, rgba(51, 75, 115, 0.35) 51%, rgba(51, 75, 115, 0.00) 100%);

        > div {
            flex-basis: 30%;

            > span {
                line-height: 36px;
                white-space: pre;
            }
        }
    }
}
</style>
