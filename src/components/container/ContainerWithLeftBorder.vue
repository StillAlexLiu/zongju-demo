<template>
    <div class="ContainerWithLeftBorder">
        <div class="left-border" :class="border?'line':''"></div>
        <div class="body">
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ContainerWithLeftBorder',
  props: {
    border: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped lang="less">
.ContainerWithLeftBorder {
    /*background: linear-gradient(270deg, rgba(51, 75, 115, 0) 0%, rgba(51, 75, 115, 0.5) 50%, rgba(51, 75, 115, 0) 100%);*/
    > * {
        float: left;
        height: 100%;
    }

    .body {
        width: calc(100% - 1px);
    }

    .left-border {
        width: 1px;
    }

    .line {
        background: linear-gradient(0deg, rgba(206, 235, 255, 0.2) 0%, rgba(183, 222, 255, 1) 50%, rgba(160, 210, 255, 0.18) 100%) no-repeat center;
        background-size: 100% 70%;
    }

}

</style>
