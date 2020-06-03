<template>
    <div class="productFirstView full" v-if="data.length>0">
      <div class="full-width produtTitle"><span>{{title}}</span></div>
      <div class="productFirstViewLi">
      <div class="full-width produtTitleContV full-height">
        <div class="full-height w-1-4 productFirstViewCont " :class="{'h-1-2':data.length > 4}" v-for="(item,index) in data" :border="index!==0" :key="index">
         <div class="full">
              <div class="name text-center h-1-2">{{item.name}}</div>
              <div class="value text-center number-font">{{item.value}}<span>{{item.unit}}</span></div>
          </div>
      </div>
      </div>
      </div>

    </div>
</template>

<script>
export default {
  name: 'productShizhongOne',
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
    // background:linear-gradient(270deg,rgba(51,75,115,0) 0%,rgba(51,75,115,0.5) 50%,rgba(51,75,115,0) 100%);
  }
  .productFirstViewLi{
    height: calc(100% - 27px);
    padding:5px 0
  }
  .productFirstViewCont{
    padding:5px 0;
    &:nth-child(n+5){
      margin-top: 2px;
    }
  }
  .produtTitle{
    text-indent: 10px;
    span{
      padding: 2px 10px;
    background: -webkit-gradient(linear, right top, left top, from(#243b53), to(rgba(43, 137, 254, 0.48)));
    background: linear-gradient(270deg, #243b53 0%, rgba(43, 137, 254, 0.48) 100%);
    }
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
