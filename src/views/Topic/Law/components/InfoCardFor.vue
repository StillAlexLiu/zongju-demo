<template>
    <div class='InfoCardFor'>
        <InfoCard v-for="(item,index) in data" :key="index" :data="item"/>
    </div>
</template>

<script>
import InfoCard from './InfoCard'

export default {
  name: 'InfoCardFor',
  components: { InfoCard },
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
.InfoCardFor {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: stretch;
}
</style>
