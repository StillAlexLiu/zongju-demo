<template>
    <div class="foodMarket full" v-if="data.length>0">
       <div  class="full-width h-1-3 bgImg" v-for="(item,index) in data" :key="index">
         <div class="full foodMarketCont">
              <div class="value"><span class="w-2-5 text-center">{{item.name}}</span><span class="number-font w-2-5">{{item.value}}</span><span class="unit-font w-1-5">{{item.unit}}</span></div>
          </div>
       </div>
    </div>
</template>

<script>
export default {
  name: 'foodMarketMain',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
.foodMarket {
  background: url('../img/分组 9 copy@2x.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .bgImg{
  }
  .foodMarketCont{
  }

    .value {
      span:first-child{
        padding-top: 18px;
      }
      span:nth-child(2){
        padding-left: 25px;
        line-height: 75px;
      }
      span:nth-child(3){
        padding-top: 30px;
      }
    }
}
</style>
