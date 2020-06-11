<template>
    <div class='ImgBlock'>
        <img :src="data.img" :style="{width:data.width+'px',height:data.height+'px'}" alt="" draggable="false">
    </div>
</template>

<script>
export default {
  name: 'ImgBlock',
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
.ImgBlock {
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    img {
        display: block;
        vertical-align: middle;
    }
}
</style>
