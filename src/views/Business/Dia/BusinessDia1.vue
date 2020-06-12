<template>
    <div class='BusinessDia1' @click="click">1</div>
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
}
</style>
