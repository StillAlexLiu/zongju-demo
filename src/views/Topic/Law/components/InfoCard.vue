<template>
    <div class='InfoCard'>
        <div class="name">{{data.name}}</div>
        <div class="value number-font">{{data.value}}<span class="unit-font">{{data.unit}}</span></div>
        <div class="text" v-if="data.text&&data.text!==''"> {{data.text}}</div>
    </div>
</template>

<script>
export default {
  name: 'InfoCard',
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
.InfoCard {
    background-image: linear-gradient(270deg, rgba(51, 75, 115, 0.00) 3%, rgba(51, 75, 115, 0.35) 51%, rgba(51, 75, 115, 0.00) 100%);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .text {
        font-size: 10px;
    }
}
</style>
