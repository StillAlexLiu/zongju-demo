<template>
  <div class="goUnderMessage">
    <div class="messList" v-for="(item, index) in data" :key="index">
        <p class="list_name">{{item.name}}</p>
          <span class="number-font">{{item.num1}}</span>
          <span class="list_dw">{{item.unit1}}</span>
          <span class="percent-font">{{item.num2}}</span>
          <span class="list_dw">%</span>
          <img src="./img/shang.png" alt="" v-if="item.showImg == 1">
          <img src="./img/xia.png" alt="" v-else>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tableMessage2',
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

<style lang="less" scoped>
.goUnderMessage{
//   padding:32px 28px 0 20px;
  .messList{
    width: 31%;
    height: 76px;
    float: left;
    margin-right: 2%;
    background:linear-gradient(270deg,rgba(51,75,115,0) 0%,rgba(51,75,115,0.5) 50%,rgba(51,75,115,0) 100%);
    .list_name{
      text-align: center;
      font-size: 14px;
      line-height: 25px;
      margin-top: 10px;
    }
    .list_num1{
      color: rgba(255, 187, 111, 1);
      font-size: 18px;
    }
    .list_dw{
      margin-left: 1px;
      margin-right: 5px;
    }
    img{
      width: 15px;
      height: 15px;
    }
    .list_num2{
      font-size: 14px;
    }
    .else_box{
        text-align: center;
    }
  }
}
</style>
