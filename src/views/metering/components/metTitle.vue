<template>
  <div class="metTitle full" v-if="data.length>0">
    <div class="full-width h-1-3" v-for="(item,index) in data" :key="index">
      <div class="full metTitleCont">
        <div class="name text-center h-1-3"></div>
        <div class="name text-center h-1-3">{{item}}</div>
        <div class="name text-center h-1-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'metTitle',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {}
}
</script>

<style scoped lang="less">
.metTitle {
  .metTitleCont {
    padding-top: 7%;
    // background: url("../images/bg2.png") no-repeat;
    // background-size: 100% 100%;
  }
  .value {
    font-size: 24px;
    font-family: Impact;
    color: rgba(255, 187, 111, 1);
    letter-spacing: 2px;
    span {
      font-size: 12px;
      color: #fff;
      padding-left: 5px;
    }
  }
}
</style>
