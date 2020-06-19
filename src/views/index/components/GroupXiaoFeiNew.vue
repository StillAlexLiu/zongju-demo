<template>
    <div class="GroupXiaoFei full">
        <container-with-left-border v-for="(item,index) in data" :key="index" :border="index!==0">
            <div class="can full" @click="$emit('itemClick')" :class="index===0?'mouse-pointer':''">
                <div class=" title">{{item.title}}</div>
                <div class="" v-if="item.name">{{item.name}}</div>
                <div class=" number-font" v-if="item.value">{{item.value}}</div>
                <div class="" v-if="item.unit">{{item.unit}}</div>
            </div>
        </container-with-left-border>
    </div>
</template>

<script>
export default {
  name: 'GroupXiaoFeiNew',
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
.GroupXiaoFei {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    text-align: center;
    align-items: stretch;

    .can {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .title {
        font-size: 16px;
    }

    > div {
        flex-grow: 1
    }
}
</style>
