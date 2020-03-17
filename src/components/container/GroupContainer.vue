<template>
    <div class="GroupContainer">
        <div class="item" v-for="(item,index) in data" :key="index" :class="0<index?'line':''">
            <slot name="item" v-bind:item="item">
            </slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'GroupContainer',
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
.GroupContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: stretch;

    .item {
        flex-grow: 1;
        align-self: center;
        height: 100%;
        background: linear-gradient(270deg, rgba(51, 75, 115, 0) 0%, rgba(51, 75, 115, 0.5) 50%, rgba(51, 75, 115, 0) 100%);
    }

    .line:before {
        width: 1px;
        height: 100%;
        content: "";
        float: left;
        background: linear-gradient(0deg, rgba(206, 235, 255, 0.2) 0%, rgba(183, 222, 255, 1) 50%, rgba(160, 210, 255, 0.18) 100%) no-repeat center;
        background-size: 100% 70%;
    }
}
</style>
