<template>
    <div class="BlockShiPin text-center">
        <div class=" name">
            {{data.name}}
        </div>
        <div class=" value ">
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
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: stretch;
    cursor: pointer;

    .name {
    }

    .value {
        font-size: 40px;
        font-family: 'LCD';
        line-height: 42px;
        color: #3FD3D6 !important;
    }
}
</style>
