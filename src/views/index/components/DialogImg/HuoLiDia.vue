<template>
    <div class="MapDia2" @click="close">
        <div class="full img"></div>
    </div>
</template>

<script>
export default {
  name: 'HuoLiDia',
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="less">
.MapDia2 {
    position: relative;

    .full {
        background-image: url("./dia3.png");
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
