<template>
    <div class='Card'>
        <div style="left: 40px;top:20px;font-size: 24px;">{{data.name}}</div>
        <div style="left: 40px;top:90px;font-size: 16px;">{{data.org}}</div>
        <div style="left: 170px;top:90px;font-size: 16px;">{{data.position}}</div>
        <div style="left: 300px;top:30px;width: 80px;height: 80px;border-radius: 50%;overflow: hidden"><img
            :src="data.img"
            style="width: 80px;" alt="">
        </div>
    </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style scoped lang="less">
.Card {
    position: relative;

    > div {
        position: absolute;
    }
}
</style>
