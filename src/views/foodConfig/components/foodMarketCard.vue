<template>
    <div class="foodMarket full" v-if="data.length>0">
       <div  class="full-width h-1-3 bgImg" v-for="(item,index) in data" :key="index">
         <div class="full foodMarketCont">
              <div class="value"><span>{{item.name}}</span><span class="number-font">{{item.value}}</span><span class="unit-font">{{item.unit}}</span></div>
          </div>
       </div>
    </div>
</template>

<script>
export default {
  name: 'foodMarketCard',
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
  .bgImg{
  }
  .foodMarketCont{
  }

    .value {
      padding-left: 10px;
      padding-top: 10px;
        span{
        }
        & span:first-child{
          padding-right: 20px;
        }
    }
}
</style>
