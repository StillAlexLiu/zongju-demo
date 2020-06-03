<template>
    <span class="Arrow" :style="{height:size+'px'}">
        <img :style="{height:size+'px'}" v-if="dir==='right'" src="./img/arrow-right.png">
        <img :style="{height:size+'px'}" v-else-if="dir==='up'" src="./img/arrow-up.png">
        <img :style="{height:size+'px'}" v-else-if="dir==='down'" src="./img/arrow-down.png">
        <div :style="{height:size+'px',width:size+'px'}" v-else class="center"></div>
    </span>
</template>

<script>
export default {
  name: 'Arrow',
  props: {
    dir: {
      type: String,
      default: 'right'
    },
    size: {
      type: Number,
      default: 14
    }
  }
}
</script>

<style scoped lang="less">
.Arrow {
    /*height: 10px;*/

    > img {
        /*height: 10px;*/
        vertical-align: middle;
    }

    .center {
        /*height: 10px;*/
        /*width: 10px;*/
        background-image: linear-gradient(0, #6DD400 0%, #6DD400 100%);
        background-size: 10px 2px;
        background-repeat: no-repeat;
        background-position: center;
    }
}
</style>
