<template>
    <div class='BusinessDia2' @click="click">
        <div class="full img">

        </div>
    </div>
</template>

<script>
export default {
  name: 'BusinessDia2',
  methods: {
    click () {
      this.$emit('click', 1)
    }
  }
}
</script>

<style scoped lang="less">
.BusinessDia2 {
    .img {
        background-image: url("./img/竞争环境.png");
        background-size: 100% 100%;
        background-position: center;
    }
}
</style>
