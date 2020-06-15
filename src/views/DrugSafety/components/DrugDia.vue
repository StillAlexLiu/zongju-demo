<template>
    <div class='DrugDia' @click="close">
        <div class="full img"></div>
    </div>
</template>

<script>
export default {
  name: 'DrugDia',
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="less">
.DrugDia {
    .img {
        background-position: center;
        background-image: url("./../BlockImg/食品弹出框-抽检分析.png");
        background-size: 100% 100%;
    }
}
</style>
