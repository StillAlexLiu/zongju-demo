<template>
    <div class="BlockShiPin text-center">
        <div class="h-1-4 name">
            {{data.name}}
        </div>
        <div class="h-3-4 value number-font">
            {{data.value}}
        </div>
    </div>
</template>

<script>
export default {
  name: 'BlockShiPin',
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
.BlockShiPin {
    background-image: url("./img/block-shipin.png");
    background-size: 100% 70%;
    background-position: center;
    background-repeat: no-repeat;

    .name {
        line-height: 60px;
    }

    .value {
        font-size: 40px;
        font-family: 'LESLIE';
        line-height: 64px;
        color: #3FD3D6 !important;
    }
}
</style>
