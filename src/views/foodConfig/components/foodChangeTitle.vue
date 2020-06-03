<template>
  <div class="foodChangeTitle full-width">
    <div class="foodChangeTitleView full-height" v-for="(item,index) in data" :key="index" :class="{'active':index==ChangeIndex}" @click="foodChangeTitleView(item,index)">
          <span>{{item.title}}</span>
      </div>
  </div>
</template>
<script >

export default {
  name: 'foodChangeTitle',
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
    foodChangeTitleView (item, index) {
      this.ChangeIndex = index
      this.$emit('foodChangeTitleView', item)
    }
  }
}
</script>
<style lang="less">
.foodChangeTitle{
  display: flex;
  padding-bottom: 10px;
  // padding-top: 5px;
  .foodChangeTitleView{
    font-size: 14px;
    padding-right: 3%;
    cursor: pointer;
    span {
      line-height: 24px;
      border-bottom: 1px solid rgba(0,0,0,0);
      padding-bottom: 2px;
    }
    &.active{
      span{
          // border-bottom: 1px solid rgba(255,255,255,1);
      }
    }
    &:last-child{
      padding-right: 0;
    }
  }
}

</style>
