<template>
    <div class="foodMarket full" v-if="data.length>0">
       <div  class="w-1-2 h-2-6 bgImg" v-for="(item,index) in data" :key="index">
         <div class="full foodMarketCont ">
              <div class="value"><span>{{item.name}}</span><span class=" number-font">{{item.value}}</span><span class="unit-font">{{item.unit}}</span></div>
          </div>
       </div>
    </div>
</template>

<script>
export default {
  name: 'foodMarketTS',
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
      padding-top: 10px;
        span{
          padding-left: 5px;
        }
    }
}
</style>
