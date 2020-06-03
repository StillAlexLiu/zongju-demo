<template>
    <div class="publicityTable">
        <div class="publicList" v-for="(item, index) in data" :key="index">
            <span class="publicName">
                <span class="publicNum">{{item.title}}</span>
                <span class="publicNum1 number-font">{{item.peopleNum0}}</span>
                <span class="unit-font">{{item.dw0}}</span>
            </span>
            <span class="publicdw1 publicName2">{{item.name1}}</span>
            <span class="publicNum1 number-font">{{item.peopleNum}}</span>
            <span class="unit-font">{{item.dw}}</span>
            <span class="publicdw1 publicName2">{{item.name2}}</span>
            <span class="publicNum1 number-font">{{item.tb}}</span>
            <span class="unit-font">{{item.dw2}}</span>
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
      height: 100%;
      margin-top: 5%;
      background:linear-gradient(270deg,rgba(51,75,115,0) 0%,rgba(51,75,115,0.5) 50%,rgba(51,75,115,0) 100%);
      .publicNum{
        font-size: 15px;
        font-weight: bold;
      }
      .publicName{
          line-height: 50px;
          padding-right: 2%;
          text-align: center;
          width: 50%;
          display: inline-block;
          border-right: 1px solid rgba(183, 222, 255, 0.3);
      }
      .publicNum1{
          margin: 0 1% 0 0%;
      }
      .publicdw1{
          font-size: 14px;
          margin: 0 2% 0 0%;
      }
      .publicName2{
          margin-left: 1%!important;
      }
      .publicNum2{
          color: rgba(63, 211, 214, 1);
          font-size: 18px;
          font-weight: bold;
          margin:0!important;
      }
  }
}
</style>
