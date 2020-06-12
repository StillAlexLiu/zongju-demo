<template>
    <div class='BusinessDia3' @click="click">
        <div class="full img">

        </div>
    </div>
</template>

<script>
export default {
  name: 'BusinessDia3',
  methods: {
    click () {
      this.$emit('click', 2)
    }
  }
}
</script>

<style scoped lang="less">
.BusinessDia3 {
    .img {
        background-image: url("./img/消费环境.png");
        background-size: 100% 100%;
        background-position: center;
    }
}
</style>
