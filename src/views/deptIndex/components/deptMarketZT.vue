<template>
    <div class="depMarket full" v-if="data.length>0">
       <container-with-left-border  class="full-height w-1-4 " v-for="(item,index) in data" :border="index!==0" :key="index">
         <div class="full depMarketCont ">
              <div class="name text-center h-1-2">{{item.name}}</div>
              <div class="value text-center number-font">{{item.value}}<span>{{item.unit}}</span></div>
          </div>
       </container-with-left-border>
    </div>
</template>

<script>
export default {
  name: 'deptMarketZT',
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
.depMarket {
  .depMarketCont{
     padding-top: 3%;
  }

    .value {
        // font-family: 'LESLIE';
        // color: #3FD3D6;
        // font-size: 16px;
        // text-align: center;
        span{
          font-size: 12px;
          color: #fff;
          padding-left: 5px;
        }

    }
}
</style>
