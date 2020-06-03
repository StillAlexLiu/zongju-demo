<template>
    <div class="foodMarket full" v-if="data.length>0">
        <div class="full-height w-1-4 bgImg" v-for="(item,index) in data" :key="index">
            <div class="full foodMarketCont ">
                <div class="value text-center number-font h-4-6 w-4-5">{{item.value}}
                    <br><span class="unit-font">{{item.unit}}</span>
                </div>
                <div class="name text-center h-1-5 w-4-5">{{item.name}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'foodMarketZB',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {}
}
</script>

<style scoped lang="less">
.foodMarket {
    .bgImg {
    }

    .foodMarketCont {
        padding-top: 7%;

        .value {
            background: url('../img/多边形@2x.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            /*line-height: 95px;*/
            /*padding-left: 15px;*/
            padding-top: 35px;
        }

        .name {
            padding: 15px;
        }
    }

    .value {
        padding-top: 10px;

        span {
            padding-left: 5px;
        }
    }

    .number-font {
        color: #fff;
    }
}
</style>
