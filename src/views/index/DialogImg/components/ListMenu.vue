<template>
    <div class='ListMenu'>
        <div v-for="(item,index) in data" :key="index" @click.stop="click(item)">
            <img :src="item.img">
        </div>
    </div>
</template>

<script>
export default {
  name: 'ListMenu',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    click (item) {
      item.active = !item.active
      this.$emit('click', item)
    }
  }
}
</script>

<style scoped lang="less">
.ListMenu {
    width: 100%;
    background: rgba(0, 9, 27, 0.70);
    border: 1px solid rgba(44, 112, 240, 0.61);
    border-radius: 5px;

    img {
        width: 100%;
    }
}
</style>
