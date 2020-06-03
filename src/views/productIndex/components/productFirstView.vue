<template>
    <div class="productFirstView full" v-if="data.length>0">
      <div class="full-width produtTitle">{{title}}</div>
      <div class="full-width produtTitleContV">
        <div class="full-height w-1-4 productFirstViewCont " :class="{'h-1-2':data.length > 4}" v-for="(item,index) in data" :border="index!==0" :key="index">
         <container-with-left-border class="full">
         <div class="full productFirstViewLi ">
              <div class="name text-center h-1-2">{{item.name}}</div>
              <div class="value text-center number-font">{{item.value}}<span>{{item.unit}}</span></div>
          </div>
       </container-with-left-border>
      </div>
      </div>

    </div>
</template>

<script>
export default {
  name: 'productFirstView',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
.productFirstView {
  // padding-bottom: 15px;s
  .produtTitleContV {
    height: calc(100% - 27px);
  }
  .productFirstViewCont{
    padding-top: 5px;
    &:nth-child(n+5){
      margin-top: 2px;
    }
  }
  .produtTitle{
    text-indent: 10px;
    line-height: 16px;
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
