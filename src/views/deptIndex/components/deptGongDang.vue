<template>
    <div class="deptGongDang">
        <div class="deptList" v-for="(item, index) in data" :key="index">
            <span class="deptName">{{item.title}}</span>
            <span class="deptNum1 number-font">{{item.value}}</span>
            <span class="deptdw1">{{item.unit}}<span v-if="item.percent"><span class="percent">{{item.percent}}</span></span></span>
            <!-- <span class="deptNum2">%</span> -->
        </div>
    </div>
</template>

<script>
export default {
  name: 'deptGongDang',
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
    }
  }
}
</script>

<style lang='less' scoped>
.deptGongDang{
  width: 100%;
  height: 100%;
  .deptList{
      width: 100%;
      height: 33.3%;
      margin-bottom: 1%;
      background:linear-gradient(270deg,rgba(51,75,115,0) 0%,rgba(51,75,115,0.5) 50%,rgba(51,75,115,0) 100%);
      text-align: center ;
      .deptName{
        // font-size: 14px;
        width: 100%;
        display: block;
        // line-height: 16px;
        padding-top: 2px;
      }
      .deptNum1{
        // font-size: px;
      }
      .deptdw1{
        font-size: 12px;
      }
      .percent{
        font-size: 18px;
        padding-left: 18px;
      }

  }
}
</style>
