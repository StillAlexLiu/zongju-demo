<template>
  <div class="changeTab full-width">
    <div class="changeTabView full-height" v-for="(item,index) in data" :key="index" :class="{'active':index==ChangeIndex}" @click="changeTabView(item,index)">
          <span>{{item.title}}</span>
      </div>
  </div>
</template>
<script >

export default {
  name: 'changeTab',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      ChangeIndex: 0
    }
  },
  methods: {
    changeTabView (item, index) {
      this.ChangeIndex = index
      this.$emit('changeTabView', item)
    }
  }
}
</script>
<style lang="less"  >
.changeTab{
  display: flex;
  padding-bottom: 10px;
  // padding-top: 5px;
  .changeTabView{
    padding-right: 3%;
    cursor: pointer;
    span {
      line-height: 24px;
      border-bottom: 1px solid rgba(0,0,0,0);
      padding-bottom: 2px;
      font-size: 14px;
    }
    &.active{
      span{
          border-bottom: 1px solid rgba(255,255,255,1);
      }
    }
    &:last-child{
      padding-right: 0;
    }
  }
}

</style>
