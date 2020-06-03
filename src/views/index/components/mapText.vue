<template>
    <div class="mapText"><span class="title">{{title}}:</span>{{text}}</div>
</template>

<script>
export default {
  name: 'mapText',
  props: {
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="less">
.mapText {
    background-image: url("./img/container-title.png");
    height: 31px;
    width: 287px;
    font-size: 12px;
    line-height: 31px;
    background-size: 100% 100%;
    color: #ccc;
    .title{
        padding: 0 10px;
        font-size: 12px;
        color: #fff;
    }
}
</style>
