<template>
    <div class="MapDia1" @click="close">
        <div class="full img"></div>
    </div>
</template>

<script>
export default {
  name: 'MapDia1',
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="less">
.MapDia1 {
    position: relative;
    .full{
        background-image: url("./dia1.png");
        background-size: 100% 100%;
    }
    .close {
        position: absolute;
        cursor: pointer;
        top: 0;
        right: 0;
    }
}
</style>
