<template>
    <div class="tree">
        <div v-for="(item,index) in data" :key="index">
            {{item.node_name}}
            <tree :data="item.children"/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'tree',
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
.tree {
    border-left: 1px solid #ffffff;
    padding-left: 10px;
}
</style>
