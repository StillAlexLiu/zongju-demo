<template>
    <div class='BusinessDia3'  @click="click">3</div>
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
}
</style>
