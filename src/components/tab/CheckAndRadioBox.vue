<template>
    <div class="CheckAndRadioBox">CheckAndRadioBox</div>
</template>

<script>
export default {
  name: 'CheckAndRadioBox',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style scoped lang="less">
.CheckAndRadioBox {

}
</style>
