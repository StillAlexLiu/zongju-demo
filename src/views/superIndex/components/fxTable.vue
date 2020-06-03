<template>
    <div class="publicityTable">
        <div class="publicList" v-for="(item, index) in data" :key="index">
            <span class="publicName">{{item.title}}</span>
            <span class="publicNum1 number-font">{{item.peopleNum}}</span>
            <span class="publicdw1" v-if="item.dw">{{item.dw}}</span>
            <span class="publicdw1 publicName2">同比</span>
            <span class="publicNum2 number-font">{{item.tb}}</span>
            <span class="publicNum2">%</span>
            <img src="./img/shang.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
  name: 'publicityTable',
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
.publicityTable{
  width: 100%;
  height: 100%;
  img{
    width: 13px;
    height: 13px;
    display: inline-block;
  }
  .publicList{
      width: 100%;
      height: 32%;
      margin-top: 5%;
      margin-bottom: 5%;
      background:linear-gradient(270deg,rgba(51,75,115,0) 0%,rgba(51,75,115,0.5) 50%,rgba(51,75,115,0) 100%);
      .publicName{
          font-size: 14px;
          line-height: 43px;
          font-weight: bold;
          margin: 0 2% 0 2%;
          text-align: center;
          width: 35%;
          display: inline-block;
          border-right: 1px solid rgba(183, 222, 255, 0.3);
      }
      .publicNum1{
          display: inline-block;
          width: 21%;
      }
      .publicdw1{
          font-size: 14px;
          display: inline-block;
          width: 12%;
      }
      .publicName2{
          margin-left: 0%!important;
      }
      .publicNum2{
          margin:0!important;
      }
  }
}
</style>
