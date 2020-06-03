<template>
    <div class="foodMarket full" v-if="data.length>0">
       <div  class="full-height w-1-4 bgImg" v-for="(item,index) in data" :key="index">
         <div class="full foodMarketCont ">
              <div class="value text-center number-font">{{item.value}}<span class="unit-font">{{item.unit}}</span></div>
              <div class="name text-center h-2-5">{{item.name}}</div>
          </div>
       </div>
    </div>
</template>

<script>
export default {
  name: 'foodMarketZBR',
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
    // background: url('../img/矩形@2x.png');
    // background-position: center;
    // background-repeat: no-repeat;
    // background-size: 100% 100%;
    background:linear-gradient(270deg,rgba(51,75,115,0) 0%,rgba(51,75,115,0.5) 50%,rgba(51,75,115,0) 100%);

  }
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
