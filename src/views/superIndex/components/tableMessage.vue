<template>
  <div class="tableMessage full">
      <div class="tableList" v-for="(item, index) in tabData" :key="index">
          <p class="list_name">{{item.name}}</p>
          <span class="list_num number-font">{{item.num}}</span>
          <span class="list_dw">{{item.dw}}</span>
          <span class="shu shu2" v-if="index == 1"></span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'tableMessgae',
  props: {
    tabData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
 .tableMessage{
    //  padding: 29px 5px 0 7px;
    margin-top: 5px;
     .tableList{
         width: 24%;
         height: 100%;
         margin-right: 0.9%;
         float: left;
         background:linear-gradient(270deg,rgba(51,75,115,0) 0%,rgba(51,75,115,0.5) 50%,rgba(51,75,115,0) 100%);
         position: relative;
     }
     .shu2{
       width: 1px;
       height: 100%;
       display: inline-block;
       position: absolute;
       right: 0;
       top: 0;
      //  float: left;
     }
     .shu{
       background: linear-gradient(0deg, rgba(206, 235, 255, 0.2) 0%, #b7deff 50%, rgba(160, 210, 255, 0.18) 100%) no-repeat center;
       background-size: 100% 70%;
     }
     p{
        margin: 0;
     }
     .list_name{
         text-align: center;
         width: 100%;
         height: 30px;
         line-height: 30px;
         font-size:16px;
         font-family:PingFangSC-Regular,PingFang SC;
         margin-top: 25px;
         margin-bottom: 10px;
         margin: 0;
     }
     .list_num{
         margin-left: 27%;
     }
     .list_dw{
         margin-left: 10%;
         font-size: 13px;
     }
 }
</style>
