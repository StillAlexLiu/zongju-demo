<template>
    <div class="GroupChanQuan full">
        <div v-for="(item,index) in data" :key="index" class="item">
            {{item}}
        </div>
    </div>
</template>

<script>
export default {
  name: 'GroupChanQuan',
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
.GroupChanQuan {
    padding: 3px 10px;

    .item {
        margin: 0 3px;
        height: calc(33% - 6px);
        background-image: linear-gradient(270deg, rgba(51, 75, 115, 0.00) 3%, rgba(51, 75, 115, 0.35) 51%, rgba(51, 75, 115, 0.00) 100%);
    }
}
</style>
