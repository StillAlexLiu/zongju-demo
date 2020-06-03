<template>
    <div class="metMarket full" v-if="data.length>0">
       <container-with-left-border  class="full-height w-1-4 " v-for="(item,index) in data" :border="index!==0" :key="index">
         <div class="full metMarketCont ">
              <div class="name text-center h-2-5">{{item.name}}</div>
              <div class="value text-center">{{item.value}}<span>{{item.unit}}</span><img class="arrow" src="../images/arrow.png" v-if='index == 3'></div>
          </div>
       </container-with-left-border>
    </div>
</template>

<script>
export default {
  name: 'metMarket',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {},
  computed: {}
}
</script>

<style scoped lang="less">
.metMarket {
  .metMarketCont{
     padding-top: 7%;
  }
    .value {
        font-size: 22px;
    font-family: Impact;
    color: rgba(255, 187, 111, 1);
    letter-spacing: 2px;
        span{
          font-size: 12px;
          color: #fff;
          padding-left: 5px;
        }

    }
    .arrow{
      width: 10px;
    }
}
</style>
