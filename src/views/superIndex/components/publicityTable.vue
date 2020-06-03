<template>
    <div class="publicityTable">
        <div class="publicList" v-for="(item, index) in data" :key="index">
            <span class="publicName">{{item.title}}</span>
            <span class="publicNum1 number-font">{{item.peopleNum}}</span>
            <span class="publicdw1">{{item.unit1}}</span>
            <span class="publicdw1 publicName2">日均</span>
            <span class="publicNum1  number-font">{{item.day}}</span>
            <span class="publicdw1">{{item.unit2}}</span>
            <span class="publicdw2 publicName2">同比</span>
            <span class="publicNum2  number-font">{{item.tb}}</span>
            <span class="publicNum2">%</span>
            <img src="./img/shang.png" alt="" v-if="item.showPng == 1">
            <img src="./img/xia.png" alt="" v-else>
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
  .publicList{
      width: 100%;
      height: 32%;
      margin-bottom: 1%;
      background:linear-gradient(270deg,rgba(51,75,115,0) 0%,rgba(51,75,115,0.5) 50%,rgba(51,75,115,0) 100%);
      img{
        width: 15px;
        height: 15px;
      }
      .publicName{
          font-size: 15px;
          line-height: 53px;
          font-weight: bold;
          margin: 0 5% 0 3%;
      }
      .publicNum1{
          display: inline-block;
          width: 11%;
      }
      .publicdw1{
          font-size: 14px;
          display: inline-block;
          width: 10%;
      }
      .publicdw2{
          font-size: 14px;
          display: inline-block;
          width: 7%;
      }
      .publicName2{
          margin-left: 2%!important;
      }
      .publicNum2{
          margin:0!important;
      }
  }
}
</style>
