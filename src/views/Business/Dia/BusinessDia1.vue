<template>
    <div class='BusinessDia1' @click="click">
        <div class="full img">

        </div>
    </div>
</template>

<script>
export default {
  name: 'BusinessDia1',
  methods: {
    click () {
      this.$emit('click', 0)
    }
  }
}
</script>

<style scoped lang="less">
.BusinessDia1 {
    .img {
        background-image: url("./img/准入环境.png");
        background-size: 100% 100%;
        background-position: center;
    }
}
</style>
