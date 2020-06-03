<template>
    <div class="foodMarket full" v-if="data.length>0">
       <container-with-left-border  class="full-height w-1-4 " v-for="(item,index) in data" :border="index!==0" :key="index">
         <div class="full foodMarketCont ">
              <div class="name text-center h-2-5">{{item.name}}</div>
              <div class="value text-center number-font">{{item.value}}<span class="unit-font">{{item.unit}}</span></div>
          </div>
       </container-with-left-border>
    </div>
</template>

<script>
export default {
  name: 'foodMarketZT',
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
  .foodMarketCont{
     padding-top: 7%;
  }

    .value {
        span{
          padding-left: 5px;
        }

    }
}
</style>
