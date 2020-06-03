<template>
    <div class="deptMinitEnt full" >
      <div class="full-height w-1-5 deptMinitEntLine" >
        <div class="h-1-2 lastPadding" v-for="(item, child) in data.data1" :key="item.name">
          <div class="value text-center h-3-5 number-font" v-if="child ==0">{{item.value}}<span>{{item.unit}}</span></div>
          <div class="name text-center h-2-5" v-if="child ==0">{{item.name}}</div>
           <div class="value text-center full-height dc number-font" v-else><span>{{item.name}}</span>{{item.value}}<Arrow dir="up"/></div>
        </div>
       </div>
       <div class="full-height w-4-5">
          <div class="h-1-2 deptPadding">
            <container-with-left-border class="full-height w-1-3 widthPercent" v-for="(item,index) in data.data2" :key="index" :border="index!==0" >
              <div class="name text-center h-2-5">{{item.name}}</div>
              <div class="value text-center h-3-5 number-font" v-if="index!=2">{{item.value}}<span>{{item.unit}}</span></div>
              <div class="value text-center h-3-5 number-font" v-else>{{item.value}}<span>{{item.text}}</span>{{item.value2}}<span>{{item.unit}}</span></div>
            </container-with-left-border>
          </div>
          <div class="h-1-2 deptPadding">
             <container-with-left-border class="full-height  w-1-2 " v-for="(item,indexs) in data.data3" :key="item.id" :border="indexs!==0" >
              <div class="name text-center h-2-5">{{item.name}}</div>
              <div class="value text-center h-3-5 number-font">{{item.value}}<span>{{item.unit}}</span></div>
             </container-with-left-border>
          </div>
        </div>
    </div>
</template>

<script>
import Arrow from '../../index/components/Arrow'
export default {
  name: 'deptMinitEnt',
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  methods: {
  },
  components: {
    Arrow
  }
}
</script>

<style scoped lang="less">
.deptMinitEnt {
  .deptPadding{
     padding: 2% 0;
     .name{
       padding-top: 5%;
     }
     .value{
       padding-top: 4%;
     }
     .widthPercent{
       &:nth-child(2){
         width: 25%;
       }
       &:nth-child(3){
         width: 41%;
       }
     }
  }
  // .ContainerWithLeftBorder{
  //   &:nth-child(3){
  //     .value{
  //       font-size:22px;
  //       }
  //     }
  // }
  .deptMinitEntLine{
     background:url('../img/entityBg@2x.png');
    background-size: 100% 100%;
  }
  .lastPadding{
    padding: 6% 0;

    .name{
       padding-top: 3%;
     }
     .value{
       padding-top: 20%;
      //  font-size: 18px;
       &:last-child{
         padding-top: 25%;
        //  font-size: 16px;
       }
     }
  }
    .value {
        // font-family: 'LESLIE';
        // color: #3FD3D6;
        // font-size: 16px;
        // text-align: center;
        span{
          // font-size: 12px;
          color: #fff;
          padding-left: 1px;
        }

    }
}
</style>
